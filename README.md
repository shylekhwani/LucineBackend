🛡️ User Access Management System – Backend:

    * This is a backend service for a User Access Management System, where:
    * Admins can create software entries.
    * Employees can request access to software.
    * Managers can approve or reject access requests.
    * Users can view the status of their own requests.

⚙️ Tech Stack
    * Node.js + Express for API
    * PostgreSQL as the database
    * TypeORM for ORM
    * JWT for authentication
    * bcrypt for password hashing
    

| Role     | Capabilities                            |
| -------- | --------------------------------------- |
| Admin    | Create software only                    |
| Manager  | Approve/Reject access requests          |
| Employee | Request access to software, view status |


🧪 Endpoints:

Auth (example setup):

POST /api/v1/register
POST /api/v1/login

Use req.user from JWT middleware after login

Software:

POST /api/v1/softwares/create (Admin only)
GET /api/v1softwares – List all software

Requests:

POST /api/v1/requests/create – Create request (Authenticated users)
GET /api/v1/requests/user – Get all requests by logged-in user
GET /api/v1/requests/ – Get all requests (for managers)
GET /api/v1/requests/:id – Get request by ID
PATCH /api/v1/requests/:id/status – Approve/reject (Manager only)



🚀 Getting Started:

   * Clone the repo
   * Run npm install
   * Setup .env
   * Configure AppDataSource in data-source.js
   * Run the server:
     npm start