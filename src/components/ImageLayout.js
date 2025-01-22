import React from "react";
import { FaMosque, FaMicrophone } from "react-icons/fa";

// List of mosque names to be displayed
const mosqueNames = [
  "Grand Jummah Mosque",
  "Thaika Nagar Jummah Mosque",
  "Konawatta Jummah Mosque",
  "Masjidul Hudha Jummah Mosque Meenodaikattu",
  "Meelad Nagar Jummah Mosque",
  "Sambu Nagar Jummah Mosque",
  "Aalamkulam Jummah Mosque",
  "Masjidur Rahman Jummah Mosque",
  "Masjid Han-Lalath Ibn Aamir",
  "MASJIDUTH THA’WA (CIC)"
];

// ImageLayout component: Responsible for displaying the data in a styled layout
const ImageLayout = React.forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref} // Forwarded ref for capturing this component's DOM for generating an image
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: data.backgroundColor, // Dynamic background color based on form input
        color: "white",
        borderRadius: "10px",
        width: "900px",
        margin: "0 auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", margin: "0" }}>
          DETAILS OF JUMUA SERMONS OF THE MOSQUES IN ADDALAICHENAI
        </h1>
        <p style={{ fontSize: "16px", margin: "5px 0" }}>{data.date}</p>
      </div>

      {/* Display Grand Jummah Mosque separately */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px"
        }}
      >
        {/* Empty Columns for Centering */}
        <div></div>
        {/* Grand Jummah Mosque Section */}
        <div
          style={{
            backgroundColor: "#712b90",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          {/* Mosque Icon */}
          <FaMosque size={30} style={{ marginBottom: "10px" }} />
          <h3 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
            {mosqueNames[0]} {/* Name of the mosque */}
          </h3>
          {/* Speaker Information */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaMicrophone size={16} />
            <p style={{ fontSize: "12px", margin: "0" }}>
              {data.mosques[0]?.speaker || "TBA"} {/* Speaker Name */}
            </p>
          </div>
          <p style={{ fontSize: "12px", margin: "5px 0", fontStyle: "italic" }}>
            ({data.mosques[0]?.designation || "TBA"}) {/* Speaker Designation */}
          </p>
        </div>
        <div></div>
      </div>

      {/* Remaining Mosques Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Three columns
          gap: "20px"
        }}
      >
        {mosqueNames.slice(1).map((name, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#712b90",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <FaMosque size={30} style={{ marginBottom: "10px" }} />
            <h3 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
              {name} {/* Name of the mosque */}
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <FaMicrophone size={16} />
              <p style={{ fontSize: "12px", margin: "0" }}>
                {data.mosques[index + 1]?.speaker || "TBA"} {/* Speaker Name */}
              </p>
            </div>
            <p style={{ fontSize: "12px", margin: "5px 0", fontStyle: "italic" }}>
              ({data.mosques[index + 1]?.designation || "TBA"}) {/* Designation */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ImageLayout;
