'use strict';
/* global store, api, bookmark-list*/
// eslint-disable-next-line no-unused-vars

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy/';

  let getBookmarks = function(callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  
} )();
