import jwt from "jsonwebtoken";
import { environmentVariables } from "../../config/environment.cofig";
import {
  signUpSchema,
  loginSchema,
} from "../../models/interfaces/user.interface";
import bcryptConfig from "../../config/bcrypt.config";
import prisma from "../../config/prisma.config";
class authService {
  static userRegistration = async (signUpData: signUpSchema) => {
    try {
      const { userName, password, emailId, avatar } = signUpData;

      const isExistingUser = await prisma.user.findFirst({
        where: {
          emailId: emailId,
        },
      });
    } catch (error) {}
  };
}
