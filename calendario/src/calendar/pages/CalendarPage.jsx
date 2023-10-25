import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  CalendarEvent,
  CalendarModal,
  FabDelete,
  Navbar,
  FabAddNew,
} from "../";
import { localizer, getMessagesEs } from "../../helpers";
import { useState } from "react";
import { useUistore, useCalendarStore } from "../../hooks";

export const CalendarPage = () => {
  const { openDateModal } = useUistore();
  const { events, setActiveEvent } = useCalendarStore();
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const eventStyleGetter = () => {
    const style = {
      backgroundColor: "#008CBA",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleclick = () => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleclick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />

      <FabAddNew />
      <FabDelete />
    </>
  );
};

export default CalendarPage;
