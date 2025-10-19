import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/me");
});

app.get("/me", async (req, res) => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });

    const response = {
      status: "success",
      user: {
        name: "Richmond Asemota",
        email: "a1.richmondasemota@gmail.com",
        stack: "Node.js/Express",
      },
      timestamp: new Date(). toISOString(),
      fact: data.fact,  
    };
    res.status(200).json(response);
  } catch (error) {
    console.log( "Error catching fact:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact",
      timestamp: new Date().toISOString(),
    });
  }
});
app.listen(1100, () => console.log("Server running on port 1100"));
