import React, { useEffect } from 'react';
import { Banner } from './Banner';
import { PanelList } from './PanelList';
import { fetchDashboardData } from './api';
import useStore from './store';

export const Dashboard: React.FC = () => {
  const dashboard = useStore((state) => state.dashboard);
  const setDashboard = useStore((state) => state.setDashboard);

  useEffect(() => {
    fetchDashboardData().then((data) => setDashboard(data.data));
  }, [setDashboard]);

  return (
    <div className="dashboard">
      <Banner title={dashboard.title} buttons={dashboard.buttons} />
      <PanelList />
    </div>
  );
};
