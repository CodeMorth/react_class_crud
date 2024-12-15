import { useState } from "react";
import { addUserS, getAllUsersS, getUserByIdS } from "../service/user.service";

export function useUserManagmentServices() {
  const [data, setdata] = useState([]);

  const addUserH = async (data: FormData) => {
    try {
      await addUserS(data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  const ViewAllUsersH = async () => {
    try {
      const response = await getAllUsersS();
      setdata(response.data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  const getUserByIdH = async (id: string | number) => {
    try {
      const response = await getUserByIdS(id);

      console.log("getUserByIdH response", response);
      setdata(response.data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  return { addUserH, ViewAllUsersH, getUserByIdH, data };
}
