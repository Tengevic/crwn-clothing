import "./categories.styles.scss"
import {Routes, Route} from "react-router-dom"
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () =>{
  return(<div>
      <h1>I am shop</h1>
  </div>)
}
const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="Shop" element={<Shop/>}/>
        <Route path="SignIn" element={<SignIn/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
