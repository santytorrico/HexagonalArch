import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

const users: User[] = [
  {
    id: "1",
    email: "santy.hello@gmail.com",
  },
  {
    id: "2",
    email: "chris.hello@gmail.com",
  },
  {
    id: "3",
    email: "adrian.hello@gmail.com",
  },
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id == userId);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
