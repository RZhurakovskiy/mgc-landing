// module.js
export function setupGL(gl, shaderProgram, vertices, vertexBuffer, pointer, uniforms, cont, canvasEl) {
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.useProgram(shaderProgram);
    const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    return gl;
}

export function render(gl, uniforms, pointer, cont, canvasEl) {
    function draw() {
        const currentTime = performance.now();
        pointer.x += (pointer.tX - pointer.x) * 0.5;
        pointer.y += (pointer.tY - pointer.y) * 0.5;

        // Set background color to red
        gl.clearColor(1.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(uniforms.u_time, currentTime);
        gl.uniform2f(uniforms.u_pointer_position, pointer.x / cont.offsetWidth, 1 - pointer.y / cont.offsetHeight);
        gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * cont.offsetHeight));
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(draw);
    }
    draw();
}

export function resizeCanvas(gl, uniforms, cont, canvasEl) {
    canvasEl.width = cont.offsetWidth * devicePixelRatio;
    canvasEl.height = cont.offsetHeight * devicePixelRatio;
    gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
    gl.viewport(0, 0, canvasEl.width, canvasEl.height);
}

export function setupEvents(pointer, cont) {
    window.addEventListener("pointermove", (e) => updateMousePosition(e.pageX, e.pageY));
    window.addEventListener("touchmove", (e) => updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY));
    window.addEventListener("click", (e) => updateMousePosition(e.pageX, e.pageY));

    function updateMousePosition(eX, eY) {
        pointer.tX = eX - cont.offsetLeft;
        pointer.tY = eY - cont.offsetTop;
    }
}
