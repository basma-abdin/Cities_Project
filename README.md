# Ville Project

Content of this project.

   - Server (Nodejs and ExpressJs)
   - Client (ReactJs)
# Description
    API and website for displaying france cities got from database (mysql)
# Installation
You should install:
   - Nodejs
# Prerequisites
  - mySQL server.
  - import ville_france_free.sql in mysql ( mysql -u user -p db_name < villes_france_free.sql )


# Get started
Backend:
- Before starting change database parameters (HOST, DB_USER , DB_PASS, DB_DATABASE) in (config/developement.json)
```Sh
$ cd Server
$ npm install
$ npm start
```
Frontend:
```Sh
$ cd Client
$ npm install
$ npm start
```

Unit tests:
- Before starting :
 1- Import test/ville_france_test.sql in mysql ( mysql -u root -p db_name < villes_france_test.sql )
 2- Change database parameters (HOST, DB_USER , DB_PASS, DB_DATABASE) in (config/test.json)
```Sh
$ cd Server
$ npm test
```
On your browser:
   - You type 'localhost:3000/' to get to the website
# Documentation
- Get 'localhost:8000/api/v1/villes' => ville list
- Get 'localhost:8000/api/v1/villes?page=2' => ville list on page 2
- Get 'localhost:8000/api/v1/villes?sort=asc' => ville list on page 1 and ascending order
- Get 'localhost:8000/api/v1/villes?sort=asc&departement=94' => ville list in 94 departement + ascending order
- Get 'localhost:8000/api/v1/villes/1' => ville 1 details
