
export function Grid({ width, height }) {
  const meshes = [];
  for (let j = 0; j < height; ++j) {
    for (let i = 0; i < width; ++i) {
      let bump = 0;
      let color = "#222";
      if (i % 2 === j % 2) {
        color = "#ccc";
        bump = 0.1;
      }
      meshes.push(
        <mesh key={j * width + i} position={[i, bump, j]}>
          <boxBufferGeometry attach="geometry" args={[1, 0.25, 1]} />
          <meshPhongMaterial attach="material" color={color} />
        </mesh>
      );
    }
  }
  return <>{meshes}</>;
}
