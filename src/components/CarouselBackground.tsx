"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { type ReactNode, useEffect, useRef } from "react";

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
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const tracks = Array.from(stage.querySelectorAll<HTMLDivElement>(".v-carousel__track"));
    const group = stage.querySelector<HTMLDivElement>(".v-carousel__group");
    if (!group || tracks.length !== 2) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: gsap.core.Tween | undefined;
    let measuredWidth = 0;
    let measuredDistance = 0;
    let measuredDuration = 0;
    const context = gsap.context(() => {}, stage);

    const restart = () => context.add(() => {
      const distance = parseFloat(getComputedStyle(group).width);
      const planeWidth = stage.clientWidth;
      const duration = Math.max(1, speed) * (reducedMotion.matches ? 3 : 1);
      if (!distance || !planeWidth) return;
      if (animation && planeWidth === measuredWidth &&
          distance === measuredDistance && duration === measuredDuration) return;
      const progress = animation?.progress() ?? 0;
      animation?.kill();
      measuredWidth = planeWidth;
      measuredDistance = distance;
      measuredDuration = duration;

      // The right plane continues the same stream at the left plane's endpoint.
      gsap.set(tracks, { x: (index: number) => index === 0 ? 0 : -planeWidth });
      animation = gsap.to(tracks, {
        x: (index: number) => -distance - (index === 0 ? 0 : planeWidth),
        duration,
        ease: "none",
        repeat: -1,
      });
      animation.progress(progress);
    });

    const observer = new ResizeObserver(restart);
    observer.observe(stage);
    observer.observe(group);
    reducedMotion.addEventListener("change", restart);
    restart();
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", restart);
      context.revert();
    };
  }, [images, speed]);

  if (images.length === 0) {
    return (
      <section className={`v-carousel ${className}`}>
        <div className="v-carousel__content">{children}</div>
      </section>
    );
  }

  return (
    <section className={`v-carousel ${className}`}>
      <div className="v-carousel__stage" ref={stageRef} aria-hidden="true">
        {(["left", "right"] as const).map((side) => (
          <div className={`v-carousel__side v-carousel__side--${side}`} key={side}>
            <div className={`v-carousel__plane v-carousel__plane--${side}`}>
              <div className="v-carousel__track">
                {[0, 1, 2].map((copy) => (
                  <div key={copy} className="v-carousel__group">
                    {images.map((image, index) => (
                      <div key={`${image}-${index}`} className="v-carousel__slide">
                        <Image
                          src={image}
                          alt=""
                          width={252}
                          height={244}
                          draggable={false}
                          loading="eager"
                          sizes="(min-width: 768px) 20vw, 384px"
                          className="v-carousel__image"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="v-carousel__content">{children}</div>
    </section>
  );
}
