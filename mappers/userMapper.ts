import { UserDB, UserDTO } from "../types/user";

export const mapUser = (user: UserDB): UserDTO => ({
  id: user.id,
  fullname: `${user.name} ${user.surename}`,
  document: user.document,
});
