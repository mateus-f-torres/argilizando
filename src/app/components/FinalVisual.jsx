import * as React from 'react';

const FinalVisual = (props) => {

  return (
    <figure className="card">
      <ul className="stats">
        <li><p><b>Race:</b>{props.race}</p></li>
        <li><p><b>Gender:</b>{props.gender}</p></li>
        <li><p><b>Age:</b>{props.age}</p></li>
        <li><p><b>Height:</b>{props.height}</p></li>
        <li><p><b>Weight:</b>{props.weight}</p></li>
        <li><p><b>Eyes:</b>{props.eyes}</p></li>
        <li><p><b>Skin:</b>{props.skin}</p></li>
        <li><p><b>Hair:</b>{props.hair}</p></li>
        {
          props.extra.map((desc, i) => <li key={i}><p>{desc}</p></li>)
        }
      </ul>
    </figure>
  )
}

export default FinalVisual;
