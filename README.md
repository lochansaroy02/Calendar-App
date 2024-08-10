#  **Calendar App**

## **Overview**

The React Calendar App is an interactive tool that allows users to assign events to specific times by dragging and dropping. The app is designed with a user-friendly interface that facilitates easy scheduling of events. This documentation will guide you through the setup, features, and usage of the app.

## **Features**

- **Drag-and-Drop Functionality:** Users can assign events to specific time slots by dragging.
- **Responsive Design:** The calendar adjusts to different screen sizes for a seamless user experience.
- **Event Management:** Users can create, edit, and delete events directly on the calendar.
- **Customizable Time Slots:** Time slots can be customized based on user needs.
- **React Hooks:** The app leverages React hooks for state management and side effects.

## **Prerequisites**

Before using or developing this app, ensure that you have the following installed on your machine:

- **Node.js** (version 14.x or higher)
- **npm** or **yarn** for package management

## **Installation**

To get started with the React Calendar App, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://https://github.com/lochansaroy02/Calendar-App/
   cd react-calendar-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## **Usage**

### **1. Creating Events**

- To create an event, click on an empty time slot in the calendar.
- Drag the mouse to select the duration for the event.
- Release the mouse button, and a prompt will appear to enter the event details (e.g., title, description).

### **2. Editing Events**

- Click on an existing event to open the edit prompt.
- Update the event details as needed and save changes.

### **3. Deleting Events**

- Right-click on an event to open a context menu with the delete option.
- Confirm deletion, and the event will be removed from the calendar.

### **4. Drag-and-Drop Functionality**

- Click and hold an event to drag it to a different time slot.
- Drop the event in the desired slot to reassign its time.

## **Customization**

### **1. Time Slot Intervals**



### **2. Event Styling**

To customize the appearance of events, modify the CSS file located in `src/styles/calendar.css`. You can adjust the background color, font size, and other styles as needed.

## **Code Structure**

- **src/components/Calendar.js:** Main calendar component that handles rendering time slots and events.
- **src/components/Event.js:** Component for individual events, including drag-and-drop logic.
- **src/hooks/useEvent.js:** Custom hook for managing event state and actions.
- **src/styles/calendar.css:** CSS file for styling the calendar and events.

## **Deployment**

To deploy the app for production, build the app using the following command:

```bash
npm run build
```
or
```bash
yarn build
```

This will create an optimized production build in the `build/` directory.

## **Contributing**

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Create a pull request, and describe the changes you have made.

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

This documentation should cover the essential aspects of your React Calendar App. Be sure to include any additional details or instructions specific to your implementation.
