import {sensordisupdate} from '/static/llh_js/mainfun.js'
// var webGLRenderer = new THREE.WebGLRenderer();
// webGLRenderer.setClearColor(0xEEEEEE);
// webGLRenderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById("page1").appendChild(webGLRenderer.domElement);
var zldict = []
const scalecoef = 0.0005;
const color1 = 0x00ff00;
const color2 = 0x00aa00;
var renderer;
var h = document.getElementById("threedimdis").clientHeight;
var w = document.getElementById("threedimdis").clientWidth;

var blkodd = [];
var blkeven = [];

function initRender() {
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(w, h);
    //告诉渲染器需要阴影效果
    renderer.setClearColor(0xffffff);
    renderer.shadowMap.enabled = true;
    // document.body.appendChild(renderer.domElement);
    document.getElementById("threedimdis").appendChild(renderer.domElement);
}

var camera;

function initCamera() {
    camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 10000);
    camera.position.set(110, 25, 1);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

var scene;

function initScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x193264);
    // scene.fog = new THREE.Fog(0x33645b, 100, 400);

    const plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(2000, 3000),
        new THREE.MeshPhongMaterial({color: 0x0033ff, specular: 0x101010})
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -5;
    scene.add(plane);

    plane.receiveShadow = true;
}


//初始化dat.GUI简化试验流程
var gui;

function initGui() {
    //声明一个保存需求修改的相关数据的对象
    gui = {};
    var datGui = new dat.GUI();
    //将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
}

var light;

function initLight() {
    scene.add(new THREE.AmbientLight(0xff4444));

    light = new THREE.PointLight(0xffffff);
    light.position.set(-200, 100, 0);

    //告诉平行光需要开启阴影投射
    light.castShadow = true;

    scene.add(light);
}

function initModel() {

    //辅助工具
    // var helper = new THREE.AxesHelper(50);
    // scene.add(helper);

    var loader = new THREE.STLLoader();
    loader.load("../static/stl/bz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: '#ff8c00'});
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.rotation.z = -0.2 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(-50, 0, 0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 1;
        // blkodd[blkodd.length] = mesh;
    });

    loader.load("../static/stl/zl_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color1});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 0 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 1;
        blkodd[blkodd.length] = mesh;
    });

    loader.load("../static/stl/zl_2.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color2});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 20 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 2;
        blkeven[blkeven.length] = mesh;
    });

    loader.load("../static/stl/zl_3.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color1});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 40 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 3;
        blkodd[blkodd.length] = mesh;
    });
    //
    loader.load("../static/stl/zl_4.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color2});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 60 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 4;
        blkeven[blkeven.length] = mesh;
    });

    loader.load("../static/stl/zl_5.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color1});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 80 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 5;
        blkodd[blkodd.length] = mesh;
    });
    //
    loader.load("../static/stl/zl_6.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color2});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 100 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 6;
        blkeven[blkeven.length] = mesh;
    });
    //
    loader.load("../static/stl/zl_7.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color1});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 120 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 7;
        blkodd[blkodd.length] = mesh;
    });
    //
    loader.load("../static/stl/zl_8.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color2});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 140 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 8;
        blkeven[blkeven.length] = mesh;
    });
    //
    loader.load("../static/stl/zl_9.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color1});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 160 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 9;
        blkodd[blkodd.length] = mesh;
    });
    //
    loader.load("../static/stl/zl_10.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color2});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 180 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 10;
        blkeven[blkeven.length] = mesh;
    });
    //
    loader.load("../static/stl/zl_11.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: color1});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, 0, 200 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        zldict[mesh['uuid']] = 11;
        blkodd[blkodd.length] = mesh;
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, -10 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_2.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 10 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 30 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 50 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 70 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 90 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 110 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 130 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 150 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 170 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 190 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

    loader.load("../static/stl/zz_1.stl", function (geometry) {
        //创建纹理
        var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var mesh = new THREE.Mesh(geometry, mat);
        // mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
        mesh.scale.set(scalecoef, scalecoef, scalecoef); //缩放
        geometry.center(); //居中显示
        mesh.position.set(0, -2.55, 210 - 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    });

}

var projectiveObj;
var mouse;
var raycaster;

function mouseinit() {
    raycaster = new THREE.Raycaster();//光线投射器
    mouse = new THREE.Vector2();//二维向量
    window.addEventListener('mousemove', function (event) {
        event.preventDefault();
        // mouse.x = ((event.clientX-229) / 1012) * 2 - 1;
        // mouse.y = -((event.clientY-116) / 468) * 2 + 1;
        mouse.x = event.offsetX / w * 2 - 1;
        mouse.y = -(event.offsetY / h) * 2 + 1;
        // console.log(mouse.x,mouse.y,event.clientX,event.clientY)
    }, false);

    //定义上次投射到的对象
}


/**
 * 根据光投射器判断鼠标所在向量方向是否穿过物体
 * @param {*} raycaster 光投射器
 * @param {*} scene     场景
 * @param {*} camera    相机
 * @param {*} mouse     鼠标位置对应的二维向量
 */
function renderRaycasterObj(raycaster, scene, camera, mouse) {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        var currentProjectiveObjT = intersects[0].object;
        if (projectiveObj != currentProjectiveObjT) {
            if ((currentProjectiveObjT instanceof THREE.AxisHelper) || (currentProjectiveObjT instanceof THREE.GridHelper)) {
                //穿过的是坐标轴线和网格线
                return;
            }
            projectiveObj = intersects[0].object;
        }
    } else {
        projectiveObj = null;
        // console.log(projectiveObj);
        // projectiveObj.material.color.set("#dd830d");
    }

}

