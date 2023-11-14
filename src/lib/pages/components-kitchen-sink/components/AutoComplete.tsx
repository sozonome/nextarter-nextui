'use client';

import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

import { animals } from '@/lib/pages/components-kitchen-sink/constants';

const AutoComplete = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2>Autocomplete</h2>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Autocomplete label="Select an animal">
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          label="Favorite Animal"
          placeholder="Search an animal"
          defaultItems={animals}
        >
          {(item) => (
            <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>
      </div>
    </section>
  );
};

export default AutoComplete;
