import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WorkSheet = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    return (
        <div>
            <form  className='flex' action="">

                <div className="form-control">
                <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
<option value="volvo">Volvo</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
                </div>
                <div className="form-control">
      <label className="label">
        <span className="label-text">Hours</span>
      </label>
      <input type="number" name='hours' placeholder="Hours" className="input input-bordered text-black" required />
     
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
      />
    </div>
    
     
    </div>

            </form>
        </div>
    );
};

export default WorkSheet;