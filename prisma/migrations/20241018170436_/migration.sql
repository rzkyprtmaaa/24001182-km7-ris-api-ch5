-- CreateTable
CREATE TABLE "availability" (
    "id" BIGSERIAL NOT NULL,
    "rent_perday" INTEGER,
    "available_at" VARCHAR(255),
    "available" BOOLEAN,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_details" (
    "id" BIGSERIAL NOT NULL,
    "capacity" INTEGER,
    "transmission" VARCHAR(255),
    "plate" VARCHAR(255),
    "year" INTEGER,
    "image" TEXT,
    "description" TEXT,
    "cars_id" BIGINT,

    CONSTRAINT "car_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" BIGSERIAL NOT NULL,
    "manufacture_id" BIGINT,
    "model_id" BIGINT,
    "availability_id" BIGINT,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufactures" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "manufactures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" BIGSERIAL NOT NULL,
    "model" VARCHAR(255),
    "type" VARCHAR(255),

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option_details" (
    "id" BIGSERIAL NOT NULL,
    "option" VARCHAR(255),

    CONSTRAINT "option_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "options" (
    "id" BIGSERIAL NOT NULL,
    "cars_id" BIGINT,
    "option_details_id" BIGINT,

    CONSTRAINT "options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spec_details" (
    "id" BIGSERIAL NOT NULL,
    "spec" VARCHAR(255),

    CONSTRAINT "spec_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specs" (
    "id" BIGSERIAL NOT NULL,
    "cars_id" BIGINT,
    "spec_details_id" BIGINT,

    CONSTRAINT "specs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "car_details" ADD CONSTRAINT "car_details_cars_id_fkey" FOREIGN KEY ("cars_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_availability_id_fkey" FOREIGN KEY ("availability_id") REFERENCES "availability"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_manufacture_id_fkey" FOREIGN KEY ("manufacture_id") REFERENCES "manufactures"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_cars_id_fkey" FOREIGN KEY ("cars_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_option_details_id_fkey" FOREIGN KEY ("option_details_id") REFERENCES "option_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "specs" ADD CONSTRAINT "specs_cars_id_fkey" FOREIGN KEY ("cars_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "specs" ADD CONSTRAINT "specs_spec_details_id_fkey" FOREIGN KEY ("spec_details_id") REFERENCES "spec_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
