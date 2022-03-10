# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

If you want to clone my repository, there are a couple steps you will have to do.
## NOTE : All installations are required to run the code on your local machine

## In your terminal:
1. Install pip in your terminal
2. Install flask
3. Install python3-dotenv
4. Install requests
4. Go to the developer website for imdb and request an 'API_KEY'
## The API_KEY is how imdb will authorize each session
5. Create a .env file in the same respository as the .gitignore
6. Inside the .env file you will want to type out this line:

export API_KEY = $your api key$

## More required installation
7. Install PostgreSQL using these steps (you may run into some errors depending on your system):

brew install postgresql
brew services start postgresql
psql -h localhost  
# this is just to test out that postgresql is installed okay - type "\q" to quit
# if the above command gives you an error like "database <user> does not exist," try the workaround in this link: https://stackoverflow.com/questions/17633422/psql-fatal-database-user-does-not-exist
pip3 install psycopg2-binary
pip3 install Flask-SQLAlchemy==2.1


## we now need to setup a heroku database to store all of your information
8. to edit or create apps from heroku we need to login to your account using:

heroku login

9. create a new app with:

heroku create

10. creating a new database

heroku addons:create heroku-postgresql:hobby-dev 

 If that doesn't work, add a -a {your-app-name} to the end of the command, with no braces

11. use this command to show your DATABASE_URL and copy it

heroku config

12. in your .env file, you will need to add:

export DATABASE_URL='$your DATABASE_URL'

 make sure to use " or ' to enclose your DATABASE_URL

13. also make sure that your DATABASE_URL starts with postgresql: instead of postgres:

## Be sure to replace the $$$$ as well
14. Change the directory of your terminal to the repository of the app if you have not already
15. Run python app.py or python3 app.py

## What are at least 3 technical issues you encountered with your project milestone? How did you fix them? 
1. the first I came across was being able to fetch the data from the flask endpoint to react.
    ~ I solved this by adding a .results after data because in the GET request that we got from the flask endpoint, all the json information was contained in a variable named results

2. the second problem I came across was printing out the data that I fetched. It was giving me a lot of objectErrors and typeErrors.
    ~ The way I solved that was to add a @property to my database table and I serialized the information so that it could be printed out.

3. the third main issue I had was figuring out the editing of the application. I couldn't find much useful information online about using '<inputs>'.
    ~ In the end I got it to work by just using a basic form and checking to make sure that the row in the batabase they wanted to edit belonged to that user and then updated the items in the row.

## What was the hardest part of the project for you, across all milestones? What is the most useful thing you learned, across all milestones?
The hardest part about this entire project was having to adjust to finding solutions to every question you would have about coding it. When there would be issues or bugs, you would look up the errors, reach out to other people or just wing it. In the end, you had to find a way to be flexible and find the best solution that still works well with your code. The most useful thing that I've learned from these milestones is to plan ahead and really lay out all the components you want to achieve, make a user-story, and start small and be organized.