import * as React from 'react';

const OptionPast = (props) => {

  return (
  <div>
    <h3>Role Playing</h3>
    {
      Object.entries(props.past).map((item, i) => {
        if(item[0] === "background") return;
        
        return (
        <label className="text-label" key={i}>{item[0]}:
          <input
            id={item[0]}
            name={item[0]}
            value={item[1]}
            onChange={props.change} />
        </label>
        )
      })
    }
  </div>
  )
};

export default OptionPast;
