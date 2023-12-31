import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import Schedule from "$components/Schedule.svelte";
import { fetchSchedule } from "$lib/server/nbaDataFetching";
import { LeagueSchedule } from "$types/nbacdn";

describe("Schedule Rendering", () => {
  let schedule;

  beforeAll(async () => {
    schedule = await fetchSchedule();
  });

  it("Renders itself", async () => {
    render(Schedule, { props: { schedule: schedule } });

    expect(screen.getByTestId("scheduleComponent")).toBeDefined();
  });
  it("Renders the header text", () => {
    render(Schedule, { props: { schedule: schedule } });

    expect(screen.getByText("Schedule")).toBeDefined();
  });
  it("Renders the display list", () => {
    render(Schedule, { props: { schedule: schedule } });

    expect(screen.getByTestId("dateList")).toBeDefined();
  });
  it("Renders an array of game dates", () => {
    render(Schedule, { props: { schedule: schedule } });
    expect(screen.getAllByTestId("gameDate").length).toBeGreaterThan(20);
  });
});

describe("Game Date Text", () => {
  it("renders the game dates with the correct formatting", async () => {
    let schedule = await fetchSchedule();

    const regex = /\d\d\/\d\d\/\d\d\d\d/i;
    render(Schedule, { props: { schedule: schedule } });

    const dates = screen.getAllByTestId("gameDate");

    dates.forEach((date) => {
      expect(date.textContent).toMatch(regex);
    });
  });
});

describe("Schedule Classes", () => {
  let schedule;

  beforeAll(async () => {
    schedule = await fetchSchedule();
  });

  it("Gives the correct class to the date list", () => {
    render(Schedule, { props: { schedule: schedule } });

    expect(screen.getByTestId("dateList").classList).toContain(["dateList"]);
  });

  it("Gives the correct class to all game dates", () => {
    render(Schedule, { props: { schedule: schedule } });
    const dates = screen.getAllByTestId("gameDate");

    dates.forEach((date) => {
      expect(date.classList).toContain(["gameDate"]);
    });
  });
});

describe("Schedule Node Names", () => {
  let schedule: LeagueSchedule;

  beforeAll(async () => {
    schedule = await fetchSchedule();
  });

  it("gives the header an H2 tag", () => {
    render(Schedule, { props: { schedule: schedule } });

    expect(screen.getByText("Schedule").nodeName).toBe("H2");
  });

  it("gives the game dates a button tag", () => {
    render(Schedule, { props: { schedule: schedule } });

    const dates = screen.getAllByTestId("gameDate");

    dates.forEach((date) => {
      expect(date.nodeName).toBe("A");
    });
  });

  it("gives itself a div tag", () => {
    render(Schedule, { props: { schedule: schedule } });

    expect(screen.getByTestId("scheduleComponent").nodeName).toBe("DIV");
  });
  it("gives the date list a div tag", () => {
    render(Schedule, { props: { schedule: schedule } });

    expect(screen.getByTestId("dateList").nodeName).toBe("DIV");
  });
});

describe("Game Date Links", () => {
  let schedule: LeagueSchedule;

  beforeAll(async () => {
    schedule = await fetchSchedule();
  });

  it("has the correct url", () => {
    render(Schedule, { props: { schedule: schedule } });
    const dates = screen.getAllByTestId("gameDate");

    expect(dates[0]).toHaveAttribute("href", "/gamedate/10052023");
    expect(dates[1]).toHaveAttribute("href", "/gamedate/10072023");
    expect(dates[2]).toHaveAttribute("href", "/gamedate/10082023");
    expect(dates[3]).toHaveAttribute("href", "/gamedate/10092023");
  });
});
