import React from 'react';
import Classes from './Input.module.css';
import MultiSelect from '@khanacademy/react-multi-select';

const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input onChange={props.changed} className={Classes.InputElement}
        {...props.elementConfig} value={props.value} />;
      break;
    case ('textarea'):
      inputElement = <textarea onChange={props.changed} className={Classes.InputElement}
        {...props.elementConfig} value={props.value} />;
      break;
    case ('select'):
      inputElement = (
        <select onChange={props.changed} className={Classes.InputElement}
          value={props.value}>
          {props.elementConfig.options.map((option) => {
            return (<option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
            )
          })}
        </select>
      );
      break;
    case ('multiselect'):
      inputElement = <MultiSelect {...props.elementConfig}/>
      break;
    default:
      inputElement = <input onChange={props.changed} className={Classes.InputElement}
        {...props.elementConfig} value={props.value} />;
  }
  return (
    <div>
      <label className={Classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default input;