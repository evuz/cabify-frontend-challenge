import { useState } from 'react';

function useSelectOpen(disabled) {
  const [ignoreNextBlur, setIgnoreNextBlur] = useState();
  const [open, setOpen] = useState(false);

  function handleFocus(value = true) {
    if (disabled) {
      return;
    }

    if (typeof value === 'boolean') {
      if (value) {
        setIgnoreNextBlur(true);
      }
      setOpen(value);
    } else {
      setIgnoreNextBlur(false);
      setOpen(true);
    }
  }

  function handleBlur(ev) {
    if (ignoreNextBlur) {
      ev.stopPropagation();
      setIgnoreNextBlur(false);
      return;
    }
    setOpen(false);
  }

  function handleKeyDown(ev) {
    if (disabled) {
      return;
    }
    const openPressed =
      ['ArrowUp', 'ArrowDown', 'Enter'].indexOf(ev.key) !== -1;

    if (openPressed) {
      ev.preventDefault();
      // Opening the menu is going to blur the. It will be focused back when closed.
      setIgnoreNextBlur(true);
      setOpen(true);
    }
  }

  return { open, handleBlur, handleFocus, handleKeyDown };
}

export default useSelectOpen;
