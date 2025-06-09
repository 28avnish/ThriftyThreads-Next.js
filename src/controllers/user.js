import prisma from "../config/db.js";
import errorResponse, { asyncHandler } from "../utils/asyncHandler.js";

// @route - POST api/v1/auth
export const newUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isUserExist) {
    return next(new errorResponse("Email already exists."));
  }

  await prisma.user.create({ data: req.body });

  res
    .status(201)
    .json({ status: true, message: "User created successfully!!" });
});
