import { render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("Form input", () => {
  test("Titulo", () => {
    render(<Form />);
    const input = screen.queryByLabelText(/Card Number/i);
    expect(input).toBeInTheDocument();
  });
});
