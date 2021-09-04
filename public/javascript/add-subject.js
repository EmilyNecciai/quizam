async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#subject-name').value.trim();
     
    

    if(name){
    const response = await fetch(`/api/subjects`, {
      method: 'POST',
      body: JSON.stringify({
        name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/addsubject');
    } else {
      alert(response.statusText);
    }
  }
}
  document.querySelector('#add-subject').addEventListener('submit', newFormHandler);
  