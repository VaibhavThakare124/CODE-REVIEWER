varying vec3 vColor;
varying float vOpacity;

void main() {
  // Circular particles with soft edges
  float d = distance(gl_PointCoord, vec2(0.5));
  if (d > 0.5) discard;
  
  float glow = 1.0 - smoothstep(0.0, 0.5, d);
  gl_FragColor = vec4(vColor, vOpacity * glow);
}
