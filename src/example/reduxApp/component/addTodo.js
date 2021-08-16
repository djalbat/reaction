"use strict";

import { React } from "../../../index"; ///

import { ADD_TODO, EMPTY_STRING } from "../constants";

let id = 0,
    inputDOMElement;

const AddTodo = (props, context) => {
  const { store } = context;

  return (

    <div>
      <input ref={(domElement) => {

               inputDOMElement = domElement;

             }}
      />
      <button onClick={() => {

                const type = ADD_TODO,
                      text = inputDOMElement.value,  ///
                      action = {
                        type,
                        text,
                        id
                      };

                id++;

                store.dispatch(action);

                inputDOMElement.value = EMPTY_STRING;

              }}
      >
        Add todo
      </button>
    </div>

  );
};

export default AddTodo;
