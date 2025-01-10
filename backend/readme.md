## Team Schema
The `Team` schema is defined in `models/team.js` with the following attributes:

- `picture`: String (required) - URL of the team member's picture.
- `name`: String (required) - Name of the team member.
- `designation`: String (required) - Designation of the team member.
- `years`: String (required) - Years of experience or association.
- `priority`: Number (optional) - Priority level of the team member.
- `team`: String (optional) - Team name or identifier.


# Team API Documentation

## Create Team
**POST** `http://localhost:3000/api/team`
- Creates a new team
- Request body should contain team data
```json
{
    "picture": "https://example.com/picture.jpg",
    "name": "John Doe",
    "designation": "Software Engineer",
    "year": "2022"
}
```
- This should be sent in form-data from the front end

like this
```javascript
const form = new FormData();
form.append('picture', 'https://example.com/picture.jpg');
form.append('name', 'John Doe');
form.append('designation', 'Software Engineer');
form.append('year', '2022');
```


## Get Teams by Year
**GET** `http://localhost:3000/api/team/:year`
- Retrieves all teams for a specific year
- Replace `:year` with the desired year (e.g., `http://localhost:3000/api/team/2023`)

## Update Team
**PATCH** `http://localhost:3000/api/team/:id`
- Updates an existing team
- Replace `:id` with the team ID
- Request body should contain fields to update

## Delete Team
**DELETE** `http://localhost:3000/api/team/:id`
- Deletes a team
- Replace `:id` with the team ID





# TeamWie API

This API manages teams with features like creating, fetching, updating, and deleting team data. It uses **Mongoose**, **Express**, and integrates with **Cloudinary** for image uploads.

---

## Prerequisites

- **Node.js** installed
- **MongoDB** connection string
- **Cloudinary** account for image uploads

---

## Endpoints

### Base URL
`http://<your-server-url>/api/teamwie`

---

### 1. Create a Team

**POST** `/api/teamwie`

#### Request
- **Headers**: 
  - `Content-Type`: `multipart/form-data`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "designation": "Team Lead",
    "year": "2025",
    "file": <image file>
  }
  ```

Use `FormData` in the frontend to upload the file.

#### Example (Frontend JavaScript)
```javascript
const formData = new FormData();
formData.append("name", "John Doe");
formData.append("designation", "Team Lead");
formData.append("year", "2025");
formData.append("file", fileInput.files[0]);

