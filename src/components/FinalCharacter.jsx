//@flow
import * as React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import type {Character} from '../types/index.js';

import CharacterMain from './CharacterMain.jsx';
import CharacterEquip from './CharacterEquip.jsx';
import CharacterSpell from './CharacterSpell.jsx';
import CharacterTrait from './CharacterTrait.jsx';
import CharacterBody from './CharacterBody.jsx';
import CharacterPast from './CharacterPast.jsx';

import 'Styles/FinalCharacter.scss';

type Props = {
  char: Character,
};

const FinalCharacter = (props: Props) => (
  <section id="FINAL">
    <h2>{props.char.name}</h2>
    <ul className="selection">
      <ul>
        <li>
          <NavLink to="/play">
            <button>Main</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/play/traits">
            <button>Traits</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/play/equip">
            <button>Equip</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/play/spells">
            <button disabled={!props.char.spell}>Spells</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/play/appearance">
            <button className="long">Appearance</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/play/background">
            <button className="long">Background</button>
          </NavLink>
        </li>
      </ul>
    </ul>
    <div className="horizontal-line no-bottom" />

    <Switch>
      <Route exact path="/play" render={()=>
        <CharacterMain {...props.char.main}/>
      }/>
      <Route path="/play/traits" render={()=>
        <CharacterTrait traits={props.char.traits}/>
      }/>
      <Route path="/play/equip" render={()=>
        <CharacterEquip {...props.char.equip}/>
      }/>
      <Route path="/play/spells" render={()=>
        <CharacterSpell {...props.char.spell}/>
      }/>
      <Route path="/play/appearance" render={()=>
        <CharacterBody {...props.char.body}/>
      }/>
      <Route path="/play/background" render={()=>
        <CharacterPast {...props.char.past}/>
      }/>
    </Switch>
  </section>
);

export default FinalCharacter;
