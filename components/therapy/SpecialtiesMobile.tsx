const SpecialtiesMobile = () => {
  const specialties = [
    "anxiety",
    "depression",
    "relationships",
    "ADHD",
    "bisexual",
    "family conflict",
    "lesbian",
    "LGBTQ+",
    "life transitions",
    "marital & premarital",
    "men's issues",
    "OCD",
    "personality disorders",
    "self esteem",
    "stress",
    "trauma",
    "PTSD",
    "women's issues",
  ];

  return (
    <section className="space-y-5 med:space-y-[30px]">
      <div
        className="space-y-5 rounded-md py-5 bento col-span-2 block med:hidden"
        id="specialties"
      >
        <h2 className="text-2xl font-lit font-medium">Specialties</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          eveniet, cumque expedita placeat quibusdam perferendis.
        </p>
        <ul className="flex flex-wrap gap-5">
          {specialties
            .sort((a, b) => a.localeCompare(b))
            .map((specialty, i) => {
              return (
                <li
                  key={i}
                  className={`${specialty.toLowerCase()} p-1 rounded-md font-[400] capitalize`}
                >
                  {specialty}
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default SpecialtiesMobile;
