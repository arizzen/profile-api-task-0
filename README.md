# 🐱 Profile API – HNG Backend Task

A simple RESTful API built with **Node.js/Express** that returns your profile information and a random cat fact from the [Cat Facts API](https://catfact.ninja/fact).

---

## 🚀 Features
- RESTful **GET /me** endpoint
- Fetches a **random cat fact** dynamically
- Returns **current UTC timestamp** in ISO 8601 format
- Handles external API errors gracefully
- Configured for **CORS** support

---

## 🧱 Response Example

```json
{
  "status": "success",
  "user": {
    "email": "a1.Richmondasemota@gmail.com",
    "name": "Richmond Asemota",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T17:25:36.102Z",
  "fact": "Cats have five toes on their front paws but only four on the back."
}


🛠️ Setup Instructions

1️⃣ Clone the Repository
git clone https://github.com/arizzen/profile-api-task-0.git
cd profile-api

2️⃣ Install Dependencies
npm install

3️⃣ Run Locally
node server1.js

Now opew your browser and visit:
http://localhost:1100/me

Dependencies
| Package     | Purpose                                                 |
| ----------- | ------------------------------------------------------- |
| **express** | Web framework for creating routes and handling requests |
| **axios**   | Makes HTTP requests to external APIs                    |
| **cors**    | Enables Cross-Origin Resource Sharing                   |


🧑‍💻 Author

Name: Richmond Asemota
Emails: a1.richmondasemota@gmail.com || a1.arizzen@gmail.com
Stack: Node.js/Express
