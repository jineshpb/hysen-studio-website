"use client";

import { Line } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useMemo } from "react";

type Point3 = [number, number, number];

type GridParams = {
  width: number;
  length: number;
  xSteps: number;
  ySteps: number;
  xSamples: number;
  ySamples: number;
  floorPortion: number;
  bendPortion: number;
  bendRadius: number;
  wallRise: number;
  baseY: number;
  zNear: number;
  zBendStart: number;
  sideLiftStrength: number;
  sideLiftPower: number;
  lineColor: string;
  lineOpacity: number;
  lineWidth: number;
};

function CurvedGridLines({
  width,
  length,
  xSteps,
  ySteps,
  xSamples,
  ySamples,
  floorPortion,
  bendPortion,
  bendRadius,
  wallRise,
  baseY,
  zNear,
  zBendStart,
  sideLiftStrength,
  sideLiftPower,
  lineColor,
  lineOpacity,
  lineWidth,
}: GridParams) {
  const { horizontalLines, verticalLines } = useMemo(() => {
    // Cyclorama-like profile: flat floor -> quarter bend -> upright wall.
    const safeFloorPortion = Math.max(0.05, Math.min(0.9, floorPortion));
    const safeBendPortion = Math.max(0.05, Math.min(0.9 - safeFloorPortion, bendPortion));
    const tailPortion = Math.max(0.01, 1 - safeFloorPortion - safeBendPortion);

    const toWorld = (x: number, s: number): Point3 => {
      const u = (s + length / 2) / length;

      let yVal = baseY;
      let zVal = zNear;

      if (u <= safeFloorPortion) {
        const t = u / safeFloorPortion;
        yVal = baseY;
        zVal = zNear + (zBendStart - zNear) * t;
      } else if (u <= safeFloorPortion + safeBendPortion) {
        const t = (u - safeFloorPortion) / safeBendPortion;
        const theta = t * (Math.PI / 2);
        yVal = baseY + bendRadius * (1 - Math.cos(theta));
        zVal = zBendStart - bendRadius * Math.sin(theta);
      } else {
        const t = (u - safeFloorPortion - safeBendPortion) / tailPortion;
        yVal = baseY + bendRadius + wallRise * t;
        zVal = zBendStart - bendRadius;
      }

      // Subtle side lift keeps the center visually flatter and the edges slightly raised.
      const side = Math.abs(x) / (width / 2);
      const sideLift = Math.pow(side, sideLiftPower) * sideLiftStrength;

      return [x, yVal + sideLift, zVal];
    };

    const horizontalLines: Point3[][] = [];
    const verticalLines: Point3[][] = [];

    for (let row = 0; row <= ySteps; row += 1) {
      const s = -length / 2 + (row / ySteps) * length;
      const points: Point3[] = [];

      for (let sample = 0; sample <= xSamples; sample += 1) {
        const x = -width / 2 + (sample / xSamples) * width;
        points.push(toWorld(x, s));
      }

      horizontalLines.push(points);
    }

    for (let col = 0; col <= xSteps; col += 1) {
      const x = -width / 2 + (col / xSteps) * width;
      const points: Point3[] = [];

      for (let sample = 0; sample <= ySamples; sample += 1) {
        const s = -length / 2 + (sample / ySamples) * length;
        points.push(toWorld(x, s));
      }

      verticalLines.push(points);
    }

    return { horizontalLines, verticalLines };
  }, [
    baseY,
    bendPortion,
    bendRadius,
    floorPortion,
    length,
    sideLiftPower,
    sideLiftStrength,
    wallRise,
    width,
    xSamples,
    xSteps,
    ySamples,
    ySteps,
    zBendStart,
    zNear,
  ]);

  return (
    <>
      {horizontalLines.map((points, index) => (
        <Line
          key={`h-${index}`}
          points={points}
          color={lineColor}
          lineWidth={lineWidth}
          transparent
          opacity={lineOpacity}
          depthWrite={false}
        />
      ))}
      {verticalLines.map((points, index) => (
        <Line
          key={`v-${index}`}
          points={points}
          color={lineColor}
          lineWidth={lineWidth}
          transparent
          opacity={lineOpacity}
          depthWrite={false}
        />
      ))}
    </>
  );
}

export function HeroBackground() {
  const controls = useControls({
    cameraFov: { value: 55, min: 10, max: 120, step: 1 },
    cameraX: { value: 0, min: -30, max: 30, step: 0.1 },
    cameraY: { value: 4.8, min: -30, max: 30, step: 0.1 },
    cameraZ: { value: 27, min: 2, max: 80, step: 0.1 },
    cameraNear: { value: 0.1, min: 0.01, max: 5, step: 0.01 },
    cameraFar: { value: 200, min: 20, max: 1000, step: 1 },
    width: { value: 68, min: 10, max: 80, step: 1 },
    length: { value: 22, min: 8, max: 80, step: 1 },
    xSteps: { value: 30, min: 4, max: 80, step: 1 },
    ySteps: { value: 16, min: 4, max: 80, step: 1 },
    xSamples: { value: 44, min: 8, max: 180, step: 1 },
    ySamples: { value: 32, min: 8, max: 180, step: 1 },
    floorPortion: { value: 0.40, min: 0.05, max: 0.85, step: 0.01 },
    bendPortion: { value: 0.19, min: 0.05, max: 0.85, step: 0.01 },
    bendRadius: { value: 5.0, min: 0.5, max: 20, step: 0.1 },
    wallRise: { value: 14.5, min: 0, max: 24, step: 0.1 },
    baseY: { value: -3.8, min: -20, max: 20, step: 0.1 },
    zNear: { value: 15.3, min: -10, max: 30, step: 0.1 },
    zBendStart: { value: -1.2, min: -30, max: 30, step: 0.1 },
    sideLiftStrength: { value: 1.60, min: 0, max: 5, step: 0.01 },
    sideLiftPower: { value: 2.24, min: 0.2, max: 4, step: 0.01 },
    lineColor: { value: "#64748b" },
    lineOpacity: { value: 0.24, min: 0, max: 1, step: 0.01 },
    lineWidth: { value: 1, min: 0.5, max: 4, step: 0.1 },
  });

  const roundedControls = {
    ...controls,
    xSteps: Math.max(2, Math.round(controls.xSteps)),
    ySteps: Math.max(2, Math.round(controls.ySteps)),
    xSamples: Math.max(2, Math.round(controls.xSamples)),
    ySamples: Math.max(2, Math.round(controls.ySamples)),
  };

  const canvasKey = `${roundedControls.cameraFov}-${roundedControls.cameraX}-${roundedControls.cameraY}-${roundedControls.cameraZ}-${roundedControls.cameraNear}-${roundedControls.cameraFar}`;

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[100svh] overflow-hidden">
        <Canvas
          key={canvasKey}
          camera={{
            fov: roundedControls.cameraFov,
            position: [roundedControls.cameraX, roundedControls.cameraY, roundedControls.cameraZ],
            near: roundedControls.cameraNear,
            far: roundedControls.cameraFar,
          }}
          dpr={[1, 1.5]}
          frameloop="always"
        >
          <color attach="background" args={["#f4efe4"]} />
          <CurvedGridLines {...roundedControls} />
        </Canvas>

       
      </div>

      <Leva collapsed oneLineLabels titleBar={{ title: "Hero Grid Controls", drag: true, filter: false }} />
    </>
  );
}
