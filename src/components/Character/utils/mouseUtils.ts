import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number,
  neckBone?: THREE.Object3D | null
) => {
  if (!headBone) return;
  if (window.scrollY < 200) {
    // Unslouch neck into confident, natural posture
    if (neckBone) {
      neckBone.rotation.x = lerp(neckBone.rotation.x, 0.08, interpolationX);
      neckBone.rotation.y = lerp(neckBone.rotation.y, mouseX * 0.15, interpolationY);
    }

    const maxRotation = Math.PI / 5;
    // Turn head to follow mouse left/right
    headBone.rotation.y = lerp(
      headBone.rotation.y,
      mouseX * maxRotation,
      interpolationY
    );
    // Head pitch: held up proudly (+0.18) looking straight at visitor, nods up/down with cursor
    const targetPitch = -mouseY * 0.35 + 0.18;
    const clampedPitch = Math.max(-0.25, Math.min(0.40, targetPitch));
    headBone.rotation.x = lerp(headBone.rotation.x, clampedPitch, interpolationX);
    // Natural subtle roll
    headBone.rotation.z = lerp(headBone.rotation.z, -mouseX * 0.08, interpolationY);
  } else {
    if (window.innerWidth > 1024) {
      if (neckBone) {
        neckBone.rotation.x = lerp(neckBone.rotation.x, 0.15, 0.03);
      }
      headBone.rotation.x = lerp(headBone.rotation.x, -0.05, 0.03);
      headBone.rotation.y = lerp(headBone.rotation.y, -0.15, 0.03);
    }
  }
};
