"use client";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black">
              Write Your Story, Inspire the World with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Pen & Pulse
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://res.cloudinary.com/dqlku2tfk/image/upload/v1751093205/Screenshot_From_2025-06-28_12-12-48_qri59y.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
