import React, { useRef, useState } from "react";
import InputForm from "./components/InputForm";
import ImageLayout from "./components/ImageLayout";
import { toPng } from "html-to-image";

// Function to return consistent styles for the layout container
const layoutStyles = () => ({
  width: "1000px", // Ensure consistent width
  margin: "0 auto", // Center the layout horizontally
  overflow: "visible", // Avoid clipping
  padding: "20px", // Add padding to prevent content from touching edges
  backgroundColor: "#1c6970", // Example background color
  borderRadius: "10px", // Rounded corners for aesthetic
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow for depth
});

const App = () => {
  const [data, setData] = useState(null);
  const imageRef = useRef();

  // Handle form data and set state
  const handleGenerate = (formData) => {
    setData(formData);
  };

  // Function to download the generated image
  const downloadImage = () => {
    const node = imageRef.current; // Use the ref to access the DOM node
    if (node) {
      toPng(node, {
        width: 1000, // Explicit width
        height: node.scrollHeight, // Dynamically capture height
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "jumua-sermons.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    } else {
      console.error("Image layout node is null.");
    }
  };

  return (
    <div>
      <InputForm onGenerate={handleGenerate} />
      {data && (
        <div style={layoutStyles()}>
          {/* Assign the ref to the wrapper element of ImageLayout */}
          <div id="image-layout" ref={imageRef}>
            <ImageLayout data={data} />
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
              fontSize: "16px",
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
