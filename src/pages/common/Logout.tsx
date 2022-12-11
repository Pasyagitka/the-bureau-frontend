import { logoutUser } from "@/redux/actions/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutUser()).then(() => {
      navigate("/", { replace: true });
    });
  }, []);

  return "logout";
}

export default Logout;
