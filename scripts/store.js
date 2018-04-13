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
  };

  const openURL = function (bookmark){
    console.log(bookmark);
    let url = bookmark.url;
    window.open(url, '_blank');
  };

  const deleteBookmark = function(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };

  const setError = function (errorThrown) {
    this.error = $('.error-message').text(errorThrown);
    return this.error = null;
  };

  return {
    bookmarks:[],
    addNewBookmark: false,
    filterRatingValue: null,
    displayDetails: false,
    error: null,

    findbyID,
    addBookmark,
    setFilterRating,
    findAndDisplay,
    openURL,
    deleteBookmark,
    setError,
  };
})();