import * as React from 'react';

const OptionEquip = (props) => {


  return (
  <div>
    <h3>Equipment</h3>
    <h4>Weapons &amp; Armor</h4>
    {
      props.classOptions.map((group, i, full) => {
        let last = full.length - 1;

        // dont render defaults or packs (always last group)
        if(group.length === 1 || i === last) return null;

        return (
          <fieldset className="tool-selection" key={i}>
            {
              group.map((item, j) => (
                <div key={j}>
                  <label>{item}</label>
                  <input
                    type="radio"
                    name={i}
                    value={item}
                     />
                </div>
              ))
            }
          </fieldset>
        )
      })
    }
    {
      props.classPack.length > 1 &&
        <div>
          <h4>Pack</h4>
          <fieldset className="tool-selection">
            {
              props.classPack.map((type, i) => (
                <div key={i}>
                  <label>{type}'s pack</label>
                  <input
                    type="radio"
                    name="pack"
                    value={type}
                    onChange={props.togglePack} />
                </div>
              ))
            }
          </fieldset>
          <ul className="pack-content">
            {
              props.showPack.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            }
          </ul>
        </div>
    }
  </div>
  )
}

export default OptionEquip

