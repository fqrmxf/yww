/*
 * @Author: your name
 * @Date: 2021-08-05 17:01:54
 * @LastEditTime: 2021-08-06 09:16:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \(自动旋转)3D旋转相册-流星雨\js\index.js
 */



num = 10;
$(function() {
  let count = 0
  setInterval(function() {
      if (num < 100) {
          num += 10;
          numT = num + '%';
      } else {
          num = -10;
          /* 背景切换 */
          if (count < 2) {
              count++;
          } else if (count >= 2&&count < 4) {
            /* 背景图 */
            $('div').find('#background').css('background', 'url(bgimg/bg1.jpg) no-repeat');
            count++;
    }
    else if (count >= 4&&count < 6) {
            /* 背景图 */
            count++;
            $('div').find('#background').css('background', 'url(bgimg/bg2.jpg) no-repeat');
    }
    else if (count >= 6&&count< 8) {
            /* 背景图 */
            count++;
            $('div').find('#background').css('background', 'url(bgimg/bg3.jpg) no-repeat');
    }
    else if (count >= 8) {
            /* 背景图 */
        count = 0;
            $('div').find('#background').css('background', 'url(bgimg/bg4.jpg) no-repeat');
    }

      }
  }, 600);
})