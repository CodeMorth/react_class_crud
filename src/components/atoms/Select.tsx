export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return <select className="rounded-md border-2 border-black p-2 w-full" {...props}>{props.children}</select>;
};
