import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    /* ---- Resize ---- */
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---- Gold palette ---- */
    const GOLD = [201, 168, 76];
    const GLITE = [232, 201, 122];

    const rgba = ([r, g, b], a) => `rgba(${r},${g},${b},${a})`;

    /* ---- Particles (dust) ---- */
    const DUST_COUNT = 80;
    const dust = Array.from({ length: DUST_COUNT }, () => ({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -(Math.random() * 0.25 + 0.05),
      alpha: Math.random() * 0.5 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.004,
      color: Math.random() > 0.5 ? GOLD : GLITE,
    }));

    /* ---- Orbs (large glowing blobs) ---- */
    const ORB_COUNT = 6;
    const orbs = Array.from({ length: ORB_COUNT }, () => ({
      x: Math.random() * 1920,
      y: Math.random() * 1080 + 200,
      r: Math.random() * 120 + 60,
      vx: (Math.random() - 0.5) * 0.06,
      vy: -(Math.random() * 0.06 + 0.02),
      alpha: Math.random() * 0.04 + 0.02,
    }));

    /* ---- Flares (occasional bright spark) ---- */
    const flares = [];
    const spawnFlare = () => {
      flares.push({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        r: 0,
        maxR: Math.random() * 60 + 20,
        alpha: 0.6,
        dying: false,
      });
    };
    let flareTick = 0;

    /* ---- Draw loop ---- */
    const draw = (t) => {
      // Use actual viewport each frame
      W = canvas.width;
      H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      /* 1 — Orbs */
      for (const o of orbs) {
        const gx = (o.x / 1920) * W;
        const gy = (o.y / 1080) * H;
        const gr = (o.r / 1920) * W;

        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        grad.addColorStop(0, rgba(GOLD, o.alpha * 1.6));
        grad.addColorStop(0.4, rgba(GOLD, o.alpha * 0.6));
        grad.addColorStop(1, rgba(GOLD, 0));
        ctx.beginPath();
        ctx.arc(gx, gy, gr, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        o.x += o.vx;
        o.y += o.vy;
        if (o.y < -200) {
          o.y = 1280;
          o.x = Math.random() * 1920;
        }
        if (o.x < -200) o.x = 1920 + 200;
        if (o.x > 1920 + 200) o.x = -200;
      }

      /* 2 — Dust particles */
      for (const d of dust) {
        d.pulse += d.speed;
        const a = d.alpha * (0.6 + 0.4 * Math.sin(d.pulse));
        const px = (d.x / 1920) * W;
        const py = (d.y / 1080) * H;

        // Glow halo
        const halo = ctx.createRadialGradient(px, py, 0, px, py, d.r * 4);
        halo.addColorStop(0, rgba(d.color, a * 0.5));
        halo.addColorStop(1, rgba(d.color, 0));
        ctx.beginPath();
        ctx.arc(px, py, d.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, d.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(d.color, Math.min(a * 1.8, 0.95));
        ctx.fill();

        d.x += d.vx;
        d.y += d.vy;
        if (d.y < -10) {
          d.y = 1090;
          d.x = Math.random() * 1920;
        }
        if (d.x < -10) d.x = 1930;
        if (d.x > 1930) d.x = -10;
      }

      /* 3 — Diagonal hair-line grid */
      const spacing = 220;
      ctx.save();
      ctx.strokeStyle = rgba(GOLD, 0.035);
      ctx.lineWidth = 0.5;
      const drift = (t * 0.008) % spacing;
      for (let i = -H; i < W + H; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(i + drift, 0);
        ctx.lineTo(i + drift + H, H);
        ctx.stroke();
      }
      ctx.restore();

      /* 4 — Flares */
      flareTick++;
      if (flareTick % 240 === 0 && flares.length < 4) spawnFlare();

      for (let i = flares.length - 1; i >= 0; i--) {
        const f = flares[i];
        const fx = (f.x / 1920) * W;
        const fy = (f.y / 1080) * H;

        if (!f.dying) {
          f.r += 1.2;
          if (f.r >= f.maxR) f.dying = true;
        } else {
          f.r += 0.4;
          f.alpha -= 0.012;
        }

        const fg = ctx.createRadialGradient(fx, fy, 0, fx, fy, f.r);
        fg.addColorStop(0, rgba(GLITE, f.alpha * 0.9));
        fg.addColorStop(0.3, rgba(GOLD, f.alpha * 0.4));
        fg.addColorStop(1, rgba(GOLD, 0));
        ctx.beginPath();
        ctx.arc(fx, fy, f.r, 0, Math.PI * 2);
        ctx.fillStyle = fg;
        ctx.fill();

        if (f.alpha <= 0) flares.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.55,
      }}
    />
  );
}
