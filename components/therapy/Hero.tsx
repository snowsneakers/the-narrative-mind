const Hero = () => {
  return (
    <section className="rounded-md col-span-3 bento">
      <div className="space-y-3">
        <div>
          <p>
            <span className="font-quote text-4xl font-medium">
              The Narrative Mind
            </span>
          </p>
          <p className="font-[300] text-lg">
            [thuh] [<span className="font-medium">nar</span>-uh-tiv] [mahynd]
          </p>
        </div>
        <p className="font-josefin font-[300] text-lg text-gray-700">
          Welcome! {"I'm"} Gabriella, a compassionate and experienced narrative
          therapist dedicated to helping you rewrite your life story. Here,
          {"you'll"} find information about my services, payment options, and
          availability. Check out my blog for insights on how narrative therapy
          can transform your journey.
        </p>
      </div>
    </section>
  );
};

export default Hero;
