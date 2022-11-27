import * as React from 'react';
import Button from '../controls/button';
const FirstStage = (params) => {

  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  function handleChangeThree() {
    setCheckedThree(!checkedThree);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">How well do you want to master your subject?</h1>
      <label>
        <input 
          type="checkbox"
          value={checkedOne}
          onChange={handleChangeOne}
        />
        <span>Only the basics</span> 
      </label>
      <label>
      <input 
          type="checkbox"
          value={checkedTwo}
          onChange={handleChangeTwo}
        />
        <span>Intermediate</span> 
      </label>
      <label>
      <input 
          type="checkbox"
          value={checkedThree}
          onChange={handleChangeThree}
        />
        <span>God tier knowledge</span> 
      </label>
    <Button onClick={() => {params.setStage(2)}}>Next stage</Button>
    </div>
  );
};

export default FirstStage;
