import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuest] = useState([])

  useEffect(() => 
  (fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuest(data))
  ), [])

  function addNewQuestion(newQuestion){
    setQuest([...questions, newQuestion])
  }

  function handleDelete(deletedItem){
    const updatedList = questions.filter(question => question.id !== deletedItem.id)
      setQuest(updatedList)
  }
  
  function handleUpdatedItem(updatedItem){
    const updatedList = questions.map(question => {
      if(question.id === updatedItem.id){
        return updatedItem
      }else{return question}
    })
    setQuest(updatedList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onNewQuestion={addNewQuestion}/>
      : <QuestionList newList={questions} handleDelete={handleDelete} handleUpdatedItem={handleUpdatedItem}/>}
    </main>
  );
}

export default App;
