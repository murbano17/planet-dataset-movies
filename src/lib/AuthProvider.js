import React from "react";
import auth from "./AuthService";
const { Consumer, Provider } = React.createContext();

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({
            login,
            signup,
            user,
            logout,
            editprofile,
            isLogged,
            errorSignup,
            errorLogin,
          }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                editprofile={editprofile}
                isLogged={isLogged}
                errorSignup={errorSignup}
                errorLogin={errorLogin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends React.Component {
  state = {
    isLogged: false,
    user: null,
    isLoading: true,
    errorSignup: null,
    errorLogin: null,
  };

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

  signup = ({ firstName, lastName, email, password }) => {
    auth
      .signup({ firstName, lastName, email, password })
      .then((user) => this.setState({ isLogged: true, user: user.data.user }))
      .catch((response) => {
        this.setState({
          errorSignup:
            "* Sign up failed. Check If this email is already registered",
        });
      });
  };

  me = async () => {
    await auth.me();
  };

  login = ({ email, password }) => {
    auth
      .login({ email, password })
      .then((user) => this.setState({ isLogged: true, user: user.data.user }))
      .catch((response) => {
        this.setState({
          errorLogin:
            "* Log in failed. Check If you are already registered or If your email and password are correct",
        });
      });
  };

  logout = () => {
    auth.logout();
    this.setState({ isLogged: false, user: null });
  };

  editprofile = ({ first_name, last_name, password }) => {
    auth
      .editprofile({ first_name, last_name, password })
      .then((user) => this.setState({ isLogged: true, user: user }))
      .catch((err) => console.log(err));
  };

  render() {
    const { isLoading, isLogged, user, errorSignup, errorLogin } = this.state;
    const { login, logout, signup, me, editprofile } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLogged,
          user,
          errorSignup,
          errorLogin,
          login,
          logout,
          signup,
          me,
          editprofile,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };

export default AuthProvider;
