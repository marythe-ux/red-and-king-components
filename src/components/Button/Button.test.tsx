import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const onClick = jest.fn();
  const component = <Button label="Test-Button" onClick={onClick} />;

  const setup = () => render(component);

  it('Should call onClick', () => {
    setup();
    const button = screen.getByText('Test-Button');
    fireEvent.click(button, { target: 'test' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
