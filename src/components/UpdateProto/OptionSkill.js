//@flow
import * as React from 'react';

type Props = {
  max: number,
  openUp: Array<string>,
  backSkills: [string, string],
  classSkills: Array<string>,
  skills: Array<[string, string, number, ?boolean]>,
  toggleSkill: (SyntheticEvent<HTMLInputElement>) => void,
};

const OptionSkill = (props: Props) => (
  <div>
    <h3>Skills<span id="skill-number">(max: {props.max})</span></h3>
    <ul className="skill-selection">
      {
        props.skills.map((item, i) => {
          // ignore item[2], skill modifier
          let [ability, skill, , prof] = [...item];

          // control for unchangeable skills, from background
          let locked = props.backSkills.includes(skill);

          // control for selectable skills, from _class skill list
          let open = props.classSkills.includes(skill);

          // control for when to open a whole ability category
          let exception = props.openUp.includes(ability);

          // dont render not in background ,_class or same category
          if (!locked && !open && !exception) return null;

          return (
            <li key={i}>
              <label>{skill} ({ability})</label>
              <input
                type="checkbox"
                name={skill}
                checked={prof ? true : false}
                disabled={locked}
                onChange={props.toggleSkill} />
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default OptionSkill;

