import React from 'react';
import { Select } from './ui/Select';
import { Tooltip } from './ui/Tooltip';
import { Criteria } from '../types/calculator';

interface CriteriaCardProps {
  criteria: Criteria;
  value: string;
  onChange: (value: string) => void;
}

export const CriteriaCard: React.FC<CriteriaCardProps> = ({ criteria, value, onChange }) => {
  const isSelected = !!value;
  const selectedOption = criteria.options.find(opt => opt.label === value);

  if (isSelected) {
    return (
      <div className="bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4 p-3 rounded-[10px] border-2 border-solid border-[oklch(0.929_0.013_255.508)]">
        <div className="items-center box-border caret-transparent gap-x-3 flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="items-center box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="bg-[oklch(0.968_0.007_247.896)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-2 rounded-[10px]">
              <img
                src={criteria.icon}
                alt="Icon"
                className="text-[oklch(0.446_0.043_257.281)] box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4"
              />
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] flex items-center">
              <label className="text-sm font-medium box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                {criteria.label}
              </label>
              <Tooltip content={criteria.tooltip} />
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)]">
            <span className="text-sm text-[oklch(0.446_0.043_257.281)] font-medium whitespace-nowrap">
              ${selectedOption?.value}
            </span>
            <div className="min-w-[200px]">
              <Select
                value={value}
                onValueChange={onChange}
                options={criteria.options.map(opt => ({
                  label: opt.label,
                  value: opt.label
                }))}
                placeholder="Select option"
              />
            </div>
            <button
              type="button"
              onClick={() => onChange('')}
              className="text-[oklch(0.554_0.046_257.417)] hover:text-[oklch(0.446_0.043_257.281)] transition-colors flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4 p-4 rounded-[10px] border-2 border-solid border-[oklch(0.929_0.013_255.508)]">
      <div className="items-start box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3 mb-3">
        <div className="bg-[oklch(0.968_0.007_247.896)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-2 rounded-[10px]">
          <img
            src={criteria.icon}
            alt="Icon"
            className="text-[oklch(0.446_0.043_257.281)] box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4"
          />
        </div>
        <div className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)]">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
            {criteria.label}
            <Tooltip content={criteria.tooltip} />
          </label>
        </div>
      </div>
      <Select
        value={value}
        onValueChange={onChange}
        options={criteria.options.map(opt => ({
          label: opt.label,
          value: opt.label
        }))}
        placeholder="Select option"
      />
    </div>
  );
};
