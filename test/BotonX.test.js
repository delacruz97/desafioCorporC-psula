import { render, screen } from "@testing-library/react";
import BotonX from "../components/BotonX";

describe("Boton x", () => {
  test("Boton", () => {
    render(<BotonX />);
    const btn = screen.getByRole("button", { name: /X/i });
    expect(btn).toBeInTheDocument();
  });
});
