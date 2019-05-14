import axios, { AxiosInstance } from "axios";

export class BaseRepository {
  private _baseDomain: string;
  private _baseURL: string;
  protected _axios: AxiosInstance;

  constructor() {
    this._baseDomain = "https://qiita.com";
    this._baseURL = `${this.baseDomain}/api/v2`;
    this._axios = axios.create({ baseURL: this.baseURL });
  }

  get axios(): AxiosInstance {
    return this._axios;
  }

  get baseDomain(): string {
    return this._baseDomain;
  }

  get baseURL(): string {
    return this._baseURL;
  }

  set baseDomain(baseDomain: string) {
    this._baseDomain = baseDomain;
  }

  set baseURL(baseURL: string) {
    this._baseURL = baseURL;
  }
}