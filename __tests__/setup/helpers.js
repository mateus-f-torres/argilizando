export const getAsset = (assetID, database) => {
  for (const category of database) {
    for (const item of category[1]) {
      if (item.id === assetID) return Object.assign({}, item);
    }
  }
};


