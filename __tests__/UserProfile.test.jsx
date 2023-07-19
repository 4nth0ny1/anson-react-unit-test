import UserProfile from "../src/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("User Profile - Rendering", () => {
  it("should have text email VERIFIED when isEmailVerified is TRUE", () => {
    render(
      <UserProfile
        displayName={"Anthony the Dev"}
        username="Adev"
        email="adev@test.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText(/Email Verified/i)).toBeInTheDocument();
  });

  it("should have text email NOT verified when isEmailVerified is FALSE", () => {
    render(
      <UserProfile
        displayName={"Anthony the Dev"}
        username="Adev"
        email="adev@test.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText(/Email Verified/i)).not.toBeInTheDocument();
  });

  it("should have text 'Email not verified' when isEmailVerified is FALSE", () => {
    render(
      <UserProfile
        displayName={"Anthony the Dev"}
        username="Adev"
        email="adev@test.com"
        isEmailVerified={false}
      />
    );
    expect(screen.getByText(/Email not verified/i)).toBeInTheDocument();
  });

  it("should only allow a display name with a max of 28 characters and will show three dots if longer than 30", () => {
    render(
      <UserProfile
        displayName={"Anthonysadfsadfsadffasfsadsadfsadfsadf"}
        username="Adev"
        email="adev@test.com"
        isEmailVerified={false}
      />
    );
    const displayName = screen.getByTestId("displayName").textContent;

    const lastValues = displayName.split("").slice(-3).join("");
    expect(lastValues).toBe("...");
  });
});
