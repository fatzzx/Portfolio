/* eslint-disable react/prop-types */
// Adapted from the Magic UI portfolio template (MIT, Dillion Verma).
import { useEffect, useRef } from "react";

export const FlickeringGrid = ({ squareSize = 2, gridGap = 2, flickerChance = 0.3, maxOpacity = 0.3, className, style }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    let visible = true;
    let grid = { cols: 0, rows: 0, squares: new Float32Array(0), dpr: 1 };
    let rgb = "0, 0, 0";

    const readColor = () => {
      const probe = document.createElement("canvas").getContext("2d");
      probe.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--ink") || "#000";
      probe.fillRect(0, 0, 1, 1);
      const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
      rgb = `${r}, ${g}, ${b}`;
    };

    const setup = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.floor(width / (squareSize + gridGap));
      const rows = Math.floor(height / (squareSize + gridGap));
      const squares = new Float32Array(cols * rows).map(() => Math.random() * maxOpacity);
      grid = { cols, rows, squares, dpr };
    };

    const draw = () => {
      const { cols, rows, squares, dpr } = grid;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          ctx.fillStyle = `rgba(${rgb}, ${squares[i * rows + j]})`;
          ctx.fillRect(i * (squareSize + gridGap) * dpr, j * (squareSize + gridGap) * dpr, squareSize * dpr, squareSize * dpr);
        }
      }
    };

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (visible) {
        const { squares } = grid;
        for (let i = 0; i < squares.length; i++) {
          if (Math.random() < flickerChance * dt) squares[i] = Math.random() * maxOpacity;
        }
        draw();
      }
      raf = requestAnimationFrame(tick);
    };

    readColor();
    setup();
    draw();
    if (!reduced) raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => { setup(); draw(); });
    ro.observe(container);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(container);
    const mo = new MutationObserver(() => { readColor(); draw(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); mo.disconnect(); };
  }, [squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <div ref={containerRef} className={className} style={style} aria-hidden="true">
      <canvas ref={canvasRef} className="pointer-events-none" />
    </div>
  );
};
