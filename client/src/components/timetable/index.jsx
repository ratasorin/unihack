/**************************
 * IMPORTS
 ***************************/
import './timetable.css';
import TTEvent from './ttevent';

/**************************
 * CONFIG
 ***************************/
export default function Timetable(params) {

  var prev = 0;

  return (
    <div className='timetable-wrap'>
      <table className='timetable'>
        <tbody>
          {params.data.tasks.map(task => <tr>
            {!(prev = 0) && ''}
            <th>{task[0]}</th>
            <td></td>
            {task[1].map(evt => <>
              {[...Array(evt[0] - prev - 1)].map(i => (<td></td>))}
              {(prev += evt[0]) && ''}
              <td><TTEvent popup={evt.length == 3 && evt[2]} width='150%'>{evt[1]}</TTEvent></td>
            </>)}
          </tr>)}
          <tr>
            <th></th>
            <th></th>
            {params.data.dates.map(date => <th>{date}</th>)}
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}