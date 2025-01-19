# Unggasku ID

Unggasku ID is a platform designed to help poultry farmers manage their operations efficiently. The platform offers tools for consultations and educational articles, with roles for admin, user and professional veterinarian.

This project is a collaborative effort as part of the final requirement for an independent study program. Contributions are made by multiple team members, and GitHub links to their profiles can be found below.

## Features

- **Consultation System**: Connect with veterinary experts for personalized advice and support.
- **Educational Articles**: Access curated articles to learn about best practices in poultry farming.
- **Role-Based Access**: Separate user roles for admin, farmers, and veterinary professionals.
- **Interactive Dashboard**: Admins can manage articles, and veterinary professionals.
- **Chat System**:  chat between users and veterinary.

## Installation

### Prerequisites

- Node.js
- MySQL 
- npm 

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Ariemaharrucha/unggasku-id.git
   ```

2. Navigate to the project directory:
   ```bash
   cd unggasku-id
   ```
   
3. Enter the directory:
   ```bash
   cd client
   ```
   ```bash
   cd backend
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Configure environment variables:
   Create a `.env` file in the backend directory with the following:
   ```
    APP_HOST=localhost
    APP_USER=root
    APP_PASSWORD=
    APP_DATABASE=unggasku_db_v2
    APP_PORT=3000
    JWT_SECRET=FireOdyssey
    
    CLOUDINARY_CLOUD_NAME= YOUR CLOUDINARY NAME
    CLOUDINARY_API_KEY= YOUR CLOUDINARY_API_KEY
    CLOUDINARY_API_SECRET= SECRET API CLOUDINARY 
   ```
6. Create the database:
Ensure that a MySQL database is created with the name unggasku_db (or the name specified in the .env file). The database structure is available in the repository.

    If there is no admin created, run the following command in the admin.http file:
    ```bash
    POST http://localhost:3000/api/v1/admin/create-admin
    Content-Type: application/json
    # example
    {
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin1234"
    }
    ```

7. Start the development client and backend:
   ```bash
   npm dev
   ```

## Usage

1. Open the application in your browser.
2. Create an account or log in.
3. Explore consultation features, read articles, or manage content as an admin.

## Technologies Used

- **Frontend**: React, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Authentication**: JWT-based authentication

## Database Structure

- **Users**: Manage user roles and permissions.
- **Articles**: Store articles and manage their visibility.
- **Consultations**: Handle chat history.
- **Veterinary Professionals**: Manage profiles and availability.

## Contributing

We welcome contributions to enhance Unggasku ID. To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## Team Members
    Arie Maharrucha Zakka: https://github.com/Ariemaharrucha
    I komang Radita Suardhana: https://github.com/radita13
    Stefanus Dwi Christianto: https://github.com/AuroraBAE
    Didik Vinastu: https://github.com/vinast
    Rizkia Ayu Meisya Putri: 
    Stefanus Fandi Wibowo:
    Amalia Berliany Putri:

## Contact

For questions or feedback, please reach out:

- **Email**: arie.maharucha.zakka@gmail.com