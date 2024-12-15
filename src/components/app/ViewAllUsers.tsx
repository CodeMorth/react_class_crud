import { useEffect, useRef, useState } from "react";
import {
  deleteUserS,
  getAllUsersS,
  updateUserS,
} from "../../service/user.service";
import { Input } from "../atoms/Input";
import { Modal } from "../atoms/Modal";
import { useManagmentModal } from "../../hooks/useManagmentModal";
import { userDataViewInterface } from "../../interface/User";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { InputToFormData } from "../../utils/InputToFormData";
import { CiEdit } from "react-icons/ci";

export const ViewAllUsers = () => {
  const [usersDataBackup, setusersDataBackup] = useState([]);
  const [userDataView, setuserDataView] = useState([]);
  const [imageData, setimageData] = useState("");
  const [idUser, setidUser] = useState(0);
  const [imgInput, setimgInput] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("imgInput", imgInput);

  const navigate = useNavigate();

  const { closeModal, openModal, visible } = useManagmentModal();

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersS();

      setusersDataBackup(response.data);
      setuserDataView(response.data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  const searchByInput = (data: string) => {
    const dataFiltered = usersDataBackup.filter(
      (userData: userDataViewInterface) => {
        if (userData.name.toLowerCase().includes(data.toLowerCase())) {
          return true;
        }
        if (userData.email.toLowerCase().includes(data.toLowerCase())) {
          return true;
        }
      }
    );

    setuserDataView(dataFiltered);
  };

  const deleteUser = async (id: string | number) => {
    try {
      await deleteUserS(id);
      getAllUsers();
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  const updateUser = async (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault();

    let transformedData;

    //Avatar validation
    if (imgInput) {
      transformedData = new FormData(data.currentTarget);
    } else {
      transformedData = InputToFormData(data);
    }
    try {
      await updateUserS(idUser, transformedData);
      getAllUsers();
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

  const inputClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <form onSubmit={updateUser} className="ViewAllUsers">
      <Input onChange={(e) => searchByInput(e.target.value)} />
      <table className="table-auto border-2 border-black ">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Teléfono</th>
            <th>Fecha de Nacimiento</th>
            <th>Avatar</th>
            <th>Borrar</th>
            <th>Actualizar</th>
          </tr>
        </thead>
        <tbody>
          {userDataView?.map((data: userDataViewInterface) => {
            return (
              <tr
                // onClick={() => {
                //   navigate(`/viewUsers/${data.id}`);
                // }}
                key={data.id}
              >
                <td>
                  <input name="name" defaultValue={data.name} type="text" />
                </td>
                <td>
                  <input name="email" defaultValue={data.email} type="email" />
                </td>
                <td>{data.role}</td>
                <td>
                  <input
                    name="phoneNumber"
                    className="w-fit"
                    defaultValue={data.phoneNumber}
                    type="tel"
                  />
                </td>
                <td>
                  <input
                    name="birthday"
                    defaultValue={data.birthday.toString()}
                    type="date"
                  />
                </td>
                <td>
                  <CiEdit
                    onClick={inputClick}
                    className="ml-auto text-[3rem] cursor-pointer"
                  />
                  <input
                    ref={inputRef}
                    onChange={(event) => {
                      setimgInput(event.target.files[0]);
                    }}
                    type="file"
                    name="avatar"
                    hidden
                  />
                  <img
                    onClick={() => {
                      setimageData(data.avatar);
                      openModal();
                    }}
                    className="w-15 h-15"
                    src={imgInput ? URL.createObjectURL(imgInput) : data.avatar}
                    alt="avatar"
                  />
                </td>
                <td
                  className="cursor-pointer"
                  onClick={() => {
                    deleteUser(data.id);
                  }}
                >
                  <MdDeleteOutline className="w-full h-full p-6" />
                </td>
                <td className="cursor-pointer">
                  <button
                    onClick={() => {
                      setidUser(data.id);
                    }}
                  >
                    <GrUpdate className="w-8 h-8 m-auto" />
                  </button>
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
    </form>
  );
};
