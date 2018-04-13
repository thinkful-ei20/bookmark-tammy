'use strict';
/* global store, api, bookmarkList*/
// eslint-disable-next-line no-unused-vars
const bookmarkList = (function (){

  const generateBookmarkElement = function (bookmark){
    let details = `<div class = 'bookmark-desc'>${bookmark.desc}</div> 
      <div class ='bookmark-controls'>
        <button class='go-to-link'>
          <span class = 'button-label'> Visit </span>
        </button>
        <button class = 'delete'>
          <span class = 'button-label'> X </span>
        </button>`;
    if (bookmark.display !== true) {
      details =`<div class = 'bookmark-desc hidden'>${bookmark.desc}</div>`;
    }
    return `<li class = 'bookmark-list-element' data-item-id= '${bookmark.id}'>
      
      <div class = 'bookmark-title-container'>
        <span class = 'bookmark-title'>  ${bookmark.title}  </span></div>
        <div class = 'bookmark-rating'> ${bookmark.rating}
        </div>
        ${details}
        </li>`;
       
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

    // if (store.showDetails === false) {
    //   $('.details').hide();
    // }



    console.log('render ran');
    console.log(bookmarks);
    const completeBookmarkListString = generateBookmarkList(bookmarks);
    $('.js-bookmark-list').html(completeBookmarkListString);
  };


  //retrieve ids from the server
  function getItemIdFromElement(bookmark) {
    return $(bookmark)
      .closest('.bookmark-list-element')
      .data('item-id');
  }
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

  const handleDisplayDetails = function () {
    $('.js-bookmark-list').on('click','.bookmark-title-container', function(event){
      console.log('title has been clicked');
      const id = getItemIdFromElement(event.currentTarget);
      console.log(id);
      let bookmark = store.findbyID(id);
      store.findAndDisplay(bookmark);
      render ();
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

  const handleVisit = function(){
    
  };
 
  const handleDelete = function(){

  };
  return {
    generateBookmarkElement,
    handleToggleForm,
    handleAddBookmark,
    handleFilterByRating,
    handleDisplayDetails,
    handleVisit,
    handleDelete,
    render,
  };


})();