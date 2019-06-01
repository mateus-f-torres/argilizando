import React from 'react';

const OptionPast = (props) => {
  let labels = {
    personality: props.back.personality,
    ideals: props.back.ideals,
    bonds: props.back.bonds,
    flaws: props.back.flaws,
  };

  return (
    <div>
      <h3>Role Playing</h3>
      {
        Object.entries(props.past).map((item, i) => {
          if (item[0] === 'background') return;

          return (
            <label className="text-label" key={i}>{item[0]}:
              <input
                className="text-input"
                name={item[0]}
                value={item[1]}
                placeholder={labels[item[0]]}
                onChange={props.change} />
            </label>
          );
        })
      }
    </div>
  );
};

export default OptionPast;
