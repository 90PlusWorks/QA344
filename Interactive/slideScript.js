// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//var cameraHome = { x: 0, y: 0, z: 4 };

camera.position.z = cameraHome.z;
camera.position.x = cameraHome.x;
camera.position.y = cameraHome.y;  //cameraHome

// RENDERER
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
	if ( Detector.webgl ) {
		// Create a renderer with Antialiasing
		var renderer = new THREE.WebGLRenderer({antialias:true});
		// Configure renderer clear color
		renderer.setClearColor("#0000ff");
		// Configure renderer size
		renderer.setSize( window.innerWidth, window.innerHeight );
		// Append Renderer to DOM
		document.body.appendChild( renderer.domElement );
		
	}	
	else {
		renderer = new THREE.CanvasRenderer(); 
	}
	
	renderer.setClearColor( 0x0000ff );
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	/*if(SCREEN_HEIGHT<850){
	var cameraHome = { x: 0, y: 0, z: 6.5};
	cameraPos = { x: 0, y: 0, z: 12 };
	cameraPrev = { x: 0, y: 0, z: 12};
	cell = 0;
}*/
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	//THREEx.FullScreen.request();
	container = document.getElementById( 'ThreeJS' );
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	container.appendChild( renderer.domElement );
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener("keydown", onDocumentKeyDown, false); 
	document.addEventListener("keyup", onDocumentKeyUp, false); //("keyup", this._onKeyUp, false);
	document.addEventListener("keyup", function(object) {  // Audio
    //audio.play();
  });
	// EVENTS
	
	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
	// CONTROLS
	var mouseX = 0, mouseY = 0;
	mouse = new THREE.Vector2;
	ray = new THREE.Raycaster();
	//THREEx.FullScreen.request();
	controls = new THREE.TrackballControls( camera, renderer.domElement );
	//controls = new THREE.TrackballControls( camera );
	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener("keydown", onDocumentKeyDown, false); 
	document.addEventListener("keyup", onDocumentKeyUp, false); //("keyup", this._onKeyUp, false);
	
	

function onDocumentKeyDown(event){ 
	// Get the key code of the pressed key 
   keyCode = event.which; 
   //console.log("keycode" + keyCode);
}
function onDocumentKeyUp(event){ 
	// Get the key code of the pressed key 
   keyCodeUp = event.which; 
   //console.log("keycode" + keyCode);
}
		function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	mouseX = mouse.x;
	mouseY = mouse.y;
}

function onDocumentMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	mouseX = mouse.x;
	mouseY = mouse.y;
}
function onDocumentMouseDown( event ) {
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	event.preventDefault();
	// update the mouse variable
	switch ( event.button ) {
    case 0: // left 
        Tadd = 1;
    case 1: // middle
        break;
    case 2: // right
        Tadd = 0;
}
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	ray.setFromCamera(mouse, camera);
	var intersects = ray.intersectObjects(scene.children, true);
	
  	if ( intersects[0] != undefined ) {
			
		if(Tadd == 1){
			var geoTSNew  = intersects[0].object;		 
		
		if(geoTSNew.correct != geoTSNew.num){ //maybe give a hint			
		}				
		if(geoTSNew.correct == geoTSNew.num){
			controls.reset();
			console.log(geoTSNew.correct, " == ", geoTSNew.num);
			camera.rotation.z = 0;
			camera.rotation.x = 0;
			camera.rotation.y = 0;
			camera.position.z = cameraHome.z;
			camera.position.x = cameraHome.x;
			camera.position.y = cameraHome.y;
		
			scene.translateX(geoTS.userPos.x);
			scene.translateY(geoTS.userPos.y);
							
			cameraPos =  { x: 0, y: 0, z: 0 }
						
			geoTS = geoT[geoTSNew.slide+1];			
			scene.translateX(-geoTS.userPos.x);
			scene.translateY(-geoTS.userPos.y);
		
			camera.updateProjectionMatrix;
		}
		}
		if(Tadd == 0){  //to delete stuff
					//var intersect = intersects[ 0 ];
					//scene.remove(intersect.object);					
		}
	}
}	




