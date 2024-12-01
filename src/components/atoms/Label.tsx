export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children,...props }) => {
  return (
    <label className="text-xl font-semibold" {...props}>{children}</label>
  );
};
