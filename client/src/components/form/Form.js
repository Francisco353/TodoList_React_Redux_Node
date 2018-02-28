import React from 'react';
import _ from 'lodash';
import { Field } from "redux-form";
import Featured_Field from './Featured_Field';

export default ({fields}) =>{
  return _.map(fields, ({label,name,type})=>{
    return (
      <Field
        key={name}
        component={Featured_Field}
        label={label}
        name={name}
        type={type}
        />
    );
  });
}
