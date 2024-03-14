# PDF_Extractor

This repository contains the code for a full stack website built with React for the frontend and Node.js for the backend.

## Installation

### Frontend (React)

1. Navigate to the `frontend` directory:

    ```
    cd frontend
    ```

2. Install dependencies using npm:

    ```
    npm install
    ```

### Backend (Node.js)

1. Navigate to the `backend` directory:

    ```
    cd backend
    ```

2. Install dependencies using npm:

    ```
    npm install
    ```

### Python Virtual Environment

1. Navigate to the `backend` directory:

    ```
     cd backend
    ```

2. Create a Python virtual environment:

    ```
    python3 -m venv venv
    ```

3. Activate the virtual environment:

    On macOS/Linux:

    ```
    source venv/bin/activate
    ```

    On Windows:

    ```
    .\venv\Scripts\activate
    ```

4. Install Python dependencies:

    ```
    pip install fitz PyMuPDF pillow
    ```
    
# Additional Setup

1. Navigate to the `backend` directory:

    ```
    cd backend
    ```

2. Create a `.env` file:

    - Right-click anywhere.
    - Click on "New."
    - Select "File."
    - Name it as `.env`.

3. Add the following content in the `.env` file:

    ```
    PORT=8000
    MONGODB_URI=<your mongodb url>

    CLOUDINARY_CLOUD_NAME=<your cloudinary cloud name>
    CLOUDINARY_API_KEY=<your api key>
    CLOUDINARY_API_SECRET=<your api secret>
    ```


## Usage

1. Start the backend server:

    ```
    cd backend
    npm start
    ```

2. Start the frontend development server:

    ```
    cd frontend
    npm start
    ```

3. Access the website in your browser:

    ```
    http://localhost:3000
    ```

## Folder Structure

- `frontend`: Contains the React frontend code.
- `backend`: Contains the Node.js backend code.
