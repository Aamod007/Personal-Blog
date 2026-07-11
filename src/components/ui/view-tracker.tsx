'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, animate, useTransform } from 'framer-motion';
import { Bot, BarChart2, Users, Eye, Activity } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

function GridSnake({ isDark }: { isDark: boolean }) {
    const [pathX, setPathX] = useState<number[]>([]);
    const [pathY, setPathY] = useState<number[]>([]);
    
    useEffect(() => {
        const cols = 16;
        const rows = 5;
        const gridSize = 16;
        
        let x = Math.floor(Math.random() * cols) * gridSize;
        let y = Math.floor(Math.random() * rows) * gridSize;
        
        const px = [x];
        const py = [y];
        
        for (let i = 0; i < 40; i++) {
            const isHorizontal = Math.random() > 0.5;
            const step = (Math.random() > 0.5 ? 1 : -1) * gridSize;
            
            if (isHorizontal) {
                x += step;
                if (x < 0) x = (cols - 1) * gridSize;
                else if (x >= cols * gridSize) x = 0;
            } else {
                y += step;
                if (y < 0) y = (rows - 1) * gridSize;
                else if (y >= rows * gridSize) y = 0;
            }
            
            px.push(x);
            py.push(y);
        }
        setPathX(px);
        setPathY(py);
    }, []);

    if (pathX.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-700">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "absolute top-0 left-0 w-[16px] h-[16px]",
                        isDark ? (i === 0 ? "bg-white/20" : "bg-white/10") : (i === 0 ? "bg-black/20" : "bg-black/10")
                    )}
                    animate={{
                        x: pathX,
                        y: pathY,
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.15
                    }}
                />
            ))}
        </div>
    )
}

export function ViewTracker() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
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
                className={cn(
                    "flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2.5 rounded-full border transition-colors group",
                    isDark ? "bg-[#161616] border-white/10 hover:bg-[#1f1f1f] hover:border-white/20" : "bg-white border-black/10 hover:bg-black/[0.02] hover:border-black/20"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Bot className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:scale-125 group-hover:rotate-12" />
                <span className="text-xs md:text-sm font-bold tracking-widest font-mono text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
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
                        className={cn(
                            "absolute right-0 top-full mt-2 w-72 rounded-2xl border shadow-2xl overflow-hidden z-50 p-5",
                            isDark ? "bg-[#0a0a0a] border-white/10 shadow-black/80" : "bg-white border-black/10 shadow-black/5"
                        )}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h4 className={cn(
                                    "text-xs font-bold tracking-[0.2em] mb-1 transition-colors duration-300",
                                    isDark ? "text-white" : "text-black"
                                )}>
                                    TRAFFIC INSIGHTS
                                </h4>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                        </div>

                        {/* Stats List - Bento Style */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* Session */}
                            <div className={cn(
                                "col-span-2 group relative flex items-center justify-between rounded-2xl border p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden",
                                isDark ? "bg-[#161616] hover:bg-[#1f1f1f] border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/50" : "bg-black/[0.02] hover:bg-white border-black/10 hover:border-black/20 hover:shadow-xl hover:shadow-black/10"
                            )}>
                                {/* Subtle Grid Background */}
                                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                                
                                {/* Random Snake Animation */}
                                <GridSnake isDark={isDark} />
                                
                                <div className="relative z-10">
                                    <p className={cn(
                                        "font-bold text-sm mb-1 transition-colors duration-300",
                                        isDark ? "text-white" : "text-black"
                                    )}>
                                        Session
                                    </p>
                                    <p className="text-[11px] font-bold leading-relaxed text-emerald-500">
                                        Tracked
                                    </p>
                                </div>
                                <div className="relative z-10 flex items-center justify-center transition-colors">
                                    <BarChart2 className={cn("w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3", isDark ? "text-white/40 group-hover:text-white/80" : "text-black/40 group-hover:text-black/80")} />
                                </div>
                            </div>

                            {/* Unique Visitors */}
                            <div className={cn(
                                "group relative flex flex-col justify-center rounded-2xl border p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden",
                                isDark ? "bg-[#161616] hover:bg-[#1f1f1f] border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/50" : "bg-black/[0.02] hover:bg-white border-black/10 hover:border-black/20 hover:shadow-xl hover:shadow-black/10"
                            )}>
                                <div className="flex items-start justify-between relative z-10">
                                    <div>
                                        <p className={cn(
                                            "font-bold text-sm mb-1.5 transition-colors duration-300",
                                            isDark ? "text-white" : "text-black"
                                        )}>
                                            Unique
                                        </p>
                                        <p className={cn(
                                            "text-[11px] font-medium leading-relaxed transition-colors duration-300",
                                            isDark ? "text-white/60 group-hover:text-white/80" : "text-black/60 group-hover:text-black/80"
                                        )}>
                                            <motion.span>{displayUnique}</motion.span> views
                                        </p>
                                    </div>
                                    <div className={cn("p-1.5 rounded-xl transition-colors duration-300", isDark ? "group-hover:bg-white/10" : "group-hover:bg-black/5")}>
                                        <Users className={cn("w-4 h-4 mt-0.5 flex-shrink-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12", isDark ? "text-white/40 group-hover:text-white/80" : "text-black/40 group-hover:text-black/80")} />
                                    </div>
                                </div>
                            </div>

                            {/* Total Views */}
                            <div className={cn(
                                "group relative flex flex-col justify-center rounded-2xl border p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden",
                                isDark ? "bg-[#161616] hover:bg-[#1f1f1f] border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/50" : "bg-black/[0.02] hover:bg-white border-black/10 hover:border-black/20 hover:shadow-xl hover:shadow-black/10"
                            )}>
                                <div className="flex items-start justify-between relative z-10">
                                    <div>
                                        <p className={cn(
                                            "font-bold text-sm mb-1.5 transition-colors duration-300",
                                            isDark ? "text-white" : "text-black"
                                        )}>
                                            Total
                                        </p>
                                        <p className={cn(
                                            "text-[11px] font-medium leading-relaxed transition-colors duration-300",
                                            isDark ? "text-white/60 group-hover:text-white/80" : "text-black/60 group-hover:text-black/80"
                                        )}>
                                            <motion.span>{displayTotal}</motion.span> views
                                        </p>
                                    </div>
                                    <div className={cn("p-1.5 rounded-xl transition-colors duration-300", isDark ? "group-hover:bg-white/10" : "group-hover:bg-black/5")}>
                                        <Eye className={cn("w-4 h-4 mt-0.5 flex-shrink-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12", isDark ? "text-white/40 group-hover:text-white/80" : "text-black/40 group-hover:text-black/80")} />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
