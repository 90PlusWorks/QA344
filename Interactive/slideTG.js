// standard global variables
var container, scene, scene2, backgroundScene, backgroundCamera, camera,cameraLeft,cameraRight, renderer, controls,controls1;
var keyboard = new KeyboardState();
var ray, geoT = [], slides = [], geoTSP = [];




// custom global variables
//objects.destroy();
var c1to7 = [1,1,5,2,3,6,1,2,4,4,2,3,6,2,2,3,1,1,3,2,2,3,2,1,1,5,6,3,2,4,1,7,6,4,4,3,7,3,2,2,4,5];
//var countA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
var countA = 1;
var cell = 0.5;
var pc1to7 = 0; 
var cameraHome = { x: 0, y: 0, z: 5.5}, cameraPos = { x: 0, y: 0, z: 10 },cameraPrev = { x: 0, y: 0, z: 10 };
var targetList = [],targetListX = [],targetListY = [],targetListXY = [],savedFiles = [],userLocalName = [],userLocalPass = [];
var numSavedFiles = 0, current = ["NONE", ""],currentFile;
var activeFiles = [];
activeFiles[0] = ". ";
var numUserL = 0;
var numUsers = 1;
var possiX=[], possiY=[], possiZ=[],possiXX=[], possiYX=[], possiZX=[],possiXY=[], possiYY=[], possiZY=[],possiXXY=[], possiYXY=[], possiZXY=[];//positions
var TFlagNum=[],TFlagNumX=[], TFlagNumY=[], TFlagNumXY=[], TColour=[], TColourX=[], TColourY=[], TColourXY=[];
var rotX=[], rotY=[], rotZ=[], rotXX=[], rotYX=[], rotZX=[], rotXY=[], rotYY=[], rotZY=[], rotXXY=[], rotYXY=[], rotZXY=[], DesT=[];//rotations
var vv0x=[], vv0y=[], vv0z=[], vv1x=[], vv1y=[], vv1z=[], vv2x=[], vv2y=[], vv2z=[], vv3x=[], vv3y=[], vv3z=[];//?
var count = 0;		
var targetOBJ = [];
var objects = []; 
var lightsP = [];
var particleLight;
var projector, raycaster, mouse = { x: 0, y: 0 },INTERSECTED, isShiftDown = false;
var light1, light2, light3; 
var li=2, i, iiL, xi, yi, zi, si, sy, sz, ci = 1, cii = 1, ciiX=0, ciiY=0, ciiXY=0; //xi is sum of vx values to determine symetry
var materials = [];
var shininess = 50, specular = 0x333333, bumpScale = 1, shading = THREE.SmoothShading;
var keyCode, KeyCodeUp;

var octa, octaX, octaY,octaZ;
var cubeColor, texture2, backgroundMesh;
var folder1;
var addTetraFlag = 0, addTetraFlag2 = 0, Load2 = 0, addDesignFlag = 0, TexFlag =0;
var texFlag1 = 1,texFlag2 = 1;
var designs =[];
var textures = [];
var Tadd;


