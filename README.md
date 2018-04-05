# Backend

## Prerequisites
1. Install the database (Postgres)

For mac, run `brew install postgresql` on terminal

2. Create a database user for the project. Must match config.json so DB can connect properly:

`createuser -P -s -e filcrate`

3. When prompted for a password type `password`

4. After creating the user, create the database:

`createdb -h localhost -U filcrate filcrate_dev`

5. More information can be found at this [link](https://github.com/CUNYTechPrep/ctp2017/blob/master/guides/installing-postgresql.md).

## How to run
1. Clone this repository.
2. Run scraping tool.
3. `cd backend`
4. `npm start`

## Dependencies
1. Express
2. Passport
3. Postgres
4. Sequelize
