import { BrowserRouter,Route,Routes,Link } from "react-router-dom";


const Home = () => {
    return (<div>
        <h3> Home Page  </h3>
        <h1 style={{fontSize:"24px",textAlign:"center"}} >
          HEllo from home!
        </h1>
    </div> 
    );
};
    

const About = () =>{
    return <h3> About Page  </h3>
};

const RouterComponent = () =>{

return(
    <BrowserRouter>
        <ul>
            <li>
                <Link to="/" > Home </Link>
            </li>
            <li>
                <Link to="/about" > About </Link>
            </li>
        </ul>

    <Routes>
        <Route  path="/" element={<Home/> } />
        <Route  path="/about" element={<About/>} />
    </Routes>

    </BrowserRouter>

);
    
}

export default RouterComponent;
