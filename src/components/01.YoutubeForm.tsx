import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

let renderCounter = 0;

export default function YoutubeForm() {
 //   const [name, setName] = useState("");
  const {
    register, //this method handle set/get value from input controll its just take and field name.
  } = useForm();

  //note and learn what register can do
  //let { name, ref, onBlur, onChange } = register("username");
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

  renderCounter++;

  return (
    <Stack spacing={2} component={"form"} width={320}>
      <Typography variant="subtitle1" fontWeight={750} color={"primary"}>
        Youtube Form (render count : {renderCounter / 2})
      </Typography>
      <TextField
        label="User Name"
        aria-label="user-name"
        variant="outlined"
        size="small"
        id="username"
        {...register("userName")} //component dont render on any change useForm is a great for performance
        // onChange={(e) => setName(e.target.value)} component will render on any change
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
