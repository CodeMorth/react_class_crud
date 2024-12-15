import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

interface InputLabelProps extends React.HTMLProps<HTMLInputElement> {
  labelText: string;
  name: string;
}

export const InputLabel = ({ labelText, name, ...props }: InputLabelProps) => {
  return (
    <div className="flex flex-col gap-2 ">
      <Label htmlFor={name} id={name}>{labelText}</Label>
      <Input name={name} {...props} />
    </div>
  );
};
