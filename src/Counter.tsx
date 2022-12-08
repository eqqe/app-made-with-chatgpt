import React from 'react';
import { useDrag } from 'react-dnd';
import { DndTypes } from './data';
import { Counter as CounterData } from './data';

interface Props {
  counter: CounterData;
}

export const Counter: React.FC<Props> = ({ counter }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: DndTypes.Counter, id: counter.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    type: DndTypes.Counter
  });

  return (
    <div
      className="counter"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
    >
      <h3 className="counter-title">{counter.title}</h3>
      <div className="counter-value" style={{ color: counter.color }}>
        {counter.value}
      </div>
      <div className="counter-subvalue">{counter.subvalue}</div>
    </div>
  );
};
