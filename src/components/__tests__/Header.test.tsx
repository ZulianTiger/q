import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  test("renders both links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
    expect(links[0]).toBeVisible();
    expect(links[1]).toBeVisible();
  });

  test("logs 'Hello from Header' to the console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(consoleSpy).toHaveBeenCalledWith("Hello from Header");
    consoleSpy.mockRestore();
  });

  test("clicking on a link changes location", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getAllByRole("link")[0];
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe("/");
  });
});
