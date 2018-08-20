export const getAsset = (assetID, database) => {
  for (const category of database) {
    for (const item of category[1]) {
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
