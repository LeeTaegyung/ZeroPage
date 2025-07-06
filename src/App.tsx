import { Global } from "@emotion/react";
import Dashboard from "@components/Dashboard/Dashboard";
import { globalStyles } from "@styles/globalStyles";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Dashboard />
    </>
  );
}

export default App;
