import { ReactElement, createContext, useContext } from 'react';
import { AxiosInstance } from 'axios';

type APIConfig = {
  baseURL: string;
};
export interface BuilderConfigType {
  axios: AxiosInstance;
  cartConf: APIConfig;
  catalogConf: APIConfig;
}

interface BuilderConfigProps {
  value: BuilderConfigType;
  children: ReactElement;
}

const BuilderConfigContext = createContext<BuilderConfigType | undefined>(
  undefined
);

export const BuilderConfigProvider = ({
  value,
  children,
}: BuilderConfigProps) => {
  return (
    <BuilderConfigContext.Provider value={value}>
      {children}
    </BuilderConfigContext.Provider>
  );
};

export const useBuilderConfigContext = () => {
  const context = useContext(BuilderConfigContext);

  if (context === undefined) {
    throw new Error(
      'useBuilderConfigContext must be used within a BuilderConfigContext'
    );
  }
  return context;
};
