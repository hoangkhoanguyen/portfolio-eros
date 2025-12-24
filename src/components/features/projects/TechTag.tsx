import React, { PropsWithChildren } from "react";

const TechTag = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-xs bg-primary-light text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
      {children}
    </span>
  );
};

export default TechTag;
