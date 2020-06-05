
import React, { createContext,  useState } from 'react';

export const ErrorsContext = createContext();

const ErrorsContextProvider = (props) => {

  const [ fetchingError, setFetchingError ] = useState(false);

  return (
    <ErrorsContext.Provider
      value={{
        fetchingError,
        setFetchingError,
      }}
    >
      {props.children}
    </ErrorsContext.Provider>
  )

}

export default ErrorsContextProvider;