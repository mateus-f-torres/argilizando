import * as React from 'react';

const CharacterMain = (props) => {

  return (
    <figure className="card">

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
            <td>{props.armorClass}</td>
            <td>
              {props.init >= 0 ? "+" + props.init : props.init}
            </td>
            <td>{props.speed}ft</td>
          </tr>
        </tbody>
        </table>

        <ul className="stats">
          <li><p><b>Hit Points:</b>
            <span className="close">{props.hitPoints}</span>
          </p></li>
          <li><p><b>Hit Dice:</b>
            <span className="close">{props.hitDice}</span>
          </p></li>
          <li><p><b>Proficiency Bonus:</b>
            <span className="close">+{props.prof}</span>
          </p></li>
        </ul>

      <div className="horizontal-line"/>
      <h3>Ability Scores</h3>
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
      <h3>Saving Throws</h3>
      <ul>
        {
          props.saves.map((item, i) => {
            let [ability, save, mod, prof] = [...item];

            return (
            <li key={i} className="prof-item">
              <span className="prof-blob">
                <span className={prof ? "prof" : "not-prof" }/>
                <span className="prof-mod">
                  {mod >= 0 ? "+" + mod : mod}
                </span>
              </span>
              <span>{save}</span>
            </li>
            )
          })
        }
      </ul>
      
      <div className="horizontal-line" />
      <h3>Skills</h3>
      <ul>
        {
          props.skills.map((item, i) => {
            let [ability, skill, mod, prof] = [...item];

            return (
            <li key={i} className="prof-item">
              <span className="prof-blob">
                <span className={prof ? "prof" : "not-prof" }/>
                <span className="prof-mod">
                  {mod >= 0 ? "+" + mod : mod}
                </span>
              </span>
              <span>{skill}</span>
            </li>
            )
          })
        }
      </ul>
      <ul className="stats">
        <li><p><b>Passive Perception:</b>
          <span className="close">{props.pp}</span>
        </p></li>
      </ul>

      <div className="horizontal-line" />
      <h3>Other Proficiencies &amp; Languages</h3>
      <ul className="dotted-list">
        {
          props.langs.map((item, i) => {
            return item[2]
              ? <li key={i}>{item[1]}</li>
              : null
          })
        }
        {
          props.tools.map((item, i) => (
            <li key={i}>{item}</li>))
        }
      </ul>
    </figure>
  )
}

export default CharacterMain;
