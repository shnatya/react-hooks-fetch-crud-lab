import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({newList, handleDelete, handleUpdatedItem}) {
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
      /* display QuestionItem components here after fetching */
      newList.map(question => <QuestionItem question={question} onDelete={handleDelete} onUpdate={handleUpdatedItem} key={question.id} />)
      }</ul>
    </section>
  );
}

export default QuestionList;
