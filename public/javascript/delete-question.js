async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/questions/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-question-btn').addEventListener('click', deleteFormHandler);
  

  // async function deleteFormHandler(event,id) {
  //   const response = await fetch(`/api/questions/${id}`, {
  //     method: 'DELETE'
  //   });
  
  //   if (response.ok) {
  //     document.location.replace('/dashboard/questions');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }


  // const list = document.querySelector("#question-list").getElementsByTagName("li")
  // console.log(list[0].getElementsByTagName("h4")[0].innerText.toString().split(':')[0])
  // for (var i = 0; i < list.length; i++){
  //   const id = list[i].getElementsByTagName("h4")[0].innerText.toString().split(':')[0];
  //   list[i].querySelector('#delete-subject').addEventListener('click',(event)=>deleteFormHandler(event,id));
  // } 
