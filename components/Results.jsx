import React, { useState, useEffect } from "react";
import moment from "moment";
import Row from "./Row";
import CodeGroup from './Timestamp';

const Results = props => {

  const [timestamp, setTimestamp] = useState("");

  useEffect( () => {
    setTimestamp(Date.parse(props.dateTime)/1000);
  }, [props.dateTime])

  return (
    <>

      <Row>
        <label>{moment(props.dateTime).format('LLL')}</label>
        <CodeGroup label="Short Date Time" value={`<t:${timestamp}:f>`} />
      </Row>

      <Row>
        <label>{moment(props.dateTime).format('LLLL')}</label>
        <CodeGroup label="Long Date Time" value={`<t:${timestamp}:F>`} />
      </Row>

      <Row>
        <label>{moment(props.dateTime).format('L')}</label>
        <CodeGroup label="Short Date" value={`<t:${timestamp}:d>`} />
      </Row>

      <Row>
        <label>{moment(props.dateTime).format('LL')}</label>
        <CodeGroup label="Long Date" value={`<t:${timestamp}:D>`} />
      </Row>

      <Row>
        <label>{moment(props.dateTime).format('LT')}</label>
        <CodeGroup label="Short Time" value={`<t:${timestamp}:t>`} />
      </Row>

      <Row>
        <label>{moment(props.dateTime).format('LTS')}</label>
        <CodeGroup label="Long Time" value={`<t:${timestamp}:T>`} />
      </Row>

      <Row>
        <label>{moment(props.dateTime).fromNow()}</label>
        <CodeGroup label="Relative Time" value={`<t:${timestamp}:R>`} />
      </Row>

    </>
  );
}

export default Results;