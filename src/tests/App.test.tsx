import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.tsx';

describe('App Component', () => {
  it('renders the Vite and React logos', () => {
    render(<App />);

    const viteLogoElement = screen.getByAltText(/Vite logo/i);
    const reactLogoElement = screen.getByAltText(/React logo/i);

    expect(viteLogoElement).toBeInTheDocument();
    expect(reactLogoElement).toBeInTheDocument();
  });

  it('displays the correct heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /Vite \+ React/i }),
    ).toBeInTheDocument();
  });

  it('displays the initial count as 0', () => {
    render(<App />);

    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });

    await user.click(button);

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  it('contains the instruction text', () => {
    render(<App />);

    expect(
      screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === 'p' &&
          /Edit.*and save to test HMR/i.test(content)
        );
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Click on the Vite and React logos/i),
    ).toBeInTheDocument();
  });
});
