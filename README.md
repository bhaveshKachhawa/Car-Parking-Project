# Car Parking System

This is a web-based car parking system that allow users to register user,login user, manage park cars, removed cars and manage parking slot.

## Features
- Login:
    * User can login through password and mail id also you can add new users through register.
- Parking slots: 
    * View available slots
    * park car in available slots, and mark slots as occupied or false(empty).
- Park cars: 
    * Register cars by giving car numbers and colors, and allocate them to available parking  slots.
- Remove cars:
    * Remove parked cars and mark his slots available for parking.
- Removed cars:
    * You can see removed car history when car is parked his entry date, when car is removed exit date ,car color ,slot number and reg 
      number.
-Automatic slot update:
    * You can see avaliable slots , occupied slots on your home page they will automatically update as per the avlability.

## Technologies Used

- Node.js: Backend server environment
- Express.js: Web framework for Node.js
- MongoDB: NoSQL database for storing parking slot, car data , user data and removed car data
- HTML/CSS/JavaScript: Frontend user interface
- Bootstrap: Frontend styling and layout
- Handlebars: Template engine for generating HTML pages dynamically
- Git: Version control system for managing project codebase
- npm: Package manager for installing and managing project dependencies

## Installation

1. Clone the repository to your local machine:

   git clone https://github.com/bhaveshKachhawa/Car-Parking-Project

2. Navigate to the project directory:

   cd directory-name

3. Install project dependencies:

    -npm install
    -npm init
    -npm i nodemon
    -npm i express
    -npm i body-parser
    -npm i express-session
    -npm i hbs
    -npm i mongoose

4. Set up the MongoDB database:
   - Install MongoDB on your local machine if you haven't already.
   - Start the MongoDB server and connect.

5. Start the server:
    npm run dev

6.Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Usage

1. Home Page(index):
   - View the available parking slots and the number of parked cars.
   - Click on buttons to perform actions such as parking a car, removing a car, view parked cars, etc.

2. Park Car:
   - Enter the car number and color in the form.
   - Click the "Raise A Ticket" button fill the details and after submission slot will attached to car and car parked successfully!

3. Remove Car:
   - Click the "Remove Car" button to remove the car from the parking slot.

4. View Parked Cars:
   - View the list of parked cars, including their details.

5. View Removed Cars:
   - View the history of removed cars, including their details and the time they were removed.
