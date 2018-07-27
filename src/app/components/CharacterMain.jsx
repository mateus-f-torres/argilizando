import * as React from 'react';

const CharacterMain = (props) => {

  return (
    <figure className="final-card">

      <table>
        <thead>
          <tr>
            <th>Armor</th>
            <th>Initiative</th>
            <th>Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.ac[0]}</td>
            <td>
              {props.init >= 0 ? "+" + props.init : props.init}
            </td>
            <td>{props.sp}ft</td>
          </tr>
        </tbody>
        </table>

        <ul className="stats">
          <li><p><b>Hit Points:</b>
            <span className="close">{props.hp[0]}</span>
          </p></li>
          <li><p><b>Hit Dice:</b>
            <span className="close">{props.hp[1]}</span>
          </p></li>
          <li><p><b>Proficiency Bonus:</b>
            <span className="close">+{props.prof}</span>
          </p></li>
        </ul>

      <div className="horizontal-line"/>
      <h3 className="final-header">Ability Scores</h3>
      <table>
        <thead>
          <tr>
            <th>Str</th>
            <th>Dex</th>
            <th>Con</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {
                props.score.str[1] > 0
                  ? "+" + props.score.str[1]
                  : props.score.str[1]
              }
            </td>
            <td>
              {
                props.score.dex[1] > 0
                  ? "+" + props.score.dex[1]
                  : props.score.dex[1]
              }
            </td>
            <td>
              {
                props.score.con[1] > 0
                  ? "+" + props.score.con[1]
                  : props.score.con[1]
              }
            </td>
          </tr>
          <tr>
            <td>{props.score.str[0]}</td>
            <td>{props.score.dex[0]}</td>
            <td>{props.score.con[0]}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Int</th>
            <th>Wis</th>
            <th>Cha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {
                props.score.int[1] > 0
                  ? "+" + props.score.int[1]
                  : props.score.int[1]
              }
            </td>
            <td>
              {
                props.score.wis[1] > 0
                  ? "+" + props.score.wis[1]
                  : props.score.wis[1]
              }
            </td>
            <td>
              {
                props.score.cha[1] > 0
                  ? "+" + props.score.cha[1]
                  : props.score.cha[1]
              }
            </td>
          </tr>
          <tr>
            <td>{props.score.int[0]}</td>
            <td>{props.score.wis[0]}</td>
            <td>{props.score.cha[0]}</td>
          </tr>
        </tbody>
      </table>

      <div className="horizontal-line" />
      <h3 className="final-header">Saving Throws</h3>
      <ul className="prof-list">
        {
          props.saves.map((item, i) => (
            <li key={i} className="prof-item">
              <span className="prof-blob">
                <span className={item[2] ? "prof" : "not-prof" }/>
                <span className="prof-mod">
                  {item[1] >= 0 ? "+" + item[1] : item[1]}
                </span>
              </span>
              <span className="prof-skill">{item[0]}</span>
            </li>
          ))
        }
      </ul>
      
      <div className="horizontal-line" />
      <h3 className="final-header">Skills</h3>
      <ul className="prof-list">
        {
          props.skills.map((item, i) => (
            <li key={i} className="prof-item">
              <span className="prof-blob">
                <span className={item[2] ? "prof" : "not-prof" }/>
                <span className="prof-mod">
                  {item[1] >= 0 ? "+" + item[1] : item[1]}
                </span>
              </span>
              <span className="prof-skill">{item[0]}</span>
            </li>
          ))
        }
      </ul>
      <ul className="stats">
        <li><p><b>Passive Perception:</b>
          <span className="close">{props.pp}</span>
        </p></li>
      </ul>

      <div className="horizontal-line" />
      <h3 className="final-header">Other Proficencies &amp; Languages</h3>
      <ul className="stats">
        {
          props.langs.map((item, i) => (
            <li key={i} className="extra"><p>{item}</p></li>))
        }
        {
          props.tools.map((item, i) => (
            <li key={i} className="extra"><p>{item}</p></li>))
        }
      </ul>
      {
        // TODO separar equip
      }
      <div className="horizontal-line" />
      <h3 className="final-header">Equipment</h3>
      <ul className="stats">
        <li><p className="fake-heading"><b>Weapons</b></p></li>
        {
          props.equip.weapons.map((item, i) => (
            <li key={i}>
              <p className="weapon">
                <span>{item[0]}.</span>
                <br />
                <span className="weapon-bonus">
                  +{props.prof + props.score.str[1]}
                </span>
                <span>
                  {`${item[1]} + ${props.prof} ${item[2]}`}
                </span>
              </p>
            </li>
          ))
        }
      </ul>
      <ul className="stats">
        <li><p className="fake-heading"><b>Armor</b></p></li>
        {
          props.equip.armor.map((item, i) => (
            <li key={i}>
              <p style={{marginTop: "0.3em", marginBottom: 0}}>
                <span>{item[0]}</span>
                <span className="close">+{item[1]}</span>
              </p>
            </li>
          ))
        }
      </ul>
      <ul className="stats">
        <li><p className="fake-heading"><b>Money</b></p></li>
            <li>
              <p style={{marginTop: "0.3em", marginBottom: 0}}>
                <span>Copper (CP)</span>
                <span className="close">{props.equip.money.cp}</span>
              </p>
            </li>
            <li>
              <p style={{marginTop: "0.3em", marginBottom: 0}}>
                <span>Silver (SP)</span>
                <span className="close">{props.equip.money.sp}</span>
              </p>
            </li>
            <li>
              <p style={{marginTop: "0.3em", marginBottom: 0}}>
                <span>Gold (GP)</span>
                <span className="close">{props.equip.money.gp}</span>
              </p>
            </li>
            <li>
              <p style={{marginTop: "0.3em", marginBottom: 0}}>
                <span>Platinum (PP)</span>
                <span className="close">{props.equip.money.pp}</span>
              </p>
            </li>
      </ul>
      <ul className="stats">
        <li><p className="fake-heading"><b>Miscellaneous</b></p></li>
        {
          props.equip.pack.map((item, i) => (
            <li key={i} className="extra"><p>{item}</p></li>
          ))
        }
      </ul>
      {
        // TODO separar
      }
      <div className="horizontal-line" />
      <h3 className="final-header">Spellcasting</h3>
        <ul className="stats">
          <li><p><b>Spellcasting Class:</b>
            <span className="close">{props.spell.spellClass}</span>
          </p></li>
          <li><p><b>Spellcasting Ability:</b>
            <span className="close">{props.spell.ability}</span>
          </p></li>
          <li><p><b>Spell Save DC:</b>
            <span className="close">{props.spell.save}</span>
          </p></li>
          <li><p><b>Spell Attack Bonus:</b>
            <span className="close">+{props.spell.toHit}</span>
          </p></li>
          <li><p><b>Cantrips Known:</b>
            <span className="close">{props.spell.cantrips}</span>
          </p></li>
          <li><p><b>Spells Known:</b>
            <span className="close">{props.spell.known}</span>
          </p></li>
          <li><p><b>Spells Prepared:</b>
            <span className="close">{props.spell.prepared}</span>
          </p></li>
          <li><p><b>Spells Slots:</b>
            <span className="close">{props.spell.slots[0][0]}</span>
          </p></li>
        </ul>
        
      {
        // TODO separar
      }
      <div className="horizontal-line" />
      <h3 className="final-header">Features &amp; Traits</h3>
      <ul className="stats">
        {
          props.traits.map((item, i) => (
            <div key={i}>
              <li><p className="fake-heading"><b>{item[0]}</b></p></li>
              <li className="extra"><p>{item[1]}</p></li>
            </div>
          ))
        }
      </ul>

    </figure>
  )
}

export default CharacterMain;
