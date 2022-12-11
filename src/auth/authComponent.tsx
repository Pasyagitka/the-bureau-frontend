import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthProps {
  role: string;
  loggedIn: boolean;
  children: JSX.Element[];
  accessRole: string;
}

function AuthComponent(props: AuthProps) {
  const navigate = useNavigate();
  const { role, loggedIn, accessRole, children } = props;

  useEffect(() => {
    console.log(props);
    if (!(role === accessRole && loggedIn)) {
      console.log(role, accessRole, loggedIn);
      alert("You don't have sufficient privileges to watch this content");
      navigate("/");
    }
  }, [role, loggedIn]);

  // if (loggedIn && role) return children;
  return children;
}

export default AuthComponent;
