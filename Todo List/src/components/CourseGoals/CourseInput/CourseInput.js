import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';



// Below is Styled Components which will not use rather we will use CSS Modues

// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color : ${props => props.invalid ? 'red' : 'black'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// &.invalid input{
//   border-color: red;
// }
// &.invalid label{
//   color: red;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const[isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0)
    {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // Below if statement ensures that no empty field is added, hence if the field is empty it just returns and 
    // Control is out of functions 
    if(enteredValue.trim().length === 0)
    {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}

      {/* The Beow uses CSS Module Explained in Notebook about [], && basically adds or conatinates */}
      <div className={` ${styles['form-control']} ${!isValid && styles.invalid}`}> 
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      {/* </div> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
