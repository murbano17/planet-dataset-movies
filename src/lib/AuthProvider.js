import React from "react";
import auth from "./AuthService"; // Importamos funciones para llamadas axios a la API
const { Consumer, Provider } = React.createContext();

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({ login, signup, user, logout, isLogged }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLogged={isLogged}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends React.Component {
  state = { isLogged: false, user: null, isLoading: true };

  componentDidMount() {
    auth
      .me()
      .then((user) =>
        this.setState({ isLogged: true, user: user.data, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLogged: false, user: null, isLoading: false })
      );
  }

  signup = (user) => {
    const { username, email, password } = user;

    auth
      .signup({ username, email, password })
      .then((user) => this.setState({ isLogged: true, user }))
      .catch(({ response }) =>
        this.setState({ message: response.data.statusMessage })
      );
  };

  me = async () => {
    await auth.me();
  };

  login = (user) => {
    const { email, password } = user;
    console.log(user);
    auth
      .login({ email, password })
      .then((user) => this.setState({ isLogged: true, user: user.data.user }))
      .catch((err) => console.log(err));
  };

  logout = () => {
    auth.logout();
    this.setState({ isLogged: false, user: null });
  };

  render() {
    // destructuramos isLoading, isLoggedin y user de this.state y login, logout y signup de this
    const { isLoading, isLogged, user } = this.state;
    const { login, logout, signup, loginGoogle, me } = this;

    return isLoading ? (
      // si está loading, devuelve un <div> y sino devuelve un componente <Provider> con un objeto con los valores: { isLoggedin, user, login, logout, signup}
      // el objeto pasado en la prop value estará disponible para todos los componentes <Consumer>
      <div>Loading</div>
    ) : (
      <Provider
        value={{ isLogged, user, login, logout, signup, loginGoogle, me }}
      >
        {this.props.children}
      </Provider>
    ); /*<Provider> "value={}" datos que estarán disponibles para todos los componentes <Consumer> */
  }
}

export { Consumer, withAuth }; //  <--	RECUERDA EXPORTAR  ! ! !

export default AuthProvider; //	<--	RECUERDA EXPORTAR  ! ! !
