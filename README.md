## 1. Convert any class-based components you might still be using to functional components.
 - all class components are changed to funcional components.

## Create a Signup or Login form that captures at least 3 bits of user information
- The elements in the form must indicate if they are required or not
  - Has a red underline and alters user if they atttempt to submit without filling all fields.
- The elements in the form must be validated.
  - Email validation, empty field validation.
- The submission of the form must be stored in local state using the useContext hook.
  - Submission of the form is saved in the LoginContext.js context. It saves the first name & auth status.
