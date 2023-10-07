/*
  Warnings:

  - You are about to drop the column `names` on the `CriptoCurrency` table. All the data in the column will be lost.
  - Added the required column `name` to the `CriptoCurrency` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CriptoCurrency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "votes" INTEGER NOT NULL
);
INSERT INTO "new_CriptoCurrency" ("id", "votes") SELECT "id", "votes" FROM "CriptoCurrency";
DROP TABLE "CriptoCurrency";
ALTER TABLE "new_CriptoCurrency" RENAME TO "CriptoCurrency";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
