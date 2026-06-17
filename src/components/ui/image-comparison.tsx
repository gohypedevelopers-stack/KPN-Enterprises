import React, { useState, useRef, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
}

export default function ImageComparison({ beforeImage, afterImage }: ImageComparisonProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current || !isDragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setPosition(percent);
    },
    [isDragging]
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full select-none overflow-hidden touch-none"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onMouseDown={(e) => {
        setIsDragging(true);
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
          setPosition((x / rect.width) * 100);
        }
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
          setPosition((x / rect.width) * 100);
        }
      }}
      onMouseUp={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchCancel={() => setIsDragging(false)}
    >
      {/* After Image (Background - Revealed) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Before Image (Foreground - Clipped) */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Dark overlay for contrast on both images */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity"
        style={{ left: `calc(${position}% - 2px)` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-editorial-ink">
          <ArrowLeftRight className="w-5 h-5 text-editorial-accent" />
        </div>
      </div>
    </div>
  );
}
