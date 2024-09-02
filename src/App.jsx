import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url); // Загрузка модели с использованием хука useGLTF
  return <primitive object={scene} dispose={null} />;
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Добавляем свет и настройки камеры */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Загружаем модель с использованием React Suspense для асинхронной загрузки */}
      <Suspense fallback={null}>
        <Model url="/cake.glb" />
      </Suspense>
      
      {/* Добавляем контроллеры для вращения и масштабирования */}
      <OrbitControls />
    </Canvas>
  )
}

export default App
