
import axios from "axios";
import swal from "sweetalert";

const apiRoute = "http://localhost:3001/api/users";

export async function getUser(user) {

  try {
    var json = await axios.get(
      `${apiRoute}?email=${user.email}&password=${user.password}`
    );
    return json.data;
  } catch (error) {
    console.log("ERROR: ", error);
    swal({
      title: error,
      icon: "error",
      button: "Aceptar",
    });
  }
}
