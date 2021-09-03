import React, {useEffect, useState, useRef} from "react";
import useFocus from "./hooks/useFocus";
import FormData from "./formData";
import "./styles.scss";

function GlobalSearch(props) {
    const environment = props.desktop ? "desktop" : "mobile";

    // These destructuring assignments will result in a constant name and setter
    const [formAction, setFormAction] = useState(FormData.options[0].action);
    const [check, setCheck] = useState(false);
    const [radio, setRadio] = useState(FormData.options[0].id + "-" + environment);
    const [placeholder, setPlaceholder] = useState(FormData.options[0].label);
    const [formData, setFormData] = useState(FormData);

    // Provides us with a reference to the search input
    const inputSearchRef = useRef();

    // Provides us with references to show/hide the mobile search form
    const mobileFormRef = useRef();
    const showHideMobileFormButtonRef = useRef();

    // useFocus is a custom hook which manages 'focus' and 'blur'
    // on the given ref, which is the search input
    const inputFocused = useFocus(inputSearchRef);

    const checkBoxChecked = () => setCheck(!check);

    // useEffect is used to perform side effects
    // in this case it sets the check constant to false.
    // By default, useEffect runs after every render but
    // here the a second argument is passed - inputFocussed
    // which means the hook will run in response to inputFocussed
    useEffect(() => {
        inputFocused && setCheck(false);
    }, [inputFocused]);

    const toggleShowHideMobileCheckbox = (event) => {
        const enter = 13;
        const spacebar = 32;
        if(event.keyCode === spacebar || event.keyCode === enter) {
            event.preventDefault();
            showHideCheckboxRef.current.click();
        }
    }

    const toggleMobileSearch = (event) => {
        console.log("Hello world");
        mobileFormRef.current.classList.toggle("mobileHidden");

        let currentAriaExpandedValue = showHideMobileFormButtonRef.current.getAttribute("aria-expanded");

        let opposingAriaExpandedValue = currentAriaExpandedValue === "false";

        console.log(currentAriaExpandedValue);
        console.log(opposingAriaExpandedValue);

        showHideMobileFormButtonRef.current.setAttribute("aria-expanded", opposingAriaExpandedValue);

    }

    return (
        <React.Fragment>
            {(!props.desktop) && (
                <React.Fragment>
                    <button onClick={toggleMobileSearch} id="toggleMobileSearchButton" aria-expanded={false} ref={showHideMobileFormButtonRef} aria-controls="globalSearchMobileForm">
                        <span class='sr-only'>Show or hide search form</span>
                    </button>
                </React.Fragment>
                )}
                <form aria-label={formData.labels.component} action={formAction} role="search" className={!props.desktop ? "mobileHidden" : null} ref={!props.desktop ? mobileFormRef : null} id="globalSearchMobileForm">

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
                            <div className="select-search-type">
                                <fieldset>
                                    <legend className="sr-only">{formData.labels.select_type}</legend>
                                    {formData.options.map(data => {
                                        return (
                                            <React.Fragment key={data.id  + "-" + props.desktop}>
                                                <div>
                                                <input
                                                    type="radio"
                                                    name="search_options"
                                                    id={data.id + "-" + environment}
                                                    onClick={() => {
                                                        setPlaceholder(data.label);
                                                        setFormAction(data.action);
                                                        setRadio(data.id + "-" + environment);
                                                    }}
                                                    checked={(data.id + "-" + environment) == radio}

                                                    className={props.desktop && "sr-only"}
                                                />
                                                <label htmlFor={data.id  + "-" + environment}>{data.label}</label>
                                                </div>
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
                            name="_q"
                            id={'gs-search-box-' +  environment}
                            ref={inputSearchRef}
                            placeholder={placeholder}
                        />
                        <label htmlFor={'gs-search-box-' +  environment}>
                            <span className="sr-only">{placeholder}</span>
                        </label>
                        <input type="submit" value={formData.labels.submit_search_text}/>
                    </fieldset>
                </form>
        </React.Fragment>

    );
}

export default GlobalSearch;
