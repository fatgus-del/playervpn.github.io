function requestNotificationPermission() {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log("Permission granted for notifications.");
        } else {
          console.log("Permission denied for notifications.");
        }
      });
    }
  }
  
  function isUserOnWebsite() {
    return window.location.href === "https://playervpn.github.io/";
  }
  
  function showNotification(title, body) {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body: body,
        icon: 'https://i.ibb.co/N75vkX7/PVPN.png',
      });
  
      notification.onclick = function () {
        window.open('https://playervpn.github.io/', '_blank');
      };
    }
  }
  
  function startInactivityTimer() {
    let timer;
  
    function resetTimer() {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        if (!isUserOnWebsite()) {
          showNotification(
            "Woah, you've been gone a while!",
            "Come play again, or even search, watch movies and shows, or talk to our AI!"
          );
        }
      }, 1000);
    }
  
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('scroll', resetTimer);
  
    resetTimer();
  }

  window.onload = function () {
    requestNotificationPermission();
    startInactivityTimer();
  };
  
