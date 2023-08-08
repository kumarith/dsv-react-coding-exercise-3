import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { UserInterface } from "../interfaces/UserInterface";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useReducer, useState, useEffect } from "react";

const [newUser, setNewUser] = useState<UserInterface>();

export interface NewUserFormProps {
  submitFunction: (userRecord: UserInterface) => void;
}

const UserCard: React.FC<NewUserFormProps> = ({ submitFunction }) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        User Details Form
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="UserName"
              fullWidth
              value={newUser?.username}
              /* onChange={setNewUser( { newUser.user}  )} */
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Name"
              fullWidth
              value={newUser?.name}
              /* onChange={(e) => setLastName(e.target.value)} */
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              type="email"
              value={newUser?.email}
              /* onChange={(e) => setEmail(e.target.value)} */
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserCard;
