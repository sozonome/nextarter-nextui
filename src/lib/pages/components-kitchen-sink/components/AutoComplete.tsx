'use client';

import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

import SectionWrapper from '@/lib/pages/components-kitchen-sink/components/SectionWrapper';
import { animals } from '@/lib/pages/components-kitchen-sink/constants';

const AutoComplete = () => {
  return (
    <SectionWrapper title="AutoComplete">
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
    </SectionWrapper>
  );
};

export default AutoComplete;
