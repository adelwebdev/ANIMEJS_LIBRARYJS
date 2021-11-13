var runLogEl = document.querySelector("#run .current-time-log");
var runProgressLogEl = document.querySelector("#run .progress-log");
var run = anime({
  targets: "#run .el",
  translateX: 250,
  // width: 500,
  delay: 1000,
  run: function (anim) {
    runLogEl.value = "running";
    runProgressLogEl.value = "progress : " + Math.round(anim.progress) + "%";
  },
  complete: function (anim) {
    runLogEl.value = "not running";
    runProgressLogEl.value = "progress : 100%";
  },
});

var lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 4500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});

var combinedFunctionBasedProp = anime({
  targets: "#combinedFunctionBasedProp .el",
  translateX: 100,
  translateX: 250,
  rotate: 180,
  duration: function (target) {
    // Duration based on every div 'data-duration' attribute
    return target.getAttribute("data-duration");
  },
  delay: function (target, index) {
    // 100ms delay multiplied by every div index, in ascending order
    return index * 100;
  },
  elasticity: function (target, index, totalTargets) {
    // Elasticity multiplied by every div index, in descending order
    return 200 + (totalTargets - index) * 200;
  },
  direction: "alternate",
  loop: true,
});

var penner = anime.timeline();
penner
  .add({
    targets: "#penner .linear",
    translateX: 250,
    offset: 0,
    easing: "linear",
  })
  .add({
    targets: "#penner .InQuad",
    translateX: 250,
    offset: 0,
    easing: "easeInQuad",
  })
  .add({
    targets: "#penner .InCubic",
    translateX: 250,
    offset: 0,
    easing: "easeInCubic",
  })
  .add({
    targets: "#penner .InQuart",
    translateX: 250,
    offset: 0,
    easing: "easeInQuart",
  })
  .add({
    targets: "#penner .InQuint",
    translateX: 250,
    offset: 0,
    easing: "easeInQuint",
  })
  .add({
    targets: "#penner .InSine",
    translateX: 250,
    offset: 0,
    easing: "easeInSine",
  })
  .add({
    targets: "#penner .InExpo",
    translateX: 250,
    offset: 0,
    easing: "easeInExpo",
  })
  .add({
    targets: "#penner .InCirc",
    translateX: 250,
    offset: 0,
    easing: "easeInCirc",
  })
  .add({
    targets: "#penner .InBack",
    translateX: 250,
    offset: 0,
    easing: "easeInBack",
  })
  .add({
    targets: "#penner .OutQuad",
    translateX: 250,
    offset: 0,
    easing: "easeOutQuad",
  })
  .add({
    targets: "#penner .OutCubic",
    translateX: 250,
    offset: 0,
    easing: "easeOutCubic",
  })
  .add({
    targets: "#penner .OutQuart",
    translateX: 250,
    offset: 0,
    easing: "easeOutQuart",
  })
  .add({
    targets: "#penner .OutQuint",
    translateX: 250,
    offset: 0,
    easing: "easeOutQuint",
  })
  .add({
    targets: "#penner .OutSine",
    translateX: 250,
    offset: 0,
    easing: "easeOutSine",
  })
  .add({
    targets: "#penner .OutExpo",
    translateX: 250,
    offset: 0,
    easing: "easeOutExpo",
  })
  .add({
    targets: "#penner .OutCirc",
    translateX: 250,
    offset: 0,
    easing: "easeOutCirc",
  })
  .add({
    targets: "#penner .OutBack",
    translateX: 250,
    offset: 0,
    easing: "easeOutBack",
  })
  .add({
    targets: "#penner .InOutQuad",
    translateX: 250,
    offset: 0,
    easing: "easeInOutQuad",
  })
  .add({
    targets: "#penner .InOutCubic",
    translateX: 250,
    offset: 0,
    easing: "easeInOutCubic",
  })
  .add({
    targets: "#penner .InOutQuart",
    translateX: 250,
    offset: 0,
    easing: "easeInOutQuart",
  })
  .add({
    targets: "#penner .InOutQuint",
    translateX: 250,
    offset: 0,
    easing: "easeInOutQuint",
  })
  .add({
    targets: "#penner .InOutSine",
    translateX: 250,
    offset: 0,
    easing: "easeInOutSine",
  })
  .add({
    targets: "#penner .InOutExpo",
    translateX: 250,
    offset: 0,
    easing: "easeInOutExpo",
  })
  .add({
    targets: "#penner .InOutCirc",
    translateX: 250,
    offset: 0,
    easing: "easeInOutCirc",
  })
  .add({
    targets: "#penner .InOutBack",
    translateX: 250,
    offset: 0,
    easing: "easeInOutBack",
  });
