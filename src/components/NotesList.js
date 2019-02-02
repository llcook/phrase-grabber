import React from "react";

export const NotesList = props => {
  return (
    <>
      <h2> NotesList goes here</h2>
      <ul>
        {props.children}
      </ul>
    </>
  );
}

export const NotesListItem = props => {
  return <li>{props.children}</li>;
}