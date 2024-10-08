import React from "react";


const MetricsCard = ({
  title,
  value,
  icon: Icon,
  onClick,
}) => (
  <div
    className="h-[200px] flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-[#13131a] hover:bg-neutral-800 transition-colors duration-200"
    onClick={onClick}
  >
    <div className="flex justify-between gap-x-3 p-4 md:p-5">
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
          {title}
        </p>
        <div className="mt-1 flex items-center gap-x-2">
          <h3 className="text-xl font-medium text-gray-800 sm:text-2xl dark:text-neutral-200">
            {value}
          </h3>
        </div>
      </div>
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-[#1c1c24] dark:text-blue-200">
        <Icon size={25} className="text-[#FF9874]" />
      </div>
    </div>
  </div>
);

export default MetricsCard;
