"use client";

import { testimonies } from "@/lib/testimony";
import Image from "next/image";

export default function TestimonyCarousel() {
  return (
    <section
      className="brand-testimonies py-10"
      aria-labelledby="testimony-heading"
    >
      <h3 id="testimony-heading">
        What Our Brands Have
        <br />
        To Say...
      </h3>
      <div
        className="testimony-carousel"
        tabIndex={0}
        role="region"
        aria-label="Brand testimonials"
        aria-roledescription="carousel"
        id="testimony-carousel"
      >
        <div className="testimony-track">
          {[0, 1, 2, 3].map((copy) => (
            <div
              className="testimony-group"
              key={copy}
              aria-hidden={copy > 0 ? true : undefined}
            >
              {testimonies.map(({ id, quote, name, role, image }) => (
                <figure className="testimony-card" key={id}>
                  <blockquote>&ldquo;{quote}&rdquo;</blockquote>
                  <figcaption>
                    <span className="testimony-avatar" aria-hidden="true">
                      <Image
                        src={image ?? ""}
                        alt={`${name} image`}
                        width={44}
                        height={44}
                        className="rounded-full"
                      />
                    </span>
                    <div>
                      <p className="testimony-name">{name}</p>
                      <p className="testimony-role">{role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
