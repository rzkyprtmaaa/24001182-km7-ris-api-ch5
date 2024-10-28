const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

const validateGetSpecs = async (req, res, next) => {
  const validateQuery = z.object({
    spec: z.string().optional(),
  });

  const resultValidateQuery = validateQuery.safeParse(req.query);
  if (!resultValidateQuery.success) {
    return next(new BadRequestError(resultValidateQuery.error.errors));
  }
  next();
};

const validateGetSpecsById = async (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    throw new BadRequestError(resultValidateParams.error.errors);
  }

  next();
};

const validateCreateSpecs = async (req, res, next) => {
  const validateBody = z.object({
    spec: z.string(),
  });

  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    throw new BadRequestError(resultValidateBody.error.errors);
  }

  next();
};

const validateUpdateSpecs = async (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    throw new BadRequestError(resultValidateParams.error.errors);
  }

  const validateBody = z.object({
    spec: z.string(),
  });

  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    throw new BadRequestError(resultValidateBody.error.errors);
  }

  next();
};

const validateDeleteSpecs = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    throw new BadRequestError(resultValidateParams.error.errors);
  }

  next();
};

module.exports = {
  validateGetSpecs,
  validateGetSpecsById,
  validateCreateSpecs,
  validateUpdateSpecs,
  validateDeleteSpecs,
};
