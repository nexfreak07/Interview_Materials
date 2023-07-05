import React from 'react';
import styled from 'styled-components'; // This is used for Styled Components
// import styles from './Button.module.css'; // This is used for CSS Modules


// The Below is used for styled Component

const Button = styled.button`

We just add the styles without classes and for pseudo classes we add 
&:(action) {style} 
All the pros and functionality are automatically inherited in it

  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  // Media Queries Should be the first thing present after the style properties 
  // in styled coponents else it will not work 
  @media(min-width: 700px)
  {
    width:auto;
  }

 

 &:focus {
  outline: none;
 }

&:hover, &:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);

  
  
}
`;


// Uncommented the below component for CSS Modulues -> Rename Button.module.css

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
