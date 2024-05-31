import { useEffect, useState } from "react";

export default function Timer({ timeout, onTimeout, mode }) {
  const [time, setTime] = useState(timeout);

  useEffect(() => {
    const timerId = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timerId);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev - 100);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={time} className={mode} />
  );
}
