import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";

import { store } from "../store";
import sampleData from "../assets/jsons/sample.json";
import RegisterForm from './RegisterForm';

describe(('it renders RegisterForm'), () => {
  test('renders all elements', () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );
    sampleData.forEach((field) => {
      const inputElement = screen.getByTestId(field.id);
      expect(inputElement).toBeInTheDocument();
    });
  });
});
