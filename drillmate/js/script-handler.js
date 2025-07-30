import { toggleNav } from './ui/navbar.js';
import { initWeeklyPerformance } from './charts/weeklyPerformance.js';
import { initConsumableChart } from './charts/consumablePerformance.js';

//Toggle functions
toggleNav();

//Weekly Bar Chart import
initWeeklyPerformance();

initConsumableChart();
