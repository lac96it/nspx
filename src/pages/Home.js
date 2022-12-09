import React, { useLayoutEffect, useRef } from 'react'

import SystemNavigationBar from 'react-native-system-navigation-bar';

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview';
import EvilIcon from "react-native-vector-icons/EvilIcons";
import StatusBar from '../uikits/StatusBar';

import styles from "../uikits/_styles";

const INJECTED_JAVASCRIPT = `(function() {

  window.ReactNativeWebView.postMessage("start");

  function waitUntilExist(selector, max_time = 10000) {

    let count_time = 0;
    window.ReactNativeWebView.postMessage(selector);

    function loopCheckExist() {
      return new Promise(function(resolve) {
        let ele = document.querySelector(selector);

        if (ele) resolve(ele);
        else if (count_time >= max_time) resolve();
        else {
          count_time += 500;
          window.ReactNativeWebView.postMessage("continue_find_ele_" + count_time + "_" + max_time);
          setTimeout(loopCheckExist, 500);
        }
      });
    }

    return loopCheckExist();
  }

  waitUntilExist("#acMdModalWrapper > li:nth-child(25) > div > div.acMdDetailBtnBox.buttonArea.c-u-padding0 > div.untBody.buttonArea__top > div > a > span")
    .then(function(button_title_span) {
      if (button_title_span) {
        window.ReactNativeWebView.postMessage("found span")
        button_title_span.innerHTML = "Đấu giá";
      } else {
        window.ReactNativeWebView.postMessage("not_found_button_title_span")
      }
    })

    waitUntilExist("#acMdModalWrapper > li:nth-child(25) > div > div.acMdDetailBtnBox.buttonArea.c-u-padding0 > div.untBody.buttonArea__top")
      .then(function(button_place_bid) {
        if (button_place_bid) {

          window.ReactNativeWebView.postMessage("found button")

          button_place_bid.replaceWith(button_place_bid.cloneNode(true));

          let a_tag_bid = document.querySelector("#acMdModalWrapper > li:nth-child(25) > div > div.acMdDetailBtnBox.buttonArea.c-u-padding0 > div.untBody.buttonArea__top > div > a");

          a_tag_bid.setAttribute("href", "");
          a_tag_bid.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            a_tag_bid.style.background = "red";
        
            window.ReactNativeWebView.postMessage("place_bid");
          })
        } else {
          window.ReactNativeWebView.postMessage("not_found_button_title_span")
        }
      })

})();`;

export default function HomeScreen() {

  const webviewRef = useRef();

  useLayoutEffect(() => {
    SystemNavigationBar.navigationHide();
  }, []);

  const onMessage = ({nativeEvent}) => {
    console.log("onMessage", nativeEvent.data);
  }

  const onWebviewGoBack = () => {
    console.log(Object.keys(webviewRef.current));
    webviewRef.current.goBack();
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          ref={webviewRef}
          source={{ uri: 'https://page.auctions.yahoo.co.jp/jp/auction/w1065830084' }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          onMessage={onMessage}
        />
      </SafeAreaView>
      <View style={[
        styles.flex_row,
        styles.bg_white,
        {
          minHeight: 70
        },
        styles.px_5
      ]}>
        <TouchableOpacity style={[
          styles.align_items_center,
          styles.justify_content_center,
          {
            minWidth: 50
          }
        ]} onPress={onWebviewGoBack}>
          <EvilIcon name="chevron-left" size={50} style={[styles.text_primary]} />
        </TouchableOpacity>
        <View style={[
          styles.flex_grow_1,
          styles.flex_shrink_1,
          styles.justify_content_center,
        ]}>
          <View style={[
            styles.bg_secondary_4,
            styles.align_items_center,
            styles.justify_content_center,
            {
              height: 40,
              borderRadius: 20
            }
          ]}>
            <Text numberOfLines={1} ellipsizeMode='head'>https://page.auctions.yahoo.co.jp/jp/auction/w1065830084</Text>
          </View>
        </View>
        <View style={[
          styles.align_items_center,
          styles.justify_content_center,
          {
            minWidth: 50
          }
        ]}>
          <EvilIcon name="heart" size={30} />
        </View>
      </View>
    </View>
  )
}