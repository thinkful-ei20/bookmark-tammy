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

  // const findAndShowDetails = function (id) {
  //   let targetBookmark = this.bookmarks(bookmark => bookmark.id === id);
  //  console.log(targetBookmark;)
  // };

  return {
    bookmarks:[],
    addNewBookmark: false,
    filterRatingValue: null,
    displayDetails: false,

    findbyID,
    addBookmark,
    setFilterRating,
    //findAndShowDetails,

  };
})();