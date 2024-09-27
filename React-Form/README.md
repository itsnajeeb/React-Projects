# React Form  🔐

**React Hook Form** is utilized to efficiently manage the form state, validation, and submission process. This allows for a seamless user experience with minimal performance overhead.

## Features 🌟

- Multiple form input fields(e.g. - first name, last name, age)
- Real-time form validation.
- Custom error messages displayed after clicking the submit button.
- Efficient form state management using React Hook Form.

## Technologies Used 🛠️

- **React Hook Form :** A form library that provides easy and efficient form validation.
- **Tailwind :** For styling the form and error messages.

## Validation Rules
- All input fields are required.
- Name must have a minimum maximum length of characters.
- Age Must be older then 18 and younger then 99 years old.

## Error Handling 
If a user attempts to submit the form without meeting the validation requirements:
- Error messages will be displayed below the input fields.
- Errors will persist until the user inputs valid data and re-submits the form.


## How It Works 🔍
- The **useForm** hook from React Hook Form is used to handle form state and validation logic.
- The **register** function is used to link each input field with validation rules.
- The **errors** object holds any validation errors, which are conditionally rendered next to their respective fields.
- The form submission is handled by **handleSubmit(onSubmit)**, which only proceeds if validation passes.
- If any field has validation issues, an error message will be shown below that field.

### Prerequisites

- **Node.js** and **npm** installed on your system.
  
