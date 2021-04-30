import React, { Component } from "react";

class KommunicateChat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        onInit: function () {
          var css = ""; // Replace <YOUR_CSS_CODE_HERE> with the CSS you want to override.
          Kommunicate.customizeWidgetCss(css);
        },
        appId: "3fc937fa9bc8c8b1cf7beb7b54dd71803",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return <div />;
  }
}

export default KommunicateChat;
