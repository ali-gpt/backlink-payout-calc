import React, { useState, useMemo } from 'react';
import { CriteriaCard } from './CriteriaCard';
import { CRITERIA_DATA } from '../types/calculator';

export const MaxWidthContainer = () => {
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelectionChange = (criteriaId: string, value: string) => {
    setSelections(prev => ({
      ...prev,
      [criteriaId]: value
    }));
  };

  const selectedCount = Object.keys(selections).length;
  const totalCriteria = CRITERIA_DATA.length;

  const totalPayout = useMemo(() => {
    let total = 0;
    Object.entries(selections).forEach(([criteriaId, value]) => {
      const criteria = CRITERIA_DATA.find(c => c.id === criteriaId);
      if (criteria) {
        const option = criteria.options.find(opt => opt.label === value);
        if (option) {
          total += option.value;
        }
      }
    });
    return total;
  }, [selections]);

  const isComplete = selectedCount === totalCriteria;

  return (
    <div className="box-border caret-transparent max-w-4xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center mb-6">
        <h1 className="text-2xl font-medium box-border caret-transparent leading-9 outline-[oklab(0.708_0_0_/_0.5)] mb-2">
          Backlink Payout Calculator
        </h1>
        <p className="text-[oklch(0.446_0.043_257.281)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          Calculate the recommended maximum payout based on comprehensive quality criteria
        </p>
      </div>

      <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 border rounded-[14px] border-solid border-black/10">
        {selectedCount === 0 ? (
          <div className="bg-[oklch(0.984_0.003_247.858)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border-b-2 border-solid border-[oklch(0.929_0.013_255.508)]">
            <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.5)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none inset-0"></div>
              <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-6">
                <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
                  <div className="items-center bg-[oklch(0.968_0.007_247.896)] box-border caret-transparent flex h-16 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-16 mb-3 mx-auto rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhpshpbzxw83st/assets/icon-1.svg"
                      alt="Icon"
                      className="text-[oklch(0.704_0.04_256.788)] box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                    />
                  </div>
                  <h3 className="text-[oklch(0.446_0.043_257.281)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                    Start Selecting
                  </h3>
                  <p className="text-[oklch(0.554_0.046_257.417)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                    Select criteria below to calculate the recommended payout
                  </p>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                    <span className="text-gray-950 text-xs font-medium items-center bg-[oklch(0.95_0.0058_264.53)] box-border caret-transparent gap-x-1 inline-flex shrink-0 justify-center leading-4 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1 text-nowrap w-fit border overflow-hidden px-2 py-0.5 rounded-lg border-solid border-transparent">
                      {selectedCount} / {totalCriteria} selected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[oklch(0.984_0.003_247.858)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border-b-2 border-solid border-[oklch(0.929_0.013_255.508)]">
            <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.5)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none inset-0"></div>
              <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-6">
                <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
                  <div className="items-center bg-[oklch(0.968_0.007_247.896)] box-border caret-transparent flex h-16 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-16 mb-3 mx-auto rounded-[3.35544e+07px]">
                    <img
                      src="https://c.animaapp.com/mhpshpbzxw83st/assets/icon-1.svg"
                      alt="Icon"
                      className="text-[oklch(0.704_0.04_256.788)] box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                    />
                  </div>
                  <h3 className="text-[oklch(0.446_0.043_257.281)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                    Recommended Payout
                  </h3>
                  <p className="text-[oklch(0.554_0.046_257.417)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                    Based on your selections, the recommended maximum payout is:
                  </p>
                  <div className="text-4xl font-bold text-[oklch(0.446_0.043_257.281)] mb-3">
                    ${totalPayout.toFixed(0)}
                  </div>
                  <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                    <span className="text-gray-950 text-xs font-medium items-center bg-[oklch(0.95_0.0058_264.53)] box-border caret-transparent gap-x-1 inline-flex shrink-0 justify-center leading-4 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1 text-nowrap w-fit border overflow-hidden px-2 py-0.5 rounded-lg border-solid border-transparent">
                      {selectedCount} / {totalCriteria} selected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="items-start box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-1.5 pt-6 px-6">
          <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
              <h4 className="font-medium box-border caret-transparent leading-4 outline-[oklab(0.708_0_0_/_0.5)]">
                Quality Assessment
              </h4>
              <p className="text-gray-500 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                Evaluate backlink quality based on multiple criteria
              </p>
            </div>
            <span className="text-gray-950 text-xs font-medium items-center bg-[oklch(0.95_0.0058_264.53)] box-border caret-transparent gap-x-1 flex shrink-0 justify-center leading-4 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1 text-nowrap w-fit border overflow-hidden px-2 py-0.5 rounded-lg border-solid border-transparent">
              {selectedCount} / {totalCriteria} selected
            </span>
          </div>
        </div>

        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-6">
          {CRITERIA_DATA.map((criteria) => (
            <CriteriaCard
              key={criteria.id}
              criteria={criteria}
              value={selections[criteria.id] || ''}
              onChange={(value) => handleSelectionChange(criteria.id, value)}
            />
          ))}
        </div>

        <div className="bg-[oklch(0.984_0.003_247.858)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border-t-2 border-solid border-[oklch(0.929_0.013_255.508)]">
          <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.5)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none inset-0"></div>
            <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-6">
              <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center">
                <div className="items-center bg-[oklch(0.968_0.007_247.896)] box-border caret-transparent flex h-16 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-16 mb-3 mx-auto rounded-[3.35544e+07px]">
                  <img
                    src="https://c.animaapp.com/mhpshpbzxw83st/assets/icon-1.svg"
                    alt="Icon"
                    className="text-[oklch(0.704_0.04_256.788)] box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                  />
                </div>
                <h3 className="text-[oklch(0.446_0.043_257.281)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                  Recommended Payout
                </h3>
                <p className="text-[oklch(0.554_0.046_257.417)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                  Based on your selections, the recommended maximum payout is:
                </p>
                <div className="text-4xl font-bold text-[oklch(0.446_0.043_257.281)] mb-3">
                  ${totalPayout.toFixed(0)}
                </div>
                <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                  <span className="text-gray-950 text-xs font-medium items-center bg-[oklch(0.95_0.0058_264.53)] box-border caret-transparent gap-x-1 inline-flex shrink-0 justify-center leading-4 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1 text-nowrap w-fit border overflow-hidden px-2 py-0.5 rounded-lg border-solid border-transparent">
                    {selectedCount} / {totalCriteria} selected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
