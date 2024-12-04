# Invoice Management System (Full-Stack)

A full-stack Invoice Management System built with **Django REST Framework** on the backend and **React** on the frontend. This system allows you to create, view, edit, and delete invoices with multiple line items.

---

## Table of Contents

- [Features](#features)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Documentation](#api-documentation)
- [Usage](#usage)

---

## Features

- **Backend (Django REST Framework)**
  - Create, Update, Delete invoices.
  - Manage multiple line items for each invoice.
  - Auto-compute line totals and total amounts.
  - Paginated listing of invoices.
  - Validation of fields.
  
- **Frontend (React)**
  - Responsive design for mobile and desktop.
  - Create and edit invoices via a form.
  - View invoices with pagination.
  - Delete invoices.
  - Search and filter invoices.

---

## Backend Setup

### Prerequisites

1. Python 3.8+ (preferably 3.10)
2. `pip` (Python package installer)

### Steps to Run the Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/invoice-management-system.git
    cd invoice-management-system/backend
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Set up the database:

    ```bash
    python manage.py migrate
    ```

4. Create a superuser to access the Django admin (optional):

    ```bash
    python manage.py createsuperuser
    ```

5. Run the server:

    ```bash
    python manage.py runserver
    ```

    The backend API will be accessible at `http://127.0.0.1:8000`.

---

## Frontend Setup

### Prerequisites

1. Node.js (preferably 16+)
2. `npm` (Node package manager)

### Steps to Run the Frontend

1. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the frontend development server:

    ```bash
    npm start
    ```

    The frontend app will be accessible at `http://localhost:3000`.

---

## API Documentation

### Base URL
- `http://127.0.0.1:8000/api/` (for local development)

### Endpoints

#### 1. **Create Invoice**
- **URL:** `/invoices/`
- **Method:** `POST`
- **Request Body:**

    ```json
    {
        "invoice_number": "INV001",
        "customer_name": "John Doe",
        "date": "2024-11-12",
        "details": [
            {
                "description": "Product A",
                "quantity": 2,
                "unit_price": 50.00
            },
            {
                "description": "Product B",
                "quantity": 1,
                "unit_price": 75.00
            }
        ]
    }
    ```

- **Response:**
    ```json
    {
        "id": 1,
        "invoice_number": "INV001",
        "customer_name": "John Doe",
        "date": "2024-11-12",
        "details": [
            {
                "description": "Product A",
                "quantity": 2,
                "unit_price": 50.00,
                "line_total": 100.00
            },
            {
                "description": "Product B",
                "quantity": 1,
                "unit_price": 75.00,
                "line_total": 75.00
            }
        ]
    }
    ```

#### 2. **Get Invoices**
- **URL:** `/invoices/`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "invoice_number": "INV001",
                "customer_name": "John Doe",
                "date": "2024-11-12"
            }
        ]
    }
    ```

#### 3. **Update Invoice**
- **URL:** `/invoices/{id}/`
- **Method:** `PUT`
- **Request Body:**
    ```json
    {
        "invoice_number": "INV001-UPDATED",
        "customer_name": "John Doe Updated",
        "date": "2024-12-01",
        "details": [
            {
                "description": "Product A",
                "quantity": 2,
                "unit_price": 60.00
            },
            {
                "description": "Product C",
                "quantity": 1,
                "unit_price": 85.00
            }
        ]
    }
    ```

#### 4. **Delete Invoice**
- **URL:** `/invoices/{id}/`
- **Method:** `DELETE`
- **Response:** `204 No Content` (successful deletion)

---

## Usage

1. **Start the backend and frontend servers** as described in their respective setup sections.
2. Open the frontend application in your browser (`http://localhost:3000`).
3. Use the provided UI to create, edit, and view invoices.
4. The application will interact with the Django API to manage the invoice data.

---


## Contributions

Feel free to fork this repository, create issues, or submit pull requests for improvements!

---

## Contact

- **Author:** [Krishnanu Nag](https://github.com/your-username)
- **Email:** [krishnanunag@gmail.com](mailto:krishnanunag@gmail.com)
