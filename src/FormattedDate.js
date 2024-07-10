import React from "react";
import PropTypes from "prop-types";

export default function FormattedDate({ date }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
