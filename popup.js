window.onload = function() {
    document.getElementById('currMNTime').innerHTML = startTime();
    document.getElementById('currUTCTime').innerHTML = startUTCTime();
    document.getElementById('currINTime').innerHTML = startINTime();
    document.getElementById('currBOSTime').innerHTML = startBOSTime();

    function startTime() {
        var today = new Date();
        var h = today.getHours() - 1;
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('currMNTime').innerHTML = h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }

    function startUTCTime() {
        var todayUTC = new Date();
        var hUTC = todayUTC.getUTCHours();
        var mUTC = todayUTC.getUTCMinutes();
        var sUTC = todayUTC.getUTCSeconds();
        mUTC = checkTime(mUTC);
        sUTC = checkTime(sUTC);
        document.getElementById('currUTCTime').innerHTML = hUTC + ":" + mUTC + ":" + sUTC;
        var tUTC = setTimeout(startUTCTime, 500);
    }

    function startINTime() {
        var todayIN = new Date();
        var hIN= todayIN.getHours() + 10;
        var mIN = todayIN.getMinutes() + 30;
        var sIN = todayIN.getSeconds();
        mIN = checkTime(mIN);
        sIN = checkTime(sIN);
        document.getElementById('currINTime').innerHTML = hIN + ":" + mIN + ":" + sIN;
        var tIN = setTimeout(startINTime, 500);
    }

    function startBOSTime() {
        var todayBOS = new Date();
        var hBOS = todayBOS.getHours();
        var mBOS = todayBOS.getMinutes();
        var sBOS = todayBOS.getSeconds();
        mBOS = checkTime(mBOS);
        sBOS = checkTime(sBOS);
        document.getElementById('currBOSTime').innerHTML = hBOS+ ":" + mBOS + ":" + sBOS;
        var tBOS = setTimeout(startBOSTime, 500);
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
}