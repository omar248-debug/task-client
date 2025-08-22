"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OurTeam } from "../types";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

type Props = {
  team: OurTeam["member"];
};

function SlickCarousal({ team }: Props) {
  if (!team || team.length === 0) return null;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // large screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // md - tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640, // sm - mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-wrapper max-w-[1200px] mx-auto px-10 md:px-30'>
      <Slider {...settings} className='px-2'>
        {Object.values(team).map((member, index) => (
          <div key={index} className='px-2'>
            <div className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 h-full'>
              <div className='w-full h-64 overflow-hidden rounded-lg'>
                <Image
                  src={`${member.memberPhoto.url}`}
                  alt={member.memberPhoto.alternativeText || "person"}
                  width={271}
                  height={271}
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='flex flex-col items-center justify-center mt-4 gap-2 text-center'>
                <p className='font-semibold'>{member.memberName}</p>
                <p className='text-gray-500'>{member.memberPosition}</p>
                <div className='flex gap-4 items-center justify-center text-xl'>
                  <Link href={member.memberWhatsApp}>
                    <BsWhatsapp />
                  </Link>
                  <Link href={`tel:${member.memberNumber}`}>
                    <FiPhoneCall />
                  </Link>
                  <Link href={`mailto:${member.memberEmail}`}>
                    <CiMail />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default SlickCarousal;

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className='absolute top-1/2 right-1 md:right-[-80px] z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow rounded-full p-2 hover:bg-gray-200'
    >
      <FaChevronRight className='text-gray-800 text-lg' />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className='absolute top-1/2 left-1 md:left-[-80px] z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow rounded-full p-2 hover:bg-gray-200'
    >
      <FaChevronLeft className='text-gray-800 text-lg' />
    </div>
  );
}
