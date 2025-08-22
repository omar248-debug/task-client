"use client";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted ✅", values);
      resetForm();
    },
  });

  return (
    <footer className='bg-primary text-white mt-6 px-6 md:px-20 py-10'>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row items-center justify-end gap-6 pb-8'>
        {/* Form */}
        <form
          onSubmit={formik.handleSubmit}
          className='relative flex items-center gap-3 w-full md:w-auto'
        >
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            className='bg-white rounded-lg text-black px-4 py-3 w-full md:w-[350px] focus:outline-none'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type='submit'
            className='absolute right-2 bg-primary rounded-lg py-2 px-5 text-white hover:bg-opacity-90 transition'
          >
            Subscribe
          </button>
          {formik.touched.email && formik.errors.email ? (
            <p className='absolute -bottom-6 left-1 text-red-400 text-xs'>
              {formik.errors.email}
            </p>
          ) : null}
        </form>

        {/* Socials */}
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
          <p className='font-medium'>Contacts</p>
          <div className='flex gap-6'>
            <BsTwitter size={20} className='cursor-pointer hover:opacity-80' />
            <BsFacebook size={20} className='cursor-pointer hover:opacity-80' />
            <FaGooglePlusG size={25} className='cursor-pointer hover:opacity-80' />
          </div>
        </div>
      </div>

      <hr className='border-gray-400/30' />

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
        <div className='flex flex-wrap gap-4 md:gap-8 justify-center'>
          <Link href='/' className='hover:underline text-sm md:text-base'>
            About
          </Link>
          <Link href='/' className='hover:underline text-sm md:text-base'>
            Our Strategy
          </Link>
          <Link href='/' className='hover:underline text-sm md:text-base'>
            Our Advantages
          </Link>
          <Link href='/' className='hover:underline text-sm md:text-base'>
            Social Responsibility
          </Link>
          <Link href='/' className='hover:underline text-sm md:text-base'>
            Our Services
          </Link>
        </div>
        <p className='text-xs md:text-sm text-center'>
          © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
