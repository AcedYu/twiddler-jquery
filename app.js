//javascript functions
//entry feed creation function
// var feed = (username) => {
//   var $app = $('#app');
//   $app.html();
//   var data = removeDupes(streams.home);
//   var index = data.length - 1;
//   var counter = 1;
//   while(index >= 0) {
//     var tweet = data[index];
//     var $tweet = $('<div class="tweet"></div>');
//     $tweet.text(`${counter}@ ${tweet.user}: ${tweet.message}`);
//     $tweet.appendTo($app);
//     index -= 1;
//     counter++;
//   }
// }
var feed = () => {
  var $app = $('#app');
  $app.html('');
  var index = streams.home.length - 1;
  while(index >= 0) {
    var tweet = streams.home[index];
    var time = jQuery.timeago(tweet.created_at);
    var $tweet = $(
      `<div class="tweet">
      <img src = "${tweet.profilePhotoURL}" class = "profile-photo"/>
      <p class = "username" id = "${tweet.user}">@${tweet.user}</p>
      <p class = "message">${tweet.message}</p>
      <p class = "timestamp">${time}</p>
      <img src = "./assets/icons/comment.png" class = "icon comment" />
      <img src = "./assets/icons/retweet.png" class = "icon retweet" />
      <img src = "./assets/icons/like.png" class = "icon like" />
      <img src = "./assets/icons/share.png" class = "icon share" />
      </div>`);
    $tweet.appendTo($app);
    index -= 1;
  }
  $('.username').click(userfeed);
}
var userfeed = (event) => {
  var $app = $('#app');
  $app.html('');
  var name = event.target.id;
  var index = streams.home.length - 1;
  while(index >= 0) {
    var tweet = streams.home[index];
    if (tweet.user === name) {
      var time = jQuery.timeago(tweet.created_at);
      var $tweet = $(
        `<div class="tweet">
        <img src = "${tweet.profilePhotoURL}" class = "profile-photo"/>
        <p class = "username" id = "${tweet.user}">@${tweet.user}</p>
        <p class = "message">${tweet.message}</p>
        <p class = "timestamp">${time}</p>
        <img src = "./assets/icons/comment.png" class = "icon comment" />
        <img src = "./assets/icons/retweet.png" class = "icon retweet" />
        <img src = "./assets/icons/like.png" class = "icon like" />
        <img src = "./assets/icons/share.png" class = "icon share" />
        </div>`);
    $tweet.appendTo($app);
    index -= 1;
    } else {
      index -= 1;
    }
  }
}

// jquery activation on the document
$(document).ready(() => {
  feed(event);
  $('#update-feed').click(feed);
});