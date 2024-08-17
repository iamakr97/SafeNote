# SafeNote - Secure Note-Taking App

SafeNote is a secure, feature-rich, and user-friendly note-taking mobile application developed using React Native for the frontend and Spring Boot for the backend. The app allows users to create, store, and manage notes securely, with special features for encrypting sensitive information like passwords and confidential details. The app blurs sensitive notes on the frontend, and users can use local authentication (e.g., mobile password, face scan) to view these notes.

## Features

- **Secure Notes:** Store sensitive notes securely in the database.
- **Local Authentication:** Use mobile password or face scan to view encrypted notes.
- **Note Management:** Easily create, edit, delete, and manage notes.
- **Private Notes:** Mark notes as private, encrypt them before saving, and decrypt them when retrieved.
- **Search Functionality:** Quickly search for notes using the search bar on the home page.
- **User-Friendly Interface:** Minimal and attractive UI with easy navigation.
- **Session Management:** Persistent login sessions using local storage, so users don't need to log in repeatedly.
- **State Management:** Efficient state management across different pages using React Redux Toolkit.

## Technologies Used

- **Frontend:** React Native
- **Backend:** Spring Boot
- **Database:** MySQL
- **State Management:** React Redux Toolkit
- **Authentication:** JWT for secure login and session management
- **Encryption:** AES encryption for storing and retrieving sensitive notes

## Getting Started

### Prerequisites

- **Node.js** (version 14 or later)
- **Java** (JDK 11 or later)
- **MySQL**
- **Android Studio/Xcode** (for mobile app development)
- **Git** (for version control)

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/iamakr97/SafeNote.git
    cd SafeNote
    ```

2. **Backend Setup:**

    - Navigate to the backend directory:

      ```bash
      cd backend
      ```

    - Install the necessary dependencies:

      ```bash
      mvn install
      ```

    - Configure your database settings in the `application.properties` file.

    - Run the backend:

      ```bash
      mvn spring-boot:run
      ```

3. **Frontend Setup:**

    - Navigate to the frontend directory:

      ```bash
      cd ../frontend
      ```

    - Install the necessary dependencies:

      ```bash
      npm install
      ```

    - Run the React Native app:

      ```bash
      npx react-native run-android
      # or
      npx react-native run-ios
      ```

### API Testing

You can test the backend API using Postman or any other API testing tool.

### Environment Variables

Set up the necessary environment variables such as `JWT_SECRET` and database credentials.

## Usage

- Once the app is running, you can create an account or log in.
- Add, view, and manage your notes from the home screen.
- For private notes, use mobile password or face scan to view the content.

## Contribution

We welcome contributions! If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.


## Acknowledgements

Thanks to all contributors and the open-source community for their valuable input and suggestions.
