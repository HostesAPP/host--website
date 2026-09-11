"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

type ScrollTextProps = {
  text: string;
  className?: string;
};

export default function ScrollText({ text, className = "" }: ScrollTextProps) {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    if (!textRef.current) return;

    const context = gsap.context(() => {
      const splitText = new SplitText(textRef.current, {
        type: "words",
        wordsClass: "scroll-word",
      });

      gsap.set(splitText.words, {
        color: "#DCDCDC",
      });

      const matchMedia = gsap.matchMedia();

      matchMedia.add(
        {
          mobile: "(max-width: 767px)",
          desktop: "(min-width: 768px)",
        },
        (mediaContext) => {
          const { mobile } = mediaContext.conditions as {
            mobile: boolean;
            desktop: boolean;
          };

          gsap.to(splitText.words, {
            color: "#EF5A22",
            ease: "none",
            stagger: 0.05,

            scrollTrigger: {
              trigger: textRef.current,

              // Start earlier on mobile.
              start: mobile ? "top 90%" : "top 80%",

              // Finish while the bottom is still visible.
              end: mobile ? "bottom 70%" : "bottom 30%",

              scrub: true,
              invalidateOnRefresh: true,
              markers: false,
            },
          });
        },
      );

      return () => {
        matchMedia.revert();
        splitText.revert();
      };
    }, textRef);

    return () => {
      context.revert();
    };
  }, [text]);

  return (
    <h2 ref={textRef} aria-label={text} className={className}>
      {text}
    </h2>
  );
}
