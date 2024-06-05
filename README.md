## User Stories

### 1. **As a user, I want to be able to book a date and time and specify the number of players so that I can reserve 1 or more lanes in the bowling alley.**

#### Booking Form Display:
- **When the user navigates to the booking page, they should see a form where they can input the date, time, and number of players.**

#### Date Input Field:
- The form should contain a date input field labeled **"Date"** where the user can select the desired booking date.

#### Time Input Field:
- The form should contain a time input field labeled **"Time"** where the user can select the desired booking time.

#### Number of Players Input Field:
- The form should contain a number input field labeled **"Number of awesome bowlers"** where the user can specify the number of players for the booking.

#### Input Validation:
- The input fields for date, time, and number of players should allow the user to input valid values without errors or unexpected behavior.

#### Booking Submission:
- After entering the required information (date, time, and number of players), the user should be able to submit the booking form.

#### Validation on Submit:
- If the user attempts to submit the form without providing all required information (date, time, and number of players), they should receive an error message indicating the missing information.

#### Successful Booking:
- Upon successful submission of the booking form with valid information, the user should receive confirmation of their booking.

#### Reservation of Lanes:
- The booking confirmation should indicate that the specified date and time have been reserved for the specified number of players, allowing them to use 1 or more lanes in the bowling alley.

#### Data Persistence:
- The booked date, time, and number of players should be stored and accessible for reference by the bowling alley staff or for future user interactions.

### 2. **As a user, I want to be able to choose the shoe size for each player so that each player gets shoes that fit.**

#### Choosing Shoe Size:
- Users should be able to choose the shoe size for each player represented by a shoe input field.

#### Adding Shoe:
- Users should be able to add a new shoe input field when needed.

#### Updating Shoe Size:
- Users should be able to update the shoe size for a specific player, and the corresponding data should be correctly updated in the component state.

#### Input Validation:
- Input fields should handle valid and invalid input values without errors or unexpected behavior.

#### Data Persistence:
- The chosen shoe sizes and the presence of shoe fields should be stored and accessible for reference by the component or other parts of the application.

### 3. **As a user, I want to be able to remove a shoe size field if I happened to click one too many so I don't book shoes unnecessarily.**

#### Removing Shoe:
- Users should be able to remove a shoe input field for a player if necessary, and the component state should be updated accordingly.

#### Removing Shoe Size Field:
- Users should be able to remove a shoe size field, and the component should re-render without that field.

### 4. **As a user, I want to be able to navigate back to the booking view after confirmation.**

#### Navigation from Confirmation to Booking View:
- After the user confirms the booking, clicking the appropriate button should trigger navigation back to the booking view.

#### Confirmation Action:
- Clicking the confirmation button should trigger the appropriate action to navigate back to the booking view.

#### View Persistence:
- Upon navigating back to the booking view, the booking form should be displayed with its relevant input fields and components.

### 5. **As a user, I want to be able to send my reservation and get back a reservation number and total so I know how much I have to pay.**

#### Payment Details:
- Must have a booking number.
- Total amount to be paid must be equal to **120 SEK / person + 100 SEK / course**.
