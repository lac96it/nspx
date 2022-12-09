import React from 'react'

import { View } from 'react-native'
import { WebView } from 'react-native-webview';

const INJECTED_JAVASCRIPT = `(function() {
  var button_get_started = document.querySelector("#__docusaurus > div.main-wrapper.mainWrapper_MB5r.homepage > section.Section.HeaderHero.dark > div.TwoColumns.reverse > div.column.last.left > div > a.ActionButton.primary");

  button_get_started.addEventListener("click", function (e) {
    e.preventDefault();

    window.ReactNativeWebView.postMessage("clicked something");
  })
})();`;

export default function EmbeddWebViewControlled() {

    const onMessage = (event) => {
        console.log("onMessage", JSON.stringify(event, null, 4));
    }

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://reactnative.dev/' }}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                onMessage={onMessage}
            />
        </View>
    )
}