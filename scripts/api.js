'use strict';
/* global store, api, bookmarkList*/

// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy';

  let getBookmarks = function(callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };
  let createBookmark = function(title, url, desc, rating, callback){
    let newBookmark = JSON.stringify({
      title,
      url,
      desc,
      rating,
    });
    
    $.ajax({
      url:`${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: callback, 
    });
  };

  return {
    getBookmarks,
    createBookmark,
    
  };

})();
