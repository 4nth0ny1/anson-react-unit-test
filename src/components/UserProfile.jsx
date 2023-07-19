export default function UserProfile({
  displayName,
  username,
  email,
  isEmailVerified,
}) {
  return (
    <div>
      <div>
        <span>Display name: {displayName}</span>
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
