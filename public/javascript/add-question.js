async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#question-title').value;
    const correct_answer = document.querySelector('#Correct-Choice').value;
    const choiceA = document.querySelector('#Choice-A').value;
    const choiceB = document.querySelector('#Choice-B').value;
    const choiceC = document.querySelector('#Choice-C').value;
    const choiceD = document.querySelector('#Choice-D').value;
    const subject_id = document.querySelector('#subject-choice').value;

    const response = await fetch(`/api/questions`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        correct_answer,
        choiceA,
        choiceB,
        choiceC,
        choiceD,
        subject_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/addquestion');
    } else {
      alert(response.statusText);
    }
  }
  
function return_page(event){
  event.preventDefault();
  document.location.replace('/dashboard/addquestion');
}

document.querySelector('#reset-question').addEventListener('click',return_page)
document.querySelector('#add-question').addEventListener('submit', newFormHandler);
  