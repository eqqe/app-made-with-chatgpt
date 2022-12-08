import React from 'react';
import { Button } from './Button';
import { Button as ButtonData } from './data';

interface Props {
  title: string;
  buttons: ButtonData[];
}

export const Banner: React.FC<Props> = ({ title, buttons }) => {
  return (
    <div className="banner">
      <h1 className="banner-title">{title}</h1>
      <div className="banner-buttons">
        {buttons.map((button) => (
          <Button key={button.id} button={button} />
        ))}
      </div>
    </div>
  );
};
