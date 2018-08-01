import * as React from 'react';

const OptionBody = (props) => {

  let labels = {
    gender: "Male | Female | Others",
    age: [...props.race.age],
    height: props.race.height,
    weight: props.race.weight,
    eyes: "",
    skin: "",
    hair: ""
  };

  return (
  <div>
    <h3>Appearance</h3>
    {
      Object.entries(props.body).map((item, i) => {
        if(item[0] === "race" || item[0] === "size") return;

        if(item[0] === "age") {
          const [ageMin, ageMax] = [...labels.age];
          return (
            <label className="text-label" key={i}>Age:
              <input
                id={item[0]}
                type="number"
                min={ageMin}
                max={ageMax}
                name={item[0]}
                value={item[1]}
                placeholder={`between ${ageMin} and ${ageMax}`}
                required
                onChange={props.change} />
            </label>
          )
        }

        let info = labels[item[0]];

        if(item[0] === "height" || item[0] === "weight") {
          info = `average ${info}`
        }
        
        return (
        <label className="text-label" key={i}>{item[0]}:
          <input
            id={item[0]}
            name={item[0]}
            value={item[1]}
            placeholder={info}
            onChange={props.change} />
        </label>
        )
      })
    }
  </div>
  )
};

export default OptionBody;
