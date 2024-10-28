/*
  Warnings:

  - Made the column `rent_perday` on table `availability` required. This step will fail if there are existing NULL values in that column.
  - Made the column `available_at` on table `availability` required. This step will fail if there are existing NULL values in that column.
  - Made the column `available` on table `availability` required. This step will fail if there are existing NULL values in that column.
  - Made the column `capacity` on table `car_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `transmission` on table `car_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plate` on table `car_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `year` on table `car_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `car_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `car_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cars_id` on table `car_details` required. This step will fail if there are existing NULL values in that column.
  - Made the column `manufacture_id` on table `cars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `model_id` on table `cars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `availability_id` on table `cars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `manufactures` required. This step will fail if there are existing NULL values in that column.
  - Made the column `model` on table `models` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `models` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "availability" ALTER COLUMN "rent_perday" SET NOT NULL,
ALTER COLUMN "available_at" SET NOT NULL,
ALTER COLUMN "available" SET NOT NULL;

-- AlterTable
ALTER TABLE "car_details" ALTER COLUMN "capacity" SET NOT NULL,
ALTER COLUMN "transmission" SET NOT NULL,
ALTER COLUMN "plate" SET NOT NULL,
ALTER COLUMN "year" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "cars_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "manufacture_id" SET NOT NULL,
ALTER COLUMN "model_id" SET NOT NULL,
ALTER COLUMN "availability_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "manufactures" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "models" ALTER COLUMN "model" SET NOT NULL,
ALTER COLUMN "type" SET NOT NULL;

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "profile_picture" VARCHAR,
    "role_id" INTEGER NOT NULL DEFAULT 2,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);
