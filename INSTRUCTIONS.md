# Limble Search Demo Frontend

## Project Prompt

At Limble, we want to test your front-end skills by asking you to create a user-friendly search interface using Angular. The goal is to demonstrate your ability to build a functional, responsive UI that communicates with a Node.js backend server.

## Project Overview

You will be tasked with building a single-page Angular application that allows users to search for products and filter their results. Your frontend will communicate with an existing backend that we have provided for you, and your job is to build the interface and handle the search, loading, and filtering functionality. Please reply all to this email if you have any questions.

## Features

1. **Search Input View:**
   - The user should be able to enter a search term in a search box.
   - Upon submitting the search, the user should be redirected to an interstitial page.
2. **Interstitial (Loading) Page:**
   - The front end should display a "searching" state, simulating a search operation for 7 seconds before moving to the final results view.
   - This view will transition automatically after the timeout.
3. **Results View:**
   - Once the search completes, a results page should be displayed.
   - The right 2/3 of the page will show the search results in a clean, organized format (e.g., product name, price, and description).
   - The left 1/3 of the page will feature filtering options such as vendor and product attributes.

## Backend Setup

To connect your Angular app to our backend, you will need to start a Node.js server using the provided backend project. The backend handles the search request and provides product results over a WebSocket connection.

- Use npm run start to start the backend server locally.
- Upon submitting a search, the frontend will make a POST request to the /startSearch endpoint, which begins the search process.
  - An example request using curl would look like curl -X POST <http://localhost:3000/startSearch> -H "Content-Type: application/json" -d '{"query": "metal"}'
- Results will be returned via a WebSocket connection, which the frontend should listen to and display once received.
  - The application should be listening for the WebSocket event called search.

## Important Notes

- The backend will handle all the data fetching. Your task is solely focused on the frontend, including making the appropriate requests and handling the responses.
- You should use the latest version of Angular.
- The WebSocket connection should use socket.io in order to send and receive messages from the backend.

## Project Requirements

- **Functionality:**
  - Implement a clean and simple UI with a focus on user experience.
  - Handle real-time data updates through the WebSocket connection.
- **Data Presentation:**
  - Display product search results in a structured format using cards in the results view.
  - Implement basic filtering functionality on the left side of the screen.
- **UI/UX:**
  - Use appropriate loading indicators and feedback for the user during the search process.
  - Ensure transitions between views (e.g., search input -> loading -> results) are smooth.
- **Code Quality:**
  - Use maintainable, and modular code.
  - Handle errors gracefully, particularly around failed API requests or empty result sets.

## Bonus Points

- Implementing additional filtering options.
- Instead of a timeout before the transition, transition between view 2 and 3 when it gets the first set of products from the socket connection.
- Show us some observable usage examples, and during the project review lets chat on why you think they were best suited in the use cases.
- Highlight the search query term in the search results displayed on screen.

## Project Materials

- The sample backend Node.js server zip file as attached to the email

- Backend includes endpoints:
  - /startSearch (POST request to initiate the search).
  - WebSocket endpoint to listen for search results.

## Deliverables

- Please submit the Angular project as a zip file or provide a link to a GitHub repository.
- The project should be functional, documented where needed, and include any necessary instructions to run it.

After you've completed the project, we'll set up a review session to discuss your solution. Please let us know if you have any questions or need clarification on any aspect of the project.

---

Looking forward to seeing what you come up with!
