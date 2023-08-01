import React from "react";
import DateTimeDisplay from "../components/DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Dia Do Casamento!!</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"Dias"} isDanger={days <= 3} />
        <div>:</div>
        <DateTimeDisplay value={hours} type={"Horas"} isDanger={false} />
        <div>:</div>
        <DateTimeDisplay value={minutes} type={"Minutos"} isDanger={false} />
        <div>:</div>
        <DateTimeDisplay value={seconds} type={"Segundos"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
