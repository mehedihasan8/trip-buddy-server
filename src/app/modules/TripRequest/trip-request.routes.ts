import express from "express";

import auth from "../../middlewares/auth";
import { UserRole } from "../../../../prisma/generated/client";
import { tripRequestController } from "./trip-request.controller";
import validationRequest from "../../middlewares/ValidationRequest";
import { tripRequestValidation } from "./trip-request.validation";

const router = express.Router();

router.post(
  "/:tripId",
  auth(UserRole.USER),
  tripRequestController.travelBuddyRequest
);

router.get(
  "/user",
  auth(UserRole.USER),
  tripRequestController.getAllTravelBuddyRequestUser
);

router.get(
  "/all-travel-request",
  auth(UserRole.ADMIN, UserRole.USER),
  tripRequestController.getAllTravelBuddyRequest
);

router.put(
  "/update-status/:buddyId",
  auth(UserRole.ADMIN, UserRole.USER),
  validationRequest(tripRequestValidation.tripRequestStatusValidation),

  tripRequestController.travelBuddyUpdateStatus
);

export const tripRequestRouter = router;
