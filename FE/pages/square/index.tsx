import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
import {
  OrbitControls,
  Stars,
  Stats,
  // useTexture,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
import Lights from '@components/square/Lights';
import Ground from '@components/square/Ground';
import { TetrisModel } from '@components/square/Tetris';
import { AppleTreeModel } from '@components/square/Appletree';
import { DaisyModel } from '@components/square/Daisy';

const AvatarFinn = () => {
  const model = useGLTF('./avatar_finn/avatar_finn.glb');
  const { actions } = useAnimations(model.animations, model.scene);

  console.log(model);
  useEffect(() => {}, []);

  return <primitive object={model.scene} />;
};

// const TextureSpheres = () => {
//   const map = useTexture('../textures/aerial_rocks_04_diff_1k.png');
//   const normalMap = useTexture('../textures/aerial_rocks_04_nor_gl_1k.png');
//   const roughnessMap = useTexture('../textures/aerial_rocks_04_rough_1k.png');

//   return (
//     <>
//       <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
//         <sphereGeometry />
//         <meshStandardMaterial
//           map={map}
//           normalMap={normalMap}
//           roughnessMap={roughnessMap}
//         />
//       </mesh>
//     </>
//   );
// };

function Square() {
  const styles = {
    container: {
      width: '100%',
      height: '100vh',
    },
  } as const;

  // 개발중일때 , true 상태관리와 helper를 키고,끌수 있도록 함
  const testing = true;

  return (
    <div style={styles.container}>
      <Canvas shadows>
        {/*testing = true : 왼쪽상단에 상태를 보여준다, helper 킨다 */}
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[2]} /> : null}
        {testing ? <gridHelper args={[30, 30]} /> : null}
        <OrbitControls />
        <Stars />
        <Ground />
        <TetrisModel position={[2, 0, 0]} />
        <AppleTreeModel position={[-3, 0, 2]} />
        <DaisyModel position={[1, 0, 2]} />
        {/* <TextureSpheres /> */}
        <Lights />
        <AvatarFinn />
      </Canvas>
    </div>
  );
}

export default Square;
