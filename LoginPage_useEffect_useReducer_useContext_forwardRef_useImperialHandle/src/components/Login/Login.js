import React, { useEffect, useReducer, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input  from "../UI/Input/Input";

// The reducer Function is always outside the component

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "USER_BLUR") {
    //  The state is basically the last snapshot of values passed -> It will return "value"
    // Not val because we had value in previous state IIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMPPPPPPPPPPPPPPPP
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};

const Login = (props) => {
  // Below usestates are used in use reducers

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // Commented UseEffect because we will use useReducer

  // Below this is done to optimise, when we have values all set then only we check for validity,
  // not while entering the values

  // Array Destructuring for more optimising in useeffect - AIM - PASSING SPECIFIC PROPERTY
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  //  Now we are only executing useeffect if and only if validity changes. Not the object i.e value + validity
  useEffect(() => {
    // Time out is selected as to provide some time
    const identifier = setTimeout(() => {
      console.log("Chekcing");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 50);

    // Cleanup Function in react so that we dont end up sending dozens of HTTP Requests
    // The below func executes first at every keypress and clears he timeout
    return () => {
      console.log("Cleanup");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]); // This is still not optimal because for each character insertion the object
  // emailState and passwordState will change and the useEffect will execute, we want it to be executed only when
  // validity chnges so array destructuring the validity and validity is passed in the dependency array.

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // Below func is a useState depends on useState

    // setFormIsValid(  // Removing Form Is Valid to handle it on useEffect as to optimise
    //   event.target.value.includes('@') && passwordState.isValid
    //   // Here we are using event object to check instantly on updation of email while passwordState is asumed to be
    //   //  completed
    //   // task so we just fetching already entered email
    // );
  };

  const passwordChangeHandler = (event) => {
    // This Dispatch is used to check input boxes
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    // setEnteredPassword(event.target.value);

    // Removing Form Is Valid to handle it on useEffect as to optimise

    // setFormIsValid(
    //   // Form isValid is used to check the login button active or not
    //   emailState.isValid &&  event.target.value.trim().length > 6
    //   // Here we are using event object to check instantly on updation of password
    //   //  while emailState is assumed to be completed
    //   // task so we just fetching already entered email
    //   );
    // // // Below func is a useState depends on useState
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "USER_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "USER_BLUR" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  
  // Ref variables
  const emailInputRef =  useRef();
  const PasswordInputRef =  useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){ 
      props.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailIsValid){
      emailInputRef.current.focus()
    }
    else{
       PasswordInputRef.current.focus()
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef} // Ref variables getting connected
          id="email"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label="E-mail"
        ></Input>
        <Input
          ref={PasswordInputRef}
          id="password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          label="Password"
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
