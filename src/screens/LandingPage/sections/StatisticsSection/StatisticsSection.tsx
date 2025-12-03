import React from "react";

const statisticsData = [
  {
    number: "300",
    label: "Instructor",
    icon: "/graduationcap.svg",
    gradient:
      "bg-[linear-gradient(180deg,rgba(42,249,177,1)_0%,rgba(32,180,134,1)_100%)]",
  },
  {
    number: "20,000+",
    label: "Student",
    icon: "/users.svg",
    gradient:
      "bg-[linear-gradient(180deg,rgba(169,136,249,1)_0%,rgba(109,58,233,1)_100%)]",
  },
  {
    number: "10,000+",
    label: "Video",
    icon: "/videocamera.svg",
    gradient:
      "bg-[linear-gradient(180deg,rgba(255,164,175,1)_0%,rgba(238,69,90,1)_100%)]",
  },
  {
    number: "1,00,000+",
    label: "User's",
    icon: "/usersthree.svg",
    gradient:
      "bg-[linear-gradient(180deg,rgba(146,218,240,1)_0%,rgba(33,201,255,1)_100%)]",
  },
];

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-x2nd-primary50 py-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-[136px] gap-y-8 max-w-[1320px] mx-auto">
          {statisticsData.map((stat, index) => (
            <div key={index} className="flex items-center gap-6">
              <div
                className={`inline-flex items-center justify-center p-5 rounded-[1000px] ${stat.gradient}`}
              >
                <img className="w-11 h-11" alt={stat.label} src={stat.icon} />
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-header-heading-3 font-[number:var(--header-heading-3-font-weight)] text-primary-900 text-[length:var(--header-heading-3-font-size)] tracking-[var(--header-heading-3-letter-spacing)] leading-[var(--header-heading-3-line-height)] [font-style:var(--header-heading-3-font-style)]">
                  {stat.number}
                </div>

                <div className="font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-gray-600 text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] [font-style:var(--body-large-400-font-style)]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
