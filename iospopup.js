    // Detects if device is on iOS
    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };
      // Detects if device is in standalone mode
      const isInStandaloneMode = () =>
        "standalone" in window.navigator && window.navigator.standalone;
  
      // Checks if should display install popup notification:
  
      if (isIos() && !isInStandaloneMode()) {
        if (document.cookie.indexOf("popupShown=true") === -1) {
          document.cookie = "popupShown=true; max-age=172800"; // 86400: seconds in a day
          // set to 5 seconds just for testing
          // this.setState({ showInstallMessage: true });
          setShowInstallMessage(true);
        }
        // setTimeout(() => this.setState({ visible: true }), 6800);
        setTimeout(() => setVisible(true), 6800);
      } else {
        if (document.cookie.indexOf("popupDesktopShown=true") === -1) {
          document.cookie = "popupDesktopShown=true; max-age=172800"; // 86400: seconds in a day
          // set to 5 seconds just for testing
          // setTimeout(() => this.setState({ showPwaMessage: true }), 6800);
          setTimeout(() => setShowPwaMessage(true), 6800);
        }
      }
    }, []);
  
    function onDismiss() {
      setVisible(false);
    }
  
    function onDismissDesk() {
      setShowPwaMessage(false);
    }