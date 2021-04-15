class FavouriteUtils {
  private static _instance: FavouriteUtils;

  private constructor() {
  }

  public static getInstance(): FavouriteUtils {
    this._instance = this._instance || new FavouriteUtils()
    return this._instance;
  }
}

const favouriteUtils = FavouriteUtils.getInstance();
export default favouriteUtils;
