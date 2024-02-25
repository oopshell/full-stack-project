import React from "react";

const Name = ({
  value,
  className,
}) => {
  return (
    <div className={className}>
      {value}
    </div>
  );
}

export default Name;
