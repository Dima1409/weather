import Form from 'components/Form';
import City from 'components/City';
import searchWeather from 'api/api';
import { useEffect, useState } from 'react';

const App = () => {
  const [results, setResults] = useState('');
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    async function getCity() {
      try {
        const data = await searchWeather(searchValue);
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCity();
  }, [searchValue]);
  const handleFormSubmit = value => {
    reset();
    setSearchValue(value);
  };

  const reset = () => {
    setResults('');
    setSearchValue('');
  };
  return (
    <>
      <Form onSubmit={handleFormSubmit}></Form>
      {results && <City results={results}></City>}
      {!results && results!=="" && <div>За вашим запитом не знайдено міста, спробуйте ще</div>}
    </>
  );
};

export default App;
