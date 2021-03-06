import HTTP from "../utils/http";


export default class IndexModel extends HTTP {
  async getHomeData() {
    console.log('models Index.js', process.env.NODE_ENV)
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: 'api/get_home_data',
        success(data) { resolve(data) },
        error(error) { reject(error) },
      })
    })
  }
}