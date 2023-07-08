import React, { useState } from 'react';
import { Image } from 'interfaces/Image';

interface SearchFormProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
}

const SearchForm: React.FC<SearchFormProps> = ({
  setValue,
  setPage,
  setImages,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (searchValue.trim() === '') {
      setIsInputValid(false);
      return;
    }
    setIsInputValid(true);
    setValue(searchValue);
    setImages([]);
    setPage(1);
    setSearchValue('');
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setIsInputValid(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        style={{ borderColor: isInputValid ? '' : 'red' }}
      />
      {!isInputValid && <p style={{ color: 'red' }}>Please enter a value</p>}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
