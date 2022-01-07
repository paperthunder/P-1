
document.querySelector('button').addEventListener('click', function () {
  history.pushState({ data: 'frame' }, 'title을 pushState로', '/file:///C:/Users/user/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/programming/P-1/views/write.html')
});

window.addEventListener('popstate', function () {
    console.log('popstate', history.state);
    document.querySelector('#state').innerHTML = JSON.stringify(history.state);
  });


