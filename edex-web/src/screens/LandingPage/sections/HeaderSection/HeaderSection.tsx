import { LockIcon, SearchIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Course", active: false },
  { label: "Blog", active: false },
  { label: "Contact", active: false },
];

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    } else {
      alert("Please enter a search query");
    }
  };

  const handleLogin = () => {
    alert("Login functionality - Redirecting to login page...");
  };

  const handleSignUp = () => {
    alert("Sign up functionality - Redirecting to sign up page...");
  };

  const handleNavClick = (label: string) => {
    alert(`Navigating to ${label}...`);
    setIsMenuOpen(false);
  };

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

      <nav className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-[300px] py-4 md:py-6 z-10">
        <div className="flex items-end justify-center [font-family:'PT_Serif',Helvetica] font-normal text-3xl md:text-5xl text-center leading-[48px] whitespace-nowrap">
          <span className="font-bold italic text-[#ffc27a] tracking-[0.05px] leading-10">
            e
          </span>
          <span className="font-bold italic text-white tracking-[0.05px] leading-10">
            Dex
          </span>
        </div>

        <div className="hidden lg:flex items-start">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.label)}
              className="inline-flex items-start gap-2 px-4 xl:px-6 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
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
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-start gap-2">
          <button
            onClick={handleLogin}
            className="inline-flex items-center gap-2 px-4 xl:px-6 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
          >
            <LockIcon className="w-5 h-5 md:w-6 md:h-6 text-graywhite" />
            <div className="flex items-end justify-center mt-[-1.00px] font-body-regular-500 font-[number:var(--body-regular-500-font-weight)] text-graywhite text-[length:var(--body-regular-500-font-size)] text-center tracking-[var(--body-regular-500-letter-spacing)] leading-[var(--body-regular-500-line-height)] whitespace-nowrap [font-style:var(--body-regular-500-font-style)]">
              Login
            </div>
          </button>

          <Button
            onClick={handleSignUp}
            className="inline-flex items-start gap-2.5 px-4 xl:px-6 py-3 rounded-[100px] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90 transition-opacity border-0"
          >
            <div className="flex items-end justify-center mt-[-1.00px] font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-graywhite text-[length:var(--body-regular-400-font-size)] text-center tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] whitespace-nowrap [font-style:var(--body-regular-400-font-style)]">
              Sign up for Free
            </div>
          </Button>
        </div>

        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variant="ghost"
          size="icon"
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#6176f7] lg:hidden z-20 p-4 space-y-2">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.label)}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLogin}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white flex items-center gap-2"
            >
              <LockIcon className="w-5 h-5" />
              Login
            </button>
            <Button
              onClick={handleSignUp}
              className="w-full px-4 py-3 rounded-[100px] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90 text-white"
            >
              Sign up for Free
            </Button>
          </div>
        )}
      </nav>

      <main className="relative px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-[300px] pt-16 md:pt-32 lg:pt-[246px] pb-16 md:pb-32 lg:pb-[225px] z-10">
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

          <form onSubmit={handleSearch} className="relative w-full max-w-[650px] h-[60px] md:h-[72px] mt-8 md:mt-[60px] shadow-[-4px_-4px_44px_#00000014]">
            <div className="absolute top-0 left-0 w-full h-full bg-graywhite rounded-[1000px]" />

            <Button
              type="submit"
              className="absolute top-0 right-0 inline-flex items-center justify-center gap-2.5 p-4 md:p-6 rounded-[1000px] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90 transition-opacity border-0 h-full w-[60px] md:w-[72px]"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </Button>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do want to learn?"
              className="absolute top-0 left-0 w-full h-full pl-6 md:pl-8 pr-[80px] md:pr-[90px] bg-transparent rounded-[1000px] font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-500 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)] outline-none"
            />
          </form>
        </div>
      </main>
    </header>
  );
};
