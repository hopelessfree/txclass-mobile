import HTTP from "../utils/http";


export default class ListModel extends HTTP {
  async getListData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: 'api/get_list_data',
        success(data) { resolve(data) },
        error(error) { reject(error) },
      })
    })
  }
}