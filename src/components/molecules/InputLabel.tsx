import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

interface InputLabelProps {
  labelText: string;
  name: string;
  type: string;
}

export const InputLabel = ({ labelText, name, type }: InputLabelProps) => {
  return (
    <div className="flex flex-col gap-2 ">
      <Label id={name}>{labelText}</Label>
      <Input name={name} type={type} />
    </div>
  );
};
