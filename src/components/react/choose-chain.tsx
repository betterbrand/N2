import { useEffect,useState } from 'react';

import {
  ChainOption,
  ChooseChainInfo,
  handleSelectChainDropdown,
} from '../types';
import { ChangeChainDropdown } from './chain-dropdown';

export function ChooseChain({
  chainName,
  chainOptions,
  onChange,
}: {
  chainName?: string;
  chainOptions: ChooseChainInfo[];
  onChange: handleSelectChainDropdown;
}) {
  const [selectedItem, setSelectedItem] = useState<ChainOption | undefined>();
  useEffect(() => {
    if (chainName && chainOptions.length > 0)
      setSelectedItem(
        chainOptions.filter((options) => options.chainName === chainName)[0]
      );
    if (!chainName) setSelectedItem(undefined);
  }, [chainName, chainOptions]);
  return (
    <ChangeChainDropdown
      data={chainOptions}
      selectedItem={selectedItem}
      onChange={onChange}
    />
  );
}
