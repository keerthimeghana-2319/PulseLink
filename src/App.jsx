import "./App.css";
import { useState } from "react";
import {
  HeartPulse,
  LayoutDashboard,
  Users,
  Droplet,
  ClipboardList,
  MessageCircle,
  Settings,
  Bell,
  Menu,
} from "lucide-react";

import FindDonors from "./pages/FindDonors";
import EmergencyRequest from "./pages/EmergencyRequest";
import Register from "./pages/Register";
import PulseAI from "./pages/PulseAI";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [donors, setDonors] = useState([
    { id: 1, name: "Arjun Kumar", group: "O+", city: "Rajahmundry", availability: "Available" },
    { id: 2, name: "Priya Sharma", group: "B+", city: "Kakinada", availability: "Available" },
    { id: 3, name: "Rahul Varma", group: "A+", city: "Peddapuram", availability: "Unavailable" },
    { id: 4, name: "Sneha Reddy", group: "AB+", city: "Rajahmundry", availability: "Available" },
    { id: 5, name: "Kiran Kumar", group: "O-", city: "Samalkot", availability: "Available" },
  ]);

  const [requests, setRequests] = useState([
    {
      id: 1001,
      bloodGroup: "O+",
      units: 2,
      hospital: "City Care Hospital",
      location: "Rajahmundry",
      urgency: "High",
      status: "Pending",
      date: "25/11/2026",
    },
    {
      id: 1002,
      bloodGroup: "B+",
      units: 1,
      hospital: "Sunrise Medical Center",
      location: "Kakinada",
      urgency: "Normal",
      status: "In Progress",
      date: "24/11/2026",
    },
  ]);

  const activeRequests = requests.filter(
    (request) =>
      request.status === "Pending" || request.status === "In Progress"
  ).length;

  const navigation = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Find Donors", icon: Users },
    { name: "Emergency Requests", icon: ClipboardList },
    { name: "Register", icon: Droplet },
    { name: "Pulse AI", icon: MessageCircle },
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          <HeartPulse size={30} />
          <h2>PulseLink</h2>
        </div>

        <nav>
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item" onClick={() => alert("Demo settings")}>
            <Settings size={19} />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      <main className="page-content">
        <header className="topbar">
          <div>
            <p>PulseLink / {activePage}</p>
            <h2>{activePage}</h2>
          </div>

          <button
            className="notification-button"
            onClick={() => alert("No new demo notifications")}
            aria-label="Notifications"
          >
            <Bell size={21} />
          </button>
        </header>

        {activePage === "Dashboard" && (
          <>
            <section className="welcome-section">
              <div>
                <h2>Welcome to PulseLink</h2>
                <p>
                  Smart Emergency Blood Donor & Availability Network
                </p>
              </div>
            </section>

            <section className="stats-grid">
              <div className="content-card">
                <Users size={25} />
                <h3>{donors.length}</h3>
                <p>Registered Donors</p>
              </div>

              <div className="content-card">
                <ClipboardList size={25} />
                <h3>{activeRequests}</h3>
                <p>Active Requests</p>
              </div>

              <div className="content-card">
                <Droplet size={25} />
                <h3>582</h3>
                <p>Demo Blood Units</p>
              </div>

              <div className="content-card">
                <HeartPulse size={25} />
                <h3>894</h3>
                <p>Demo Donations</p>
              </div>
            </section>

            <section className="dashboard-grid">
              <div className="content-card">
                <h3>Quick Actions</h3>

                <button
                  className="primary-button"
                  onClick={() => setActivePage("Find Donors")}
                >
                  Find Donors
                </button>

                <button
                  className="primary-button"
                  onClick={() => setActivePage("Emergency Requests")}
                >
                  Create Emergency Request
                </button>

                <button
                  className="primary-button"
                  onClick={() => setActivePage("Register")}
                >
                  Register Demo Donor
                </button>
              </div>

              <div className="content-card">
                <h3>Recent Donors</h3>

                {donors.slice(0, 5).map((donor) => (
                  <div className="recent-donor-row" key={donor.id}>
                    <div>
                      <strong>{donor.name}</strong>
                      <p>{donor.city}</p>
                    </div>
                    <span>{donor.group}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-card">
              <h3>Recent Emergency Requests</h3>

              {requests.slice(0, 4).map((request) => (
                <div className="recent-donor-row" key={request.id}>
                  <div>
                    <strong>{request.hospital}</strong>
                    <p>
                      {request.bloodGroup} · {request.location}
                    </p>
                  </div>
                  <span>{request.status}</span>
                </div>
              ))}

              <button
                className="primary-button"
                onClick={() => setActivePage("Emergency Requests")}
              >
                View All Requests
              </button>
            </section>
          </>
        )}

        {activePage === "Find Donors" && (
          <FindDonors donors={donors} />
        )}

        {activePage === "Emergency Requests" && (
          <EmergencyRequest
            requests={requests}
            setRequests={setRequests}
          />
        )}

        {activePage === "Register" && (
          <Register donors={donors} setDonors={setDonors} />
        )}

        {activePage === "Pulse AI" && <PulseAI />}

        <footer className="app-footer">
          <p>PulseLink © 2026 · Frontend Demonstration Project</p>
        </footer>
      </main>
    </div>
  );
}

export default App;