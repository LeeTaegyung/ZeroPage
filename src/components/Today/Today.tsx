import { TodayDate, TodayTime, TodayWrap } from "@components/Today/TodayStyles";
import { formatTwoDigits } from "@utils/formatters";
import { useEffect, useState } from "react";

const DAY_INFO = ["일", "월", "화", "수", "목", "금", "토"];

const getTodayTime = (now: Date) => {
  const hour = formatTwoDigits(now.getHours());
  const minutes = formatTwoDigits(now.getMinutes());
  const seconds = formatTwoDigits(now.getSeconds());
  return `${hour} : ${minutes} : ${seconds}`;
};

const getTodayDate = (now: Date) => {
  const year = now.getFullYear();
  const month = formatTwoDigits(now.getMonth() + 1);
  const date = formatTwoDigits(now.getDate());
  const day = now.getDay();

  return `${year}년 ${month}월 ${date}일 ${DAY_INFO[day]}요일`;
};

const Today = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const TIMER = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(TIMER);
    };
  }, [now]);

  const time = getTodayTime(now);
  const date = getTodayDate(now);

  return (
    <TodayWrap>
      <TodayTime>{time}</TodayTime>
      <TodayDate>{date}</TodayDate>
    </TodayWrap>
  );
};

export default Today;
