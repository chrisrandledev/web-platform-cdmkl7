function scrollAction(action) {
  if (action === 1) {
    console.log('Scrolling parent to TOP!');
  } else if (action === 2) {
  } else if (action === 3) {
  } else if (action === 4) {
  } else {
    throw new Error('Unable to handle action.');
  }
}
