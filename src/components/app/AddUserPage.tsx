import { useUserManagmentServices } from "../../hooks/useUserManagmentServices";
import { Button } from "../atoms/Button";
import { InputLabel } from "../molecules/InputLabel";

export const AddUserPage = () => {
  const { addUserH } = useUserManagmentServices();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await addUserH(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="AddUserPage">
      <h1>Agregar Usuario</h1>
      <div className="flex flex-col gap-4">
        <InputLabel name="name" labelText="Nombre" type="text" />
        <InputLabel name="email" labelText="Email" type="email" />
        <InputLabel name="avatar" labelText="Avatar" type="file" />
      </div>
      <Button>Agregar</Button>
    </form>
  );
};
