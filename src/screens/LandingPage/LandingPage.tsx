import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MostPopularCategorySection } from "./sections/MostPopularCategorySection";
import { MostPopularCourseSection } from "./sections/MostPopularCourseSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { StudentFeedbackSection } from "./sections/StudentFeedbackSection";

const instructors = [
  {
    image: "/rectangle-16.png",
    name: "Jacob Jones",
    title: "UI-UX Design Expart",
  },
  {
    image: "/rectangle-16-1.png",
    name: "Jacob Jones",
    title: "Social Media Expart",
  },
  {
    image: "/rectangle-16-2.png",
    name: "Jacob Jones",
    title: "Business Idea Expart",
  },
  {
    image: "/rectangle-16-3.png",
    name: "Jacob Jones",
    title: "Photograpy Expart",
  },
];

const carouselDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

const exploreLinks = [
  { text: "Home", href: "#" },
  { text: "About", href: "#" },
  { text: "Course", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Contact", href: "#" },
];

const categoryLinks = [
  { text: "Design", href: "#" },
  { text: "Development", href: "#" },
  { text: "Marketing", href: "#" },
  { text: "Business", href: "#" },
  { text: "Lifestyle", href: "#" },
  { text: "Photography", href: "#" },
  { text: "Music", href: "#" },
];

const socialMediaIcons = [
  {
    src: "/social-media-logo.svg",
    alt: "Social media logo",
    bgClass: "bg-[#f1f2f8]",
  },
  {
    src: "/social-media-logo-4.svg",
    alt: "Social media logo",
    bgClass: "bg-x2nd-primary50",
  },
  {
    src: "/social-media-logo-3.svg",
    alt: "Social media logo",
    bgClass: "bg-x2nd-primary50",
  },
  {
    src: "/social-media-logo-1.svg",
    alt: "Social media logo",
    bgClass: "bg-x2nd-primary50",
  },
  {
    src: "/social-media-logo-2.svg",
    alt: "Social media logo",
    bgClass: "bg-x2nd-primary50",
  },
];

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <HeaderSection />

      <StatisticsSection />

      <MostPopularCourseSection />

      <MostPopularCategorySection />

      <section className="relative w-full py-16">
        <div className="container mx-auto px-[300px]">
          <h2 className="flex items-end justify-start font-display font-[number:var(--display-font-weight)] text-[length:var(--display-font-size)] tracking-[var(--display-letter-spacing)] leading-[var(--display-line-height)] [font-style:var(--display-font-style)] mb-4">
            <span className="text-[#21212f]">Our Best</span>
            <span className="text-[#3461fd]"> Instructor</span>
          </h2>

          <p className="text-gray-500 font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)] mb-12">
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <div className="relative">
            <div className="grid grid-cols-4 gap-8 mb-12">
              {instructors.map((instructor, index) => (
                <div key={index} className="relative">
                  <div className="absolute top-0 left-0 w-[312px] h-[400px] bg-gray-500 blur-[50px] opacity-[0.24]" />
                  <Card className="relative bg-graywhite rounded-3xl shadow-[0px_3px_12px_#4b4b4b14] border-0">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center gap-4">
                        <img
                          className="w-[280px] h-[264px] rounded-xl object-cover"
                          alt="Instructor"
                          src={instructor.image}
                        />
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-grayblack text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)]">
                            {instructor.name}
                          </div>
                          <div className="font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-500 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)]">
                            {instructor.title}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mb-8">
              {carouselDots.map((dot, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-md ${
                    dot.active ? "bg-secondary-500" : "bg-gray-100"
                  }`}
                />
              ))}
            </div>

            <Button className="absolute top-[178px] left-[-60px] w-10 h-10 p-2.5 bg-graywhite rounded-[1000px] shadow-[-4px_4px_20px_#20b4861f] hover:bg-gray-50">
              <img className="w-6 h-6" alt="Caret left" src="/caretleft.svg" />
            </Button>

            <Button className="absolute top-[178px] right-[-60px] w-10 h-10 p-2.5 rounded-[1000px] shadow-[-4px_4px_20px_#20b4861f] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90">
              <img
                className="w-6 h-6"
                alt="Caret right"
                src="/caretright.svg"
              />
            </Button>
          </div>
        </div>
      </section>

      <StudentFeedbackSection />

      <section className="relative w-full bg-x2nd-primary900 py-20">
        <div className="absolute top-[-96px] left-[275px] w-[612px] h-[520px]">
          <div className="absolute top-[171px] left-[100px] w-[349px] h-[349px] bg-x2nd-primary300 rounded-[174.5px]" />
          <img
            className="absolute w-full h-[93.85%] top-0 left-0 object-cover"
            alt="Saly"
            src="/saly-1.png"
          />
        </div>

        <div className="container mx-auto px-[300px]">
          <div className="grid grid-cols-4 gap-16">
            <div className="col-span-1">
              <h3 className="flex items-end justify-start [font-family:'PT_Serif',Helvetica] font-bold italic text-5xl leading-[48px] mb-8">
                <span className="text-[#ffc27a]">e</span>
                <span className="text-white">Dex</span>
              </h3>

              <h4 className="font-header-heading-4 font-[number:var(--header-heading-4-font-weight)] text-graywhite text-[length:var(--header-heading-4-font-size)] tracking-[var(--header-heading-4-letter-spacing)] leading-[var(--header-heading-4-line-height)] [font-style:var(--header-heading-4-font-style)] mb-6">
                Contact Us
              </h4>

              <div className="space-y-4 mb-8">
                <p className="font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-50 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)]">
                  Call : +123 400 123
                </p>
                <p className="font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-50 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)]">
                  Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                  auctor felis.
                </p>
                <p className="font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-50 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)]">
                  Email: example@mail.com
                </p>
              </div>

              <div className="flex items-start gap-4">
                {socialMediaIcons.map((icon, index) => (
                  <Button
                    key={index}
                    className={`w-[49px] h-[49px] p-3.5 ${icon.bgClass} rounded-[100px] hover:opacity-80`}
                  >
                    <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                  </Button>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-header-heading-4 font-[number:var(--header-heading-4-font-weight)] text-graywhite text-[length:var(--header-heading-4-font-size)] tracking-[var(--header-heading-4-letter-spacing)] leading-[var(--header-heading-4-line-height)] [font-style:var(--header-heading-4-font-style)] mb-8">
                Explore
              </h4>
              <nav className="space-y-5">
                {exploreLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-100 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)] hover:text-white"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            </div>

            <div className="col-span-1">
              <h4 className="font-header-heading-4 font-[number:var(--header-heading-4-font-weight)] text-graywhite text-[length:var(--header-heading-4-font-size)] tracking-[var(--header-heading-4-letter-spacing)] leading-[var(--header-heading-4-line-height)] [font-style:var(--header-heading-4-font-style)] mb-8">
                Category
              </h4>
              <nav className="space-y-5">
                {categoryLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-100 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)] hover:text-white"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            </div>

            <div className="col-span-1">
              <h4 className="[font-family:'Public_Sans',Helvetica] font-semibold text-graywhite text-xl leading-6 mb-6">
                Subscribe
              </h4>
              <p className="font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-100 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)] mb-6">
                Lorem Ipsum has been them an industry printer took a galley make
                book.
              </p>
              <div className="space-y-4">
                <Input
                  placeholder="Email here"
                  className="h-[57px] bg-graywhite rounded-lg border-0 text-gray-500 font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)]"
                />
                <Button className="w-full h-12 px-6 py-3 rounded-[100px] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] font-body-regular-600 font-[number:var(--body-regular-600-font-weight)] text-graywhite text-[length:var(--body-regular-600-font-size)] tracking-[var(--body-regular-600-letter-spacing)] leading-[var(--body-regular-600-line-height)] [font-style:var(--body-regular-600-font-style)] hover:opacity-90">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
