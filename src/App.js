import React, { useRef, useState } from "react";
import InputForm from "./components/InputForm";
import ImageLayout from "./components/ImageLayout";
import { toPng } from "html-to-image";

// Layout styling function
const layoutStyles = () => ({
  width: "1000px", // Fixed width for consistency
  margin: "0 auto", // Center the layout
  overflow: "visible", // Avoid clipping
  padding: "20px",
  backgroundColor: "#1c6970", // Background color
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" // Shadow for a neat effect
});

const App = () => {
  const [data, setData] = useState(null); // State to store form data
  const imageRef = useRef(); // Ref to capture the layout DOM element

  // Handle form submission and update data
  const handleGenerate = (formData) => {
    setData(formData);
  };

  // Generate and download the PNG image
  const downloadImage = () => {
    const node = imageRef.current; // DOM node reference
    if (node) {
      toPng(node, {
        width: 1000, // Image width
        height: node.scrollHeight // Dynamic height
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "jumua-sermons.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => console.error("Error generating image:", error));
    } else {
      console.error("Image layout node is null.");
    }
  };

  return (
    <div>
      <InputForm onGenerate={handleGenerate} /> {/* Form for user input */}
      {data && (
        <div style={layoutStyles()}>
          <div id="image-layout" ref={imageRef}>
            <ImageLayout data={data} /> {/* Render the layout */}
          </div>
          <button
            onClick={downloadImage}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#712b90",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Download as PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
