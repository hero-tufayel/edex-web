import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const courseData = [
  {
    id: 1,
    category: "HTML",
    title: "Various versions have evolved daf",
    image: "/saly-1-1.svg",
    imageType: "svg",
    rating: 5,
    reviews: 15,
    price: 500,
    featured: false,
  },
  {
    id: 2,
    category: "Design",
    title: "Various versions have evolved daf",
    imageUrl: "/saly-2.png",
    imageType: "background",
    backgroundColor: "#ff7e4f80",
    rating: 5,
    reviews: 20,
    price: 500,
    featured: true,
  },
  {
    id: 3,
    category: "Business",
    title: "Various versions have evolved daf",
    imageUrl: "/saly-26.png",
    imageType: "background",
    backgroundColor: "#cbb3ff80",
    rating: 5,
    reviews: 102,
    price: 500,
    featured: false,
  },
  {
    id: 4,
    category: "Business",
    title: "Various versions have evolved daf",
    imageUrl: "/saly-12.png",
    imageType: "background",
    backgroundColor: "#a9a8f6",
    rating: 5,
    reviews: 102,
    price: 500,
    featured: false,
  },
];

export const MostPopularCourseSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = 4;
  const totalPages = Math.ceil(courseData.length / coursesPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleCourseClick = (courseId: number) => {
    alert(`Viewing course ${courseId} - ${courseData.find((c) => c.id === courseId)?.title}`);
  };

  const startIndex = currentPage * coursesPerPage;
  const visibleCourses = courseData.slice(startIndex, startIndex + coursesPerPage);

  return (
    <section className="w-full py-8 md:py-16 px-4">
      <div className="max-w-[1444px] mx-auto">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="font-display font-[number:var(--display-font-weight)] text-[length:var(--display-font-size)] tracking-[var(--display-letter-spacing)] leading-[var(--display-line-height)] [font-style:var(--display-font-style)] text-center">
            <span className="text-x2nd-primary900">Most </span>
            <span className="text-x2nd-primary500">Popular Course</span>
          </h2>
          <p className="font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)] text-gray-500 text-center">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>

        <div className="relative">
          <Button
            onClick={handlePrev}
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-graywhite rounded-full p-2.5 hover:bg-gray-50 transition-colors shadow-lg"
            aria-label="Previous courses"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-0 md:px-12">
            {visibleCourses.map((course) => (
              <Card
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="relative bg-graywhite rounded-3xl border-0 shadow-[0_15px_50px_rgba(109,115,122,0.24)] cursor-pointer hover:shadow-[0_20px_60px_rgba(109,115,122,0.3)] transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      {course.imageType === "svg" ? (
                        <img
                          className="w-full h-[207px] object-contain"
                          alt={course.title}
                          src={course.image}
                        />
                      ) : (
                        <div className="w-full h-[207px] bg-white rounded-xl overflow-hidden relative">
                          <div
                            className="absolute inset-0"
                            style={{ backgroundColor: course.backgroundColor }}
                          />
                          <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${course.imageUrl})`,
                              backgroundPosition: "center",
                            }}
                          />
                        </div>
                      )}
                      <Badge
                        variant="secondary"
                        className="absolute top-2 left-2 bg-graywhite/60 text-grayblack font-body-regular-500 font-[number:var(--body-regular-500-font-weight)] text-[length:var(--body-regular-500-font-size)] tracking-[var(--body-regular-500-letter-spacing)] leading-[var(--body-regular-500-line-height)] [font-style:var(--body-regular-500-font-style)] rounded-md px-3 py-1.5 hover:bg-graywhite/60"
                      >
                        {course.category}
                      </Badge>
                    </div>

                    <h3 className="font-body-large-500 font-[number:var(--body-large-500-font-weight)] text-[length:var(--body-large-500-font-size)] tracking-[var(--body-large-500-letter-spacing)] leading-[var(--body-large-500-line-height)] [font-style:var(--body-large-500-font-style)] text-gray-700 line-clamp-1">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        {[...Array(course.rating)].map((_, index) => (
                          <img
                            key={index}
                            className="w-6 h-6"
                            alt="Star"
                            src="/star.svg"
                          />
                        ))}
                      </div>
                      <span className="font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)] text-gray-600">
                        ({course.reviews})
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <img
                        className="w-full h-px object-cover"
                        alt="Line"
                        src="/line-1.svg"
                      />

                      <div className="flex items-center justify-between">
                        <span className="font-header-heading-4 font-[number:var(--header-heading-4-font-weight)] text-[length:var(--header-heading-4-font-size)] tracking-[var(--header-heading-4-letter-spacing)] leading-[var(--header-heading-4-line-height)] [font-style:var(--header-heading-4-font-style)] text-grayblack">
                          $ {course.price}
                        </span>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCourseClick(course.id);
                          }}
                          size="icon"
                          className={`rounded-full p-2.5 transition-all ${
                            course.featured
                              ? "shadow-[-4px_4px_20px_#20b4861f] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:opacity-90"
                              : "bg-[linear-gradient(180deg,rgba(255,194,122,0.12)_0%,rgba(255,163,55,0.12)_100%)] hover:bg-[linear-gradient(180deg,rgba(255,194,122,0.2)_0%,rgba(255,163,55,0.2)_100%)]"
                          }`}
                          aria-label={`View ${course.title}`}
                        >
                          {course.featured ? (
                            <img
                              className="w-6 h-6"
                              alt="Arrow up right"
                              src="/arrowupright.svg"
                            />
                          ) : (
                            <img
                              className="w-6 h-6"
                              alt="Arrow up right"
                              src="/arrowupright-4.svg"
                            />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 shadow-[-4px_4px_20px_#20b4861f] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] rounded-full p-2.5 hover:opacity-90 transition-opacity"
            aria-label="Next courses"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-md transition-colors ${
                currentPage === index ? "bg-secondary-500" : "bg-gray-100 hover:bg-gray-200"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
