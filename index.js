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

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    testAPI();
  } else {                                 // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}


function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function (response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}


window.fbAsyncInit = function () {
  FB.init({
    appId: '{app-id}',
    cookie: true,                     // Enable cookies to allow the server to access the session.
    xfbml: true,                     // Parse social plugins on this webpage.
    version: '{api-version}'           // Use this Graph API version for this call.
  });


  FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
    statusChangeCallback(response);        // Returns the login status.
  });
};

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function (response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
