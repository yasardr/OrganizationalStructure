import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = props => {
  const navigate = useNavigate();

  const onCLickHandler = () => {
    navigate('/');
  }
  return (
    <>
      <div>NotFoundPage</div>
      <Link to="/">Volver a Main</Link>
      <button onClick={onCLickHandler}>Ir a Main con boton</button>
    </>
  )
}

export default NotFoundPage;