import { initNavigation } from './ui/navbar.js';
import { initWeeklyPerformance } from './charts/weeklyPerformance.js';
import { initConsumableChart } from './charts/consumablePerformance.js';
import { drillContribution } from './charts/drillContribution.js';
import { toggleDrillForm } from './forms/drillForm.js';
import { toggleConsForm } from './forms/consumableForm.js';
import { statusToggle } from './profile/status.js';
import { bioToggle } from './profile/biography.js';


//Toggle functions
initNavigation();
toggleDrillForm();
toggleConsForm ();
statusToggle();
bioToggle()

//Weekly Bar Chart import
initWeeklyPerformance();
initConsumableChart();
drillContribution();

