import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

// Fallback to avoid crashing if env vars are missing during development
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
    : null;

export async function POST(req: NextRequest) {
    if (!redis) {
        return NextResponse.json({ total: 6040, unique: 4255, error: "Redis not configured" });
    }

    try {
        // Try to get IP from headers
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
        
        // Increment total views
        const totalViews = await redis.incr("pageviews:total");
        
        // Add IP to a HyperLogLog for unique visitors
        if (ip !== "unknown") {
            await redis.pfadd("pageviews:unique", ip);
        }
        
        // Get unique count
        const uniqueViews = await redis.pfcount("pageviews:unique");

        return NextResponse.json({ total: totalViews, unique: uniqueViews });
    } catch (error) {
        console.error("Redis Error:", error);
        return NextResponse.json({ total: 6040, unique: 4255, error: "Failed to update views" });
    }
}

export async function GET() {
    if (!redis) {
        return NextResponse.json({ total: 6040, unique: 4255, error: "Redis not configured" });
    }

    try {
        const totalViews = await redis.get("pageviews:total") || 0;
        const uniqueViews = await redis.pfcount("pageviews:unique") || 0;
        return NextResponse.json({ total: totalViews, unique: uniqueViews });
    } catch (error) {
        console.error("Redis Error:", error);
        return NextResponse.json({ total: 6040, unique: 4255, error: "Failed to fetch views" });
    }
}
