# Backend

## Prerequisites

1. Install the database (Postgres)

For mac, run `brew install postgresql` on terminal

2. Create a database user for the project. Must match config.json so DB can connect properly:

`createuser -P -s -e filcrate`

3. When prompted for a password type `password`

4. After creating the user, create the database:

`createdb -h localhost -U filcrate filcrate_db`

More information can be found at this [link](https://github.com/CUNYTechPrep/ctp2017/blob/master/guides/installing-postgresql.md).

## How to run

Note: Make sure postgresql is running

### Method 1:

1. Clone this repository.
2. `cd backend`
3. `npm install`
4. Run the migrations `node_modules/.bin/sequelize db:migrate`. This will create the tables in our database.
5. Run the seeders `node_modules/.bin/sequelize db:seed:all`. This will create a mock data in our tables.
6. Run the scraping tool. Navigate to scraper directory and run `node scrape.js`
7. `npm start`

### Method 2:

1. Clone this repository.
2. `cd backend`
3. `npm start`
4. Run the scraping tool. Navigate to scraper directory and run `node scrape.js`

## Dependencies

1. Express
2. Passport
3. Postgres
4. Sequelize

## Helpful Resources

[CTP Backend Starter Code](https://github.com/CUNYTechPrep/week-06-projects/tree/master/backend-starter-code)
