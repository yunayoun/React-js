import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication'
import Database from './pages/Database/Database'
import Functions from './pages/Functions/Functions'
import Hosting from './pages/Hosting/Hosting'
import Storage from './pages/Storage/Storage'
import MachineLearning from './pages/Machinelearning/MachineLearning'
import { ThemeProvider } from '@mui/material/styles'
import { dashboardTheme} from './dashboardTheme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='Authentication' element={<Authentication/>}/>
        <Route path='Database' element={<Database/>}/>
        <Route path='Functions' element={<Functions/>}/>
        <Route path='Hosting' element={<Hosting/>}/>
        <Route path='Storage' element={<Storage/>}/>
        <Route path='MachineLearning' element={<MachineLearning/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
