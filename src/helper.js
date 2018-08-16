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

  findAverage = districtEntry => {
    const districtValues = Object.values(this.stats[districtEntry].stats);
    const districtAverage = districtValues.reduce((districtAccum, value) => {
      districtAccum = districtAccum + value / districtValues.length
      return districtAccum
    }, 0)
    return Math.round(districtAverage * 1000) / 1000;
  };

  compareDistrictAverages = (districtOne, districtTwo) => {
    const districtOneAverage = this.findAverage(districtOne);
    const districtTwoAverage = this.findAverage(districtTwo);
    const average = Math.round(districtOneAverage / districtTwoAverage * 1000) / 1000;
    return { [districtOne]: districtOneAverage, [districtTwo]: districtTwoAverage, compared: average }
  }
}
