import {
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

let renderCounter = 0;

type FormType = {
  userName: string;
  email: string;
  channelName: string;
};

export default function YoutubeForm() {
  //const [name, setName] = useState("");
  const {
    register, //this method handle set/get value from input controll its just take and field name.
    handleSubmit, //used to submit form
    formState, //object contains alot of props that help to manage the state of form
  } = useForm<FormType>();
  let { errors } = formState;

  const handleSubmitForm = (data: FormType) => {
    console.log("Submitted Data::", data);
  };

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
    <Stack
      spacing={2}
      component={"form"}
      width={320}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Typography variant="subtitle1" fontWeight={750} color={"primary"}>
        Youtube Form (render count : {renderCounter / 2})
      </Typography>
      <TextField
        label="User Name"
        aria-label="user-name"
        variant="outlined"
        size="small"
        id="username"
        {...register("userName", {
          required: "user name is required.",
          minLength: {
            value: 3,
            message: "user name must have 3 chars at last",
          },
        })} //component dont render on any change useForm is a great for performance
        // onChange={(e) => setName(e.target.value)} component will render on any change
        error={Boolean(errors.userName?.message)}
      />
      <FormHelperText sx={{ color: "red" }}>
        {errors.userName?.message}
      </FormHelperText>

      <TextField
        label="User Email"
        aria-label="user-email"
        variant="outlined"
        size="small"
        {...register("email", {
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid input email",
          },
        })}
        error={Boolean(errors.email?.message)}
      />
      <FormHelperText sx={{ color: "red" }}>
        {errors.email?.message}
      </FormHelperText>
      <TextField
        label="Channel Name"
        aria-label="channel-name"
        variant="outlined"
        size="small"
        {...register("channelName", {
          required: "channel name is required",
        })}
        error={Boolean(errors.channelName?.message)}
      />
      <FormHelperText sx={{ color: "red" }}>
        {errors.channelName?.message}
      </FormHelperText>
      <Button type="submit" variant="contained" size="small" sx={{ my: 2 }}>
        Submit
      </Button>
    </Stack>
  );
}
