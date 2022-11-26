/**************************
 * IMPORTS
 ***************************/
import Timetable from '../components/timetable';
import ForgettingCurve from '../assets/SVG/ForgettingCurve.svg';
import Sub from '../components/sub';

/**************************
 * CONFIG
 ***************************/

const timeTableData = {
  dates: [
    '10 AM', '11 AM', 'c', 'd', 'e'
  ],
  tasks: [
    ['Eseu Ion - L. Rebreanu', [[1, 'Date istorice', 'Date istorice despre operă'], [4, 'Date istorice']]],
    ['Eseu Plumb - G. Bacovia', [[2, 'Label 1'], [4, 'Label 2']]],
    ['Eseu Dragnea - V. Dăncilă', [[3, 'Label 1'], [5, 'Label 2']]],
    ['Matematică Integrale', [[3, 'Label 1'], [5, 'Label 2']]],
    ['Informatică Backtracking', [[3, 'Label 1'], [5, 'Label 2']]],
  ]
}

const PlannerPage = () => {
  return (
    <>
      <Sub>
        <h1 className='text-3xl p-2 border-0 border-b-1 border-dotted border-gray-400'>Plan de repetiție</h1>
        <Timetable data={timeTableData} />
      </Sub>
      <Sub>
        <h1>Curba de uitare</h1>
        <img src={ForgettingCurve} width='500' className='mx-auto' />
      </Sub>
    </>
  )
};

export default PlannerPage;
