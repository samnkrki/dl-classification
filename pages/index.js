import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { ClassificationContainer } from '../src/components/ClassificationContainer';
import { SelectComponent } from '../src/components/Dropdown';
import { ImageUploadButton } from '../src/components/ImageUpload';
import { LoadingComponent } from '../src/components/Loading';
import { fetchCategories, predictImage } from '../src/utils/serviceCalls';

export default function Home() {
  const [datasource, setDatasource] = useState({ imgSrc: null, predictionResponse: null });
  const [loading, setLoading] = useState(false);
  const [allCategoriesData, setAllCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const currentSelected = useMemo(() => {
    return (
      allCategoriesData.find(eachCategory => eachCategory.value === selectedCategory) ?? {
        label: 'Choose category to get started',
        description: 'Select one of the options from dropdown',
      }
    );
  }, [allCategoriesData, selectedCategory]);

  const handleChange = event => {
    setSelectedCategory(event.target.value);
  };

  const uploadImage = async event => {
    setDatasource(prevData => ({
      ...prevData,
      imgSrc: event.target.files[0],
      predictionResponse: null,
    }));
    try {
      setLoading(true);
      const response = await predictImage(event.target.files[0], selectedCategory);
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

  const fetchAllCategories = async () => {
    try {
      setLoading(true);
      const response = await fetchCategories();
      const allDataObj = response.data;
      setAllCategoriesData(
        Object.keys(allDataObj).map((eachKey, index) => {
          return {
            ...allDataObj[eachKey],
            value: eachKey,
          };
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div style={{ margin: 50 }}>
      <Head>
        <title>Guess gardim na ta</title>
      </Head>
      <div>
        <LoadingComponent isOpen={loading} />
        {selectedCategory && <ImageUploadButton onChange={uploadImage} />}
        <SelectComponent options={allCategoriesData} label="Select prediction category" value={selectedCategory} onChange={handleChange} />
        <ClassificationContainer datasource={datasource} currentSelected={currentSelected} />
      </div>
    </div>
  );
}
