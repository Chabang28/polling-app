# Polling App

A lightweight polling application that allows users to create polls, cast votes, and view results efficiently. Built with readability, maintainability, and performance in mind.

---

## Features

- **Create Polls:** Add multiple options to a poll easily.  
- **Cast Votes:** Users can vote for their preferred options.  
- **View Results:** Real-time tallying of poll results.  
- **User-specific Polls:** Filter polls created by a specific user.  

---

## Day 8 Refactor

**Function Refactored:** `voteHandler`  

### Key Improvements:
- Uses **immutable updates** to avoid modifying the original votes array.  
- Improves **readability** and **maintainability** of code.  
- Adds **inline comments** for clarity.  

**Impact:**  
- Safer code with no side effects.  
- Easier to maintain and scale in the future.  
- Demonstrates clean coding practices for production-ready code.

---

## Setup Instructions

1. **Clone the repository**  
```bash
git clone https://github.com/Chabang28/polling-app.git
## Running the App / Demo

This app includes a demo of the Day 8 `voteHandler` refactor.

### Steps:

1. Make sure you have Node.js installed.
2. Open your terminal and navigate to the project folder.
3. Run:

```bash
npm install   # install dependencies (if any)
npm start     # run the app
