-- AlterTable
ALTER TABLE "product"."Category" ADD COLUMN     "isVisibleInHome" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "singleImage" JSONB;

-- AlterTable
ALTER TABLE "product"."Product" ADD COLUMN     "isVisibleInHome" BOOLEAN NOT NULL DEFAULT false;
