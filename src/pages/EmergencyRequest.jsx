import { useState } from "react";
import {
  ClipboardList,
  Clock,
  CheckCircle,
  AlertCircle,
  Trash2,
  PlusCircle,
} from "lucide-react";

function EmergencyRequest({ requests, setRequests }) {
  const [formData, setFormData] = useState({
    bloodGroup: "O+",
    units: "1",
    hospital: "",
    location: "",
    urgency: "Normal",
  });

  const updateField = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.hospital.trim() || !formData.location.trim()) {
      alert("Please enter the demo hospital and location.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      ...formData,
      units: Number(formData.units),
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };

    setRequests((previous) => [newRequest, ...previous]);

    setFormData({
      bloodGroup: "O+",
      units: "1",
      hospital: "",
      location: "",
      urgency: "Normal",
    });

    alert("Demo emergency request added successfully!");
  };

  const updateStatus = (id, status) => {
    setRequests((previous) =>
      previous.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  const deleteRequest = (id) => {
    setRequests((previous) =>
      previous.filter((request) => request.id !== id)
    );
  };

  const pendingCount = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const progressCount = requests.filter(
    (request) => request.status === "In Progress"
  ).length;

  const completedCount = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  return (
    <div className="emergency-page">
      <div className="welcome-section">
        <h2>Emergency Blood Requests</h2>
        <p>Create and track fictional emergency blood requests.</p>
      </div>

      <div className="request-stats">
        <div className="request-stat-card">
          <ClipboardList />
          <div>
            <h3>{requests.length}</h3>
            <p>Total Requests</p>
          </div>
        </div>

        <div className="request-stat-card">
          <AlertCircle />
          <div>
            <h3>{pendingCount}</h3>
            <p>Pending</p>
          </div>
        </div>

        <div className="request-stat-card">
          <Clock />
          <div>
            <h3>{progressCount}</h3>
            <p>In Progress</p>
          </div>
        </div>

        <div className="request-stat-card">
          <CheckCircle />
          <div>
            <h3>{completedCount}</h3>
            <p>Completed</p>
          </div>
        </div>
      </div>

      <div className="request-form-card">
        <h3>
          <PlusCircle size={20} /> Create Demo Request
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="filter-grid">
            <div>
              <label>Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={updateField}
              >
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                  (group) => (
                    <option key={group}>{group}</option>
                  )
                )}
              </select>
            </div>

            <div>
              <label>Units Required</label>
              <input
                type="number"
                name="units"
                min="1"
                max="10"
                value={formData.units}
                onChange={updateField}
              />
            </div>

            <div>
              <label>Demo Hospital Name</label>
              <input
                type="text"
                name="hospital"
                placeholder="Example: City Care Hospital"
                value={formData.hospital}
                onChange={updateField}
              />
            </div>

            <div>
              <label>Demo Location</label>
              <input
                type="text"
                name="location"
                placeholder="Example: Rajahmundry"
                value={formData.location}
                onChange={updateField}
              />
            </div>

            <div>
              <label>Urgency</label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={updateField}
              >
                <option>Normal</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          <button type="submit" className="primary-button">
            Submit Demo Request
          </button>
        </form>
      </div>

      <div className="request-history-card">
        <h3>Request Tracking History</h3>

        {requests.length === 0 ? (
          <p>No demo requests available.</p>
        ) : (
          <div className="request-table-wrapper">
            <table className="request-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Blood</th>
                  <th>Units</th>
                  <th>Hospital</th>
                  <th>Location</th>
                  <th>Urgency</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>#{String(request.id).slice(-5)}</td>
                    <td>{request.bloodGroup}</td>
                    <td>{request.units}</td>
                    <td>{request.hospital}</td>
                    <td>{request.location}</td>
                    <td>{request.urgency}</td>
                    <td>{request.date}</td>
                    <td>
                      <select
                        className="request-status"
                        value={request.status}
                        onChange={(e) =>
                          updateStatus(request.id, e.target.value)
                        }
                      >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="delete-request-button"
                        onClick={() => deleteRequest(request.id)}
                        aria-label="Delete demo request"
                      >
                        <Trash2 size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="demo-disclaimer">
          Demo only: request statuses are manually updated and do not represent
          real hospital coordination or blood availability.
        </p>
      </div>
    </div>
  );
}

export default EmergencyRequest;