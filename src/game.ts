import * as utils from '@dcl/ecs-scene-utils'

// Create avocado
let avocado = new Entity()
avocado.addComponent(new GLTFShape("models/avocado.gltf"))
avocado.addComponent(
  new Transform({
    position: new Vector3(5, -2, 8),
    scale: new Vector3(50, 50, 50),
  })
)

// Define start and end positions of avocado 
let StartPos = new Vector3(0, 0, 0)
let EndPos = new Vector3(14, 0, 14)

// Move avocado
avocado.addComponent(new utils.MoveTransformComponent(StartPos, EndPos, 3))

// Add avocado to engine
engine.addEntity(avocado)