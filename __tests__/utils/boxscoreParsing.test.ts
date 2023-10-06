import { getActivePlayers, sortPlayers } from "$lib/boxscoreParsing.ts";
import { mockBS } from "../../__mocks__/data/BSwasdet102522.data";

const team = mockBS.awayTeam;
const players = team.players;

describe("Get Active Players", () => {
  it("returns something", () => {
    expect(getActivePlayers(players)).toBeDefined();
  });
  it("returns a not empty array", () => {
    expect(getActivePlayers(players).length).toBeGreaterThan(0);
  });
  it("returns only active players", () => {
    const activePlayers = getActivePlayers(players);

    activePlayers.forEach((p) => {
      expect(p.status).not.toBe("INACTIVE");
      expect(p.status).toBe("ACTIVE");
    });
  });
  it("returns the correct number of players", () => {
    const activePlayers = getActivePlayers(players);

    const inactivePlayers = players.filter((p) => p.status != "ACTIVE");

    expect(activePlayers.length).toBe(players.length - inactivePlayers.length);
    expect(activePlayers.length).toBe(13);
  });
});
