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
});
