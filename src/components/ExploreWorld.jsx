import { useEffect, useRef, useState } from 'react'
import planeImage from '../assets/Plane.png'

const benefits = ['Custom tours', 'Easy stays', 'Visa help', 'Smooth travel', '24/7 support']

function EarthModel() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const frame = canvas?.parentElement

    if (!canvas || !frame) {
      return undefined
    }

    let THREE
    let renderer
    let scene
    let camera
    let earthGroup
    let quickEarth = null
    let earth = null
    let animationFrame = 0
    let resizeObserver
    let idleTask = 0
    const disposables = []
    let isMounted = true

    const disposeObject = (object) => {
      object.traverse((child) => {
        if (child.geometry) {
          child.geometry.dispose()
        }

        const materials = Array.isArray(child.material) ? child.material : [child.material]

        materials.filter(Boolean).forEach((material) => {
          Object.values(material).forEach((value) => {
            if (value?.isTexture) {
              value.dispose()
            }
          })

          material.dispose()
        })
      })
    }

    const resize = () => {
      if (!renderer || !camera) {
        return
      }

      const { width, height } = frame.getBoundingClientRect()
      const nextWidth = Math.max(1, Math.floor(width))
      const nextHeight = Math.max(1, Math.floor(height))

      camera.aspect = nextWidth / nextHeight
      camera.updateProjectionMatrix()
      renderer.setSize(nextWidth, nextHeight, false)
    }

    const loadDetailedModel = async () => {
      const [{ FBXLoader }] = await Promise.all([
        import('three/examples/jsm/loaders/FBXLoader.js'),
        new Promise((resolve) => {
          const schedule = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 450))
          idleTask = schedule(resolve, { timeout: 2200 })
        }),
      ])

      if (!isMounted) {
        return
      }

      const textureLoader = new THREE.TextureLoader()
      const [emissiveMap, normalMap, roughnessMap] = await Promise.all([
        textureLoader.loadAsync('/earth-desktop-model/textures/Earth_EM.png'),
        textureLoader.loadAsync('/earth-desktop-model/textures/Earth_NORM.png'),
        textureLoader.loadAsync('/earth-desktop-model/textures/Earth_ROUGH.png'),
      ])

      if (!isMounted) {
        emissiveMap.dispose()
        normalMap.dispose()
        roughnessMap.dispose()
        return
      }

      const material = new THREE.MeshStandardMaterial({
        map: quickEarth.material.map,
        emissiveMap,
        normalMap,
        roughnessMap,
        emissive: new THREE.Color(0x1a5f9d),
        emissiveIntensity: 0.18,
        roughness: 0.86,
        metalness: 0,
      })

      const model = await new FBXLoader().loadAsync('/earth-desktop-model/source/Earth.fbx')

      if (!isMounted) {
        material.dispose()
        disposeObject(model)
        return
      }

      model.traverse((child) => {
        if (child.isMesh) {
          child.material = material
          child.castShadow = false
          child.receiveShadow = false
        }
      })

      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      const maxSize = Math.max(size.x, size.y, size.z) || 1

      model.position.sub(center)
      model.scale.setScalar(2.25 / maxSize)

      if (quickEarth) {
        earthGroup.remove(quickEarth)
        quickEarth.geometry.dispose()
        quickEarth.material.dispose()
        quickEarth = null
      }

      earth = model
      earthGroup.add(model)
    }

    const initGlobe = async () => {
      THREE = await import('three')

      if (!isMounted) {
        return
      }

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0, 0, 4.1)

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        canvas,
        powerPreference: 'high-performance',
        premultipliedAlpha: false,
      })

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.setClearColor(0x000000, 0)

      earthGroup = new THREE.Group()
      earthGroup.rotation.set(0.08, -0.45, -0.18)
      scene.add(earthGroup)

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x223366, 2.2)
      scene.add(hemiLight)

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.6)
      keyLight.position.set(-2.2, 2.4, 4)
      scene.add(keyLight)

      const rimLight = new THREE.DirectionalLight(0x82c7ff, 1.15)
      rimLight.position.set(2.5, -0.4, -2.5)
      scene.add(rimLight)

      quickEarth = new THREE.Mesh(
        new THREE.SphereGeometry(1.12, 48, 32),
        new THREE.MeshStandardMaterial({
          color: 0x2f92c9,
          emissive: new THREE.Color(0x1a5f9d),
          emissiveIntensity: 0.12,
          roughness: 0.86,
          metalness: 0,
        }),
      )
      earthGroup.add(quickEarth)

      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(frame)
      resize()

      const animate = () => {
        earthGroup.rotation.y += 0.00125

        if (earth) {
          earth.rotation.y += 0.00035
        }

        renderer.render(scene, camera)
        animationFrame = requestAnimationFrame(animate)
      }

      animate()

      const colorMap = await new THREE.TextureLoader().loadAsync('/earth-desktop-model/textures/Earth_ALB.png')

      if (!isMounted) {
        colorMap.dispose()
        return
      }

      colorMap.colorSpace = THREE.SRGBColorSpace
      colorMap.generateMipmaps = false
      colorMap.minFilter = THREE.LinearFilter
      disposables.push(colorMap)

      quickEarth.material.map = colorMap
      quickEarth.material.needsUpdate = true
      loadDetailedModel()
    }

    initGlobe()

    return () => {
      isMounted = false
      cancelAnimationFrame(animationFrame)
      resizeObserver?.disconnect()

      if (idleTask) {
        if (window.cancelIdleCallback) {
          window.cancelIdleCallback(idleTask)
        } else {
          window.clearTimeout(idleTask)
        }
      }

      if (quickEarth) {
        disposeObject(quickEarth)
      }

      if (earth) {
        disposeObject(earth)
      }

      disposables.forEach((disposable) => disposable.dispose())
      renderer?.dispose()
      earthGroup?.clear()
    }
  }, [])

  return <canvas ref={canvasRef} className="earth-canvas" aria-label="Rotating 3D Earth" />
}

function ExploreWorld() {
  const benefitListRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const benefitList = benefitListRef.current

    if (!benefitList) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.22,
      },
    )

    observer.observe(benefitList)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="explore-section">
      <h2>Explore the world with us</h2>

      <div className="explore-content">
        <div className="globe-frame" aria-hidden="true">
          <EarthModel />
          <span className="plane-orbit">
            <img src={planeImage} alt="" />
          </span>
        </div>

        <ol ref={benefitListRef} className={`benefit-list${isVisible ? ' is-visible' : ''}`}>
          {benefits.map((benefit, index) => (
            <li key={benefit} style={{ '--reveal-delay': `${index * 420}ms` }}>
              <span>{index + 1}</span>
              {benefit}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ExploreWorld
