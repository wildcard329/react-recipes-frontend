import { useState } from 'react';

const useBoolean = () => {
  const [isTruthy, setIsTruthy] = useState(false);

  const toggleTruthy = () => setIsTruthy(!isTruthy);

  const turnOnTruthy = () => setIsTruthy(true);

  const turnOffTruthy = () => setIsTruthy(false);

  return { isTruthy, toggleTruthy, turnOffTruthy, turnOnTruthy };
};

export default useBoolean;
