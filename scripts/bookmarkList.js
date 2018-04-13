'use strict';
/* global store, api, bookmarkList*/
// eslint-disable-next-line no-unused-vars
const bookmarkList = (function (){

  const generateBookmarkElement = function (bookmark){
    // bookmarkRating =  
    
    return `
      <li class = 'bookmark-list-element' data-item-id= '${bookmark.id}'>
      <div class = 'bookmark-title-container'><span class = 'bookmark-title'>  ${bookmark.title}  </span></div>
      <div class = 'bookmark-rating'>
        ${bookmark.rating}
      </div>`;
  };

  //unifies html of all items in array
  const generateBookmarkList = function(bookmarkList) {
    const bookmarks = bookmarkList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  };

  const handleToggleForm = function () {
    $('.form').hide
  }

  //renders according to the state
  const render = function (){
    // if (store.addNewBookmark === true) {
    //   $('js-form-add-Bookmark');
    // }
    let bookmarks = store.bookmarks;
    console.log('render ran');
    console.log(bookmarks);
    const completeBookmarkListString = generateBookmarkList(bookmarks);
    $('.js-bookmark-list').html(completeBookmarkListString);
  };

  //below here are handler functions    

  const handleAddBookmark = function (){
    $('.submit-button').click(function(event) {
      event.preventDefault();
      console.log('this submit button worked!');
      const newTitle = $('.js-bookmark-list-title').val();
      const newUrl = $('.js-bookmark-list-url').val();
      const desc = $('.js-bookmark-list-desc').val();
      const rating = $('.js-bookmark-list-rating').val();
      console.log(newTitle);
      api.createBookmark(newTitle, newUrl, desc, rating, function(newBookmark) {
        store.addBookmark(newBookmark);
        render();
      });
    });
  };


  return {
    generateBookmarkElement,
    handleAddBookmark,
    render,
  };


})();