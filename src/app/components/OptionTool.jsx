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
        <fieldset className="tool-selection" key={i}>
          {
            type[1].map((item, j) => {

              // let locked = item === props.classTools
             
              return (
                <div>
                  <label key={j}>{item[0]}</label>
                  <input
                    type="radio"
                    name={type[0]}
                    value={item[0]}
                    selected={item[1] ? true : false}
                    onChange={props.toggleTool} />
                </div>
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

