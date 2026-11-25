
import { useState } from "react";
import {
  UserPlus,
  UserRound,
  Droplet,
  MapPin,
  CheckCircle,
  Users,
  Heart,
  RotateCcw
} from "lucide-react";

function Register({ donors, setDonors }) {
  const [form, setForm] = useState({
    name: "",
    group: "",
    city: "",
    availability: "Available",
    acknowledgement: false
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.group || !form.city.trim()) {
      setMessage("Please complete all required fields.");
      return;
    }

    if (!form.acknowledgement) {
      setMessage("Please acknowledge the verification notice.");
      return;
    }

    const newDonor = {
      id: Date.now(),
      name: form.name.trim(),
      group: form.group,
      city: form.city.trim(),
      availability: form.availability
    };

    setDonors((previous) => [newDonor, ...previous]);

    setForm({
      name: "",
      group: "",
      city: "",
      availability: "Available",
      acknowledgement: false
    });

    setMessage("Demo donor registration added successfully!");
  };

  const handleReset = () => {
    setForm({
      name: "",
      group: "",
      city: "",
      availability: "Available",
      acknowledgement: false
    });
    setMessage("");
  };

  const availableCount = donors.filter(
    donor => donor.availability === "Available"
  ).length;

  return (
    <div className="register-page">

      <div className="register-intro">
        <div>
          <span className="eyebrow">JOIN OUR DONOR NETWORK</span>
          <h2>Become a Part of PulseLink</h2>
          <p>Explore donor registration using fictional demo details.</p>
        </div>

        <div className="register-intro-icon">
          <Heart size={34} />
        </div>
      </div>

      <div className="register-stats">

        <div className="register-stat-card">
          <Users size={25} />
          <div>
            <strong>{donors.length}</strong>
            <span>Demo Registrations</span>
          </div>
        </div>

        <div className="register-stat-card">
          <CheckCircle size={25} />
          <div>
            <strong>{availableCount}</strong>
            <span>Marked Available</span>
          </div>
        </div>

      </div>

      <div className="register-layout">

        <div className="register-form-card">

          <div className="register-card-heading">
            <h3>
              <UserPlus size={21} />
              Donor Registration
            </h3>
            <p>Enter fictional details to test the form.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="register-field">
              <label>
                <UserRound size={16} />
                Donor Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter demo name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="register-field">
              <label>
                <Droplet size={16} />
                Blood Group *
              </label>
              <select
                name="group"
                value={form.group}
                onChange={handleChange}
                required
              >
                <option value="">Select Blood Group</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                  group => (
                    <option key={group} value={group}>{group}</option>
                  )
                )}
              </select>
            </div>

            <div className="register-field">
              <label>
                <MapPin size={16} />
                City / Location *
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter demo city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="register-field">
              <label>Availability Status</label>
              <select
                name="availability"
                value={form.availability}
                onChange={handleChange}
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            <label className="register-acknowledgement">
              <input
                type="checkbox"
                name="acknowledgement"
                checked={form.acknowledgement}
                onChange={handleChange}
              />
              <span>
                I understand this is a demo registration and actual donor
                eligibility must be verified by a qualified blood bank or
                medical professional.
              </span>
            </label>

            {message && (
              <div
                className={`register-message ${
                  message.includes("successfully") ? "success" : "error"
                }`}
                role="status"
              >
                {message}
              </div>
            )}

            <div className="register-form-actions">
              <button type="submit" className="register-submit">
                <UserPlus size={17} />
                Add Demo Registration
              </button>

              <button
                type="button"
                className="register-reset"
                onClick={handleReset}
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>

          </form>

          <p className="register-disclaimer">
            Demonstration only. No real donor account is created and
            no information is sent to a hospital or blood bank.
          </p>

        </div>

        <div className="register-info-card">

          <div className="register-info-icon">
            <Heart size={25} />
          </div>

          <h3>Why Join PulseLink?</h3>

          <p>
            This prototype demonstrates how a digital platform could
            organize donor information.
          </p>

          {[
            "Simple registration interface",
            "Blood group categorization",
            "Location-based organization",
            "Availability status display"
          ].map(item => (
            <div className="register-info-point" key={item}>
              <CheckCircle size={18} />
              {item}
            </div>
          ))}

          <div className="register-info-warning">
            Actual donation decisions require medical screening and
            professional confirmation. This page does not determine
            eligibility.
          </div>

        </div>

      </div>

      <div className="registered-donors-card">

        <div className="registered-donors-heading">
          <div>
            <h3>Registered Demo Donors</h3>
            <p>Shared donor records across PulseLink pages</p>
          </div>
          <span>{donors.length} Records</span>
        </div>

        <div className="registered-donors-grid">

          {donors.map(donor => (

            <div className="registered-donor-item" key={donor.id}>

              <div className="registered-donor-avatar">
                {donor.name.charAt(0).toUpperCase()}
              </div>

              <div className="registered-donor-details">
                <strong>{donor.name}</strong>
                <span>
                  <MapPin size={13} />
                  {donor.city}
                </span>
              </div>

              <div className="registered-donor-meta">
                <strong>{donor.group}</strong>
                <span className={
                  donor.availability === "Available"
                    ? "available"
                    : "unavailable"
                }>
                  {donor.availability}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Register;
