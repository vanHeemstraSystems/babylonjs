# 200 - Modify the BabylonJS application

Run the server again:

```
$ cd containers/app/babylonjs
$ npm run dev -- --open
```

## 100 -  The 4 essential elements of a Babylon.js app

1. The **Canvas**: it is an HTML container in which you show your creations on a page. 
2. The **Engine**: the brain of your BabylonJS App, which transforms the logic you type into living pieces of 3D graphics.
3. The **Scene**: the 3D space where the engine renders the 3D objects.
4. The **Camera**: the role of the camera is to display a certain space within a scene.

We add a reference to the library in our main page, and create the Canvas element like so:

```
...
<script>
  import { } from "$lib/index.ts";
</script>
...
<canvas id="renderCanvas"></canvas>
...
```
containers/app/babylonjs/src/+page.svelte

Continue with adding logic inside of the library as follows:

```
...
// place files you want to import through the `$lib` alias in this folder.
import * as BABYLON from '@babylonjs/core';
import { browser } from '$app/environment';

if (browser) {
    const canvas = document.getElementById('renderCanvas');

    console.log("Hello from lib index!");
}
...
```
containers/app/babylonjs/src/lib/index.ts

Next we're going to create an instance of the Babylon engine class and pass the canvas to the Constructor method so this way we are telling the engine to render the scene in this canvas element.

```
...
    if (canvas !== null) {
        const engine = new BABYLON.Engine(canvas);
    }
...
```
containers/app/babylonjs/src/lib/index.ts


Continue by creating a function that will create a scene, like so:

```
...
    const createScene = function(){
        const scene = new BABYLON.Scene(engine);
        return scene;
    }
...
```
containers/app/babylonjs/src/lib/index.ts

Next we're going to assign the return scene to a variable which we'll need in this run render Loop callback function:

```
...
    const scene = createScene();
    engine.runRenderLoop(function() {
        
    });
...
```
containers/app/babylonjs/src/lib/index.ts





05:16 Making the canvas responsive
06:02 Creating Meshes
12:31 Adding 3D text
14:16 Cameras
19:05 Materials & Colors
22:54 Textures
27:03 Geometric transformations
28:18 Gizmos
30:40 Animation
34:53 Lights
38:39 Shadows
40:27 Fog
41:54 Picking objects (Raycast)
43:09 Importing models
46:11 Sound