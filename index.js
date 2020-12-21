function modeChange() {
  if (document.querySelector('#modeChange').value === 'night') {
    document.querySelector('body').style.backgroundColor = 'black'; document.querySelector('body').style.color = 'white'; value = 'day';
  } else {
    document.querySelector('body').style.backgroundColor = 'white'; document.querySelector('body').style.color = 'black'; value = 'night'
  }
}
