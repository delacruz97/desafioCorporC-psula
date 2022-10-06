import { render, screen } from "@testing-library/react";
import DescriptionBitcoin from "../components/DescriptionBitcoin";

describe("DescriptionBitcoin Titulo", () => {
  test("Titulo", () => {
    render(<DescriptionBitcoin />);
    const title = screen.getByText(/Sneekers for Men/i);
    expect(title).toBeInTheDocument();
  });
});

describe("DescriptionBitcoin Precio", () => {
  test("Precio", () => {
    render(<DescriptionBitcoin />);
    const precio = screen.getByText(/Price in BTC/i);
    expect(precio).toBeInTheDocument();
  });
});

describe("DescriptionBitcoin Parrafo", () => {
  test("Parrafo", () => {
    render(<DescriptionBitcoin />);
    const article = screen.getByRole("article", { name: "parrafo principal" });
    expect(article).toBeInTheDocument();
  });

  test("color texto", () => {
    render(<DescriptionBitcoin />);
    const article = screen.getByRole("article", { name: "parrafo principal" });
    expect(article).toHaveStyle({
      color: "Jagger",
    });
  });
});
