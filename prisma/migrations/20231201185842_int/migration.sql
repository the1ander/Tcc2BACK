-- CreateTable
CREATE TABLE "fungos" (
    "id_fungo" SERIAL NOT NULL,
    "url_foto" TEXT NOT NULL,
    "filo" TEXT NOT NULL,
    "subfilo" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "ordem" TEXT NOT NULL,
    "familia" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "basidioma" TEXT,
    "morfologia" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "propriedades" TEXT,
    "observacoes" TEXT,

    CONSTRAINT "fungos_pkey" PRIMARY KEY ("id_fungo")
);
