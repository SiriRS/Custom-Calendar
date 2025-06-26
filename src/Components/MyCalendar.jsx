import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Edit3,
  Trash2,
  Plus,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";

function MyCalendar() {
  const month = "June";
  const year = 2025;
  const daysInMonth = 30;
  const firstDayOfMonth = 0; //sunday
  //to create the grid with empty spots and all days
  const renderDays = () => {
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day-cell"></div>);
    }
    for (let day = 1; day < daysInMonth; day++) {
      days.push(
        <div key={day} className="day-cell">
          {day}
        </div>
      );
    }
    return days;
  };
  return (
    <>
      <div className="calendar-container">
        <div className="calendar-wrapper">
          {/* header */}
          <div className="calendar-header">
            <div className="header-left">
              <div className="header-icon">
                <CalendarIcon />
              </div>
              <div>
                <h1 className="header-title">Calendar</h1>
                <p className="header-subtitle">Organize your schedule</p>
              </div>
            </div>
            <div className="calendar-grid">
              {/* Calendar Section */}
              <div className="calendar-section">
                <div className="month-navigation">
                  <div className="month-info">
                    <h2 className="month-title">{month}</h2>
                    <span className="year-title">{year}</span>
                  </div>

                  <div className="nav-buttons">
                    <button className="nav-btn">
                      <ChevronLeft size={20} />
                    </button>
                    <button className="nav-btn">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="weekdays">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div key={day} className="weekday">
                        {day}
                      </div>
                    )
                  )}
                </div>

                <div className="days-grid">{renderDays()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCalendar;
