export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = data => {
    return data.reduce((refinedData, stat) => {
      if (!refinedData[stat.Location]) {
        refinedData[stat.Location] = {};
      }
      refinedData[stat.Location][stat.TimeFrame] = stat.Data;
      return refinedData;
    }, {});
  };

  findByName = search => {
    // if (!search) return;
  };
}
