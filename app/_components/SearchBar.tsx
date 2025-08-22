"use client";
import { FiSearch, FiX } from "react-icons/fi";
import { useState } from "react";

interface SearchBarProps {
  onToggle: (open: boolean) => void;
}

const SearchBar = ({ onToggle }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const toggleSearch = () => {
    const nextState = !open;
    setOpen(nextState);
    if (!nextState) setValue("");
    onToggle(nextState);
  };

  return (
    <div className='flex items-center gap-2'>
      {open ? (
        <>
          <input
            type='text'
            placeholder='Search...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='px-3 py-2 rounded-md text-white w-[280px]'
            autoFocus
          />
          <button onClick={toggleSearch} className='text-2xl'>
            <FiX />
          </button>
        </>
      ) : (
        <button onClick={toggleSearch} className='text-2xl'>
          <FiSearch className="cursor-pointer"/>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
