/**************************
 * IMPORTS
 ***************************/
import './timetable.css';

/**************************
 * CONFIG
 ***************************/

export function TimetableEvent(params) {
    return (
        <div className='rounded-sm shadow-md pt-0 pb-0.5 px-1 white bg-teal-600 text-white'>{params.children}</div>
    )
}

export default function Timetable(params) {
    return (
        <table className='timetable'>
            <tr>
                <td>Task 1</td>
                <td></td>
                <td><TimetableEvent>Coleg</TimetableEvent></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Task 2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Task 3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>1 day</td>
                <td>3 days</td>
                <td>1 week</td>
                <td>2 weeks</td>
            </tr>
        </table>
    );
}