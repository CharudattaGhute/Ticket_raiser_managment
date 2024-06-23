# User and Ticket Management API

This project is a RESTful API for managing users and tickets. It is built using Node.js, Express, and MongoDB. The API allows you to create, read, update, and delete users and tickets.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or later)
- [MongoDB](https://www.mongodb.com/) (v4.x or later)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
    ```sh
   https://github.com/CharudattaGhute/Ticket_raiser_managment.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
    ```env
        MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.prqkren.mongodb.net/appoinment
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### User Endpoints

- **Add User**
    - **URL:** `POST /api/adduser`
    - **Request Body:**
        ```json
        {
          "username": "Charudatta Ghute",
          "user_email": "ghutecharudatta@gmail.com",
          "mobile": 9511225460,
          "gender": "male",
          "age": 21,
          "designation": "user",
          "type": "login credential problem",
          "password": "charu@123",
          "createdBy": "charudatta",
          "modifiedBy": "admin",
          "createdAt": "2024-12-11T18:30:00.000+00:00",
          "modifiedAt": "2024-12-11T18:30:00.000+00:00"
        }
        ```
    
- **Get All Users**
    - **URL:** `GET /api/getalluser`
   

- **Delete User**
    - **URL:** `DELETE /api/deleteuser/:id`
    

- **Update User**
    - **URL:** `PUT /api/updateuser/:id`
    - **Request Body:**
        ```json
        {
          "designation": "Admin"
        }
        ```
   

### Ticket Endpoints

- **Add Ticket**
    - **URL:** `POST /api/addticket`
    - **Request Body:**
        ```json
        {
          "ticketType": "login credential problem",
          "status": "Pending",
          "title": "administrator error",
          "description": "technical issue",
          "dueDate": "2024-07-19T18:30:00.000+00:00",
          "allocatedId": "123abdrt5",
          "remarks": "ongoing",
          "createdBy": "Pratik Gaikwad",
          "modifiedBy": "Suraj Suruwanshi",
          "createdAt": "2024-07-19T18:30:00.000+00:00",
          "modifiedAt": "2024-07-20T18:30:00.000+00:00"
        }
        ```
    

- **Get All Tickets**
    - **URL:** `GET /api/getallticket`
   

- **Delete Ticket**
    - **URL:** `DELETE /api/deleteticket/:id`
    

- **Update Ticket**
    - **URL:** `PUT /api/updateticket/:id`
    - **Request Body:**
        ```json
        {
          "status": "Accepted"
        }
        ```
    

## Error Handling

The API returns appropriate HTTP status codes and error messages for various error scenarios, such as validation errors, resource not found, and internal server errors.

## License

This project is licensed under the MIT License.
