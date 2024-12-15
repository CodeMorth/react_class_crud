import { useUserManagmentServices } from "../../hooks/useUserManagmentServices";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import { TextAreas } from "../atoms/TextAreas";
import { InputLabel } from "../molecules/InputLabel";
import { SelectLabel } from "../molecules/SelectLabel";

export const AddUserPage = () => {
  const { addUserH } = useUserManagmentServices();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("formData",formData)
    await addUserH(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="AddUserPage">
      <h1>Agregar Usuario</h1>
      <div className="flex gap-20">
        <div className="flex flex-col gap-4">
          <InputLabel required name="name" labelText="Nombre" type="text" />
          <InputLabel required name="email" labelText="Email" type="email" />
          <InputLabel
            required
            name="password"
            labelText="Contraseña"
            type="password"
          />
          <InputLabel required name="avatar" labelText="Avatar" type="file" />
          <div className="flex flex-col gap-3 justify-between ">
            <Label htmlFor="preferences" id="preferences">
              Biografia
            </Label>
            <TextAreas
              // required
              name="bio"
              className="textArea-modal border-2 border-black p-2"
            />
          </div>
          <InputLabel
            required
            name="birthday"
            labelText="Fecha de Nacimiento"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-4">
          <InputLabel
            required
            name="phoneNumber"
            labelText="Teléfono"
            type="tel"
          />
          <SelectLabel required name="role" labelText="Rol">
            <option value="admin">Admin</option>
            <option value="user">Usuario</option>
            <option value="moderator">Moderador</option>
          </SelectLabel>
          <InputLabel
            required
            name="address.street"
            labelText="Calle"
            type="text"
          />
          <InputLabel
            required
            name="address.city"
            labelText="Ciudad"
            type="text"
          />
          <InputLabel
            required
            name="address.zipCode"
            labelText="Código Postal"
            type="text"
          />
          <div className="flex gap-3 justify-between ">
            <Label htmlFor="preferences" id="preferences">
              Acepta las condiciones de uso
            </Label>
            <Input
              required
              className="w-5"
              name="preferences"
              type="checkbox"
            />
          </div>
        </div>
      </div>
      <Button>Agregar</Button>
    </form>
  );
};
