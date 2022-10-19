import { useStore, StoreValue } from "../context/useStore";

const DisplayValue: React.FC<StoreValue> = ({ value }) => {
  const [fieldValue] = useStore((store) => store[value]);
  return (
    <div className="value">
      {value}: {fieldValue || "empty"}
    </div>
  );
};

export const ValueContainer = () => {
  return (
    <div className="container">
      <h5>Display Value From Store Container</h5>
      <DisplayValue value="first" />
      <DisplayValue value="last" />
    </div>
  );
};
