function test() {
  alert('TEST');
}

function scrollAction(action) {
  console.log('Action: ' + action);
  switch (action) {
    case 1:
      window.parent.scrollTo(0, 0);
      break;
    case 2:
      window.parent.scrollTo(0, window.parent.document.body.scrollHeight);
      break;
    case 3:
      document.getElementById('iframe1').contentWindow.scrollTo(0, 0);
      break;
    case 4:
      document
        .getElementById('iframe1')
        .contentWindow.scrollTo(0, document.body.scrollHeight);
      break;
    default:
      console.error('An error occurred.');
  }
}
