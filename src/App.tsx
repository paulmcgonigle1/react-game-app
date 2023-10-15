import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];

  return (
    <div>
      <div className="">
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
      </div>
    </div>
  );
}
export default App;
