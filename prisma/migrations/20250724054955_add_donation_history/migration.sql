-- CreateTable
CREATE TABLE "DonationHistory" (
    "id" SERIAL NOT NULL,
    "donorId" INTEGER NOT NULL,
    "patientName" TEXT NOT NULL,
    "hospitalName" TEXT NOT NULL,
    "donationDate" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DonationHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonationHistory" ADD CONSTRAINT "DonationHistory_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
