import { useState } from "react";
import { addUserS, getAllUsersS } from "../service/user.service";

export function useUserManagmentServices() {
  const [data, setdata] = useState([]);

  const addUserH = async (data) => {
    try {
      await addUserS(data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  const ViewAllUsersH = async () => {
    try {
      const response = await getAllUsersS();

      console.log("response",response)
      setdata(response.data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  return { addUserH, ViewAllUsersH, data };
}
