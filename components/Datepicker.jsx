import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from "moment";

const Datepicker = props => {

  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(new Date()).format('HH:mm'));

  useEffect( () => {
    const dateTime = new Date(`${date}T${time}`);
    props.newTime(dateTime);
  }, [date, time]);

  return (
    <ScDateWrapper>
      <ScDatepicker>
          <ScInput
            label="Date"
            type="date"
            onChange={ e => setDate(e.target.value) }
            defaultValue={ date }
            inputlabelprops={{ shrink: true }}
          />
          <ScInput
            label="Time"
            type="time"
            onChange={ e => setTime(e.target.value) }
            defaultValue={ time }
            inputlabelprops={{ shrink: true }}
          />
      </ScDatepicker>
    </ScDateWrapper>
  );

}

export default Datepicker;

const ScDateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ScDatepicker = styled.div`
  border: 1px solid var(--color-text);
  border-radius: 4px;
  align-items: center;
  display: flex;
  padding: 8px;
`; 

const ScInput = styled.input`
	background: var(--color-background);
  color: var(--color-text);
  font-size: 14px;
	box-shadow: none;
  padding: 0;
  border: 0;
  margin: 0;
  
  ::-webkit-calendar-picker-indicator {
    filter: var(--color-date-icon);
}

  &:first-child {
  padding-right: 4px;
  }

  &:last-child {
    padding-left: 4px;
  }
`;