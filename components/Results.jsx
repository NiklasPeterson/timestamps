import React, { useMemo } from "react";
import moment from "moment";
import Row from "./Row";
import CodeGroup from './Timestamp';

const FORMATS = [
  { label: "Short Date Time", format: "LLL", code: "f" },
  { label: "Long Date Time", format: "LLLL", code: "F" },
  { label: "Short Date", format: "L", code: "d" },
  { label: "Long Date", format: "LL", code: "D" },
  { label: "Short Time", format: "LT", code: "t" },
  { label: "Long Time", format: "LTS", code: "T" },
  { label: "Relative Time", format: "fromNow", code: "R" },
];

const Results = ({ dateTime }) => {
  const timestamp = useMemo(() => Math.floor(Date.parse(dateTime) / 1000), [dateTime]);

  const renderRows = () => {
    return FORMATS.map(({ label, format, code }) => (
      <Row key={label}>
        <label>{format === "fromNow" ? moment(dateTime).fromNow() : moment(dateTime).format(format)}</label>
        <CodeGroup label={label} value={`<t:${timestamp}:${code}>`} />
      </Row>
    ));
  };

  return (
    <section className="results">
      {renderRows()}
    </section>
  );
}

export default Results;