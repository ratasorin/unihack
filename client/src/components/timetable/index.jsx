/**************************
 * IMPORTS
 ***************************/
import './timetable.css';

/**************************
 * CONFIG
 ***************************/
export default function Timetable(params) {
    return (
        <table className='timetable'>
            <tr>
                <td>Task 1</td>
                <td></td>
                <td><div className='event'>Repetă acum!</div></td>
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