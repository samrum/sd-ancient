import LocalStorage from "./LocalStorage";
import AjaxHelper from "./AjaxHelper";

export default class DealFetcher {
  static async getDeals({ groupBy = "" } = {}) {
    const cachedDealsTtl = process.env.NODE_ENV === "development" ? 0 : 30000; // cache for 30 seconds

    const dealLocalStorage = new LocalStorage("DealFetcher");

    const { lastDealFetch, cachedData } = dealLocalStorage.read();
    const timeNow = Date.now();
    const cachedDealsExpired = lastDealFetch
      ? timeNow - lastDealFetch > cachedDealsTtl
      : true;

    if (!cachedDealsExpired && cachedData) {
      return cachedData.deals;
    }

    const dealHost =
      process.env.NODE_ENV === "development" ? "http://localhost:8288/" : "/";

    let queryString = "";
    const queryParams = [];

    if (groupBy.length) {
      queryParams.push(`groupBy=${groupBy}`);
    }

    if (queryParams.length) {
      queryString = "?" + queryParams.join("&");
    }

    const dealData = await AjaxHelper(`${dealHost}api/deals${queryString}`);

    dealLocalStorage.write({
      cachedData: dealData,
      lastDealFetch: timeNow,
    });

    return dealData;
  }
}
