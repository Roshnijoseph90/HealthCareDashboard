import React from 'react';
import '../Styles/CalenderView.css';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Static mock appointments
const appointments = {
  4: ['09:00'],
  11: ['11:00'],
  18: ['13:00'],
  21: ['09:00', '11:00'],
  24: ['11:00'],
  28: ['12:00'],
  31: ['09:00']
};

const CalendarView = () => {
  const year = 2021;
  const month = 9; // October (0-based index)

  const daysInMonth = 31;
  const firstDay = new Date(year, month, 1).getDay(); // 5 (Friday)
  const firstDayIndex = (firstDay + 6) % 7; // Adjusting so Mon = 0

  const totalCells = 42; // 6 weeks grid

  const renderCalendarGrid = () => {
    const cells = [];

    for (let i = 0; i < totalCells; i++) {
      const dayNum = i - firstDayIndex + 1;

      if (dayNum < 1 || dayNum > daysInMonth) {
        cells.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
      } else {
        const appts = appointments[dayNum] || [];
        cells.push(
          <div key={dayNum} className="calendar-day">
            <div className="day-number">{dayNum}</div>
            <div className="appointments">
              {appts.map((time, idx) => (
                <div key={idx} className="time-slot">{time}</div>
              ))}
            </div>
          </div>
        );
      }
    }

    return cells;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>October 2021</h3>
      </div>

      <div className="calendar-days">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="day-label">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {renderCalendarGrid()}
      </div>

      <div className="appointment-cards">
        <div className="appointment-card blue">
          <h4>Dentist</h4>
          <p>09:00 - 11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>

        <div className="appointment-card purple">
          <h4>Physiotherapy Appointment</h4>
          <p>11:00 - 12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
