import { render, screen } from '@testing-library/react';
import CustomInput from './CustomInput';

const mockedProps = {
  field: {},
  form: {
    touched: {},
    errors: {},
  },
};

describe(('it renders CustomInput'), () => {
  test('renders text input', () => {
    render(
      <CustomInput {...mockedProps} data-testid="test-input" type="input" />
    );
    const inputElement = screen.getByTestId('test-input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('INPUT');
  });

  test('renders textarea', () => {
    render(
      <CustomInput {...mockedProps} data-testid="test-textarea" type="textarea" />
    );
    const textAreaElement = screen.getByTestId('test-textarea');
    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement.tagName).toBe('TEXTAREA');
  });

  test('renders select', () => {
    render(
      <CustomInput {...mockedProps} data-testid="test-select" type="select" />
    );
    const selectElement = screen.getByTestId('test-select');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.tagName).toBe('SELECT');
  });

  test('renders null if type is not matched', () => {
    const { container } = render(
      <CustomInput {...mockedProps} data-testid="test-custom-input" type="any" />
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
