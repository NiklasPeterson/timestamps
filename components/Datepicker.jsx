import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import moment from "moment";

const Datepicker = ({ newTime }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment().format('HH:mm'));

  const updateDateTime = useCallback(() => {
    const dateTime = new Date(`${date}T${time}`);
    newTime(dateTime);
  }, [date, time, newTime]);

  useEffect(() => {
    updateDateTime();
  }, [updateDateTime]);

  return (
    <ScDateWrapper>
      <ScDatepicker>
        <ScInput
          label="Date"
          type="date"
          onChange={e => setDate(e.target.value)}
          value={date}
          aria-label="Date"
        />
        <ScInput
          label="Time"
          type="time"
          onChange={e => setTime(e.target.value)}
          value={time}
          aria-label="Time"
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