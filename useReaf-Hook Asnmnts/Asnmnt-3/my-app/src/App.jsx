import { useRef, useState } from 'react';

const DynamicForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [validationState, setValidationState] = useState({
    name: null,
    email: null,
    password: null
  });

  const handleFocus = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const validateInput = (name, value) => {
    switch (name) {
      case 'name':
        return value.length >= 3;
      case 'email':
        return /\S+@\S+\.\S+/.test(value);
      case 'password':
        return value.length >= 6;
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });

    setValidationState({
      ...validationState,
      [name]: validateInput(name, value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(validationState).every(Boolean)) {
      console.log('Form Data:', formState);
      alert('Form Submitted Successfully!');
    } else {
      alert('Please Fix The Validation Errors Before Submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            ref={nameRef}
            value={formState.name}
            onChange={handleChange}
            onFocus={() => handleFocus(nameRef)}
          />
        </label>
        {validationState.name === false && (
          <span style={{ color: 'red' }}>Name Must Be At Least (3) Characters Long</span>
        )}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            ref={emailRef}
            value={formState.email}
            onChange={handleChange}
            onFocus={() => handleFocus(emailRef)}
          />
        </label>
        {validationState.email === false && (
          <span style={{ color: 'red' }}>Invalid Email Format</span>
        )}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            ref={passwordRef}
            value={formState.password}
            onChange={handleChange}
            onFocus={() => handleFocus(passwordRef)}
          />
        </label>
        {validationState.password === false && (
          <span style={{ color: 'red' }}>Password Must Be At Least (6) Characters Long</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
