import * as React from 'react';

const OptionEquip = (props) => {

  return (
  <div>
    <h3>Equipment</h3>
    <h4>Weapons</h4>
    <h4>Armor</h4>
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

