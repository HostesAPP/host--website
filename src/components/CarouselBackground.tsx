"use client";

import gsap from "gsap";
import Image from "next/image";
import { type ReactNode, useLayoutEffect, useMemo, useRef } from "react";

type CarouselBackgroundProps = {
  images: string[];
  children: ReactNode;
  className?: string;
  foregroundImage?: string;
  foregroundAlt?: string;
  speed?: number;
};

export default function CarouselBackground({
  images,
  children,
  className = "",
  foregroundImage,
  foregroundAlt = "",
  speed = 30,
}: CarouselBackgroundProps) {
  const containerRef = useRef<HTMLElement>(null);
  const leftTrackRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);

  const repeatedImages = useMemo(() => [...images, ...images], [images]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const leftTrack = leftTrackRef.current;
    const rightTrack = rightTrackRef.current;

    if (!container || !leftTrack || !rightTrack) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        [leftTrack, rightTrack],
        {
          xPercent: 0,
        },
        {
          xPercent: -50,
          duration: speed,
          ease: "none",
          repeat: -1,
        },
      );
    }, container);

    return () => context.revert();
  }, [speed]);

  if (images.length === 0) {
    return (
      <section className={`v-carousel ${className}`}>
        <div className="v-carousel__content">{children}</div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className={`v-carousel ${className}`}>
      <div className="v-carousel__stage" aria-hidden="true">
        <div className="v-carousel__side v-carousel__left-side">
          <div className="v-carousel__plane v-carousel__left-plane">
            <div ref={leftTrackRef} className="v-carousel__track">
              {repeatedImages.map((image, index) => (
                <div
                  key={`left-${image}-${index}`}
                  className="v-carousel__slide"
                >
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

        <div className="v-carousel__side v-carousel__right-side">
          <div className="v-carousel__plane v-carousel__right-plane">
            <div ref={rightTrackRef} className="v-carousel__track">
              {repeatedImages.map((image, index) => (
                <div
                  key={`right-${image}-${index}`}
                  className="v-carousel__slide"
                >
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
      </div>

      {foregroundImage ? (
        <div className="v-carousel__foreground" aria-hidden={!foregroundAlt}>
          <Image
            src={foregroundImage}
            alt={foregroundAlt}
            width={849}
            height={627}
            priority
            draggable={false}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 38vw, 1px"
            className="v-carousel__foreground-image"
          />
        </div>
      ) : null}

      <div className="v-carousel__content">{children}</div>
    </section>
  );
}
