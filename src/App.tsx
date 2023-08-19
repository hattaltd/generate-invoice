import { useEffect } from 'react';

import AppRoot from './containers/AppRoot';

import packageJson from '../package.json';

const App = () => {
  useEffect(() => {
    console.log(`${packageJson.version}`);
  }, []);

  return <AppRoot />;
};

export default App;
