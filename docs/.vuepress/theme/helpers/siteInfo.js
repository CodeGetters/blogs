//TODO：

/**
 *
 * @param date
 * @return {string}
 * @description 日期格式化
 */

export function dateFormat(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    return `${date.getUTCFullYear()}-${zero(date.getUTCMonth() + 1)}-${zero(date.getUTCDate())}`;
}

/**
 *
 * @param d
 * @return {string}
 * @description 小于 10 补 0
 */

export function zero(d) {
    return d.toString().padStart(2, '0');
}

/**
 *
 * @param posts
 * @return {*}
 * @description 计算最后活动时间
 */
export function lastUpdatePosts(posts) {
    posts.sort((prev, next) => {
        return compareDate(prev, next);
    });
    return posts;
}

/**
 *
 * @param a
 * @param b
 * @return {number}
 * @description 比对时间
 */
export function compareDate(a, b) {
    return getTimeNum(b) - getTimeNum(a);
}

/**
 *
 * @param post
 * @return {number}
 * @description 获取时间的时间戳
 */
export function getTimeNum(post) {
    let dateStr = post.lastUpdated || post.frontmatter.date;
    let date = new Date(dateStr);
    if (date === "Invalid Date" && dateStr) {
        date = new Date(dateStr.replace(/-/g, '/'));
    }
    return date.getTime();
}


/**
 *
 * @param startDate
 * @param endDate
 * @return {number}
 * @description 获取两个日期相差多少天
 */
export function dayDiff(startDate, endDate) {
    if (!endDate) {
        endDate = startDate;
        startDate = new Date();
    }
    startDate = dateFormat(startDate);
    endDate = dateFormat(endDate);
    return parseInt(Math.abs(new Date(startDate) - new Date(endDate)) / (1000 * 60 * 60 * 24));
}

/**
 *
 * @param startDate
 * @param endDate
 * @return {string}
 * @description 计算相差多少年/月/日/时/分/秒
 */
export function timeDiff(startDate, endDate) {
    if (!endDate) {
        endDate = startDate;
        startDate = new Date();
    }
    if (!(startDate instanceof Date)) {
        startDate = new Date(startDate);
    }
    if (!(endDate instanceof Date)) {
        endDate = new Date(endDate);
    }
    // 计算时间戳的差
    const diffValue = parseInt((Math.abs(endDate - startDate) / 1000));

    if (diffValue === 0) {
        return '刚刚';
    } else if (diffValue < 60) {
        return diffValue + ' 秒';
    } else if (parseInt(diffValue / 60) < 60) {
        return parseInt(diffValue / 60) + ' 分';
    } else if (parseInt(diffValue / (60 * 60)) < 24) {
        return parseInt(diffValue / (60 * 60)) + ' 时';
    } else if (parseInt(diffValue / (60 * 60 * 24)) < getDays(startDate.getMonth, startDate.getFullYear)) {
        return parseInt(diffValue / (60 * 60 * 24)) + ' 天';
    } else if (parseInt(diffValue / (60 * 60 * 24 * getDays(startDate.getMonth, startDate.getFullYear))) < 12) {
        return parseInt(diffValue / (60 * 60 * 24 * getDays(startDate.getMonth, startDate.getFullYear))) + ' 月';
    } else {
        return parseInt(diffValue / (60 * 60 * 24 * getDays(startDate.getMonth, startDate.getFullYear) * 12)) + ' 年';
    }
}

/**
 *
 * @param mouth
 * @param year
 * @return {number}
 * @description 判断当前月的天数（28、29、30、31）
 */
export function getDays(mouth, year) {
    //默认一月 30 天
    let days = 30;
    if (mouth === 2) {
        days = year % 4 === 0 ? 29 : 28;
        //31天的月份
    } else if (mouth === 1 || mouth === 3 || mouth === 5 || mouth === 7 || mouth === 8 || mouth === 10 || mouth === 12) {
        days = 31;
    }
    return days;
}

/**
 *
 * @param startDate
 * @param endDate
 * @return {string}
 * @description 已运行时间低于一天显示时分秒,目前该函数没有使用，低于一天直接显示不到一天
 */
