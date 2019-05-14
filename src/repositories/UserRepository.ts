import { BaseRepository } from "./BaseRepository";
import { AxiosPromise } from 'axios';

const resource: string = "/users"; // baseURL以降のパス

export class UserRepository extends BaseRepository {
  constructor() {
    super();
  }

  // ユーザー一覧の取得
  // TODO: AxiosPromise<any>もinterfaceを作る
  getAll(params: IGetAllParams): AxiosPromise<IGetAllResponse[]> {
    return this.axios.get(`${resource}`, { params });
  }

  // ユーザーの取得
  getUser(user_id: number): AxiosPromise<any> {
    return this.axios.get(`${resource}/${user_id}`);
  }

  // ユーザーがフォローしているユーザーの取得
  getFollowees(user_id: number, params: IGetFolloweesParams): AxiosPromise<any> {
    return this.axios.get(`${resource}/${user_id}`, { params });
  }

  // ユーザーをフォローしているユーザーの取得
  getFollowers(user_id: number, params: IGetFollowersParams): AxiosPromise<any> {
    return this.axios.get(`${resource}/${user_id}`, { params });
  }
}

export interface IGetAllParams {
  page: number;
  per_page: number;
}

export interface IGetFolloweesParams {
  page: number;
  per_page: number;
}

export interface IGetFollowersParams {
  page: number;
  per_page: number;
}

export interface IGetAllResponse {
  description: string | null;
  facebook_id: string | null;
  followees_count: number | null;
  followers_count: number | null;
  github_login_name: string | null;
  id: string | null;
  items_count: number | null;
  linkedin_id: string | null;
  location: string | null;
  name: string | null;
  organization: string | null;
  permanent_id: number | null;
  profile_image_url: string | null;
  team_only: boolean;
  twitter_screen_name: string | null;
  website_url: string | null;
}
