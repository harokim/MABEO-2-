import { useState } from "react";
import { useRequests } from "../context/RequestContext";
import { useAuth } from "../context/AuthContext";

export default function Requests() {
  const { user } = useAuth();
  const { requests } = useRequests();

  const myRequests = requests.filter(r => r.clientId === user?.id);

  const [form, setForm] = useState({
    association: "",
    details: ""
  });

  const handleSubmit = () => {
    alert("Request submission handled by backend (placeholder)");
  };

  return (
    <div className="page-bg">
      <div className="page-overlay">
        <div className="container">
          <h1>Request Form</h1>

          <div className="card">
            <input
              placeholder="Association Name"
              onChange={(e) =>
                setForm({ ...form, association: e.target.value })
              }
            />

            <textarea
              placeholder="Request Details"
              onChange={(e) =>
                setForm({ ...form, details: e.target.value })
              }
            />

            <button onClick={handleSubmit}>Submit Request</button>
          </div>

          <div className="card">
            <h3>My Submitted Requests</h3>

            {myRequests.map((r) => (
              <div key={r.id} className="list-item">
                {r.id} — {r.status}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
