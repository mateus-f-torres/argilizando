import * as React from 'react';

const OptionProf = (props) => {

  // logic to open up a whole ability skills category 
  // when your background is already proficient in some class skill
  let skill_C = [...props._class.skill[1]];
  let skill_B = [...props.back.skill];
  let skill_A = [];

  for(const item of skill_B) {
    if(skill_C.includes(item)) skill_A.push(item);
  }
  if(skill_A.length > 0) {
    let expand = props.skills.filter(item => skill_A.includes(item[1]))
    skill_A = expand.map(item => item[0]);
  }

  return (
  <div>
    <h3>Proficiencies</h3>
    <h4>Skills<span id="skill-number">(max: {props.maxSkills})</span></h4>
    <ul className="skill-selection">
      {
        props.skills.map((item, i) => {
          let [ability, skill, mod, prof] = [...item];

          // control for unchangeable skill proficiency, from background
          let unChange = skill_B.includes(skill);

          // control for selectable skills, from _class skill list
          let selectable = skill_C.includes(skill)

          // control for when to open a whole ability category
          let sameCategory = skill_A.includes(ability);

          // dont even render not in background ,_class or same category
          // with added control for bard's "Any" skill
          if(!unChange && !selectable && !sameCategory && props._class.id !== "bard") return null;
              

          return (
          <li key={i}>
            <label>{skill} ({ability})</label>
            <input
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

    {
      //if(props.maxLangs > 0) null;
    }
    <h4>Languages<span id="skill-number">(max: {props.maxLangs})</span></h4>
    <ul className="skill-selection">
      {
        props.langs.map((item, i) => {
          let [selectable, language, known] = [...item];

          // control for unchangeable known language , from race
          let unChange = props.race.lang.includes(language);

          // control for druidic and thieves' cant special langs
          let unique = item[3] ? true : false;
         
          // dont even render not selectable
          if(!unChange && !selectable) {
            if(!unique) return null;
          }
              

          return (
          <li key={i}>
            <label>{language}</label>
            <input
              type="checkbox"
              name={language}
              checked={known ? true : false} 
              disabled={unChange || unique}
              onChange={props.toggleLang} />
          </li>
          )
        })
      }
    </ul>
  </div>
  )
}

export default OptionProf

