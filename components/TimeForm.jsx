import React, { useState, useEffect } from 'react';
import moment from "moment";

const TimeForm = props => {

  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(new Date()).format('HH:mm'));

  useEffect( () => {
    const dateTime = new Date(`${date}T${time}`);
    props.newTime(dateTime);
  }, [date, time]);

  return (
    <div style={{padding: "20px"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
          <input
            label="Date"
            type="date"
            onChange={ e => setDate(e.target.value) }
            defaultValue={ date }
            InputLabelProps={{ shrink: true }}
          />
        
          <input
            label="Time"
            type="time"
            onChange={ e => setTime(e.target.value) }
            defaultValue={ time }
            InputLabelProps={{ shrink: true }}
          />
      </div>
    </div>
  );

}

export default TimeForm;