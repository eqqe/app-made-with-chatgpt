import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import { App } from './App';
import { DndTypes } from './data';
import { makeServer } from './server';

const server = makeServer();
server.logging = true;
server.db.loadData({
  dashboard: [
    {
      id: '1',
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
    }
  ]
});

ReactDOM.render(<DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>, document.getElementById('root'));