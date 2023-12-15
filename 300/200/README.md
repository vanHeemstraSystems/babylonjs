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

## 300 - Creating Meshes

An object that figure inside the scene is often referred to as a **mesh**. It could be a box, a sphere, a complex shape like a Taurus knot or even more complex like a model created using 3D modeling software like blender. The good thing is that Babylon GS provides a big set of built-in meshes that we can introduce to our scene. So let's see how we can do that.

```
...
  // const box = BABYLON.MeshBuilder.CreateBox("box", options, scene);
  const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", options, scene);
...
```
containers/app/babylonjs/src/lib/index.ts

Note the ```options``` argument.  

We can alter some of the properties of our sphere like the **number of segments**. 

```{ segments: 5 }```

Reducing the value of that property resulted in a loss of quality of the sphere and that's because meshes are actually composed of a set of triangles made out of segments and points also known as vertices. The more lines we have the more triangles we get hence we have more details that define the surface of the mesh. Having said that if we increase the number of segments (for example from 5 to 50) you can see that the sphere now looks smooth.

Another property we can change is the **diameter** of the sphere. We can also change the diameter based on a certain axis (for example the Y-axis):

```
{ 
  segments: 50,
  diameter: 0.3,
  diameterY: 0.4
}
```

Back to the **box**. So here again we can set a name in an object with a set of properties and by the way we can skip the scene here, because when you have only one scene the presence or absence of the third argument doesn't change anything.

```
...
  const options = {};
  const box = BABYLON.MeshBuilder.CreateBox("box", options);
...
```
containers/app/babylonjs/src/lib/index.ts

So in this options object we can set the size of the box we can also change each component of the size individually using the width height and depth properties.

```
...
  const options = {
    size: 0.1,
    width: 2,
    height: 0.05,
    depth: 0.5
  };
...
```
containers/app/babylonjs/src/lib/index.ts

We can change the color of the Box faces so face colors here is an array of six elements every element is the color representation of one of the Cube's faces. A color is made by using an instance of the ```Color3``` or ```Color4``` classes. The difference here resides in the opacity, which can be set by the fourth argument of the color. For instance the first three arguments represent the red, green, and blue channels of the color.

```
...
  const options = {
    ...
    faceColors: [
      new BABYLON.Color4(1, 0, 0, 1) // sets the first face to the color "red" with full opacity, i.e., non-transparency
    ],
    ...
  };
...
```
containers/app/babylonjs/src/lib/index.ts

Another way of making a color is to simply use the name of the color (e.g., Green).


```
...
  const options = {
    ...
    faceColors: [
      new BABYLON.Color4(1, 0, 0, 1),
      BABYLON.Color3.Green()
    ],
    ...
  };
...
```
containers/app/babylonjs/src/lib/index.ts

We are done with the Box. 

We can add the **ground**, which is defined by a width and a height. And we also have the number of subdivisions, which is pretty much the same as the segments property of the sphere.

```
...
  const groundOptions = {
    height: 10,
    width: 10,
    subdivisions: 30
  }
  const ground = BABYLON.MeshBuilder.CreateGround("ground", groundOptions);
...
```
containers/app/babylonjs/src/lib/index.ts

However as you can see here we can't notice the effect of this property even though it is there. So to see how this property affects the ground let me just add a couple lines and I'll get back to them later on.

```
...
  ground.material = BABYLON.StandardMaterial("material");
  ground.material.wireframe = true;
...
```
containers/app/babylonjs/src/lib/index.ts

This is our ground represented only by its subdivisions. Now let's reduce the number and see what we are going to get. That done we can change the number of subdivisions horizontally and vertically.

MORE ...


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