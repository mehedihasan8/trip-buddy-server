import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { tripRequestService } from "./trip-request.service";
import pick from "../../../shared/pick";

const travelBuddyRequest = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;
    const { tripId } = req.params;

    const result = await tripRequestService.travelBuddyRequest(user, tripId);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Travel buddy request sent successfully",
      data: result,
    });
  }
);

const getAllTravelBuddyRequestUser = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;
    const options = pick(req.query, ["limit", "page"]);
    const result = await tripRequestService.getAllTravelBuddyRequestUser(
      user,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Potential travel buddies retrieved successfully",
      data: result,
    });
  }
);
const getAllTravelBuddyRequest = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;
    const options = pick(req.query, ["limit", "page"]);

    const result = await tripRequestService.getAllTravelBuddyRequest(
      user,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Potential travel buddies retrieved successfully",
      data: result,
    });
  }
);

const travelBuddyUpdateStatus = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;
    const { buddyId } = req.params;

    const result = await tripRequestService.travelBuddyUpdateStatus(
      user,
      buddyId,
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Travel buddy request responded successfully",
      data: result,
    });
  }
);
export const tripRequestController = {
  travelBuddyRequest,
  getAllTravelBuddyRequestUser,
  getAllTravelBuddyRequest,
  travelBuddyUpdateStatus,
};
