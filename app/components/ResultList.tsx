import React, { useMemo } from "react";
import moment from "moment";
import ResultItem from "./ResultItem";

const FORMATS = [
  { label: "Short Date Time", format: "LLL", code: "f" },
  { label: "Long Date Time", format: "LLLL", code: "F" },
  { label: "Short Date", format: "L", code: "d" },
  { label: "Long Date", format: "LL", code: "D" },
  { label: "Short Time", format: "LT", code: "t" },
  { label: "Relative Time", format: "fromNow", code: "R" },
];

const ResultList: React.FC<{ dateTime: string }> = ({ dateTime }) => {
  const rows = useMemo(() => {
    const m = moment(dateTime);
    const timestamp = Math.floor(m.valueOf() / 1000);
    return FORMATS.map(({ label, format, code }) => ({
      label,
      value: `<t:${timestamp}:${code}>`,
      display: format === "fromNow" ? m.fromNow() : m.format(format),
    }));
  }, [dateTime]);

  return (
    <div className="flex flex-col gap-2 w-full">
      {rows.map(({ label, value, display }) => (
        <ResultItem key={label} label={label} value={value}>
          <div className="w-full block px-2 contentSecondary select-none text-sm md:text-base">
            {display}
          </div>
        </ResultItem>
      ))}
    </div>
  );
}

export default ResultList;