"use client";
import type { Header as IHeader } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import SearchBar from "./SearchBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../featured/store";
import { setLang } from "../featured/lang/languageSlice";

const Header = ({ data }: Readonly<IHeader | any>) => {
  const lang = useSelector((state: RootState) => state.lang.lang);
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  if (!data) return null;
  const { logo, navigation, cta } = data;
  return (
    <header className='flex items-center justify-between bg-primary px-10 py-5 text-white relative'>
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={`${logo.image.url}`}
          alt={logo.image.alternativeText || "Logo"}
          width={60}
          height={60}
          className='object-cover'
        />
      </Link>

      {/* Desktop Nav */}
      {!searchOpen && <DesktopNav navigation={navigation} />}

      {/* Right Side */}
      <div className='hidden md:flex items-center gap-4'>
        <SearchBar onToggle={setSearchOpen} />
        <button onClick={() => dispatch(setLang(lang == "en" ? "ar" : "en"))}>
          {lang == "en" ? "ع" : "EN"}
        </button>
        <Link
          href={cta.href}
          target={cta.isExternal ? "_blank" : "_self"}
          className='border rounded-lg text-white px-4 py-2'
        >
          {cta.text}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-3xl'
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Nav */}
      {mobileOpen && (
        <MobileNav
          navigation={navigation}
          cta={cta}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
