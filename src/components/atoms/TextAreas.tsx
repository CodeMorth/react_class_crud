export const TextAreas: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea className="textArea-modal" {...props}></textarea>
  );
};
