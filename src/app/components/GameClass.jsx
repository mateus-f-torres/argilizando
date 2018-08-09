//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { select } from 'd3-selection';

import barbarian from "Images/barbarian.svg";
import bard from "Images/bard.svg";
import cleric from "Images/cleric.svg";
import druid from "Images/druid.svg";
import fighter from "Images/fighter.svg";
import monk from "Images/monk.svg";
import paladin from "Images/paladin.svg";
import ranger from "Images/ranger.svg";
import rogue from "Images/rogue.svg";
import sorcerer from "Images/sorcerer.svg";
import warlock from "Images/warlock.svg";
import wizard from "Images/wizard.svg";

type Props = {
  id: string,
  primary: string,
  save: Array<string>,
  skill: Array<mixed>,
  tool?: Array<string>,
  equip: Array<Array<string>>,
  special: Array<Array<string>>,
};

class GameClass extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  createBarChart() {
    let dataset = [1, 2, 3, 4, 5];

    const stats = [
      this.hp, this.armor, this.weapon,
      this.magic, this.versatile
    ];

    for (const node of stats) {
      let name = node.attributes.name.value;
      select(node)
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 20)
        .attr("y", (d, i) => 30 - d * 6)
        .attr("width", 15)
        .attr("height", (d, i) => d * 6)
        .attr("fill", (d) => d > this.props[name] ? "gray" : "#723337");
    }
  }

  render() {
    let img = "";
    switch (this.props.id) {
    case "barbarian": img = barbarian; break;
    case "bard": img = bard; break;
    case "cleric": img = cleric; break;
    case "druid": img = druid; break;
    case "fighter": img = fighter; break;
    case "monk": img = monk; break;
    case "paladin": img = paladin; break;
    case "ranger": img = ranger; break;
    case "rogue": img = rogue; break;
    case "sorcerer": img = sorcerer; break;
    case "warlock": img = warlock; break;
    case "wizard": img = wizard; break;
    }

    let stats = ["hp", "armor", "weapon", "magic", "versatile"];
    let labels = ["Heath", "Armor", "Weapons", "Magic", "Versatility"];
    let w = 100;
    let h = 30;

    return (
      <figure className="card">
        <h2>{this.props.id}</h2>
        <img className="class-img" src={`/${img}`} />

        <ul id="class-stats" className="stats">
          <h3>Class Stats</h3>
          {
            stats.map((stat, i) => (
              <li key={i}><p>
                <b>{labels[i]}</b>
                <svg
                  ref={(node) => this[stat] = node}
                  name={stat}
                  width={w}
                  height={h} />
              </p></li>
            ))
          }
        </ul>
        <div className="horizontal-line" />

        <ul id="class-features">
          <h3>Class Features</h3>

          <div id="ability">
            <h4>Primary Ability</h4>
            <p>{this.props.primary}</p>
          </div>

          <div id="save">
            <h4>Saving Throws</h4>
            <ul className="multi">
              {
                this.props.save.map((ability, i) =>
                  (<li key={i}>{ability}</li>))
              }
            </ul>
          </div>

          <div id="skill">
            <h4>Skill Proficiency
              <span id="skill-number">(max: {this.props.skill[0]})</span>
            </h4>
            <ul
              className={this.props.id==="rogue" ? "multi larger" : "multi"}>
              {
                this.props.skill[1].map((sk, i) =>
                  (<li key={i}>{sk}</li>))
              }
            </ul>
          </div>
          {
            this.props.tool &&
            <div id="tools">
              <h4>Tools Proficiency</h4>
              <ul className="multi">
                {
                  this.props.tool.map((t, i) => <li key={i}>{t}</li>)
                }
              </ul>
            </div>

          }

          <div id="equip">
            <h4>Starting Equipment</h4>
            <ul className="dotted-list">
              {
                this.props.equip.map((list, i) => (
                  <li key={i}>
                    {list.map((item, j) => <span key={j}>{item}<br/></span>)}
                  </li>
                ))
              }
            </ul>
          </div>
        </ul>
        <div className="horizontal-line" />

        <ul id="class-traits">
          <h3>Class Traits</h3>
          {
            this.props.special.map((trait, i) => (
              <li key={i}>
                <h4>{trait[0]}:</h4>
                <p className="lvl">{trait[1]}.</p>
                <p>{trait[2]}</p>
              </li>
            ))
          }
        </ul>

        <div className="horizontal-line no-bottom" />
        <div className="lock-box">
          <Link to="/class">
            <button>Back</button>
          </Link>
          <Link to="/">
            <button onClick={this.props.lockClass}>Lock</button>
          </Link>
        </div>
      </figure>
    );
  }
};

export default GameClass;
