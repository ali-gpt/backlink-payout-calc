import { ContentArea } from "@/components/ContentArea";

export const PageWrapper = () => {
  return (
    <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[1000px] min-h-px min-w-px outline-[oklab(0.708_0_0_/_0.5)] w-full">
      <ContentArea />
    </div>
  );
};
