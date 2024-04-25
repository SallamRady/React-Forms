import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

export default function YoutubeForm() {
  const {
    register, //this method handle set/get value from input controll its just take and field name.
  } = useForm();

  //note and learn what register can do
  let { name, ref, onBlur, onChange } = register("username");
  /**
   <TextField
        label="User Name"
        aria-label="user-name"
        variant="outlined"
        size="small"
        id="username"
        name={name}
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
      />
      this equal
      <TextField
        label="User Name"
        aria-label="user-name"
        variant="outlined"
        size="small"
        id="username"
        {...register("userName")}
      />

   */
  return (
    <Stack spacing={2} component={"form"} width={320}>
      <Typography variant="subtitle1" fontWeight={750} color={"primary"}>
        Youtube Form
      </Typography>
      <TextField
        label="User Name"
        aria-label="user-name"
        variant="outlined"
        size="small"
        id="username"
        {...register("userName")}
      />
      <TextField
        label="User Email"
        aria-label="user-email"
        variant="outlined"
        size="small"
        {...register("email")}
      />
      <TextField
        label="Channel Name"
        aria-label="channel-name"
        variant="outlined"
        size="small"
        {...register("channelName")}
      />
      <Button type="submit" variant="contained" size="small" sx={{ my: 2 }}>
        Submit
      </Button>
    </Stack>
  );
}
