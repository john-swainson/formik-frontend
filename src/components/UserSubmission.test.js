import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";

import { store } from "../store";
import sampleData from "../assets/jsons/sample.json";
import UserSubmission from './UserSubmission';

const mockedUser = sampleData.reduce((prev, field) => ({
  ...prev,
  [field.id]: `test-${field.label}`
}), {});

describe(('it renders UserSubmission'), () => {
  test('renders all elements', () => {
    render(
      <Provider store={store}>
        <UserSubmission user={mockedUser} />
      </Provider>
    );
    const headingElement = screen.getByText(/Thanks for submission/i);
    expect(headingElement).toBeInTheDocument();

    sampleData.forEach((field) => {
      const textElement = screen.getByTestId(`text-${field.id}`);
      expect(textElement).toBeInTheDocument();
    });
  });
});