fetch("/api/teamwie", {
    method: "POST",
    body: formData,
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

#### Response
**Success:**
```json
{
  "_id": "64bd7b6c8e8c2b001f8e4e1f",
  "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
  "name": "John Doe",
  "designation": "Team Lead",
  "year": "2025",
  "__v": 0
}
```

---

### 2. Get All Teams

**GET** `/api/teamwie`

#### Request
- No body required.

#### Response
**Success:**
```json
[
  {
    "_id": "64bd7b6c8e8c2b001f8e4e1f",
    "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
    "name": "John Doe",
    "designation": "Team Lead",
    "year": "2025",
    "__v": 0
  },
  ...
]
```

---

### 3. Get Teams by Year

**GET** `/api/teamwie/:year`

#### Request
- **Params**: `year` (e.g., `2025`)

#### Example (Frontend JavaScript)
```javascript
fetch("/api/teamwie/2025", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

#### Response
**Success:**
```json
[
  {
    "_id": "64bd7b6c8e8c2b001f8e4e1f",
    "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
    "name": "John Doe",
    "designation": "Team Lead",
    "year": "2025",
    "__v": 0
  }
]
```

**Failure:**
```json
{
  "message": "No teams found for the specified year",
  "status": false
}
```

---

### 4. Update a Team

**PATCH** `/api/teamwie/:id`

#### Request
- **Params**: `id` (team ID)
- **Body** (JSON):
  ```json
  {
    "name": "Updated Name",
    "designation": "Updated Designation"
  }
  ```

#### Example (Frontend JavaScript)
```javascript
fetch(`/api/teamwie/${teamId}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "Updated Name",
        designation: "Updated Designation",
    }),
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

#### Response
**Success:**
```json
{
  "_id": "64bd7b6c8e8c2b001f8e4e1f",
  "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
  "name": "Updated Name",
  "designation": "Updated Designation",
  "year": "2025",
  "__v": 0
}
```

**Failure:**
```json
"Team not found"
```

---

### 5. Delete a Team

**DELETE** `/api/teamwie/:id`

#### Request
- **Params**: `id` (team ID)

#### Example (Frontend JavaScript)
```javascript
fetch(`/api/teamwie/${teamId}`, {
    method: "DELETE",
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

#### Response
**Success:**
```json
{
  "message": "Team deleted successfully",
  "deletedTeam": {
    "_id": "64bd7b6c8e8c2b001f8e4e1f",
    "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
    "name": "John Doe",
    "designation": "Team Lead",
    "year": "2025",
    "__v": 0
  }
}
```

**Failure:**
```json
"Team not found"
```

---

## Model Structure

- **`picture`**: URL of the team's image (required)
- **`name`**: Name of the team member (required)
- **`designation`**: Designation of the team member (required)
- **`year`**: Year associated with the team (required)
- **`priority`**: Priority number (optional)



# Events API

This API manages event data with functionalities to create, fetch, filter by type, delete events, and more. It uses **Mongoose** and integrates with **Cloudinary** for image uploads.

---

## Prerequisites

- **Node.js** installed
- **MongoDB** connection string
- **Cloudinary** account for image uploads

---

## Endpoints

### Base URL
`http://<your-server-url>/api/event`

---

### 1. Create an Event

**POST** `/api/event`

#### Request
- **Headers**:
  - `Content-Type`: `multipart/form-data`
- **Body**:
  ```json
  {
    "title": "Annual Event",
    "type": "ACES",
    "year": "2025",
    "file": <image file>
  }
  ```
  Use FormData in the frontend to upload the file.

#### Example (Frontend JavaScript)
```javascript
const formData = new FormData();
formData.append("title", "Annual Event");
formData.append("type", "ACES");
formData.append("year", "2025");
formData.append("file", fileInput.files[0]);

fetch("/api/event", {
    method: "POST",
    body: formData,
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

#### Response
**Success:**
```json
{
  "_id": "64bd7b6c8e8c2b001f8e4e1f",
  "title": "Annual Event",
  "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
  "type": "ACES",
  "year": "2025",
  "__v": 0
}
```
**Failure:**
```json
{
  "message": "Error message here"
}
```

---

### 2. Get All Events

**GET** `/api/event`

#### Request
No body required.

#### Response
**Success:**
```json
[
  {
    "_id": "64bd7b6c8e8c2b001f8e4e1f",
    "title": "Annual Event",
    "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
    "type": "ACES",
    "year": "2025",
    "__v": 0
  },
  ...
]
```
**Failure:**
```json
{
  "message": "No events found"
}
```

---

### 3. Get Events by Type

**GET** `/api/event/:type`

#### Request
- **Params**: `type` (e.g., ACES, EFX, PEFAA, Charity_Auction)

#### Example (Frontend JavaScript)
```javascript
fetch("/api/event/ACES", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

#### Response
**Success:**
```json
[
  {
    "_id": "64bd7b6c8e8c2b001f8e4e1f",
    "title": "Annual Event",
    "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
    "type": "ACES",
    "year": "2025",
    "__v": 0
  }
]
```
**Failure:**
```json
{
  "message": "No events found for this type"
}
```

---

### 4. Get Event by ID

**GET** `/api/event/:id`

#### Request
- **Params**: `id` (Event ID)

#### Response
**Success:**
```json
{
  "_id": "64bd7b6c8e8c2b001f8e4e1f",
  "title": "Annual Event",
  "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
  "type": "ACES",
  "year": "2025",
  "__v": 0
}
```
**Failure:**
```json
{
  "message": "Event not found"
}
```

---

### 5. Delete an Event

**DELETE** `/api/event/:id`

#### Request
- **Params**: `id` (Event ID)

#### Example (Frontend JavaScript)
```javascript
fetch(`/api/event/${eventId}`, {
    method: "DELETE",
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

#### Response
**Success:**
```json
{
  "message": "Event deleted successfully",
  "deletedEvent": {
    "_id": "64bd7b6c8e8c2b001f8e4e1f",
    "title": "Annual Event",
    "picture": "https://res.cloudinary.com/demo/image/upload/v1/...",
    "type": "ACES",
    "year": "2025",
    "__v": 0
  }
}
```
**Failure:**
```json
{
  "message": "Event not found"
}
```

---

## Model Structure

- **title**: Name of the event (required)
- **picture**: URL of the event's image (required)
- **type**: Type of the event (required; enum: ACES, EFX, PEFAA, Charity_Auction)
- **year**: Year of the event (optional)

---

## Routes Summary

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | `/api/event`      | Get all events            |
| POST   | `/api/event`      | Create a new event        |
| GET    | `/api/event/:type`| Get events by type        |
| GET    | `/api/event/:id`  | Get a single event by ID  |
| DELETE | `/api/event/:id`  | Delete an event by ID     |

---

## Utils: Cloudinary Integration

- **File**: `uploadToCloudinary`
- **Functionality**: Uploads files to Cloudinary and returns the `secure_url`.

---

Feel free to suggest any improvements or ask questions about this API!

