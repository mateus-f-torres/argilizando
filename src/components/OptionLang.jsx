import React from 'react';

const OptionLang = (props) => {
  return (
    <div>
      <h3>Languages<span id="skill-number">(max: {props.max})</span></h3>
      <ul className="skill-selection">
        {
          props.allLangs.map((item, i) => {
            let [open, language, known] = [...item];

            // control for unchangeable known language , from race
            let locked = props.raceLangs.includes(language);

            // control for druidic and thieves' cant special langs
            let unique = item[3] ? true : false;

            // dont even render not selectable
            if (!locked && !open) {
              if (!unique) return null;
            }


            return (
              <li key={i}>
                <label>{language}</label>
                <input
                  type="checkbox"
                  name={language}
                  checked={known ? true : false}
                  disabled={locked || unique}
                  onChange={props.toggleLang} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default OptionLang;

