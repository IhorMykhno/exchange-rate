import PropTypes from "prop-types";
import React, { useState } from "react";
import { TextField, Button, Box, Stack, Typography } from "@mui/material";

export const RateSubscription = ({ onClick }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailError && email !== "") {
      onClick(email);
      setEmail("");
    } else {
      setEmailError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Stack width={1} spacing={1}>
        <Typography>Use your email for daily mailing:</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          height={"65px"}
        >
          <TextField
            size="small"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleChange}
            error={emailError}
            helperText={emailError ? "Invalid email address" : ""}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

RateSubscription.propTypes = {
  onClick: PropTypes.func,
};
