import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const IntakeFormsAndSocials = () => {
  const forms = [
    "adult intake form",
    "child intake form",
    "covid form",
    "text & email",
    "hipaa",
    "informed concent",
    "consent to release info",
    "credit card authorization form",
    "teletherapy informed consent",
  ];
  return (
    <section className="space-y-5 columns-1 med:columns-2 gap-10">
      <div
        className="space-y-5 rounded-md py-5 bento col-span-1"
        id="intake-forms"
      >
        <h2 className="text-2xl font-lit font-medium">Intake Forms</h2>
        <p className="text-gray-700">
          these forms Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloremque inventore sit totam quidem quibusdam laudantium
          suscipit nulla voluptas laborum.
        </p>
        <div>
          <ScrollArea className="h-[250px] w-full rounded-md">
            <div className="">
              {forms.map((form, i) => (
                <div key={i}>
                  <div className="p-1 rounded-md font-[400] capitalize">
                    {form}
                  </div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="space-y-5 rounded-md py-5 bento col-span-2" id="contact">
        <h2 className="text-2xl font-lit font-medium">Contact</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur
          reiciendis delectus mollitia maiores sit repudiandae sunt hic odio
          quidem beatae dolorem maxime voluptatem, asperiores, dolorum fugit
          aliquam eius assumenda est! Aspernatur ipsum ab est.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <div>
            <a
              href="https://www.psychologytoday.com/us/therapists/gabriella-laporta-thousand-oaks-ca/1246355"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/psychologyToday.svg"
                alt="psychology today logo"
                className="w-[95px]"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/thenarrativemind_"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/instagramLogo.svg"
                alt="instagram logo"
                className="w-[90px] mt-[10px]"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.tiktok.com/@thenarrativemind"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/tiktok.svg"
                alt="tiktok logo"
                className="w-[60px]"
              />
            </a>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <HiOutlineMail />
            gabriellalaportamft@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <HiOutlineLocationMarker className="-mt-[4px]" />
            Thousand Oaks, CA 91360
          </li>
        </ul>
        <p className="text-sm">Supervised by JoHanna Jones, LMFT #46000</p>
      </div>
    </section>
  );
};

export default IntakeFormsAndSocials;
