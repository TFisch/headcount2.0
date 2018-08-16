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

  findAllMatches = search => {
    const statKeys = Object.keys(this.stats);
    let totalMatches = [];
    if (!search) {
      totalMatches = statKeys.map(key => this.stats[key]);
      return totalMatches;
    }
    let upCase = search.toUpperCase();
    const match = statKeys.filter(key =>
      this.stats[key].location.includes(upCase)
    );
    totalMatches = [...match];
    return totalMatches;
  };

  findAverage = district => {
    const statKeys = Object.keys(this.stats);
    const findDistrict = statKeys.reduce((foundDistrict, key) => {
      if (this.stats[key].location === district) {
        const districtAvg = Object.values(this.stats[key].stats).reduce(
          (statAverage, stat) => {
            statAverage += stat;
            statAverage =
              statAverage / Object.values(this.stats[key].stats).length;
            console.log(statAverage);
            return statAverage;
          },
          0
        );
      }

      return foundDistrict;
    }, 0);
  };
}
