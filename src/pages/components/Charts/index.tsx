import Canvas from '@antv/f2-react';
import { Chart, Area, Line, Axis, ScrollBar } from '@antv/f2';
import styles from './index.less';
import { hourlyTypes } from '@/types';
import useHoursTemp from '../../hooks/useHoursTemp';

export default function ChartComp(props: { hourList: hourlyTypes[] }) {
  const [hourList] = useHoursTemp(props.hourList);

  return (
    <div className={styles.chart}>
      <div className={styles.chatnner}>
        <div className={styles.title}>Today</div>
        {hourList && hourList.length ? (
          <Canvas pixelRatio={window.devicePixelRatio} height="87">
            <Chart
              data={hourList}
              scale={{
                time: {
                  // type: 'timeCat',
                  tickCount: 6,
                },
                temp: {
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
                y="temp"
                color="l(90) 0:#E9C939 1:#f7f7f7"
                shape="smooth"
              />
              <Line
                x="time"
                y="temp"
                color="l(90) 0:#E9C939 1:#f7f7f7"
                shape="smooth"
              />
            </Chart>
          </Canvas>
        ) : null}
      </div>
    </div>
  );
}
