//import { UserDB, UserDTO } from "../types/user";

export const mapLogin = (user: any): any => ({
  id: user.id,
  fullname: `${user.name} ${user.surename}`,
  document: user.document,
});
