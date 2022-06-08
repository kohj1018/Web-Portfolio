export const PI2 = Math.PI * 2;

interface rgbTypes {
  r: number;
  g: number;
  b: number;
}

export class GlowParticle {
  x: number;
  y: number;
  radius: number;
  rgb: rgbTypes;
  vx: number;
  vy: number;
  sinValue: number;
  constructor(x: number, y: number, radius: number, rgb: rgbTypes) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;

    this.sinValue = Math.random();
  }

  animate(ctx: CanvasRenderingContext2D, stageWidth: number, stageHeight: number) {
    this.sinValue += 0.01;

    this.radius += Math.sin(this.sinValue) * 1 / 2;

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b})`;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}