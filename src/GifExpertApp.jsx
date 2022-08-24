import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifReactApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category, index) => {
        return <GifGrid key={index} category={category} />;
      })}
    </>
  );
};
