# Getting Started with Sing His Praise

Welcome to **Sing His Praise**, the ultimate hymn book app! This guide will walk you through the setup, features, and key code changes made to the app.

## Contents
- [Getting Started](#getting-started)
- [Code Changes](#code-changes)
  - [Version 1.0.0](#version-100)
  - [Version 1.1.0](#version-110)
  - [Version 1.2.0](#version-120)
  - [Version 1.3.0](#version-130)
  - [Version 1.4.0](#version-140)
- [App Features](#app-features)
- [Troubleshooting](#troubleshooting)

---

## Getting Started

To get started with **Sing His Praise**, follow the instructions below:

### Requirements
- **Node.js** and **npm** (Node Package Manager)
- **Expo CLI** for running the app on your device
- **React Native**

### Installation Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/sing-his-praise.git
    ```
2. Install dependencies:
    ```bash
    cd sing-his-praise
    npm install
    ```
3. Start the app using Expo:
    ```bash
    expo start
    ```

This will open a development server in your browser. You can scan the QR code with the **Expo Go** app to run the app on your device.

---

## Code Changes

This section documents all the code changes made to **Sing His Praise**, including new features, bug fixes, and improvements.

### Version 1.0.0 - Initial Release
#### Features:
- **Initial Setup**: Set up the React Native project using Expo CLI.
- **Home Screen**: Created a basic home screen with a welcome message.
- **Offline Functionality**: Implemented offline access for all hymns (songs available offline after initial loading).
- **Song Data**: Added mock data for hymns and displayed it on the home screen.

#### Files Modified:
- `App.js`: Created home screen UI and linked hymn data.
- `data/hymns.json`: Mock data for the hymn collection.

---

### Version 1.1.0 - Search Feature
#### Features:
- **Search Bar**: Added a search bar to filter hymns by title or keyword.
- **Search Functionality**: Implemented real-time filtering of the hymn list based on the user’s input.

#### Files Modified:
- `components/SearchBar.js`: Created a search bar component.
- `App.js`: Updated to handle search logic and display filtered hymns.

---

### Version 1.2.0 - Favorites Feature
#### Features:
- **Favorites**: Introduced a "Favorites" feature, allowing users to mark hymns as favorites.
- **Local Storage**: Integrated `AsyncStorage` to persist the favorite hymns across sessions.

#### Files Modified:
- `components/HymnCard.js`: Added a button to mark a hymn as a favorite.
- `utils/favorites.js`: Created a utility for handling favorite hymns in local storage.
- `App.js`: Updated the home screen to display favorite hymns and integrate favorites logic.

---

### Version 1.3.0 - Bug Fixes & Performance Improvements
#### Fixes:
- **Bug Fix**: Fixed an issue where hymns weren’t being displayed correctly when the app was offline.
- **Performance Optimization**: Optimized hymn loading and rendering for faster startup and smoother performance.

#### Files Modified:
- `App.js`: Fixed the bug with offline hymn display.
- `components/HymnList.js`: Optimized hymn list rendering for better performance.

---

### Version 1.4.0 - Multi-Language Support (Planned)
#### Planned Features:
- **Multi-Language Support**: Introduce support for multiple languages for hymn lyrics, allowing users to switch between languages for the same hymn.

#### Files to Modify:
- `components/HymnCard.js`: Update to handle different translations of hymns.
- `data/hymns.json`: Add translations for hymns in multiple languages.

---

## App Features

**Sing His Praise** offers a range of features to enhance your hymn book experience:

- **Search Hymns**: Easily search for hymns by title or keyword.
- **Offline Access**: View all hymns without an internet connection.
- **Favorite Hymns**: Mark hymns as favorites for quick access.

Stay tuned for future updates and new features!

---

## Troubleshooting

Here are some common issues you might encounter when using **Sing His Praise**:

### App Crashes on Startup
- Make sure your device meets the app's requirements.
- Try clearing the app’s cache or reinstalling it.

### Songs Not Showing Offline
- Ensure you've had a stable internet connection during the initial load of songs.
- Try reinstalling the app if the problem persists.

If you have other issues, feel free to check out our [GitHub Issues Page](https://github.com/your-username/sing-his-praise/issues).
