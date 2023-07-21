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
    "born_day" INTEGER NOT NULL,
    "born_month" INTEGER NOT NULL,
    "born_year" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "color" "skin_colors" NOT NULL,
    "sexual" "genders" NOT NULL,
    "father" TEXT NOT NULL,
    "mother" TEXT NOT NULL,
    "son" TEXT,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number_address" INTEGER NOT NULL,
    "zip_code" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
