import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LightLogo from '../../assets/icons/light-logo.svg';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginIn , setLoginIn] = useState(false) 
  const error = document.querySelector('#errorMessage');
  const constructFormData = () => {
    return {
      email: email,
      password: password
    };
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginIn(true);
    const formData = constructFormData();
  
    try {
      const response = await fetch('https://diamondreams.onrender.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        setEmail('');
        setPassword('');
        setLoginIn(false);
        localStorage.setItem('token', JSON.stringify(data));
        history('/Admin')
      } else {
        setEmail('');
        setPassword('');
        setLoginIn(false);
        const data = await response.json();
        console.error('Failed to submit form data:', data);
        error.innerHTML = data
      }
    } catch (error) {
      setLoginIn(false);
      console.error('Error submitting form data:', error);
      error.innerHTML = 'Connect to a network and try again';
    }
  };
  

  return (
    <>
      <header className="adminHeader">
        <nav className="rule">
          <ul className="topNav">
            <li>
              <img src={LightLogo} alt="Logo" />
              <p>Diamonddreams Event</p>
            </li>
          </ul>
        </nav>
      </header>
      <main className="rule">
        <section className="adminLogin">
          <h2>Hello!</h2>
          <form onSubmit={handleSubmit}>
            <p>Please input your details</p>
            <label htmlFor="Email" >Email</label>
            <input type="text" id="Name" placeholder="Email" value= {email}  onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="pword">Password</label>
            <input type="password" id="pword" placeholder="Password" value={password}  onChange={e => setPassword(e.target.value)} />
            <button disabled={loginIn}>{loginIn ? 'Login you in...' : 'Continue'}</button>
            <p id="errorMessage"></p>
          </form>
        </section>
      </main>
    </>
  );
}
 
export default Login;