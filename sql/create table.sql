CREATE TABLE "manufactures" (
  "id" BIGSERIAL PRIMARY KEY,
  "name" varchar(255)
);

CREATE TABLE "models" (
  "id" BIGSERIAL PRIMARY KEY,
  "model" varchar(255),
  "type" varchar(255)
);

CREATE TABLE "car_details" (
  "id" BIGSERIAL PRIMARY KEY,
  "capacity" int,
  "transmission" varchar(255),
  "plate" varchar(255),
  "year" int,
  "image" text,
  "description" text,
  "cars_id" bigint
);

CREATE TABLE "options" (
  "id" BIGSERIAL PRIMARY KEY,
  "cars_id" bigint,
  "option_details_id" bigint
);

CREATE TABLE "option_details" (
  "id" BIGSERIAL PRIMARY KEY,
  "option" varchar(255)
);

CREATE TABLE "specs" (
  "id" BIGSERIAL PRIMARY KEY,
  "cars_id" bigint,
  "spec_details_id" bigint
);

CREATE TABLE "spec_details" (
  "id" BIGSERIAL PRIMARY KEY,
  "spec" varchar(255)
);

CREATE TABLE "availability" (
  "id" BIGSERIAL PRIMARY KEY,
  "rent_perday" int,
  "available_at" varchar(255),
  "available" boolean
);

CREATE TABLE "cars" (
  "id" BIGSERIAL PRIMARY KEY,
  "manufacture_id" bigint,
  "model_id" bigint,
  "availability_id" bigint
);

ALTER TABLE "car_details" ADD FOREIGN KEY ("cars_id") REFERENCES "cars" ("id");

ALTER TABLE "options" ADD FOREIGN KEY ("cars_id") REFERENCES "cars" ("id");

ALTER TABLE "options" ADD FOREIGN KEY ("option_details_id") REFERENCES "option_details" ("id");

ALTER TABLE "specs" ADD FOREIGN KEY ("cars_id") REFERENCES "cars" ("id");

ALTER TABLE "specs" ADD FOREIGN KEY ("spec_details_id") REFERENCES "spec_details" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("manufacture_id") REFERENCES "manufactures" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("availability_id") REFERENCES "availability" ("id");
