//@flow
import * as React from 'react';

type Props = {
  allTools: {
    artisan: Array<string>,
    gaming: Array<string>,
    musical: Array<string>,
    unique: Array<string>,
  },
  backTools: {
    artisan?: boolean,
    gaming?: boolean,
    musical?: boolean,
    unique?: Array<string>,
  },
  raceID: string,
  toggleTool: () => void,
};

const OptionTool = (props: Props) => {
  return (
    <div>
      <h3>Tools</h3>
      {
        Object.entries(props.allTools).map((type, i) => {
          // unique tools are not selectable
          if (type[0] === 'unique') return null;

          // dont render tools user cant select, from background
          else if (props.backTools[type[0]] === undefined) return null;

          return (
            <fieldset className="tool-selection" key={i}>
              {
                type[1].map((item, j) => {
                  // dont render race tool proficiency
                  if (props.raceID === 'gnome'
                    && item[0] === 'Tinker\'s tools') {
                    return null;
                  }

                  return (
                    <div key={j}>
                      <label>{item[0]}</label>
                      <input
                        type="radio"
                        name={type[0]}
                        value={item[0]}
                        selected={item[1] ? true : false}
                        onChange={props.toggleTool} />
                    </div>
                  );
                })
              }
            </fieldset>
          );
        })
      }
    </div>
  );
};

export default OptionTool;

