CREATE TABLE IF NOT EXISTS "companies" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL UNIQUE,
	CONSTRAINT "companies_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE IF NOT EXISTS "offices" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	-- create a connection between column "companyid" and the _id column of table "comapnies"
	"companyid" integer NOT NULL REFERENCES companies(_id),
	CONSTRAINT "offices_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE IF NOT EXISTS "employees" (
	"_id" serial NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"officeid" integer NOT NULL ,
	CONSTRAINT "employees_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE IF NOT EXISTS "games" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"officeid" integer NOT NULL,
	"companyid" integer NOT NULL,
	CONSTRAINT "games_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE IF NOT EXISTS "stats" (
	"_id" serial NOT NULL,
	"gameid" integer NOT NULL,
	"usernameid" integer NOT NULL,
	"rank" integer NOT NULL,
	CONSTRAINT "stats_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

-- ALTER TABLE "offices" ADD CONSTRAINT "offices_fk0" FOREIGN KEY ("companyid") REFERENCES "companies"("_id");

-- ALTER TABLE "employees" ADD CONSTRAINT "employees_fk0" FOREIGN KEY ("officeid") REFERENCES "offices"("_id");

-- ALTER TABLE "games" ADD CONSTRAINT "games_fk0" FOREIGN KEY ("officeid") REFERENCES "offices"("_id");

-- ALTER TABLE "stats" ADD CONSTRAINT "stats_fk0" FOREIGN KEY ("gameid") REFERENCES "games"("_id");
-- ALTER TABLE "stats" ADD CONSTRAINT "stats_fk1" FOREIGN KEY ("usernameid") REFERENCES "employees"("_id");
