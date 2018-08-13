export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((refindedData, school) => {
      console.log(school);
      return refindedData;
    }, []);
  }
}
