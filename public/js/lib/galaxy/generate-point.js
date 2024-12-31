onmessage = function (e) {
    const parameters = e.data.parameters;
    const insideColor = hexToRgb(e.data.parameters.insideColor);
    const outsideColor = hexToRgb(e.data.parameters.outsideColor);
    // Результаты вычислений
    const positions = new Float32Array(parameters.count * 3);
    const randomness = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const scales = new Float32Array(parameters.count * 1);
  
    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * parameters.radius;
      const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;
      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
  
      positions[i3] = Math.cos(branchAngle) * radius;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = Math.sin(branchAngle) * radius;
  
      randomness[i3] = randomX;
      randomness[i3 + 1] = randomY;
      randomness[i3 + 2] = randomZ;
  
      // const mixedColor = insideColor.clone();
      // mixedColor.lerp(outsideColor, radius / parameters.radius);
      const mixedColor = lerpColor(insideColor, outsideColor, radius / parameters.radius)
  
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
  
      scales[i] = Math.random();
    }
  
    // Отправляем обратно результат в основной поток
    postMessage({
      positions,
      randomness,
      colors,
      scales,
    });
  };
function hexToRgb(hex) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return {
        r: ((bigint >> 16) & 255) / 255, // Красный компонент (в диапазоне от 0 до 1)
        g: ((bigint >> 8) & 255) / 255,  // Зеленый компонент (в диапазоне от 0 до 1)
        b: (bigint & 255) / 255          // Синий компонент (в диапазоне от 0 до 1)
    };
}
function lerpColor(color1, color2, t) {
  return {
      r: color1.r + (color2.r - color1.r) * t,
      g: color1.g + (color2.g - color1.g) * t,
      b: color1.b + (color2.b - color1.b) * t
  };
}