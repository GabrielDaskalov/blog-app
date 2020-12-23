Blog-system

1. Introduction:
    Blog-system is an SPA application, where users can post and share information, read another posts and etc. There are public and private parts. The public part consists of Home Page, News Page, About Page, Register Page and Login Page. The private page consists of Private Home Page, Post Page, Categories Page, Search Page, Account Page and Logout Page.

2. Technologies:
    - MERN Stack- MongoDB Atlas, ExpressJS, ReactJS and NodeJS.
    - HTML and CSS

3. Requirements:
    - MongoDB
    - ExpressJS
    - ReactJS
    - NodeJS

4. Launch:
    1. Download from GitHub
    2. Run command 'npm install' for client and server folders
    3. Change MONGODB_URI in client/.env with your personal Mongo URI
    4. Run command 'nodemon server.js' for the server folder
    5. Run command 'npm start' for the client folder.

4.1 NodeJS and ExpressJS Setup:
    1. Download and install NodeJS from https://nodejs.org/en/

4.2 MongoDB Setup:
    1. Register in MongoDB Atlas: https://www.mongodb.com/cloud/atlas/signup
    2. Create database user: https://docs.atlas.mongodb.com/security-add-mongodb-users/
    3. Get URI: Clusters-> Connect-> Connect your application->Add your connection string.. (copy the connection string and paste it for MONGODB_URI in .env). Replace <password> with the password for the database user (2). Replace <dbname> with the name of the database that connections will use by default (in this case the name can be random). Ensure any option params are URL encoded.
    3. In Clusters-> Connect-> Collections you can check your tables (users, categories, posts) and etc.1.