import TeamSlickCarousal from "../carousal/TeamSlickCarousal";
import type { OurTeam } from "../types";

const OurTeam = ({heading,description,member}: Readonly<OurTeam>) => {
  
  return (
    <section id="our-team" className='py-31 bg-bg'>
      <div className='flex flex-col items-center justify-center text-center gap-5 pb-12'>
        <h1 className='font-bold text-[40px]'>{heading}</h1>
        <p className='max-w-2xl font-medium text-sm ms:text-lg text-secondary px-20'>
          {description}
        </p>
      </div>
      <TeamSlickCarousal team={member} />
    </section>
  );
};

export default OurTeam;
