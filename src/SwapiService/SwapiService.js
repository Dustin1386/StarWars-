class SwapiService {
  constructor() {
    this.baseUrl = 'https://swapi.co/api/';
    this.serverError = 'Unable to connect to Swapi servers'
  }

  async getFilterOptions(){
    try {
      const res = await fetch(this.baseUrl)
      return res.json();
    } catch(err) {
      throw new Error(this.serverError);
    }
  }

  async search(query, filter='people'){
    const encoded = encodeURI(`${this.baseUrl}${filter}?search=${query}`)
    const res = await fetch(encoded)
    if (!res.ok) {
      throw new Error(`Unable to find results for ${query} within [${filter}] filter`)
    }
    return res.json();
  }
}

export default SwapiService;


