export const DndTypes = {
  Counter: 'counter',
  Report: 'report'
};

export interface Button {
  id: string;
  icon: string;
  label: string;
}

export interface Counter {
  id: string;
  type: typeof DndTypes.Counter;
  title: string;
  value: number;
  color: string;
  subvalue: string;
}

export interface Report {
  id: string;
  type: typeof DndTypes.Report;
  title: string;
}

export interface Panel {
  id: string;
  title: string;
  components: Array<Counter | Report>;
}

export interface Dashboard {
  title: string;
  buttons: Button[];
  panels: Panel[];
}
