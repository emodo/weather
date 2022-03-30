import Canvas from '@antv/f2-react';
import { Chart, Area, Line, Axis, ScrollBar } from '@antv/f2';
import { useEffect } from 'react';
import styles from './index.less';

const data = [
  {
    time: '10 am',
    tem: 10,
  },
  {
    time: '11 am',
    tem: 22,
  },
  {
    time: '12 am',
    tem: 16,
  },
  {
    time: '1 pm',
    tem: 26,
  },
  {
    time: '2 pm',
    tem: 12,
  },
  {
    time: '3 pm',
    tem: 26,
  },
  {
    time: '4 pm',
    tem: 18,
  },
  {
    time: '5 pm',
    tem: 26,
  },
  {
    time: '6 pm',
    tem: 12,
  },
];

export default function ChartComp() {
  useEffect(() => {}, []);

  return (
    <div className={styles.chart}>
      <div className={styles.chatnner}>
        <div className={styles.title}>Today</div>
        <Canvas pixelRatio={window.devicePixelRatio} height="87">
          <Chart
            data={data}
            scale={{
              time: {
                // type: 'timeCat',
                tickCount: 6,
              },
              tem: {
                min: 0,
              },
            }}
          >
            <Axis
              field="time"
              nice={false}
              style={{
                label: { align: 'between' },
              }}
            />
            <Area
              x="time"
              y="tem"
              color="l(90) 0:#E9C939 1:#f7f7f7"
              shape="smooth"
            />
            <Line
              x="time"
              y="tem"
              color="l(90) 0:#E9C939 1:#f7f7f7"
              shape="smooth"
            />
          </Chart>
        </Canvas>
      </div>
    </div>
  );
}
