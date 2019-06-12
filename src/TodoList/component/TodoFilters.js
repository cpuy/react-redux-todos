import React, { useState } from 'react'

export default (props) => {

  const [sort, setSort] = useState(props.sort || 'date');

  const onChange = (event) => {
    setSort(event.target.value);
    props.onChange(event.target.value)
  };

  return (
    <div>
      Sort:
      <input type="radio" name="filter" value="date" id="date" checked={sort === 'date'} onChange={onChange}/>
      <label htmlFor="date">By date</label>
      <input type="radio" name="filter" value="name" id="name" checked={sort === 'name'} onChange={onChange}/>
      <label htmlFor="name">By name</label>
    </div>
  )
}