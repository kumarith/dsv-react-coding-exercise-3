import "./styles.css";
import { useReducer, useState, useEffect } from "react";
import { Button, TextField, ThemeProvider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import userData from "./data";
import { UserInterface } from "./interfaces/UserInterface";
import UserCard from "./components/usercard";
import { UserCardProps } from "./components/usercard";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { UserRecordInterface } from "./interfaces/UserRecordInterface";
import { INCREMENT, DECREMENT, RESET } from "./redux/counterActionTypes";
import counterReducer from "./redux/counterReducer";
import FastForwardIcon from "@mui/icons-material/FastForward";
import { createTheme, makeStyles, responsiveFontSizes } from "@mui/material/styles";

/** Instructions
   0. Fork this codesandbox and sync it with your github 
   1. import users data from data.ts
   1.1. Utilize TypeScript in your implementation
   2. On load:
   2.1. Filter the users data array to only include users where age >= 18
   2.2. Map the users data array to only include username, address, age and companyName
   2.3. Add a new ID to each user object, which should consist of a randomized sequence (6 characters) of the following: {ABCDEF123456}
   2.4. Sort the array (asc) by age, then by companyName
   2.5. Dispatch the data to the local users state
   3. Display the users' properties using a loop in the tsx, preferably in a styled "Card" form
   3.1. Add a "remove" button to each card - this should remove the user from the state
   3.2. Store the removed users in a new state instance
   3.3. Using the second input, add a method to search for a user's username with the onChange event
   3.4. The removed users should also be found if the input is being used to search for a username
   3.5. In the casen during a se where a removed user is showarch, there should be a "restore" button, which would insert the removed user back into the users array
   4. Extend the reducer:
   4.1. Count must always bresete >= 0, in all cases
   4.2. Add a case to increment count with a random number, between 1 and 10
   4.3. Add a case to increment to the nearest odd number, if already odd - increment to next odd
   4.4. Add a case to decrease the count by the input of the first textfield
   4.5. Add a case to  the count
   4.6. Add buttons to said cases
   4.7. Add styling using MUI
   5. Provide the link to your forked repo with your answers
   */

/*function reducer(state = {count : 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 }
    default:
      throw new Error();
  }
}*/

//const dispatch = useDispatch();

/* For new ID of users */
const characters = "ABCDEF123456";

const generateRandomId = (length: number) => {
  let randomId = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

export default function App() {
  const [users, setUsers] = useState<UserRecordInterface[]>([]);
  const [deletedUserIds, setDeletedUserIds] = useState<number[]>([]);
  const [deletedUser, setDeletedUsers] = useState<number[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  /* 
   Set localusers from data.ts/userData with filter and also and assing new id to each object
   Since this is onetime,
  */

  const [localUsers, setLocalUsers] = useState<UserRecordInterface[]>(() => {
    /* Using map() to transform the source array to the target array - also generating new ID , appeding address fields in same loop. */
    const mappedUserData = userData.map((i) => {
      return {
        uid: generateRandomId(6),
        id: i.id,
        companyname: i.company.name,
        username: i.username,
        address:
          i.address.street +
          ", " +
          i.address.suite +
          "," +
          i.address.city +
          "," +
          i.address.zipcode,
        age: i.age,
      };
    });

    mappedUserData.sort((a, b) => {
      if (a.companyname !== b.companyname) {
        return a.companyname.localeCompare(b.companyname); // Sort by companyName
      } else {
        return a.age - b.age; // If companyName is the same, then sort by age
      }
    });

    var initialLocalUsersState = mappedUserData.filter(function (u) {
      return u.age >= 18;
    });
    return initialLocalUsersState;
  });

  const [numberInput, setNumberInput] = useState(0);
  const [text, setText] = useState("");
  const [countState, dispatch] = useReducer(counterReducer, { count: 0 });

  /* 
    Maintaing deltedUserIds instead of deltedUsers, as I couldnt get two state Changes in useEffect() 
    Need to fix this.
    Using isFlipped to rerender with new users.
  */
  useEffect(() => {
    /* Filter to current text - search fields  - comapring after lowercase for case insensitive. */
    setUsers(
      localUsers.filter(function (u) {
        return u.username.toLowerCase().includes(text.toLowerCase());
      })
    );
  }, [text, isFlipped]);

  function searchUser(e: any) {
    setText(e.target.value);
  }

  function deleteUserFromLocalUsers(id: number) {
    /** add to deletedUserIds list */
    const currentDelList = deletedUserIds;
    currentDelList.push(id);
    setDeletedUserIds(currentDelList);
    /* 
      Change this isFlipped flag to force invoke the isEffect(), thus update UI maps - users and deletedUsers 
      For some reason, changing deletedUserIds not taking useEffect();
      */
    setIsFlipped(!isFlipped);
  }

  function restoreBackUserId(id: number) {
    /** add to deletedUserIds list */
    var currentDelList = deletedUserIds;
    /* Search and remove all occurance of this id from currentDelList */
    var i = 0;
    while (i < currentDelList.length) {
      if (currentDelList[i] === id) {
        currentDelList.splice(i, 1);
      } else {
        ++i;
      }
    }
    setDeletedUserIds(currentDelList);
    setIsFlipped(!isFlipped);
  }

  /** To avoid NaN issue when uses presses backspace on number field  */
  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseInt(event.target.value);
    // Check if the newValue is a valid number
    if (!isNaN(newValue)) {
      setNumberInput(newValue);
    } else {
      setNumberInput(0);
    }
  };

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      h3: {
        fontSize: '1.8rem',
        fontWeight: 500,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.2rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
      },
    },
  });
  

  

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' , }}>
        <Typography variant="h3">Count: {countState?.count} </Typography>
      <br/>

      <TextField
        defaultValue={numberInput}
        type="number"
        style={{ display: "block" ,  marginBottom: '15px'}}
        onChange={handleNumberInputChange}
      />
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        <AddIcon /> 1
      </Button>
      <span>&nbsp;</span>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        <RemoveIcon /> 1
      </Button>
      <span>&nbsp;</span>
      <Button
        variant="contained"
        onClick={() =>
          dispatch({
            type: "DECREMENTBYUSERINPUT",
            payload: { userinput: numberInput },
          })
        }
      >
        <RemoveIcon /> by above input
      </Button>
      <span>&nbsp;</span>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "INCREMENTBYRANDOMNO" })}
      >
        <AddIcon /> Random
      </Button>
      <span>&nbsp;</span>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "MOVE_TO_NEXT_ODD_NO" })}
      >
        <FastForwardIcon /> Next Odd No
      </Button>
      <span>&nbsp;</span>
      <Button variant="contained" onClick={() => dispatch({ type: "RESET" })}>
        <RotateLeftIcon />
      </Button>
      </Paper>
      <Paper elevation={3} style={{marginBottom: '25px', padding: '20px', maxWidth: '80%', margin: '0 auto' , }}>
      <p style={{ marginBottom: 10, marginTop: 30 }}>Search for a user</p>
      <TextField
        defaultValue={text}
        style={{ display: "block", margin: "auto" }}
        onChange={(e) => {
          searchUser(e);
        }}
      />

      <Grid style={{marginBottom: '25px', marginTop: '25px' } } container spacing={2}>
        {users
          .filter(function (u) {
            return !deletedUserIds.includes(u.id);
          })
          .map((u, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <UserCard
                userItem={u}
                actionFunction={(id) => {
                  deleteUserFromLocalUsers(id);
                }}
                action="DEL"
              />
            </Grid>
          ))}
      </Grid>

      <Grid container spacing={2}>
        {users
          .filter(function (u) {
            return deletedUserIds.includes(u.id);
          })
          .map((u, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <UserCard
                userItem={u}
                actionFunction={(id) => {
                  restoreBackUserId(id);
                }}
                action="RESTORE"
              />
            </Grid>
          ))}
      </Grid>
      </Paper>
      </ThemeProvider>
    </div>
  );
}
