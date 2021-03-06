import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Login from "../pages/Login"
import Register from "../pages/Register"
import UserRouter from "./UserRouter"
import NotFound from "../pages/NotFound/NotFound"
import AvisoVerificacion from "../pages/AvisoVerificacion"
import RecuperarContraseña from "../pages/RecuperarContraseña"
import "../styles/footer.scss"
import Telefonos from "../pages/Telefonos"


export default function AppRouter() {
    return (
        <div className="main-container">
        <div className="content-wrap">
        
        <Router>
            <Header />
           
            
            <Switch>
                <PublicRoute exact path='/login' component={Login}/>
                <PublicRoute exact path='/register' component={Register}/>
                <PublicRoute exact path='/telefonos' component={Telefonos}/>
                <PublicRoute exact path='/verificacion' component={AvisoVerificacion}/>
                <PublicRoute exact path='/recuperar-contraseña' component={RecuperarContraseña}/>
                <PrivateRoute path='/usuario' component={UserRouter}/>   
                <Route exact path='/'><Redirect to='/usuario'/></Route>  
                <Route path='/404' component={NotFound}/>   
                <Route path='*'><Redirect to='/404'/></Route>    
            </Switch>

            </Router>
            </div>
            <Footer/>
            </div>

            
        
        
    )
}
