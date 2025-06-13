import { uploaderCloudinary } from "../config/cloudinary.js";
import prisma from "../config/db.js";
import errorResponse, { asyncHandler } from "../utils/asyncHandler.js";

// @route - POST api/v1/category

export const createCategory = asyncHandler(async (req, res, next) => {
  const {
    productName,
    productSlug,
    discount,
    categoryId,
    description,
    prices,
  } = req.body;

  await prisma.product.create({
    data: {
      productName,
      productSlug,
      singleImage,
      multipleImages,
      discount: parseFloat(discount),
      description,
      categoryId,
      prices: {
        create: parsedPrices.map((item) => ({
          size: item.size,
          price: parseFloat(item.price),
          maxPrice: item.maxPrice ? parseFloat(item.maxPrice) : null,
        })),
      },
    },
  });

  res
    .status(201)
    .json({ status: true, message: "Product created successfully!!" });
});

// @route - GET api/v1/product

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const data = await prisma.product.findMany({ include: { prices: true } });
  res.status(200).json({
    status: true,
    message:
      data?.length >= 1 ? "Product data found successfully!!" : "No data found",
    data,
  });
});
