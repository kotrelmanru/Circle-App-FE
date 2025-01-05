import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import useLoginValidate from "../../../../lib/validation/useLoginValidate";
import { Controller } from "react-hook-form";
import { useAppSelector } from "../../../../store/store";
import { useLoginFunction } from "../hooks/useLogin";
import { useEffect, useState } from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
const ResetPassword = () => {
  const authState = useAppSelector((state) => state.auth);

  const { control, reset, handleSubmit } = useLoginValidate();
  const { onErrorSubmit, onSubmit } = useLoginFunction({ reset });
  const [isShow, setIsShow] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShow((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(authState);
  }, [authState]);
  return (
    <Box>
      <Box
        sx={{
          Width: "100vh",
          display: "flex",
          justifyContent: "center",
          paddingTop: "150px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography variant="h3" fontWeight={700} color={"#04A51E"}>
              Circle
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Reset password
            </Typography>
          </Box>
          <form>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ height: "30px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginY: "20px",
                    gap: "10px",
                  }}
                >
                  <Controller
                    control={control}
                    name="password"
                    render={({ field, fieldState }) => (
                      <>
                        <TextField
                          label="New Password *"
                          color="success"
                          type={isShow ? "text" : "passwords"}
                          sx={{ borderColor: "white" }}
                          {...field}
                          helperText={fieldState.error?.message}
                          error={Boolean(fieldState.error)}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                              >
                                {isShow ? (
                                  <VisibilityRoundedIcon />
                                ) : (
                                  <VisibilityOffRoundedIcon />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      </>
                    )}
                  />
                  <Controller
                    control={control}
                    name="password"
                    render={({ field, fieldState }) => (
                      <>
                        <TextField
                          label="Change New Password *"
                          color="success"
                          type={isShow ? "text" : "password"}
                          sx={{ borderColor: "white" }}
                          {...field}
                          helperText={fieldState.error?.message}
                          error={Boolean(fieldState.error)}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                              >
                                {isShow ? (
                                  <VisibilityRoundedIcon />
                                ) : (
                                  <VisibilityOffRoundedIcon />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      </>
                    )}
                  />
        
                <Button
                  sx={{
                    width: "400px",
                    mt: "20px",
                    mb: "10px",
                    bgcolor: "#04A51E",
                    borderRadius: "10px",
                  }}
                  onClick={handleSubmit(onSubmit, onErrorSubmit)}
                >
                  <Typography color={"white"}>Create New Password</Typography>
                </Button>
            
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
