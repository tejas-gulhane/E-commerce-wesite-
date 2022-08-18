import { Routes, Route , Redirect } from 'react-router-dom';
import { useContext  } from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const ctx=useContext(AuthContext)
  return (
    <Layout>
      <Routes>
        <Route path='/' exact
           element ={<HomePage />}
        />
        { !ctx.isLoggedIn && <Route path='/auth' element ={<AuthPage />} /> }
        
        { ctx.isLoggedIn && <Route path='/profile' element ={<UserProfile />} /> }
        { !ctx.isLoggedIn && <Route path='/auth' element ={<AuthPage />} /> }



      </Routes>
    </Layout>
  );
}

export default App;
