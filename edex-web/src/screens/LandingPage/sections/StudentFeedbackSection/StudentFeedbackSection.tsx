import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Guy Hawkins",
    role: "UI-UX Designer",
    image: "/rectangle-25.png",
    text: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. \nPraesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    name: "Guy Hawkins",
    role: "UI-UX Designer",
    image: "/rectangle-25-1.png",
    text: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. \nPraesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    name: "Guy Hawkins",
    role: "UI-UX Designer",
    image: "/rectangle-25-2.png",
    text: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. \nPraesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
];

export const StudentFeedbackSection = (): JSX.Element => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentTestimonialIndex,
    currentTestimonialIndex + 3
  );

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-[100px] bg-[#f8f4ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-[300px]">
        <header className="mb-[50px]">
          <h2 className="h-[72px] flex items-end justify-start font-display font-[number:var(--display-font-weight)] text-[length:var(--display-font-size)] tracking-[var(--display-letter-spacing)] leading-[var(--display-line-height)] [font-style:var(--display-font-style)] mb-4">
            <span className="text-[#21212f]">Student</span>
            <span className="text-[#3461fd]"> Feedback</span>
          </h2>
          <p className="h-7 flex items-end justify-start font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-gray-500 text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)]">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </header>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-graywhite rounded-[30px] border-0 shadow-none"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-start justify-between gap-[91px]">
                      <div className="flex items-center gap-2.5">
                        <img
                          className="w-[70px] h-[70px] rounded-full object-cover"
                          alt={testimonial.name}
                          src={testimonial.image}
                        />
                        <div className="flex flex-col h-16 gap-2">
                          <h3 className="flex items-end justify-start font-header-heading-4 font-[number:var(--header-heading-4-font-weight)] text-black text-[length:var(--header-heading-4-font-size)] tracking-[var(--header-heading-4-letter-spacing)] leading-[var(--header-heading-4-line-height)] [font-style:var(--header-heading-4-font-style)]">
                            {testimonial.name}
                          </h3>
                          <p className="flex items-end justify-start font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-black text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <img
                        className="w-10 h-[29px]"
                        alt="Quote"
                        src="/vector.svg"
                      />
                    </div>
                    <p className="flex items-end justify-start w-full font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-700 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)] whitespace-pre-line">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            onClick={handlePrev}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-[-40px] w-11 h-11 p-2.5 bg-graywhite rounded-full shadow-[-4px_4px_20px_#20b4861f] hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-[-40px] w-11 h-11 p-2.5 rounded-full shadow-[-4px_4px_20px_#20b4861f] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90 transition-opacity"
            aria-label="Next testimonials"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 md:mt-12 lg:mt-[70px]">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialIndex(index * 3)}
              className={`w-3 h-3 rounded-md transition-colors ${
                Math.floor(currentTestimonialIndex / 3) === index
                  ? "bg-secondary-500"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
