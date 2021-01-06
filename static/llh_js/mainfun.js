var selectedblock = 1;

var strainarray = new Array(11);
strainarray[0] = [[1, 2, 3, 4], [], [2, 5, 6]];
strainarray[1] = [[1, 2, 3, 4], [], []];
strainarray[2] = [[1, 2, 3, 4], [], []];
strainarray[3] = [[1, 2, 3, 4], [], []];
strainarray[4] = [[1, 2, 3, 4], [], []];
strainarray[5] = [[1, 2, 3, 4], [1, 2, 7, 8], [1, 2, 7, 8]];
strainarray[6] = [[1, 2, 3, 4], [], []];
strainarray[7] = [[1, 2, 3, 4], [], []];
strainarray[8] = [[1, 2, 3, 4], [], []];
strainarray[9] = [[1, 2, 3, 4], [], []];
strainarray[10] = [[1, 2, 3, 4], [], []];

var crackarray = new Array(11);
crackarray[0] = [[], [], [9]];
crackarray[1] = [[], [9], [9, 10]];
crackarray[2] = [[11], [9, 10], [9, 10]];
crackarray[3] = [[], [], [9]];
crackarray[4] = [[], [9, 10], [9, 10]];
crackarray[5] = [[], [9], [9]];
crackarray[6] = [[12], [9], [10]];
crackarray[7] = [[], [], [9, 10]];
crackarray[8] = [[11], [9], [9, 10]];
crackarray[9] = [[12], [9], []];
crackarray[10] = [[11, 12], [], [10]];

var kztab = document.getElementById('tabKz');
var kntab = document.getElementById('tabKn');
var kbtab = document.getElementById('tabKb');

var selectedpos = 'C';
kztab.onclick = function () {
    selectedpos = 'C';
}
kntab.onclick = function () {
    selectedpos = 'N';
}
kbtab.onclick = function () {
    selectedpos = 'B';
}

var selectlocalsensor = '1';
const kzcrosslist = document.getElementsByClassName('crosssensorkz');
for (var i = 0; i < kzcrosslist.length; i++) {
    kzcrosslist[i].setAttribute('index', i);
    kzcrosslist[i].onclick = function () {
        selectlocalsensor = (parseInt(this.getAttribute('index')) + 1).toString();
        PostToServer();
        // console.log(data);

        console.log(selectlocalsensor);
    }
    kzcrosslist[i].style.display = 'none';
}

const kncrosslist = document.getElementsByClassName('crosssensorkn');
for (var i = 0; i < kncrosslist.length; i++) {
    kncrosslist[i].setAttribute('index', i);
    kncrosslist[i].onclick = function () {
        selectlocalsensor = (parseInt(this.getAttribute('index')) + 1).toString();
        PostToServer();
        // console.log(data);

        console.log(selectlocalsensor);
    }
    kncrosslist[i].style.display = 'none';
}

const kbcrosslist = document.getElementsByClassName('crosssensorkb');
for (var i = 0; i < kbcrosslist.length; i++) {
    kbcrosslist[i].setAttribute('index', i);
    kbcrosslist[i].onclick = function () {
        selectlocalsensor = (parseInt(this.getAttribute('index')) + 1).toString();
        PostToServer();
        // console.log(data);

        console.log(selectlocalsensor);
    }
    kbcrosslist[i].style.display = 'none';
}

// var sensortype = 'strain';
// const typeselected = document.getElementById('typeselector');
// typeselected.onchange = function () {
//     sensortype = this.value;
//     sensordisupdate();
// }

function cleartab() {
    for (var i = 0; i < kzcrosslist.length; i++) {
        kzcrosslist[i].style.display = 'none';
    }
    for (var i = 0; i < kncrosslist.length; i++) {
        kncrosslist[i].style.display = 'none';
    }
    for (var i = 0; i < kbcrosslist.length; i++) {
        kbcrosslist[i].style.display = 'none';
    }
}

