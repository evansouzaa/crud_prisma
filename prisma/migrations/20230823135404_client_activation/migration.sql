-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_login" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "activation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "station" TEXT NOT NULL,
    "gpon" TEXT NOT NULL,
    "cto" TEXT NOT NULL,
    "port" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "client_client_login_key" ON "client"("client_login");
