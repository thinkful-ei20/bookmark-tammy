'use strict';
/* global store, api, bookmarkList*/
// eslint-disable-next-line no-unused-vars
const bookmarkList = (function (){

  const generateBookmarkElement = function (bookmark){
    // bookmarkRating =  
    
    return `<li class = 'bookmark-list-element' data-item-id= '${bookmark.id}'>
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


  //renders according to the state
  const render = function (){

    if (store.addNewBookmark === false) {
      $('#js-bookmark-list-form').hide();
      $('.bookmark-list-controls').show();
    } else {
      $('.bookmark-list-controls').hide();
      $('#js-bookmark-list-form').show();
    }

    let bookmarks = store.bookmarks;
    if (store.filterRatingValue !== null) {
      bookmarks = store.bookmarks.filter((bookmark) => bookmark.rating >= store.filterRatingValue);
    }




    console.log('render ran');
    console.log(bookmarks);
    const completeBookmarkListString = generateBookmarkList(bookmarks);
    $('.js-bookmark-list').html(completeBookmarkListString);
  };

  //below here are handler functions    

  const handleToggleForm = function () {
    $('.bookmark-list-controls').on('submit', function(event){
      event.preventDefault();
      console.log('button clicked');
      store.addNewBookmark = !store.addNewBookmark;
      render(); 
    });

  };
  const handleAddBookmark = function (){
    $('.submit-button').click(function(event) {
      event.preventDefault();
      store.addNewBookmark = !store.addNewBookmark;
      console.log('this submit button worked!');
      const newTitle = $('.js-bookmark-list-title').val();
      const newUrl = $('.js-bookmark-list-url').val();
      const desc =  $('.js-bookmark-list-desc').val();
      const rating = $('.js-bookmark-list-rating').val();
      console.log(newTitle);
      api.createBookmark(newTitle, newUrl, desc, rating, function(newBookmark) {
        store.addBookmark(newBookmark);
        render();
      });
    });
  };

  

  const handleFilterByRating = function(){
    $('#js-sort-by-rating').click(function() {
      let ratingValue = $('#js-sort-by-rating').val();
      console.log('rating has been clicked');
      store.setFilterRating(ratingValue);
      render();
    });
  };
 
  return {
    generateBookmarkElement,
    handleToggleForm,
    handleAddBookmark,
    handleFilterByRating,
    render,
  };


})();