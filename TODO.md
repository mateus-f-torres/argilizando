# TODO

[] - add str, dex e con description to Body  
[] - add int, wis e cha description to Behavior  
[] - char id post creation  
[] - mongoDB and mongoose (or some other database)

--------------------

[] - offline first [PWA](https://webpack.js.org/guides/progressive-web-application/)  
[] - remove main [model](https://github.com/petercrona/jsunconf-2019-snake) from redux
  * detach core of character creator from a UI centric app
  * allow for the creation processes to be context-agnostic
    * Web | Native | CLI
  * currently the `data` holds both **View** and **Model** assets
    * divide and centralize the **Model** parts
