async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="question-title"]').value;
    const correct_answer = document.querySelector('input[name="question-correct"]').value;
    const choiceA = document.querySelector('input[name="answerA"]').value;
    const choiceB = document.querySelector('input[name="answerB"]').value;
    const choiceC = document.querySelector('input[name="answerC"]').value;
    const choiceD = document.querySelector('input[name="answerD"]').value;
    // const subject_id = document.querySelector('input[name="subject"]').value;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        correct_answer,
        choiceA,
        choiceB,
        choiceC,
        choiceD
        // ,
        // subject_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.save-question-form').addEventListener('submit', editFormHandler);
  