import { hourlyTypes, hourTypes } from '@/types';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const useHoursTemp = (hourListProps: hourlyTypes[]) => {
  const [hourList, setHourList] = useState<hourTypes[]>();

  useEffect(() => {
    const newArr = hourListProps.reduce((arr: hourTypes[], cur, index) => {
      if (index < 24) {
        arr.push({
          id: cur.dt,
          temp: cur.temp,
          time: dayjs.unix(cur.dt).format('H a'),
        });
      }
      return arr;
    }, []);
    setHourList(newArr);
  }, [hourListProps]);

  return [hourList];
};

export default useHoursTemp;
