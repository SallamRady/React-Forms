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
  social: {
    facebook: string;
    linkedIn: string;
  };
  phoneNumbers: string[];
};

export default function YoutubeForm() {
  //const [name, setName] = useState("");
  const {
    register, //this method handle set/get value from input controll its just take and field name.
    handleSubmit, //used to submit form
    formState, //object contains alot of props that help to manage the state of form
  } = useForm<FormType>({
    defaultValues: {
      userName: "Sallam Rady",
      email: "sallamrady@gmail.com",
      channelName: "Batman",
      social: {
        facebook: "Sallam Rady Ramadan",
        linkedIn: "SallamRady",
      },
      phoneNumbers: ["", ""],
    },
    // defaultValues: async () => {
    //   let response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   let data = await response.json();
    //   return {
    //     userName: data.username,
    //     email: data.email,
    //     channelName: "",
    //   };
    // },
  });
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
          //   validate: (fieldValue) => {
          //     if (fieldValue == "admin@admin.com")
          //       return "Please enter diffrent email.";

          //     return true;
          //   },
          validate: {
            notAdmin: (fieldValue) => {
              if (fieldValue == "admin@admin.com")
                return "Please enter diffrent email.";

              return true;
            },
            notBlockedList: (fieldValue) => {
              if (fieldValue.endsWith("baddomain.com")) return "Bad Domain.";
              return true;
            },
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

      <TextField
        label="Facebook Handle"
        aria-label="facebook-handle"
        variant="outlined"
        size="small"
        {...register("social.facebook")}
      />

      <TextField
        label="LinkedIn Handle"
        aria-label="linkedin-handle"
        variant="outlined"
        size="small"
        {...register("social.linkedIn")}
      />

      <TextField
        label="Primary Phone Number"
        aria-label="primary-number"
        variant="outlined"
        size="small"
        {...register("phoneNumbers.0")}
      />

      <TextField
        label="Secondary Phone Number"
        aria-label="secondary-number"
        variant="outlined"
        size="small"
        {...register("phoneNumbers.1")}
      />

      <Button type="submit" variant="contained" size="small" sx={{ my: 2 }}>
        Submit
      </Button>
    </Stack>
  );
}
