import notifyUtils from "boot/utils/notifyUtils";

class FavouriteUtils {
  private static _instance: FavouriteUtils;
  private localStorageKey = "favourite";

  private constructor() {
  }

  public static getInstance(): FavouriteUtils {
    this._instance = this._instance || new FavouriteUtils()
    return this._instance;
  }

  public checkFavourite(value: string): boolean {
    let localStorageValue = localStorage.getItem(this.localStorageKey);
    let favourites: string[] = [];
    if (!localStorageValue) return false;
    favourites = JSON.parse(localStorageValue);
    return favourites.includes(value);
  }

  public switchFavourite(value: string) {
    let localStorageValue = localStorage.getItem(this.localStorageKey);
    let favourites: string[] = [];
    if (localStorageValue) {
      favourites = JSON.parse(localStorageValue);
    } else {
      favourites = [];
    }
    if (favourites.includes(value)) {
      favourites.splice(favourites.indexOf(value), 1);
    } else {
      favourites.push(value);
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(favourites));
  }

  public getFavourite(): string[] {
    let localStorageValue = localStorage.getItem(this.localStorageKey);
    let favourites: string[] = [];
    if (localStorageValue) {
      favourites = JSON.parse(localStorageValue);
    } else {
      favourites = [];
    }
    return favourites;
  }

}

const favouriteUtils = FavouriteUtils.getInstance();
export default favouriteUtils;
