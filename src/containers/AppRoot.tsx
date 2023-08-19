import { AnimatePresence } from 'framer-motion';

import Routes from 'navigations/Routes';

const AppRoot = () => {
  return (
    <AnimatePresence>
      <Routes />
    </AnimatePresence>
  );
};

export default AppRoot;
