import { Server, Model, Factory } from 'miragejs';
import { Dashboard as DashboardData } from './data';
import { DndTypes } from './data';

export function makeServer() {
  return new Server({
    models: {
      dashboard: Model
    },
    factories: {
      dashboard: Factory.extend<DashboardData>({
        title: 'Test Dashboard',
        buttons: [
          { id: '1', icon: 'icon1', label: 'Button 1' },
          { id: '2', icon: 'icon2', label: 'Button 2' }
        ],
        panels: [
          {
            id: '1',
            title: 'Panel 1',
            components: [
              {
                id: '1',
                type: DndTypes.Counter,
                title: 'Counter 1',
                value: 42,
                color: '#00ff00',
                subvalue: 'subvalue 1'
              },
              {
                id: '2',
                type: DndTypes.Report,
                title: 'Report 1'
              }
            ]
          },
          {
            id: '2',
            title: 'Panel 2',
            components: [
              {
                id: '3',
                type: DndTypes.Counter,
                title: 'Counter 2',
                value: 100,
                color: '#0000ff',
                subvalue: 'subvalue 2'
              },
              {
                id: '4',
                type: DndTypes.Report,
                title: 'Report 2'
              }
            ]
          }
        ]
      }),
    },
    routes() {

      this.get('/dashboard.ashx', () => {
        return this.db.dashboard.find('1');
      });

      this.get('/report.ashx', (schema, request) => {
        const id = request.queryParams['id'];
        const reportData = {
          '4': {
            title: 'Report 4',
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
              data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
          },
          '2': {
            title: 'Report 2',
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
              data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
            }]
          }
        }

        return reportData[id];
      });
    }
  });
}
