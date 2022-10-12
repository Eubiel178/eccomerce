import Contexts from "./contexts";

//hooks
import { useState } from "react";

//routes
import AppRoutes from "./routes/routes";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Contexts.Provider value={{ auth, setAuth }}>
      <AppRoutes />
    </Contexts.Provider>
  );
}

export default App;
