import { useNavigate,Route } from "react-router";

const Protect = ({element:Element},...restProps) => {
    const Navigation = useNavigate()
    const isAuth = localStorage.getItem('tokem')
    return (
        <Route {...restProps} render={(props) =>
        isAuth?<Element {...props}/> : Navigation("/login")}/>

      );
}
 
export default Protect;