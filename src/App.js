import React, { useRef, useEffect } from 'react';
import './style.css';

const MyInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} />;
};

export default function App() {
  return (
    <div>
      <MyInput />
    </div>
  );
}
