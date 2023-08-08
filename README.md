# dsv-react-coding-exercise-3
Created with CodeSandbox

# CodeSandbox - User Management

1. Fork this CodeSandbox and sync it with your GitHub repository.

## User Data Processing

1. Import user data from `data.ts`.
   1.1. Utilize TypeScript in your implementation.
2. On load:
   2.1. Filter the user data array to only include users where age >= 18.
   2.2. Map the user data array to only include username, address, age, and companyName.
   2.3. Add a new ID to each user object, consisting of a randomized sequence (6 characters) from {ABCDEF123456}.
   2.4. Sort the array (ascending) by age, then by companyName.
   2.5. Dispatch the data to the local users state.

## Display Users

3. Display the users' properties using a loop in the `.tsx` file, preferably in a styled "Card" form.
   3.1. Add a "remove" button to each card - this should remove the user from the state.
   3.2. Store the removed users in a new state instance.
   3.3. Use the second input to add a method to search for a user's username with the `onChange` event.
   3.4. The removed users should also be found if the input is used to search for a username.
   3.5. If a removed user is shown during a search, add a "restore" button to insert the removed user back into the users array.

## Reducer Extension

4. Extend the reducer:
   4.1. Ensure the count is always >= 0, in all cases.
   4.2. Add a case to increment the count with a random number between 1 and 10.
   4.3. Add a case to increment to the nearest odd number, if already odd - increment to the next odd.
   4.4. Add a case to decrease the count by the input from the first text field.
   4.5. Add a case to reset the count.
   4.6. Add buttons to trigger the mentioned cases.
   4.7. Style the components using Material-UI.

## Repository Link

5. Provide the link to your forked repository with your completed implementation.
