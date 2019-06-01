import React from 'react';
import {Link} from 'react-router-dom';
import {select} from 'd3-selection';

import '../data/classImages.js';


class CardClass extends React.Component {
  componentDidMount() {
    this.createBarChart();
  }

  createBarChart = () => {
    let dataset = [1, 2, 3, 4, 5];

    const stats = [
      this.hp, this.armor, this.weapon,
      this.magic, this.versatile,
    ];

    for (const node of stats) {
      let name = node.attributes.name.value;
      select(node)
        .selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 20)
        .attr('y', (d, i) => 30 - d * 6)
        .attr('width', 15)
        .attr('height', (d, i) => d * 6)
        .attr('fill', (d) => d > this.props[name] ? 'gray' : '#723337');
    }
  }

  render() {
    let stats = ['hp', 'armor', 'weapon', 'magic', 'versatile'];
    let labels = ['Heath', 'Armor', 'Weapons', 'Magic', 'Versatility'];
    let w = 100;
    let h = 30;

    return (
      <figure className="card">
        <h2>{this.props.id}</h2>
        <img className="class-img" src={`./../images/${this.props.id}.svg`} />
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
              className={this.props.id==='rogue' ? 'multi larger' : 'multi'}>
              {
                Array.isArray(this.props.skill[1]) &&
                this.props.skill[1].map((sk, i) =>
                  (<li key={i}>{sk}</li>))
              }
            </ul>
          </div>
          {
            this.props.tool &&
            <div data-test="class-tools" id="tools">
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
            <button data-test="class-lock" onClick={this.props.lockClass}>
              Lock
            </button>
          </Link>
        </div>
      </figure>
    );
  }
}

export default CardClass;
