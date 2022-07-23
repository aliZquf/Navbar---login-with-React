import  ReactDOM  from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import Login from "./components/login";
import { BrowserRouter,useNavigate } from "react-router-dom"; 


export default function RootFunction (){
    const navigation = useNavigate() // extract navigation prop here 
    
     return <Login navigation={navigation} /> //pass to your component.
    
      }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App/></BrowserRouter>);