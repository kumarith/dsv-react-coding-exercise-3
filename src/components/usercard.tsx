import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import { UserInterface } from "../interfaces/UserInterface";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";
import { Email, LocationOn, Person, Phone } from "@mui/icons-material";
import { UserRecordInterface } from "../interfaces/UserRecordInterface";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CakeIcon from "@mui/icons-material/Cake";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import grey from "@mui/material/colors/grey";

export interface UserCardProps {
  userItem: UserRecordInterface;
  actionFunction: (userId: number) => void;
  action: string;
}

const UserCard: React.FC<UserCardProps> = ({
  userItem,
  actionFunction,
  action,
}) => {
  const addressStyle = {
    textAlign: "left", // Align text to the left
    verticalAlign: "top", // Align content to the top
  };

  const cardStyles = {
    backgroundColor: '#f5f5f5', // Set the background color to light grey
    padding: '20px',
  };

  const cardStylesForDeleted = {
    backgroundColor: '#ffebee', // Set the background color to light grey
    padding: '20px',
  };

  

  return (
    <Card style={action == "DEL" ? cardStyles :cardStylesForDeleted  }>
      <CardContent     >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} container alignItems="center">
            <PersonIcon />

            <Typography variant="body1">
              <span>&nbsp;&nbsp;</span>
              <b>Username:</b> {userItem.username}
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <AccountCircleIcon />

            <Typography variant="body1">
              {" "}
              <span>&nbsp;&nbsp;</span> <b>User ID:</b> {userItem.uid}
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <CakeIcon />

            <Typography variant="body1">
              {" "}
              <span>&nbsp;&nbsp;</span> <b>Age:</b> {userItem.age}
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <BusinessIcon />

            <Typography variant="body1">
              <b>
                <span>&nbsp;&nbsp;</span> Company:
              </b>{" "}
              {userItem.companyname}
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <LocationOnIcon />

            <Typography style={addressStyle} variant="body1">
              {" "}
              <span>&nbsp;&nbsp;</span> Address: {userItem.address}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          size="small"
          color="primary"
          onClick={(e) => actionFunction(userItem.id)}
        >
          {action == "DEL" ? <DeleteIcon /> : <RestoreIcon />}
        </Button>
      </CardActions>
    </Card>

    /*  <Card>
      <CardActionArea>
        <CardContent>
        <PersonOutlineIcon fontSize="large" />
      
          <Typography gutterBottom variant="h5" component="div">
          <PersonOutlineIcon fontSize="medium" />
          ({userItem.uid}) {userItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userItem.address.street}, {userItem.address.suite},{" "}
            {userItem.address.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userItem.age} | {userItem.company.name}, {userItem.company.catchPhrase}, {userItem.company.bs}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={(e) => actionFunction(userItem.id)}
        >
      {action == "DEL" ? (
        <DeleteIcon />
      ) : (
        <RestoreIcon />
      )}
        
        </Button>
      </CardActions>
    </Card> */
  );
};

export default UserCard;
