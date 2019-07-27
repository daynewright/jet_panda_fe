import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay, start) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let interval;

    function tick() {
      savedCallback.current();
    }
    if (delay !== null && start) {
      interval = setInterval(tick, delay);
      return () => clearInterval(interval);
    }

    if(!start && interval) {
      clearInterval(interval);
    }
  }, [delay, start]);
};