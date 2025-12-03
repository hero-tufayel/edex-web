import { LockIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Course", active: false },
  { label: "Blog", active: false },
  { label: "Contact", active: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full bg-[#6176f7] overflow-hidden">
      <img
        className="absolute top-[365px] left-[573px] w-[173px] h-3"
        alt="Vector"
        src="/vector-2.svg"
      />

      <img
        className="absolute top-[436px] left-[433px] w-[111px] h-[11px]"
        alt="Vector"
        src="/vector-2.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1100px] h-[609px]"
        alt="Polygon"
        src="/polygon-2.svg"
      />

      <div className="absolute top-6 right-[-71px] w-[738px] h-[738px] bg-[url(/saly-10.png)] bg-cover bg-[50%_50%]" />

      <nav className="relative flex items-center justify-between px-[300px] py-6 z-10">
        <div className="flex items-end justify-center [font-family:'PT_Serif',Helvetica] font-normal text-5xl text-center leading-[48px] whitespace-nowrap">
          <span className="font-bold italic text-[#ffc27a] tracking-[0.05px] leading-10">
            e
          </span>
          <span className="font-bold italic text-white tracking-[0.05px] leading-10">
            Dex
          </span>
        </div>

        <div className="flex items-start">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-start gap-2 px-6 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div
                className={`flex items-end justify-center mt-[-1.00px] ${
                  item.active
                    ? "font-body-regular-600 font-[number:var(--body-regular-600-font-weight)] text-secondary-500"
                    : "font-body-regular-500 font-[number:var(--body-regular-500-font-weight)] text-graywhite"
                } text-[length:var(--body-regular-500-font-size)] text-center tracking-[var(--body-regular-500-letter-spacing)] leading-[var(--body-regular-500-line-height)] whitespace-nowrap [font-style:var(--body-regular-500-font-style)]`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
            <LockIcon className="w-6 h-6 text-graywhite" />
            <div className="flex items-end justify-center mt-[-1.00px] font-body-regular-500 font-[number:var(--body-regular-500-font-weight)] text-graywhite text-[length:var(--body-regular-500-font-size)] text-center tracking-[var(--body-regular-500-letter-spacing)] leading-[var(--body-regular-500-line-height)] whitespace-nowrap [font-style:var(--body-regular-500-font-style)]">
              Login
            </div>
          </div>

          <Button className="inline-flex items-start gap-2.5 px-6 py-3 rounded-[100px] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90 transition-opacity border-0">
            <div className="flex items-end justify-center mt-[-1.00px] font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-graywhite text-[length:var(--body-regular-400-font-size)] text-center tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] whitespace-nowrap [font-style:var(--body-regular-400-font-style)]">
              Sign up for Free
            </div>
          </Button>
        </div>
      </nav>

      <main className="relative px-[300px] pt-[246px] pb-[225px] z-10">
        <div className="max-w-[650px]">
          <div className="h-8 flex items-end justify-start font-header-heading-4 font-[number:var(--header-heading-4-font-weight)] text-secondary-500 text-[length:var(--header-heading-4-font-size)] tracking-[var(--header-heading-4-letter-spacing)] leading-[var(--header-heading-4-line-height)] [font-style:var(--header-heading-4-font-style)]">
            START TO SUCCESS
          </div>

          <div className="h-[216px] flex items-end justify-start mt-14 font-display font-[number:var(--display-font-weight)] text-graywhite text-[length:var(--display-font-size)] tracking-[var(--display-letter-spacing)] leading-[var(--display-line-height)] [font-style:var(--display-font-style)]">
            <span className="text-white font-display [font-style:var(--display-font-style)] font-[number:var(--display-font-weight)] tracking-[var(--display-letter-spacing)] leading-[var(--display-line-height)] text-[length:var(--display-font-size)]">
              Access To 5000+ Courses
              <br />
              from 300 Instructors <br />
              &amp; Institutions
            </span>
          </div>

          <div className="h-7 flex items-end justify-start mt-10 font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-gray-100 text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)]">
            Various versions have evolved over the years, sometimes by accident,
          </div>

          <div className="relative w-[650px] h-[72px] mt-[60px] shadow-[-4px_-4px_44px_#00000014]">
            <div className="absolute top-0 left-0 w-[648px] h-[72px] bg-graywhite rounded-[1000px]" />

            <Button className="absolute top-0 left-[576px] inline-flex items-center justify-center gap-2.5 p-6 rounded-[1000px] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90 transition-opacity border-0 h-[72px] w-[72px]">
              <SearchIcon className="w-6 h-6 text-white" />
            </Button>

            <div className="absolute top-6 left-8 h-6 flex items-end justify-center font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-500 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] whitespace-nowrap [font-style:var(--body-regular-400-font-style)]">
              What do want to learn?
            </div>
          </div>
        </div>
      </main>
    </header>
  );
};
