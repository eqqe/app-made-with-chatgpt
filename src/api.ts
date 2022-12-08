import axios from 'axios';
import { Dashboard } from './data';

const fetchDashboardData = () => axios.get<Dashboard>('/dashboard.ashx');
const fetchReportData = (reportId: string) =>
  axios.get<Highcharts.Options>(`/report.ashx?id=${reportId}`);

export { fetchDashboardData, fetchReportData };
