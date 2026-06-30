"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function ImpactSection() {
  const [openCard, setOpenCard] = useState(0);

  const latestBlogs = portfolioData.blogs.slice(0, 5);

  const styles = [
    { bg: "bg-[#D1FF4D]", text: "text-[#111111]" },
    { bg: "bg-cyan-200", text: "text-[#111111]" },
    { bg: "bg-zinc-800 dark:bg-zinc-900", text: "text-white" },
    { bg: "bg-[#F3E8D6]", text: "text-[#111111]" },
    { bg: "bg-amber-300", text: "text-[#111111]" },
  ];

  const impactCards = latestBlogs.map((blog, idx) => ({
    id: blog.id,
    metric: `0${idx + 1}`,
    title: blog.title,
    description: blog.excerpt,
    image: blog.image,
    bg: styles[idx].bg,
    text: styles[idx].text,
    isFeature: idx === 0,
    slug: blog.slug,
    category: blog.category
  }));

  return (
    <section className="w-full bg-background py-12 sm:py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex items-start justify-between gap-6 mb-8 sm:mb-16">
          <div className="max-w-[620px]">
            <p className="text-[11px] tracking-[2px] uppercase font-mono font-semibold text-cyan-500 mb-4">
              Knowledge Base
            </p>
            <h2 className="text-4xl md:text-6xl leading-[1.05] font-serif text-foreground">
              The Engineering <span className="text-muted-foreground italic">Process.</span>
            </h2>
            <p className="mt-4 text-[14px] sm:text-[15px] text-muted-foreground leading-[1.7] max-w-[560px]">
              Documenting the journey from concept to deployment. Read the latest thoughts on AI, engineering, and digital architecture.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-0">
          {impactCards.map((card, idx) => {
            const isOpen = openCard === idx;
            const closedHeights = [280, 310, 340, 370, 400];
            const targetHeight = isOpen ? 460 : closedHeights[idx];

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setOpenCard(idx)}
                onFocus={() => setOpenCard(idx)}
                onClick={() => setOpenCard(idx)}
                tabIndex={0}
                animate={{ flex: isOpen ? 4.8 : 1.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className={`${card.bg} ${card.text} relative overflow-hidden border border-black/10 dark:border-white/5 h-[360px] md:h-auto cursor-pointer rounded-2xl md:rounded-none md:first:rounded-l-2xl md:last:rounded-r-2xl`}
              >
                <motion.div
                  animate={{ height: typeof window !== 'undefined' && window.innerWidth >= 768 ? targetHeight : 400 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="h-full"
                >
                  {isOpen ? (
                    <div className="h-full p-6 sm:p-8 md:p-10 flex flex-col">
                      {card.isFeature ? (
                        <div className="max-w-[280px]">
                          <h3 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[1.05] font-semibold mb-4">
                            {card.title}
                          </h3>
                          <Link href={`/blog/${card.slug}`}>
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 text-[11px] tracking-[1.4px] uppercase font-bold hover:underline"
                            >
                              Read Article <ArrowRight size={14} />
                            </button>
                          </Link>
                        </div>
                      ) : (
                        <div className="max-w-[300px]">
                          <p className="text-[10px] tracking-[1.3px] uppercase font-bold opacity-80">
                            {card.category.replace("-", " ")}
                          </p>
                          <h3 className="mt-2 text-[22px] sm:text-[26px] md:text-[30px] leading-[1.08] font-semibold">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-[13px] sm:text-[14px] leading-[1.6] opacity-90 line-clamp-3">
                            {card.description}
                          </p>
                          <Link href={`/blog/${card.slug}`}>
                            <button
                              type="button"
                              className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[1.4px] uppercase font-bold hover:underline"
                            >
                              Read Article <ArrowRight size={14} />
                            </button>
                          </Link>
                        </div>
                      )}

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-4 flex-1 items-end">
                        <div className="self-start sm:self-end mb-2">
                          <p className="text-[56px] sm:text-[62px] md:text-[72px] font-bold leading-none">
                            {card.metric}
                          </p>
                        </div>

                        <div
                          className={`relative w-full rounded-xl overflow-hidden border border-black/10 ${card.isFeature
                              ? "h-[180px] sm:h-[220px] md:h-[250px]"
                              : "h-[140px] sm:h-[160px] md:h-[180px]"
                            }`}
                        >
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full p-5 sm:p-6 md:p-6 flex flex-col justify-between">
                      <div className="flex-1 min-h-0 w-full relative opacity-0 md:opacity-100">
                        <div className="absolute inset-0 flex items-end justify-start">
                          <span
                            className="text-sm font-bold uppercase tracking-wider leading-relaxed text-left"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                          >
                            {card.title}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex-shrink-0">
                        <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-none">
                          {card.metric}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 bg-foreground text-background rounded-full px-5 sm:px-8 py-4 flex items-center justify-center text-center">
          <Link href="/blog" className="text-[13px] sm:text-[14px] leading-[1.4] font-bold hover:opacity-80 transition-opacity">
            Access the Complete Knowledge Base
          </Link>
        </div>
      </div>
    </section>
  );
}
