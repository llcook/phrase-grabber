import React from "react";

export const NotesList = props => {
  return (
    <>
      <ul id="NotesList">
        {props.children}
      </ul>
    </>
  );
}

export const NotesListItem = props => {
  return <li id="textItem">{props.children}</li>;
}