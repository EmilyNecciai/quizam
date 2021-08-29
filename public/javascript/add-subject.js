async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="subject-name"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-subject-form').addEventListener('submit', newFormHandler);
  