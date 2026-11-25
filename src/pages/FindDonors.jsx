
import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Droplet,
  Users,
  Phone,
  Filter,
  Heart,
  UserRoundCheck
} from "lucide-react";

function FindDonors({ donors = [] }) {
  const [bloodGroup, setBloodGroup] = useState("All");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("All");
  const [message, setMessage] = useState("");

  const filteredDonors = useMemo(() => {
    return donors.filter((donor) => {
      const matchesGroup =
        bloodGroup === "All" || donor.group === bloodGroup;

      const matchesLocation =
        donor.city.toLowerCase().includes(location.trim().toLowerCase());

      const matchesAvailability =
        availability === "All" || donor.availability === availability;

      return matchesGroup && matchesLocation && matchesAvailability;
    });
  }, [donors, bloodGroup, location, availability]);

  const handleContact = (name) => {
    setMessage(
      `Demo only: A contact request for ${name} has been simulated. No real message was sent.`
    );
  };

  return (
    <div className="find-donors-page">

      <div className="donor-intro">
        <div>
          <span className="eyebrow">DONOR DISCOVERY</span>
          <h2>Find Blood Donors</h2>
          <p>Explore registered demo donors by blood group and location.</p>
        </div>

        <div className="donor-intro-icon">
          <Heart size={32} />
        </div>
      </div>

      <div className="donor-summary">

        <div>
          <Users size={23} />
          <div>
            <strong>{donors.length}</strong>
            <span>Demo Donors</span>
          </div>
        </div>

        <div>
          <UserRoundCheck size={23} />
          <div>
            <strong>
              {donors.filter(d => d.availability === "Available").length}
            </strong>
            <span>Marked Available</span>
          </div>
        </div>

        <div>
          <Filter size={23} />
          <div>
            <strong>{filteredDonors.length}</strong>
            <span>Search Results</span>
          </div>
        </div>

      </div>

      <div className="donor-filter-card">

        <h3>
          <Filter size={19} />
          Filter Donors
        </h3>

        <div className="filter-grid">

          <div className="filter-field">
            <label>Blood Group</label>
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="All">All Blood Groups</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>

          <div className="filter-field">
            <label>Location</label>
            <div className="filter-input">
              <MapPin size={17} />
              <input
                type="text"
                placeholder="Enter city name"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-field">
            <label>Availability</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="All">All Donors</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

        </div>

        <button
          className="reset-filter"
          onClick={() => {
            setBloodGroup("All");
            setLocation("");
            setAvailability("All");
            setMessage("");
          }}
        >
          Reset Filters
        </button>

      </div>

      {message && (
        <div className="demo-message" role="status">
          {message}
          <button onClick={() => setMessage("")}>Dismiss</button>
        </div>
      )}

      <div className="donor-results-heading">
        <div>
          <h3>Registered Donors</h3>
          <p>Showing {filteredDonors.length} demo results</p>
        </div>

        <span>
          <Droplet size={17} />
          PulseLink Directory
        </span>
      </div>

      <div className="donor-cards-grid">

        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (

            <div className="donor-profile-card" key={donor.id}>

              <div className="donor-card-top">

                <div className="donor-avatar">
                  {donor.name.charAt(0)}
                </div>

                <span className={`status ${
                  donor.availability === "Available"
                    ? "available"
                    : "unavailable"
                }`}>
                  {donor.availability}
                </span>

              </div>

              <h3>{donor.name}</h3>

              <div className="donor-detail">
                <Droplet size={17} />
                <span>Blood Group</span>
                <strong>{donor.group}</strong>
              </div>

              <div className="donor-detail">
                <MapPin size={17} />
                <span>Location</span>
                <strong>{donor.city}</strong>
              </div>

              <button
                className="contact-donor-button"
                onClick={() => handleContact(donor.name)}
                disabled={donor.availability !== "Available"}
              >
                <Phone size={16} />
                {donor.availability === "Available"
                  ? "Request Contact (Demo)"
                  : "Unavailable"}
              </button>

            </div>

          ))
        ) : (

          <div className="no-donors">
            <Search size={35} />
            <h3>No donors found</h3>
            <p>Try changing your blood group or location filters.</p>
          </div>

        )}

      </div>

      <p className="donor-disclaimer">
        Prototype notice: All records are fictional demo data.
        Availability is simulated. Blood group filtering is not a
        transfusion compatibility check. Qualified medical professionals
        must verify compatibility and donor eligibility.
      </p>

    </div>
  );
}

export default FindDonors;
