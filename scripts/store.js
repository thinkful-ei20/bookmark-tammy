'use strict';
/* global store, api, bookmarkList*/
// eslint-disable-next-line no-unused-vars
const store = (function () {
  const addBookmark = function(bookmark){
    this.bookmarks.push(bookmark);
  };



  return {
    bookmarks:[],
    addNewBookmark: false,
    addBookmark,
  };
})();