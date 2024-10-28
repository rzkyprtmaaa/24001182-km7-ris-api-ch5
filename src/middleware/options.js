const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetOptions = (req, res, next) => {
  try {
    const schema = z.object({
      option: z.string().optional(),
    });

    schema.parse(req.query);
    next();
  } catch (error) {
    throw new BadRequestError(error.errors);
  }
};

exports.validateGetOptionById = (req, res, next) => {
  try {
    const schema = z.object({
      id: z.string(),
    });

    schema.parse(req.params);
    next();
  } catch (error) {
    throw new BadRequestError(error.errors);
  }
}

exports.validateCreateOption = (req, res, next) => {
  try {
    const schema = z.object({
      option: z.string(),
    });

    schema.parse(req.body);
    next();
  } catch (error) {
    throw new BadRequestError(error.errors);
  }
};

exports.validateUpdateOption = (req, res, next) => {
  try {
    const paramsSchema = z.object({
      id: z.string(),
    });
    
    const schema = z.object({
      option: z.string().optional(),
    });

    paramsSchema.parse(req.params);
    schema.parse(req.body);
    next();
  } catch (error) {
    throw new BadRequestError(error.errors);
  }
}

exports.validateDeleteOption = (req, res, next) => {
  try {
    const schema = z.object({
      id: z.string(),
    });

    schema.parse(req.params);
    next();
  } catch (error) {
    throw new BadRequestError(error.errors);
  }
}