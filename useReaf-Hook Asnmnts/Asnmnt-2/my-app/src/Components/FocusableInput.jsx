import { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input type="text" ref={inputRef} />
  );
};

export default FocusableInput;