function update()
{
	
	keyboard.update();
	
	if ( keyboard.pressed("H") ) {   //home for camera
		controls.reset();
		camera.rotation.z = 0;
		camera.rotation.x = 0;
		camera.rotation.y = 0;
		camera.position.z = cameraHome.z;
		camera.position.x = cameraHome.x;
		camera.position.y = cameraHome.y;
	}
	/*
	 if(keyboard.pressed("left")) { //these work but double fire inconsistently:(
		 			scene.translateX(6);
		 			camera.updateProjectionMatrix;
        }
    
  
	if(keyboard.pressed("right")) {
	        scene.translateX(-6);
	        camera.updateProjectionMatrix;
 	}
 	if(keyboard.pressed("up")) {
		 			scene.translateY(-4);
		 			camera.updateProjectionMatrix;
        }
    
  
	if(keyboard.pressed("down")) {
	        scene.translateY(4);
	        camera.updateProjectionMatrix;
 	}*/
	
	
	
	controls.update();
	
}  //End of function update


// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
// Create a texture loader so we can load our image file
var loader = new THREE.TextureLoader();
geometryNew = new THREE.PlaneGeometry(10, 10*0.75);
var xNew = new THREE.Mesh(geometryNew);
geoTS  = xNew;
geoTS.userPos = { x: 0, y: 0, z: 0 }
geoTS.me = 0; 
var distance = 4;
var materialSN = [];
var geometrySN = [];
var materialS = [];
var geometryS = [];

function createSlides() {
//create empty 3d object — group for future slides
//slides = new THREE.Object3D();
//create slides by loop		
        //randomly set position (and scale) n1to7 packs 7 slides next to each other  
       var n1to7 = 0;
        for (var i =0; i <7; i++){ //loop to create numbers
			n1to7 = i;
				materialSN[n1to7] = new THREE.MeshLambertMaterial({
				map: loader.load('slide1pic/n1to7/img'+ n1to7 + '.png')
			});
			geometrySN[n1to7] = new THREE.PlaneGeometry(0.6, 0.6);
			}
		
       
       var imgIY =0;
        for (var i =0; i <6; i++){   //loop to create slides
			for (var y = 0; y <7; y++) {  //double or triple loop to gen positions		
				imgIY = i*7+y;
				materialS[imgIY] = new THREE.MeshLambertMaterial({
				map: loader.load('slide1pic/img'+ imgIY + '.png')
			});
			geometryS[imgIY] = new THREE.PlaneGeometry(10, 10*0.75);
			}
		}
		
		for (var i =0; i <6; i++){
			for (var y = 0; y <7; y++) {  //double or triple loop to gen positions			
			imgIY = i*7+y;
			//creating the mesh and add primitive and material
			var particle = new THREE.Mesh(geometryS[imgIY], materialS[imgIY]);	
				particle.position.x = y*12; //slide positions
				particle.position.y = -i*8; 
				particle.position.z = 0;
				
				geoT[imgIY] = particle.clone();
				geoT[imgIY].userPos = {x: particle.position.x,y: particle.position.y,z: particle.position.z};
				geoT[imgIY].me = imgIY;
				geoT[imgIY].correct = imgIY;
				geoT[imgIY].num = imgIY;
				geoT[imgIY].slide = imgIY-1;
				for (var z = 0; z<7; z++){   //number positions
					var particleN = new THREE.Mesh(geometrySN[z], materialSN[z]);	
					particleN.position.x = y*12+3+cell; 
					particleN.position.y = -i*8-z/1.5+2; 
					particleN.position.z = +3-cell*2;
					geoT[6*7+imgIY+z] = particleN.clone();
					geoT[6*7+imgIY+z].userPos = {x: particleN.position.x,y: particleN.position.y,z: particleN.position.z};
					geoT[6*7+imgIY+z].correct = c1to7[imgIY];
					geoT[6*7+imgIY+z].num = z+1;
					geoT[6*7+imgIY+z].slide = imgIY;
					geoT[6*7+imgIY+z].me = 6*7+imgIY+z;
					scene.add(geoT[6*7+imgIY+z]);
				}	

				scene.add(geoT[imgIY]);
			}
		}
}
createSlides();

var light = new THREE.PointLight( 0xffffff, 1, 0 );

// Specify the light's position
light.position.set(1, 1, 100 );

// Add the light to the scene
scene.add(light)




// Render Loop
var render = function () {
	controls.update();
	camera.updateProjectionMatrix;
	update();
  requestAnimationFrame( render );

  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();
