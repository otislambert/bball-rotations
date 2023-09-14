import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import HeaderComponent from "../../src/components/HeaderComponent.svelte";
import { afterEach } from "vitest";

describe("Header Rendering", () => {
  it("Renders the header", () => {
    render(HeaderComponent);

    const component = screen.getByTestId("headerComponent");
    expect(component).toBeDefined();
  });

  it("Renders the links", () => {
    render(HeaderComponent);

    const links = screen.getByTestId("headerLinks");
    expect(links).toBeDefined();
  });

  it("Renders the home link", () => {
    render(HeaderComponent);

    const component = screen.getByTestId("homeLink");
    expect(component).toBeDefined();
  });
});

describe("Header Text", () => {
  it("Renders the correct main text", () => {
    render(HeaderComponent);

    const mainText = screen.getByText("NBA Rotations");
    expect(mainText).toBeDefined();
  });

  it("renders the correct text for links", () => {
    render(HeaderComponent);

    const github = screen.getByText("Github");
    const about = screen.getByText("About");

    expect(github).toBeDefined();
    expect(about).toBeDefined();
  });
});

describe("Header Classes", () => {
  it("Renders the correct class for the component", () => {
    render(HeaderComponent);

    const header = screen.getByTestId("headerComponent");
    expect(header.classList).toContain(["header"]);
  });
  it("gives the correct class to links", () => {
    render(HeaderComponent);

    const links = screen.getByTestId("headerLinks");
    expect(links.classList).toContain(["links"]);
  });
  it("gives the correct class to main link", () => {
    render(HeaderComponent);

    const homeLink = screen.getByTestId("homeLink");
    expect(homeLink.classList).toContain(["plainLink"]);
  });
});

describe("Header Links", () => {
  it("Home link points home", () => {
    render(HeaderComponent);

    const homeLink = screen.getByTestId("homeLink");

    expect(homeLink).toHaveAttribute("href", "/");
  });
  it("about points to about", () => {
    render(HeaderComponent);

    const aboutLink = screen.getByTestId("aboutLink");
    expect(aboutLink).toHaveAttribute("href", "/about");
  });
  it("github points to github", () => {
    render(HeaderComponent);

    const githubLink = screen.getByTestId("githubLink");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/otislambert/bball-rotations"
    );
  });
});
