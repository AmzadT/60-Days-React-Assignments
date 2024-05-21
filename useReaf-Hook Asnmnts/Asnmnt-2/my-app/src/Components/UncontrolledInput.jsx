import { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <p>Current Value: {inputRef.current?.value}</p>
    </div>
  );
};

export default UncontrolledInput;
