//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import human from "Images/human.png";
import halfling from "Images/halfling.png";
import dwarf from "Images/dwarf.png";
import elf from "Images/elf.png";
import aasimar from "Images/aasimar.png";
import tiefling from "Images/tiefling.png";
import dragonborn from "Images/dragonborn.png";
import goliath from "Images/goliath.png";
import gnome from "Images/gnome.png";
import kenku from "Images/kenku.png";
import lizardfolk from "Images/lizardfolk.png";
import tabaxi from "Images/tabaxi.png";
import goblin from "Images/goblin.png";
import orc from "Images/orc.png";
import bugbear from "Images/bugbear.png";
import hobgoblin from "Images/hobgoblin.png";
import kobold from "Images/kobold.png";
import yuanti from "Images/yuanti.png";

type Props = {};

const Race = (props: Props) => {
  let img;
  switch(props.id) {
    case "human": img = human; break;
    case "halfling": img = halfling; break;
    case "dwarf": img = dwarf; break;
    case "elf": img = elf; break; 
    case "aasimar": img = aasimar; break; 
    case "tiefling": img = tiefling; break; 
    case "dragonborn": img = dragonborn; break; 
    case "goliath": img = goliath; break; 
    case "gnome": img = gnome; break;
    case "kenku": img = kenku; break;
    case "lizardfolk": img = lizardfolk; break;
    case "tabaxi": img = tabaxi; break;
    case "goblin": img = goblin; break;
    case "orc": img = orc; break;
    case "bugbear": img = bugbear; break;
    case "hobgoblin": img = hobgoblin; break;
    case "kobold": img = kobold; break;
    case "yuanti": img = yuanti; break;
  }

  return (
  <figure className="card">
    <h2>{props.name}</h2>
    <img className="race-img" src={img} />
    <div className="horizontal-line" />
    <ul id="race-stats" className="stats">
    <h3>Race Stats</h3>
    <li><p><b>Height:</b>{props.height}.</p></li>
    <li><p><b>Weight:</b>{props.weight}.</p></li>
    <li><p><b>Adulthood:</b>{props.age[0]} years.</p></li>
    <li><p><b>Lifespan:</b>{props.age[1]} years.</p></li>
    <li><p><b>Size:</b>{props.size}.</p></li>
    <li><p><b>Speed:</b>{props.speed}ft.</p></li>
    <li><p><b>Speaks:</b>{props.lang[0]}
        {
          props.lang[1]
            ? ` & ${props.lang[1]}.`
            : "."
        }
    </p></li>
    </ul>
    <div className="horizontal-line" />
    <ul id="race-traits">
      <h3>Race Traits</h3>
      {
        props.special.map((trait, i) => (
        <li key={i}>
          <h4>{trait[0]} :</h4>
          <p>{trait[1]}</p>
        </li>
        ))
      }
    </ul>
    <div className="horizontal-line no-bottom" />
    <div className="lock-box">
      <button onClick={props.hideRace}>Back</button>
      <Link to="/">
        <button onClick={props.lockRace}>Lock</button>
      </Link>
    </div>
  </figure>
  )
};

export default Race;
