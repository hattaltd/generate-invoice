import React from 'react';
import SVG from 'react-inlinesvg';

import { Variants, motion } from 'framer-motion';

import { BUTTON } from 'entities/tailwind';

import Button from 'components/Button';

import icons from 'assets/icons';

import Motion from 'utils/Motion';

import Backdrop from './Backdrop';

interface ModalComponentProps {
  variants?: Variants;
  children: React.ReactNode;
  onClick: () => void;
  height?: React.ComponentProps<'div'>['className'];
}

const Modal = ({
  onClick,
  children,
  variants,
  height,
}: ModalComponentProps): JSX.Element => {
  const modalAnimation = variants !== undefined ? variants : undefined;

  const modalHeight = height && height.length ? height : 'min-h-[min(50%,300px)]';

  return (
    <Backdrop onClick={onClick}>
      <motion.div
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={modalAnimation}
        onClick={(e) => e.stopPropagation()}
        className={`m-auto flex w-[90%] max-w-[600px] flex-col items-center rounded-lg bg-white ${modalHeight}`}
      >
        <div className="absolute right-0 top-0">
          <Button
            fill={false}
            variant={BUTTON.reset}
            onClick={() => onClick()}
            label={<SVG src={icons.closeSVG} fill="#7E7E7E" width={20} height={20} />}
            salt="p-3 inline-flex items-center justify-center cursor-pointer"
          />
        </div>
        {children}
      </motion.div>
    </Backdrop>
  );
};

Modal.defaultProps = {
  variants: Motion.dropIn,
  height: undefined,
};

export default Modal;
