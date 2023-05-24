# Vote Clicker app

This is an asssignment project for clp

This is a powerful and user-friendly vote clicker app that allows clients to record one or more clicks, while the number of clicks gets instantly logged into the dashboard page. The app features a sleek and intuitive interface that provides users with an engaging and interactive experience.

The dashboard page is where the real magic happens, as it displays a beautiful horizontal bar chart that gives an overview of the number of votes per each button and the total number of users clicked. With this dashboard, users can easily visualize the poll results and track the progress of the vote count in real-time.

Built using React and Vite, this app is lightweight, fast, and highly scalable, making it perfect for handling large amounts of data and multiple users. It leverages the power of Socket.io to enable real-time communication between the client and server, ensuring that every click is recorded and updated instantly.

Overall, this vote clicker app is perfect for conducting polls, surveys, and feedback forms, providing users with an innovative and engaging way to collect and visualize data.

## Adding more Choices or Buttons

You can add more buttons in ../src/config/choices.ts

## Getting Started

### Prerequisites

- Node.js
- npm
- pnpm

### Installation

1. Clone the repository
2. Install dependencies with `pnpm install`

### Usage

1. Start the development server with `pnpm run dev`
2. Open [http://localhost:5173](http://localhost:5173) in your browser to see the app running
3. Make changes to the code in `src` and see them live-reload in the browser

### Build

1. Run `pnpm run build` to create a production build
2. The output files will be located in the `dist` directory

## Features

- Real-time logging of clicks
- Add any number of choices for the Poll, it will be automatically charted in dashboard

## Technologies Used

- React
- Vite
- Socket.io
- Chart.js

## Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a pull request

## License

This project is licensed under the [LICENSE NAME HERE] License - see the [LICENSE.md](LICENSE.md) file for details.
