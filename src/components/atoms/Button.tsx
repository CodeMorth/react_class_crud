export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      className="rounded-md border-2 border-black p-2 px-8 w-fit"
      {...props}
    >
      {children}
    </button>
  );
};
