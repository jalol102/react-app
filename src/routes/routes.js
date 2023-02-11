import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import App from "../App";

function ROUTES() {
   <Router> 
    <Routes> 
        <Route path="/" exact element={<App />} />
    </Routes>
   </Router>
} 

export default ROUTES;