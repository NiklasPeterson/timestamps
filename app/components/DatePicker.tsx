import React, { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from "moment";

interface DatePickerProps {
  newTime: (dateTime: Moment) => void;
}

const InputField: React.FC<{
  type: string;
  value: string;
  onChange: (value: string) => void;
  error: boolean;
  ariaLabel: string;
  placeholder: string;
  icon: JSX.Element;
}> = ({ type, value, onChange, error, ariaLabel, placeholder, icon }) => (
  <div className={`input w-full ${error ? 'border-red-500' : ''}`}>
    <input
      type={type}
      onChange={e => onChange(e.target.value)}
      value={value}
      aria-label={ariaLabel}
      placeholder={placeholder}
      className="appearance-none bg-transparent"
    />
    {icon}
  </div>
);

const DatePicker: React.FC<DatePickerProps> = ({ newTime }) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment().format('HH:mm'));
  const [dateError, setDateError] = useState<boolean>(false);
  const [timeError, setTimeError] = useState<boolean>(false);

  const updateDateTime = useCallback(() => {
    const dateTime = moment(`${date}T${time}`);

    const isDateValid = moment(date, 'YYYY-MM-DD', true).isValid();
    const isTimeValid = time && moment(time, 'HH:mm', true).isValid();

    if (isDateValid && isTimeValid) {
      newTime(dateTime);
      setDateError(false);
      setTimeError(false);
    } else {
      setDateError(!isDateValid);
      setTimeError(!isTimeValid);
    }
  }, [date, time, newTime]);

  useEffect(() => {
    updateDateTime();
  }, [updateDateTime]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-lg font-semibold leading-7">Change date and time to get started</span>
      <div className="flex gap-2">
        <InputField
          type="date"
          value={date}
          onChange={setDate}
          error={dateError}
          ariaLabel="Date"
          placeholder="Select a date"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='contentSecondary'>
              <path d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.17157 2.67157 3.5 3.5 3.5H12.5C13.3284 3.5 14 4.17157 14 5V12.5M2 12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5M2 12.5V7.5C2 6.67157 2.67157 6 3.5 6H12.5C13.3284 6 14 6.67157 14 7.5V12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-current" />
            </svg>
          }
        />
        <InputField
          type="time"
          value={time}
          onChange={setTime}
          error={timeError}
          ariaLabel="Time"
          placeholder="Select a time"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='contentSecondary'>
              <path d="M8 4V8H11M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-current" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default DatePicker;
