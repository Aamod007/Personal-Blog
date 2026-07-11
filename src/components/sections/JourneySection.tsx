'use client';

import React, { useMemo } from 'react';
import { portfolioData } from '@/data/portfolio';
import { HorizontalTimeline, TimelineEntry } from '@/components/ui/horizontal-timeline';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function JourneySection() {
    const journeyData = useMemo<TimelineEntry[]>(() => {
        // Filter for specific requested experiences
        const includedExperiences = portfolioData.experiences.filter(exp => {
            const comp = exp.company.toLowerCase();
            const pos = exp.position.toLowerCase();

            if (comp.includes('amazon')) return true;
            if (comp.includes('futurence')) return true;
            if (comp.includes('hacktober')) return true;
            if (comp.includes('letsupgrade') || comp.includes('lets upgrade')) return true;
            if ((comp.includes('swoc') || comp.includes('social winter of code')) && !pos.includes('contributor')) return true;
            if ((comp.includes('gssoc') || comp.includes('girlscript')) && pos.includes('mentor')) return true;
            
            return false;
        });

        // Sort experiences from newest to oldest
        const sortedExperiences = [...includedExperiences].sort(
            (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );

        const data: TimelineEntry[] = sortedExperiences.map((exp) => ({
            title: exp.position,
            period: `${formatDate(exp.startDate)} - ${exp.endDate ? formatDate(exp.endDate) : 'Present'}`,
            content: (
                <div className="flex flex-col gap-4 w-[320px] md:w-[400px] border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-xl mt-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">{exp.position}</h4>
                        </div>
                    </div>
                    <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1 line-clamp-3">
                        {exp.description}
                    </p>
                    {exp.logo && (
                        <div className="w-full h-32 relative overflow-hidden rounded-lg mt-2 group/card">
                            <Image
                                alt={exp.company}
                                className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:scale-105"
                                src={exp.logo}
                                fill
                            />
                        </div>
                    )}
                </div>
            )
        }));

        // Add the end card that links to the full experience page
        data.push({
            title: 'View More',
            isEnd: true,
            content: (
                <Link className="relative flex items-center h-[140px] w-[250px] z-30 group" href="/experience">
                    <div className="flex items-center gap-4">
                        <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                            <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap drop-shadow-sm">
                            View more
                        </span>
                    </div>
                </Link>
            )
        });

        return data;
    }, []);

    return (
        <div className="relative w-full z-20 bg-background">
            <HorizontalTimeline data={journeyData} />
        </div>
    );
}
