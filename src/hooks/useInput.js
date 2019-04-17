import { useState, useCallback, useEffect } from 'react';

function useInput(initialValue = '', validators = []) {
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState({ valid: true, error: {} });

  useEffect(() => {
    const validatorError = validators.reduce((acc, validator) => {
      const error = validator(value);
      if (error) {
        acc[error.key] = error.message;
      }
      return acc;
    }, {});
    const errorChange =
      JSON.stringify(validatorError) !== JSON.stringify(errors.error);

    if (errorChange) {
      const areError = !!Object.keys(validatorError).length;
      setErrors({ valid: !areError, error: validatorError });
    }
  }, [value]);

  const onChange = useCallback(function(event) {
    setValue(event.target.value);
  });

  return [value, onChange, errors];
}

export default useInput;
