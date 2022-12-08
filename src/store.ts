import create, { SetState } from 'zustand';
import produce, { Draft } from 'immer';
import { Dashboard as DashboardData } from './data';

interface DashboardState {
  dashboard: DashboardData;
  setDashboard: (state: DashboardData) => void;
  moveComponent: (itemId: string, toPanelId: string) => void;
}

const useStore = create<DashboardState>(set => ({
  dashboard: {
    title: '',
    buttons: [],
    panels: []
  },
  setDashboard: (dashboard: DashboardData) =>
    set(state =>
      produce(state, draft => {
        draft.dashboard = dashboard;
      })
    ),
  moveComponent: (itemId, toPanelId) =>
    set(produce((draft) => {
      const toPanel = draft.dashboard.panels.find((panel) => panel.id === toPanelId);

      if (!toPanel) {
        return;
      }

      let fromPanel = null;

      for (const panel of draft.dashboard.panels) {
        const componentIndex = panel.components.findIndex((component) => component.id === itemId);

        if (componentIndex !== -1) {
          fromPanel = panel;
          break;
        }
      }

      if (!fromPanel) {
        return;
      }

      const component = fromPanel.components.find((component) => component.id === itemId);

      if (!component) {
        return;
      }

      fromPanel.components = fromPanel.components.filter((c) => c.id !== itemId);
      toPanel.components.push(component);
    }))
}));

export default useStore;
