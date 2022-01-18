import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Home from './navigations/stacks';
import store from './redux/store/store';
import SplashScreen from './screens/SplashScreen';


export default function App() {
   const [loading, setLoading] = useState('true');

   useEffect(() => {
      //fetch
      setTimeout(() => {
         setLoading(false);
      }, 5000);
   }, []);

   if (loading) return <SplashScreen />;
   return (
      <Provider store={store}>
         <Home />
      </Provider>
   )




}
