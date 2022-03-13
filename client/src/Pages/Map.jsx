import React from "react";
import Classes from "./map.module.css";
import map from "../services/tour/map";
const Map = ({ currentLocation, onNodeHover }) => {
  console.log(map);
  const generateMapInfo = () => {
    let facsInfo = map;
    let cordinates = { x: 195.5, y: 100 };
    facsInfo = facsInfo.map((faculty) => {
      cordinates = faculty.cordinates ? faculty.cordinates : cordinates;
      console.log(cordinates);
      if (faculty.right !== null) {
        let rightNodeCordinates = {
          x: cordinates.x + 150,
          y: 100,
        };
        if (!facsInfo[faculty.right].cordinates)
          facsInfo[faculty.right].cordinates = rightNodeCordinates;
      }
      if (faculty.left !== null) {
        let leftNodeCordinates = {
          x: cordinates.x - 150,
          y: 100,
        };
        if (!facsInfo[faculty.left].cordinates)
          facsInfo[faculty.left].cordinates = leftNodeCordinates;
      }
      return faculty;
    });
    return facsInfo;
  };
  const drawNodes = () => {
    const drawedPaths = {};
    let nodesInfo = generateMapInfo();
    return nodesInfo.map((node, index) => {
      const { x, y } = node.cordinates;
      const translate = `translate(${x}, ${y})`;
      let pathLeft = <></>;
      if (node.left) {
        const { x: lx, y: ly } = nodesInfo[node.left].cordinates;
        let sorted = [index, node.left].sort((a, b) => a - b);
        let drawedPath = sorted.join();
        if (!(drawedPath in drawedPaths)) {
          pathLeft = (
            <path
              d={`M ${x} ${y} Q 97.75 159.14 ${lx} ${ly}`}
              stroke="black"
              fill="none"
              class="map_link__1iGMX"
              marker-end="url(#link-arrow)"
            ></path>
          );
          drawedPaths[drawedPath] = true;
        }
      }
      let pathRight = <></>;
      if (node.right) {
        const { x: rx, y: ry } = nodesInfo[node.right].cordinates;
        let sorted = [index, node.right].sort((a, b) => a - b);
        let drawedPath = sorted.join();
        if (!(drawedPath in drawedPaths)) {
          pathRight = (
            <path
              d={`M ${x} ${y} Q 97.75 159.14 ${rx} ${ry}`}
              stroke="black"
              fill="none"
              class="map_link__1iGMX"
              marker-end="url(#link-arrow)"
            ></path>
          );
          drawedPaths[drawedPath] = true;
        }
      }
      const isActive = currentLocation === node;
      return (
        <>
          <g
            className="node"
            key={index}
            transform={translate}
            onMouseOver={() => onNodeHover(node.title)}
            onMouseOut={() => onNodeHover("")}
          >
            <circle
              className={`${Classes.circle}  ${
                isActive && Classes.active_node
              }`}
              r={20}
            />
            <text
              dy=".35em"
              style={{ textAnchor: "middle", textShadow: "black 1px 1px" }}
            >
              MU
            </text>
          </g>
          {pathLeft} {pathRight}
        </>
      );
    });
  };

  return (
    <div className={Classes.map}>
      <div className="graph-root">
        <svg width={500} height={200}>
          <g transform="translate(50, 30)">{drawNodes()}</g>
          <defs>
            <marker
              id="link-arrow"
              viewBox="0 0 5 5"
              refX="4.5"
              refY="2.5"
              markerUnits="strokeWidth"
              markerWidth={5}
              markerHeight={5}
              orient="auto"
            >
              <path d="M 0 0 L 5 2.5 L 0 5 z" fill="#626ee3" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};
export default Map;
