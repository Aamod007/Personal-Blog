'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, animate, useTransform } from 'framer-motion';
import { Bot, BarChart2, Users, Eye, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ViewTracker() {
    const [isOpen, setIsOpen] = useState(false);
    const countTotal = useMotionValue(0);
    const countUnique = useMotionValue(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const displayTotal = useTransform(countTotal, (latest) => 
        isLoaded ? Math.round(latest).toLocaleString() : '0'
    );
    const displayUnique = useTransform(countUnique, (latest) => 
        isLoaded ? Math.round(latest).toLocaleString() : '0'
    );

    useEffect(() => {
        // Track the visit on component mount
        fetch('/api/views', { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                if (data.total !== undefined && data.unique !== undefined) {
                    setIsLoaded(true);
                    animate(countTotal, data.total, { duration: 2, ease: "easeOut" });
                    animate(countUnique, data.unique, { duration: 2, ease: "easeOut" });
                }
            })
            .catch(console.error);
    }, []);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Main Button */}
            <motion.button
                className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Bot className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                <span className="text-xs md:text-sm font-bold tracking-widest font-mono">
                    <motion.span>{displayTotal}</motion.span> VIEWS
                </span>
            </motion.button>

            {/* Dropdown/Popover */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden z-50 p-5"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h4 className="text-xs font-bold tracking-[0.2em] text-foreground/80 mb-1">
                                    TRAFFIC INSIGHTS
                                </h4>
                                <p className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                                    UPSTASH_REDIS_CACHED
                                </p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                        </div>
                        
                        <div className="h-[1px] w-full bg-border/50 mb-6" />

                        {/* Stats List */}
                        <div className="flex flex-col gap-5">
                            {/* Session */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                                    <BarChart2 className="w-5 h-5 text-foreground/80" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-muted-foreground/80 uppercase mb-0.5">
                                        Session
                                    </p>
                                    <p className="text-sm font-black text-emerald-500 tracking-widest uppercase">
                                        Tracked
                                    </p>
                                </div>
                            </div>

                            {/* Unique Visitors */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-5 h-5 text-foreground/80" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-muted-foreground/80 uppercase mb-0.5">
                                        Unique Visitors
                                    </p>
                                    <p className="text-sm font-black text-foreground tracking-widest">
                                        <motion.span>{displayUnique}</motion.span>
                                    </p>
                                </div>
                            </div>

                            {/* Total Views */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-5 h-5 text-foreground/80" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-muted-foreground/80 uppercase mb-0.5">
                                        Total Views
                                    </p>
                                    <p className="text-sm font-black text-foreground tracking-widest">
                                        <motion.span>{displayTotal}</motion.span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 pt-4 border-t border-border/50 text-center">
                            <p className="text-[9px] font-mono tracking-[0.2em] text-muted-foreground/40 uppercase">
                                Live counts from Upstash Redis
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
