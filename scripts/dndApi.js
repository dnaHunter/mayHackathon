export default class dndApi {
  constructor() {
    this.URL = "https://www.dnd5eapi.co/api/";
  }

  async getClass(classID) {
    try {
      const response = await axios.get(`${this.URL}classes/${classID}`);
      return response.data;
    } catch (error) {
      console.error("There was an error getting the class " + classID);
      console.error(error);
    }
  }
}
