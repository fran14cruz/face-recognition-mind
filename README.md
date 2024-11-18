# Face-Recognition-Mind

**Face-Recognition-Mind** is the frontend application for the **Face-Recognition-Mind-API**, providing an intuitive interface for users to recognize faces in submitted images. This application is built with React and currently uses **class components**, with plans to migrate to **React Hooks** in a future update.

Take a look at the deployed version of the application [here](https://face-recognition-mind.vercel.app/).

---

## Features

- **User Authentication:** Users can sign in or register accounts.
- **Face Detection:** Upload an image URL to detect and highlight faces in the image.
- **User Ranking System:** Tracks the number of images analyzed by each user.
- **Particles Background:** Animated visual effects using the `particles-bg` library.
- **Modular Components:** Clean and reusable React components for easy maintenance.

---

## Tech Stack

- **React** (Class Components)
- **Particles-bg** for animated background
- **Custom CSS** for styling: tachyons
- **API Integration:** Works with the Face-Recognition-Mind-API for backend operations
- **Clarifai API** for face recognition

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/face-recognition-mind.git
   cd face-recognition-mind
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open the application in your browser:

   ```plaintext
   http://localhost:3000
   ```

## Usage

1. Sign In or Register: Access the application by signing in or registering an account.
2. Submit an Image:
  - Copy the URL of an image containing faces.
  - Paste the URL in the input field on the homepage.
  - Click the Detect button to analyze the image.
3. View Results: Detected faces will be highlighted with bounding boxes.
4. Track Progress: Your rank (based on the number of images analyzed) will be updated in real time.

## Project Structure
```plaintext
src/
├── App.css              // Styles for the app
├── App.js               // Main React component
├── components/          // React components
│   ├── FaceRecognition/ // Component for displaying detected faces
│   ├── ImageLinkForm/   // Input form for image URLs
│   ├── Logo/            // Logo component
│   ├── Navigation/      // Navigation bar
│   ├── Rank/            // User rank display
│   ├── Registration/    // Registration form
│   └── Signin/          // Sign-in form
└── index.js             // Entry point
```

## Screenshots
1. [Sign-In Page](src/static/signin.png)

2. [Registration Page](src/static/registration.png)

3. [Home Page](src/static/home-after.png)

### Future Plans
- Migrate to React Hooks for better state management and cleaner code.
- Improved Styling using modern CSS frameworks or libraries.
- Enhanced Image Handling:
  - Allow file uploads (not just URLs).
  - Add error handling for invalid URLs.
- Real-Time Detection: Display face detection as the image loads.

### Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.