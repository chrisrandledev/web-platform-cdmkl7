function scrollAction(action) {
  console.log('Action: ' + action);
  var iframe = document.getElementById('iframe1');
  switch (action) {
    case 1:
      window.parent.scrollTo(0, 0);
      break;
    case 2:
      window.parent.scrollTo(0, window.parent.document.body.scrollHeight);
      break;
    case 3:
      if (iframe) iframe.contentWindow.scrollTo(0, 0);
      break;
    case 4:
      if (iframe) iframe.contentWindow.scrollTo(0, iframe.scrollHeight);
      break;
    default:
      console.error('An error occurred.');
  }
}
