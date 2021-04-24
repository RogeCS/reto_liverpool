import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

import "../assets/styles/containers/Login.scss";

const Login = () => {
  const [state, setState] = React.useState({ checked: false });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked && true) {
      console.log("Me siento activado");
    } else {
      console.log("Estoy desactivado");
    }
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
        <form className="login__container--form" noValidate autoComplete="off">
          <TextField id="outlined-basic1" label="Correo" variant="outlined" />
          <TextField id="outlined-basic" label="Celular" variant="outlined" />
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
export default Login;
