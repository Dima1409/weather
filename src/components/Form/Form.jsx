import { SearchForm, InputForm, BtnSubmit } from "./Form.styled";
import { useState } from 'react';


const Form = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
        <InputForm 
        type="text" 
        name="value"
        value={searchQuery}
        onChange={handleChange}
        placeholder="введіть назву міста"
         />
        <BtnSubmit type='submit' disabled={searchQuery.trim()===''}>Пошук</BtnSubmit>
    </SearchForm>
  )
};

export default Form;