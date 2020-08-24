async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];
    await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  