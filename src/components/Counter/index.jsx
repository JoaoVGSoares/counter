import React, { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./Counter.module.css";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
} from "react-feather";

const countKey = "current-count";

function Counter() {
  const [count, setCount] = useState(
    () => Number(window.localStorage.getItem(countKey)) || 0
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.localStorage.setItem(countKey, count);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  useEffect(() => {
    document.title = `Valor atual:  ${count}`;
  }, [count]);

  return (
    <div className={styles.counter}>
      <span>Valor atual</span>
      <p className={styles.count}>{count}</p>
      <div className={styles.actions}>
        <Button
          handleClick={() => setCount(count + 10)}
          icon={<ChevronsUp />}
          aria-label="Increase by 10"
        />
        <Button
          handleClick={() => setCount(count + 1)}
          icon={<ChevronUp />}
          aria-label="Increase by 1"
        />
        <Button
          handleClick={() => setCount(0)}
          icon={<RotateCcw />}
          aria-label="Reset to 0"
        />
        <Button
          handleClick={() => setCount(count - 1)}
          icon={<ChevronDown />}
          aria-label="Decrease by 1"
        />
        <Button
          handleClick={() => setCount(count - 10)}
          icon={<ChevronsDown />}
          aria-label="Decrease by 10"
        />
      </div>
    </div>
  );
}

export default Counter;
