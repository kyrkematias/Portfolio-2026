import React, { useState, useEffect, useRef } from 'react';
import { User, Building2 } from 'lucide-react';
import { ContentData } from '../types';

interface ReviewsProps {
    content: ContentData['reviews'];
}

const getServiceColor = (service: string): string => {
    const s = service.toLowerCase();
    if (s.includes('seo')) return 'text-green-400 bg-green-400/10 border-green-400/20';
    if (s.includes('sem') || s.includes('marketing')) return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
    if (s.includes('dev') || s.includes('web') || s.includes('cÃ³digo')) return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    if (s.includes('ux') || s.includes('ui') || s.includes('diseÃ±o') || s.includes('design')) return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
    if (s.includes('data')) return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
};

const Reviews: React.FC<ReviewsProps> = ({ content }) => {
    // Use refs for animation state to avoid re-triggering effects
    const scrollRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const animationReq = useRef<number>();

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPos = scrollContainer.scrollLeft;
        const speed = 0.5;

        const animate = () => {
            // Only auto-scroll if not paused and not dragging
            if (!isPaused.current && !isDragging.current) {
                scrollPos += speed;

                // Handle infinite scroll wrapping
                // Assuming duplicate items, reset when halfway
                if (scrollPos >= scrollContainer.scrollWidth / 2) {
                    scrollPos = 0;
                }
                scrollContainer.scrollLeft = scrollPos;
            } else {
                // If paused or dragging, update our tracker to current actual position
                scrollPos = scrollContainer.scrollLeft;
            }
            animationReq.current = requestAnimationFrame(animate);
        };

        animationReq.current = requestAnimationFrame(animate);

        return () => {
            if (animationReq.current) cancelAnimationFrame(animationReq.current);
        };
    }, [content.items]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        isPaused.current = false;
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll-fast multiplier
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // Duplicate items to create infinite scroll effect
    // We triple it to ensure smooth dragging limits if needed, but double is usually enough for infinite loop logic
    const reviews = [...content.items, ...content.items, ...content.items];

    return (
        <section className="py-20 bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                    {content.title}
                </h2>
                <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
            </div>

            <div
                className="relative w-full"
                onMouseEnter={() => { isPaused.current = true; }}
                onMouseLeave={handleMouseLeave}
            >
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-hidden select-none cursor-grab active:cursor-grabbing"
                    style={{ width: '100%' }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="flex gap-6 px-4">
                        {reviews.map((review, index) => (
                            <div
                                key={`${review.id}-${index}`}
                                className="flex-shrink-0 w-[300px] md:w-[400px] bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 text-pink-500 overflow-hidden">
                                        {review.image ? (
                                            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <User size={24} />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">{review.name}</h3>
                                        <div className="flex items-center gap-1 text-sm text-gray-400">
                                            {review.company && <Building2 size={12} />}
                                            <span>{review.role}{review.company ? ` @ ${review.company}` : ''}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 italic text-sm md:text-base leading-relaxed">
                                    "{review.text}"
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {review.services.map((service, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 text-xs rounded-full border ${getServiceColor(service)}`}
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
