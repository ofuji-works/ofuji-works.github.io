import React, { useState, useEffect, createRef } from 'react'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  PlaneGeometry,
  MeshStandardMaterial,
  Mesh,
  Vector3,
  AmbientLight,
  SpotLight,
  // SpotLightHelper,
} from 'three'

const newScene = () => {
  const scene = new Scene()
  return scene
}

const newCamera = () => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000,
  )
  camera.position.set(0, 0, +800)
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

const newSpotLight = () => {
  const light = new SpotLight(0xffffff, 0.5, 0, Math.PI / 4, 1)
  light.position.set(100, 350, 100)
  light.castShadow = true
  light.shadow.mapSize.width = 2048
  light.shadow.mapSize.height = 2048
  light.shadow.camera.near
  return light
}

const newAmbientLight = () => {
  const ambientLight = new AmbientLight(0xffffff, 0.9)
  return ambientLight
}

const CanvasComponent: React.FC = () => {
  const [placeX, setPlaceX] = useState<number>(0)
  const mount = createRef<HTMLDivElement>()

  useEffect(() => {
    const scene = newScene()
    const camera = newCamera()
    const renderer = newRenderer(mount)
    const light = newSpotLight()
    const ambientLight = newAmbientLight()

    const planeMesh = new Mesh(
      new PlaneGeometry(1000, 1000, 1, 1),
      new MeshStandardMaterial(),
    )
    const wallMesh = new Mesh(
      new PlaneGeometry(1000, 1000, 1, 1),
      new MeshStandardMaterial(),
    )
    const sideWallMesh = new Mesh(
      new PlaneGeometry(1000, 1000, 1, 1),
      new MeshStandardMaterial(),
    )
    const mesh = new Mesh(
      new BoxGeometry(100, 100, 100),
      new MeshStandardMaterial({
        color: 0x43c4c4,
        roughness: 0,
      }),
    )

    scene.add(ambientLight)

    scene.add(wallMesh)
    scene.add(sideWallMesh)
    scene.add(planeMesh)
    scene.add(mesh)

    light.target = mesh
    scene.add(light)

    let rot = 0

    // const lightHelper = new SpotLightHelper(light)
    // scene.add(lightHelper)

    mesh.position.y = 100

    wallMesh.position.z = -500
    sideWallMesh.position.x = -500
    sideWallMesh.rotation.y = Math.PI / 2
    planeMesh.rotation.x = -Math.PI / 2

    const render = () => {
      mesh.rotation.x = mesh.rotation.y += 0.01
      planeMesh.receiveShadow = true
      mesh.castShadow = true

      const targetRot = (placeX / window.innerWidth) * 360
      rot += (targetRot - rot) * 0.02
      rot += 1
      const radian = (rot * Math.PI) / 180

      camera.position.x = 800 * Math.sin(radian)
      camera.position.z = 300 * Math.cos(radian)
      camera.position.y = 300 * Math.cos(radian)

      renderer.shadowMap.enabled = true
      camera.lookAt(new Vector3(0, 0, 0))
      renderer.render(scene, camera)
    }

    const animate = () => {
      render()
      // lightHelper.update()
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
