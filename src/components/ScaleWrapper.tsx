"use client";

import { useEffect, useState } from "react";

// 设计稿基准宽度 (MacBook Pro 16-inch)
const DESIGN_WIDTH = 1728;

interface ScaleWrapperProps {
  children: React.ReactNode;
}

export default function ScaleWrapper({ children }: ScaleWrapperProps) {
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({ 
    width: DESIGN_WIDTH, 
    height: typeof window !== "undefined" ? window.innerHeight : 1000 
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateScale = () => {
      if (typeof window === "undefined") return;
      
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // 计算缩放比例，基于宽度
      const scaleX = windowWidth / DESIGN_WIDTH;
      
      // 使用宽度比例作为主要缩放因子
      const newScale = Math.min(scaleX, 1); // 不超过100%，避免放大
      
      setScale(newScale);
      setDimensions({
        width: DESIGN_WIDTH,
        height: windowHeight / newScale,
      });
    };

    // 初始计算
    updateScale();

    // 监听窗口大小变化
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  // 在客户端挂载前，使用默认值避免闪烁
  if (!mounted) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100vw",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${DESIGN_WIDTH}px`,
            height: "100vh",
            position: "relative",
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${dimensions.height}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          position: "relative",
        }}
        className="origin-top-center"
      >
        {children}
      </div>
    </div>
  );
}

