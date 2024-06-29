import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const validateLogin = () => {
    if (email === 'evandro@gmail.com' && password === '123456eh') {
      alert('Login bem-sucedido!');
      history.push('/list'); // Redireciona para a página de listagem
    } else {
      setErrorMessage('Email ou senha incorretos');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <br />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <br />
      <button onClick={validateLogin} style={styles.button}>Enviar</button>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '80px',
    borderRadius: '15px',
    color: 'white',
  },
  input: {
    padding: '15px',
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    width: 'calc(100% - 30px)',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: 'dodgerblue',
    border: 'none',
    padding: '15px',
    width: '100%',
    borderRadius: '10px',
    color: 'white',
    fontSize: '15px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default LoginPage;
