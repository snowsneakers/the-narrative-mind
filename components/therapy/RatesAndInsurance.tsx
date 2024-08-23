import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";

const RatesAndInsurance = () => {
  return (
    <section className="space-y-5 rates-insurance columns-1 med:columns-2 gap-10">
      <div
        className="space-y-5 rounded-md py-5 col-span-2 bento min-h-auto med:min-h-[250px]"
        id="rates"
      >
        <h2 className="text-2xl font-lit font-medium">Rates</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          pariatur quo dignissimos, illo ratione voluptatibus?
        </p>
        <div className="space-y-5">
          <ul className="grid grid-cols-1 xxxs:grid-cols-2 sm:grid-cols-3 med:grid-cols-2 lg:grid-cols-3 gap-5">
            <li className="">
              <div>
                <p className="flex items-center gap-2">
                  <HiOutlineUser className="text-sm -mt-[3px]" /> Individual
                </p>
                <p className="text-xl font-medium">$150/session</p>
              </div>
            </li>
            <li className="">
              <div>
                <p className="flex items-center gap-2">
                  <HiOutlineUsers className="text-sm -mt-[3px]" /> Couple
                </p>
                <p className="text-xl font-medium">$200/session</p>
              </div>
            </li>
            <li className="">
              <div>
                <p>Sliding Scale</p>
                <p className="text-xl font-medium">Apply if eligible</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="space-y-5 rounded-md py-5 col-span-1 bento min-h-auto med:min-h-[250px]"
        id="insurance"
      >
        <p className="text-2xl font-lit font-medium">Insurance</p>
        <p className="text-gray-700">Currently covered by...</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <li className="p-1 rounded-md font-medium text-xl capitalize">
            Anthem / Elevance
          </li>
          <li className="p-1 rounded-md font-medium text-xl capitalize">
            Out of Network
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RatesAndInsurance;
