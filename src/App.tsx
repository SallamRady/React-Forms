import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Divider, Typography } from "@mui/material";
import YoutubeForm from "./components/01.YoutubeForm";

function App() {
  return (
    <Box className="App">
      <Typography variant="h2" fontWeight={700} textAlign={"center"} my={3}>
        React Forms
      </Typography>
      <Divider />
      <YoutubeForm />
    </Box>
  );
}

export default App;
