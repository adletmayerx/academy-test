import react, { MutableRefObject, RefObject, useEffect } from "react";

const useRandomColor = (node: RefObject<Text>) => {
  const { random, floor } = Math;

  useEffect(() => {
    const colors = ["red", "green", "blue"];
    if (node && node.current) {
      (node.current as any).style.color = colors[floor(random() * 3)];
    }
  }, [node, floor, random]);

  return node;
};

export { useRandomColor };
