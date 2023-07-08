import React, { useState } from 'react';
import { Image } from 'interfaces/Image';
import { Form, SearchIcon } from './SearchForm.styled';
import { GoSearch } from 'react-icons/go';

interface SearchFormProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
  value: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  setValue,
  setPage,
  setImages,
  value,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (searchValue.trim() === '') {
      setIsInputValid(false);
      return;
    }
    if (searchValue.trim() === value) return;
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
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search images"
        style={{ borderColor: isInputValid ? '' : 'red' }}
      />
      {!isInputValid && (
        <small style={{ color: 'red' }}>Please enter a value</small>
      )}
      <button type="submit">
        <SearchIcon size={'20px'} />
      </button>
    </Form>
  );
};

export default SearchForm;
