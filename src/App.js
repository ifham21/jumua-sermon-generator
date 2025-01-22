import React, { useRef, useState } from 'react';
import InputForm from './components/InputForm';
import ImageLayout from './components/ImageLayout';
import { toPng } from 'html-to-image';

const App = () => {
  const [data, setData] = useState(null);
  const imageRef = useRef();

  const handleGenerate = (formData) => {
    setData(formData);
  };

  const downloadImage = () => {
    if (imageRef.current) {
      toPng(imageRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'jumua-sermons.png';
          link.click();
        })
        .catch((err) => {
          console.error('Error generating image', err);
        });
    }
  };

  return (
    <div>
      <InputForm onGenerate={handleGenerate} />
      {data && (
        <>
          <ImageLayout ref={imageRef} data={data} />
          <button onClick={downloadImage}>Download as PNG</button>
        </>
      )}
    </div>
  );
};

export default App;
