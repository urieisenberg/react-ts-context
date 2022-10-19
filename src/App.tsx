import { StoreProvider } from "./context";
import { Container } from "./components/Container";

function App() {
  return (
    <StoreProvider>
      <Container />
    </StoreProvider>
  );
}

export default App;
