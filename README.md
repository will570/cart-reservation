# Cart-Reservation
CS35L group project <br/>
Aims to create a web app that eases the process of cart reservation on campus, provides up-to-date information to users, and keeps the campus cart reservation system organized. 

## Setup
This app uses React.js, Material-UI, Express.js, and MongoDB

1. Clone the repository
  ```
  git clone https://github.com/will570/cart-reservation.git
  ```
2. Install packages

    a. In one terminal, type
      ```
      cd cart-reservation/frontend/client
      npm install
      ```
    b. In another terminal, type
      ```
      cd cart-reservation/backend/server
      npm install
      ```
       If connection to server fails due to database access, contact a contributor to whitelist the ip address for database acess. 
   
   c. If the above does not work due to some package conflicts, try the following instead
      ```
      npm install --force
      npm audit fix --force
      ```
 3. Ask a contributor for .env variables
 4. Run the app on localhost
  In both of the terminals, type the following in both terminals
  ```
  npm start
  ```
## User Manual -- Student

1. Registration <br/>
  The student will register with a valid 9-digit UID and a @g.ucla.edu email if an account has not been created. 
2. Usage <br/>
  As a normal user, the student can reserve multiple carts and will need to screenshot the confirmation message to show the frontdesk for successful reservation. 
  The student can also report cart damages via the message board and interact with other users. 

## User Manual -- Admin

1. Account login <br/>
  The administrator has the account: 
    UID: 000000000
    Password: getegged 
  Please login with the following credentials to access administrator privileges. 
2. Usage <br/>
  The admin can use all functionalities a normal user has. 
  In addition, the admin is able to return carts, add carts, delete carts, and rearrange carts on the admin page. 
