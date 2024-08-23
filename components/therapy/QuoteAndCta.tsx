import Link from "next/link";

import { Button } from "@/components/ui/button";

const QuoteAndCta = () => {
  return (
    <section className="columns-1 med:columns-2 gap-10 space-y-5">
      <div className="rounded-md py-5 flex items-center justify-center col-span-3 sm:col-span-1 bento relative min-h-auto med:min-h-[250px]">
        <p className="font-quote text-center font-[300] text-2xl">
          “I feel enriched when I can truly prize or care for or love another
          person and when I can let that feeling flow out to that person.”
        </p>
        <div>
          <img
            src="/assets/quote.svg"
            alt="quote"
            className="absolute left-0 top-0 sm:top-[1.25rem] opacity-10 w-[35px]"
          />
          <img
            src="/assets/quote.svg"
            alt="quote"
            className="absolute right-0 bottom-0 sm:bottom-[1.25rem] opacity-10 rotate-180 w-[35px]"
          />
        </div>
      </div>
      <div className="space-y-0 med:space-y-5 rounded-md py-5 col-span-2 bento min-h-auto med:min-h-[250px]">
        <div className="space-y-5 break-inside-avoid">
          <h2 className="text-2xl font-lit font-medium">Blog</h2>
          <p className="text-[18px] text-gray-700">
            Check out my blog. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum rerum inventore provident consequatur.
            Voluptatum libero provident minima saepe nemo expedita impedit, id
            reiciendis necessitatibus natus.
          </p>
          <div>
            <Link
              href="/blog"
              className="w-full flex items-center justify-center"
            >
              <Button
                variant="default"
                className="w-full sm:w-1/2 med:w-full bg-[#0000000c]"
              >
                <p className="font-medium">Visit My Blog</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteAndCta;
