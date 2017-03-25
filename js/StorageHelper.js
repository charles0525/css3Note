/*
==================================================
by charles.he @2017.01.16
说明：客户端缓存操作
==================================================
*/
var StorageHelper = (function () {
    return {
        getLocalData: getLocalData,
        setLocalData: setLocalData,
        removeLocalData: removeLocalData,
        clearLocalData: clearLocalData,

        getSessionData: getSessionData,
        setSessionData: setSessionData,
        removeSessionData: removeSessionData,
        clearSessionData: clearSessionData
    };

    /*localStorage 操作*/
    function setLocalData(key, data) {
        if (!!window.localStorage) {
            window.localStorage.setItem(key, data);
        }
    }

    function getLocalData(key) {
        if (window.localStorage) {
            return window.localStorage.getItem(key);
        }
    }

    function removeLocalData(key) {
        if (window.localStorage.getItem(key)) {
            window.localStorage.removeItem(key);
        }
    }

    function clearLocalData() {
        window.localStorage.clear();
    }

    /*sessionStorage 操作*/
    function setSessionData(key, data) {
        if (!!window.sessionStorage) {
            window.sessionStorage.setItem(key, data);
        }
    }

    function getSessionData(key) {
        if (window.sessionStorage) {
            return window.sessionStorage.getItem(key);
        }
    }

    function removeSessionData(key) {
        if (window.sessionStorage.getItem(key)) {
            window.sessionStorage.removeItem(key);
        }
    }

    function clearSessionData() {
        window.sessionStorage.clear();
    }
})();