'use strict';

module.exports = {
  /**
   * 检查设备
   */
  checkDevice(userAgent) {
    const isWindowsPhone = /(?:Windows Phone)/.test(userAgent);
    const isSymbian = /(?:SymbianOS)/.test(userAgent) || isWindowsPhone;
    const isAndroid = /(?:Android)/.test(userAgent);
    const isFireFox = /(?:Firefox)/.test(userAgent);
    const isTablet =
      /(?:iPad|PlayBook)/.test(userAgent) ||
      (isAndroid && !/(?:Mobile)/.test(userAgent)) ||
      (isFireFox && /(?:Tablet)/.test(userAgent));
    const isPhone = /(?:iPhone)/.test(userAgent) && !isTablet;
    const isPc = !isPhone && !isAndroid && !isSymbian;

    return {
      isPhone,
      isAndroid,
      isTablet,
      isPc,
    };
  },
};
