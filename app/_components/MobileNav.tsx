"use client";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const MobileNav = ({ navigation, cta, onClose }: any) => {
  const [dropdown, setDropdown] = useState<number | null>(null);

  return (
    <div className='absolute top-full left-0 w-full bg-primary flex flex-col items-start gap-4 px-6 py-6 md:hidden z-50'>
      {navigation.map((item: any, idx: number) => (
        <div key={item.id} className='w-full'>
          {item.dropdown.length > 0 ? (
            <>
              <button
                onClick={() => setDropdown(dropdown === idx ? null : idx)}
                className='flex justify-between items-center w-full text-lg'
              >
                {item.text}
                {dropdown === idx ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {dropdown === idx && (
                <div className='flex flex-col pl-4 mt-2 gap-2'>
                  {item.dropdown.map((link: any, i: number) => (
                    <Link
                      key={i}
                      href={`/services/${link.href}`}
                      className='text-sm text-white'
                      onClick={onClose}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href || "#"}
              target={item.isExternal ? "_blank" : "_self"}
              className='text-lg'
              onClick={onClose}
            >
              {item.text}
            </Link>
          )}
        </div>
      ))}

      {/* CTA inside mobile menu */}
      <Link
        href={cta.href}
        target={cta.isExternal ? "_blank" : "_self"}
        className='border rounded-lg text-white px-4 py-2 mt-4 w-full text-center'
        onClick={onClose}
      >
        {cta.text}
      </Link>
    </div>
  );
};

export default MobileNav;
