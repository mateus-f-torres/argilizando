import * as React from 'react';

const OptionProf = (props) => {

  // logic to open up a whole ability skills category 
  // when your backgrounds already is proficient in some class skill
  let list_C = [...props._class.skill[1]];
  let list_B = [...props.back.skill];
  let list_A = [];

  for(const item of list_B) if(list_C.includes(item)) list_A.push(item);
  if(list_A.length > 0) {
    let expand = props.skills.filter(item => list_A.includes(item[1]))
    list_A = expand.map(item => item[0]);
  }

  return (
  <div>
    <h3>Proficiencies</h3>
    <h4>Skills<span id="skill-number">(max: {props.max})</span></h4>
    <ul className="skill-selection">
      {
        props.skills.map((item, i) => {
          let [ability, skill, mod, prof] = [...item];

          // control for unchangeable skill proficiency, from background
          let unChange = list_B.includes(skill);

          // control for selectable skills, from _class skill list
          let selectable = list_C.includes(skill)

          // control for when to open a whole ability category
          let sameCategory = list_A.includes(ability);

          // dont even render not in background ,_class or same category
          // with added control bard's "Any" skill
          if(!unChange && !selectable && !sameCategory && props._class.id !== "bard") return null;
              

          return (
          <li key={i}>
            <label for={skill}>{skill}</label>
            <input
              id={skill}
              type="checkbox"
              name={skill}
              checked={prof ? true : false} 
              disabled={unChange}
              onChange={props.toggleSkill} />
          </li>
          )
        })
      }
    </ul>
  </div>
  )
}

export default OptionProf

