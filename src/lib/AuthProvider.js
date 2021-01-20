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

  componentDidMount = async () => {
    try {
      const user = await auth.me();
      this.setState({ isLogged: true, user: user.data, isLoading: false });
    } catch (error) {
      this.setState({ isLogged: false, user: null, isLoading: false });
    }
  };

  signup = async ({ firstName, lastName, email, password }) => {
    try {
      const signup = await auth.signup({
        firstName,
        lastName,
        email,
        password,
      });
      this.setState({ isLogged: true, user: signup.data.user });
    } catch (error) {
      this.setState({
        errorSignup:
          "* Sign up failed. Check If this email is already registered",
      });
    }
  };

  me = async () => {
    try {
      await auth.me();
    } catch (error) {
      console.log(error);
    }
  };

  login = async ({ email, password }) => {
    try {
      const login = await auth.login({ email, password });
      this.setState({ isLogged: true, user: login.data.user });
    } catch (error) {
      this.setState({
        errorLogin:
          "* Log in failed. Check If you are already registered or If your email and password are correct",
      });
    }
  };

  logout = async () => {
    try {
      await auth.logout();
      this.setState({ isLogged: false, user: null });
    } catch (error) {
      console.log(error);
    }
  };

  editprofile = async ({ first_name, last_name, password }) => {
    try {
      const editUser = await auth.editprofile({
        first_name,
        last_name,
        password,
      });
      this.setState({ isLogged: true, user: editUser });
    } catch (error) {
      console.log(error);
    }
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
