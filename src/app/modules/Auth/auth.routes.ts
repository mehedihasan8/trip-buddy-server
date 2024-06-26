import express from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../prisma/generated/client";
import validationRequest from "../../middlewares/ValidationRequest";
import { userValidation } from "../User/User.validation";

const router = express.Router();

router.post(
  "/login",
  validationRequest(userValidation.loginUserValidation),
  AuthController.loginUser
);

router.get(
  "/profile",
  auth(UserRole.USER, UserRole.ADMIN),
  AuthController.UserProfile
);

router.put(
  "/profile",
  auth(UserRole.USER, UserRole.ADMIN),
  AuthController.UserProfileEdit
);

router.post(
  "/change-password",
  validationRequest(userValidation.changeUserPasswordValidation),
  auth(UserRole.ADMIN, UserRole.USER),
  AuthController.changePassword
);

export const authRouter = router;
