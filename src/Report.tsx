import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { DndTypes } from './data';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Report as ReportData } from './data';
import { fetchReportData } from './api';

interface Props {
  report: ReportData;
}

export const Report: React.FC<Props> = ({ report }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: DndTypes.Report, id: report.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    type: DndTypes.Report
  });
  const [chart, setChart] = useState<Highcharts.Chart>();

  useEffect(() => {
    fetchReportData(report.id).then((data) => {
      if (chart) {
        // Update the chart with the new data
        chart.update({
          title: {
            text: data.data.title
          },
          xAxis: data.data.xAxis,
          series: data.data.series
        });
      } else {
        // Create a new chart
        setChart(Highcharts.chart(`chart-${report.id}`, {
          title: {
            text: data.data.title
          },
          xAxis: data.data.xAxis,
          series: data.data.series
        }));
      }

    });
  }, [report.id]);


  const id = `chart-${report.id}`;

  return (
    <div
    className="report"
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1
    }}
  >
    <h3 className="report-title">{report.title}</h3>
    <div id={id} className="report" />
  </div>
    
);


};
