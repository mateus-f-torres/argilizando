# Argilizando ![TravisCI build status](https://travis-ci.com/mateus-f-torres/boneco-de-argila.svg?branch=master)

[Argilizando](https://argilizando.herokuapp.com/) is a helper for my DnD games.  
It provides me, my players and anyone else that uses it with my idea of a more streamlined approach to the character creation process. Allowing players to quickly make a rough draft of a character.  
In using this software it is implied that the user already owns or has access to the books needed to actually play the game.

If you are looking for a complete online tool, please try out https://www.dndbeyond.com/, the official digital toolset for Dungeons and Dragons Fifth Edition

## Installing
```
git clone https://github.com/mateus-f-torres/boneco-de-argila.git
mv boneco-de-argila/ any_name_you_like/
cd any_name_you_like/
yarn install
```
The main scripts are:
1. `yarn start`, for local machines.
2. `yarn dev && yarn serve`, for online IDEs like C9.
3. `yarn build && yarn serve`, for production deployment.

All of them will run ESLint, Flow and Jest before bundling.

## Usage
Access  https://argilizando.herokuapp.com/ and create your character draft.  
Argilizando will only truly enforce two rules:
1. To access the Create section you must lock your Race, Class, Ability Scores, and Background choices.
2. To access the Play! section your character must have at least a name.

Aside from these, Argilizando will not help you make a optimized character, as it is meant to be used in the table with others players and the DM.

## Contributing
Argilizando was my first big project.  
All of it is self-taught, therefore, quite susceptible to the [Einstellung effect](https://en.wikipedia.org/wiki/Einstellung_effect).  
Anyone wishing to point out flaws or better alternatives in code style, problem resolutions, bugs or anything in between, just clone it and open up a PR.

## Credits
Made by [Mateus_F_Torres](https://github.com/mateus-f-torres)  
Spellbook icon by Nikita Golubev from https://www.flaticon.com/

## Disclaimer
This is a non-profit, fanmade, personal use app.  
I do not own or claim to own any of The Wizards of the Coast property.  
For more information about DnD, visit  http://dnd.wizards.com/
