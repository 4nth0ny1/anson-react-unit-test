export default function UserProfile({
  displayName,
  username,
  email,
  isEmailVerified,
}) {
  return (
    <div>
      <div>
        {/* <span data-testid="displayName">
          Display name:{" "}
          {displayName.length > 30
            ? displayName.slice(0, 28).concat("...")
            : displayName}
        </span> */}
        <span>Username: {username}</span>

        <span>Email: {email}</span>
        <div>
          Verified:{" "}
          <span>
            {isEmailVerified ? "Email Verified" : "Email not verified"}
          </span>
        </div>
      </div>
    </div>
  );
}
