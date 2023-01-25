function test() {
  alert('TEST');
}

function scrollAction(action) {
  console.log(action);

  switch (action) {
    case 1:
      window.parent.scrollTo(0, 0);
      break;
    case 2:
      window.parent.scrollTo(0, element.document.body.scrollHeight);
      break;
    case 3:
      self.scrollTo(0, 0);
      break;
    case 4:
      self.scrollTo(0, element.document.body.scrollHeight);
      break;
    default:
      console.error('An error occurred.');
  }
}
