var feed = () => {
  var $app = $('#app');
  $app.html(' ');
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
  $('.username').click(userfeed);
  $("i").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });

  $(".username").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });
}
var userfeed = (event) => {
  var $app = $('#app');
  $app.html(' ');
  var $backbutton = $(
    `<div class="container">
      <div class="center">
        <button id="back">Back To Home</button>
      </div>
    </div>`
  );
  $backbutton.appendTo($app);
  $('#back').click(feed);
  var name = event.target.id;
  var index = streams.home.length - 1;
  while(index >= 0) {
    var tweet = streams.home[index];
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
  $("i").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });

  $(".username").hover(function() {
    $(this).css("color", "lightskyblue");
  }, function() {
    $(this).css("color", "black");
  });
}

// jquery activation on the document
$(document).ready(() => {
  feed(event);
  $('#update-feed').click(feed);
});

  // var $tweet = $(
  //   `<div class="tweet">
  //   <img src = "${tweet.profilePhotoURL}" class = "profile-photo"/>
  //   <p class = "username" id = "${tweet.user}">@${tweet.user}</p>
  //   <p class = "message">${tweet.message}</p>
  //   <p class = "timestamp">${time}</p>
  //   <img src = "./assets/icons/comment.png" class = "icon comment" />
  //   <img src = "./assets/icons/retweet.png" class = "icon retweet" />
  //   <img src = "./assets/icons/like.png" class = "icon like" />
  //   <img src = "./assets/icons/share.png" class = "icon share" />
  //   </div>`);