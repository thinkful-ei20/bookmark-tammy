'use strict';
/* global store, api, bookmarkList*/

// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy';

  let getBookmarks = function(success) {
    $.getJSON(`${BASE_URL}/bookmarks`, success);
  };
  let createBookmark = function(title, url, desc, rating, success, error){
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
      success: success,
      error: error, 
    });
  };

  let deleteBookmark = function(id, success, error) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: success,
      error: error,
    });
  };

  return {
    getBookmarks,
    createBookmark,
    deleteBookmark,
  };

})();
