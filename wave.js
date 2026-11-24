// Project a sampled signal onto a perspective grid. Redraw only on input or resize.
const canvas = document.querySelector('#wave');
const ctx = canvas.getContext('2d');
function drawSignal() {
  if (!ctx) return;
  const { width, height } = canvas.getBoundingClientRect();
  if (!width || !height) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const gain = amplitude.valueAsNumber / 100;
  function point(x, y) {
    const envelope = Math.exp(-3.2 * (x*x + .76*y*y));
    const signal = .52 + .48 * Math.cos(8*x - 3.5*y + .25);
    return [
      width * (.5 + .31*x + .14*y),
      height * (.64 + .13*x - .22*y - gain*1.07*envelope*signal)
    ];
  }
  function path(points) {
    ctx.beginPath();
    points.forEach(([x,y], i) => i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
  }
  const rows = 44, columns = 80;
  for (let j = rows; j > 0; j--) {
    const far = -1 + 2*j/rows, near = far - 2/rows;
    const edge = Array.from({length:columns+1}, (_, i) => point(-1+2*i/columns, near));
    const back = Array.from({length:columns+1}, (_, i) => point(1-2*i/columns, far));
    path([...edge, ...back]); ctx.closePath(); ctx.fillStyle = '#15382d'; ctx.fill();
    path(edge); ctx.lineWidth = .9; ctx.strokeStyle = '#88deb0'; ctx.stroke();
    ctx.lineWidth = .58; ctx.strokeStyle = '#639c80';
    for (let i=0; i<=columns; i+=4) {
      path([edge[i], back[columns-i]]); ctx.stroke();
    }
  }
}
amplitude.addEventListener('input', drawSignal);
new ResizeObserver(drawSignal).observe(canvas);
drawSignal();
