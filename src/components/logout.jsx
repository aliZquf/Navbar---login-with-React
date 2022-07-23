import { useEffect } from "react";
const Logout = () => {
  useEffect(() =>
  localStorage.removeItem("token"))
  window.location="/"
    return ( null );
}
 
export default Logout;