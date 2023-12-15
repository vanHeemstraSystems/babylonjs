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

The first thing we'll do is to create the Canvas element, as follows:

```
...
  <canvas id="renderCanvas"></canvas>
...
```
containers/app/babylonjs/src/+page.svelte







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