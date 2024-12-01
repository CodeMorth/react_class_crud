import { useEffect, useState } from "react";
import { getAllUsersS } from "../../service/user.service";
import { Input } from "../atoms/Input";
import { Modal } from "../atoms/Modal";
import { useManagmentModal } from "../../hooks/useManagmentModal";
import { userDataViewInterface } from "../../interface/User";

export const ViewAllUsers = () => {
  const [usersDataBackup, setusersDataBackup] = useState([]);
  const [userDataView, setuserDataView] = useState([]);
  const [imageData, setimageData] = useState("");

  const { closeModal, openModal, visible } = useManagmentModal();

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersS();

      setusersDataBackup(response.data);
      setuserDataView(response.data);

      console.log("Respuesta del servidor:");
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  const searchByInput = (data: string) => {
    const dataFiltered = usersDataBackup.filter((userData: userDataViewInterface) => {
      if (userData.name.toLowerCase().includes(data.toLowerCase())) {
        return true;
      }
      if (userData.email.toLowerCase().includes(data.toLowerCase())) {
        return true;
      }
    });

    setuserDataView(dataFiltered);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log("Datos de usuarios:", userDataView);

  return (
    <div className="ViewAllUsers">
      <Input onChange={(e) => searchByInput(e.target.value)} />
      <table className="table-auto border-2 border-black ">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {userDataView?.map((data: userDataViewInterface) => {
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td
                  onClick={() => {
                    setimageData(data.avatar);
                    openModal();
                  }}
                >
                  <img className="w-20 h-20" src={data.avatar} alt="avatar" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal visible={visible} closeModal={closeModal}>
        <div className="flex flex-col gap-4 justify-center items-center z-auto w-1/2 h-auto m-auto">
          <img src={imageData} alt="avatar" />
        </div>
      </Modal>
    </div>
  );
};
