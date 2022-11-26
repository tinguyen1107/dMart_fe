export class DB {
  private static _client: {};

  static get client() {
    if (!this._client) throw new Error('DB client not initialize');
    return this._client;
  }

  static async init() {
    this._client = {};
  }

  static async destroy() {}
}
