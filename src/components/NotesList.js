import React from "react";

export const NotesList = props => {
  return (
    <>
      <h2> NotesList goes here</h2>
      <ul id="NotesList">
        {props.children}
      </ul>
    </>
  );
}

export const NotesListItem = props => {
  return <li id="textItem">{props.children}</li>;
}