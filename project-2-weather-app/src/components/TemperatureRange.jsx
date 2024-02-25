import React from "react";

const TemperatureRange = ({
  valueLow,
  valueHigh,
  className,
}) => {
  return (
    <div className={className}>
      {valueLow} ~ {valueHigh}°
    </div>
  );
}

export default TemperatureRange;
