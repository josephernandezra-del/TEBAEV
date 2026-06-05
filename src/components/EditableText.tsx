import React, { useRef, useEffect, useState } from 'react';
import { useEdit } from '../context/EditContext';

interface EditableTextProps {
  id: string;
  defaultText: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a';
  className?: string;
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultText,
  as: Component = 'span',
  className = '',
  multiline = false
}) => {
  const { isEditMode, getText, updateText } = useEdit();
  const currentText = getText(id, defaultText);
  const elementRef = useRef<HTMLElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Sync ref text with currentText state when editMode changes or text gets updated from outside
  useEffect(() => {
    if (elementRef.current && !isFocused) {
      // Use innerText to respect line breaks properly
      if (elementRef.current.innerText !== currentText) {
        elementRef.current.innerText = currentText;
      }
    }
  }, [currentText, isFocused]);

  const handleBlur = () => {
    setIsFocused(false);
    if (elementRef.current) {
      const text = elementRef.current.innerText || '';
      updateText(id, text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && !multiline && !e.shiftKey) {
      e.preventDefault();
      elementRef.current?.blur();
    }
  };

  // Render with polished, non-disruptive, always-active edit styling.
  // Feels clean and natural by default, but reveals a gorgeous interactive outline on hover/focus.
  return (
    <Component
      ref={elementRef as any}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
      onFocus={() => setIsFocused(true)}
      onKeyDown={handleKeyDown}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`
        ${className} 
        outline-hidden
        focus:outline-2
        focus:outline-solid
        focus:outline-red-600 
        focus:bg-white/95 
        focus:text-slate-900 
        focus:px-1.5 
        focus:py-0.5
        focus:rounded-lg
        focus:shadow-lg
        hover:bg-red-500/5 
        hover:outline-dashed 
        hover:outline-1 
        hover:outline-red-400/50 
        hover:rounded-md
        cursor-text 
        transition-all 
        duration-150
        inline-block
      `.trim().replace(/\s+/g, ' ')}
      title="Haz doble clic o haz clic para editar este texto"
    >
      {currentText}
    </Component>
  );
};
