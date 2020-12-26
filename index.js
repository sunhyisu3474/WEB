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

/* facebook login scripts start */
window.fbAsyncInit = function () {
  FB.init({
    appId: '728053824777344',
    cookie: true,
    xfbml: true,
    version: '3.0'
  });

  /* facebook login status start */
  var callback = function (response) {
    console.log(response);
    // statusChagneCallback(response);
    if (response.status === 'connected') {
      document.querySelector('#authBtn').value = 'LOGOUT';
    } else {
      document.querySelector('#authBtn').value = 'LOGIN';
    }
  }
  FB.getLoginStatus(callback);
};
/* facebook login status end */

/* facebook SDK loading start */
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
      /* facebook SDK loading end */
/* facebook login scripts end */
