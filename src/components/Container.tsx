import { ValueContainer } from "./Value";
import { FieldContainer } from "./Field";

export const Container = () => {
  return (
    <div className="container">
      <h5>Content Container</h5>
      <FieldContainer />
      <ValueContainer />
    </div>
  );
};
