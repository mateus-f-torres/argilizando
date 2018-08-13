//@flow
import * as React from 'react';

type Props = {
  max: number,
  classID: string,
  backSkills: [string, string],
  classSkills: Array<string>,
  skills: Array<[string, string, number, ?boolean]>,
  toggleSkill: (SyntheticEvent<HTMLInputElement>) => void,
};

const OptionSkill = (props: Props) => {
  // logic to open up a whole ability skills category
  // when your background is already proficient in some class skill
  let sameSkills = [];

  for (const item of props.backSkills) {
    if (props.classSkills.includes(item)) sameSkills.push(item);
  }
  if (sameSkills.length) {
    let expand = props.skills.filter((item) => sameSkills.includes(item[1]));
    sameSkills = expand.map((item) => item[0]);
  }

  return (
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
            let exception = sameSkills.includes(ability);

            // dont render not in background ,_class or same category
            // with added control for bard's "Any" skill
            if (!locked && !open && !exception
            && props.classID !== 'bard') return null;


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
};

export default OptionSkill;

