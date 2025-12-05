-- AlterTable
ALTER TABLE "Donor" ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpires" TIMESTAMP(3);
