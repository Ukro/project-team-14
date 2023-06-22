document.getElementById('video-link').addEventListener('click', function(event) {
    event.preventDefault();
    var iframe = document.getElementById('video-iframe');
 
    iframe.src = 'https://www.youtube.com/embed/SX5aquLnOec';
  });