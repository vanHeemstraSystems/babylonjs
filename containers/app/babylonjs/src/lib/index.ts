// place files you want to import through the `$lib` alias in this folder.
import * as BABYLON from '@babylonjs/core';
import { browser } from '$app/environment';

if (browser) {
    const canvas = document.getElementById('renderCanvas');
    if (canvas !== null) {
        const engine = new BABYLON.Engine(canvas);
        const createScene = function () {
            const scene = new BABYLON.Scene(engine);
            scene.createDefaultCameraOrLight(true, false, true);
            const options = {
                size: 0.1,
                width: 2,
                height: 0.05,
                depth: 0.5
            };
            const box = BABYLON.MeshBuilder.CreateBox("box", options, scene); // scene is optional and defaults to the current scene
            // const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", options, scene);
            return scene;
        }
        const scene = createScene();
        engine.runRenderLoop(function () {
            scene.render();
        });
        window.addEventListener('resize', function () {
            engine.resize();
        });
    }
}
