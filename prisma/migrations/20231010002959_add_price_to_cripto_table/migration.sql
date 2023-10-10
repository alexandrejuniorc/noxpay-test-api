/*
  Warnings:

  - Added the required column `price` to the `CriptoCurrency` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CriptoCurrency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "votes" INTEGER NOT NULL
);
INSERT INTO "new_CriptoCurrency" ("id", "name", "votes") SELECT "id", "name", "votes" FROM "CriptoCurrency";
DROP TABLE "CriptoCurrency";
ALTER TABLE "new_CriptoCurrency" RENAME TO "CriptoCurrency";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
