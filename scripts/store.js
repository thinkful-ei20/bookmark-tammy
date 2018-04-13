'use strict';
/* global store, api, bookmarkList*/
// eslint-disable-next-line no-unused-vars
const store = (function () {
  const addBookmark = function(bookmark){
    this.bookmarks.push(bookmark);
  };

  const findbyID = function(id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };
  const setFilterRating = function (ratingvalue) {
    this.filterRatingValue = ratingvalue;
  };

  //takes in bookmark object
  const findAndDisplay = function (bookmark) {
    bookmark.display = !bookmark.display;
    console.log(bookmark);
  };

  return {
    bookmarks:[],
    addNewBookmark: false,
    filterRatingValue: null,
    displayDetails: false,

    findbyID,
    addBookmark,
    setFilterRating,
    findAndDisplay,

  };
})();