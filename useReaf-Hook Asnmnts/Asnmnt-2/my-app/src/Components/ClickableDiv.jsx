import { useRef } from 'react';

const ClickableDiv = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 
        divRef.current.style.backgroundColor === 'green' ? 'gray' : 'green';
    }
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{ width: '200px', height: '200px', border: '1px dashed gray', cursor: 'pointer', borderRadius:'10px', textAlign:'center' }}
    >
      Click To Change BackGround Color
    </div>
  );
};

export default ClickableDiv;
