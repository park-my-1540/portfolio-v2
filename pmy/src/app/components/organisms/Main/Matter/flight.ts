import Matter from 'matter-js';

type FlightOptions = {
  width: number;
  target: { left: number; top: number; width: number; height: number };
  sprite: { texture: string };
  random?: () => number;
};

/** Center-weighted rain transfers momentum into the sleeping title. */
export default function createFlightAnimation(
  engine: Matter.Engine,
  letters: Matter.Body[],
  { width, target, sprite, random = Math.random }: FlightOptions,
) {
  const world = engine.world;
  engine.gravity.y = 1.5;
  letters.forEach((letter) => {
    Matter.Body.setStatic(letter, false);
    letter.restitution = 0;
    letter.friction = 0.1;
    letter.frictionStatic = 0.5;
    letter.frictionAir = 0.018;
    letter.sleepThreshold = 60;
    letter.collisionFilter.category = 0x0004;
    Matter.Sleeping.set(letter, true);
  });

  // Match the original narrow support; do not enclose the scene with side walls.
  Matter.Composite.add(world, Matter.Bodies.rectangle(
    target.left + target.width / 2, target.top + target.height + 55,
    target.width / 1.5, 100,
    { isStatic: true, collisionFilter: { category: 0x0002 }, render: { visible: false } },
  ));

  const startedAt = engine.timing.timestamp;
  let spawned = 0;
  let nextSpawnAt = 0;
  const update = () => {
    if (spawned >= 20) return;
    const elapsed = engine.timing.timestamp - startedAt;
    if (elapsed < nextSpawnAt) return;
    const scale = Math.max(0.6, Math.min(1, target.width / 620)) * 0.7;
    const halfWidth = 46 * scale;
    const centerX = target.left + target.width / 2;
    // Average two samples to favor the center without making a rigid column.
    const spread = target.width * 0.52;
    const x = Math.max(halfWidth, Math.min(width - halfWidth,
      centerX + ((random() + random()) / 2 - 0.5) * spread));
    const accent = Matter.Bodies.rectangle(x, -60 - random() * 45, 92 * scale, 39 * scale, {
      density: 0.025,
      friction: 0.22,
      frictionAir: 0.012,
      restitution: 0.18,
      chamfer: { radius: 5 * scale },
      angle: (random() - 0.5) * Math.PI * 0.8,
      render: { sprite: { texture: sprite.texture, xScale: scale, yScale: scale } },
    });
    Matter.Body.setAngularVelocity(accent, (random() - 0.5) * 0.025);
    nextSpawnAt = elapsed + 220 + random() * 160;
    Matter.Composite.add(world, accent);
    spawned += 1;
    if (spawned === 20) Matter.Events.off(engine, 'afterUpdate', update);
  };
  Matter.Events.on(engine, 'afterUpdate', update);
  return () => Matter.Events.off(engine, 'afterUpdate', update);
}
