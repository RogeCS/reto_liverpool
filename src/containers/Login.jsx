import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions/index";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { database } from "../firebase"

import "../assets/styles/containers/Login.scss";

const Login = (props) => {
  const [state, setState] = React.useState({ checked: false });
  const [data, setValues] = React.useState({
    email: "",
    phoneNumber: "",
  });

  const handleInput = (event) => {
    setValues({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = { ...data, ...state };
    database.collection("users").add({
      mail: form.email,
      phone: form.phoneNumber,
      hasCard: form.checked,
    })
    .then(() => {
      alert('Un asesor pronto se pondrá en contacto contigo 😁')
    })
    props.loginRequest(form);
    props.history.push("/promos");
  };

  return (
    <section className="login">
      <section className="login__banner">
        <h1 className="login__banner--title"></h1>
      </section>
      <section className="login__container">
        <p className="login__container--division">
          <span>Ingresa tus datos</span>
        </p>
        <form
          className="login__container--form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic1"
            label="Correo"
            variant="outlined"
            name="email"
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Celular"
            variant="outlined"
            name="phoneNumber"
            onChange={handleInput}
          />
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  id="th"
                  checked={state.checked}
                  onChange={handleChange}
                  name="checked"
                />
              }
              label="¿Eres tarjetahabiente?"
            />
          </FormGroup>
          <button className="button">Entrar</button>
        </form>
        <section className="login__container--terms">
          <p>
            <Link to="/" className="a">
              Política de privacidad
            </Link>{" "}
            y{" "}
            <Link to="/" className="a">
              Términos y condiciones
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
