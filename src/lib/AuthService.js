import axios from "axios";
import authHeader from "./auth-header";

class Auth {
  baseUrl =
    "https://front-assignment.planetdataset.com/api/v1/candidates/54d280a0-9394-40fb-8551-e0233c014b35";

  signup = async ({ firstName, lastName, email, password }) => {
    let formData = new FormData();
    formData.append("user[first_name]", firstName);
    formData.append("user[last_name]", lastName);
    formData.append("user[email]", email);
    formData.append("user[password]", password);
    try {
      const response = await axios.post(this.baseUrl + "/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  login = async ({ email, password }) => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await axios.post(
        this.baseUrl + "/users/login",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  me = async () => {
    try {
      const response = await axios.get(this.baseUrl + "/users/profile", {
        headers: authHeader(),
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  movies = async () => {
    try {
      const response = await axios.get(this.baseUrl + "/movies", {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
