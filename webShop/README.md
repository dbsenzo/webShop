# webShop
This is an application about our course "Développement Web", which had been created in Vue 3.

# How to start
Open 2 terminals.
In the first one, go to `/frontend` and run:
```
npm install
npm run dev
```
In the second, go to `/backend` and run:
```
npm install
npm start
```

# Information about the project

## Database and Seeding
The application uses MongoDB hosted on Atlas for its database needs. The initial data is populated using a script called `seed.js`. This script is crucial for setting up the database with the necessary initial data required for the application to function correctly.

### Important Note:
**Do not modify the MongoDB URI or the `seed.js` script**, as the site relies on this specific setup to operate correctly.

## Backend Details
The backend of the application is built using Express.js. There is a crucial route `/product` which handles requests related to products. This route is essential for retrieving product information, which is used throughout the application to display product details and manage the shopping cart.

By keeping the database URI and the `seed.js` script intact, you ensure that the application has the necessary data and configurations to run smoothly. The Express server, in conjunction with these configurations, handles all the backend logic required to support the frontend operations.

Feel free to explore the codebase and understand how the various components interact, but please adhere to the guidelines above to avoid any disruptions in the application's functionality.