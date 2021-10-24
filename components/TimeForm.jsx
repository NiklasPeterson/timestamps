import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from "moment";

const TimeForm = props => {

  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(new Date()).format('HH:mm'));

  useEffect( () => {
    const dateTime = new Date(`${date}T${time}`);
    props.newTime(dateTime);
  }, [date, time]);

  return (
    <ScTimeForm>
        <ScDatepicker
          label="Date"
          type="date"
          onChange={ e => setDate(e.target.value) }
          defaultValue={ date }
          InputLabelProps={{ shrink: true }}
        />
        <ScDatepicker
          label="Time"
          type="time"
          onChange={ e => setTime(e.target.value) }
          defaultValue={ time }
          InputLabelProps={{ shrink: true }}
        />
    </ScTimeForm>
  );

}

export default TimeForm;

const ScTimeForm = styled.div`
  text-align:center;
`; 

const ScDatepicker = styled.input`
	background: var(--color-background);
  color: var(--color-text);
	border: 2px solid var(--color-text);
	box-shadow: none;
	padding: 5px;
	border-radius: 4px;
  margin-bottom: 24px;

&:first-child {
  border-radius: 4px 0 0 4px;
  margin-right: -2.5px;
  border-right: 0;
}

&:last-child {
  margin-left: -2.5px;
  border-radius: 0 4px 4px 0;
  border-left: 0;
}
`;