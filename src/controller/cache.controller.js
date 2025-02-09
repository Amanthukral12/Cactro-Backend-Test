import { Cache } from "../models/cache.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const addNewPair = asyncHandler(async (req, res) => {
  const { key, value } = req.body;
  if (!key || !value) {
    throw new ApiError(400, "key and value are required", [
      "key and value are required",
    ]);
  }

  const CACHE_MAX_SIZE = 1;

  const cacheSize = await Cache.countDocuments();

  if (cacheSize === CACHE_MAX_SIZE) {
    throw new ApiError(
      400,
      "Max size reached. Please delete some previous entries",
      ["Max size reached. Please delete some previous entries"]
    );
  }

  const cacheExists = await Cache.findOne({ key });

  if (cacheExists) {
    throw new ApiError(409, "Key already exists", ["Key already exists"]);
  }
  const newCache = new Cache({
    key,
    value,
  });
  await newCache.save();
  return res
    .status(200)
    .json(new ApiResponse(200, newCache, "Cache created successfully"));
});

export const getCacheByKey = asyncHandler(async (req, res) => {
  const key = Number(req.params.key);

  const keyExists = await Cache.findOne({ key });

  if (!keyExists) {
    throw new ApiError(404, "Key not found", ["Key not found"]);
  }

  res
    .status(200)
    .json(new ApiResponse(200, { keyExists }, "Key fetched successfully"));
});

export const deleteCache = asyncHandler(async (req, res) => {
  const key = Number(req.params.key);

  const keyExists = await Cache.findOne({ key });

  if (!keyExists) {
    throw new ApiError(404, "Key not found", ["Key not found"]);
  }

  await Cache.deleteOne({ key });

  res.status(200).json(new ApiResponse(200, {}, "Key deleted successfully"));
});
