import PropTypes from "prop-types";

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <>
      <strong>{title}</strong>
      <strong>-{user.name}</strong>
    </>
  );
};
CalendarEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default CalendarEvent;
