import RACES from './assets'

/*
Common Races
[common races flavor text]
  - Human
    [brief human flavor text]
  - Halfling
    [brief halfling flavor text]

Uncommon Races
[uncommon races flavor text]

Monstrous Races
[monstrous races flavor text]
 */
export function getAllRacesDescription() {}

/*
[Race], [Race Category]

[extended race flavor text]

"age"
"size"
"height"
"weight"
"eyes"
"skin"
"hair"
"speed"
"language"
"special_traits": []
 */
export function getDetailedRaceDescription(raceId) {
  return RACES.human
}

/*
[race mechanical stats]
id
speed
language* (some races get to choose a second language later)
traits** (some races alter other game stats)
 */
export function getChoosenRace(raceId) {}
