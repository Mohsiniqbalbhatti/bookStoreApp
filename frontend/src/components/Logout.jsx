import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("User");
    setAuthUser(null);
    toast.success("Logout Successful");
  };

  return (
    <div>
      <button
        className="btn bg-danger text-light ms-2 mt-1"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
