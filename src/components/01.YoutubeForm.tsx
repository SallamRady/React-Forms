import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function YoutubeForm() {
  return (
    <Stack spacing={2} component={"form"} width={320}>
      <Typography variant="subtitle1" fontWeight={750} color={'primary'}>Youtube Form</Typography>
      <TextField
        label="User Name"
        aria-label="user-name"
        variant="outlined"
        size="small"
      />
      <TextField
        label="User Email"
        aria-label="user-email"
        variant="outlined"
        size="small"
      />
      <TextField
        label="Channel Name"
        aria-label="channel-name"
        variant="outlined"
        size="small"
      />
      <Button type="submit" variant="contained" size="small" sx={{ my: 2 }}>
        Submit
      </Button>
    </Stack>
  );
}
