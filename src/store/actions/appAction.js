import { successActionOf, failureActionOf } from "./index"



export default class AppActions {
    
  static SEARCH_GLOBAL = "SEARCH_GLOBAL";


  static searchGlobal(payload) {
    return {
      type: this.SEARCH_GLOBAL,
      payload
    }
  }
}