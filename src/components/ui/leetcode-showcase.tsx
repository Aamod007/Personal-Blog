"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import {
  Code2,
  Maximize2,
  Minimize2,
  Trophy,
  Percent,
  Star,
  Activity,
  Award
} from 'lucide-react';
import { GithubCalendar } from './retro-space-shooter-git-hub-calendar';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { useLenis } from 'lenis/react';


const Counter = ({ value, duration = 1.5, trigger = true }: { value: string | number, duration?: number, trigger?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetValue = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) || 0 : value;

  useEffect(() => {
    if (isInView && trigger && targetValue > 0) {
      const controls = animate(0, targetValue, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, trigger, targetValue, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export const LeetCodeShowcase = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (isExpanded) {
      if (lenis) lenis.stop();
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      if (lenis) lenis.start();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      if (lenis) lenis.start();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isExpanded, lenis]);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark") || document.body.classList.contains("dark"));
    
    fetch('/api/leetcode-stats')
      .then(r => r.ok ? r.json() : null)
      .then(result => { if (result) setData(result); })
      .catch(e => console.error("LeetCode fetch failed:", e))
      .finally(() => setLoading(false));
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "Total Solved", value: loading ? "..." : (data?.totalSolved || "0"), color: "#ffa116" },
    { label: "Easy", value: loading ? "..." : (data?.easySolved || "0"), color: "#00b8a3" },
    { label: "Medium", value: loading ? "..." : (data?.mediumSolved || "0"), color: "#ffc01e" },
    { label: "Hard", value: loading ? "..." : (data?.hardSolved || "0"), color: "#ef4743" },
  ];

  const badges = data?.badges || [];
  const upcomingBadges = data?.upcomingBadges || [];
  const displayBadges = badges.length > 0 ? badges : upcomingBadges;
  const languages = data?.languages || [];

  const leetcodeTheme = {
    level0: isDark ? "#161b22" : "#ebedf0",
    level1: "#ffde99",
    level2: "#ffc01e",
    level3: "#ffa116",
    level4: "#e88600"
  };

  const springTransition = { type: "spring", damping: 25, stiffness: 120 };

  return (
    <section id='leetcode-stats' className='w-full max-w-[1700px] mx-auto px-6 py-6'>
      <motion.div
        layout
        transition={springTransition}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn(
          "relative bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-700",
          isExpanded ? "p-8 md:p-12" : "p-8 md:p-10 cursor-pointer group/master",
          loading && "opacity-50"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <motion.button
          layout
          onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-8 right-8 z-50 p-4 bg-black dark:bg-[#ffa116] text-white dark:text-black rounded-full shadow-2xl"
        >
          {isExpanded ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
        </motion.button>

        <motion.div layout className="flex flex-col md:flex-row items-start justify-between w-full gap-8 relative z-10">
          <motion.div layout className="space-y-6 max-w-2xl">
            <motion.div layout className="flex items-center gap-3 text-[#ffa116]">
              <Code2 className="w-8 h-8" />
              <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">LeetCode Metrics</span>
            </motion.div>

            <motion.h2 layout className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9em] text-black dark:text-white">
              Algorithmic{" "}
              <span className="flex items-center gap-2">
                Velocity <span className="text-[#ffa116]">Analyzed.</span>
              </span>
            </motion.h2>

            <motion.div layout className="flex flex-wrap gap-8 items-center pt-4">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black tabular-nums tracking-tighter flex items-baseline gap-1" style={{ color: s.color }}>
                    <Counter value={s.value} trigger={!loading} />
                  </span>
                  <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {!isExpanded && (
            <motion.p layout className="max-w-sm font-semibold text-lg text-black/50 dark:text-white/40 leading-relaxed pt-12 md:pt-20">
              Real-time algorithmic problem solving statistics streamed directly from the LeetCode API.
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal Overlay */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-white/70 dark:bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setIsExpanded(false)}
              data-lenis-prevent
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={springTransition}
                className="relative w-full max-w-[1600px] mx-auto my-10 px-4 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-[3rem] shadow-2xl p-6 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setIsExpanded(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-8 right-8 z-50 p-4 bg-black dark:bg-[#ffa116] text-white dark:text-black rounded-full shadow-2xl"
                >
                  <Minimize2 size={24} />
                </motion.button>

                <div className='flex flex-col md:flex-row items-start justify-between w-full gap-8 mb-10'>
                  <div className="space-y-6 max-w-2xl">
                    <div className="flex items-center gap-3 text-[#ffa116]">
                      <Code2 className="w-8 h-8" />
                      <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">LeetCode Metrics</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9em] text-black dark:text-white">
                      Algorithmic{" "}
                      <span className="flex items-center gap-2">
                        Velocity <span className="text-[#ffa116]">Analyzed.</span>
                      </span>
                    </h2>
                  </div>
                </div>

                <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4", loading ? "opacity-30 blur-sm" : "opacity-100 blur-0")}>
                  {/* 1. Contribution Map (Heatmap) */}
                  <div className="lg:col-span-2 relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-8 border border-border/10">
                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                      <div className="flex flex-col items-start gap-2">
                        <p className="text-black/30 dark:text-white/20 text-[10px] font-black uppercase tracking-widest ml-4">Yearly Submissions</p>
                        <motion.h3
                          whileHover={{ scale: 1.1, rotate: 0 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-[#ffa116] text-black px-8 py-3 rounded-full text-xl font-black -rotate-1 shadow-lg hover:shadow-[#ffa116]/50 hover:shadow-2xl transition-all w-fit cursor-pointer"
                        >
                          Activity Heatmap
                        </motion.h3>
                      </div>
                      <div className="w-full overflow-x-auto py-4 scrollbar-hide relative github-calendar-wrapper">
                        {data?.calendar && (
                          <GithubCalendar 
                            username={undefined} 
                            data={data.calendar}
                            theme={leetcodeTheme}
                            cellSize={15} 
                            cellGap={4} 
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 2. Global Stats */}
                  <div className="relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-6 lg:p-8 border border-border/10 flex flex-col h-full gap-4">
                    <div className="p-5 rounded-2xl bg-white dark:bg-black border border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-2 h-full group hover:border-[#ffa116]/50 transition-colors">
                      <Trophy className="w-8 h-8 text-[#ffa116]" />
                      <div className="text-4xl font-black tabular-nums text-black dark:text-white">
                        <Counter value={data?.ranking || 0} trigger={isExpanded} />
                      </div>
                      <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Global Ranking</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white dark:bg-black border border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-2 h-full group hover:border-[#00b8a3]/50 transition-colors">
                      <Percent className="w-8 h-8 text-[#00b8a3]" />
                      <div className="text-4xl font-black tabular-nums text-black dark:text-white">
                        {data?.acceptanceRate || 0}%
                      </div>
                      <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Acceptance Rate</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white dark:bg-black border border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-2 h-full group hover:border-[#ffc01e]/50 transition-colors">
                      <Star className="w-8 h-8 text-[#ffc01e]" />
                      <div className="text-4xl font-black tabular-nums text-black dark:text-white">
                        <Counter value={data?.reputation || 0} trigger={isExpanded} />
                      </div>
                      <div className="text-[10px] font-black uppercase opacity-40 tracking-widest">Reputation</div>
                    </div>
                  </div>

                  {/* 3. Badges Showcase */}
                  <div className="lg:col-span-2 relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-8 border border-border/10 flex flex-col h-full justify-between gap-6">
                    <div className="relative z-10 flex flex-col h-full gap-6">
                      <div className="flex flex-col items-start gap-2">
                        <motion.h3
                          whileHover={{ scale: 1.1, rotate: 0 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-black px-10 py-3 rounded-full text-xl font-black -rotate-1 shadow-xl hover:shadow-white/50 hover:shadow-2xl transition-all cursor-pointer"
                        >
                          Achievements & Badges
                        </motion.h3>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        {displayBadges.length > 0 ? (
                          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 w-full px-6">
                            {displayBadges.map((badge: any, idx: number) => (
                              <motion.div key={idx} whileHover={{ scale: 1.3, rotate: -10 }} className="relative flex flex-col justify-center items-center gap-2 w-full">
                                <img 
                                  src={badge.icon.startsWith('/') ? `https://leetcode.com${badge.icon}` : badge.icon} 
                                  alt={badge.name} 
                                  className="w-16 h-16 drop-shadow-xl" 
                                />
                                <span className="text-[8px] font-bold uppercase tracking-wider text-center opacity-50 line-clamp-1 w-[200%] max-w-none">
                                  {badge.name}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-sm opacity-50 text-center">No badges earned yet</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 4. Language Mastery */}
                  <div className="relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-6 lg:p-8 border border-border/10 flex flex-col h-full">
                    <div className="flex flex-col items-start gap-2 mb-6 shrink-0">
                      <motion.h3
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#ffa116] text-black px-8 py-3 rounded-full text-xl font-black rotate-1 shadow-lg hover:shadow-[#ffa116]/50 hover:shadow-2xl transition-all w-fit cursor-pointer"
                      >
                        Stack Mastery
                      </motion.h3>
                    </div>

                    <div className="flex flex-col gap-6 justify-center flex-1">
                      {languages.length > 0 ? (
                        languages.slice(0, 5).map((lang: any, idx: number) => {
                          const total = data?.totalSolved || 1;
                          const percent = Math.min(100, (lang.problemsSolved / total) * 100);
                          return (
                            <div key={idx} className="space-y-2">
                              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tight">
                                <span>{lang.languageName}</span>
                                <span className="opacity-50">{Math.round(percent)}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }} 
                                  animate={{ width: `${percent}%` }} 
                                  transition={{ duration: 1, delay: idx * 0.1 }} 
                                  className="h-full rounded-full bg-[#ffa116]" 
                                />
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-sm opacity-50 text-center py-4">No language data available</div>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default LeetCodeShowcase;
