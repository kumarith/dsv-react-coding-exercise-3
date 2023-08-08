
import { Card, CardContent, Typography ,CardActionArea, CardActions, Button} from '@mui/material';
import { UserInterface } from '../interfaces/UserInterface';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DeleteIcon from "@mui/icons-material/Delete";

export interface UserCardProps {
    userItem: UserInterface;
    deleteFunction: (userIdToDelete:String) => void;
  }

const UserCardRecord: React.FC<UserCardProps> = ({ userItem , deleteFunction } ) => {
  return (
    <Card>
     

      <CardActionArea>
        
        <CardContent>
        <PersonOutlineIcon />
          <Typography gutterBottom variant="h5" component="div">
          {userItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {userItem.address.street}, {userItem.address.suite}, {userItem.address.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {userItem.email} | {userItem.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={deleteFunction(userItem.id)}>
        <DeleteIcon />
        </Button>
      </CardActions>


    </Card>
  );
};

export default UserCardRecord;