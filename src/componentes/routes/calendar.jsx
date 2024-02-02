import React from "react";
import Sidebar from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";
import Calendar from "componentes/menu/Sidebar/itens/calendario";

const CalendarDate = () => {
  return (
    <div>
      <Sidebar />
      <Calendar />
      <Rodape />
    </div>
  );
};

export default CalendarDate;
