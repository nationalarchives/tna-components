import React, { useEffect, useState, useRef } from "react";
import useFocus from "./hooks/useFocus";
import FormData from "./formData";
import "./styles.scss";

function GlobalSearch() {
  const [formAction, setFormAction] = useState("Search our website");
  const [check, setCheck] = useState(false);
  const [placeholder, setPlaceholder] = useState("Website search");
  const [formData, setFormData] = useState(FormData);

  const inputSearchRef = useRef();
  const inputFocused = useFocus(inputSearchRef);

  const checkBoxChecked = () => setCheck(!check);

  useEffect(() => {
    inputFocused && setCheck(false);
  }, [inputFocused]);

  return (
    <div className="App">
      <form action={formAction}>
        <label htmlFor="arrow">Arrow</label>
        <input
          type="checkbox"
          id="arrow"
          name="arrow"
          onChange={checkBoxChecked}
          checked={check}
        />
        <input
          type="text"
          id="search"
          ref={inputSearchRef}
          placeholder={placeholder}
        />
        {check && (
          <React.Fragment>
            {formData.map(data => {
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
                    }}
                  />
                </React.Fragment>
              );
            })}
          </React.Fragment>
        )}
        <button>Search</button>
      </form>
    </div>
  );
}

export default GlobalSearch;
