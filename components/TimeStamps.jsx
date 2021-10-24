import React, { useState, useEffect } from "react";
import moment from "moment";
import ResultRow from "./ResultRow";
import CodeGroup from './CodeGroup';

const TimeStamps = props => {

  const [timestamp, setTimestamp] = useState("");

  useEffect( () => {
    setTimestamp(Date.parse(props.dateTime)/1000);
  }, [props.dateTime])

  return (
    <>

      <ResultRow>
        <span>Format</span>
        <span>Timestamp</span>
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dateTime).format('LLL')}</span>
        <CodeGroup label="Default Date Time" value={`<t:${timestamp}>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dateTime).format('LLL')}</span>
        <CodeGroup label="Short Date Time" value={`<t:${timestamp}:f>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dateTime).format('LLLL')}</span>
        <CodeGroup label="Long Date Time" value={`<t:${timestamp}:F>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dateTime).format('L')}</span>
        <CodeGroup label="Short Date" value={`<t:${timestamp}:d>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dateTime).format('LL')}</span>
        <CodeGroup label="Long Date" value={`<t:${timestamp}:D>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dateTime).format('LT')}</span>
        <CodeGroup label="Short Time" value={`<t:${timestamp}:t>`} />
      </ResultRow>

      {/* <ResultRow>
        <span>{moment(props.dateTime).format('Ltimestamp')}</span>
        <CodeGroup label="Long Time" value={`<t:${timestamp}:T>`} />
      </ResultRow> */}

      <ResultRow>
        <span>{moment(props.dateTime).fromNow()}</span>
        <CodeGroup label="Relative Time" value={`<t:${timestamp}:R>`} />
      </ResultRow>

    </>
  );
}

export default TimeStamps;