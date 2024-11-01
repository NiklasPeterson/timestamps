import React, { useMemo } from "react";
import moment from "moment";
import ResultItem from "./ResultItem";

const FORMATS = [
  { label: "Short Date Time", format: "LLL", code: "f" },
  { label: "Long Date Time", format: "LLLL", code: "F" },
  { label: "Short Date", format: "L", code: "d" },
  { label: "Long Date", format: "LL", code: "D" },
  { label: "Short Time", format: "LT", code: "t" },
  { label: "Long Time", format: "LTS", code: "T" },
  { label: "Relative Time", format: "fromNow", code: "R" },
];

// Helper function to format the date
const formatDate = (dateTime: string, format: string) => {
  return format === "fromNow" ? moment(dateTime).fromNow() : moment(dateTime).format(format);
};

const ResultList: React.FC<{ dateTime: string }> = ({ dateTime }) => {
  const timestamp = useMemo(() => Math.floor(moment(dateTime).valueOf() / 1000), [dateTime]);

  // Memoize formatted dates to avoid recalculating on every render
  const formattedDates = useMemo(() => 
    FORMATS.map(({ format }) => formatDate(dateTime, format)), 
    [dateTime]
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      {FORMATS.map(({ label, code }, index) => (
        <ResultItem key={label} label={label} value={`<t:${timestamp}:${code}>`}>
          <div className="w-full block px-2 contentSecondary text-sm md:text-base">
            {formattedDates[index]} {/* Use memoized formatted date */}
          </div>
        </ResultItem>
      ))}
    </div>
  );
}

export default ResultList;