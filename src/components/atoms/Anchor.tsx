import React from "react";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  bgColor?: string;
}

export const Anchor = ({ children, bgColor, ...props }: AnchorProps) => {
  return (
    <a className={`${bgColor}`} {...props}>
      {children}
    </a>
  );
};
