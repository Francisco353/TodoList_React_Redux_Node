import React from "react";
import { ControlLabel,FormControl } from 'react-bootstrap';

export default ({input, label, type}) => {
  return (
    <div>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} type={type} style={{marginBottom: '5px'}}/>
    </div>
  );
};
