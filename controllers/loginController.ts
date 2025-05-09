import { FastifyReply, FastifyRequest } from "fastify";
import { getLoginService } from "../services/loginService";
import bcrypt from "bcryptjs";

import { ApiResponse } from "../types/apiResponse";

export const getLogin = async (req: any, reply: FastifyReply) => {
  try {
    const loginData = await getLoginService(req, reply);
    if (loginData && loginData.length > 0) {
      const response = loginData[0];

      const passwordValid = await bcrypt.compare(
        req?.body?.password,
        response.password_hash
      );

      if(passwordValid){

      }else{
        const token = 

      }
      //const loginDataMapped: UserDTO[] = loginData.map(mapLogin);
      //reply.send(loginDataMapped);
    } else {
      const errorResponse: ApiResponse<{}> = {
        error: true,
        message: "user_error",
        statusCode: 404,
        errorCode: "error_login",
      };
      reply.status(404).send(errorResponse);
    }
  } catch (e) {
    reply.status(500).send(e);
  }

  //console.log("dbUsers", loginData);
  //const loginDataMapped: UserDTO[] = loginData.map(mapLogin);
  //reply.send({});
};
