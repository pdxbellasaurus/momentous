const neweventFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-newevent').value.trim();
    const description = document.querySelector('#description-newevent').value.trim();

  
    if (title && description) {
      const response = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .getElementById('newevent-form')
  .addEventListener('submit', neweventFormHandler);