function render() {

    // requestAnimationFrame(render);

    renderRaycasterObj(raycaster, scene, camera, mouse);//渲染光投射器投射到的对象

    renderer.render(scene, camera);

}


/**
 * 添加鼠标点击事件，捕获点击时当前选中的物体
 */




//初始化性能插件
var stats;

function initStats() {
    stats = new Stats();
    document.body.appendChild(stats.dom);
}

//用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
var controls;

function initControls() {

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // 如果使用animate方法时，将此函数删除
    //controls.addEventListener( 'change', render );
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = true;
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //controls.dampingFactor = 0.25;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    //设置相机距离原点的最远距离
    controls.minDistance = 1;
    //设置相机距离原点的最远距离
    controls.maxDistance = 200;
    //是否开启右键拖拽
    controls.enablePan = true;
}

// function render() {
//
//     renderer.render( scene, camera );
// }

//窗口变动触发的函数
function onWindowResize() {
    h = document.getElementById("threedimdis").clientHeight;
    w = document.getElementById("threedimdis").clientWidth;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    render();

    renderer.setSize(w, h);
    // animate();

}

function animate() {
    //更新控制器
    render();

    //更新性能插件
    stats.update();

    controls.update();

    requestAnimationFrame(animate);
}

function draw() {
    initGui();
    initRender();
    initScene();
    initCamera();
    initLight();
    initModel();
    initControls();
    initStats();

    animate();
    window.onresize = onWindowResize;
}

initGui();
initRender();
initScene();
initCamera();
initLight();
initModel();
mouseinit();
initControls();
initStats();

animate();
window.onresize = onWindowResize;
var selectedblock = 0;

window.addEventListener('click', clicklistener, false);


function clicklistener() {

    if (projectiveObj) {

        // if(projectiveObj.hasChecked){
        //
        //     projectiveObj.hasChecked = false;
        //     // projectiveObj.material.color.set("white");
        // }else{
        //     projectiveObj.hasChecked = true;
        //     // console.log(zldict[projectiveObj['uuid']]);
        //     selectedblock = zldict[projectiveObj['uuid']];
        //     sensordisupdate(selectedblock.toString());
        //     // projectiveObj.material.color.set("#dd830d");
        // }
        console.log(zldict[projectiveObj['uuid']]);
        selectedblock = zldict[projectiveObj['uuid']];
        sensordisupdate(selectedblock.toString());
    }

}

var colorflag = 1;

setInterval(function () {
    if (colorflag) {
        for (var i = 0; i < blkodd.length; i++) {
            blkodd[i].material.color.set("#00ff00");
        }
        for (var i = 0; i < blkeven.length; i++) {
            blkeven[i].material.color.set("#009900");
        }
    }else{
        for (var i = 0; i < blkodd.length; i++) {
            blkodd[i].material.color.set("#009900");
        }
        for (var i = 0; i < blkeven.length; i++) {
            blkeven[i].material.color.set("#00ff00");
        }
    }
    colorflag = 1-colorflag;
    console.log(colorflag);
}, 200);
