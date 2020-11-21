import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const UserForm = ({
  title,
  icon,
  color,
  user,
  onChange,
  onSubmit,
  error,
  hide,
}) => {
  const isLoading = useSelector((state) => state.user.isLoading);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Box textAlign="center">
          <Avatar component={Box} margin="auto" bgcolor={color}>
            {icon}
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
        </Box>
        <form noValidate onSubmit={onSubmit}>
          {!hide && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                error={!!error?.displayName}
                required
                fullWidth
                label={error?.displayName?.message || "Display name"}
                name="displayName"
                value={user.displayName}
                onChange={onChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                error={!!error?.phoneNumber}
                required
                fullWidth
                label={error?.phoneNumber?.message || "Phone Number"}
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={onChange}
                autoFocus
              />
            </>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            error={!!error?.username}
            required
            fullWidth
            label={error?.username?.message || "Username"}
            name="username"
            value={user.username}
            onChange={onChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            error={!!error?.password}
            required
            fullWidth
            name="password"
            label={error?.password?.message || "Password"}
            type="password"
            value={user.password}
            onChange={onChange}
            autoComplete="current-password"
          />
          <Box pt="10px">
            <Button
              disabled={isLoading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              {title}
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  );
};

export default UserForm;
