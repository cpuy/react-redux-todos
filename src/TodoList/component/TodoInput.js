import React, { useState } from 'react'


export default (props) => {

  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
    </form>
  )

}