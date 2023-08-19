import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { BUTTON } from 'entities/tailwind';

import Button from 'components/Button';
import Flex from 'components/Flex';
import Modal from 'components/Modal';

const MotionButton = motion(Button);

const Playground = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isLoading === true) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const onButtonClick = () => {
    setIsOpen(true);
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <MotionButton
        label="test"
        fill={false}
        onClick={() => onButtonClick()}
        noPadding
        variant={BUTTON.reset}
        whileHover={{ scale: 1.5 }}
        isLoading={isLoading}
        whileTap={{ scale: 0.9 }}
        customLoader={<div>loading ..</div>}
      />
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <div> test</div>
        </Modal>
      )}

      <Button
        label="test"
        fill={false}
        onClick={() => onButtonClick()}
        isLoading={isLoading}
      />
      <Flex>
        <div>test</div>
        <div>lol</div>
      </Flex>
    </div>
  );
};

export default Playground;
