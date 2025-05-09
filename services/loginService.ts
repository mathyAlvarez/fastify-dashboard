import { pool } from "../config/db";
import { ApiResponse } from "../types/apiResponse";

//import { UserDB } from "../types/user";

export const getLoginService = async (req: any, rep: any): Promise<any> => {
  console.log("getLoginService", req.body);
  const { email, password_hash } = req.body;

  const conn = await pool.getConnection();

  try {
    const [result] = await conn.query("CALL get_user_by_email(?)", [email]);

    return result[0] as any[];
  } catch (e: any) {
    const errorResponse: ApiResponse<{}> = {
      error: true,
      message: e?.sqlMessage,
      statusCode: 500,
    };

    throw errorResponse;
  }
  //const [rows] = await pool.query("CALL get_all_users()");
  //return rows[0] as any[];
};
