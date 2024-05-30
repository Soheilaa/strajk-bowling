import './Input.scss';
import React from 'react';

function Input({
  testId,
  label,
  type,
  customClass,
  name,
  handleChange,
  defaultValue,
  disabled,
  id,
  min,
}) {
  return (
    <section className='input'>
      <label className='input__label'>{label}</label>
      <input
        id={id}
        type={type}
        className={`input__field ${customClass ? customClass : ''}`}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue}
        disabled={disabled}
        data-testid={testId}
        placeholder={label} 
        {...type === 'number' && { min: min }}
      />
    </section>
  );
}

export default Input;
