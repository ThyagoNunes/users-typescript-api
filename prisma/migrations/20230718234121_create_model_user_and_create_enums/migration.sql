-- CreateEnum
CREATE TYPE "skin_colors" AS ENUM ('BRANCO', 'NEGRO', 'INDIGENA', 'ASIATICO');

-- CreateEnum
CREATE TYPE "genders" AS ENUM ('HETERO', 'HOMEM_CISGENERO', 'MULHER_CISGENERO', 'GAY', 'LESBICA', 'MULHER_TRANS', 'HOMEM_TRANS', 'BISSEXUAL');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "born_day" INTEGER,
    "born_month" INTEGER,
    "born_year" INTEGER,
    "age" INTEGER,
    "height" DOUBLE PRECISION,
    "color" "skin_colors",
    "sexual" "genders",
    "father" TEXT,
    "mother" TEXT,
    "son" TEXT,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "address" TEXT,
    "number_address" INTEGER,
    "zip_code" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
