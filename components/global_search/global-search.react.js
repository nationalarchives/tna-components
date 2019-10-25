import React, { useEffect, useState, useRef } from "react";
import useFocus from "./hooks/useFocus";
import FormData from "./formData";
import "./styles.scss";

function GlobalSearch() {
  const [formAction, setFormAction] = useState(FormData.options[0].action);
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState(FormData.options[0].id);
  const [placeholder, setPlaceholder] = useState(FormData.options[0].label);
  const [formData, setFormData] = useState(FormData);

  const inputSearchRef = useRef();
  const inputFocused = useFocus(inputSearchRef);

  const checkBoxChecked = () => setCheck(!check);

  useEffect(() => {
    inputFocused && setCheck(false);
  }, [inputFocused]);

  return (
    <div className="App">
      <form action={formAction} role="search">
        <input
            type="checkbox"
            id="arrow"
            name="arrow"
            onChange={checkBoxChecked}
            checked={check}
            className="sr-only"
        />
        <label htmlFor="arrow"><span className="sr-only">Arrow</span></label>
        {check && (
            <React.Fragment>
              {formData.options.map(data => {
                return (
                    <React.Fragment key={data.id}>
                      <label htmlFor={data.id}>{data.label}</label>
                      <input
                          type="radio"
                          name="search_options"
                          id={data.id}
                          onClick={() => {
                            setPlaceholder(data.label);
                            setFormAction(data.action);
                            setRadio(data.id);
                          }}
                          checked={data.id == radio}
                      />
                    </React.Fragment>
                );
              })}
            </React.Fragment>
        )}
        <input
          type="text"
          id="search"
          ref={inputSearchRef}
          placeholder={placeholder}
          name="_q"
        />
        <input
          type="submit"
        />
      </form>
    </div>
  );
}

export default GlobalSearch;
