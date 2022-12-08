import React from 'react';
import { Panel } from './Panel';
import { Panel as PanelData } from './data';
import useStore from './store';

export const PanelList: React.FC = () => {
  const panels = useStore((state) => state.dashboard.panels);

  return (
    <div className="panel-list">
      {panels.map((panel: PanelData) => (
        <Panel key={panel.id} panel={panel} />
      ))}
    </div>
  );
};
