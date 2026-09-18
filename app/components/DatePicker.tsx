'use client';

import { useId, useState, useSyncExternalStore, type ReactNode } from 'react';
import moment from 'moment';
import { parseDateAndTime } from '../lib/timestamp';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface DatePickerProps {
  onTimestampChange: (timestamp: number) => void;
}

interface InputFieldProps {
  type: 'date' | 'time';
  value: string;
  onChange: (value: string) => void;
  error: boolean;
  label: string;
  errorId: string;
  icon: ReactNode;
}

function InputField({ type, value, onChange, error, label, errorId, icon }: InputFieldProps) {
  return (
    <label className={`input ${error ? 'border-red-500' : ''}`}>
      <span className="sr-only">{label}</span>
      <input
        type={type}
        name={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error || undefined}
        aria-describedby={error ? errorId : undefined}
        className="appearance-none bg-transparent cursor-text min-w-0"
      />
      <span aria-hidden="true">{icon}</span>
    </label>
  );
}

export default function DatePicker({ onTimestampChange }: DatePickerProps) {
  const [date, setDate] = useState(() => moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState(() => moment().format('HH:mm'));
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const timeZone = useSyncExternalStore(
    () => () => {},
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    () => undefined,
  );
  const errorId = useId();
  const isDateValid = moment(date, 'YYYY-MM-DD', true).isValid();
  const isTimeValid = moment(time, 'HH:mm', true).isValid();
  const errorMessage = !isDateValid
    ? 'Enter a valid date.'
    : !isTimeValid
      ? 'Enter a valid time.'
      : null;

  function updateTimestamp(nextDate: string, nextTime: string) {
    const timestamp = parseDateAndTime(nextDate, nextTime);

    if (timestamp !== null) {
      onTimestampChange(timestamp);
    }
  }

  function handleDateChange(value: string) {
    setDate(value);
    updateTimestamp(value, time);
  }

  function handleTimeChange(value: string) {
    setTime(value);
    updateTimestamp(date, value);
  }

  function handleCalendarSelect(selectedDate: Date | undefined) {
    if (!selectedDate) return;

    handleDateChange(moment(selectedDate).format('YYYY-MM-DD'));
    setIsCalendarOpen(false);
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-md font-semibold leading-7">Change date and time to get started</p>

      <div className="flex gap-2 md:hidden">
        <InputField type="date" value={date} onChange={handleDateChange} error={!isDateValid} label="Date" errorId={errorId} icon={<CalendarIcon />} />
        <InputField type="time" value={time} onChange={handleTimeChange} error={!isTimeValid} label="Time" errorId={errorId} icon={<ClockIcon />} />
      </div>

      <div className="hidden md:block">
        <div className="flex gap-2">
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger
              render={
                <button
                  type="button"
                  className={`input !w-44 shrink-0 text-left ${!isDateValid ? 'border-red-500' : ''}`}
                  aria-label="Choose date"
                  aria-describedby={!isDateValid ? errorId : undefined}
                >
                  <span>{isDateValid ? moment(date).format('MMM D, YYYY') : 'Choose a date'}</span>
                  <CalendarIcon />
                </button>
              }
            />
            <PopoverContent align="start" sideOffset={8} className="w-fit p-0">
              <Calendar
                mode="single"
                selected={isDateValid ? moment(date, 'YYYY-MM-DD').toDate() : undefined}
                onSelect={handleCalendarSelect}
                captionLayout="dropdown"
                startMonth={new Date(1970, 0)}
                endMonth={new Date(2100, 11)}
                timeZone={timeZone}
              />
            </PopoverContent>
          </Popover>
          <div className="min-w-0 flex-1">
            <InputField type="time" value={time} onChange={handleTimeChange} error={!isTimeValid} label="Time" errorId={errorId} icon={<ClockIcon />} />
          </div>
        </div>
      </div>

      <p id={errorId} className={errorMessage ? 'text-sm text-red-600 dark:text-red-400' : 'sr-only'} aria-live="polite">
        {errorMessage}
      </p>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" className="contentSecondary">
      <path d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.17157 2.67157 3.5 3.5 3.5H12.5C13.3284 3.5 14 4.17157 14 5V12.5M2 12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5M2 12.5V7.5C2 6.67157 2.67157 6 3.5 6H12.5C13.3284 6 14 6.67157 14 7.5V12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-current" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" className="contentSecondary">
      <path d="M8 4V8H11M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-current" />
    </svg>
  );
}
