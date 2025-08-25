import ClientsSlickCarousel from "./carousal/ClientsSlickCarousel";
import { OurClient } from "../types";
const Clients = ({ heading, description, review }: Readonly<OurClient>) => {
  return (
    <section className='bg-primary px-[40px] md:px-[80px]'>
      <div className='pt-[100px] pb-[64px]'>
        <h1 className='text-base md:text-[40px] font-bold text-white pb-6'>
          {heading}
        </h1>
        <p className='text-sm md:text-lg text-gray-300'>{description}</p>
      </div>
      <div>
        <ClientsSlickCarousel clients={review} />
      </div>
    </section>
  );
};

export default Clients;
