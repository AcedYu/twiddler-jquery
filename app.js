var headerSet = () => {
  var $head = $('header');
  var $header = $(
    `<header>
      <h1>Twiddler</h1>
      <div id = "the-button" class="container">
        <div class="center">
          <button id="update-feed">Update Feed</button>
        </div>
      </div>
    </header>`
  );
  $header.appendTo($head);
}

var friendset = () => {
  var $frienddiv = $('#friendlist');
  var $component = $(
    `<h2>Friends List</h2>
      <ul>
      <li class = 'listname' id = 'douglascalhoun'><img src = "./assets/img/douglascalhoun.png" class = "profile-photo"/>douglascalhoun</li>
      <li class = 'listname' id = 'mracus'><img src = "./assets/img/mracus.png" class = "profile-photo"/>mracus</li>
      <li class = 'listname' id = 'sharksforcheap'><img src = "./assets/img/sharksforcheap.png" class = "profile-photo"/>sharksforcheap</li>
      <li class = 'listname' id = 'shawndrost'><img src = "./assets/img/shawndrost.png" class = "profile-photo"/>shawndrost</li>
      </ul>`
    );
  $component.appendTo($frienddiv);

  $('.listname').click(userfeed);
  $('.listname').hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });
}

//default feed function
var feed = () => {
  //Scroll to top of page
  $("html, body").animate({ scrollTop: 0 }, "slow");
  //Locate and delete all items on the app div
  var $app = $('#app');
  $app.html(' ');

  //Create the feed
  var index = streams.home.length - 1;
  while(index >= 0) {
    var tweet = streams.home[index];
    var time = jQuery.timeago(tweet.created_at);
    var $tweet = $(
      `<div class="tweet">
        <table align = "center">
          <thead>
            <tr>
              <th><img src = "${tweet.profilePhotoURL}" class = "profile-photo"/></th>
              <th class = "username" id = "${tweet.user}">@${tweet.user}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class = "message" colspan = "2">${tweet.message}</td>
            </tr>
            <tr>
              <td class = "timestamp" colspan = "2">${time}</td>
            </tr>
            <tr>
              <td colspan = "2" id = "buttonlayout">
                <i class="far fa-comment icon comment" />
                <i class="fas fa-retweet icon retweet" />
                <i class="far fa-thumbs-up icon like" />
                <i class="far fa-share-square icon share" />
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
      </div>`);
    $tweet.appendTo($app);
    index -= 1;
  }

  //assign on click username functions
  $('.username').click(userfeed);

  //assign on hover icon functions
  $("i").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });

  //username on hover functions
  $(".username").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });
}

//userfeed function
var userfeed = (event) => {
  //scroll back to the top of the page
  $("html, body").animate({ scrollTop: 0 }, "slow");
  //locate the app div and delete all items
  var $app = $('#app');
  $app.html(' ');

  //change button text
  $('button').text('Back to Home')

  //event target id will equal username
  var name = event.target.id;
  //create the feed
  var index = streams.home.length - 1;
  while(index >= 0) {
    var tweet = streams.home[index];
    //filter feed by username
    if (tweet.user === name) {
      var time = jQuery.timeago(tweet.created_at);
      var $tweet = $(
        `<div class="tweet">
          <table align = "center">
            <thead>
              <tr>
                <th><img src = "${tweet.profilePhotoURL}" class = "profile-photo"/></th>
                <th class = "username" id = "${tweet.user}">@${tweet.user}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class = "message" colspan = "2">${tweet.message}</td>
              </tr>
              <tr>
                <td class = "timestamp" colspan = "2">${time}</td>
              </tr>
              <tr>
                <td colspan = "2" id = "buttonlayout">
                  <i class="far fa-comment icon comment" />
                  <i class="fas fa-retweet icon retweet" />
                  <i class="far fa-thumbs-up icon like" />
                  <i class="far fa-share-square icon share" />
                </td>
              </tr>
            </tbody>
          </table>
          <br/>
        </div>`);
    $tweet.appendTo($app);
    index -= 1;
    } else {
      index -= 1;
    }
  }

  //assign on hover icon functions
  $("i").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });

  //username on hover functions
  $(".username").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });

  //change button text back on click
  $('button').click(() => {
    $('button').text('Update Feed');
  });
}

// jquery activation on the document
$(document).ready(() => {
  headerSet();
  friendset();
  feed(event);
  $('#update-feed').click(feed);
});