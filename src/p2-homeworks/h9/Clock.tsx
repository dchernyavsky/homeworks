import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    // stop
    clearInterval(timerId)
  }
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000);
    setTimerId(id);
  }

  const onMouseEnter = () => {
    // show
    setShow(true)

  };
  const onMouseLeave = () => {
    // close
    setShow(false)
  };

  const stringTime = date?.toLocaleTimeString(); // fix with date
  const stringDate = date?.toLocaleDateString(); // fix with date

  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={s.dateTime}
      >
        <span className={s.time}>{stringTime}</span>
        {show && <span className={s.date}> {stringDate}</span>}
      </div>
      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>

    </div>
  );
}

export default Clock;