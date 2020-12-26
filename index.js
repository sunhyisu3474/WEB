var setList = {
  setColor: function (color) {
    var alist = document.querySelectorAll('a');
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.color = color;
    }
  }
}

var setBody = {
  modeChange: function (self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {  /* 야간모드로 변경 */
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      setList.setColor('white');
      self.value = 'day';
    } else {  /* 주간모드로 변경 */
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      setList.setColor('black');
      self.value = 'night';
    }
  }
}
