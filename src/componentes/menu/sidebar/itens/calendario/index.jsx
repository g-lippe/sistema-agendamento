import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/pt-br";
import style from "componentes/menu/Sidebar/itens/calendario/calendario.module.scss";

const localizer = momentLocalizer(moment);

const CalendarDate = () => {
  const events = [
    {
      title: "Evento 1",
      start: new Date(2024, 0, 30, 10, 0),
      end: new Date(2024, 0, 30, 12, 0),
    },
  ];

  return (
    <div className={style.calendar}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default CalendarDate;
