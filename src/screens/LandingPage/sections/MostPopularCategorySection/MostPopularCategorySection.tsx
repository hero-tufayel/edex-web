import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const categories = [
  {
    icon: "/pennib.svg",
    name: "Design",
    isHighlighted: true,
  },
  {
    icon: "/filehtml.svg",
    name: "Development",
    isHighlighted: false,
  },
  {
    icon: "/microphonestage.svg",
    name: "Marketing",
    isHighlighted: false,
  },
  {
    icon: "/briefcase.svg",
    name: "Business",
    isHighlighted: false,
  },
  {
    icon: "/sunhorizon.svg",
    name: "Lifestyle",
    isHighlighted: false,
  },
  {
    icon: "/camera.svg",
    name: "Photography",
    isHighlighted: false,
  },
  {
    icon: "/musicnote.svg",
    name: "Music",
    isHighlighted: false,
  },
  {
    icon: "/database.svg",
    name: "Data Science",
    isHighlighted: false,
  },
  {
    icon: "/lightbulb.svg",
    name: "Personal Develop",
    isHighlighted: false,
  },
  {
    icon: "/heartbeat.svg",
    name: "Helth & Fitness",
    isHighlighted: false,
  },
  {
    icon: "/graph.svg",
    name: "Finance",
    isHighlighted: false,
  },
  {
    icon: "/detective.svg",
    name: "Teaching",
    isHighlighted: false,
  },
];

export const MostPopularCategorySection = (): JSX.Element => {
  return (
    <section className="w-full py-[100px] bg-[#e7e9eb80]">
      <div className="container mx-auto px-[300px]">
        <h2 className="flex items-end justify-center font-display font-[number:var(--display-font-weight)] text-[length:var(--display-font-size)] tracking-[var(--display-letter-spacing)] leading-[var(--display-line-height)] [font-style:var(--display-font-style)] mb-4">
          <span className="text-[#21212f]">Most </span>
          <span className="text-[#3461fd]">Popular Category</span>
        </h2>

        <p className="flex items-end justify-center font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-gray-500 text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)] mb-[48px]">
          Various versions have evolved over the years, sometimes by accident,
        </p>

        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all ${
                category.isHighlighted
                  ? "border-2 border-[#ffc27a] shadow-[0px_12px_48px_#ffc27a42]"
                  : "border-0"
              } bg-graywhite rounded-[22px]`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      className="w-[38px] h-[38px]"
                      alt={category.name}
                      src={category.icon}
                    />
                    <div className="flex items-end justify-center flex-1 font-body-large-500 font-[number:var(--body-large-500-font-weight)] text-grayblack text-[length:var(--body-large-500-font-size)] tracking-[var(--body-large-500-letter-spacing)] leading-[var(--body-large-500-line-height)] [font-style:var(--body-large-500-font-style)]">
                      {category.name}
                    </div>
                  </div>
                  <Button
                    size="icon"
                    className={`rounded-full p-2.5 ${
                      category.isHighlighted
                        ? "bg-secondary-500 shadow-[-4px_4px_20px_#f2ce121f] hover:bg-secondary-500"
                        : "bg-transparent hover:bg-transparent"
                    }`}
                  >
                    <img
                      className="w-6 h-6"
                      alt="Arrow up right"
                      src="/arrowupright.svg"
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
