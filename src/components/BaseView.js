import * as THREE from 'three'

function test() {
  const renderer = THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
  });

  renderer.setClearColor(0xffcc00);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

// scene
  var scene = new THREE.Scene();

// 添加环境光
  var light = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(light);

// 添加点光源
  var light2 = new THREE.PointLight(0xffffff, 0.7);
  scene.add(light2);


// camera
  var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
// camera.position.set(0, 0, 5);

  var geometry = new THREE.CubeGeometry(200, 200, 200);
// var material = new THREE.MeshBasicMaterial();
  var material = new THREE.MeshLambertMaterial({color: 0xffffee});
  var mesh = new THREE.Mesh(geometry, material);

  mesh.position.set(0, 0, -800);

  scene.add(mesh);

//
  requestAnimationFrame(render)

  function render() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    // render
    renderer.render(scene, camera);
    requestAnimationFrame(render)
  }
}

export { test }

