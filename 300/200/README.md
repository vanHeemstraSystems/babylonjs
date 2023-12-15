# 200 - Modify the BabylonJS application

Run the server again:

```
$ cd containers/app/babylonjs
$ npm run dev -- --open
```

## 100 - The 4 essential elements of a Babylon.js app

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

Next we're going to assign the returned scene to a variable which we'll need in this run render Loop callback function:

```
...
    const scene = createScene();
    engine.runRenderLoop(function() {
      scene.render();
    });
...
```
containers/app/babylonjs/src/lib/index.ts

**WARNING**: You may be warned as follows:

```Uncaught Error: No camera defined```

Before we add a camera, let us first allow for the canvas to take all the space on the page, as follows:

```
html, body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
```
containers/app/babylonjs/src/static/style.css

```
...
<link rel="stylesheet" type="text/css" href="%sveltekit.assets%/style.css">
...
```
containers/app/babylonjs/src/app.html

```
...
<style>
  #renderCanvas {
    width: 100%;
    height: 100%;
    touch-action: none;
  }  
</style>
...
```
containers/app/babylonjs/src/routes/+page.svelte

You should now see a dark rectangle on your home page, representing the canvas, covering your whole page.

Let's fix the issue with not having a camera for now:

```
...
  scene.createDefaultCameraOrLight(true, false, true); 
  const options = {};
  const box = BABYLON.MeshBuilder.CreateBox("box", options, scene); // scene is optional and defaults to the current scene
...
```
containers/app/babylonjs/src/routes/+page.svelte

If you look in your server's page again, and zoom out with your mouse (by clicking in the canvas and scrolling backwards), you'll see that a box has been added to the scene. You can spin it around too...

However, a problem is that when we resize the window, the box is not proportionally scaled. We'll fix this in next section.

## 200 - Making the canvas responsive

In order for any assets on the scene to scale proportionally with the canvas, add the following:

```
...
  window.addEventListener('resize', function() {
    engine.resize();
  });
...
```
containers/app/babylonjs/src/lib/index.ts

If you check again in your server the content of the canvas will scale proportionally to the (resizing of) the browser window. **NOTE**: You may have to click the inside canvas, and zoom out with your mouse before you see the box in the center of the canvas.




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