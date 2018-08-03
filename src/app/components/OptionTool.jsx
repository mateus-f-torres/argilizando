import * as React from 'react';

const OptionTool = (props) => {

  return (
  <div>
    <h3>Tools</h3>
    {
      Object.entries(props.allTools).map((type, i) => {

        // unique tools are not selectable bt default
        if(type[0] === "unique") return null;

        // dont render tools user cant select, from background
        else if(props.backTools[type[0]] === undefined) return null;

        return (
        <fieldset key={i}>
          {
            type[1].map((item, j) => {

              // let locked = item === props.classTools
             
              return (
                <label key={j}>{item}
                  <input
                    type="radio"
                    name={type[0]}
                    value={item}
                    onChange={props.toggleLang} />
                </label>
              )
            })
          }
        </fieldset>
        )
      })
    }
  </div>
  )
}

export default OptionTool;

