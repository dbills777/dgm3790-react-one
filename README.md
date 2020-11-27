## 1. Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.
## 2. Encapsulate your code as React functional components.
## 3. Work with command-line tools and NPM to create and manage your project within a real development toolset.
## 4. Allow communication between components using props and the Context API.
  - [EpisodeContext.js](/src/Components/EpisodeContext.js) -> Props Communication between components.
  
  ``` javascript
  export const EpisodeContextProvider = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const url = 'https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad';
  
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(url);
        setEpisodes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);
  return (
    <EpisodeContext.Provider value={{ episodes }}>
      {props.children}
    </EpisodeContext.Provider>
  );
};
```

  - Context API used to handle custom login. 

  ``` javascript
    export const useEpisodeContext = () => useContext(EpisodeContext);
    const LoginContext = createContext({
    isAuth: false,
    email: '',
    name: '',
    login: () => {},
    setName: () => {},
    setEmail: () => {},
  });
  ```
  - [LoginContext.js](/src/Components/LonginContext.js) -> Context API used to handle custom login. 
  ```javascript
  const LoginContext = createContext({
  isAuth: false,
  email: '',
  name: '',
  login: () => {},
  setName: () => {},
  setEmail: () => {},
});
```
## 5. Present a form for user input that provides useful form validation and feedback.
## 6. Create at least 5 custom components and use it within at least two of your other components.
## 7. Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.
## 8. Connect to a server using HTTP and display retrieved data.
## 9. Provide at least 3 different routes with navigation between them using React Router.
## 10. Manage your application's state using Hooks and the Context API.
## 11. Structure, document, and deploy your final project code according to common industry practices.


## Create a Signup or Login form that captures at least 3 bits of user information

- The elements in the form must indicate if they are required or not.

  - [LoginFullScreen.js](/src/Components/LoginFullScreen.js)

  ```javascript
              email: Yup.string()
                .email('Must be a Valid Email address')
                .max(30)
                .required('Email is Required'),
              firstName: Yup.string()
                .min(3, 'First Name Must be 3 characters or more')
                .max(40, 'Name is too long')
                .required('First Name is Required'),
              lastName: Yup.string()
                .min(3, 'Last Name Must be 3 characters or more')
                .max(40, 'Name is too long')
                .required('Last Name is Required'),
  ```

- uses of useEffect code is the
  - [CharacterContext.js](/src/contexts/CharacterContext.js)
  - [Quote.js](/src/Components/Quote.js)
- The submission of the form must be stored in local state using the useContext hook.
  - [LoginContext.js](/src/contexts/LoginContext.js)

```javascript
const LoginContext = createContext({
  isAuth: false,
  email: '',
  name: '',
  login: () => {},
  setName: () => {},
  setEmail: () => {},
});
```
- All component state must be handled using the useState hook
  - several examples
  - [LoginContext.js](/src/contexts/LoginContext.js)
  - [Quote.js](/src/Components/Quote.js)
  - [CharacterContext.js](/src/contexts/CharacterContext.js)
  
```javascript
const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
    const loginHandler = () => {
        setIsAuthenticated(!isAuthenticated)
        
    }
    const nameHandler = (personName) =>{
      setName(personName)
    }
    const emailHandler = (email) => {
      setEmail(email);
```
- Your app should have component side effects that are handled using the useEffect hook
  - [Quote.js](/src/Components/Quote.js)
  
```javascript
useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote/random?author`
      );
      setQuotes(result.data);
      console.log(result.data);
    };
    fetchItems();
  }, [quotechange]);
  const getNewQuote = () => {
    SetQuotechange(quotes);
  };
  const items = useCharacterContext()
  
  return quotes.map((item) => {
    const author = item.author;

    const image = items.characters.filter((person) => {
      return person.name === author || person.nickname === author;
    });
```
- Displays Data captured from input to the screen after form submit
```javascript
Hello {authContext.name}! Thank You, We will send your Emails to {authContext.email}.
```
