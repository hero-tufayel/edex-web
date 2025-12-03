import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[37px] w-full py-8">
      <div className="flex flex-col items-center gap-6 max-w-[648px]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center font-header-heading-1 font-[number:var(--header-heading-1-font-weight)] text-[length:var(--header-heading-1-font-size)] tracking-[var(--header-heading-1-letter-spacing)] leading-[var(--header-heading-1-line-height)] [font-style:var(--header-heading-1-font-style)]">
            <span className="text-[#21212f]">Join </span>
            <span className="text-[#3461fd]">World&#39;s largest </span>
            <span className="text-[#21212f]">learning platform today</span>
          </h1>

          <p className="text-center max-w-[534px] font-body-body-XL font-[number:var(--body-body-XL-font-weight)] text-gray-600 text-[length:var(--body-body-XL-font-size)] tracking-[var(--body-body-XL-letter-spacing)] leading-[var(--body-body-XL-line-height)] [font-style:var(--body-body-XL-font-style)]">
            Start learning by registering for free
          </p>
        </div>

        <p className="text-center font-body-regular-400 font-[number:var(--body-regular-400-font-weight)] text-gray-500 text-[length:var(--body-regular-400-font-size)] tracking-[var(--body-regular-400-letter-spacing)] leading-[var(--body-regular-400-line-height)] [font-style:var(--body-regular-400-font-style)]">
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst. <br />
          Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor
          felis.
        </p>
      </div>

      <Button className="px-6 py-3 rounded-[100px] bg-[linear-gradient(180deg,rgba(255,194,122,1)_0%,rgba(255,163,55,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(255,194,122,0.9)_0%,rgba(255,163,55,0.9)_100%)] font-body-regular-600 font-[number:var(--body-regular-600-font-weight)] text-graywhite text-[length:var(--body-regular-600-font-size)] tracking-[var(--body-regular-600-letter-spacing)] leading-[var(--body-regular-600-line-height)] [font-style:var(--body-regular-600-font-style)]">
        Sign up for Free
      </Button>
    </section>
  );
};
