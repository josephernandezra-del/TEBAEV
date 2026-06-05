import React, { createContext, useContext, useState, useEffect } from 'react';

interface EditContextType {
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  getText: (id: string, defaultText: string) => string;
  updateText: (id: string, newText: string) => void;
  resetAll: () => void;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export const EditProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditMode] = useState(true); // Always true as requested
  const [texts, setTexts] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('tebaev_editable_texts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const getText = (id: string, defaultText: string): string => {
    return id in texts ? texts[id] : defaultText;
  };

  const updateText = (id: string, newText: string) => {
    setTexts((prev) => {
      const updated = { ...prev, [id]: newText };
      localStorage.setItem('tebaev_editable_texts', JSON.stringify(updated));
      return updated;
    });
  };

  const resetAll = () => {
    if (window.confirm('¿Estás seguro de que deseas restablecer todos los textos a sus valores originales?')) {
      setTexts({});
      localStorage.removeItem('tebaev_editable_texts');
    }
  };

  const setIsEditMode = () => {}; // No-op, retired function

  return (
    <EditContext.Provider value={{ isEditMode, setIsEditMode, getText, updateText, resetAll }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = () => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
};
