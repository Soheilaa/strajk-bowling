import {
  render,
  screen,
} from "@testing-library/react";
import Booking from "./Booking";
import { expect, it } from "vitest";



describe("Booking", () => {
  beforeEach(() => {
    render(<Booking />);
  });

  it("fills out the reservation form with required details", () => {
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Number of awesome bowlers")).toBeInTheDocument();
    expect(screen.getByText("Number of lanes")).toBeInTheDocument();
  });

  it('should have a submission button labeled "strIIIIIike!", or similar', () => {
      expect(screen.getByText('strIIIIIike!')).toBeInTheDocument();
    });
  });