import Image from "next/image";
import { HeroSection } from "../types";
import { getStrapiURL } from "../../utils/gatStrapiUrl";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../featured/store";

const Hero = ({
  heading,
  bgImage,
  personImage,
  description,
  cta,
}: Readonly<HeroSection>) => {
  const lang = useSelector((state: RootState) => state.lang.lang);
  console.log(getStrapiURL(), personImage.url);

  return (
    <section
      className='h-screen w-full flex gap-19 items-center px-17'
      style={{ backgroundImage: `url(${bgImage.url})` }}
      dir={lang == "ar" ? "rtl" : "ltr"}
    >
      <div className='w-[700px]'>
        <h1 className='font-bold text-base md:text-[40px] text-white mb-9'>
          {heading}
        </h1>
        <p className='font-medium text-sm md:text-base tracking-tight text-white mb-17'>
          {description}
        </p>

        {cta && (
          <button className='bg-white rounded-lg text-primary px-4 md:px-9 py-2 md:py-4'>
            <Link href={cta?.href} target={cta.isExternal ? "_blank" : "_self"}>
              {cta?.text}
            </Link>
          </button>
        )}
      </div>
      <div className='hidden lg:flex'>
        <Image
          src={`${personImage.url}`}
          alt={personImage.alternativeText || "Person Image"}
          height={374}
          width={374}
          className='object-cover'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
