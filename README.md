## 1. Use create-react-app to bootstrap your project

npmx create-react-app

## 2. Use a data source of your own choosing in JSON format that has lists of JavaScript objects within it (feel free to use the JSON sample files I've posted in Canvas)

thrones.json

## 3.Create 2 React custom components and display them on your main page:

Episodes.js / Header.js

1. One custom component should be a "Class" based React component

```javascript
Header.js;
```

2. The other custom component should be a "Functional" React component

```javascript
Episodes.js;
```

## 4. Use the import keyword to bring your JSON data into your component files

```javascript
import thrones from '../Data/thrones.json';
```

## 5. Use the import keyword to add your components to your App.js file (and be sure to export the component properly!)

```javascript
import Header from './Components/Header';
import Episodes from './Components/Episodes';
```

## 6. Make sure each component can properly render some list of JSON object properties (style the output as you see fit)

    Renders content

## 7. Demonstrate next generation JavaScript usage in your components including new operators and array methods

```javascript
season4: thrones._embedded.episodes.filter((season) => season.season === 4);
```

## 8. Commit and push your source files into a Git repository named something like "initial-react-app"

1.  Be sure your repo includes a ReadMe.md file. Inside that ReadMe file use Markdown notation to list the features of your app (not the default ReadMe create-react-app provides)

## 9. Push your repository to GitHub, deploy your repo using Netlify, and submit both your GitHub URL AND your Netlify URL via this Canvas assignment.
