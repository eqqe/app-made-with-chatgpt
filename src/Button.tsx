import React from 'react';
import { Button as ButtonData } from './data';

interface Props {
  button: ButtonData;
}

export const Button: React.FC<Props> = ({ button }) => {
  return (
    <button className="banner-button" id={button.id}>
      <i className={`icon-${button.icon}`} />
      {button.label}
    </button>
  );
};
