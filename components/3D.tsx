import React, { useState, useEffect, createRef } from 'react'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  DirectionalLight,
  MeshStandardMaterial,
  Mesh,
  Vector3,
} from 'three'

const newScene = () => {
  const scene = new Scene()
  return scene
}

const newCamera = () => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
  )
  camera.position.set(0, 0, +500)
  return camera
}

const newRenderer = (mount: React.RefObject<HTMLDivElement>) => {
  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0xfafafa, 1)
  renderer.autoClear = true
  if (mount.current) {
    mount.current.appendChild(renderer.domElement)
  }
  return renderer
}

const newDirectionalLight = () => {
  const directionalLight = new DirectionalLight(0xffffff)
  directionalLight.position.set(1, 1, 1)

  return directionalLight
}

const CanvasComponent: React.FC = () => {
  const [placeX, setPlaceX] = useState<number>(0)
  const mount = createRef<HTMLDivElement>()

  useEffect(() => {
    const scene = newScene()
    const camera = newCamera()
    const renderer = newRenderer(mount)
    const directionalLight = newDirectionalLight()
    const geometry = new BoxGeometry(200, 200, 200)
    const material = new MeshStandardMaterial({ color: 0x43c4c4 })
    const mesh = new Mesh(geometry, material)

    scene.add(directionalLight)
    scene.add(mesh)

    let rot = 0

    const render = () => {
      mesh.rotation.x = mesh.rotation.y += 0.01

      const targetRot = (placeX / window.innerWidth) * 360
      rot += (targetRot - rot) * 0.02
      rot += 1
      const radian = (rot * Math.PI) / 180

      camera.position.x = 600 * Math.sin(radian)
      camera.position.z = 600 * Math.cos(radian)
      camera.lookAt(new Vector3(0, 0, 0))

      renderer.render(scene, camera)
    }

    const animate = () => {
      render()
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <>
      <div
        className="model-wrapper"
        onMouseMove={(event) => {
          setPlaceX(event.pageX)
        }}
        ref={mount}
      ></div>
      <style jsx>{`
        .model-wrapper {
          position: fixed;
        }
      `}</style>
    </>
  )
}

export default CanvasComponent
