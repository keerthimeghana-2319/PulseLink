# 🩸 PulseLink – Smart Emergency Blood Donor & Availability Network

PulseLink is a frontend web application designed to connect people searching for blood donors with a network of registered volunteer donors. It provides a simple dashboard to explore donor availability, submit emergency blood requests, register demo donors, and track request statuses.

The goal of PulseLink is to demonstrate how technology can make blood donor discovery and emergency request management more organized and accessible.

LIVE LINK:https://pulse-link-pi.vercel.app

## 🚀 Features

### 1. Dashboard
- Overview of registered donors.
- Active emergency request statistics.
- Blood availability summary.
- Successful donation statistics.
- Recent donor and emergency request details.
- Quick navigation to application modules.

### 2. Find Donors
- Search donors by blood group.
- Filter donors by location.
- Check demo availability status.
- View donor information.
- Simulated contact request functionality.

### 3. Emergency Requests
- Submit emergency blood requests.
- Select the required blood group.
- Specify the number of blood units.
- Enter hospital and location details using fictional demo data.
- Set request urgency.
- Track request statuses:
  - Pending
  - In Progress
  - Completed
- Update or delete demo requests.

### 4. Donor Registration
- Register fictional donor profiles.
- Select blood group and location.
- Set availability status.
- Add new donor records dynamically.
- View updated donor information on the dashboard.

### 5. Pulse AI
- Separate chatbot interface.
- Demonstrates a conversational assistant concept for the application.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| JavaScript | Application functionality |
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| Lucide React | Icons |
| Vite | Development server and build tool |
| Git & GitHub | Version control and project hosting |

## 📁 Project Structure

```text
PulseLink/
│
├── public/
│
├── src/
│   ├── components/
│   │
│   ├── pages/
│   │   ├── FindDonors.jsx
│   │   ├── EmergencyRequest.jsx
│   │   ├── Register.jsx
│   │   └── PulseAI.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## ⚙️ Installation and Setup

Follow these steps to run PulseLink locally.

**Step 1: Clone the repository**

```bash
git clone https://github.com/keerthimeghana-2319/PulseLink.git
```

**Step 2: Navigate to the project directory**

```bash
cd PulseLink
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Install Lucide React**

```bash
npm install lucide-react
```

**Step 5: Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 📌 Current Project Status

- [x] React project setup using Vite
- [x] Dashboard interface
- [x] Donor search and filtering
- [x] Donor registration
- [x] Emergency blood request management
- [x] Request status tracking
- [x] Shared donor and request state
- [x] Pulse AI interface
- [x] Git and GitHub integration

## 🔮 Future Improvements

- Backend integration using Node.js and Express.
- Database integration for persistent donor records.
- Secure authentication and role-based access.
- Real-time notification system.
- Verified donor availability updates.
- Hospital and blood bank integration.
- Integration with trusted blood bank services.

## ⚠️ Important Disclaimer

PulseLink is currently a frontend demonstration project.

- All donor and request records are fictional sample data.
- Application data is stored in frontend state and resets when the page is refreshed.
- No real donor contact, emergency notification, or blood reservation service is implemented.
- The application does not verify donor eligibility or blood compatibility.
- Actual donor eligibility and blood compatibility must be confirmed by qualified medical professionals or authorized blood banks.
- In a real medical emergency, contact a hospital or emergency medical service directly.

## 👩‍💻 Project Information

**Project Name:** PulseLink

**Category:** Healthcare Technology / Web Development

**Development:** React-based frontend prototype

**Repository:** [PulseLink on GitHub](https://github.com/keerthimeghana-2319/PulseLink)

---

*PulseLink – Connecting people through technology, one donation at a time.*
