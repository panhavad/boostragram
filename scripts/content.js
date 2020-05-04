//welcome message
console.log("I AM LISTENING!! COMMANDER!");

//variable declaration
var intervalSecond = 2000;
var likeCounter = 100;
var unlikeCounter = 100;
var autoLikeState = false;
var autoUnlikeState = false;

//image variable
var autoLikeLogoOff = chrome.extension.getURL("/resources/images/like-off.svg");
var autoLikeLogoOn = chrome.extension.getURL("/resources/images/like-on.svg");
var autoUnlikeLogoOn = chrome.extension.getURL(
  "/resources/images/unlike-on.svg"
);
var autoUnlikeLogoOff = chrome.extension.getURL(
  "/resources/images/unlike-off.svg"
);

//add auto like button element to the loaded webpage
$(
  "<input class='Fifk5' id='mashLikeBtn' type='image' alt='autoLike' src='" +
    autoLikeLogoOff +
    "' height='22' width='22'/><sup style='font-size: xx-small' id='supLikeCounter'>" +
    likeCounter +
    "</sup>"
).appendTo("._47KiJ");

//add auto unlike button element to the loaded webpage
$(
  "<input class='Fifk5' id='mashUnlikeBtn' alt='autoUnlike' type='image' src='" +
    autoUnlikeLogoOff +
    "' height='22' width='22'/><sup style='font-size: xx-small' id='supUnlikeCounter'>" +
    unlikeCounter +
    "</sup>"
).appendTo("._47KiJ");

//handel when button auto like click
$("#mashLikeBtn").click(function () {
  if (autoLikeState) {
    console.log("STOP LIKE PROGRESS!");
    $("#mashLikeBtn").attr("src", autoLikeLogoOff);
    likeCounter = 0;
    autoLikeState = false;
  } else {
    $("#mashLikeBtn").attr("src", autoLikeLogoOn);
    autoLikeState = true;
    var autoReaction = setInterval(function () {
      $("#supLikeCounter").text(likeCounter);
      var likeObj = $($(".fr66n > button > svg[aria-label='Like']")[0]);
      console.log(likeObj);
      try {
        likeObj.get(0).scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        setTimeout(() => {
          likeObj.parent().trigger("click");
        }, 1000);
        likeCounter = likeCounter - 1;
      } catch (error) {
        window.scrollBy(0, 500);
      }
      console.log(likeCounter);
      if (likeCounter <= 0) {
        $("#supLikeCounter").text(likeCounter);
        console.log("LIKE COUNTER 0");
        likeCounter = 100;
        $("#supLikeCounter").text(likeCounter);
        autoLikeState = false;
        $("#mashLikeBtn").attr("src", autoLikeLogoOff);
        clearInterval(autoReaction);
      }
    }, intervalSecond);
  }
});

//handel when button auto unlike click
$("#mashUnlikeBtn").click(function () {
  if (autoUnlikeState) {
    console.log("STOP LIKE PROGRESS!");
    $("#mashUnlikeBtn").attr("src", autoUnlikeLogoOff);
    unlikeCounter = 0;
    autoUnlikeState = false;
  } else {
    $("#mashUnlikeBtn").attr("src", autoUnlikeLogoOn);
    autoUnlikeState = true;
    var autoReaction = setInterval(function () {
      $("#supUnlikeCounter").text(unlikeCounter);
      var unlikeObj = $($(".fr66n > button > svg[aria-label='Unlike']")[0]);
      console.log(unlikeObj);
      try {
        unlikeObj.get(0).scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        setTimeout(() => {
          unlikeObj.parent().trigger("click");
        }, 1000);
        unlikeCounter = unlikeCounter - 1;
      } catch (error) {
        window.scrollBy(0, 500);
      }
      console.log(unlikeCounter);
      if (unlikeCounter <= 0) {
        $("#supUnlikeCounter").text(unlikeCounter);
        console.log("UNLIKE COUNTER 0");
        unlikeCounter = 100;
        $("#supUnlikeCounter").text(unlikeCounter);
        autoUnlikeState = false;
        $("#mashUnlikeBtn").attr("src", autoUnlikeLogoOff);
        clearInterval(autoReaction);
      }
    }, intervalSecond);
  }
});
