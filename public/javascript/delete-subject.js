async function deleteFormHandler(event,id) {
    const response = await fetch(`/api/subjects/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/subjects');
    } else {
      alert(response.statusText);
    }
  }


  const list = document.querySelector("#subject-list").getElementsByTagName("li")
  console.log(list[0].getElementsByTagName("h2")[0].innerText.toString().split(':')[0])
  for (var i = 0; i < list.length; i++){
    const id = list[i].getElementsByTagName("h2")[0].innerText.toString().split(':')[0];
    list[i].querySelector('#delete-subject').addEventListener('click',(event)=>deleteFormHandler(event,id));
  } 
