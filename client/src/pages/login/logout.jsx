import { useContext, useRef } from "react";
import "./login.css";
import { logoutCall } from "../../apiCalls";
import { CircularProgress } from "@material-ui/core";

export default function Logout() {
    
    const handleClick = (e) => {
        e.preventDefault();
        logoutCall(
         <{ onSubmit={handleClick}>
        )};
      <button className="logoutButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Cerrar Sesion"
              )}
            </button> 
}