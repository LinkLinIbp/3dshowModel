import React, { createContext, useState } from 'react';

export const CanvasContext = createContext();

export function CanvasProvider({ children }) {
  const [pinPointIndex, setPinPointIndex] = useState();

  const selectPinPointIndex = (index) => {
    setPinPointIndex(index);
  };

  const clearPinPointIndex = () => {
    setPinPointIndex(undefined);
  };

  return (
    <CanvasContext.Provider value={{ pinPointIndex, selectPinPointIndex, clearPinPointIndex }}>
      {children}
    </CanvasContext.Provider>
  );
}