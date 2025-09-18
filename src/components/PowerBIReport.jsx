"use client";

import { useState } from "react";

export default function PowerBIReport() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div style={{ 
      width: "100%", 
      height: "90vh", 
      position: "relative",
      backgroundColor: "#f5f5f5"
    }}>
      {/* Loading indicator */}
      {isLoading && (
        <div style={{ 
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <div style={{ marginBottom: "10px", fontSize: "18px" }}>
            Loading Social Media Analysis Report...
          </div>
          <div style={{ fontSize: "14px", color: "#666" }}>
            Please wait while the report loads
          </div>
        </div>
      )}

      {/* Error message */}
      {hasError && (
        <div style={{ 
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          backgroundColor: "#ffe6e6",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ff9999",
          maxWidth: "500px"
        }}>
          <h3 style={{ color: "red", marginBottom: "10px" }}>
            Failed to Load Report
          </h3>
          <p style={{ marginBottom: "15px" }}>
            The PowerBI report could not be loaded. This might be due to:
          </p>
          <ul style={{ textAlign: "left", lineHeight: "1.6" }}>
            <li>Network connectivity issues</li>
            <li>PowerBI service unavailability</li>
            <li>Authentication requirements</li>
            <li>Report permissions</li>
          </ul>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: "15px",
              padding: "8px 16px",
              backgroundColor: "#007acc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Retry
          </button>
        </div>
      )}

      {/* PowerBI Report Iframe */}
      <iframe 
        title="Social Media analysis-wissal report bi" 
        width="100%" 
        height="100%" 
        src="https://app.powerbi.com/reportEmbed?reportId=3f0c7508-b4a3-4eed-a335-106a7e90d978&autoAuth=true&ctid=f93d5f40-88c0-4650-b8f2-cc4ec3ef6a10" 
        frameBorder="0" 
        allowFullScreen={true}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        style={{
          border: "none",
          display: isLoading || hasError ? "none" : "block"
        }}
      />
    </div>
  );
}