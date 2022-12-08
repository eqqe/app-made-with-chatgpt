import React from 'react';
import { useDrop } from 'react-dnd';
import { DndTypes } from './data';
import { Counter } from './Counter';
import { Report } from './Report';
import { Panel as PanelData } from './data';
import useStore from './store';

interface Props {
  panel: PanelData;
}

export const Panel: React.FC<Props> = ({ panel }) => {
  const moveComponent = useStore(s => s.moveComponent);
  const [{ isOver }, drop] = useDrop({
    accept: [DndTypes.Counter, DndTypes.Report],
    drop: (item, monitor) => {
      moveComponent(item.id, panel.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div className="panel" ref={drop}>
      <h2 className="panel-title">{panel.title}</h2>
      <div className="panel-components">
        {panel.components.map((component) =>
          component.type === DndTypes.Counter ? (
            <Counter key={component.id} counter={component} />
          ) : (
            <Report key={component.id} report={component} />
          )
        )}
      </div>
    </div>
  );
};
