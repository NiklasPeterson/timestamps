import React, { useState, useEffect, useCallback } from 'react';
import moment from "moment";

interface DatePickerProps {
  newTime: (dateTime: Date) => void; // Add newTime prop with the correct type
}

const DatePicker: React.FC<DatePickerProps> = ({ newTime }) => {
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
    <div className="flex flex-col gap-2">
      <span className="text-lg font-semibold leading-7">Change date and time to your get started</span>
      <div className="flex gap-2">
        <div className="input w-full">
          <input
            type="date"
            onChange={e => setDate(e.target.value)}
            value={date}
            aria-label="Date"
            placeholder="mm/dd/yyyy"
            className="appearance-none bg-transparent"
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.17157 2.67157 3.5 3.5 3.5H12.5C13.3284 3.5 14 4.17157 14 5V12.5M2 12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5M2 12.5V7.5C2 6.67157 2.67157 6 3.5 6H12.5C13.3284 6 14 6.67157 14 7.5V12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-current" />
          </svg>
        </div>
        <div className="input w-full">
          <input
            type="time"
            onChange={e => setTime(e.target.value)}
            value={time}
            aria-label="Time"
            placeholder="––:–– AM"
            className="appearance-none bg-transparent"
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4V8H11M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-current" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
