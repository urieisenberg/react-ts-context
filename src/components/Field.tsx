import { useStore, StoreValue } from "../context/useStore";

const TextInput: React.FC<StoreValue> = ({ value }) => {
  const [fieldValue, setStore] = useStore((store) => store[value]);
  return (
    <div className="field">
      <input
        value={fieldValue}
        onChange={(e) => setStore({ [value]: e.target.value })}
      />
    </div>
  );
};

export const FieldContainer = () => {
  return (
    <div className="container">
      <h5>Form Field Container</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
};
