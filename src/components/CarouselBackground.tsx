"use client";

import Image from "next/image";
import { type CSSProperties, type ReactNode, useMemo } from "react";

type CarouselBackgroundProps = {
  images: string[];
  children: ReactNode;
  className?: string;
  speed?: number;
};

export default function CarouselBackground({
  images,
  children,
  className = "",
  speed = 30,
}: CarouselBackgroundProps) {
  const marqueeImages = useMemo(() => [...images, ...images], [images]);

  const trackStyle: CSSProperties = {
    animationDuration: `${speed}s`,
  };

  if (images.length === 0) {
    return (
      <section className={`v-carousel ${className}`}>
        <div className="v-carousel__content">{children}</div>
      </section>
    );
  }

  return (
    <section className={`v-carousel ${className}`}>
      <div className="v-carousel__stage" aria-hidden="true">
        <div className="v-carousel__plane">
          <div className="v-carousel__track" style={trackStyle}>
            {marqueeImages.map((image, index) => (
              <div key={`${image}-${index}`} className="v-carousel__slide">
                <Image
                  src={image}
                  alt=""
                  width={252}
                  height={244}
                  draggable={false}
                  sizes="(min-width: 768px) 20vw, 1px"
                  className="v-carousel__image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="v-carousel__content">{children}</div>
    </section>
  );
}
