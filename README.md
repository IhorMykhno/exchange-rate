# Exchange Rate

## Installing packages
1. Run `npm i` in the `/client` directory;
2. Run `npm i` in the `/api` directory.

## Setting .env files

### Setting .env files in the client
1. Create `.env` file in the `/client` directory;
2. Set envs form `/client/.env.example`.

### Setting .env files in the api
1. Create `.env` file in the `/api` directory;
2. Set envs form `/api/.env.example`.

### Check config file on api 
1. Be sure that db envs form `api/.env` is the same as `api/config/config.json`. This issue is in progress in the future we well remove `config.json` file.

## Run Docker Compose
1. In the [root directory](./) run `docker-compose up --build` and wait till containers had build;
2. When the containers are built, connect to "api" and run the following command `npx sequelize db:migrate`.

### To-DO
We are planning:
* Add test cases (React tests, Unit and Integration);
* Get Data from OpenData НБУ REST API [Doc](https://bank.gov.ua/admin_uploads/article/Technical_instructions_f_REST_API_OpenData.pdf);
* Add mailer service;
* Add CRON Job for sending letters;
