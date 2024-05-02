import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  const [countdownEnded, setCountdownEnded] = useState(false); // Track if countdown ended

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountDown = countDownDate - new Date().getTime();
      setCountDown(newCountDown);
      // Check if all values are zero and countdown hasn't already ended
      if (newCountDown <= 0 && !countdownEnded) {
        setCountdownEnded(true);
        clearInterval(interval); // Stop the countdown
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, countdownEnded]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  // Return all zeros if countdown has ended
  if (countDown <= 0) return [0, 0, 0, 0];

  return [days, hours, minutes, seconds];
};

export { useCountdown };