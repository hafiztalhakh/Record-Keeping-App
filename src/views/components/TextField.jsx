import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  TextField as MuiTextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function TextField({
  type,
  max,
  enableDot,
  value,
  onChange,
  onKeyPress,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    if (max ? e.target.value.length <= max : true)
      onChange && onChange(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (onKeyPress && e.charCode === 13) onKeyPress();
  };

  // Prevent characters that are not numbers ("e", ".", "+" & "-") ✨
  const validateIsNumber = (e) => {
    if (type === "number") {
      let checkIfNum;
      if (e.key !== undefined) {
        // Check if it's a "e", ".", "+" or "-"
        const filter = enableDot
          ? e.key === "e" || e.key === "+" || e.key === "-"
          : e.key === "e" || e.key === "." || e.key === "+" || e.key === "-";
        checkIfNum = filter;
      } else if (e.keyCode !== undefined) {
        // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
        checkIfNum =
          e.keyCode === 69 ||
          e.keyCode === 190 ||
          e.keyCode === 187 ||
          e.keyCode === 189;
      }
      return checkIfNum && e.preventDefault();
    }
  };

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <MuiTextField
        sx={{
          mb: 1,
          input: {
            padding: "8px 0 10px",
          },
        }}
        {...rest}
        fullWidth
        variant="standard"
        type={showPassword ? "text" : type ? type : "text"}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onKeyDown={validateIsNumber}
        {...rest}
        InputProps={{
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    </Box>
  );
}
