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
        <label>{moment(props.dateTime).format('LLL')}</label>
        <CodeGroup label="Default Date Time" value={`<t:${timestamp}>`} />
      </ResultRow>

      <ResultRow>
        <label>{moment(props.dateTime).format('LLL')}</label>
        <CodeGroup label="Short Date Time" value={`<t:${timestamp}:f>`} />
      </ResultRow>

      <ResultRow>
        <label>{moment(props.dateTime).format('LLLL')}</label>
        <CodeGroup label="Long Date Time" value={`<t:${timestamp}:F>`} />
      </ResultRow>

      <ResultRow>
        <label>{moment(props.dateTime).format('L')}</label>
        <CodeGroup label="Short Date" value={`<t:${timestamp}:d>`} />
      </ResultRow>

      <ResultRow>
        <label>{moment(props.dateTime).format('LL')}</label>
        <CodeGroup label="Long Date" value={`<t:${timestamp}:D>`} />
      </ResultRow>

      <ResultRow>
        <label>{moment(props.dateTime).format('LT')}</label>
        <CodeGroup label="Short Time" value={`<t:${timestamp}:t>`} />
      </ResultRow>

      {/* <ResultRow>
        <label>{moment(props.dateTime).format('Ltimestamp')}</label>
        <CodeGroup label="Long Time" value={`<t:${timestamp}:T>`} />
      </ResultRow> */}

      <ResultRow>
        <label>{moment(props.dateTime).fromNow()}</label>
        <CodeGroup label="Relative Time" value={`<t:${timestamp}:R>`} />
      </ResultRow>

    </>
  );
}

export default TimeStamps;