(function($) {
  $.fn.fullScreen = function() {
    return this.each(function(elements) {
      var url = '';
      var element = this;
      var backImg = document.createElement('img');
      var groundBox = document.createElement('div');
      var groundValue = document.defaultView.getComputedStyle (element, null).backgroundImage;
      //var value = element.currentStyle.backgroundImage;

      groundUrl = groundValue.match(/^url\(["']?(.*?)["']?\)/i)[1];
      groundBox.style.cssText = 'position: relative;' + 'width: 100%;' + 'height: 100%;' + 'overflow: hidden;';

      var setBackground = function(imgW, imgH) {
        var winW = document.documentElement.clientWidth;
        var winH = document.documentElement.clientHeight;
        var scaleW = winW / imgW;
        var scaleH = winH / imgH;
        var fixScale = Math.max(scaleW, scaleH);
        var setW = imgW * fixScale;
        var setH = imgH * fixScale;
        var moveX = Math.floor((winW - setW) / 2);
        var moveY = Math.floor((winH - setH) / 2);

        groundBox.innerHTML = '<img src="' + groundUrl + '" alt="" width="' + setW + '" height="' + setH + '" style="position: absolute; top: ' + moveX + '; left: ' + moveY + 'px;" />';

        element.appendChild(groundBox);
      };

      var img = new Image();
      img.src = "";

      img.onload = function () {
        setBackground(img.width, img.height);
      }
      img.src = groundUrl;

    });
  };
})(jQuery);
