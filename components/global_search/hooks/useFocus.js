import { useEffect, useState } from "react";

const useFocus = ref => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);

    const refCurrent = ref.current;
    refCurrent.addEventListener("focus", onFocus);
    refCurrent.addEventListener("blur", onBlur);

    return () => {
      refCurrent.removeEventListener("focus", onFocus);
      refCurrent.removeEventListener("blur", onBlur);
    };
  }, [ref]);

  return state;
};

export default useFocus;
