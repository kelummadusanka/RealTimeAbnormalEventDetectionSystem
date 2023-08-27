import React from "react"; // Import React
import { Box } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Route and Router
import RecordingPage from "./Components/Pages/RecordingPage";
import StaticsPage from "./Components/Pages/StaticsPage";
import EncryptionPage from "./Components/Pages/EncryptionPage";

const App: React.FC = () => {
  return (
    <Box w={"100%"} px={"15%"} h="100vh">
      <Router>
        <Routes>
          <Route index element={<StaticsPage />} />
          <Route path="/recordings" element={<RecordingPage />} />
          <Route path="/statics" element={<StaticsPage />} />
          <Route path="/encryption" element={<EncryptionPage />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
