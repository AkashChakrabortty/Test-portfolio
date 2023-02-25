import { TextField } from "@mui/material";
import styled from "styled-components";
import { theme } from "../Theme/customTheme";

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: theme.primaryColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.secondayColor,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.primaryColor,
      },
      '&:hover fieldset': {
        borderColor: theme.primaryColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.secondayColor,
      },
    },
  });