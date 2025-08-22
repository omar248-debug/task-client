"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DesktopNav = ({ navigation }: { navigation: any[] }) => {
  const [showDropdown, setShowDropdown] = useState<any[] | null>(null);

  return (
    <header>
      <ul className='hidden md:flex items-center gap-6'>
        {navigation.map((item) => (
          <li key={item.id} className='relative flex items-center gap-1'>
            <Link
              href={item.href || "#"}
              target={item.isExternal ? "_blank" : "_self"}
              onClick={(e) => {
                if (item.dropdown.length > 0) {
                  e.preventDefault();
                  setShowDropdown(
                    showDropdown === item.dropdown ? null : item.dropdown
                  );
                }
              }}
              className='flex items-center gap-1'
            >
              <h4>{item.text}</h4>
              {item.dropdown.length > 0 &&
                (showDropdown === item.dropdown ? (
                  <FiChevronUp size={16} />
                ) : (
                  <FiChevronDown size={16} />
                ))}
            </Link>
          </li>
        ))}
      </ul>

      {showDropdown &&
        createPortal(
          <div
            className='grid grid-cols-4 gap-4 w-[90%] h-[280px] absolute bg-primary rounded-b-lg p-5 left-1/2 -translate-x-1/2'
            style={{ top: 100}}
          >
            {showDropdown.map((link, idx) => (
              <Link
                key={idx}
                href={`/services/${link.href}/`}
                className='text-sm text-white hover:underline hover:scale-105'
                onClick={() => setShowDropdown(null)}
              >
                {link.text}
              </Link>
            ))}
          </div>,
          document.body
        )}
    </header>
  );
};

export default DesktopNav;
