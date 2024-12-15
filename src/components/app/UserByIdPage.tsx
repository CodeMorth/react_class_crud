import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserByIdS } from "../../service/user.service";
import { Modal } from "../atoms/Modal";
import { useManagmentModal } from "../../hooks/useManagmentModal";
import { useNavigate } from "react-router-dom";
import { userDataViewInterface } from "../../interface/User";

export const UserByIdPage = () => {
  const { id } = useParams();

  const [userDataView, setuserDataView] = useState<userDataViewInterface>();
  const [imageData, setimageData] = useState("");

  const navigate = useNavigate();

  const { closeModal, openModal, visible } = useManagmentModal();

  const getAllUsers = async () => {
    try {
      const response = await getUserByIdS(id ?? 0);

      setuserDataView(response.data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="ViewAllUsers">
      <table className="table-auto border-2 border-black ">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Teléfono</th>
            <th>Calle</th>
            <th>Ciudad</th>
            <th>Código Postal</th>
            <th>Preferencias</th>
            <th>Activo</th>
            <th>Fecha de Nacimiento</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => {
              navigate(`/viewUsers/${userDataView?.id}`);
            }}
            key={userDataView?.id}
          >
            <td>{userDataView?.name}</td>
            <td>{userDataView?.email}</td>
            <td>{userDataView?.role}</td>
            <td>{userDataView?.phoneNumber}</td>
            <td>{userDataView?.address?.city}</td>
            <td>{userDataView?.address?.street}</td>
            <td>{userDataView?.address?.zipCode}</td>
            <td>{userDataView?.preferences}</td>
            <td>{userDataView?.isActive ? "Activo" : "Inactivo"}</td>
            <td>{userDataView?.birthday.toString()}</td>
            <td
              onClick={() => {
                setimageData(userDataView?.avatar || "");
                openModal();
              }}
            >
              <img
                className="w-20 h-20"
                src={userDataView?.avatar}
                alt="avatar"
              />
            </td>
          </tr>
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