export function getTime(startDate, endDate) {
    if (day < 0) {
        let hour = parseInt(Math.abs(new Date(startDate) - new Date(endDate)) / (1000 * 60 * 60));
        if (hour > 0) {
            let minute = parseInt(Math.abs(new Date(startDate) - new Date(endDate) - hour * 60 * 60 * 1000) / (1000 * 60));
            if (minute > 0) {
                let second = parseInt(Math.abs(new Date(startDate) - new Date(endDate) - hour * 60 * 60 * 1000 - minute * 60 * 1000) / (1000));
                if (second !== 0) {
                    return hour + ' 小时 ' + minute + ' 分钟 ' + second + ' 秒';
                } else {
                    return hour + ' 小时 ' + minute + ' 分钟 ';
                }
            } else {
                return hour + ' 小时 ';
            }
        } else {
            let minute = parseInt(Math.abs(new Date(startDate) - new Date(endDate) - hour * 60 * 60 * 1000) / (1000 * 60));
            if (minute > 0) {
                let second = parseInt(Math.abs(new Date(startDate) - new Date(endDate) - hour * 60 * 60 * 1000 - minute * 60 * 1000) / (1000));
                if (second !== 0) {
                    return + minute + ' 分钟 ' + second + ' 秒';
                } else {
                    return minute + ' 分钟 ';
                }
            } else {
                return parseInt(Math.abs(new Date(startDate) - new Date(endDate) - hour * 60 * 60 * 1000 - minute * 60 * 1000) / (1000)) + ' 秒 ';
            }
        }
    }
}

let bszCaller, bszTag, scriptTag, ready;

let t,
    e,
    n,
    a = !1,
    c = [];

// 修复Node同构代码的问题
if (typeof document !== "undefined") {
    (ready = function (t) {
        return (
            a ||
            "interactive" === document.readyState ||
            "complete" === document.readyState
                ? t.call(document)
                : c.push(function () {
                    return t.call(this);
                }),
                this
        );
    }),
        (e = function () {
            for (var t = 0, e = c.length; t < e; t++) c[t].apply(document);
            c = [];
        }),
        (n = function () {
            a ||
            ((a = !0),
                e.call(window),
                document.removeEventListener
                    ? document.removeEventListener("DOMContentLoaded", n, !1)
                    : document.attachEvent &&
                    (document.detachEvent("onreadystatechange", n),
                    window === window.top && (clearInterval(t), (t = null))));
        }),
        document.addEventListener
            ? document.addEventListener("DOMContentLoaded", n, !1)
            : document.attachEvent &&
            (document.attachEvent("onreadystatechange", function () {
                /loaded|complete/.test(document.readyState) && n();
            }),
            window === window.top &&
            (t = setInterval(function () {
                try {
                    a || document.documentElement.doScroll("left");
                } catch (t) {
                    return;
                }
                n();
            }, 5)));
}

bszCaller = {
    fetch: function (t, e) {
        var n = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
        t = t.replace("=BusuanziCallback", "=" + n);
        (scriptTag = document.createElement("SCRIPT")),
            (scriptTag.type = "text/javascript"),
            (scriptTag.defer = !0),
            (scriptTag.src = t),
            document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
        window[n] = this.evalCall(e);
    },
    evalCall: function (e) {
        return function (t) {
            ready(function () {
                try {
                    e(t),
                    scriptTag &&
                    scriptTag.parentElement &&
                    scriptTag.parentElement.removeChild &&
                    scriptTag.parentElement.removeChild(scriptTag);
                } catch (t) {
                    console.log(t), bszTag.hides();
                }
            });
        };
    },
};

export function fetch() {
    bszTag && bszTag.hides();
    bszCaller.fetch("//siteInfo.ibruce.info/siteInfo?jsonpCallback=BusuanziCallback", function (t) {
        bszTag.texts(t), bszTag.shows();
    })
};

bszTag = {
    bszs: ["site_pv", "page_pv", "site_uv"],
    texts: function (n) {
        this.bszs.map(function (t) {
            var e = document.getElementById("siteInfo_value_" + t);
            e && (e.innerHTML = n[t]);
        });
    },
    hides: function () {
        this.bszs.map(function (t) {
            var e = document.getElementById("siteInfo_container_" + t);
            e && (e.style.display = "none");
        });
    },
    shows: function () {
        this.bszs.map(function (t) {
            var e = document.getElementById("siteInfo_container_" + t);
            e && (e.style.display = "inline");
        });
    },
};
