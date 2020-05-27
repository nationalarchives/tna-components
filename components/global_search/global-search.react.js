import React, {useEffect, useState, useRef} from "react";
import useFocus from "./hooks/useFocus";
import FormData from "./formData";
import "./styles.scss";

function GlobalSearch(props) {
    const [formAction, setFormAction] = useState(FormData.options[0].action);
    const [check, setCheck] = useState(false);
    const [radio, setRadio] = useState(FormData.options[0].id);
    const [placeholder, setPlaceholder] = useState(FormData.options[0].label);
    const [formData, setFormData] = useState(FormData);

    const environment = props.desktop ? "desktop" : "mobile";

    const inputSearchRef = useRef();
    const inputFocused = useFocus(inputSearchRef);

    const checkBoxChecked = () => setCheck(!check);

    useEffect(() => {
        inputFocused && setCheck(false);
    }, [inputFocused]);

    return (
        <React.Fragment>
            {(!props.desktop) && (
                <React.Fragment>
                    <label id="showHideMobileLabel" htmlFor="showHideMobileCheckbox">
                        <span className={"sr-only"}>Show or hide on mobile</span>
                    </label>
                    <input type="checkbox" id="showHideMobileCheckbox" class={"sr-only"}/>
                </React.Fragment>
                )}
            <div className="App">
                <form aria-label={formData.labels.component} action={formAction} role="search">

                    {props.desktop && (<fieldset>
                        <legend className="sr-only">{formData.labels.search_selector}</legend>
                        <input
                            type="checkbox"
                            id="arrow"
                            name="arrow"
                            onChange={checkBoxChecked}
                            checked={check}
                            className="sr-only"
                        />
                        <label htmlFor="arrow"><span
                            className="sr-only">{formData.labels.search_selector}</span></label>
                    </fieldset>)
                    }

                    {(check || !props.desktop) && (
                        <React.Fragment>
                            <div class="select-search-type">
                                <fieldset>
                                    <legend className="sr-only">{formData.labels.select_type}</legend>
                                    {formData.options.map(data => {
                                        return (
                                            <React.Fragment key={data.id  + "-" + props.desktop}>
                                                <input
                                                    type="radio"
                                                    name="search_options"
                                                    id={data.id + "-" + environment}
                                                    onClick={() => {
                                                        setPlaceholder(data.label);
                                                        setFormAction(data.action);
                                                        setRadio(data.id + "-" + environment);
                                                    }}
                                                    checked={data.id  + "-" + environment == radio}
                                                    className={props.desktop && "sr-only"}
                                                />
                                                <label htmlFor={data.id  + "-" + environment}>{data.label}</label>
                                            </React.Fragment>
                                        );
                                    })}
                                </fieldset>
                            </div>
                        </React.Fragment>

                    )}
                    <fieldset>
                        <legend className="sr-only">{formData.labels.search_query}</legend>
                        <input
                            type="search"
                            name="search"
                            ref={inputSearchRef}
                            placeholder={placeholder}
                            name="_q"
                        />
                        <label htmlFor="search">
                            <span className="sr-only">{placeholder}</span>
                        </label>
                        {!props.desktop ? (<input type="submit" value="Search"/>)
                        : (<input type="submit" />)}
                        
                    </fieldset>
                </form>
            </div>
        </React.Fragment>

    );
}

export default GlobalSearch;
