import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Accordion = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "closed",
  });

  return (
    <div className={`accordion ${state.state} ${className}`}>
      <div className="headline-and-icon-of">
        <div className="headline">Headline</div>
        <div
          className="group"
          onClick={() => {
            dispatch("click");
          }}
        >
          <img
            className="vector"
            alt="Vector"
            src={`https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/solid/caret-${state.state === "closed" ? "down" : "up"}.svg`}
          />
        </div>
      </div>
      {state.state === "open" && (
        <>
          <img className="img" alt="Vector" src="https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/solid/caret-up.svg" />
          <p className="this-is-accordion">This is accordion text content.</p>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "closed") {
    switch (action) {
      case "click":
        return {
          state: "open",
        };
    }
  }

  if (state.state === "open") {
    switch (action) {
      case "click":
        return {
          state: "closed",
        };
    }
  }

  return state;
}

Accordion.propTypes = {
  stateProp: PropTypes.oneOf(["closed", "open"]),
};
