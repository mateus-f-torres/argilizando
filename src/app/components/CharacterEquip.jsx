import * as React from 'react';

const CharacterEquip = (props) => {

  return (
    <figure className="card">
      <h3>Equipment</h3>
      <h4>Weapons:</h4>
      <ul className="stats">
        {
          props.weapons.map((item, i) => {
            let [name, toHit, dmgDie, prof, dmgType] = [...item];
            let extra = typeof item[5] === "object"
              ? item[5]
              : false;

            return (
            <li key={i}>
              <p className="weapon">
                <span>{name}.</span>
                <br />
                <span className="weapon-bonus">
                  +{toHit}
                </span>
                <span>
                  {`${dmgDie} + ${prof} ${dmgType}`}
                </span>
              </p>
            </li>
            )
          })
        }
      </ul>
      <h4>Armor:</h4>
      <ul className="stats">
        {
          props.armor.map((item, i) => (
            <li key={i}>
              <p style={{marginTop: "0.3em", marginBottom: 0}}>
                <span>{item[0]}</span>
                <span className="close">{item[1]}</span>
              </p>
            </li>
          ))
        }
      </ul>
      <h4>Money:</h4>
      <ul className="stats">
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Copper (CP)</span>
            <span className="close">{props.money.cp}</span>
          </p>
        </li>
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Silver (SP)</span>
            <span className="close">{props.money.sp}</span>
          </p>
        </li>
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Gold (GP)</span>
            <span className="close">{props.money.gp}</span>
          </p>
        </li>
        <li>
          <p style={{marginTop: "0.3em", marginBottom: 0}}>
            <span>Platinum (PP)</span>
            <span className="close">{props.money.pp}</span>
          </p>
        </li>
      </ul>
      <h4>Miscellaneous</h4>
      <ul className="dotted-list">
        {
          props.pack.fromClass.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
        {
          props.pack.fromBack.map((item, i) => {
            return item.length === 1
              ? <li key={i}>{item}</li>
              : <li key={i}>
                {
                  item.map((sub, j) => <span key={j}>{sub}<br/></span>)
                }</li>
          })
        }
      </ul>
    </figure>
  )
}

export default CharacterEquip;
