# dsv-react-coding-exercise-3
Created with CodeSandbox

# CodeSandbox - User Management

1. Fork this CodeSandbox and sync it with your GitHub repository.

## User Data Processing

1. Import user data from `data.ts`.
   - 1.1. Utilize TypeScript in your implementation.
      - Yes. Imported data.

2. On load:
   - 2.1. Filter the user data array to only include users where age >= 18.
      - Done : uses array filter to reduce the dataset.
   - 2.2. Map the user data array to only include username, address, age, and companyName.
      - Done : Mapped with array.map and also added new id based for below point.
   - 2.3. Add a new ID to each user object, consisting of a randomized sequence (6 characters) from {ABCDEF123456}.
      - Done
   - 2.4. Sort the array (ascending) by age, then by companyName.
      - Done
   - 2.5. Dispatch the data to the local users state.
      - Done. added to initial state.

## Display Users

3. Display the users' properties using a loop in the `.tsx` file, preferably in a styled "Card" form.
   - 3.1. Add a "remove" button to each card - this should remove the user from the state.
      - Done. Used styled Icon as remove button, added onclick to update the deletedUsers and refreshed user state
   - 3.2. Store the removed users in a new state instance.
      - Done. Used deletedUserIds state to store all deleted users. While rendering filtered off the ids present in here.
      - Intially tried with two user object array states ( users[] and deletedUsers[] ) and  render() has two sperate map()s for each. I ran into issue when useEffect() is setState()'ing both these object[] states , only one of the state change is beig reflected in render().  So I resorted to maintain deletedUserIds whose state is changed on delete events and also forces useEffect with a flag change.
   - 3.3. Use the second input to add a method to search for a user's username with the `onChange` event.
      - Done. On change of input text, user state is hooked and updated with new filter. 
   - 3.4. The removed users should also be found if the input is used to search for a username.
      - Done.
   - 3.5. If a removed user is shown during a search, add a "restore" button to insert the removed user back into the users array.
      - Done. Since users array is same in my apprach, this event only removes the user id from the deletedUserIds state ( array )

## Reducer Extension

4. Extend the reducer:
   -
      - Done added relavent actions and cases for reducers. 
   - 4.1. Ensure the count is always >= 0, in all cases.
      - Done. Applied this check in reducer.
   - 4.2. Add a case to increment the count with a random number between 1 and 10.
      - Done.
   - 4.3. Add a case to increment to the nearest odd number, if already odd - increment to the next odd.
      - Done. Button with lable ">> next odd no"
   - 4.4. Add a case to decrease the count by the input from the first text field.
      - Done . Button with lable "- above input "
   - 4.5. Add a case to reset the count.
      - Done . Button with reset icon.
   - 4.6. Add buttons to trigger the mentioned cases.
      - Done . Added
   - 4.7. Style the components using Material-UI.
      - Done . Added

## Repository Link

5. Provide the link to your forked repository with your completed implementation.
   - https://github.com/kumarith/dsv-react-coding-exercise-3

