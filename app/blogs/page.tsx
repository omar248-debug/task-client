import Link from "next/link";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const Blogs = () => {
  return (
    <section className='text-primary flex flex-col md:flex-row items-center gap-8 pb-50 pt-10 px-10'>
      <div className='p-10 rounded bg-[#FAFAFA] flex flex-col items-center justify-center gap-10'>
        <Link href={"/"} className="font-semibold text-xl">Team</Link>
        <Link href={"/"} className="font-semibold text-xl">Services</Link>
      </div>
      <div className='space-y-5'>
        <Link href='/' className='flex items-center gap-1 mb-6 w-fit'>
          <FiChevronLeft /> Back
        </Link>
        <div>
          <p> Law Firm is one of the leading legal offices</p>
          <Link href={"/"} className='underline'>
            Read more
          </Link>
        </div>
        <hr />
        <div>
          <p> Law Firm is one of the leading legal offices</p>
          <Link href={"/"} className='underline'>
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
