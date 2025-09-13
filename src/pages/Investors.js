import React from "react";

function Investors() {
  const documents = [
    { name: "Consolidated Financials 31.3.2024 (Special purpose)", type: "pdf" },
    { name: "Consolidated Financials 31.3.2023 (Special purpose)", type: "pdf" },
    { name: "Standalone Financials 31.3.2025", type: "pdf" },
    { name: "Standalone Financials 31.3.2024", type: "pdf" },
    { name: "Standalone Financials 31.3.2023", type: "pdf" },
    { name: "DRHP", type: "pdf" },
    { name: "Draft Red Herring Prospectus (DRHP) Audio Visual (English)", type: "video" },
    { name: "Draft Red Herring Prospectus (DRHP) Audio Visual (Hindi)", type: "video" },
    { name: "Industry Report", type: "pdf" },
  ];

  return (
    <div className="investors-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Initial Public Offering – IPO</h1>
      </div>

      {/* Documents Section */}
      <div className="docs-section">
        <h2>Downloads & Reports</h2>
        <div className="docs-list">
          {documents.map((doc, index) => (
            <div key={index} className="doc-card">
              <div className="doc-left">
                <span className={`doc-badge ${doc.type}`}>{doc.type === "pdf" ? "PDF" : "AV"}</span>
                <p>{doc.name}</p>
              </div>
              <button className="doc-btn">
                {doc.type === "pdf" ? "⬇" : "▶"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Investors;
