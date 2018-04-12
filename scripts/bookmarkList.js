'use strict';
/* global store, api, bookmarkList*/
// eslint-disable-next-line no-unused-vars
const bookmarkList = (function (){

  const generateBookmarkElement = function (bookmark){
    // bookmarkRating =  
    
    }
    return `
      <li class = 'bookmark-list-element' data-item-id= '${bookmark.id}'>
      <div class = 'bookmark-title-container'><span class = 'bookmark-title'>  ${bookmark.title}  </span></div>
      <div class = 'bookmark-rating'>
        ${bookmark.rating}
      </div>`;
  };

  const generateBookmarkList = function(bookmarkList) {
    const bookmarks = bookmarkList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  };

  const handleAddBookmark = function (){

  }

  const render = function (){

    if (store.addNewBookmark === true) {
      $('js-form-add-Bookmark')

    let bookmarks = store.bookmarks;
    console.log('render ran');
    const completeBookmarkListString = generateBookmarkList(bookmarks);
    $('.js-bookmark-list').html(completeBookmarkListString);
  };
  return {
    generateBookmarkElement,
    render,
  };
})();