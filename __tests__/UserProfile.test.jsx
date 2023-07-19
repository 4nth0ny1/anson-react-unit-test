import UserProfile from "../src/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("User Profile - Rendering", () => {
  it("should have text email verified when isEmailVerified is true", () => {
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
});
