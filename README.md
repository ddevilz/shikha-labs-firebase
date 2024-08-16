# Running the Project

To run the project, follow these steps to set up the environment variables, clone the repository, and start the application.

## 1. Clone the Repository

First, you need to clone the repository from GitHub. Open your terminal and run the following command:

```bash
git clone https://github.com/ddevilz/shikha-labs-firebase.git
```

## 2. Navigate to the Project Directory

Change into the project directory:

```bash
cd shikha-labs-firebase
```

## 3. Obtain Firebase Configuration

You need Firebase configuration values to run the project. Obtain these from the Firebase console:

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Select your project.
3. Click on the gear icon (⚙️) next to "Project Overview" and select "Project settings".
4. Scroll down to "Your apps" and select the appropriate platform (e.g., Web).
5. Copy the Firebase configuration values.

## 4. Create Environment Variables File

Create a file named `.env` in the root of your project directory. This file will store your environment variables. Add the following lines to the `.env` file, replacing the placeholders with your Firebase configuration values:

```plaintext
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

## 5. Install Dependencies

Ensure that you have all the necessary dependencies installed. Run the following command in your terminal:

```bash
npm install
```

or, if you are using Yarn:

```bash
yarn install
```

## 6. Run the Development Server

Start the development server by running:

```bash
npm run dev
```

or, if you are using Yarn:

```bash
yarn dev
```

This will start the application in development mode and it should be available at `http://localhost:3000`.

## 7. Access the Application

Open your web browser and go to `http://localhost:3000` to view and interact with the application.

## Additional Information

- Make sure that the `.env` file is included in your `.gitignore` to prevent it from being committed to version control.
- For production builds, ensure that you have appropriate environment variables set in your deployment environment.
