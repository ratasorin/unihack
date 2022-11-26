/**************************
 * IMPORTS
 ***************************/
import { LineChart, Label, CartesianGrid, XAxis, YAxis } from 'recharts';


/**************************
 * CONFIG
 ***************************/
const PlannerPage = () => {
  return (
    <>
      <h1 className='text-3xl mt-6 border-0 border-b-1 border-dotted border-gray-400'>Plan de repetiție</h1>
      <LineChart width={500} height={400} className="mx-auto my-6">
        <CartesianGrid stroke="#ccc" />
        <XAxis />
        <YAxis />
      </LineChart>
    </>
  )
};

export default PlannerPage;
