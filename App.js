import React, {useEffect, useState} from 'react';
import SplashScreen from './screens/SplashScreen';

import Home from './navigations/stacks';

export default function App() {
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  if (loading) return <SplashScreen />;
  return <Home />;
}