export function sensordisupdate(selectedblk) {
    selectedblock = selectedblk;
    cleartab();
    var blkindex = parseInt(selectedblk) - 1;

    for (var i = 0; i < strainarray[blkindex].length; i++) {
        var kzlist = strainarray[blkindex][0];
        var knlist = strainarray[blkindex][1];
        var kblist = strainarray[blkindex][2];
        for (var j = 0; j < kzlist.length; j++) {
            kzcrosslist[kzlist[j] - 1].style.display = 'block';
        }
        for (var j = 0; j < knlist.length; j++) {
            kncrosslist[knlist[j] - 1].style.display = 'block';
        }
        for (var j = 0; j < kblist.length; j++) {
            kbcrosslist[kblist[j] - 1].style.display = 'block';
        }
    }

    for (var i = 0; i < crackarray[blkindex].length; i++) {
        var kzlist = crackarray[blkindex][0];
        var knlist = crackarray[blkindex][1];
        var kblist = crackarray[blkindex][2];
        for (var j = 0; j < kzlist.length; j++) {
            kzcrosslist[kzlist[j] - 1].style.display = 'block';
        }
        for (var j = 0; j < knlist.length; j++) {
            kncrosslist[knlist[j] - 1].style.display = 'block';
        }
        for (var j = 0; j < kblist.length; j++) {
            kbcrosslist[kblist[j] - 1].style.display = 'block';
        }
    }

}

var myChart;
(function () {

    var option = {
        tooltip: {
            trigger: 'axis'
        },
        axisLine: {
            lineStyle: {
                color: '#4c9bfd',
                width: 2,
            }
        },

        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#4c9bfd'
                },
                onZero: true,
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            // axisLine: {onZero: true},
        },
        yAxis: {
            type: 'value',
            lineStyle: {
                color: 'white',
                width: 2,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#4c9bfd'
                }
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            // axisLine: {onZero: true}
        },
        series: [{
            data: [],
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#33CCFF',
                    lineStyle: {
                        color: '#33CCFF'
                    }
                }
            },
        }],
        grid: {
            left: 40,
            right: 10,
            top: 20,
            bottom: 20,
            // borderWidth:10
        }

    };


    myChart = echarts.init(document.querySelector('#rtdisplay'));
    myChart.setOption(option);

})();


$.ajax({
    headers: {"X-CSRFToken": $('[name=csrfmiddlewaretoken]').val()},
})

// function PostToServer() {
//     var x = selectedblock + selectedpos + selectlocalsensor;
//     $.ajax({
//         type: 'GET',
//         url: '/llhview/ssclick/',
//         data: {'sspos': x},
//         datatype: 'json',
//         success: function () {
//
//         }
//     });
// }
var curInterval = null;

function PostToServer() {
    clearInterval(curInterval);
    var x = selectedblock + selectedpos + selectlocalsensor;
    curInterval = setInterval(function () {
        $.ajax({
            type: 'GET',
            url: "/llhview/timer/",
            dataType: 'json',
            data: {'sspos': x},
            success: function (json) {
                // server_info = eval(json);
                // console.log(json.returndata);
                myChart.setOption({
                    series: [{
                        data: json.returndata
                    }]
                });

            }
        });

    }, 1000)
};


var tmpChart = null;
var tmpoption = null;
(function () {
    tmpoption = {
        xAxis: {
            type: 'category',
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [{
            type: 'line',
            smooth: true,
            itemStyle: {
                color: 'rgba(229,73,0,0.72)'  // 线颜色
            }
        }],
        // 设置网格样式
        grid: {
            show: true,// 显示边框
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
                //  fontSize
            },
            right: '10%' // 距离右边10%
        },
    };
    // $(jQ对象)==>DOM对象
    tmpChart = echarts.init(document.querySelector('.line'))
    tmpChart.setOption(tmpoption);

})();

(function () {
    setInterval(function () {
        $.ajax({
            type: 'GET',
            url: "/llhview/tmpdisplay/",
            dataType: 'json',
            success: function (json) {
                // server_info = eval(json);
                // console.log(json.returndata);

                tmpChart.setOption({
                    series: [{
                        data: json.tmpdata
                    }]
                });

            }
        });

    }, 1000);
})();