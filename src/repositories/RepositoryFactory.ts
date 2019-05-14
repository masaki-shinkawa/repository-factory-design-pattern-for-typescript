import { UserRepository } from "./UserRepository";

export class RepositoryFactory {
  private static _repositories: IRepositories = {
    users: new UserRepository()
  };

  static get(): IRepositories {
    return this._repositories;
  }
}

interface IRepositories {
  users: UserRepository;
}
