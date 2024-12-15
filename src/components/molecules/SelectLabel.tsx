import { Label } from "../atoms/Label";
import { Select } from "../atoms/Select";

interface SelectLabelProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  name: string;
}

export const SelectLabel = ({
  labelText,
  name,
  children,
  ...props
}: SelectLabelProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label id={name} htmlFor={name}>
        {labelText}
      </Label>
      <Select name={name} {...props}>
        {children}
      </Select>
    </div>
  );
};
