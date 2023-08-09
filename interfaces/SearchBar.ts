import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  setHintSearch: Dispatch<SetStateAction<string>>;
}
