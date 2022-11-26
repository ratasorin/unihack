/**************************
 * IMPORTS
 ***************************/
import Timetable from '../components/timetable';
import Sub from '../components/sub';

/**************************
 * CONFIG
 ***************************/

const PlannerPage = () => {
  return (
    <Sub>
      <h1 className='text-3xl p-2 border-0 border-b-1 border-dotted border-gray-400'>Plan de repetiție</h1>
      <Timetable />
    </Sub>
  )
};

export default PlannerPage;
