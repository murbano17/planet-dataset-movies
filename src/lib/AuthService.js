import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
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
      const response = await axios.post(this.baseUrl + "/users", formData);

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
        formData
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
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  movies = async () => {
    const url = this.baseUrl + `/movies`;
    try {
      const response = await axios({
        method: "get",
        url: url,
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  movieid = async (id) => {
    const url = this.baseUrl + `/movies/${id}`;
    try {
      const response = await axios({
        method: "get",
        url: url,
        params: {
          movie_id: id,
        },
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  editprofile = async ({ first_name, last_name, password }) => {
    let formData = new FormData();
    formData.append("user[first_name]", first_name);
    formData.append("user[last_name]", last_name);
    formData.append("user[password]", password);

    console.log(formData, "formdata");
    const url = this.baseUrl + "/users/profile";
    try {
      const response = await axios.put(
        this.baseUrl + "/users/profile",
        formData,
        { headers: authHeader() }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
