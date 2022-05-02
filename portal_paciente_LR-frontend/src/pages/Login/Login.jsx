import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import Footer from "../../components/Footer";
import '../../styles/Transitions.scss'
import useAuth from '../../hooks/useAuth';
import chronic from "../../services/chronic";
import parametricServices from "../../services/parametric";
import anthropometricdata from "../../services/anthropometric";
import FamilyHistories from "../../services/familyHistory";
import hospitalization from "../../services/hospitalization";
import inmunization from "../../services/inmunizations";
import medications from "../../services/medications";
import personalHistories from "../../services/personalHystories";
import toothrecords from "../../services/toothRecords";
import activeProblems from "../../services/activeProblems";
import solvedProblems from "../../services/solvedProblem";
import vitalSigns from "../../services/vitalSigns";
import institutionsServices from "../../services/institutionsServices";
import PatientbasicData from "../../services/patientBasicData";
import PatientCompleteData from "../../services/patientCompleteData";
import sumarServices from "../../services/sumarServices";
import createMessages  from "../../services/createMessages";
import getAllMessages from "../../services/getAllMessages";
import createpersonanduser from "../../services/createPersonAndUser";
import getByPerson from "../../services/getMessagesByPerson";
import setMessageRead from "../../services/setMessage";
import updateMessages from "../../services/updateMessage";


// import { loginServiceFetch } from "../../services/loginService";


function Login() {

    updateMessages(1,1,false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const previousObjetURL = location.state?.from
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        if (auth.isLogged()) history.push(previousObjetURL || "/usuario")
    }, [auth, history, previousObjetURL])

    const onSubmit = () => {
        auth.loginFetch()
        auth.login(email, password)
    }

    // const [emailF, setEmailF] = useState("");
    // const [passwordF, setPasswordF] = useState("");

    // const onSubmitF = () => {
    //     console.log(emailF, passwordF)
    //     loginServiceFetch()
    // }

    // Background
    const  [ number, setNumber ] = useState(2)

    useEffect(() => { 
        setNumber(Math.floor(Math.random() * (6 - 0)) + 1);
    }, [])
    

    return (
        <div className={`bg-container bg${number} h-100 w-100 d-flex align-items-center justify-content-center position-relative`}>
            <div className="circle"></div>
            <Container className='h-100 d-flex align-items-center justify-content-center z-index-1'>
                {/* <h1>Iniciar Sesión</h1> */}
                <Row className='w-100 h-75 d-flex align-items-sm-center justify-content-center'>
                    <Col xs={12} sm={5} lg={4} className='h-100 d-none d-sm-flex'>
                        <div className='w-100 h-100 pic'></div>
                    </Col>
                    <Col xs={12} sm={7} lg={5} className="d-flex flex-column justify-content-around h-100">
                        <h2>Iniciar sesión</h2>
                        <Form className="form-group in" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: "El campo es requerido."
                                        },
                                        pattern: {
                                            value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                                            message: "El formato ingresado no es válido"
                                        }
                                    })}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                {errors.email && <ErrorMessage><p>{errors.email.message}</p></ErrorMessage>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: "El campo es requerido."
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "La contraseña debe tener al menos 3 caracteres",
                                        }
                                    })}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                {errors.password && <ErrorMessage><p>{errors.password.message}</p></ErrorMessage>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><input type="radio" /> Recordar usuario y contraseña</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    <Link to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link>
                                </Form.Label>
                            </Form.Group>
                            <div className="d-flex flex-column align-items-center align-items-sm-end mt-3">
                                <Button variant="danger" type="submit">
                                    Iniciar Sesión
                                </Button>
                                <button type="button" className="btn btn-ligth mt-3" >
                                    <Link to="/register" className="text-danger">Crear cuenta</Link>
                                </button>
                            </div>
                        </Form>

                        {/* Login with fetch */}

                        {/* <Form className="form-group in d-none" onSubmit={handleSubmit(onSubmitF)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                className="form-control"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: "El campo es requerido."
                                    },
                                    pattern: {
                                        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                                        message: "El formato ingresado no es válido"
                                    }
                                })}
                                onChange={(e) => { setEmailF(e.target.value) }}
                            />
                            {errors.email && <ErrorMessage><p>{errors.email.message}</p></ErrorMessage>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                className="form-control"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: "El campo es requerido."
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "La contraseña debe tener al menos 3 caracteres",
                                    }
                                })}
                                onChange={(e) => { setPasswordF(e.target.value) }}
                            />
                            {errors.password && <ErrorMessage><p>{errors.password.message}</p></ErrorMessage>}
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="danger" type="submit">
                                Iniciar Sesión F
                            </Button>
                        </div>
                    </Form> */}

                    </Col>
                </Row>
            </Container>
            
        </div>

    )
}

export default Login;
