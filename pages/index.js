import { useState } from 'react';
import { ClassificationContainer } from '../src/components/ClassificationContainer';
import { ImageUploadButton } from '../src/components/ImageUpload';
import { predictImage } from '../src/utils/serviceCalls';

export default function Home() {
  const [datasource, setDatasource] = useState({ imgSrc: null, predictionResponse: null });
  const [loading, setLoading] = useState(false);

  const uploadImage = async event => {
    setDatasource(prevData => ({
      ...prevData,
      imgSrc: event.target.files[0],
      predictionResponse: null,
    }));
    try {
      setLoading(true);
      const response = await predictImage(event.target.files[0]);
      setDatasource(prevData => ({
        ...prevData,
        predictionResponse: response.data,
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={{ margin: 50 }}>
      <div>
        <ImageUploadButton onChange={uploadImage} />
        <ClassificationContainer datasource={datasource} />
      </div>
    </div>
  );
}
