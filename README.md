## 1. Convert any class-based components you might still be using to functional components.

- all class components are changed to funcional components.

## Create a Signup or Login form that captures at least 3 bits of user information

- The elements in the form must indicate if they are required or not

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
  - [Quote.js](/src/Components/Quotes.js)
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
  - [Quote.js](/src/Components/Quotes.js)
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
  - [Quote.js](/src/Components/Quotes.js)
- 
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