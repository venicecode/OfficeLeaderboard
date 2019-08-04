CREATE TABLE IF NOT EXISTS "company" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL UNIQUE,
	"imgurl" varchar(255),
	CONSTRAINT "company_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE IF NOT EXISTS "offices" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"company" integer NOT NULL UNIQUE,
	CONSTRAINT "offices_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE IF NOT EXISTS "employees" (
	"_id" serial NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"officeid" integer NOT NULL UNIQUE,
	"imgurl" varchar(255),
	CONSTRAINT "employees_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE IF NOT EXISTS "games" (
	"_id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"officeid" integer NOT NULL UNIQUE,
	"imgurl" varchar(255),
	CONSTRAINT "games_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE IF NOT EXISTS "stats" (
	"_id" serial NOT NULL,
	"gameid" integer NOT NULL UNIQUE,
	"usernameid" integer NOT NULL UNIQUE,
	"rank" integer NOT NULL,
	CONSTRAINT "stats_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE IF NOT EXISTS "sessions" (
	"_id" serial NOT NULL,
	"sessionid" varchar(255) NOT NULL UNIQUE,
	"username" varchar(255) NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "offices" ADD CONSTRAINT "offices_fk0" FOREIGN KEY ("company") REFERENCES "company"("_id");

ALTER TABLE "employees" ADD CONSTRAINT "employees_fk0" FOREIGN KEY ("officeid") REFERENCES "offices"("_id");

ALTER TABLE "games" ADD CONSTRAINT "games_fk0" FOREIGN KEY ("officeid") REFERENCES "offices"("_id");

ALTER TABLE "stats" ADD CONSTRAINT "stats_fk0" FOREIGN KEY ("gameid") REFERENCES "games"("_id");
ALTER TABLE "stats" ADD CONSTRAINT "stats_fk1" FOREIGN KEY ("usernameid") REFERENCES "employees"("_id");

