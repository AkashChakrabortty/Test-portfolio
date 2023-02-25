import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  TextField,
} from "@mui/material";
import React from "react";
import HeaderStyle from "./HeaderStyle";
import { CssTextField } from "./InputAnimation/InputAnimation";
import { theme } from "./Theme/customTheme";

const ContactMe = () => {
  return (
    <div>
      <HeaderStyle headerSpan={"Contact Me"} />
      <div>
        <form>
          <Box
            sx={{
              maxWidth: "75%",
              mx: "auto",
            }}
          >
            <Box sx={{ width: "100%"  }}>
              <FormControl sx={{ width: "47%" , marginRight:'6%'}}>
              <CssTextField
                    sx={{ color: theme.primaryColor }}
                    label="Your name:"
                    id="custom-css-outlined-input"
                  ></CssTextField>
              </FormControl>
              <FormControl sx={{ width: "47%" }}>
              <CssTextField
                    sx={{ color: theme.primaryColor }}
                    label="Your email:"
                    id="custom-css-outlined-input"
                  ></CssTextField>
              </FormControl>
            </Box>
            <Box fullWidth sx={{my:'10px'}}>
              <FormControl fullWidth>
                  <CssTextField
                    sx={{ color: theme.primaryColor }}
                    label="Your valuable message for me:"
                    id="custom-css-outlined-input"
                  ></CssTextField>
                   <Button type="submit">Submit</Button>
              </FormControl>
            </Box>

           
          </Box>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
