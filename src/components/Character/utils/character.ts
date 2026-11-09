import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.frustumCulled = true;

                // Clone original material to preserve skinning & bone bindings
                const origMat = mesh.material as THREE.MeshStandardMaterial;
                const mat = origMat.clone();

                const name = child.name.replace(/\./g, "");

                if (name === "EYEs001" || child.name === "EYEs.001") {
                  // Keep the original model's clean, bright, perfectly symmetrical eyes (no black eye)
                  mesh.material = origMat;
                } else if (name === "Plane007" || child.name === "Plane.007") {
                  // Clean, healthy, glowing warm South Asian complexion matching Rahul's real portrait
                  mat.map = null;
                  mat.color.setHex(0xca9470);
                  mat.roughness = 0.52;
                  mat.metalness = 0.02;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name.toLowerCase().includes("hair")) {
                  // Natural dark black hair with subtle sheen
                  mat.map = null;
                  mat.color.setHex(0x121215);
                  mat.roughness = 0.75;
                  mat.metalness = 0.05;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name.toLowerCase().includes("eyebrow")) {
                  // Clean dark eyebrows
                  mat.map = null;
                  mat.color.setHex(0x101012);
                  mat.roughness = 0.9;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name === "Ear001" || child.name === "Ear.001" || name === "Hand" || child.name === "Hand") {
                  // Matching warm skin tone
                  mat.map = null;
                  mat.color.setHex(0xca9470);
                  mat.roughness = 0.52;
                  mat.metalness = 0.02;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name === "Neck" || child.name === "Neck") {
                  // Crisp white dress shirt collar ring right above the navy suit
                  mat.map = null;
                  mat.color.setHex(0xf0f3f8);
                  mat.roughness = 0.6;
                  mat.metalness = 0.05;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name === "BODYSHIRT" || child.name === "BODY.SHIRT") {
                  // Tailored midnight navy executive business suit jacket
                  mat.map = null;
                  mat.color.setHex(0x1a2638);
                  mat.roughness = 0.6;
                  mat.metalness = 0.08;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name === "Pant" || child.name === "Pant") {
                  // Matching dark navy tailored suit trousers
                  mat.map = null;
                  mat.color.setHex(0x121a26);
                  mat.roughness = 0.7;
                  mat.metalness = 0.05;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name === "Shoe" || child.name === "Shoe") {
                  // Polished black dress shoes
                  mat.map = null;
                  mat.color.setHex(0x0a0a0c);
                  mat.roughness = 0.2;
                  mat.metalness = 0.25;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                } else if (name === "Sole" || child.name === "Sole") {
                  mat.map = null;
                  mat.color.setHex(0x18181c);
                  mat.roughness = 0.6;
                  mat.needsUpdate = true;
                  mesh.material = mat;
                }
              }
            });

            // Compile shaders AFTER all custom materials and textures are bound
            await renderer.compileAsync(character, camera, scene);

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
