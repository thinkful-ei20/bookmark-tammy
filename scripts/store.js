'use strict';
/* global store, api, bookmarkList*/
// eslint-disable-next-line no-unused-vars
const store = (function () {
  const addBookmark = function(bookmark){
    this.bookmarks.push(bookmark);
  };

  const setFilterRating = function (ratingvalue) {
    this.filterRatingValue = ratingvalue;
  };


  return {
    bookmarks:[],
    addNewBookmark: false,
    filterRatingValue: null,
    addBookmark,
    setFilterRating,

  };
})();