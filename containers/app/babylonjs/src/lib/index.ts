// place files you want to import through the `$lib` alias in this folder.
import * as BABYLON from '@babylonjs/core';
import { browser } from '$app/environment';
import '@babylonjs/loaders/glTF';

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
                depth: 0.5,
                faceColors: [
                    new BABYLON.Color4(1, 0, 0, 1), // sets the first face (i.e., width) to the color "red" with full opacity, i.e., non-transparency
                    BABYLON.Color3.Green()
                ]
            };
            // const box = BABYLON.MeshBuilder.CreateBox("box", options, scene); // scene is optional and defaults to the current scene
            // const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", options, scene);
            const groundOptions = {
                height: 10,
                width: 10,
                subdivisions: 30
            }
            const ground = BABYLON.MeshBuilder.CreateGround("ground", groundOptions);
            ground.material = new BABYLON.StandardMaterial("material");
            ground.material.wireframe = true;
            BABYLON.SceneLoader.ImportMeshAsync(
                '',
                '/models/',
                'lego_baseplate_48x48_4186_dark_grey.gltf',
                scene
            ).then((result) => {
                const importedAnimGroups = result.animationGroups;
                // Optional, do something with animations.
            });
            const bgMusic = new BABYLON.Sound('mySong', '/sounds/mixkit-birds-in-forest-loop-1239.wav', scene, null, {
                loop:true,
                autoplay: true,
                volume: 0.10
            });
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
