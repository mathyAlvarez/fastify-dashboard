import { pool } from "../config/db";
import { UserDB } from "../types/user";
import { ApiResponse } from "../types/apiResponse";
import { SuccessResponse } from "../types/success";

export const getAllUsers = async (): Promise<UserDB[]> => {
  const [rows] = await pool.query("CALL get_all_users()");
  return rows[0] as UserDB[];
};

export const insertUsersService = async (req: any, rep: any): Promise<any> => {
  console.log("insertUsers", req.body);
  const { username, name, surname, email, password_hash } = req.body;
  const conn = await pool.getConnection();

  try {
    const [result] = await conn.query("CALL insert_user(?,?,?,?,?, ?)", [
      name,
      surname,
      email,
      password_hash,
      2,
      username,
    ]);

    return result as any[];
  } catch (e: any) {
    const errorResponse: ApiResponse<{}> = {
      error: true,
      message: e?.sqlMessage,
      statusCode: 500,
    };

    throw errorResponse;
  }

  //return null;
};
