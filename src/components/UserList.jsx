import { useEffect } from "react";

export const UserList = () => {
  useEffect(() => {
    fetch("/api/users");
  }, []);
};
