'use strict';

/* global store, api, bookmark-list*/

$(document).ready(function() {
 
});

api.getBookmarks(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);