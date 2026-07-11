import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
    try {
        const username = process.env.LEETCODE_USERNAME;
        
        if (!username) {
            return NextResponse.json({ error: 'LeetCode username not configured' }, { status: 400 });
        }

        const [profileRes, solvedRes, calendarRes, badgesRes, languageRes] = await Promise.all([
            fetch(`https://alfa-leetcode-api.onrender.com/${username}`),
            fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
            fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`),
            fetch(`https://alfa-leetcode-api.onrender.com/${username}/badges`),
            fetch(`https://alfa-leetcode-api.onrender.com/${username}/language`)
        ]);
        
        if (!profileRes.ok || !solvedRes.ok) {
            console.warn(`LeetCode API responded with an error. Returning fallback data.`);
            return NextResponse.json({
                profile: {
                    realName: username,
                    aboutMe: "LeetCode stats currently unavailable.",
                    company: null,
                    school: null,
                    countryName: null,
                    ranking: 0,
                    reputation: 0,
                    starRating: 0
                },
                stats: {
                    totalSolved: 0,
                    easySolved: 0,
                    mediumSolved: 0,
                    hardSolved: 0,
                    totalSubmissions: 0,
                    acSubmissions: 0,
                    acceptanceRate: "0.0"
                },
                calendar: {},
                badges: [],
                languageStats: []
            });
        }

        const profileData = await profileRes.json();
        const solvedData = await solvedRes.json();
        
        // Fetch optional data (can fail gracefully or just return empty)
        const calendarRaw = calendarRes.ok ? await calendarRes.json() : null;
        const badgesData = badgesRes.ok ? await badgesRes.json() : { badges: [] };
        const languageData = languageRes.ok ? await languageRes.json() : { languageProblemCount: [] };
        
        if (profileData.errors || solvedData.errors) {
            console.warn('User does not exist or API returned GraphQL error. Returning fallback data.');
            return NextResponse.json({
                profile: {
                    realName: username,
                    aboutMe: "LeetCode stats currently unavailable.",
                    company: null,
                    school: null,
                    countryName: null,
                    ranking: 0,
                    reputation: 0,
                    starRating: 0
                },
                stats: {
                    totalSolved: 0,
                    easySolved: 0,
                    mediumSolved: 0,
                    hardSolved: 0,
                    totalSubmissions: 0,
                    acSubmissions: 0,
                    acceptanceRate: "0.0"
                },
                calendar: {},
                badges: [],
                languageStats: []
            });
        }

        const totalSubmissions = solvedData.totalSubmissionNum?.[0]?.submissions || 0;
        const acSubmissions = solvedData.acSubmissionNum?.[0]?.submissions || 0;
        const acceptanceRate = totalSubmissions > 0 ? ((acSubmissions / totalSubmissions) * 100).toFixed(1) : 0;

        // Parse Calendar Data for Heatmap
        let parsedCalendar: Record<string, { level: number; count: number }> = {};
        if (calendarRaw && calendarRaw.submissionCalendar) {
            try {
                // submissionCalendar is a JSON string of UNIX timestamp string keys -> int values
                const calendarObj = JSON.parse(calendarRaw.submissionCalendar);
                for (const [timestamp, count] of Object.entries(calendarObj)) {
                    // Convert UNIX timestamp to YYYY-MM-DD string
                    const date = new Date(parseInt(timestamp) * 1000);
                    const y = date.getFullYear();
                    const m = String(date.getMonth() + 1).padStart(2, "0");
                    const d = String(date.getDate()).padStart(2, "0");
                    const dateString = `${y}-${m}-${d}`;
                    
                    const numCount = count as number;
                    let level = 0;
                    if (numCount >= 10) level = 4;
                    else if (numCount >= 5) level = 3;
                    else if (numCount >= 2) level = 2;
                    else if (numCount >= 1) level = 1;
                    
                    parsedCalendar[dateString] = { level, count: numCount };
                }
            } catch(e) {
                console.error("Error parsing submissionCalendar", e);
            }
        }

        // Format the data for our frontend component
        const formattedData = {
            totalSolved: solvedData.solvedProblem || 0,
            easySolved: solvedData.easySolved || 0,
            mediumSolved: solvedData.mediumSolved || 0,
            hardSolved: solvedData.hardSolved || 0,
            ranking: profileData.ranking || 0,
            reputation: profileData.reputation || 0,
            acceptanceRate: acceptanceRate,
            calendar: parsedCalendar,
            badges: badgesData.badges || [],
            upcomingBadges: badgesData.upcomingBadges || [],
            languages: languageData.languageProblemCount || []
        };

        return NextResponse.json(formattedData);
    } catch (error: any) {
        console.error('LeetCode fetch error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch LeetCode stats', details: error.message },
            { status: 500 }
        );
    }
}
