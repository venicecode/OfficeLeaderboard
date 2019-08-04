CREATE TABLE "companies" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL UNIQUE,
	"imgurl" varchar(255),
	CONSTRAINT "companies_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "offices" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"companyid" integer NOT NULL UNIQUE,
	CONSTRAINT "offices_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "employees" (
	"_id" serial NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"officeid" integer NOT NULL UNIQUE,
	"imgurl" varchar(255),
	CONSTRAINT "employees_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "games" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"officeid" integer NOT NULL UNIQUE,
	"imgurl" varchar(255),
	CONSTRAINT "games_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "stats" (
	"_id" serial NOT NULL,
	"gameid" integer NOT NULL UNIQUE,
	"usernameid" integer NOT NULL UNIQUE,
	"rank" integer NOT NULL,
	CONSTRAINT "stats_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "offices" ADD CONSTRAINT "offices_fk0" FOREIGN KEY ("companyid") REFERENCES "companies"("_id");

ALTER TABLE "employees" ADD CONSTRAINT "employees_fk0" FOREIGN KEY ("officeid") REFERENCES "offices"("_id");

ALTER TABLE "games" ADD CONSTRAINT "games_fk0" FOREIGN KEY ("officeid") REFERENCES "offices"("_id");

ALTER TABLE "stats" ADD CONSTRAINT "stats_fk0" FOREIGN KEY ("gameid") REFERENCES "games"("_id");
ALTER TABLE "stats" ADD CONSTRAINT "stats_fk1" FOREIGN KEY ("usernameid") REFERENCES "employees"("_id");
