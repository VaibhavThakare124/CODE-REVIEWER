uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
varying vec2 vUv;

// Simple 2D Noise
float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 st = vUv;
    
    // Mouse interaction: Distance from mouse
    float mouseDist = length(st - uMouse);
    float spotlight = 1.0 - smoothstep(0.0, 0.4, mouseDist);
    
    // Distort grid based on mouse position
    vec2 distortedSt = st + (st - uMouse) * spotlight * 0.1;
    
    // Abstract grid/mesh effect
    vec2 grid = fract(distortedSt * 40.0 + sin(uTime * 0.5) * 0.5);
    float line = smoothstep(0.02, 0.0, grid.x) + smoothstep(0.02, 0.0, grid.y);
    
    // Pulse effect
    float pulse = sin(uTime * 2.0 - length(st - 0.5) * 10.0) * 0.5 + 0.5;
    
    // Combine spotlight into the pulse for interactivity
    pulse = mix(pulse, 1.0, spotlight * 0.7);
    
    // Deep blue/purple color palette
    vec3 color1 = vec3(0.05, 0.1, 0.2); // Base dark blue
    vec3 color2 = vec3(0.1, 0.3, 0.6); // Muted blue
    vec3 color3 = vec3(0.4, 0.2, 0.8); // Purple accent
    
    // Highlight lines near mouse
    vec3 highlight = vec3(0.4, 0.7, 1.0); // Bright cyan for mouse highlight
    
    vec3 mixedColor = mix(color1, color2, pulse * 0.5);
    mixedColor = mix(mixedColor, color3, line * pulse * 0.8);
    mixedColor = mix(mixedColor, highlight, line * spotlight * 1.5); // Add glow to lines near mouse
    
    // Add glowing aura around mouse
    mixedColor += highlight * spotlight * 0.3;
    
    // Add subtle grain/noise
    mixedColor += noise(st + uTime * 0.01) * 0.02;
    
    gl_FragColor = vec4(mixedColor, 1.0);
}
