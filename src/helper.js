export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = data => {
    return data.reduce((refinedData, stat) => {
      let name = stat.Location.toUpperCase();
      if (!refinedData[name]) {
        refinedData[name] = {
          location: name,
          stats: {}
        };
      }
      refinedData[name].stats[stat.TimeFrame] =
        Math.round(stat.Data * 1000) / 1000 || 0;
      return refinedData;
    }, {});
  };

  findByName = search => {
    if (!search) return;
    let upCase = search.toUpperCase();

    if (this.stats[upCase]) {
      return this.stats[upCase];
    } else {
      return undefined;
    }
  };

  findAllMatches = search => {};
}
