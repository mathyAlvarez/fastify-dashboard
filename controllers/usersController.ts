import { FastifyReply, FastifyRequest } from "fastify";
import { getAllUsers, insertUsersService } from "../services/usersService";
import { mapUser } from "../mappers/userMapper";
import { UserDTO } from "../types/user";
import { ApiResponse } from "../types/apiResponse";

export const getUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  const dbUsers = await getAllUsers();
  console.log("dbUsers", dbUsers);
  const users: UserDTO[] = dbUsers.map(mapUser);
  reply.send(users);
};

export const insertUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const dbInsertUser = await insertUsersService(req, reply);
    console.log("dbUsers", dbInsertUser);

    if (dbInsertUser.affectedRows === 0) {
      const errorResponse: ApiResponse<{}> = {
        error: true,
        message: "",
        statusCode: 500,
        errorCode: "USER_NOT_INSERTED",
      };
      throw errorResponse;
    } else {
      const successResponse: ApiResponse<{ user: string }> = {
        success: true,
        data: { user: req.body?.username },
        statusCode: 200,
      };
      reply.status(200).send(successResponse);
    }
  } catch (e) {
    reply.status(500).send(e);
  }

  //const users: UserDTO[] = dbUsers.map(mapUser);
  //reply.send(users);
};
