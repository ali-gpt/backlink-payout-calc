import React, { useState, useRef, useEffect } from 'react';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = 'Select option'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm items-center bg-gray-100 caret-transparent gap-x-2 flex h-9 justify-between leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap w-full border px-3 py-2 rounded-lg border-solid border-transparent hover:bg-gray-200 transition-colors cursor-pointer"
      >
        <span className={`items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none gap-y-2 text-nowrap overflow-hidden text-left ${selectedOption ? 'text-gray-900' : 'text-gray-500'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <img
          src="https://c.animaapp.com/mhpshpbzxw83st/assets/icon-3.svg"
          alt="Icon"
          className={`box-border caret-transparent shrink-0 h-4 opacity-50 outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none text-nowrap w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => (
            <button
              key={`${option.value}-${index}`}
              type="button"
              onClick={() => {
                onValueChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                value === option.value ? 'bg-gray-50 font-medium' : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
