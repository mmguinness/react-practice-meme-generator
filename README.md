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
  
  
  
  ###Work in progess
  
  <!-- const thingsArray = ["Thing 1", "Thing 2"];
  const things = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  function getNewThing() {
    const newThing = `Thing ${thingsArray.length +1}`;
    thingsArray.push(newThing)
    console.log(thingsArray)
  }

  function greeting( name ) {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    // console.log(name);
    if (hours >= 4 && hours < 12) {
      timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon"
    } else if (hours >= 17 && hours < 20) {
      timeOfDay = "Evening"
     } else if (hours >= 20 && hours < 4) {
      timeOfDay = "Evening";
     }
     return (`Good ${timeOfDay}, ${name}`);
  }
  console.log(greeting("Marie")); -->


<!-- 
        {things}
      <button className="form-button" onClick={greeting}>
        Add a thing
      </button> -->




<!-- 
  export default function Meme() {

  const [count, setCount] = React.useState(0)

 function add() { 
       setCount(prevCount => prevCount + 1)
    }

  function subtract() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <main>
      <h1>{count}</h1>
      <button className="form-button" onClick={add}>
        +
      </button>
      <button className="form-button" onClick={subtract}>
        -
      </button>
      </main>
      )
      } -->


  <!-- const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
  const things = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  function getNewThing() {
    setThingsArray((prevThingsArray) => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
    alert("Hi")
  }

      <div onClick={getNewThing}>Click!</div>
      {things} -->



<!-- 
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    isFavorite: false,
  });

  function handleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  let starIcon = contact.isFavorite ? "Yes" : "No";
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <h2 onClick={handleFavorite}>{starIcon}</h2> -->