/* Get an item from either RACES, CLASSES or BACKGROUNDS
 * Params:
 *   assetID: string, id from desired item,
 *   database: object, which database to search throught
 * Returns:
 *   item: object, copy of desired item from database
 */
export const getAsset = (assetID, database) => {
  // all databases have categories that divide the items
  for (const category of database) {
    // category === ['categoryName', optionsArray]
    for (const item of category[1]) {
      // find matching item.id
      if (item.id === assetID) return Object.assign({}, item);
    }
  }
};

export const actionCreator = (actionType) => {
  return function action(actionPayload) {
    return actionPayload
      ? {
        type: actionType,
        payload: actionPayload,
      }
      : {
        type: actionType,
      };
  };
};

export const actionRepeater = (action, times, reducer, starter) => {
  let state = starter
    ? starter
    : reducer(undefined, {type: 'dummy'});
  for (let i = 0; i < times; i++) {
    state = reducer(state, action);
  }
  return state;
};

export const actionScriptRunner = (script, reducer) => {
  let state = reducer(undefined, {type: 'dummy'});
  for (const action of script) {
    state = reducer(state, action);
  }
  return state;
};
