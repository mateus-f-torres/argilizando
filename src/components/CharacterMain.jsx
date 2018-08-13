//@flow
import * as React from 'react';
import AbilityTable from './AbilityTable.jsx';
import type {CharMain} from '../types/index.js';

type Props = CharMain;

const CharacterMain = (props: Props) => {
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
              {props.init >= 0 ? '+' + props.init : props.init}
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
      <AbilityTable {...props.score} />

      <div className="horizontal-line" />
      <h3>Saving Throws</h3>
      <ul>
        {
          props.saves.map((item, i) => {
            // ignore item[0], ability key in score e.g. str, dex, con
            let [, save, mod, prof] = [...item];

            return (
              <li key={i} className="prof-item">
                <span className="prof-blob">
                  <span className={prof ? 'prof' : 'not-prof' }/>
                  <span className="prof-mod">
                    {typeof mod === 'number' && mod >= 0 ? '+' + mod : mod}
                  </span>
                </span>
                <span>{save}</span>
              </li>
            );
          })
        }
      </ul>

      <div className="horizontal-line" />
      <h3>Skills</h3>
      <ul>
        {
          props.skills.map((item, i) => {
            // ignore item[0], ability key in score e.g. str, dex, con
            let [, skill, mod, prof] = [...item];

            return (
              <li key={i} className="prof-item">
                <span className="prof-blob">
                  <span className={prof ? 'prof' : 'not-prof' }/>
                  <span className="prof-mod">
                    {typeof mod === 'number' && mod >= 0 ? '+' + mod : mod}
                  </span>
                </span>
                <span>{skill}</span>
              </li>
            );
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
              : null;
          })
        }
        {
          props.tools.prof.map((item, i) => (
            <li key={i}>{item}</li>))
        }
      </ul>
    </figure>
  );
};

export default CharacterMain;
