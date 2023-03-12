import { TooltipComponentProps } from "../interfaces";

const Tooltip = ({ name, x, y }: TooltipComponentProps) => {
  return (
    <div
      className="absolute bg-white black rounded-md p-2 z-0"
      style={{
        left: x,
        top: y,
      }}
    >
      <h1>{name}</h1>
    </div>
  );
};

export default Tooltip;
