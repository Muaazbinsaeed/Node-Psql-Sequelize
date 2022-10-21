# Nodejs-Express-Sequelize-Postgresql-crud


# Environment vars

This project uses the following environment variables:

| Name | Description                | Default Value                |
| ---- | -------------------------- | ---------------------------- |
| CORS | Cors accepted values       | "\*"                         |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 14.18.0

# Getting started

- Clone the repository

```
git clone  https://github.com/Muaazbinsaeed/Node-Psql-Sequelize.git
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

```
npm start
```


### Project layout

```
|- app/
|   |
|   |- controller/                      // Folder containing REST Controllers (ProductController)
|   |- config/                          // Folder containing the database client
|   |- db.config.js/                    // database variables
|   |- routes/                          // Routes (Tutorial Routes)
|   |- tutorial.route.js                // All Tutorial Routes
|   |- models/                          // Database Models (Product Models)
|   |- tutorial.model.js                // Tutorial Model



---

### Endpoints

#### HTML

| HTTP Method | URL                    | Description |
| ----------- | ---------------------- | ----------- |
| `GET`       | http://localhost:8080/ | Root page   |

#### Tutorial Service

| HTTP Method | URL                                                      | Description          |
| ----------- | -------------------------------------------------------- | -------------------- |
| `POST`      | http://localhost:8080/api/tutorials/createTutorial       | Create new Tutorial  |
| `PUT`       | http://localhost:8080/api/tutorials/updateTutorial/{id}  | Update Tutorial by ID|
| `GET`       | http://localhost:8080/api/tutorials/fetchTutorial/{id}   | Get Tutorial by ID   |
| `GET`       | http://localhost:8080/api/tutorials/fetchAllTutorials    | Get All Tutorials    |
| `DELETE`    | http://localhost:8080/api/tutorials/deletetutorial/{id}  | Delete Tutorial by ID|
| `DELETE`    | http://localhost:8080/api/tutorials/deleteAllTutorials   | Delete all Tutorials |
```
