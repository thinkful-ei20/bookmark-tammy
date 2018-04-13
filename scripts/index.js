'use strict';

/* global store, api, bookmarkList*/

$(document).ready(function() {
  api.getBookmarks((bookmarks) => {
    bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
    bookmarkList.render();
  });
  bookmarkList.handleAddBookmark();
});