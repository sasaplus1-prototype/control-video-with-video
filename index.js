(function(){

  'use strict';

  var toggle = document.getElementById('js-toggle'),
      poster = document.getElementById('js-poster'),
      show = document.getElementById('js-show'),
      hide = document.getElementById('js-hide');

  var player = videojs('js-video', {}, function() {
    console.info('player ready');
  });

  toggle.addEventListener('click', function() {
    if (player.paused()) {
      player.play();
    } else {
      player.pause();
    }
  }, false);

  poster.addEventListener('click', function(event) {
    player.poster('poster.jpg');
  }, false);

  show.addEventListener('click', function() {
    player.show();
  }, false);

  hide.addEventListener('click', function() {
    player.hide();
  }, false);

  function output(event) {
    console.log(event);
  }

  player.on('loadstart', output);
  player.on('waiting', output);
  player.on('canplay', output);
  player.on('canplaythrough', output);
  player.on('playing', output);
  player.on('ended', output);
  player.on('seeking', output);
  player.on('seeked', output);
  player.on('play', output);
  player.on('firstplay', output);
  player.on('pause', output);
  player.on('progress', output);
  player.on('durationchange', output);
  player.on('fullscreenchange', output);
  player.on('error', output);
  player.on('suspend', output);
  player.on('abort', output);
  player.on('emptied', output);
  player.on('stalled', output);
  player.on('loadedmetadata', output);
  player.on('loadeddata', output);
  player.on('timeupdate', output);
  player.on('ratechange', output);
  player.on('volumechange', output);
  player.on('texttrackchange', output);
  player.on('loadedmetadata', output);
  player.on('posterchange', output);

}());
