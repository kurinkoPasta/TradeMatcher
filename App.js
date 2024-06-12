import Navigation from "./src/utils/Navigation";
import { ContextProvider } from "./src/utils/context";

export default function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}
