/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/vueapp/playground/index.html":
/*!******************************************!*\
  !*** ./src/vueapp/playground/index.html ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<v-app>\n    <div v-resize=\"resize\" style=\"user-select: none; touch-action: none;\">\n        <v-dialog v-model=\"iserror\" :width=\"Math.min(size * 8, width)\" eager>\n            <v-card>\n                <v-card-title style=\"text-transform: none;\">\n                    <div :style=\"{'font-size':size * 0.4+'px','padding-top':size/8+'px'}\">\n                        ERROR!\n                    </div>\n                </v-card-title>\n                <v-card-actions>\n                    <v-layout row wrap style=\"margin: 0%;\">\n                        <v-flex xs12 d-flex>\n                            <v-textarea id=\"copy\" :style=\"{'font-size':size / 3 + 'px', 'line-height':size / 2 + 'px'}\"\n                                solo flat outlined hide-details v-model=\"erroryzh\">\n                            </v-textarea>\n                        </v-flex>\n                    </v-layout>\n                </v-card-actions>\n            </v-card>\n        </v-dialog>\n        <v-flex xs12 :style=\"{\n                'height':size + 'px'\n            }\" id=\"top-flex\"></v-flex>\n\n        <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\" :style=\"{\n        width: size * 0.9 + 'px', \n        height: size * 0.9 + 'px', \n        'margin-right': width / 2 - Math.min(size * 4, width / 2) + size * 1.1 + 'px'}\" @click=\"listd=!listd\">\n            <v-icon :size=\"size * 0.6\">\n                school\n            </v-icon>\n        </v-btn>\n\n        <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\" :style=\"{\n            width: size * 0.9 + 'px', \n            height: size * 0.9 + 'px', \n            'margin-right': width / 2 - Math.min(size * 4, width / 2) + size * 2.2 + 'px'}\" @click='setcubeyzh'>\n            <v-icon :size=\"size * 0.6\">\n                colorize\n            </v-icon>\n        </v-btn>\n\n        <v-btn fixed left top text color=\"primary\" style=\"user-select: none; margin: 0%; padding: 0%;\"\n            :style=\"{height: size+'px', 'margin-left': width / 2 - Math.min(size * 4, width / 2 - size / 4) + 'px'}\"\n            @click=\"listd=true\" v-if=\"isDemoMode\">\n            <div :style=\"{'font-size':(size * 0.4)+'px'}\" style=\"text-transform: none;\">{{ demoName }}</div>\n        </v-btn>\n\n        <v-bottom-sheet v-model=\"listd\">\n            <v-card text style=\"margin: 0%; padding: 0%;\">\n                <v-container fluid grid-list-md text-xs-center style=\"padding: 0%;\"\n                    :style=\"{width: Math.min(size * 10, width) + 'px'}\">\n                    <v-layout row wrap\n                        style=\"margin: 0%; padding: 0%; min-width: 0%; min-height: 0%; align-items: stretch;\">\n                        <v-card style=\"margin: 0%; padding: 0%;\" :style=\"{'width': demoGridWidth  + 'px'}\"\n                            v-for=\"(demoImage, i) in demoImages\" :key=\"i\">\n                            <v-btn block text color=\"primary\" :style=\"{\n                                'font-size': size * 0.3 + 'px',\n                                'height': size * 0.35 + 'px'\n                            }\" style=\"text-transform: none;\n                            text-align: center;\n                            margin: 0%;\n                            padding: 0%;\" @click=\"selectDemo(i)\">\n                                {{ demoData[i].name }}\n                            </v-btn>\n                            <img :src=\"demoImage\" style=\"margin: 0%; padding: 0%;\"\n                                :style=\"{'width':demoGridWidth  + 'px'}\" @click=\"selectDemo(i)\">\n                        </v-card>\n                    </v-layout>\n                </v-container>\n            </v-card>\n        </v-bottom-sheet>\n\n        <setting ref=\"setting\"></setting>\n        <viewport ref=\"viewport\"></viewport>\n        <v-flex xs12 :style=\"{\n                'height':size + 'px',\n                'padding': 'none',\n                'margin': 'none'\n            }\" id=\"bottom-flex\" v-show=\"!isPlayerMode && !isColorMode\">\n        </v-flex>\n        <v-card flat style=\"margin: auto; touch-action: none; user-select: none;\">\n            <v-container fluid grid-list-md text-xs-center\n                :style=\"{width: Math.min(size * 8, width) + 'px', height: size * 4 + 'px'}\">\n                <v-layout row wrap>\n                    <v-flex xs12 :style=\"{'height': size + 'px'}\" v-if=\"isPlayerMode\">\n                        <v-slider :value=\"progress\" style=\"margin: 0%; padding: 0%;\" :max=\"solution.length\"\n                            :tick-size=\"3\" :tick-labels=\"cubestep\" thumb-label=\"always\" :ticks=\"showTicks\" hide-details\n                            v-on:input=\"setProgress\">\n                            <template v-slot:thumb-label>\n                                {{ progress == 0 ? '#' : solution[progress - 1] }}\n                            </template>\n                        </v-slider>\n                    </v-flex>\n                    <v-flex v-for=\"item in colort\" :key=\"item\" xs4 :style=\"{padding:size * 0.06 + 'px'}\"v-if=\"isColorMode&&!isPlayerMode\">\n                        <v-btn @click=\"color = item;\" :color=\"colors[item]\" block depressed :ripple=\"false\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <span v-show=\"color!=item\" :style=\"{'font-size':size * 0.5 + 'px'}\">{{faces[item]}}</span>\n                            <v-icon :size=\"size * 0.8\" v-show=\"color==item\">colorize</v-icon>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch\"\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{isColorMode?'Clean':'Scramble'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\"\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  progress == solution.length ? 'Replay' : 'Play'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&isTeaching\"\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  progress == solution.length ? 'Replay' : 'Play'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch\"\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ 'Reset' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\"\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Pause' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&isTeaching\"\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Pause' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch\"\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ 'Solve' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\"\">\n                        <v-btn @click=\"blackButton\" block text color=\"blaCK\" style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                          <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                            {{'Switch'}}\n                          </div>\n                        </v-btn>\n                      </v-flex>\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\"\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Quit' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&isTeaching\"\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Quit' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    \n                    <v-flex xs12 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&isSwitch&&!isTeaching\"\">\n                        <v-btn @click=\"blackButton\" block text color=\"blaCK\" style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                          <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                            {{'back'}}\n                          </div>\n                        </v-btn>\n                      </v-flex>\n                </v-layout>\n            </v-container>\n        </v-card>\n    </div>\n</v-app>"

/***/ }),

/***/ "./src/vueapp/setting/index.html":
/*!***************************************!*\
  !*** ./src/vueapp/setting/index.html ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<div v-resize=\"resize\">\n    <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\"\n        :style=\"{width: size * 0.9 + 'px', height: size * 0.9 + 'px', 'margin-right': width / 2 - Math.min(size * 4, width / 2) + 'px'}\"\n        @click=\"state = !state\">\n        <v-icon :size=\"size * 0.6\">\n            settings\n        </v-icon>\n    </v-btn>\n    <v-bottom-sheet v-model=\"state\">\n        <v-card text style=\"margin: auto;\">\n            <v-container fluid grid-list-md text-xs-center :style=\"{width: Math.min(size * 8, width) + 'px'}\">\n                <v-subheader>\n                    SOLVING ALGORITHM\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                }\">\n                    <v-radio-group v-model=\"config.solverId\">\n                        <v-radio label=\"Kociemba's Algorithm\" :value=\"1\" off-icon=\"radio_button_unchecked\"  on-icon=\"radio_button_checked\"></v-radio>\n                        <v-radio label=\"Layer By Layer Method\" :value=\"0\" off-icon=\"radio_button_unchecked\" on-icon=\"radio_button_checked\" :style=\"{ 'margin-top' : size * 0.2 + 'px'}\"></v-radio>\n                    </v-radio-group>\n                </v-flex>\n                <v-subheader>\n                    TWIST SPEED\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                    'padding-right': size / 2 + 'px',\n                    'padding-top': size * 0.2 + 'px',\n                    'font-size': (size * 0.3) + 'px',\n                    'height':size + 'px'\n                }\">\n                    <vue-slider v-model=\"config.speed\" thumb-label=\"always\" :max=\"5\" :min=\"1\" :marks=\"true\">\n                    </vue-slider>\n                </v-flex>\n                <v-subheader>\n                    SCRAMBLE LENGTH\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                    'padding-right': size / 2 + 'px',\n                    'padding-top': size * 0.2 + 'px',\n                    'font-size': (size * 0.3) + 'px',\n                    'height':size + 'px'\n                }\">\n                    <vue-slider v-model=\"config.scramble_steps\" thumb-label=\"always\" :max=\"40\" :min=\"0\"\n                        :marks=\"[0,10,20,30,40]\"></vue-slider>\n                </v-flex>\n                <v-subheader>\n                    SENSITIVITY\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                    'padding-right': size / 2 + 'px',\n                    'padding-top': size * 0.2 + 'px',\n                    'font-size': (size * 0.3) + 'px',\n                    'height':size + 'px'\n                }\">\n                    <vue-slider v-model=\"config.sensibility\" thumb-label=\"always\" :max=\"100\" :min=\"0\"\n                        :marks=\"[0,25,50,75,100]\"></vue-slider>\n                </v-flex>\n            </v-container>\n        </v-card>\n    </v-bottom-sheet>\n</div>"

/***/ }),

/***/ "./src/vueapp/viewport/index.html":
/*!****************************************!*\
  !*** ./src/vueapp/viewport/index.html ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<div ref=\"canvas\"></div>"

/***/ }),

/***/ "./src/cube/capture.ts":
/*!*****************************!*\
  !*** ./src/cube/capture.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Capturer)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/cube/world.ts");


class Capturer {
    constructor() {
        this.world = new _world__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true,
            alpha: true
        });
        this.renderer.setClearColor(0, 0);
        this.renderer.setPixelRatio(1);
        this.renderer.setSize(256, 256, true);
        this.world.resize(256, 256);
        this.generate("??????????????????????????????????????????????????????");
    }
    generate(state) {
        this.world.cube.restore(state.split(""));
        this.renderer.render(this.world.scene, this.world.camera);
        return this.renderer.domElement.toDataURL();
    }
}


/***/ }),

/***/ "./src/cube/controller.ts":
/*!********************************!*\
  !*** ./src/cube/controller.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Holder": () => (/* binding */ Holder),
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _twister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twister */ "./src/cube/twister.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils_internal */ "./src/cube/utils_internal.ts");





class Holder {
    constructor() {
        this.vector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        this.index = -1;
        this.axis = "";
    }
}
class Controller {
    constructor(world) {
        this.interact = (action) => {
            switch (action.type) {
                case "touchstart":
                case "mousedown":
                    this.down.x = action.x;
                    this.down.y = action.y;
                    this.down_tick = new Date().getTime();
                    this.handleDown();
                    break;
                case "mousemove":
                case "touchmove":
                    this.move.x = action.x;
                    this.move.y = action.y;
                    this.handleMove();
                    break;
                case "touchend":
                case "touchcancel":
                case "mouseup":
                case "mouseout":
                    this.handleUp();
                    break;
                default:
                    return false;
            }
            return true;
        };
        this._lock = false;
        this._disable = false;
        this.taps = [];
        this.world = world;
        this.dragging = false;
        this.rotating = false;
        this.axis = "";
        this.angle = 0;
        this.contingle = 0;
        this.down = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(0, 0);
        this.move = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(0, 0);
        this.down_tick = new Date().getTime();
        this.holder = new Holder();
        this.group = null;
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this));
        this.update();
    }
    set lock(value) {
        this.handleUp();
        this._lock = value;
    }
    get lock() {
        return this._lock;
    }
    set disable(value) {
        this.handleUp();
        this._disable = value;
    }
    get disable() {
        return this._disable;
    }
    update() {
        const angle = this.contingle + this.angle;
        if (this.rotating) {
            if (this.group) {
                if (this.group.angle != angle) {
                    const delta = (angle - this.group.angle) / 2;
                    this.group.angle += delta;
                }
            }
            else {
                const groups = this.world.cube.table.groups[this.axis];
                for (const group of groups) {
                    if (group.angle != angle) {
                        const delta = (angle - group.angle) / 2;
                        group.angle += delta;
                    }
                }
            }
        }
    }
    match() {
        const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[this.holder.axis];
        const finger = this.holder.vector;
        const index = this.holder.index;
        const ilayer = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.indexToLayer)(index);
        for (const axis of ["x", "y", "z"]) {
            const vector = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[axis];
            if (vector.dot(plane.normal) === 0 && vector.dot(finger) === 0) {
                return this.world.cube.table.groups[axis][ilayer[axis]];
            }
        }
        return null;
    }
    intersect(point, plane) {
        const matrix = new three__WEBPACK_IMPORTED_MODULE_3__.Matrix4();
        const ray = new three__WEBPACK_IMPORTED_MODULE_3__.Ray();
        const result = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        const x = (point.x / this.world.width) * 2 - 1;
        const y = -(point.y / this.world.height) * 2 + 1;
        matrix.copy(this.world.scene.matrix);
        matrix.invert();
        ray.origin.setFromMatrixPosition(this.world.camera.matrixWorld);
        ray.direction.set(x, y, 0.5).unproject(this.world.camera).sub(ray.origin).normalize();
        ray.applyMatrix4(matrix);
        ray.intersectPlane(plane, result);
        return result;
    }
    handleDown() {
        if (this.disable) {
            return;
        }
        if (this.dragging || this.rotating) {
            this.handleUp();
        }
        this.dragging = true;
        this.holder.index = -1;
        if (this.lock) {
            return;
        }
        let min_dist = Infinity;
        for (const axis of ["x", "y", "z"]) {
            const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[axis];
            const point = this.intersect(this.down, plane);
            if (point !== null) {
                const cube_margin = _utils__WEBPACK_IMPORTED_MODULE_1__.cube_size / 2 + 0.001;
                const boxMin = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3().setScalar(-cube_margin);
                const boxMax = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3().setScalar(cube_margin);
                const box = new three__WEBPACK_IMPORTED_MODULE_3__.Box3(boxMin, boxMax);
                if (box.containsPoint(point)) {
                    const origin = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3().setFromMatrixPosition(this.world.camera.matrixWorld);
                    const dist = point.distanceTo(origin);
                    if (dist < min_dist) {
                        min_dist = dist;
                        this.holder.axis = axis;
                        this.holder.index = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.worldToIndex)(point);
                    }
                }
            }
        }
    }
    handleMove() {
        if (this.disable) {
            return;
        }
        if (this.dragging) {
            const dx = this.move.x - this.down.x;
            const dy = this.move.y - this.down.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (Math.min(this.world.width, this.world.height) / d > 128) {
                return;
            }
            this.dragging = false;
            this.rotating = true;
            if (this.holder.index === -1) {
                if (Math.abs(dx) > Math.abs(dy)) {
                    this.axis = "y";
                }
                else {
                    if (this.down.x < this.world.width / 2) {
                        this.axis = "x";
                    }
                    else {
                        this.axis = "z";
                    }
                }
                this.group = null;
                const contingle_set = new Set();
                for (const group of this.world.cube.table.groups[this.axis]) {
                    let success = group.drag();
                    while (!success) {
                        _twister__WEBPACK_IMPORTED_MODULE_0__.twister.finish();
                        success = group.drag();
                    }
                    contingle_set.add(group.angle);
                }
                if (contingle_set.size == 1) {
                    for (const value of contingle_set.values()) {
                        this.contingle = value;
                        break;
                    }
                }
                else {
                    this.contingle = 0;
                }
            }
            else {
                const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[this.holder.axis];
                const start = this.intersect(this.down, plane);
                const end = this.intersect(this.move, plane);
                const vector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3().subVectors(end, start);
                vector.max(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3().sub(vector));
                const norm = Math.max(vector.x, vector.y, vector.z);
                this.holder.vector.copy(norm == vector.x ? new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(1, 0, 0) : (norm == vector.y ? new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, 0) :
                    new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 1)));
                this.group = this.match();
                if (!this.group) {
                    this.rotating = false;
                    return;
                }
                let success = this.group.drag();
                while (!success) {
                    _twister__WEBPACK_IMPORTED_MODULE_0__.twister.finish();
                    success = this.group.drag();
                }
                this.contingle = this.group.angle;
                vector.crossVectors(this.holder.vector, plane.normal);
                this.holder.vector.multiplyScalar(vector.x + vector.y + vector.z);
            }
        }
        if (this.rotating) {
            if (this.group) {
                const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[this.holder.axis];
                const start = this.intersect(this.down, plane);
                const end = this.intersect(this.move, plane);
                const vector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3().subVectors(end, start);
                vector.multiply(this.holder.vector);
                this.angle =
                    (vector.x + vector.y + vector.z) *
                        _utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.sensibility * 1e-4;
            }
            else {
                const dx = this.move.x - this.down.x;
                const dy = this.move.y - this.down.y;
                this.angle = (this.lock ? 100 : _utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.sensibility) * 1e-4 * (this.axis == "y" ? -dx :
                    (this.axis == "x" ? -dy :
                        (dy)));
            }
        }
    }
    handleUp() {
        if (this.dragging) {
            let face = null;
            switch (this.holder.axis) {
                case 'x':
                    face = _utils_internal__WEBPACK_IMPORTED_MODULE_2__.Face.R;
                    break;
                case 'y':
                    face = _utils_internal__WEBPACK_IMPORTED_MODULE_2__.Face.U;
                    break;
                case 'z':
                    face = _utils_internal__WEBPACK_IMPORTED_MODULE_2__.Face.F;
                    break;
            }
            for (const tap of this.taps) {
                tap(this.holder.index, face);
                break;
            }
        }
        if (this.rotating) {
            let angle = this.angle;
            if (!this.lock) {
                if (Math.abs(angle) < Math.PI / 4) {
                    const speed = (Math.abs(angle) / (new Date().getTime() - this.down_tick)) * 1000;
                    if (speed > 0.2) {
                        angle = angle == 0 ? 0 : ((angle / Math.abs(angle)) * (Math.PI / 2));
                    }
                }
                angle = angle + this.contingle;
            }
            else {
                angle = 0;
            }
            if (this.group) {
                this.group.twist(angle, false);
            }
            else {
                const groups = this.world.cube.table.groups[this.axis];
                for (const group of groups) {
                    group.twist(angle, false);
                }
            }
        }
        this.group = null;
        this.holder.index = -1;
        this.dragging = false;
        this.rotating = false;
    }
}


/***/ }),

/***/ "./src/cube/cube.ts":
/*!**************************!*\
  !*** ./src/cube/cube.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cube)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cubelet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubelet */ "./src/cube/cubelet.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "./src/cube/group.ts");
/* harmony import */ var _twister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twister */ "./src/cube/twister.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils_internal */ "./src/cube/utils_internal.ts");







class Cube extends three__WEBPACK_IMPORTED_MODULE_5__.Group {
    constructor() {
        super();
        this.cubelets = [];
        this.callbacks = [];
        for (let i = 0; i < 27; i++) {
            const cubelet = new _cubelet__WEBPACK_IMPORTED_MODULE_0__["default"](i);
            this.cubelets.push(cubelet);
            this.add(cubelet);
        }
        this.locks = new Map();
        this.locks.set("x", new Set());
        this.locks.set("y", new Set());
        this.locks.set("z", new Set());
        this.locks.set("a", new Set());
        this.table = new _group__WEBPACK_IMPORTED_MODULE_1__.GroupTable(this);
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        this.dirty = true;
    }
    callback() {
        for (const lock of this.locks.values()) {
            if (lock.size > 0) {
                return;
            }
        }
        for (const callback of this.callbacks) {
            callback();
        }
    }
    lock(axis, layer) {
        var _a;
        if ((_a = this.locks.get("a")) === null || _a === void 0 ? void 0 : _a.has(1)) {
            return false;
        }
        const axis_lockset = this.locks.get(axis);
        if (axis_lockset === undefined) {
            return false;
        }
        for (const lockset of this.locks.values()) {
            if (lockset != axis_lockset && lockset.size > 0) {
                return false;
            }
        }
        axis_lockset.add(layer);
        return true;
    }
    unlock(axis, layer) {
        const axis_lockset = this.locks.get(axis);
        axis_lockset === null || axis_lockset === void 0 ? void 0 : axis_lockset.delete(layer);
    }
    random3() {
        return Math.min(Math.max(Math.floor(Math.random() * 3), 0), 2);
    }
    scramble() {
        for (let i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_3__.cube_config.scramble_steps; i++) {
            const axis = ["x", "y", "z"][this.random3()];
            const level = this.random3();
            const angle = (this.random3() - 1) * (Math.PI / 2);
            this.table.groups[axis][level].twist(angle === 0 ? Math.PI : angle, true);
        }
    }
    reset() {
        _twister__WEBPACK_IMPORTED_MODULE_2__.twister.finish();
        for (const cubelet of this.cubelets) {
            this.remove(cubelet);
        }
        this.cubelets.splice(0);
        for (let i = 0; i < 27; i++) {
            const cubelet = new _cubelet__WEBPACK_IMPORTED_MODULE_0__["default"](i);
            this.cubelets.push(cubelet);
            this.add(cubelet);
        }
        this.table = new _group__WEBPACK_IMPORTED_MODULE_1__.GroupTable(this);
        this.dirty = true;
        this.callback();
    }
    serialize() {
        const result = [];
        let x, y, z;
        _twister__WEBPACK_IMPORTED_MODULE_2__.twister.finish();
        y = 2;
        for (z = 0; z < 3; z++) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.U);
                result.push(color);
            }
        }
        x = 2;
        for (y = 2; y >= 0; y--) {
            for (z = 2; z >= 0; z--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.R);
                result.push(color);
            }
        }
        z = 2;
        for (y = 2; y >= 0; y--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.F);
                result.push(color);
            }
        }
        y = 0;
        for (z = 2; z >= 0; z--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.D);
                result.push(color);
            }
        }
        x = 0;
        for (y = 2; y >= 0; y--) {
            for (z = 0; z < 3; z++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.L);
                result.push(color);
            }
        }
        z = 0;
        for (y = 2; y >= 0; y--) {
            for (x = 2; x >= 0; x--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.B);
                result.push(color);
            }
        }
        return result;
    }
    restore(state) {
        let x, y, z;
        let cur = 0;
        let face;
        this.reset();
        y = 2;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.U;
        for (z = 0; z < 3; z++) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        x = 2;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.R;
        for (y = 2; y >= 0; y--) {
            for (z = 2; z >= 0; z--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        z = 2;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.F;
        for (y = 2; y >= 0; y--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        y = 0;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.D;
        for (z = 2; z >= 0; z--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        x = 0;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.L;
        for (y = 2; y >= 0; y--) {
            for (z = 0; z < 3; z++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        z = 0;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.B;
        for (y = 2; y >= 0; y--) {
            for (x = 2; x >= 0; x--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        this.dirty = true;
    }
}


/***/ }),

/***/ "./src/cube/cubelet.ts":
/*!*****************************!*\
  !*** ./src/cube/cubelet.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cubelet)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");




class Cubelet extends three__WEBPACK_IMPORTED_MODULE_1__.Group {
    constructor(index) {
        super();
        this._vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        this.index = index;
        const drctn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.indexToDirection)(index);
        this.vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(drctn.x, drctn.y, drctn.z);
        this.frame = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_frame, _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_core);
        this.add(this.frame);
        this.stickers = new Array(6);
        for (let i = 0; i < 6; i++) {
            const face_attr = _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_face_attrs[i];
            if (face_attr.match(this.vector)) {
                const sticker = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_sticker, face_attr.lambert);
                sticker.rotation.setFromVector3(face_attr.rotation);
                sticker.position.copy(face_attr.position);
                this.stickers[i] = sticker;
                this.add(sticker);
            }
        }
        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }
    set vector(vector) {
        this._vector.copy(vector);
        this.index = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.directionToIndex)(vector);
        this.position.copy(vector);
        this.position.multiplyScalar(_utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_defs.size);
    }
    get vector() {
        return this._vector;
    }
    convertFace(face) {
        let position = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        const quaternion = new three__WEBPACK_IMPORTED_MODULE_1__.Quaternion().copy(this.quaternion);
        for (const binding of _utils__WEBPACK_IMPORTED_MODULE_0__.facePostionBindings) {
            if (binding.face === face) {
                position.copy(binding.position);
                break;
            }
        }
        position.applyQuaternion(quaternion.invert());
        const vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.round(position.x), Math.round(position.y), Math.round(position.z));
        for (const binding of _utils__WEBPACK_IMPORTED_MODULE_0__.facePostionBindings) {
            if (binding.position.equals(vector)) {
                return binding.face;
            }
        }
        return -1;
    }
    getColorOf(face) {
        const sticker = this.stickers[this.convertFace(face)];
        switch (sticker.material) {
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.L:
                return "L";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.R:
                return "R";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.F:
                return "F";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.B:
                return "B";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.U:
                return "U";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.D:
                return "D";
        }
        return "?";
    }
}


/***/ }),

/***/ "./src/cube/group.ts":
/*!***************************!*\
  !*** ./src/cube/group.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CubeGroup),
/* harmony export */   "GroupTable": () => (/* binding */ GroupTable)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _twister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twister */ "./src/cube/twister.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");



class CubeGroup extends three__WEBPACK_IMPORTED_MODULE_2__.Group {
    constructor(cube, axis, layer) {
        super();
        this.twisting = undefined;
        this._angle = 0;
        this.holding = false;
        this.cube = cube;
        this.axis = axis;
        this.layer = layer;
        this.cubelets = [];
        this.indices = [];
        for (let i = 0; i < 27; i++) {
            const ilayer = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.indexToLayer)(i);
            if (axis == "x" && ilayer.x == layer
                || axis == "y" && ilayer.y == layer
                || axis == "z" && ilayer.z == layer) {
                this.indices.push(i);
            }
        }
        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }
    set angle(angle) {
        this._angle = angle;
        this.setRotationFromAxisAngle(_utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[this.axis], angle);
        this.updateMatrix();
        this.cube.dirty = true;
    }
    get angle() {
        return this._angle;
    }
    cancel() {
        if (this.twisting) {
            const angle = this.twisting.arrival;
            _twister__WEBPACK_IMPORTED_MODULE_0__.twister.cancel(this.twisting);
            this.twisting = undefined;
            return Math.round(angle / (Math.PI / 2)) * (Math.PI / 2);
        }
        return 0;
    }
    finish() {
        if (this.twisting) {
            const angle = this.twisting.arrival - this.angle;
            _twister__WEBPACK_IMPORTED_MODULE_0__.twister.finish(this.twisting);
            this.twisting = undefined;
            return angle;
        }
        return 0;
    }
    hold() {
        const success = this.cube.lock(this.axis, this.layer);
        if (!success) {
            return false;
        }
        this.holding = true;
        for (const i of this.indices) {
            const cubelet = this.cube.cubelets[i];
            this.cubelets.push(cubelet);
            this.cube.remove(cubelet);
            this.add(cubelet);
        }
        this.cube.add(this);
        return true;
    }
    drag() {
        while (this.holding) {
            this.angle = -this.finish();
        }
        return this.hold();
    }
    drop() {
        this.holding = false;
        this.twisting = undefined;
        while (true) {
            const cubelet = this.cubelets.pop();
            if (undefined === cubelet) {
                break;
            }
            this.rotate(cubelet);
            this.remove(cubelet);
            this.cube.add(cubelet);
            this.cube.cubelets[cubelet.index] = cubelet;
        }
        this.cube.remove(this);
        this.cube.dirty = true;
        this.angle = 0;
        this.cube.unlock(this.axis, this.layer);
        this.cube.callback();
    }
    twist(angle, fast) {
        if (this.holding) {
            angle = angle + this.cancel();
        }
        else {
            const success = this.hold();
            if (!success) {
                return false;
            }
            this.angle = 0;
        }
        angle = Math.round(angle / (Math.PI / 2)) * (Math.PI / 2);
        if (fast) {
            this.angle = angle;
        }
        if (Math.abs(this.angle - angle) < 1e-6) {
            this.drop();
        }
        else {
            const frac = Math.abs(this.angle - angle) / (Math.PI / 2);
            const duration = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.twist_duration)(_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.speed) * (2 - 2 / (frac + 1));
            this.twisting = new _twister__WEBPACK_IMPORTED_MODULE_0__.Twist(this.angle, angle, duration, (value) => {
                this.angle = value;
                if (Math.abs(this.angle - angle) < 1e-6) {
                    this.drop();
                    return true;
                }
                return false;
            });
            _twister__WEBPACK_IMPORTED_MODULE_0__.twister.twists.push(this.twisting);
        }
        return true;
    }
    rotate(cubelet) {
        cubelet.rotateOnWorldAxis(_utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[this.axis], this.angle);
        cubelet.vector = cubelet.vector.applyAxisAngle(_utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[this.axis], this.angle);
        cubelet.updateMatrix();
    }
}
class GroupTable {
    constructor(cube) {
        this.groups = {};
        for (const axis of ["x", "y", "z"]) {
            const list = [];
            for (let i = 0; i < 3; i++) {
                list.push(new CubeGroup(cube, axis, i));
            }
            this.groups[axis] = list;
        }
    }
}


/***/ }),

/***/ "./src/cube/interactor.ts":
/*!********************************!*\
  !*** ./src/cube/interactor.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interaction": () => (/* binding */ Interaction),
/* harmony export */   "default": () => (/* binding */ Interactor)
/* harmony export */ });
class Interaction {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }
}
class Interactor {
    constructor(doms, callback) {
        this.doms = [];
        this.touch = (event) => {
            var _a;
            const first = event.changedTouches[0];
            if (event.type === "touchstart") {
                this.target = event.target;
                if (this.last) {
                    const action = new Interaction("touchend", this.last.clientX - this.doms[0].getBoundingClientRect().left, this.last.clientY - this.doms[0].getBoundingClientRect().top);
                    this.callback(action);
                }
                this.last = first;
            }
            if (this.notin() || ((_a = this.last) === null || _a === void 0 ? void 0 : _a.identifier) != first.identifier) {
                return false;
            }
            const action = new Interaction(event.type, first.clientX - this.doms[0].getBoundingClientRect().left, first.clientY - this.doms[0].getBoundingClientRect().top);
            this.callback(action);
            event.preventDefault();
            if (event.type === "touchend" || event.type === "touchcancel") {
                this.target = null;
            }
            return true;
        };
        this.mouse = (event) => {
            if (event.type === "mousedown") {
                this.target = event.target;
            }
            if (this.notin()) {
                return true;
            }
            const action = new Interaction(event.type, event.clientX - this.doms[0].getBoundingClientRect().left, event.clientY - this.doms[0].getBoundingClientRect().top);
            this.callback(action);
            if (event.type === "mouseup") {
                this.target = null;
            }
            return false;
        };
        for (const dom of doms) {
            if (dom) {
                this.doms.push(dom);
            }
        }
        this.callback = callback;
        document.addEventListener("touchstart", this.touch);
        document.addEventListener("touchmove", this.touch);
        document.addEventListener("touchend", this.touch);
        document.addEventListener("touchcancel", this.touch);
        document.addEventListener("mousedown", this.mouse);
        document.addEventListener("mousemove", this.mouse);
        document.addEventListener("mouseup", this.mouse);
        document.addEventListener("touchmove", function (e) { e.preventDefault(); }, { passive: false });
    }
    notin() {
        for (const dom of this.doms) {
            if (this.target === dom) {
                return false;
            }
        }
        return true;
    }
}


/***/ }),

/***/ "./src/cube/lbl.ts":
/*!*************************!*\
  !*** ./src/cube/lbl.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LBLSolver)
/* harmony export */ });
class LBLSolver {
    constructor() {
        this.cubeState = {};
        this.nextColor = {};
        this.nextFace = { l: "f", f: "r", r: "b", b: "l" };
        this.prevFace = { l: "b", b: "r", r: "f", f: "l" };
    }
    getCubeState(state) {
        this.cubeState = {
            b: state[49],
            bl: state[50].concat(state[39]),
            d: state[31],
            db: state[34].concat(state[52]),
            dbl: state[33].concat(state[53]).concat(state[42]),
            df: state[28].concat(state[25]),
            dfr: state[29].concat(state[26]).concat(state[15]),
            dl: state[30].concat(state[43]),
            dlf: state[27].concat(state[44]).concat(state[24]),
            dr: state[32].concat(state[16]),
            drb: state[35].concat(state[17]).concat(state[51]),
            f: state[22],
            fr: state[23].concat(state[12]),
            l: state[40],
            lf: state[41].concat(state[21]),
            r: state[13],
            rb: state[14].concat(state[48]),
            u: state[4],
            ub: state[1].concat(state[46]),
            ubl: state[0].concat(state[47]).concat(state[36]),
            uf: state[7].concat(state[19]),
            ufr: state[8].concat(state[20]).concat(state[9]),
            ul: state[3].concat(state[37]),
            ulf: state[6].concat(state[38]).concat(state[18]),
            ur: state[5].concat(state[10]),
            urb: state[2].concat(state[11]).concat(state[45]),
        };
        const color_l = this.cubeState["l"];
        const color_r = this.cubeState["r"];
        const color_f = this.cubeState["f"];
        const color_b = this.cubeState["b"];
        this.nextColor[color_l] = color_f;
        this.nextColor[color_f] = color_r;
        this.nextColor[color_r] = color_b;
        this.nextColor[color_b] = color_l;
    }
    Twist_B() {
        let tmp = this.cubeState.ub;
        this.cubeState.ub = this.cubeState.rb;
        this.cubeState.rb = this.cubeState.db;
        this.cubeState.db = this.cubeState.bl[1] + this.cubeState.bl[0];
        this.cubeState.bl = tmp[1] + tmp[0];
        tmp = this.cubeState.ubl;
        this.cubeState.ubl = this.cubeState.urb[1] + this.cubeState.urb[2] + this.cubeState.urb[0];
        this.cubeState.urb = this.cubeState.drb[1] + this.cubeState.drb[0] + this.cubeState.drb[2];
        this.cubeState.drb = this.cubeState.dbl[2] + this.cubeState.dbl[0] + this.cubeState.dbl[1];
        this.cubeState.dbl = tmp[2] + tmp[1] + tmp[0];
    }
    Twist_R() {
        let tmp = this.cubeState.ur;
        this.cubeState.ur = this.cubeState.fr;
        this.cubeState.fr = this.cubeState.dr;
        this.cubeState.dr = this.cubeState.rb[1] + this.cubeState.rb[0];
        this.cubeState.rb = tmp[1] + tmp[0];
        tmp = this.cubeState.urb;
        this.cubeState.urb = this.cubeState.ufr[1] + this.cubeState.ufr[2] + this.cubeState.ufr[0];
        this.cubeState.ufr = this.cubeState.dfr[1] + this.cubeState.dfr[0] + this.cubeState.dfr[2];
        this.cubeState.dfr = this.cubeState.drb[2] + this.cubeState.drb[0] + this.cubeState.drb[1];
        this.cubeState.drb = tmp[2] + tmp[1] + tmp[0];
    }
    ;
    Twist_F() {
        let tmp = this.cubeState.uf;
        this.cubeState.uf = this.cubeState.lf;
        this.cubeState.lf = this.cubeState.df;
        this.cubeState.df = this.cubeState.fr[1] + this.cubeState.fr[0];
        this.cubeState.fr = tmp[1] + tmp[0];
        tmp = this.cubeState.ufr;
        this.cubeState.ufr = this.cubeState.ulf[1] + this.cubeState.ulf[2] + this.cubeState.ulf[0];
        this.cubeState.ulf = this.cubeState.dlf[1] + this.cubeState.dlf[0] + this.cubeState.dlf[2];
        this.cubeState.dlf = this.cubeState.dfr[2] + this.cubeState.dfr[0] + this.cubeState.dfr[1];
        this.cubeState.dfr = tmp[2] + tmp[1] + tmp[0];
    }
    Twist_L() {
        let tmp = this.cubeState.ul;
        this.cubeState.ul = this.cubeState.bl;
        this.cubeState.bl = this.cubeState.dl;
        this.cubeState.dl = this.cubeState.lf[1] + this.cubeState.lf[0];
        this.cubeState.lf = tmp[1] + tmp[0];
        tmp = this.cubeState.ulf;
        this.cubeState.ulf = this.cubeState.ubl[1] + this.cubeState.ubl[2] + this.cubeState.ubl[0];
        this.cubeState.ubl = this.cubeState.dbl[1] + this.cubeState.dbl[0] + this.cubeState.dbl[2];
        this.cubeState.dbl = this.cubeState.dlf[2] + this.cubeState.dlf[0] + this.cubeState.dlf[1];
        this.cubeState.dlf = tmp[2] + tmp[1] + tmp[0];
    }
    Twist_U() {
        let tmp = this.cubeState.ul;
        this.cubeState.ul = this.cubeState.uf;
        this.cubeState.uf = this.cubeState.ur;
        this.cubeState.ur = this.cubeState.ub;
        this.cubeState.ub = tmp;
        tmp = this.cubeState.ulf;
        this.cubeState.ulf = this.cubeState.ufr;
        this.cubeState.ufr = this.cubeState.urb;
        this.cubeState.urb = this.cubeState.ubl;
        this.cubeState.ubl = tmp;
    }
    Twist_D() {
        let tmp = this.cubeState.dl;
        this.cubeState.dl = this.cubeState.db;
        this.cubeState.db = this.cubeState.dr;
        this.cubeState.dr = this.cubeState.df;
        this.cubeState.df = tmp;
        tmp = this.cubeState.dlf;
        this.cubeState.dlf = this.cubeState.dbl;
        this.cubeState.dbl = this.cubeState.drb;
        this.cubeState.drb = this.cubeState.dfr;
        this.cubeState.dfr = tmp;
    }
    Twist_Y() {
        this.Twist_U();
        let tmp = this.cubeState.lf;
        this.cubeState.lf = this.cubeState.fr;
        this.cubeState.fr = this.cubeState.rb;
        this.cubeState.rb = this.cubeState.bl;
        this.cubeState.bl = tmp;
        tmp = this.cubeState.f;
        this.cubeState.f = this.cubeState.r;
        this.cubeState.r = this.cubeState.b;
        this.cubeState.b = this.cubeState.l;
        this.cubeState.l = tmp;
        this.Twist_D(), this.Twist_D(), this.Twist_D();
    }
    changeState(order_list) {
        for (const order of order_list) {
            switch (order) {
                case "D":
                    this.Twist_D();
                    break;
                case "d":
                    this.Twist_D();
                    this.Twist_D();
                    this.Twist_D();
                    break;
                case "U":
                    this.Twist_U();
                    break;
                case "u":
                    this.Twist_U();
                    this.Twist_U();
                    this.Twist_U();
                    break;
                case "L":
                    this.Twist_L();
                    break;
                case "l":
                    this.Twist_L();
                    this.Twist_L();
                    this.Twist_L();
                    break;
                case "F":
                    this.Twist_F();
                    break;
                case "f":
                    this.Twist_F();
                    this.Twist_F();
                    this.Twist_F();
                    break;
                case "R":
                    this.Twist_R();
                    break;
                case "r":
                    this.Twist_R();
                    this.Twist_R();
                    this.Twist_R();
                    break;
                case "B":
                    this.Twist_B();
                    break;
                case "b":
                    this.Twist_B();
                    this.Twist_B();
                    this.Twist_B();
                    break;
                case "Y":
                    this.Twist_Y();
                    break;
                case "y":
                    this.Twist_Y();
                    this.Twist_Y();
                    this.Twist_Y();
                    break;
            }
        }
    }
    getBlockPos(block) {
        const reg = new RegExp("^[" + block + "]{" + block.length + "}$");
        const result = {};
        for (let k in this.cubeState) {
            if (this.cubeState[k].match(reg)) {
                result["k"] = k;
                result["v"] = this.cubeState[k];
                return result;
            }
        }
        return result;
    }
    FIRST_LAYER_EDGES_SINGLE(block_pos, block_color) {
        let exp = "", exp_log = "";
        let s;
        for (let i = 0; i < 7; i++) {
            s = this.getBlockPos(block_color);
            if (s.k.indexOf("d") != -1) {
                if (s.v[0] == block_color[0]) {
                    if (s.k == block_pos)
                        return exp_log;
                    else
                        exp = s.k[1].toUpperCase() + s.k[1].toUpperCase();
                }
                else
                    exp = s.k[1].toUpperCase();
            }
            else if (s.k.indexOf("u") != -1) {
                if (s.k[1] == block_pos[1]) {
                    if (s.v[0] == block_color[0])
                        exp = s.k[1].toUpperCase() + s.k[1].toUpperCase();
                    else if (this.cubeState[block_pos[0] + this.nextFace[s.k[1]]] !=
                        this.cubeState[block_pos[0]] + this.cubeState[this.nextFace[s.k[1]]])
                        exp = "u" + this.nextFace[s.k[1]] + s.k[1].toUpperCase();
                    else
                        exp = "u" + this.nextFace[s.k[1]] + s.k[1].toUpperCase() + this.nextFace[s.k[1]].toUpperCase();
                }
                else
                    exp = "U";
            }
            else {
                if (s.v[0] == block_color[0]) {
                    if (s.k[1] == block_pos[1])
                        exp = s.k[1];
                    else if (this.cubeState[block_pos[0] + s.k[1]] != this.cubeState[block_pos[0]] + this.cubeState[s.k[1]])
                        exp = s.k[1].toUpperCase();
                    else
                        exp = s.k[1].toUpperCase() + "U" + s.k[1];
                }
                else {
                    if (s.k[0] == block_pos[1])
                        exp = s.k[0].toUpperCase();
                    else if (this.cubeState[block_pos[0] + s.k[0]] != this.cubeState[block_pos[0]] + this.cubeState[s.k[0]])
                        exp = s.k[0];
                    else
                        exp = s.k[0] + "U" + s.k[0].toUpperCase();
                }
            }
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("First Layer Cross Single Error: ", exp_log);
        return "First Layer Cross Single Error: " + exp_log;
    }
    FIRST_LAYER_CORNERS_SINGLE(block_pos, block_color) {
        let exp = "", exp_log = "", s;
        for (let i = 0; i < 10; i++) {
            s = this.getBlockPos(block_color);
            if (s.k.indexOf("d") != -1) {
                if (s.v[0] == this.cubeState["d"]) {
                    if (s.k == block_pos)
                        return exp_log;
                    else
                        exp = s.k[1] + "U" + s.k[1].toUpperCase();
                }
                else if (s.v[1] == this.cubeState["d"])
                    exp = s.k[1] + "u" + s.k[1].toUpperCase();
                else
                    exp = s.k[2].toUpperCase() + "U" + s.k[2];
            }
            else {
                if (s.k == "u" + block_pos[1] + block_pos[2]) {
                    if (s.v[0] == this.cubeState["d"])
                        exp = s.k[2].toUpperCase() + "u" + s.k[2];
                    else if (s.v[1] == this.cubeState["d"])
                        exp = s.k[1] + "u" + s.k[1].toUpperCase();
                    else
                        exp = s.k[2].toUpperCase() + "U" + s.k[2];
                }
                else
                    exp = "U";
            }
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("First Layer Corners Single Error: ", exp_log);
        return "First Layer Corners Single Error: " + exp_log;
    }
    ;
    SECOND_LAYER_SINGLE() {
        const block_color = this.cubeState["f"] + this.cubeState["r"];
        let exp = "", exp_log = "";
        for (let i = 0; i < 6; i++) {
            const s = this.getBlockPos(block_color);
            if (s.k.indexOf("u") != -1) {
                if (s.k[1] == 'r' && s.v[1] == this.cubeState["r"]) {
                    exp = "ufUFURur";
                }
                else if (s.k[1] == 'f' && s.v[1] == this.cubeState["f"]) {
                    exp = "URurufUF";
                }
                else {
                    exp = "U";
                }
            }
            else {
                if (s.v[0] == this.cubeState[s.k[0]] && s.v[1] == this.cubeState[s.k[1]])
                    return exp_log;
                else
                    exp = "u" + s.k[0] + "U" + s.k[0].toUpperCase() + "U" + s.k[1].toUpperCase() + "u" + s.k[1];
            }
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("Second Layer Single Error: ", exp_log);
        return "Second Layer Single Error: " + exp_log;
    }
    FIRST_LAYER_EDGES(delayed) {
        console.log("------------ COMPLETE THE FIRST LAYER EDGES ------------");
        let order = "";
        if (delayed == "z2") {
            for (let i = 0; i < 4; i++) {
                order += this.FIRST_LAYER_EDGES_SINGLE("df", this.cubeState["d"] + this.cubeState["f"]);
                order += "y";
                this.changeState("y");
            }
        }
        else if (delayed == "x2") {
            for (let i = 0; i < 4; i++) {
                order += this.FIRST_LAYER_EDGES_SINGLE("db", this.cubeState["d"] + this.cubeState["b"]);
                order += "y";
                this.changeState("y");
            }
        }
        return this.compress(order);
    }
    ;
    FIRST_LAYER_CORNERS(delayed) {
        console.log("------------ COMPLETE THE FIRST LAYER CORNERS ------------");
        let order = "";
        if (delayed == "z2") {
            for (let i = 0; i < 4; i++) {
                order += this.FIRST_LAYER_CORNERS_SINGLE("dlf", this.cubeState["d"] + this.cubeState["l"] + this.cubeState["f"]);
                order += "y";
                this.changeState("y");
            }
        }
        else if (delayed == "x2") {
            for (let i = 0; i < 4; i++) {
                order += this.FIRST_LAYER_CORNERS_SINGLE("drb", this.cubeState["d"] + this.cubeState["r"] + this.cubeState["b"]);
                order += "y";
                this.changeState("y");
            }
        }
        return this.compress(order);
    }
    SECOND_LAYER() {
        console.log("------------ COMPLETE THE SECOND LAYER ------------");
        let order = "";
        for (let i = 0; i < 4; i++) {
            order += this.SECOND_LAYER_SINGLE();
            order += "Y";
            this.changeState("Y");
        }
        return this.compress(order);
    }
    ;
    TOP_CROSS() {
        console.log("------------ COMPLETE THE TOP CROSS ------------");
        let exp = "", exp_log = "";
        let uc = this.cubeState["u"];
        for (let i = 0; i < 4; i++) {
            if (this.cubeState.ul[0] == uc && this.cubeState.ur[0] == uc
                && this.cubeState.uf[0] == uc && this.cubeState.ub[0] == uc)
                return this.compress(exp_log);
            if (this.cubeState.ub[0] == uc && this.cubeState.ul[0] == uc)
                exp = "rufUFR";
            else if (this.cubeState.uf[0] == uc && this.cubeState.ub[0] == uc)
                exp = "rfuFUR";
            else if (this.cubeState.ul[0] == uc && this.cubeState.ur[0] == uc)
                exp = "Y";
            else if (this.cubeState.uf[0] == uc && this.cubeState.ur[0] == uc)
                exp = "YY";
            else if (this.cubeState.ur[0] == uc && this.cubeState.ub[0] == uc)
                exp = "Y";
            else if (this.cubeState.ul[0] == uc && this.cubeState.uf[0] == uc)
                exp = "y";
            else
                exp = "rufUFRUrfuFUR";
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("Top Cross Error: ", exp_log);
        return "Top Cross Error: " + exp_log;
    }
    ;
    THIRD_LAYER_CORNERS_POS() {
        console.log("------------ COMPLETE THE THIRD LAYER CORNERS (POSITION) ------------");
        const step = "rLUluRULul", blocks = ["ulf", "ufr", "urb", "ubl"], uc = this.cubeState["u"];
        let exp_log = "";
        for (let i = 0; i < 4; i++) {
            let last = i;
            let times = 0;
            for (let j = i + 1; j < i + 4; j++) {
                const next = j % 4;
                let lastc = this.cubeState[blocks[last]].replace(uc, "");
                let nextc = this.cubeState[blocks[next]].replace(uc, "");
                if (this.nextColor[lastc[0]] == lastc[1]) {
                    if (nextc.indexOf(lastc[1]) != -1
                        && nextc.indexOf(this.nextColor[lastc[1]]) != -1)
                        times += 1;
                    else
                        break;
                }
                else {
                    if (nextc.indexOf(lastc[0]) != -1
                        && nextc.indexOf(this.nextColor[lastc[0]]) != -1)
                        times += 1;
                    else
                        break;
                }
                last = next;
            }
            if (times == 1) {
                last = (last - 1 + 4) % 4;
                if (last == 0)
                    exp_log = "u" + step, this.changeState(exp_log);
                else if (last == 1)
                    exp_log = step, this.changeState(exp_log);
                else if (last == 2)
                    exp_log = "U" + step, this.changeState(exp_log);
                else if (last == 3)
                    exp_log = "UU" + step, this.changeState(exp_log);
                return this.compress(exp_log);
            }
            else if (times > 1)
                return this.compress(exp_log);
        }
        exp_log = step + "U" + step;
        this.changeState(exp_log);
        return this.compress(exp_log);
    }
    THIRD_LAYER_CORNERS_ORI() {
        console.log("------------ COMPLETE THE THIRD LAYER CORNERS (ORIENT) ------------");
        const step1 = "ruRuruuRuu", step2 = "FUfUFUUfUU";
        const blocks = ["ulf", "ufr", "urb", "ubl"], uc = this.cubeState["u"];
        let exp_log = "", s = "";
        for (const block of blocks)
            s += this.cubeState[block].indexOf(uc);
        if (s.match(/2220|0222|2022|2202/)) {
            if (s == "0222")
                exp_log += "U";
            else if (s == "2022")
                exp_log += "UU";
            else if (s == "2202")
                exp_log += "u";
            exp_log += step1;
        }
        else if (s.match(/1110|0111|1011|1101/)) {
            if (s == "0111")
                exp_log += "U";
            else if (s == "1011")
                exp_log += "UU";
            else if (s == "1101")
                exp_log += "u";
            exp_log += step2;
        }
        else if (s.match(/2001|1200|0120|0012/)) {
            if (s == "1200")
                exp_log += "U";
            else if (s == "0120")
                exp_log += "UU";
            else if (s == "0012")
                exp_log += "u";
            exp_log += step1 + "U" + step2;
        }
        else if (s.match(/1002|2100|0210|0021/)) {
            if (s == "2100")
                exp_log += "U";
            else if (s == "0210")
                exp_log += "UU";
            else if (s == "0021")
                exp_log += "u";
            exp_log += step2 + "U" + step1;
        }
        else if (s.match(/2121|1212/)) {
            if (s == "1212")
                exp_log += "U";
            exp_log += step2 + "UU" + step2;
        }
        else if (s.match(/2112|2211|1221|1122/)) {
            if (s == "2211")
                exp_log += "U";
            else if (s == "1221")
                exp_log += "UU";
            else if (s == "1122")
                exp_log += "u";
            exp_log += step1 + "U" + step1;
        }
        else if (s.match(/0201|1020/)) {
            if (s == "1020")
                exp_log += "U";
            exp_log += step1 + "UU" + step2;
        }
        else if (s.match(/0102|2010/)) {
            if (s == "2010")
                exp_log += "U";
            exp_log += step2 + "UU" + step1;
        }
        this.changeState(exp_log);
        return this.compress(exp_log);
    }
    THIRD_LAYER_EDGES() {
        console.log("------------ COMPLETE THE THIRD LAYER EDGES ------------");
        const step1 = "ruRuruuRuu", step2 = "FUfUFUUfUU";
        let exp_log = "";
        while (this.cubeState.ulf[2] != this.cubeState.f) {
            this.changeState("U");
            exp_log += "U";
        }
        for (let i = 0; i < 3; i++) {
            let exp = "";
            const s = this.cubeState.uf[1] + this.cubeState.ur[1] + this.cubeState.ub[1] + this.cubeState.ul[1];
            const c = this.cubeState.f + this.cubeState.r + this.cubeState.b + this.cubeState.l;
            let times = 0, pos = -1;
            for (let j = 0; j < 4; j++) {
                if (s[j] == c[j])
                    times++, pos = j;
            }
            if (times > 1)
                return this.compress(exp_log);
            else if (times == 1) {
                if (pos == 1)
                    exp += "Y";
                else if (pos == 2)
                    exp += "YY";
                else if (pos == 3)
                    exp += "y";
                if (s[(pos + 1) % 4] == this.nextColor[this.nextColor[s[pos]]])
                    exp += step1 + step2;
                else
                    exp += "y" + step2 + step1;
            }
            else
                exp += step1 + step2;
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("Third Layer Edges Error: ", exp_log);
        return "Third Layer Edges Error: " + exp_log;
    }
    solveCube(delayed) {
        let steps = [];
        steps.push(this.FIRST_LAYER_EDGES(delayed));
        steps.push("~");
        steps.push(this.FIRST_LAYER_CORNERS(delayed));
        steps.push("~");
        steps.push(this.SECOND_LAYER());
        steps.push("~");
        steps.push(this.TOP_CROSS());
        steps.push("~");
        steps.push(this.THIRD_LAYER_CORNERS_POS());
        steps.push("~");
        steps.push(this.THIRD_LAYER_CORNERS_ORI());
        steps.push("~");
        steps.push(this.THIRD_LAYER_EDGES());
        return steps;
    }
    ;
    compress(order) {
        for (let i = 0; i < 10; i++) {
            order = order.replace(/uU|Uu|dD|Dd|lL|Ll|fF|Ff|rR|Rr|bB|Bb|yY|Yy|uuuu|dddd|llll|ffff|rrrr|bbbb|yyyy|UUUU|DDDD|LLLL|FFFF|RRRR|BBBB|YYYY/g, "");
            order = order.replace(/uuu/g, "U");
            order = order.replace(/ddd/g, "D");
            order = order.replace(/lll/g, "L");
            order = order.replace(/fff/g, "F");
            order = order.replace(/rrr/g, "R");
            order = order.replace(/bbb/g, "B");
            order = order.replace(/yyy/g, "Y");
            order = order.replace(/UUU/g, "u");
            order = order.replace(/DDD/g, "d");
            order = order.replace(/LLL/g, "l");
            order = order.replace(/FFF/g, "f");
            order = order.replace(/RRR/g, "r");
            order = order.replace(/BBB/g, "b");
            order = order.replace(/YYY/g, "y");
        }
        return order;
    }
    solve(state, delayed) {
        this.getCubeState(state);
        return this.solveCube(delayed);
    }
}


/***/ }),

/***/ "./src/cube/twister.ts":
/*!*****************************!*\
  !*** ./src/cube/twister.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Twist": () => (/* binding */ Twist),
/* harmony export */   "Twister": () => (/* binding */ Twister),
/* harmony export */   "twister": () => (/* binding */ twister)
/* harmony export */ });
class Twist {
    constructor(depature, arrival, duration, callback_func) {
        this.departure = depature;
        this.arrival = arrival;
        this.duration = duration;
        this.callback_func = callback_func;
        this.start = new Date().getTime();
    }
    finish() {
        this.current = this.arrival;
        this.callback();
    }
    update() {
        const frac = Math.min(Math.max((new Date().getTime() - this.start) / this.duration, 0), 1);
        this.current = frac == 1 ? this.arrival : (this.departure + (this.arrival - this.departure) * (1 - (1 - frac) * (1 - frac)));
    }
    callback() {
        return this.callback_func(this.current);
    }
}
class Twister {
    constructor() {
        this.twists = [];
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this));
        this.update();
    }
    update() {
        let cur = 0;
        let end = this.twists.length;
        while (cur < end) {
            this.twists[cur].update();
            if (this.twists[cur].callback()) {
                this.twists.splice(cur, 1);
                end--;
            }
            else {
                cur++;
            }
        }
    }
    finish(twist = undefined) {
        if (twist) {
            for (let i = 0; i < this.twists.length; i++) {
                if (this.twists[i] == twist) {
                    twist.finish();
                    this.twists.splice(i, 1);
                    break;
                }
            }
        }
        else {
            const twists = this.twists.splice(0);
            for (const twist of twists) {
                twist.finish();
            }
        }
    }
    cancel(twist) {
        for (let i = 0; i < this.twists.length; i++) {
            if (this.twists[i] == twist) {
                this.twists.splice(i, 1);
                break;
            }
        }
    }
    isTwisting() {
        return this.twists.length != 0;
    }
}
const twister = new Twister();


/***/ }),

/***/ "./src/cube/utils.ts":
/*!***************************!*\
  !*** ./src/cube/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube_config": () => (/* binding */ cube_config),
/* harmony export */   "twist_duration": () => (/* binding */ twist_duration),
/* harmony export */   "cubelet_colors": () => (/* binding */ cubelet_colors),
/* harmony export */   "cubelet_defs": () => (/* binding */ cubelet_defs),
/* harmony export */   "cubelet_frame": () => (/* binding */ cubelet_frame),
/* harmony export */   "cubelet_lambers": () => (/* binding */ cubelet_lambers),
/* harmony export */   "cubelet_core": () => (/* binding */ cubelet_core),
/* harmony export */   "cubelet_sticker": () => (/* binding */ cubelet_sticker),
/* harmony export */   "cubelet_face_attrs": () => (/* binding */ cubelet_face_attrs),
/* harmony export */   "cube_size": () => (/* binding */ cube_size),
/* harmony export */   "axis_vectors": () => (/* binding */ axis_vectors),
/* harmony export */   "axis_planes": () => (/* binding */ axis_planes),
/* harmony export */   "indexToDirection": () => (/* binding */ indexToDirection),
/* harmony export */   "directionToIndex": () => (/* binding */ directionToIndex),
/* harmony export */   "indexToLayer": () => (/* binding */ indexToLayer),
/* harmony export */   "worldToIndex": () => (/* binding */ worldToIndex),
/* harmony export */   "facePostionBindings": () => (/* binding */ facePostionBindings),
/* harmony export */   "stringToTwistParams": () => (/* binding */ stringToTwistParams),
/* harmony export */   "lblOrderMapping": () => (/* binding */ lblOrderMapping),
/* harmony export */   "faceToColor": () => (/* binding */ faceToColor),
/* harmony export */   "whiteToBottom": () => (/* binding */ whiteToBottom),
/* harmony export */   "oppositeMapping": () => (/* binding */ oppositeMapping),
/* harmony export */   "delayedYellowToTop": () => (/* binding */ delayedYellowToTop)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils_internal */ "./src/cube/utils_internal.ts");



const cube_config = {
    speed: 3,
    sensibility: 25,
    scramble_steps: 20,
    solverId: 1,
};
const twist_duration = (speed) => {
    return 3600 / (3 + speed);
};
const cubelet_colors = {
    R: "#B71C1C",
    L: "#FF6D00",
    U: "#F0F0F0",
    D: "#FFD600",
    F: "#00A020",
    B: "#0D47A1",
    core: "#202020",
    gray: "#808080",
    high: "#FF0080",
};
const cubelet_defs = {
    size: 64,
    _border_width: 3,
    _edge_width: 2,
    _sticker_depth: 0.1,
};
const cubelet_frame = new _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Frame(cubelet_defs.size, cubelet_defs._border_width);
const cubelet_lambers = (() => {
    const result = {};
    for (const key in cubelet_colors) {
        result[key] = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({ color: cubelet_colors[key] });
    }
    return result;
})();
const cubelet_core = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({
    color: cubelet_colors.core,
    specular: cubelet_colors.gray,
    shininess: 2,
});
const cubelet_sticker = new _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Sticker(cubelet_defs.size - 2 * cubelet_defs._border_width - cubelet_defs._edge_width, cubelet_defs._sticker_depth);
const cubelet_face_attrs = [
    {
        match: (vector) => { return vector.x == -1; },
        lambert: cubelet_lambers.L,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-cubelet_defs.size / 2, 0, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -Math.PI / 2, 0),
    },
    {
        match: (vector) => { return vector.x == 1; },
        lambert: cubelet_lambers.R,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(cubelet_defs.size / 2, 0, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, Math.PI / 2, 0),
    },
    {
        match: (vector) => { return vector.y == -1; },
        lambert: cubelet_lambers.D,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -cubelet_defs.size / 2, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.PI / 2, 0, 0),
    },
    {
        match: (vector) => { return vector.y == 1; },
        lambert: cubelet_lambers.U,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, cubelet_defs.size / 2, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-Math.PI / 2, 0, 0),
    },
    {
        match: (vector) => { return vector.z == -1; },
        lambert: cubelet_lambers.B,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, -cubelet_defs.size / 2),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.PI, 0, 0),
    },
    {
        match: (vector) => { return vector.z == 1; },
        lambert: cubelet_lambers.F,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, cubelet_defs.size / 2),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(2 * Math.PI, 0, 0),
    },
];
const cube_size = cubelet_defs.size * 3;
const axis_vectors = {
    a: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1),
    x: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-1, 0, 0),
    y: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0),
    z: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, -1),
};
const axis_planes = {
    x: new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0), -cube_size / 2),
    y: new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), -cube_size / 2),
    z: new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1), -cube_size / 2)
};
const indexToDirection = (index) => {
    return new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(index % 3 - 1, Math.floor(index / 3) % 3 - 1, Math.floor(index / 9) - 1);
};
const directionToIndex = (drctn) => {
    return Math.round((drctn.x + 1) + (drctn.y + 1) * 3 + (drctn.z + 1) * 9);
};
const indexToLayer = (index) => {
    const result = { x: index % 3, y: Math.floor(index / 3) % 3, z: Math.floor(index / 9) };
    return result;
};
const worldToIndex = (point) => {
    const vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().copy(point);
    vector.add(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().setScalar(cube_size / 2));
    vector.divideScalar(cube_size).multiplyScalar(3).floor();
    vector.max(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().setScalar(0));
    vector.min(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().setScalar(2));
    return vector.x + vector.y * 3 + vector.z * 9;
};
const facePostionBindings = [
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.L,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-1, 0, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.R,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.D,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.U,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.B,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, -1)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.F,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1)
    },
];
const stringToTwistParams = {
    "L": { axis: 'x', layers: [0], angle: -Math.PI / 2 },
    "L'": { axis: 'x', layers: [0], angle: Math.PI / 2 },
    "L2": { axis: 'x', layers: [0], angle: -Math.PI },
    "R": { axis: 'x', layers: [2], angle: Math.PI / 2 },
    "R'": { axis: 'x', layers: [2], angle: -Math.PI / 2 },
    "R2": { axis: 'x', layers: [2], angle: Math.PI },
    "F": { axis: 'z', layers: [2], angle: Math.PI / 2 },
    "F'": { axis: 'z', layers: [2], angle: -Math.PI / 2 },
    "F2": { axis: 'z', layers: [2], angle: Math.PI },
    "B": { axis: 'z', layers: [0], angle: -Math.PI / 2 },
    "B'": { axis: 'z', layers: [0], angle: Math.PI / 2 },
    "B2": { axis: 'z', layers: [0], angle: -Math.PI },
    "U": { axis: 'y', layers: [2], angle: Math.PI / 2 },
    "U'": { axis: 'y', layers: [2], angle: -Math.PI / 2 },
    "U2": { axis: 'y', layers: [2], angle: Math.PI },
    "D": { axis: 'y', layers: [0], angle: -Math.PI / 2 },
    "D'": { axis: 'y', layers: [0], angle: Math.PI / 2 },
    "D2": { axis: 'y', layers: [0], angle: -Math.PI },
    "~": { axis: 'a', layers: [], angle: 0 },
    "x": { axis: 'x', layers: [0, 1, 2], angle: Math.PI / 2 },
    "x'": { axis: 'x', layers: [0, 1, 2], angle: -Math.PI / 2 },
    "x2": { axis: 'x', layers: [0, 1, 2], angle: Math.PI },
    "y": { axis: 'y', layers: [0, 1, 2], angle: Math.PI / 2 },
    "y'": { axis: 'y', layers: [0, 1, 2], angle: -Math.PI / 2 },
    "y2": { axis: 'y', layers: [0, 1, 2], angle: Math.PI },
    "z": { axis: 'z', layers: [0, 1, 2], angle: Math.PI / 2 },
    "z'": { axis: 'z', layers: [0, 1, 2], angle: -Math.PI / 2 },
    "z2": { axis: 'z', layers: [0, 1, 2], angle: Math.PI },
    "l": { axis: 'x', layers: [0, 1], angle: -Math.PI / 2 },
    "l'": { axis: 'x', layers: [0, 1], angle: Math.PI / 2 },
    "l2": { axis: 'x', layers: [0, 1], angle: -Math.PI },
    "r": { axis: 'x', layers: [2, 1], angle: Math.PI / 2 },
    "r'": { axis: 'x', layers: [2, 1], angle: -Math.PI / 2 },
    "r2": { axis: 'x', layers: [2, 1], angle: Math.PI },
    "f": { axis: 'z', layers: [2, 1], angle: Math.PI / 2 },
    "f'": { axis: 'z', layers: [2, 1], angle: -Math.PI / 2 },
    "f2": { axis: 'z', layers: [2, 1], angle: Math.PI },
    "b": { axis: 'z', layers: [0, 1], angle: -Math.PI / 2 },
    "b'": { axis: 'z', layers: [0, 1], angle: Math.PI / 2 },
    "b2": { axis: 'z', layers: [0, 1], angle: -Math.PI },
    "u": { axis: 'y', layers: [2, 1], angle: Math.PI / 2 },
    "u'": { axis: 'y', layers: [2, 1], angle: -Math.PI / 2 },
    "u2": { axis: 'y', layers: [2, 1], angle: Math.PI },
    "d": { axis: 'y', layers: [0, 1], angle: -Math.PI / 2 },
    "d'": { axis: 'y', layers: [0, 1], angle: Math.PI / 2 },
    "d2": { axis: 'y', layers: [0, 1], angle: -Math.PI },
    "E": { axis: 'y', layers: [1], angle: -Math.PI / 2 },
    "E'": { axis: 'y', layers: [1], angle: Math.PI / 2 },
    "E2": { axis: 'y', layers: [1], angle: -Math.PI },
    "M": { axis: 'x', layers: [1], angle: -Math.PI / 2 },
    "M'": { axis: 'x', layers: [1], angle: Math.PI / 2 },
    "M2": { axis: 'x', layers: [1], angle: -Math.PI },
    "S": { axis: 'z', layers: [1], angle: Math.PI / 2 },
    "S'": { axis: 'z', layers: [1], angle: -Math.PI / 2 },
    "S2": { axis: 'z', layers: [1], angle: Math.PI },
    "": { axis: 'a', layers: [], angle: 0 },
};
const lblOrderMapping = {
    "U": "U",
    "u": "U'",
    "D": "D",
    "d": "D'",
    "F": "F",
    "f": "F'",
    "L": "L",
    "l": "L'",
    "R": "R",
    "r": "R'",
    "B": "B",
    "b": "B'",
    "Y": "y",
    "y": "y'",
    "~": "~"
};
const faceToColor = {
    "U": "w",
    "F": "g",
    "R": "r",
    "B": "b",
    "D": "y",
    "L": "o"
};
const whiteToBottom = (state) => {
    switch ('U') {
        case state[4]:
            return "x2";
        case state[13]:
            return "z";
        case state[22]:
            return "x'";
        case state[40]:
            return "z'";
        case state[49]:
            return "x";
        default:
            return "";
    }
};
const oppositeMapping = {
    "U": "D",
    "D": "U",
    "R": "L",
    "L": "R",
    "F": "B",
    "B": "F",
    "y": "y'",
    "y'": "y",
    "~": "~"
};
const delayedYellowToTop = (last) => {
    switch (last) {
        case "x":
            return {
                combined: "x'",
                delayed: "x2"
            };
        case "x'":
            return {
                combined: "x",
                delayed: "x2"
            };
        case "x2":
            return {
                combined: "",
                delayed: "x2"
            };
        case "z":
            return {
                combined: "z'",
                delayed: "z2"
            };
        case "z'":
            return {
                combined: "z",
                delayed: "z2"
            };
        default:
            return {
                combined: "x2",
                delayed: "x2"
            };
    }
};


/***/ }),

/***/ "./src/cube/utils_internal.ts":
/*!************************************!*\
  !*** ./src/cube/utils_internal.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Face": () => (/* binding */ Face),
/* harmony export */   "Face1": () => (/* binding */ Face1),
/* harmony export */   "Frame": () => (/* binding */ Frame),
/* harmony export */   "Sticker": () => (/* binding */ Sticker)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var Face;
(function (Face) {
    Face[Face["L"] = 0] = "L";
    Face[Face["R"] = 1] = "R";
    Face[Face["D"] = 2] = "D";
    Face[Face["U"] = 3] = "U";
    Face[Face["B"] = 4] = "B";
    Face[Face["F"] = 5] = "F";
})(Face || (Face = {}));
const Face1 = [4, 1, 3, 0, 5, 2];
class Frame extends three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry {
    constructor(size, border) {
        super();
        const o = size / 2;
        const i = o - border;
        const _verts = [
            -i, +i, +o,
            +i, +i, +o,
            +i, -i, +o,
            -i, -i, +o,
            -i, +o, -i,
            +i, +o, -i,
            +i, +o, +i,
            -i, +o, +i,
            -o, -i, -i,
            -o, +i, -i,
            -o, +i, +i,
            -o, -i, +i,
            +i, +i, -o,
            -i, +i, -o,
            -i, -i, -o,
            +i, -i, -o,
            -i, -o, +i,
            +i, -o, +i,
            +i, -o, -i,
            -i, -o, -i,
            +o, +i, +i,
            +o, +i, -i,
            +o, -i, -i,
            +o, -i, +i,
        ];
        this.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(_verts, 3));
        this.setIndex(Frame._indices);
        this.computeVertexNormals();
    }
}
Frame._indices = [
    0, 2, 1,
    0, 3, 2,
    4, 6, 5,
    4, 7, 6,
    8, 10, 9,
    8, 11, 10,
    12, 14, 13,
    12, 15, 14,
    16, 18, 17,
    16, 19, 18,
    20, 22, 21,
    20, 23, 22,
    1, 6, 7,
    0, 1, 7,
    3, 0, 10,
    11, 3, 10,
    17, 2, 3,
    16, 17, 3,
    23, 20, 1,
    2, 23, 1,
    5, 12, 13,
    4, 5, 13,
    9, 13, 14,
    8, 9, 14,
    22, 15, 12,
    21, 22, 12,
    19, 14, 15,
    18, 19, 15,
    7, 4, 9,
    10, 7, 9,
    11, 8, 19,
    16, 11, 19,
    23, 17, 18,
    22, 23, 18,
    20, 21, 5,
    6, 20, 5,
    20, 6, 1,
    10, 0, 7,
    21, 12, 5,
    13, 9, 4,
    23, 2, 17,
    11, 16, 3,
    22, 18, 15,
    8, 14, 19,
];
class Sticker extends three__WEBPACK_IMPORTED_MODULE_0__.ExtrudeGeometry {
    constructor(size, depth) {
        size = size / 2;
        const left = -size;
        const bottom = size;
        const top = -size;
        const right = size;
        const radius = size / 4;
        const shape = new three__WEBPACK_IMPORTED_MODULE_0__.Shape();
        shape.moveTo(left, top + radius);
        shape.lineTo(left, bottom - radius);
        shape.quadraticCurveTo(left, bottom, left + radius, bottom);
        shape.lineTo(right - radius, bottom);
        shape.quadraticCurveTo(right, bottom, right, bottom - radius);
        shape.lineTo(right, top + radius);
        shape.quadraticCurveTo(right, top, right - radius, top);
        shape.lineTo(left + radius, top);
        shape.quadraticCurveTo(left, top, left, top + radius);
        shape.closePath();
        super(shape, { bevelEnabled: false, depth: depth });
    }
}


/***/ }),

/***/ "./src/cube/world.ts":
/*!***************************!*\
  !*** ./src/cube/world.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/cube/controller.ts");
/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube */ "./src/cube/cube.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");





class World {
    constructor() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
        this.scene.matrixAutoUpdate = false;
        this.scene.rotation.x = Math.PI / 6;
        this.scene.rotation.y = -Math.PI / 4 + Math.PI / 16;
        this.ambient = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.9);
        this.directional = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffffff, 0.1);
        this.directional.position.set(_utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size, _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 3, _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 2);
        this.scene.add(this.ambient);
        this.scene.add(this.directional);
        this.scene.updateMatrix();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera();
        this.controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.cube = new _cube__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.scene.add(this.cube);
        this.dirty = true;
        this.scale = 1;
        this.perspective = 9;
    }
    set dirty(value) {
        this.cube.dirty = value;
    }
    get dirty() {
        return this.cube.dirty;
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.updateCamera();
    }
    updateCamera() {
        const min = this.height / Math.min(this.width, this.height) / this.scale / this.perspective;
        const fov = (2 * Math.atan(min) * 180) / Math.PI;
        const distance = _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 3 * this.perspective * 0.9;
        this.camera.aspect = this.width / this.height;
        this.camera.fov = fov;
        this.camera.position.z = distance;
        this.camera.near = distance - _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 3;
        this.camera.far = distance + _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 8;
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 30));
        this.camera.updateProjectionMatrix();
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-design-icons/iconfont/material-icons.css */ "./node_modules/material-design-icons/iconfont/material-icons.css");
/* harmony import */ var _vueapp_playground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vueapp/playground */ "./src/vueapp/playground/index.ts");





vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vuetify__WEBPACK_IMPORTED_MODULE_4___default()));
const opts = {};
const vuetify = new (vuetify__WEBPACK_IMPORTED_MODULE_4___default())(opts);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.vuetify = vuetify;
let app = _vueapp_playground__WEBPACK_IMPORTED_MODULE_2__["default"];
const vm = new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
    vuetify,
    el: "#app",
    render: (h) => h(app),
});


/***/ }),

/***/ "./src/solver/CoordCube.ts":
/*!*********************************!*\
  !*** ./src/solver/CoordCube.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoordCube)
/* harmony export */ });
/* harmony import */ var _CubieCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CubieCube */ "./src/solver/CubieCube.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./src/solver/Util.ts");


class CoordCube {
    constructor() {
        this.twist = 0;
        this.tsym = 0;
        this.flip = 0;
        this.fsym = 0;
        this.slice = 0;
        this.prun = 0;
    }
    static Init() {
        if (CoordCube.inited == 46) {
            return;
        }
        if (CoordCube.inited == 0) {
            CoordCube.CubieC = new _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"]();
            CoordCube.CubieD = new _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"]();
            _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].InitPermSym2Raw();
            CoordCube.InitCPermMove();
            CoordCube.InitEPermMove();
            CoordCube.InitMPermMoveConj();
            CoordCube.InitCombPMoveConj();
            _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].InitFlipSym2Raw();
            _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].InitTwistSym2Raw();
            CoordCube.InitFlipMove();
            CoordCube.InitTwistMove();
            CoordCube.InitUDSliceMoveConj();
            CoordCube.inited = 1;
            return;
        }
        CoordCube.InitMCPermPrun();
        CoordCube.InitEPermCombPPrun();
        CoordCube.InitSliceTwistPrun();
        CoordCube.InitSliceFlipPrun();
    }
    static InitCPermMove() {
        for (let i = 0; i < CoordCube.N_PERM_SYM; i++) {
            CoordCube.CPermMove[i] = [];
            CoordCube.CubieC.CPerm = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EPermS2R[i];
            for (let j = 0; j < CoordCube.N_MOVES2; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].CornMult(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[_Util__WEBPACK_IMPORTED_MODULE_1__["default"].UD2STD[j]], CoordCube.CubieD);
                CoordCube.CPermMove[i][j] = CoordCube.CubieD.CPermSym;
            }
        }
    }
    static InitEPermMove() {
        for (let i = 0; i < CoordCube.N_PERM_SYM; i++) {
            CoordCube.EPermMove[i] = [];
            CoordCube.CubieC.EPerm = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EPermS2R[i];
            for (let j = 0; j < CoordCube.N_MOVES2; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeMult(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[_Util__WEBPACK_IMPORTED_MODULE_1__["default"].UD2STD[j]], CoordCube.CubieD);
                CoordCube.EPermMove[i][j] = CoordCube.CubieD.EPermSym;
            }
        }
    }
    static InitMPermMoveConj() {
        for (let i = 0; i < CoordCube.N_MPERM; i++) {
            CoordCube.MPermMove[i] = [];
            CoordCube.MPermConj[i] = [];
            CoordCube.CubieC.MPerm = i;
            for (let j = 0; j < CoordCube.N_MOVES2; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeMult(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[_Util__WEBPACK_IMPORTED_MODULE_1__["default"].UD2STD[j]], CoordCube.CubieD);
                CoordCube.MPermMove[i][j] = CoordCube.CubieD.MPerm;
            }
            for (let j = 0; j < 16; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeConjugate(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMultInv[0][j], CoordCube.CubieD);
                CoordCube.MPermConj[i][j] = CoordCube.CubieD.MPerm;
            }
        }
    }
    static InitCombPMoveConj() {
        for (let i = 0; i < CoordCube.N_COMB; i++) {
            CoordCube.CCombPMove[i] = [];
            CoordCube.CCombPConj[i] = [];
            CoordCube.CubieC.CComb = i % 70;
            for (let j = 0; j < CoordCube.N_MOVES2; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].CornMult(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[_Util__WEBPACK_IMPORTED_MODULE_1__["default"].UD2STD[j]], CoordCube.CubieD);
                CoordCube.CCombPMove[i][j] = CoordCube.CubieD.CComb + 70 * (((CoordCube.P2_PARITY_MOVE >> j) & 1) ^ (i / 70));
            }
            for (let j = 0; j < 16; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].CornConjugate(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMultInv[0][j], CoordCube.CubieD);
                CoordCube.CCombPConj[i][j] = CoordCube.CubieD.CComb + 70 * ~~(i / 70);
            }
        }
    }
    static InitFlipMove() {
        for (let i = 0; i < CoordCube.N_FLIP_SYM; i++) {
            CoordCube.FlipMove[i] = [];
            CoordCube.CubieC.Flip = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].FlipS2R[i];
            for (let j = 0; j < CoordCube.N_MOVES; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeMult(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[j], CoordCube.CubieD);
                CoordCube.FlipMove[i][j] = CoordCube.CubieD.FlipSym;
            }
        }
    }
    static InitTwistMove() {
        for (let i = 0; i < CoordCube.N_TWIST_SYM; i++) {
            CoordCube.TwistMove[i] = [];
            CoordCube.CubieC.Twist = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].TwistS2R[i];
            for (let j = 0; j < CoordCube.N_MOVES; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].CornMult(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[j], CoordCube.CubieD);
                CoordCube.TwistMove[i][j] = CoordCube.CubieD.TwistSym;
            }
        }
    }
    static InitUDSliceMoveConj() {
        for (let i = 0; i < CoordCube.N_SLICE; i++) {
            CoordCube.UDSliceMove[i] = [];
            CoordCube.UDSliceConj[i] = [];
            CoordCube.CubieC.UDSlice = i;
            for (let j = 0; j < CoordCube.N_MOVES; j++) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeMult(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[j], CoordCube.CubieD);
                CoordCube.UDSliceMove[i][j] = CoordCube.CubieD.UDSlice;
            }
            for (let j = 0; j < 16; j += 2) {
                _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeConjugate(CoordCube.CubieC, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMultInv[0][j], CoordCube.CubieD);
                CoordCube.UDSliceConj[i][j >> 1] = CoordCube.CubieD.UDSlice;
            }
        }
    }
    static SetPruning(table, index, value) {
        table[index >> 3] ^= value << (index << 2);
    }
    static GetPruning(table, index) {
        return (table[index >> 3] >> (index << 2)) & 0xf;
    }
    static HasZero(val) {
        return ((val - 0x11111111) & ~val & 0x88888888) != 0;
    }
    static InitRawSymPrun(PrunTable, N_RAW, N_SYM, RawMove, RawConj, SymMove, SymState, PrunFlag) {
        const SYM_SHIFT = PrunFlag & 0xf;
        const SYM_E2C_MAGIC = ((PrunFlag >> 4) & 1) == 1 ? 0x00dddd00 : 0x00000000;
        const IS_PHASE2 = ((PrunFlag >> 5) & 1) == 1;
        const INV_DEPTH = (PrunFlag >> 8) & 0xf;
        const MAX_DEPTH = (PrunFlag >> 12) & 0xf;
        const MIN_DEPTH = (PrunFlag >> 16) & 0xf;
        const SYM_MASK = (1 << SYM_SHIFT) - 1;
        const N_SIZE = N_RAW * N_SYM;
        const N_MOVES = IS_PHASE2 ? 10 : 18;
        const NEXT_AXIS_MAGIC = N_MOVES == 10 ? 0x42 : 0x92492;
        let depth = CoordCube.GetPruning(PrunTable, N_SIZE) - 1;
        if (depth == -1) {
            for (let i = 0; i < (N_SIZE >> 3) + 1; i++) {
                PrunTable[i] = 0xffffffff;
            }
            CoordCube.SetPruning(PrunTable, 0, 0 ^ 0xf);
            depth = 0;
        }
        else {
            CoordCube.SetPruning(PrunTable, N_SIZE, 0xf ^ (depth + 1));
        }
        const SEARCH_DEPTH = Math.min(Math.max(depth + 1, MIN_DEPTH), MAX_DEPTH);
        while (depth < SEARCH_DEPTH) {
            const inv = depth > INV_DEPTH;
            const select = inv ? 0xf : depth;
            const selArrMask = select * 0x11111111;
            const check = inv ? depth : 0xf;
            depth++;
            CoordCube.inited++;
            const xorVal = depth ^ 0xf;
            let val = 0;
            for (let i = 0; i < N_SIZE; i++, val >>= 4) {
                if ((i & 7) == 0) {
                    val = PrunTable[i >> 3];
                    if (!CoordCube.HasZero(val ^ selArrMask)) {
                        i += 7;
                        continue;
                    }
                }
                if ((val & 0xf) != select) {
                    continue;
                }
                const raw = i % N_RAW;
                const sym = ~~(i / N_RAW);
                for (let m = 0; m < N_MOVES; m++) {
                    let symx = SymMove[sym][m];
                    const rawx = RawConj[RawMove[raw][m]][symx & SYM_MASK];
                    symx >>= SYM_SHIFT;
                    const idx = symx * N_RAW + rawx;
                    const prun = CoordCube.GetPruning(PrunTable, idx);
                    if (prun != check) {
                        if (prun < depth - 1) {
                            m += (NEXT_AXIS_MAGIC >> m) & 3;
                        }
                        continue;
                    }
                    if (inv) {
                        CoordCube.SetPruning(PrunTable, i, xorVal);
                        break;
                    }
                    CoordCube.SetPruning(PrunTable, idx, xorVal);
                    for (let j = 1, symState = SymState[symx]; (symState >>= 1) != 0; j++) {
                        if ((symState & 1) != 1) {
                            continue;
                        }
                        let idxx = symx * N_RAW;
                        idxx += RawConj[rawx][j ^ ((SYM_E2C_MAGIC >> (j << 1)) & 3)];
                        if (CoordCube.GetPruning(PrunTable, idxx) == check) {
                            CoordCube.SetPruning(PrunTable, idxx, xorVal);
                        }
                    }
                }
            }
        }
        CoordCube.SetPruning(PrunTable, N_SIZE, (depth + 1) ^ 0xf);
    }
    static InitSliceTwistPrun() {
        CoordCube.InitRawSymPrun(CoordCube.UDSliceTwistPrun, 495, 324, CoordCube.UDSliceMove, CoordCube.UDSliceConj, CoordCube.TwistMove, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymStateTwist, 0x69603);
    }
    static InitSliceFlipPrun() {
        CoordCube.InitRawSymPrun(CoordCube.UDSliceFlipPrun, 495, 336, CoordCube.UDSliceMove, CoordCube.UDSliceConj, CoordCube.FlipMove, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymStateFlip, 0x69603);
    }
    static InitMCPermPrun() {
        CoordCube.InitRawSymPrun(CoordCube.MCPermPrun, 24, 2768, CoordCube.MPermMove, CoordCube.MPermConj, CoordCube.CPermMove, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymStatePerm, 0x8ea34);
    }
    static InitEPermCombPPrun() {
        CoordCube.InitRawSymPrun(CoordCube.EPermCCombPPrun, CoordCube.N_COMB, 2768, CoordCube.CCombPMove, CoordCube.CCombPConj, CoordCube.EPermMove, _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymStatePerm, 0x7d824);
    }
    setWithPrun(cc, depth) {
        this.twist = cc.TwistSym;
        this.flip = cc.FlipSym;
        this.tsym = this.twist & 7;
        this.twist = this.twist >> 3;
        this.prun = 0;
        this.fsym = this.flip & 7;
        this.flip = this.flip >> 3;
        this.slice = cc.UDSlice;
        this.prun = Math.max(this.prun, Math.max(CoordCube.GetPruning(CoordCube.UDSliceTwistPrun, this.twist * CoordCube.N_SLICE + CoordCube.UDSliceConj[this.slice][this.tsym]), CoordCube.GetPruning(CoordCube.UDSliceFlipPrun, this.flip * CoordCube.N_SLICE + CoordCube.UDSliceConj[this.slice][this.fsym])));
        return this.prun <= depth;
    }
    doMovePrun(cc, m) {
        this.slice = CoordCube.UDSliceMove[cc.slice][m];
        this.flip = CoordCube.FlipMove[cc.flip][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].Sym8Move[(m << 3) | cc.fsym]];
        this.fsym = (this.flip & 7) ^ cc.fsym;
        this.flip >>= 3;
        this.twist = CoordCube.TwistMove[cc.twist][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].Sym8Move[(m << 3) | cc.tsym]];
        this.tsym = (this.twist & 7) ^ cc.tsym;
        this.twist >>= 3;
        this.prun = Math.max(CoordCube.GetPruning(CoordCube.UDSliceTwistPrun, this.twist * CoordCube.N_SLICE + CoordCube.UDSliceConj[this.slice][this.tsym]), CoordCube.GetPruning(CoordCube.UDSliceFlipPrun, this.flip * CoordCube.N_SLICE + CoordCube.UDSliceConj[this.slice][this.fsym]));
        return this.prun;
    }
}
CoordCube.N_MOVES = 18;
CoordCube.N_MOVES2 = 10;
CoordCube.N_SLICE = 495;
CoordCube.N_TWIST = 2187;
CoordCube.N_TWIST_SYM = 324;
CoordCube.N_FLIP = 2048;
CoordCube.N_FLIP_SYM = 336;
CoordCube.N_PERM = 40320;
CoordCube.N_PERM_SYM = 2768;
CoordCube.N_MPERM = 24;
CoordCube.N_COMB = 70;
CoordCube.P2_PARITY_MOVE = 0;
CoordCube.UDSliceMove = [];
CoordCube.TwistMove = [];
CoordCube.FlipMove = [];
CoordCube.UDSliceConj = [];
CoordCube.UDSliceTwistPrun = [];
CoordCube.UDSliceFlipPrun = [];
CoordCube.CPermMove = [];
CoordCube.EPermMove = [];
CoordCube.MPermMove = [];
CoordCube.MPermConj = [];
CoordCube.CCombPMove = [];
CoordCube.CCombPConj = [];
CoordCube.MCPermPrun = [];
CoordCube.EPermCCombPPrun = [];
CoordCube.inited = 0;


/***/ }),

/***/ "./src/solver/CubieCube.ts":
/*!*********************************!*\
  !*** ./src/solver/CubieCube.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CubieCube)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/solver/Util.ts");
/* harmony import */ var _CoordCube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordCube */ "./src/solver/CoordCube.ts");


class CubieCube {
    constructor(cperm = 0, twist = 0, eperm = 0, flip = 0) {
        this.ca = [0, 1, 2, 3, 4, 5, 6, 7];
        this.ea = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
        this.CPerm = cperm;
        this.Twist = twist;
        _Util__WEBPACK_IMPORTED_MODULE_0__["default"].SetNPermFull(this.ea, eperm, 12, true);
        this.Flip = flip;
    }
    static ESym2CSym(idx) {
        return idx ^ ((CubieCube.SYM_E2C_MAGIC >> ((idx & 0xf) << 1)) & 3);
    }
    static InitMove() {
        const result = [];
        result[0] = new CubieCube(15120, 0, 119750400, 0);
        result[3] = new CubieCube(21021, 1494, 323403417, 0);
        result[6] = new CubieCube(8064, 1236, 29441808, 550);
        result[9] = new CubieCube(9, 0, 5880, 0);
        result[12] = new CubieCube(1230, 412, 2949660, 0);
        result[15] = new CubieCube(224, 137, 328552, 137);
        for (let a = 0; a < 18; a += 3) {
            for (let p = 0; p < 2; p++) {
                result[a + p + 1] = new CubieCube();
                CubieCube.EdgeMult(result[a + p], result[a], result[a + p + 1]);
                CubieCube.CornMult(result[a + p], result[a], result[a + p + 1]);
            }
        }
        CubieCube.MoveCube = result;
    }
    static InitSym() {
        let c = new CubieCube();
        let d = new CubieCube();
        const f2 = new CubieCube(28783, 0, 259268407, 0);
        const u4 = new CubieCube(15138, 0, 119765538, 7);
        const lr2 = new CubieCube(5167, 0, 83473207, 0);
        for (let i = 0; i < 8; i++) {
            lr2.ca[i] |= 3 << 3;
        }
        for (let i = 0; i < 16; i++) {
            CubieCube.SymCube[i] = new CubieCube();
            CubieCube.SymCube[i].copy(c);
            CubieCube.CornMultFull(c, u4, d);
            CubieCube.EdgeMult(c, u4, d);
            [c, d] = [d, c];
            if (i % 4 == 3) {
                CubieCube.CornMultFull(c, lr2, d);
                CubieCube.EdgeMult(c, lr2, d);
                [c, d] = [d, c];
            }
            if (i % 8 == 7) {
                CubieCube.CornMultFull(c, f2, d);
                CubieCube.EdgeMult(c, f2, d);
                [c, d] = [d, c];
            }
        }
        for (let i = 0; i < 16; i++) {
            CubieCube.SymMult[i] = [];
            CubieCube.SymMultInv[i] = [];
            CubieCube.SymMove[i] = [];
            CubieCube.SymMoveUD[i] = [];
        }
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                CubieCube.SymMult[i][j] = i ^ j ^ ((0x14ab4 >> j) & (i << 1) & 2);
                CubieCube.SymMultInv[CubieCube.SymMult[i][j]][j] = i;
            }
        }
        for (let s = 0; s < 16; s++) {
            for (let j = 0; j < 18; j++) {
                CubieCube.CornConjugate(CubieCube.MoveCube[j], CubieCube.SymMultInv[0][s], c);
                outloop: for (let m = 0; m < 18; m++) {
                    for (let t = 0; t < 8; t++) {
                        if (CubieCube.MoveCube[m].ca[t] != c.ca[t]) {
                            continue outloop;
                        }
                    }
                    CubieCube.SymMove[s][j] = m;
                    CubieCube.SymMoveUD[s][_Util__WEBPACK_IMPORTED_MODULE_0__["default"].STD2UD[j]] = _Util__WEBPACK_IMPORTED_MODULE_0__["default"].STD2UD[m];
                    break;
                }
                if (s % 2 == 0) {
                    CubieCube.Sym8Move[(j << 3) | (s >> 1)] = CubieCube.SymMove[s][j];
                }
            }
        }
    }
    static InitSym2Raw(N_RAW, Sym2Raw, Raw2Sym, SymState, coord) {
        const c = new CubieCube();
        const d = new CubieCube();
        let count = 0, idx = 0;
        const symInc = coord >= 2 ? 1 : 2;
        const isEdge = coord != 1;
        for (let i = 0; i < N_RAW; i++) {
            if (Raw2Sym[i] != undefined) {
                continue;
            }
            switch (coord) {
                case 0:
                    c.Flip = i;
                    break;
                case 1:
                    c.Twist = i;
                    break;
                case 2:
                    c.EPerm = i;
                    break;
            }
            for (let s = 0; s < 16; s += symInc) {
                if (isEdge) {
                    CubieCube.EdgeConjugate(c, s, d);
                }
                else {
                    CubieCube.CornConjugate(c, s, d);
                }
                switch (coord) {
                    case 0:
                        idx = d.Flip;
                        break;
                    case 1:
                        idx = d.Twist;
                        break;
                    case 2:
                        idx = d.EPerm;
                        break;
                }
                if (idx == i) {
                    SymState[count] |= 1 << (s / symInc);
                }
                Raw2Sym[idx] = ((count << 4) | s) / symInc;
            }
            Sym2Raw[count++] = i;
        }
        return count;
    }
    static InitFlipSym2Raw() {
        CubieCube.InitSym2Raw(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_FLIP, CubieCube.FlipS2R, CubieCube.FlipR2S, CubieCube.SymStateFlip, 0);
    }
    static InitTwistSym2Raw() {
        CubieCube.InitSym2Raw(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_TWIST, CubieCube.TwistS2R, CubieCube.TwistR2S, CubieCube.SymStateTwist, 1);
    }
    static InitPermSym2Raw() {
        CubieCube.InitSym2Raw(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_PERM, CubieCube.EPermS2R, CubieCube.EPermR2S, CubieCube.SymStatePerm, 2);
        const cc = new CubieCube();
        for (let i = 0; i < _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_PERM_SYM; i++) {
            cc.EPerm = CubieCube.EPermS2R[i];
            CubieCube.Perm2CombP[i] = _Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetComb(cc.ea, 0, true);
            cc.inverse();
            CubieCube.PermInvEdgeSym[i] = cc.EPermSym;
        }
        for (let i = 0; i < _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_MPERM; i++) {
            cc.MPerm = i;
            cc.inverse();
            CubieCube.MPermInv[i] = cc.MPerm;
        }
    }
    static Init() {
        CubieCube.temps = new CubieCube();
        CubieCube.InitMove();
        CubieCube.InitSym();
    }
    static CornMult(a, b, prod) {
        for (let corn = 0; corn < 8; corn++) {
            const oriA = a.ca[b.ca[corn] & 7] >> 3;
            const oriB = b.ca[corn] >> 3;
            prod.ca[corn] = (a.ca[b.ca[corn] & 7] & 7) | ((oriA + oriB) % 3 << 3);
        }
    }
    static CornMultFull(a, b, prod) {
        for (let corn = 0; corn < 8; corn++) {
            const oriA = a.ca[b.ca[corn] & 7] >> 3;
            const oriB = b.ca[corn] >> 3;
            let ori = oriA + (oriA < 3 ? oriB : 6 - oriB);
            ori = (ori % 3) + (oriA < 3 == oriB < 3 ? 0 : 3);
            prod.ca[corn] = (a.ca[b.ca[corn] & 7] & 7) | (ori << 3);
        }
    }
    static EdgeMult(a, b, prod) {
        for (let ed = 0; ed < 12; ed++) {
            prod.ea[ed] = a.ea[b.ea[ed] >> 1] ^ (b.ea[ed] & 1);
        }
    }
    static CornConjugate(a, idx, b) {
        const sinv = CubieCube.SymCube[CubieCube.SymMultInv[0][idx]];
        const s = CubieCube.SymCube[idx];
        for (let corn = 0; corn < 8; corn++) {
            const oriA = sinv.ca[a.ca[s.ca[corn] & 7] & 7] >> 3;
            const oriB = a.ca[s.ca[corn] & 7] >> 3;
            const ori = oriA < 3 ? oriB : (3 - oriB) % 3;
            b.ca[corn] = (sinv.ca[a.ca[s.ca[corn] & 7] & 7] & 7) | (ori << 3);
        }
    }
    static EdgeConjugate(a, idx, b) {
        const sinv = CubieCube.SymCube[CubieCube.SymMultInv[0][idx]];
        const s = CubieCube.SymCube[idx];
        for (let ed = 0; ed < 12; ed++) {
            b.ea[ed] = sinv.ea[a.ea[s.ea[ed] >> 1] >> 1] ^ (a.ea[s.ea[ed] >> 1] & 1) ^ (s.ea[ed] & 1);
        }
    }
    static GetPermSymInv(idx, sym, corner) {
        let idxi = CubieCube.PermInvEdgeSym[idx];
        if (corner) {
            idxi = CubieCube.ESym2CSym(idxi);
        }
        return (idxi & 0xfff0) | CubieCube.SymMult[idxi & 0xf][sym];
    }
    static GetSkipMoves(ssym) {
        let ret = 0;
        for (let i = 1; (ssym >>= 1) != 0; i++) {
            if ((ssym & 1) == 1) {
                ret |= CubieCube.FirstMoveSym[i];
            }
        }
        return ret;
    }
    copy(c) {
        for (let edge = 0; edge < 12; edge++) {
            this.ea[edge] = c.ea[edge];
        }
        for (let corn = 0; corn < 8; corn++) {
            this.ca[corn] = c.ca[corn];
        }
    }
    inverse() {
        for (let edge = 0; edge < 12; edge++) {
            CubieCube.temps.ea[this.ea[edge] >> 1] = (edge << 1) | (this.ea[edge] & 1);
        }
        for (let corn = 0; corn < 8; corn++) {
            CubieCube.temps.ca[this.ca[corn] & 0x7] = corn | ((0x20 >> (this.ca[corn] >> 3)) & 0x18);
        }
        this.copy(CubieCube.temps);
    }
    URFConjugate() {
        CubieCube.CornMult(CubieCube.URF2, this, CubieCube.temps);
        CubieCube.CornMult(CubieCube.temps, CubieCube.URF1, this);
        CubieCube.EdgeMult(CubieCube.URF2, this, CubieCube.temps);
        CubieCube.EdgeMult(CubieCube.temps, CubieCube.URF1, this);
    }
    get Flip() {
        let idx = 0;
        for (let i = 0; i < 11; i++) {
            idx = (idx << 1) | (this.ea[i] & 1);
        }
        return idx;
    }
    set Flip(idx) {
        let parity = 0;
        let val = 0;
        for (let i = 10; i >= 0; i--, idx >>= 1) {
            parity ^= val = idx & 1;
            this.ea[i] = (this.ea[i] & ~1) | val;
        }
        this.ea[11] = (this.ea[11] & ~1) | parity;
    }
    get FlipSym() {
        return CubieCube.FlipR2S[this.Flip];
    }
    get Twist() {
        let idx = 0;
        for (let i = 0; i < 7; i++) {
            idx += (idx << 1) + (this.ca[i] >> 3);
        }
        return idx;
    }
    set Twist(idx) {
        let twst = 15;
        let val = 0;
        for (let i = 6; i >= 0; i--, idx = ~~(idx / 3)) {
            twst -= val = idx % 3;
            this.ca[i] = (this.ca[i] & 0x7) | (val << 3);
        }
        this.ca[7] = (this.ca[7] & 0x7) | (twst % 3 << 3);
    }
    get TwistSym() {
        return CubieCube.TwistR2S[this.Twist];
    }
    get UDSlice() {
        return 494 - _Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetComb(this.ea, 8, true);
    }
    set UDSlice(idx) {
        _Util__WEBPACK_IMPORTED_MODULE_0__["default"].SetComb(this.ea, 494 - idx, 8, true);
    }
    get CPerm() {
        return _Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetNPerm(this.ca, 8, false);
    }
    set CPerm(idx) {
        _Util__WEBPACK_IMPORTED_MODULE_0__["default"].SetNPerm(this.ca, idx, 8, false);
    }
    get CPermSym() {
        return CubieCube.ESym2CSym(CubieCube.EPermR2S[this.CPerm]);
    }
    get EPerm() {
        return _Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetNPerm(this.ea, 8, true);
    }
    set EPerm(idx) {
        _Util__WEBPACK_IMPORTED_MODULE_0__["default"].SetNPerm(this.ea, idx, 8, true);
    }
    get EPermSym() {
        return CubieCube.EPermR2S[this.EPerm];
    }
    get MPerm() {
        return _Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetNPermFull(this.ea, 12, true) % 24;
    }
    set MPerm(idx) {
        _Util__WEBPACK_IMPORTED_MODULE_0__["default"].SetNPermFull(this.ea, idx, 12, true);
    }
    get CComb() {
        return _Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetComb(this.ca, 0, false);
    }
    set CComb(idx) {
        _Util__WEBPACK_IMPORTED_MODULE_0__["default"].SetComb(this.ca, idx, 0, false);
    }
    verify() {
        let sum = 0;
        let mask = 0;
        for (let e = 0; e < 12; e++) {
            mask |= 1 << (this.ea[e] >> 1);
            sum ^= this.ea[e] & 1;
        }
        if (mask != 0xfff) {
            return "missing edges";
        }
        if (sum != 0) {
            return "fliped edges";
        }
        mask = 0;
        sum = 0;
        for (let c = 0; c < 8; c++) {
            mask |= 1 << (this.ca[c] & 7);
            sum += this.ca[c] >> 3;
        }
        if (mask != 0xff) {
            return "missing corners";
        }
        if (sum % 3 != 0) {
            return "twisted corner";
        }
        if ((_Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetNParity(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetNPermFull(this.ea, 12, true), 12) ^ _Util__WEBPACK_IMPORTED_MODULE_0__["default"].GetNParity(this.CPerm, 8)) != 0) {
            return "parity error";
        }
        return "";
    }
    serialize() {
        const ts = "URFDLB";
        const f = [];
        for (let i = 0; i < 54; i++) {
            f[i] = ts[~~(i / 9)];
        }
        for (let c = 0; c < 8; c++) {
            const j = this.ca[c] & 0x7;
            const ori = this.ca[c] >> 3;
            for (let n = 0; n < 3; n++)
                f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[c][(n + ori) % 3]] = ts[~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[j][n] / 9)];
        }
        for (let e = 0; e < 12; e++) {
            const j = this.ea[e] >> 1;
            const ori = this.ea[e] & 1;
            for (let n = 0; n < 2; n++)
                f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[e][(n + ori) % 2]] = ts[~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[j][n] / 9)];
        }
        return f.join("");
    }
    deserialize(facelet) {
        let count = 0;
        const f = [];
        const centers = facelet[4] + facelet[13] + facelet[22] + facelet[31] + facelet[40] + facelet[49];
        for (let i = 0; i < 54; ++i) {
            f[i] = centers.indexOf(facelet[i]);
            if (f[i] == -1) {
                return false;
            }
            count += 1 << (f[i] << 2);
        }
        if (count != 0x999999) {
            return false;
        }
        let col1, col2, i, j, ori, temp;
        for (i = 0; i < 8; ++i) {
            for (ori = 0; ori < 3; ++ori)
                if (f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[i][ori]] == 0 || f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[i][ori]] == 3)
                    break;
            col1 = f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[i][(ori + 1) % 3]];
            col2 = f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[i][(ori + 2) % 3]];
            temp = 0;
            for (j = 0; j < 8; ++j) {
                if (col1 == ~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[j][1] / 9) && col2 == ~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].CornerFacelet[j][2] / 9)) {
                    this.ca[i] = j | (ori % 3 << 3);
                    temp = 1;
                    break;
                }
            }
            if (temp == 0)
                return false;
        }
        for (i = 0; i < 12; ++i) {
            temp = 0;
            for (j = 0; j < 12; ++j) {
                if (f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[i][0]] == ~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[j][0] / 9) &&
                    f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[i][1]] == ~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[j][1] / 9)) {
                    this.ea[i] = j << 1;
                    temp = 1;
                    break;
                }
                if (f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[i][0]] == ~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[j][1] / 9) &&
                    f[_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[i][1]] == ~~(_Util__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeFacelet[j][0] / 9)) {
                    this.ea[i] = (j << 1) | 1;
                    temp = 1;
                    break;
                }
            }
            if (temp == 0)
                return false;
        }
        return true;
    }
}
CubieCube.SymCube = [];
CubieCube.MoveCube = [];
CubieCube.MoveCubeSym = [];
CubieCube.FirstMoveSym = [];
CubieCube.SymMult = [];
CubieCube.SymMultInv = [];
CubieCube.SymMove = [];
CubieCube.Sym8Move = [];
CubieCube.SymMoveUD = [];
CubieCube.FlipS2R = [];
CubieCube.TwistS2R = [];
CubieCube.EPermS2R = [];
CubieCube.Perm2CombP = [];
CubieCube.PermInvEdgeSym = [];
CubieCube.MPermInv = [];
CubieCube.SYM_E2C_MAGIC = 0x00dddd00;
CubieCube.FlipR2S = [];
CubieCube.TwistR2S = [];
CubieCube.EPermR2S = [];
CubieCube.SymStateTwist = [];
CubieCube.SymStateFlip = [];
CubieCube.SymStatePerm = [];
CubieCube.URF1 = new CubieCube(2531, 1373, 67026819, 1367);
CubieCube.URF2 = new CubieCube(2089, 1906, 322752913, 2040);
CubieCube.URFMove = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    [6, 7, 8, 0, 1, 2, 3, 4, 5, 15, 16, 17, 9, 10, 11, 12, 13, 14],
    [3, 4, 5, 6, 7, 8, 0, 1, 2, 12, 13, 14, 15, 16, 17, 9, 10, 11],
    [2, 1, 0, 5, 4, 3, 8, 7, 6, 11, 10, 9, 14, 13, 12, 17, 16, 15],
    [8, 7, 6, 2, 1, 0, 5, 4, 3, 17, 16, 15, 11, 10, 9, 14, 13, 12],
    [5, 4, 3, 8, 7, 6, 2, 1, 0, 14, 13, 12, 17, 16, 15, 11, 10, 9],
];


/***/ }),

/***/ "./src/solver/Solver.ts":
/*!******************************!*\
  !*** ./src/solver/Solver.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Solver)
/* harmony export */ });
/* harmony import */ var _CubieCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CubieCube */ "./src/solver/CubieCube.ts");
/* harmony import */ var _CoordCube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordCube */ "./src/solver/CoordCube.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util */ "./src/solver/Util.ts");



class Solver {
    constructor() {
        this.length1 = 0;
        this.urfIdx = 0;
        this.depth1 = 0;
        _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].Init();
        _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].Init();
        this.move = [];
        this.moveSol = [];
        this.nodeUD = [];
        this.valid1 = 0;
        this.allowShorter = false;
        this.cc = new _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.urfCubieCube = [];
        this.urfCoordCube = [];
        this.phase1Cubie = [];
        this.preMoveCubes = [];
        this.preMoves = [];
        this.preMoveLen = 0;
        this.maxPreMoves = 0;
        for (let i = 0; i < 21; i++) {
            this.nodeUD[i] = new _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"]();
            this.phase1Cubie[i] = new _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
        for (let i = 0; i < 6; i++) {
            this.urfCubieCube[i] = new _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"]();
            this.urfCoordCube[i] = new _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }
        for (let i = 0; i < Solver.MAX_PRE_MOVES; i++) {
            this.preMoveCubes[i + 1] = new _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
    }
    init() {
        _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].Init();
    }
    solve(facelets) {
        const valid = this.cc.deserialize(facelets);
        if (!valid) {
            return "error: invalid cube";
        }
        const verify = this.cc.verify();
        if (verify.length > 0) {
            return "error: " + verify;
        }
        this.sol = 22;
        this.moveSol = null;
        this.initSearch();
        const solution = this.search();
        return "great";
    }
    initSearch() {
        this.conjMask = (Solver.TRY_INVERSE ? 0 : 0x38) | (Solver.TRY_THREE_AXES ? 0 : 0x36);
        this.maxPreMoves = this.conjMask > 7 ? 0 : Solver.MAX_PRE_MOVES;
        for (let i = 0; i < 6; i++) {
            this.urfCubieCube[i].copy(this.cc);
            this.urfCoordCube[i].setWithPrun(this.urfCubieCube[i], 20);
            this.cc.URFConjugate();
            if (i % 3 == 2) {
                this.cc.inverse();
            }
        }
    }
    search() {
        for (this.length1 = 0; this.length1 < this.sol; this.length1++) {
            for (this.urfIdx = 0; this.urfIdx < 6; this.urfIdx++) {
                if ((this.conjMask & (1 << this.urfIdx)) != 0) {
                    continue;
                }
                if (this.phase1PreMoves(this.maxPreMoves, -30, this.urfCubieCube[this.urfIdx]) == 0) {
                    return this.moveSol == null ? "error: no solution for prob" : this.getSolution();
                }
            }
        }
        return this.moveSol == null ? "error: no solution for depth" : this.getSolution();
    }
    getSolution() {
        let ret = "";
        if (!this.moveSol) {
            return ret;
        }
        const urf = this.urfIdx;
        if (urf < 3) {
            for (let s = 0; s < this.moveSol.length; ++s) {
                ret += _Util__WEBPACK_IMPORTED_MODULE_2__["default"].MOVE2STR[_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].URFMove[urf][this.moveSol[s]]] + " ";
            }
        }
        else {
            for (let s = this.moveSol.length - 1; s >= 0; --s) {
                ret += _Util__WEBPACK_IMPORTED_MODULE_2__["default"].MOVE2STR[_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].URFMove[urf][this.moveSol[s]]] + " ";
            }
        }
        return ret;
    }
    phase1PreMoves(maxl, lm, cc) {
        this.preMoveLen = this.maxPreMoves - maxl;
        if (this.preMoveLen == 0 || ((0x36fb7 >> lm) & 1) == 0) {
            this.depth1 = this.length1 - this.preMoveLen;
            this.phase1Cubie[0].copy(cc);
            this.allowShorter = this.depth1 == Solver.MIN_P1LENGTH_PRE && this.preMoveLen != 0;
            if (this.nodeUD[this.depth1 + 1].setWithPrun(cc, this.depth1) &&
                this.phase1(this.nodeUD[this.depth1 + 1], this.depth1, -1) == 0) {
                return 0;
            }
        }
        if (maxl == 0 || this.preMoveLen + Solver.MIN_P1LENGTH_PRE >= this.length1) {
            return 1;
        }
        let skipMoves = 0;
        if (maxl == 1 || this.preMoveLen + 1 + Solver.MIN_P1LENGTH_PRE >= this.length1) {
            skipMoves |= 0x36fb7;
        }
        lm = ~~(lm / 3) * 3;
        for (let m = 0; m < 18; m++) {
            if (m == lm || m == lm - 9 || m == lm + 9) {
                m += 2;
                continue;
            }
            if ((skipMoves & (1 << m)) != 0) {
                continue;
            }
            _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].CornMult(_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[m], cc, this.preMoveCubes[maxl]);
            _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeMult(_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[m], cc, this.preMoveCubes[maxl]);
            this.preMoves[this.maxPreMoves - maxl] = m;
            const ret = this.phase1PreMoves(maxl - 1, m, this.preMoveCubes[maxl]);
            if (ret == 0) {
                return 0;
            }
        }
        return 1;
    }
    phase1(node, maxl, lm) {
        if (node.prun == 0 && maxl < 5) {
            if (this.allowShorter || maxl == 0) {
                this.depth1 -= maxl;
                const ret = this.initPhase2Pre();
                this.depth1 += maxl;
                return ret;
            }
            else {
                return 1;
            }
        }
        for (let axis = 0; axis < 18; axis += 3) {
            if (axis == lm || axis == lm - 9) {
                continue;
            }
            for (let power = 0; power < 3; power++) {
                const m = axis + power;
                const prun = this.nodeUD[maxl].doMovePrun(node, m);
                if (prun > maxl) {
                    break;
                }
                else if (prun == maxl) {
                    continue;
                }
                this.move[this.depth1 - maxl] = m;
                this.valid1 = Math.min(this.valid1, this.depth1 - maxl);
                const ret = this.phase1(this.nodeUD[maxl], maxl - 1, axis);
                if (ret == 0) {
                    return 0;
                }
                else if (ret == 2) {
                    break;
                }
            }
        }
        return 1;
    }
    initPhase2Pre() {
        for (let i = this.valid1; i < this.depth1; i++) {
            _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].CornMult(this.phase1Cubie[i], _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[this.move[i]], this.phase1Cubie[i + 1]);
            _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeMult(this.phase1Cubie[i], _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[this.move[i]], this.phase1Cubie[i + 1]);
        }
        this.valid1 = this.depth1;
        let ret = this.initPhase2(this.phase1Cubie[this.depth1]);
        if (ret == 0 || this.preMoveLen == 0 || ret == 2) {
            return ret;
        }
        const m = ~~(this.preMoves[this.preMoveLen - 1] / 3) * 3 + 1;
        _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].CornMult(_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[m], this.phase1Cubie[this.depth1], this.phase1Cubie[this.depth1 + 1]);
        _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].EdgeMult(_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].MoveCube[m], this.phase1Cubie[this.depth1], this.phase1Cubie[this.depth1 + 1]);
        this.preMoves[this.preMoveLen - 1] += 2 - (this.preMoves[this.preMoveLen - 1] % 3) * 2;
        ret = this.initPhase2(this.phase1Cubie[this.depth1 + 1]);
        this.preMoves[this.preMoveLen - 1] += 2 - (this.preMoves[this.preMoveLen - 1] % 3) * 2;
        return ret;
    }
    initPhase2(phase2Cubie) {
        let p2corn = phase2Cubie.CPermSym;
        const p2csym = p2corn & 0xf;
        p2corn >>= 4;
        let p2edge = phase2Cubie.EPermSym;
        const p2esym = p2edge & 0xf;
        p2edge >>= 4;
        const p2mid = phase2Cubie.MPerm;
        const p2edgei = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].GetPermSymInv(p2edge, p2esym, false);
        const p2corni = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].GetPermSymInv(p2corn, p2csym, true);
        const prun = Math.max(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].GetPruning(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].MCPermPrun, p2corn * _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_MPERM + _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].MPermConj[p2mid][p2csym]), _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].GetPruning(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].EPermCCombPPrun, p2edge * _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_COMB +
            _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].CCombPConj[_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].Perm2CombP[p2corn] & 0xff][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMultInv[p2esym][p2csym]]), _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].GetPruning(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].EPermCCombPPrun, (p2edgei >> 4) * _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_COMB +
            _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].CCombPConj[_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].Perm2CombP[p2corni >> 4] & 0xff][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMultInv[p2edgei & 0xf][p2corni & 0xf]]));
        const maxDep2 = Math.min(Solver.MAX_DEPTH2, this.sol - this.length1);
        if (prun >= maxDep2) {
            return prun > maxDep2 ? 2 : 1;
        }
        let depth2;
        for (depth2 = maxDep2 - 1; depth2 >= prun; depth2--) {
            const ret = this.phase2(p2edge, p2esym, p2corn, p2csym, p2mid, depth2, this.depth1, 10);
            if (ret < 0) {
                break;
            }
            depth2 -= ret;
            this.moveSol = [];
            for (let i = 0; i < this.depth1 + depth2; i++) {
                this.appendSolMove(this.move[i]);
            }
            for (let i = this.preMoveLen - 1; i >= 0; i--) {
                this.appendSolMove(this.preMoves[i]);
            }
            this.sol = this.moveSol.length;
        }
        if (depth2 != maxDep2 - 1) {
            return 0;
        }
        else {
            return 1;
        }
    }
    appendSolMove(move) {
        if (!this.moveSol) {
            return;
        }
        if (this.moveSol.length == 0) {
            this.moveSol.push(move);
            return;
        }
        const axisCur = ~~(move / 3);
        const axisLast = ~~(this.moveSol[this.moveSol.length - 1] / 3);
        if (axisCur == axisLast) {
            const pow = ((move % 3) + (this.moveSol[this.moveSol.length - 1] % 3) + 1) % 4;
            if (pow == 3) {
                this.moveSol.pop();
            }
            else {
                this.moveSol[this.moveSol.length - 1] = axisCur * 3 + pow;
            }
            return;
        }
        if (this.moveSol.length > 1 &&
            axisCur % 3 == axisLast % 3 &&
            axisCur == ~~(this.moveSol[this.moveSol.length - 2] / 3)) {
            const pow = ((move % 3) + (this.moveSol[this.moveSol.length - 2] % 3) + 1) % 4;
            if (pow == 3) {
                this.moveSol[this.moveSol.length - 2] = this.moveSol[this.moveSol.length - 1];
                this.moveSol.pop();
            }
            else {
                this.moveSol[this.moveSol.length - 2] = axisCur * 3 + pow;
            }
            return;
        }
        this.moveSol.push(move);
    }
    phase2(edge, esym, corn, csym, mid, maxl, depth, lm) {
        if (edge == 0 && corn == 0 && mid == 0) {
            return maxl;
        }
        const moveMask = _Util__WEBPACK_IMPORTED_MODULE_2__["default"].CKMV2BIT[lm];
        for (let m = 0; m < 10; m++) {
            if (((moveMask >> m) & 1) != 0) {
                m += (0x42 >> m) & 3;
                continue;
            }
            const midx = _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].MPermMove[mid][m];
            let cornx = _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].CPermMove[corn][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMoveUD[csym][m]];
            const csymx = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMult[cornx & 0xf][csym];
            cornx >>= 4;
            let edgex = _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].EPermMove[edge][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMoveUD[esym][m]];
            const esymx = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMult[edgex & 0xf][esym];
            edgex >>= 4;
            const edgei = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].GetPermSymInv(edgex, esymx, false);
            const corni = _CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].GetPermSymInv(cornx, csymx, true);
            let prun = _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].GetPruning(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].EPermCCombPPrun, (edgei >> 4) * _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_COMB +
                _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].CCombPConj[_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].Perm2CombP[corni >> 4] & 0xff][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMultInv[edgei & 0xf][corni & 0xf]]);
            if (prun > maxl + 1) {
                break;
            }
            else if (prun >= maxl) {
                m += (0x42 >> m) & 3 & (maxl - prun);
                continue;
            }
            prun = Math.max(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].GetPruning(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].EPermCCombPPrun, edgex * _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_COMB +
                _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].CCombPConj[_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].Perm2CombP[cornx] & 0xff][_CubieCube__WEBPACK_IMPORTED_MODULE_0__["default"].SymMultInv[esymx][csymx]]), _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].GetPruning(_CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].MCPermPrun, cornx * _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].N_MPERM + _CoordCube__WEBPACK_IMPORTED_MODULE_1__["default"].MPermConj[midx][csymx]));
            if (prun >= maxl) {
                m += (0x42 >> m) & 3 & (maxl - prun);
                continue;
            }
            const ret = this.phase2(edgex, esymx, cornx, csymx, midx, maxl - 1, depth + 1, m);
            if (ret >= 0) {
                this.move[depth] = _Util__WEBPACK_IMPORTED_MODULE_2__["default"].UD2STD[m];
                return ret;
            }
        }
        return -1;
    }
}
Solver.MAX_PRE_MOVES = 20;
Solver.TRY_INVERSE = true;
Solver.TRY_THREE_AXES = true;
Solver.MIN_P1LENGTH_PRE = 7;
Solver.MAX_DEPTH2 = 13;


/***/ }),

/***/ "./src/solver/Util.ts":
/*!****************************!*\
  !*** ./src/solver/Util.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Util)
/* harmony export */ });
class Util {
    static GetNParity(idx, n) {
        let p = 0;
        for (let i = n - 2; i >= 0; i--) {
            p ^= idx % (n - i);
            idx = ~~(idx / (n - i));
        }
        return p & 1;
    }
    static SetVal(src, dst, edge) {
        return edge ? (dst << 1) | (src & 1) : dst | (src & 0xf8);
    }
    static GetVal(src, edge) {
        return edge ? src >> 1 : src & 7;
    }
    static SetNPerm(arr, idx, n, edge) {
        n--;
        let val = 0x76543210;
        for (let i = 0; i < n; ++i) {
            const p = Util.Fact[n - i];
            let v = ~~(idx / p);
            idx %= p;
            v <<= 2;
            arr[i] = Util.SetVal(arr[i], (val >> v) & 0xf, edge);
            const m = (1 << v) - 1;
            val = (val & m) + ((val >> 4) & ~m);
        }
        arr[n] = Util.SetVal(arr[n], val & 0xf, edge);
    }
    static GetNPerm(arr, n, edge) {
        let idx = 0, val = 0x76543210;
        for (let i = 0; i < n - 1; ++i) {
            const v = Util.GetVal(arr[i], edge) << 2;
            idx = (n - i) * idx + ((val >> v) & 0xf);
            val -= 0x11111110 << v;
        }
        return idx;
    }
    static SetNPermFull(arr, idx, n, edge) {
        arr[n - 1] = Util.SetVal(arr[n - 1], 0, edge);
        for (let i = n - 2; i >= 0; --i) {
            arr[i] = Util.SetVal(arr[i], idx % (n - i), edge);
            idx = ~~(idx / (n - i));
            for (let j = i + 1; j < n; ++j) {
                if (Util.GetVal(arr[j], edge) >= Util.GetVal(arr[i], edge)) {
                    arr[j] = Util.SetVal(arr[j], Util.GetVal(arr[j], edge) + 1, edge);
                }
            }
        }
    }
    static GetNPermFull(arr, n, edge) {
        let idx = 0;
        for (let i = 0; i < n; ++i) {
            idx *= n - i;
            for (let j = i + 1; j < n; ++j) {
                if (Util.GetVal(arr[j], edge) < Util.GetVal(arr[i], edge)) {
                    ++idx;
                }
            }
        }
        return idx;
    }
    static GetComb(arr, mask, edge) {
        const end = arr.length - 1;
        let value = 0, r = 4;
        for (let i = end; i >= 0; i--) {
            const perm = Util.GetVal(arr[i], edge);
            if ((perm & 0xc) == mask) {
                value += Util.Cnk[i][r--];
            }
        }
        return value;
    }
    static SetComb(arr, value, mask, edge) {
        const end = arr.length - 1;
        let r = 4, fill = end;
        for (let i = end; i >= 0; i--) {
            if (value >= Util.Cnk[i][r]) {
                value -= Util.Cnk[i][r--];
                arr[i] = Util.SetVal(arr[i], r | mask, edge);
            }
            else {
                if ((fill & 0xc) == mask) {
                    fill -= 4;
                }
                arr[i] = Util.SetVal(arr[i], fill--, edge);
            }
        }
    }
}
Util.Ux1 = 0;
Util.Ux2 = 1;
Util.Ux3 = 2;
Util.Rx1 = 3;
Util.Rx2 = 4;
Util.Rx3 = 5;
Util.Fx1 = 6;
Util.Fx2 = 7;
Util.Fx3 = 8;
Util.Dx1 = 9;
Util.Dx2 = 10;
Util.Dx3 = 11;
Util.Lx1 = 12;
Util.Lx2 = 13;
Util.Lx3 = 14;
Util.Bx1 = 15;
Util.Bx2 = 16;
Util.Bx3 = 17;
Util.U1 = 0;
Util.U2 = 1;
Util.U3 = 2;
Util.U4 = 3;
Util.U5 = 4;
Util.U6 = 5;
Util.U7 = 6;
Util.U8 = 7;
Util.U9 = 8;
Util.R1 = 9;
Util.R2 = 10;
Util.R3 = 11;
Util.R4 = 12;
Util.R5 = 13;
Util.R6 = 14;
Util.R7 = 15;
Util.R8 = 16;
Util.R9 = 17;
Util.F1 = 18;
Util.F2 = 19;
Util.F3 = 20;
Util.F4 = 21;
Util.F5 = 22;
Util.F6 = 23;
Util.F7 = 24;
Util.F8 = 25;
Util.F9 = 26;
Util.D1 = 27;
Util.D2 = 28;
Util.D3 = 29;
Util.D4 = 30;
Util.D5 = 31;
Util.D6 = 32;
Util.D7 = 33;
Util.D8 = 34;
Util.D9 = 35;
Util.L1 = 36;
Util.L2 = 37;
Util.L3 = 38;
Util.L4 = 39;
Util.L5 = 40;
Util.L6 = 41;
Util.L7 = 42;
Util.L8 = 43;
Util.L9 = 44;
Util.B1 = 45;
Util.B2 = 46;
Util.B3 = 47;
Util.B4 = 48;
Util.B5 = 49;
Util.B6 = 50;
Util.B7 = 51;
Util.B8 = 52;
Util.B9 = 53;
Util.U = 0;
Util.R = 1;
Util.F = 2;
Util.D = 3;
Util.L = 4;
Util.B = 5;
Util.CornerFacelet = [
    [Util.U9, Util.R1, Util.F3],
    [Util.U7, Util.F1, Util.L3],
    [Util.U1, Util.L1, Util.B3],
    [Util.U3, Util.B1, Util.R3],
    [Util.D3, Util.F9, Util.R7],
    [Util.D1, Util.L9, Util.F7],
    [Util.D7, Util.B9, Util.L7],
    [Util.D9, Util.R9, Util.B7],
];
Util.EdgeFacelet = [
    [Util.U6, Util.R2],
    [Util.U8, Util.F2],
    [Util.U4, Util.L2],
    [Util.U2, Util.B2],
    [Util.D6, Util.R8],
    [Util.D2, Util.F8],
    [Util.D4, Util.L8],
    [Util.D8, Util.B8],
    [Util.F6, Util.R4],
    [Util.F4, Util.L6],
    [Util.B6, Util.L4],
    [Util.B4, Util.R6],
];
Util.MOVE2STR = [
    "U ",
    "U2",
    "U'",
    "R ",
    "R2",
    "R'",
    "F ",
    "F2",
    "F'",
    "D ",
    "D2",
    "D'",
    "L ",
    "L2",
    "L'",
    "B ",
    "B2",
    "B'",
];
Util.UD2STD = [
    Util.Ux1,
    Util.Ux2,
    Util.Ux3,
    Util.Rx2,
    Util.Fx2,
    Util.Dx1,
    Util.Dx2,
    Util.Dx3,
    Util.Lx2,
    Util.Bx2,
    Util.Rx1,
    Util.Rx3,
    Util.Fx1,
    Util.Fx3,
    Util.Lx1,
    Util.Lx3,
    Util.Bx1,
    Util.Bx3,
];
Util.STD2UD = (() => {
    const result = [];
    for (let i = 0; i < 18; i++) {
        result[Util.UD2STD[i]] = i;
    }
    return result;
})();
Util.CKMV2BIT = (() => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        const ix = ~~(Util.UD2STD[i] / 3);
        result[i] = 0;
        for (let j = 0; j < 10; j++) {
            const jx = ~~(Util.UD2STD[j] / 3);
            result[i] |= (ix == jx || (ix % 3 == jx % 3 && ix >= jx) ? 1 : 0) << j;
        }
    }
    result[10] = 0;
    return result;
})();
Util.Cnk = (() => {
    const ret = [];
    const fact = [1];
    for (let i = 0; i < 13; i++) {
        ret[i] = [];
        fact[i + 1] = fact[i] * (i + 1);
        ret[i][0] = ret[i][i] = 1;
        for (let j = 1; j < 13; j++) {
            ret[i][j] = j <= i ? ret[i - 1][j - 1] + ret[i - 1][j] : 0;
        }
    }
    return ret;
})();
Util.Fact = (() => {
    const ret = [1];
    for (let i = 0; i < 13; i++) {
        ret[i + 1] = ret[i] * (i + 1);
    }
    return ret;
})();


/***/ }),

/***/ "./src/vueapp/playground/index.ts":
/*!****************************************!*\
  !*** ./src/vueapp/playground/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewport */ "./src/vueapp/viewport/index.ts");
/* harmony import */ var _cube_world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cube/world */ "./src/cube/world.ts");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting */ "./src/vueapp/setting/index.ts");
/* harmony import */ var _cube_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cube/utils */ "./src/cube/utils.ts");
/* harmony import */ var _cube_twister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cube/twister */ "./src/cube/twister.ts");
/* harmony import */ var _cube_interactor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cube/interactor */ "./src/cube/interactor.ts");
/* harmony import */ var _cube_capture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cube/capture */ "./src/cube/capture.ts");
/* harmony import */ var _cube_lbl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cube/lbl */ "./src/cube/lbl.ts");
/* harmony import */ var _cube_cube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../cube/cube */ "./src/cube/cube.ts");
/* harmony import */ var _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../cube/utils_internal */ "./src/cube/utils_internal.ts");
/* harmony import */ var _solver_Solver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../solver/Solver */ "./src/solver/Solver.ts");














let Playground = class Playground extends vue__WEBPACK_IMPORTED_MODULE_12__["default"] {
    constructor() {
        super();
        this.world = new _cube_world__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.width = 0;
        this.height = 0;
        this.size = 0;
        this.cubestep = [];
        this.solution = [];
        this.progress = 0;
        this.isPlayerMode = false;
        this.isPlaying = false;
        this.key = 0;
        this.initState = [];
        this.buttonEnable = true;
        this.clickTimeThreshold = 300;
        this.listd = false;
        this.capturer = new _cube_capture__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.demoData = __webpack_require__(/*! ./demos.json */ "./src/vueapp/playground/demos.json");
        this.demoImages = [];
        this.demoGridWidth = 0;
        this.isDemoMode = false;
        this.lblSolver = new _cube_lbl__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.showTicks = false;
        this.backupState = [];
        this.cubejs = __webpack_require__.e(/*! import() */ "src_preload_cubejs_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../preload/cubejs */ "./src/preload/cubejs.ts"));
        this.config = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.cube_config;
        this.isSwitch = false;
        this.isTeaching = false;
        this.isColorMode = false;
        this.yzhcubeState = [];
        this.color = "R";
        this.erroryzh = "";
        this.iserror = false;
        this.solver = new _solver_Solver__WEBPACK_IMPORTED_MODULE_11__["default"]();
        this.solutionyzh = "";
        this.stickers = {};
        this.colors = {
            R: "#B71C1C",
            L: "#FF6D00",
            U: "#F0F0F0",
            D: "#FFD600",
            F: "#00A020",
            B: "#0D47A1",
            core: "#202020",
            gray: "#808080",
            high: "#FF0080",
        };
        this.colort = ["R", "F", "D", "L", "B", "U"];
    }
    mounted() {
        this.interactor = new _cube_interactor__WEBPACK_IMPORTED_MODULE_6__["default"]([
            this.viewport.canvasElem,
            document.getElementById("top-flex"),
            document.getElementById("bottom-flex")
        ], this.world.controller.interact);
        for (let i = 0; i < this.demoData.length; i++) {
            this.demoImages.push(this.capturer.generate(this.demoData[i].state));
        }
        this.$nextTick(this.resize);
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this));
        this.viewport.draw();
        this.solver.init();
        this.callback();
    }
    resize() {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
        this.size = Math.ceil(Math.min(this.width / 6, this.height / 12));
        this.demoGridWidth = ~~(Math.min(this.size * 2, this.width / 4) * 100) / 100;
        this.viewport.resize(this.width, this.height - this.size * 3.5);
        if (this.isColorMode)
            this.viewport.resize(this.width, this.height - this.size * 5);
        this.world.cube.dirty = true;
    }
    scramble() {
        this.reset();
        this.world.cube.scramble();
    }
    reset() {
        this.world.cube.reset();
        this.initState = this.world.cube.serialize();
    }
    idle(value) {
        _cube_twister__WEBPACK_IMPORTED_MODULE_5__.twister.twists.push(new _cube_twister__WEBPACK_IMPORTED_MODULE_5__.Twist(0, Math.PI, (0,_cube_utils__WEBPACK_IMPORTED_MODULE_4__.twist_duration)(_cube_utils__WEBPACK_IMPORTED_MODULE_4__.cube_config.speed) * value, (value) => {
            return Math.abs(value - Math.PI) < 1e-6;
        }));
    }
    solve(isEntry = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (isEntry) {
                if (!this.isPlayerMode) {
                    this.backupState = this.world.cube.serialize();
                }
                this.initState = this.world.cube.serialize();
            }
            const solverId = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.cube_config.solverId;
            if (solverId == 0) {
                let solution = [];
                const wtb = (0,_cube_utils__WEBPACK_IMPORTED_MODULE_4__.whiteToBottom)(this.initState);
                const lblState = [];
                const cube = new _cube_cube__WEBPACK_IMPORTED_MODULE_9__["default"]();
                cube.restore(this.initState);
                const params = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.stringToTwistParams[wtb];
                for (const layer of params.layers) {
                    cube.table.groups[params.axis][layer].twist(params.angle, true);
                }
                const wtbState = cube.serialize();
                for (const faceState of wtbState) {
                    lblState.push(_cube_utils__WEBPACK_IMPORTED_MODULE_4__.faceToColor[faceState]);
                }
                const result = (0,_cube_utils__WEBPACK_IMPORTED_MODULE_4__.delayedYellowToTop)(wtb);
                const combined = result.combined;
                const delayed = result.delayed;
                solution.push(combined);
                const lblSolution = this.lblSolver.solve(lblState, delayed);
                console.log(lblSolution);
                for (let i = 0; i < lblSolution.length; i++) {
                    const lblOrders = lblSolution[i].split("").filter(Boolean);
                    for (const order of lblOrders) {
                        let step = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.lblOrderMapping[order];
                        if (!step)
                            continue;
                        if (i <= 1) {
                            if (step != '~') {
                                const params = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.stringToTwistParams[step];
                            }
                            if (params.axis != delayed[0]) {
                                if (step[0] == 'y') {
                                    step = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.oppositeMapping[step];
                                }
                                else if (step.length > 1) {
                                    step = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.oppositeMapping[step[0]].concat(step.substring(1));
                                }
                                else {
                                    step = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.oppositeMapping[step[0]];
                                }
                            }
                        }
                        solution.push(step);
                    }
                    if (i == 1) {
                        solution.push(delayed);
                    }
                }
                solution.push("~");
                solution = solution.filter(Boolean);
                for (let i = 0; i + 1 < solution.length; i++) {
                    if (solution[i] == "F" && solution[i + 1] == "F") {
                        solution[i] = "F'";
                        solution[i + 1] = "F'";
                    }
                }
                this.solution = solution;
                if (lblSolution.filter(Boolean).length <= 3) {
                    this.showTicks = "always";
                }
                else {
                    this.showTicks = false;
                }
                this.cubestep = [];
                for (const j of this.solution) {
                    if (j == "~") {
                        this.showTicks = true;
                        this.cubestep.push('!');
                    }
                    else {
                        this.showTicks = false;
                        this.cubestep.push('');
                    }
                }
            }
            else if (solverId === 1) {
                const promise = yield this.cubejs;
                this.solution = promise.Cube
                    .fromString(this.initState)
                    .solve()
                    .replace(/U2/g, "U U")
                    .replace(/D2/g, "D D")
                    .replace(/F2/g, "F F")
                    .replace(/B2/g, "B B")
                    .replace(/L2/g, "L L")
                    .replace(/R2/g, "R R")
                    .split(' ').
                    filter(Boolean);
                this.solution.push("~");
                this.showTicks = "always";
            }
            console.log(this.initState.join(""));
            console.log(this.solution.join(" "));
            this.isPlayerMode = true;
            this.setProgress(0);
            this.idle(0.5);
            this.isPlaying = isEntry;
            this.isTeaching = false;
        });
    }
    onPlayerModeChange() {
        this.world.controller.lock = this.isPlayerMode;
    }
    onPlayingChange() {
        this.world.controller.disable = this.isPlaying;
    }
    callback() {
        if (this.isPlayerMode && this.isPlaying) {
            if (this.progress == this.solution.length) {
                this.isPlaying = false;
            }
            if (this.progress < this.solution.length) {
                if (!_cube_twister__WEBPACK_IMPORTED_MODULE_5__.twister.isTwisting()) {
                    const params = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.stringToTwistParams[this.solution[this.progress]];
                    for (const layer of params.layers) {
                        this.world.cube.table.groups[params.axis][layer].twist(params.angle, false);
                    }
                    this.progress++;
                }
            }
        }
    }
    play() {
        if (this.progress == this.solution.length) {
            this.setProgress(0);
            this.idle(1.5);
        }
        this.isPlaying = true;
    }
    pause() {
        this.isPlaying = false;
    }
    quit() {
        this.isPlaying = false;
        this.isPlayerMode = false;
        if (this.isDemoMode) {
            this.isDemoMode = false;
        }
        this.world.cube.restore(this.backupState);
    }
    switch() {
        this.pause();
        this.isSwitch = true;
        this.isPlayerMode = false;
    }
    back() {
        this.isSwitch = false;
        this.isPlayerMode = true;
    }
    setProgress(value) {
        this.isPlaying = false;
        this.world.cube.restore(this.initState);
        for (let i = 0; i < value; i++) {
            const params = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.stringToTwistParams[this.solution[i]];
            for (const layer of params.layers) {
                this.world.cube.table.groups[params.axis][layer].twist(params.angle, true);
            }
        }
        this.progress = value;
    }
    greenButton() {
        if (this.buttonEnable) {
            this.buttonEnable = false;
            setTimeout(() => {
                this.buttonEnable = true;
            }, this.clickTimeThreshold);
            if (!this.isPlayerMode && !this.isColorMode) {
                this.scramble();
            }
            else if (this.isColorMode) {
                this.clyzh();
            }
            else {
                this.play();
            }
            return;
        }
    }
    blueButton() {
        if (this.buttonEnable) {
            this.buttonEnable = false;
            setTimeout(() => {
                this.buttonEnable = true;
            }, this.clickTimeThreshold);
            if (!this.isPlayerMode) {
                this.reset();
            }
            else {
                this.pause();
            }
        }
    }
    redButton() {
        if (this.buttonEnable) {
            this.buttonEnable = false;
            setTimeout(() => {
                this.buttonEnable = true;
            }, this.clickTimeThreshold);
            if (!this.isPlayerMode) {
                if (this.isColorMode) {
                    this.solutionyzh = this.solver.solve(this.world.cube.serialize().join(""));
                    console.log(this.solutionyzh);
                    if (this.solutionyzh == "great") {
                        this.clallyzh();
                    }
                    else {
                        this.erroryzh = this.solutionyzh;
                        this.iserror = true;
                        return;
                    }
                }
                this.solve();
            }
            else {
                this.quit();
            }
        }
    }
    blackButton() {
        if (this.buttonEnable) {
            this.buttonEnable = false;
            setTimeout(() => {
                this.buttonEnable = true;
            }, this.clickTimeThreshold);
            if (!this.isSwitch) {
                this.switch();
            }
            else {
                this.back();
            }
        }
    }
    selectDemo(idx) {
        this.listd = false;
        if (!this.isPlayerMode) {
            this.backupState = this.world.cube.serialize();
        }
        this.isDemoMode = true;
        this.isPlayerMode = true;
        this.isTeaching = true;
        this.demoName = this.demoData[idx].name;
        this.initState = this.demoData[idx].state.split("");
        this.solution = this.demoData[idx].solution.split(' ').filter(Boolean);
        this.solution.push("~");
        this.showTicks = "always";
        console.log(this.initState.join(""));
        console.log(this.solution.join(" "));
        this.setProgress(0);
    }
    onSolverChange() {
        if (this.isPlayerMode && !this.isDemoMode) {
            this.solve(false);
        }
    }
    get faces() {
        const ret = {};
        for (const face of [_cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.L, _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.R, _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.D, _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.U, _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.B, _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.F]) {
            const key = _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face[face];
            ret[key] = 0;
        }
        for (const c of this.initState) {
            ret[c]++;
        }
        return ret;
    }
    stick(index, face) {
        if (index < 0) {
            return;
        }
        this.initState = this.world.cube.serialize();
        let arr = this.stickers[_cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face[face]];
        if (arr == undefined) {
            arr = {};
            this.stickers[_cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face[face]] = arr;
        }
        arr[index] = this.color;
        let zyzh = Math.floor(index / 9);
        let yyzh = Math.floor((index % 9) / 3);
        let xyzh = Math.floor((index % 9) % 3);
        let temp = 0;
        switch (face) {
            case _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.U:
                temp = 3 * zyzh + xyzh;
                break;
            case _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.R:
                temp = 9 + 3 * (2 - yyzh) + 2 - zyzh;
                break;
            case _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.F:
                temp = 9 * 2 + 3 * (2 - yyzh) + xyzh;
                break;
            case _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.D:
                temp = 9 * 3 + 3 * (2 - zyzh) + xyzh;
                break;
            case _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.L:
                temp = 9 * 4 + 3 * (2 - yyzh) + zyzh;
                break;
            case _cube_utils_internal__WEBPACK_IMPORTED_MODULE_10__.Face.B:
                temp = 9 * 5 + 3 * (2 - yyzh) + 2 - xyzh;
                break;
        }
        if (temp == 4 || temp == 13 || temp == 22 || temp == 31 || temp == 40 || temp == 49) {
            this.iserror = true;
            this.erroryzh = "Don't touch me!!!";
            return;
        }
        this.initState[temp] = this.color;
        this.world.cube.restore(this.initState);
    }
    setcubeyzh() {
        this.isColorMode = true;
        this.isPlayerMode = false;
        const yzhstate = "????U????????R????????F????????D????????L????????B????";
        this.initState = yzhstate.split("");
        this.world.cube.restore(this.initState);
        this.viewport.resize(this.width, this.height - this.size * 5);
        this.world.controller.taps.push((index, face) => {
            this.stick(index, face);
        });
    }
    clyzh() {
        const yzhstate = "????U????????R????????F????????D????????L????????B????";
        this.initState = yzhstate.split("");
        this.world.cube.restore(this.initState);
    }
    clallyzh() {
        this.viewport.resize(this.width, this.height - this.size * 3.5);
        this.world.controller.taps = [];
        this.isColorMode = false;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Provide)("world"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:type", Object)
], Playground.prototype, "world", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Ref)("viewport"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:type", _viewport__WEBPACK_IMPORTED_MODULE_1__["default"])
], Playground.prototype, "viewport", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("isPlayerMode"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:returntype", void 0)
], Playground.prototype, "onPlayerModeChange", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("isPlaying"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:returntype", void 0)
], Playground.prototype, "onPlayingChange", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("config.solverId"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:returntype", void 0)
], Playground.prototype, "onSolverChange", null);
Playground = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./index.html */ "./src/vueapp/playground/index.html"),
        components: {
            viewport: _viewport__WEBPACK_IMPORTED_MODULE_1__["default"],
            setting: _setting__WEBPACK_IMPORTED_MODULE_3__["default"],
        },
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [])
], Playground);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playground);


/***/ }),

/***/ "./src/vueapp/setting/index.ts":
/*!*************************************!*\
  !*** ./src/vueapp/setting/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var _cube_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cube/utils */ "./src/cube/utils.ts");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slider-component/theme/default.css */ "./node_modules/vue-slider-component/theme/default.css");






let Setting = class Setting extends vue__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super();
        this.width = 0;
        this.height = 0;
        this.size = 0;
        this.state = false;
        this.config = _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config;
    }
    mounted() {
        this.resize();
    }
    resize() {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
        this.size = Math.ceil(Math.min(this.width / 6, this.height / 12));
    }
};
Setting = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./index.html */ "./src/vueapp/setting/index.html"),
        components: {
            VueSlider: (vue_slider_component__WEBPACK_IMPORTED_MODULE_2___default())
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [])
], Setting);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);


/***/ }),

/***/ "./src/vueapp/viewport/index.ts":
/*!**************************************!*\
  !*** ./src/vueapp/viewport/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cube_world__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cube/world */ "./src/cube/world.ts");





let Viewport = class Viewport extends vue__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        const canvasElem = document.createElement("canvas");
        canvasElem.style.outline = "none";
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
            canvas: canvasElem,
            antialias: true,
            alpha: true
        });
        this.renderer.autoClear = false;
        this.renderer.setClearColor(0, 0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.canvasElem = canvasElem;
    }
    resize(width, height) {
        this.world.resize(width, height);
        this.renderer.setSize(width, height, true);
    }
    mounted() {
        this.canvas.appendChild(this.renderer.domElement);
    }
    draw() {
        if (this.world.dirty) {
            this.renderer.render(this.world.scene, this.world.camera);
            this.world.dirty = false;
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)("world"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _cube_world__WEBPACK_IMPORTED_MODULE_1__["default"])
], Viewport.prototype, "world", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Ref)("canvas"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", HTMLElement)
], Viewport.prototype, "canvas", void 0);
Viewport = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./index.html */ "./src/vueapp/viewport/index.html"),
        components: {},
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
], Viewport);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Viewport);


/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC":
/*!******************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/vueapp/playground/demos.json":
/*!******************************************!*\
  !*** ./src/vueapp/playground/demos.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"LBL-101","state":"?U?UU??U????UB?????R??RB?????????????F??F?????L??L????","solution":"E R\' E\'"},{"name":"LBL-102","state":"?U?UUB?U??U??B?????R??R??????????????F??F?????L??L????","solution":"R\' E R\' E\'"},{"name":"LBL-201","state":"????????RU???R??RR??B?B?BB?UU?UUUUUU????L?LLL????F?FFF","solution":"R U R\'"},{"name":"LBL-202","state":"????????BR???R??RR??U?B?BB?UU?UUUUUU????L?LLL????F?FFF","solution":"F\' U\' F"},{"name":"LBL-203","state":"????????UB???R??RR??R?B?BB?UU?UUUUUU????L?LLL????F?FFF","solution":"F\' U F R U2 R\'"},{"name":"LBL-204","state":"?????????????R?URR????B?BBRUUBUUUUUU????L?LLL????F?FFF","solution":"F\' U F R U R\'"},{"name":"LBL-205","state":"?????????????R?BRR????B?BBUUURUUUUUU????L?LLL????F?FFF","solution":"R U\' R\' F\' U\' F"},{"name":"LBL-301","state":"????DB????R??R?RRR????B?BBBUUUUUUUUU????L?LLL????F?FFF","solution":"U\' F\' U F U R U\' R\'"},{"name":"LBL-302","state":"????D??R?????R?RRR?B??B?BBBUUUUUUUUU????L?LLL????F?FFF","solution":"U R U\' R\' U\' F\' U F"},{"name":"LBL-303","state":"????D???????BR?RRR????BRBBBUUUUUUUUU????L?LLL????F?FFF","solution":"U R U\' R\' U\' F\' U F U2 U R U\' R\' U\' F\' U F"},{"name":"LBL-401","state":"?D?DD?????D?RRRRRR?D?BBBBBBUUUUUUUUU???LLLLLL???FFFFFF","solution":"R\' U\' F\' U F R"},{"name":"LBL-402","state":"?D??D??D??D?RRRRRR???BBBBBBUUUUUUUUU?D?LLLLLL???FFFFFF","solution":"R\' F\' U\' F U R"},{"name":"LBL-403","state":"????D?????D?RRRRRR?D?BBBBBBUUUUUUUUU?D?LLLLLL?D?FFFFFF","solution":"R\' U\' F\' U F R U R\' F\' U\' F U R"},{"name":"LBL-501","state":"DD?DDD?D?D??RRRRRRD??BBBBBBUUUUUUUUU???LLLLLLD??FFFFFF","solution":"R\' U L U\' R U L\' U\'"},{"name":"LBL-502","state":"DD?DDD?D???DRRRRRR??DBBBBBBUUUUUUUUU??DLLLLLL???FFFFFF","solution":"U L U\' R\' U L\' U\' R"},{"name":"LBL-601","state":"DDDDDDDDD?B?RRRRRR?L?BBBBBBUUUUUUUUU?R?LLLLLL?F?FFFFFF","solution":"F2 U R\' L F2 R L\' U F2"},{"name":"LBL-602","state":"DDDDDDDDD?L?RRRRRR?R?BBBBBBUUUUUUUUU?B?LLLLLL?F?FFFFFF","solution":"F2 U\' R\' L F2 R L\' U\' F2"},{"name":"LBL-701","state":"DDDDDDDDDFRFRRRRRRBBRBBBBBBUUUUUUUUURLLLLLLLLLFBFFFFFF","solution":"R2 B2 R F R\' B2 R F\' R"},{"name":"LBL-702","state":"DDDDDDDDDRRLRRRRRRLBBBBBBBBUUUUUUUUUFLFLLLLLLBFRFFFFFF","solution":"L2 B2 L\' F\' L B2 L\' F L\'"},{"name":"LBL-703","state":"DDDDDDDDDLRLRRRRRRFBFBBBBBBUUUUUUUUURLRLLLLLLBFBFFFFFF","solution":"R2 B2 R F R\' B2 R F\' R U R2 B2 R F R\' B2 R F\' R U\'"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "rubikscube:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrubikscube"] = self["webpackChunkrubikscube"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QStDO0FBQzNELFlBQVksNENBQTRDO0FBQ3hELFdBQVcsK0NBQStDO0FBQzFELFlBQVksZ0RBQWdEO0FBQzVELFlBQVksMkNBQTJDO0FBQ3ZELFdBQVcsK0NBQStDO0FBQzFELFlBQVksZ0RBQWdEO0FBQzVELFlBQVksMkNBQTJDO0FBQ3ZELFdBQVcsZ0RBQWdEO0FBQzNELFlBQVksK0NBQStDO0FBQzNELFlBQVksNENBQTRDO0FBQ3hELFdBQVcsK0NBQStDO0FBQzFELFlBQVksZ0RBQWdEO0FBQzVELFlBQVksMkNBQTJDO0FBQ3ZELFdBQVcsZ0RBQWdEO0FBQzNELFlBQVksK0NBQStDO0FBQzNELFlBQVksNENBQTRDO0FBQ3hELFdBQVcsNkNBQTZDO0FBQ3hELFlBQVksNENBQTRDO0FBQ3hELFlBQVkseUNBQXlDO0FBQ3JELFdBQVcsNkNBQTZDO0FBQ3hELFlBQVksNENBQTRDO0FBQ3hELFlBQVkseUNBQXlDO0FBQ3JELFdBQVcsNENBQTRDO0FBQ3ZELFlBQVksNkNBQTZDO0FBQ3pELFlBQVksd0NBQXdDO0FBQ3BELFVBQVUsaUNBQWlDO0FBQzNDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UitCO0FBQ3hCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9CQUFvQjtBQUNkO0FBQ0Esb0JBQW9CLGlEQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseURBQTRCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxzQkFBc0Isa0RBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1DQUFtQztBQUMxRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIK0I7QUFDQztBQUNNO0FBQ1o7QUFDYTtBQUN4QjtBQUNmO0FBQ0EseUJBQXlCLHdDQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBa0I7QUFDN0MsK0JBQStCLG1EQUFzQjtBQUNyRCxzQ0FBc0MscURBQWlCLEVBQUUscURBQWlCLE1BQU0scURBQWlCO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBdUI7QUFDakQsOEJBQThCLG1EQUFVO0FBQ3hDLHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxREFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFEQUFpQjtBQUN2RCxxQ0FBcUMscURBQWlCO0FBQ3RELCtCQUErQiwwQ0FBTztBQUN0QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHNCO0FBQ1E7QUFDUTtBQUNxQjtBQUNkO0FBQzdDLCtDQUFPLENBQUMsZ0RBQU87QUFDZjtBQUNBLG9CQUFvQixnREFBTztBQUMzQiw2REFBcUI7QUFDckIsVUFBVSwwREFBVTtBQUNwQixlQUFlLDJDQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RtQztBQUNWO0FBQ1g7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrREFBUztBQUM1QyxtQ0FBbUMsa0RBQVM7QUFDNUMsWUFBWSxrRUFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUF5QjtBQUNyQyxZQUFZLG1FQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0EscUNBQXFDLDJEQUFrQjtBQUN2RCw0QkFBNEIsd0JBQXdCO0FBQ3BELGdCQUFnQiwyREFBa0IsbUJBQW1CLDJEQUFrQixDQUFDLG9EQUFXO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0EscUNBQXFDLDJEQUFrQjtBQUN2RCw0QkFBNEIsd0JBQXdCO0FBQ3BELGdCQUFnQiwyREFBa0IsbUJBQW1CLDJEQUFrQixDQUFDLG9EQUFXO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQsZ0JBQWdCLDJEQUFrQixtQkFBbUIsMkRBQWtCLENBQUMsb0RBQVc7QUFDbkY7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDLGdCQUFnQixnRUFBdUIsbUJBQW1CLGdFQUF1QjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BELGdCQUFnQiwyREFBa0IsbUJBQW1CLDJEQUFrQixDQUFDLG9EQUFXO0FBQ25GO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQyxnQkFBZ0IsZ0VBQXVCLG1CQUFtQixnRUFBdUI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQSxvQ0FBb0MsMERBQWlCO0FBQ3JELDRCQUE0Qix1QkFBdUI7QUFDbkQsZ0JBQWdCLDJEQUFrQixtQkFBbUIsMkRBQWtCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0EscUNBQXFDLDJEQUFrQjtBQUN2RCw0QkFBNEIsdUJBQXVCO0FBQ25ELGdCQUFnQiwyREFBa0IsbUJBQW1CLDJEQUFrQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25ELGdCQUFnQiwyREFBa0IsbUJBQW1CLDJEQUFrQjtBQUN2RTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsZ0JBQWdCLGdFQUF1QixtQkFBbUIsZ0VBQXVCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELHVCQUF1QjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBMEksZ0VBQXVCO0FBQ2pLO0FBQ0E7QUFDQSx3SUFBd0ksK0RBQXNCO0FBQzlKO0FBQ0E7QUFDQSxnSUFBZ0ksK0RBQXNCO0FBQ3RKO0FBQ0E7QUFDQSxxSkFBcUosK0RBQXNCO0FBQzNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCwyREFBa0I7QUFDbEU7QUFDQTtBQUNBLG1EQUFtRCwyREFBa0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3UTBCO0FBQ1U7QUFDckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQsb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvREFBVyxPQUFPLG9EQUFXO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlEQUFnQjtBQUM5QztBQUNBO0FBQ0EsOEJBQThCLDBEQUFpQjtBQUMvQztBQUNBO0FBQ0EsOEJBQThCLHlEQUFnQjtBQUM5QztBQUNBLHdCQUF3QixJQUFJLDZEQUFvQixFQUFFO0FBQ2xEO0FBQ0Esc0NBQXNDLHFEQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJLDBEQUFpQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscURBQVk7QUFDakM7QUFDQTtBQUNBLFFBQVEscURBQVk7QUFDcEI7QUFDQTtBQUNBLGVBQWUsc0RBQWE7QUFDNUI7QUFDQTtBQUNBLFFBQVEsc0RBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQWE7QUFDNUI7QUFDQTtBQUNBLFFBQVEsc0RBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMERBQWlCO0FBQ2hDO0FBQ0E7QUFDQSxRQUFRLDBEQUFpQjtBQUN6QjtBQUNBO0FBQ0EsZUFBZSxxREFBWTtBQUMzQjtBQUNBO0FBQ0EsUUFBUSxxREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdEQUFlLENBQUMsMERBQWlCLDJCQUEyQix3REFBZTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkMsa0JBQWtCLDJEQUFrQiw0QkFBNEIsMkRBQWtCO0FBQ2xGO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DLGtCQUFrQix5REFBZ0IsNEJBQTRCLHlEQUFnQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsMEJBQTBCLFNBQVM7QUFDbkMsc0JBQXNCLDJEQUFrQixvQkFBb0IsMkRBQWtCO0FBQzlFO0FBQ0EscUJBQXFCLDJEQUFrQjtBQUN2QyxxQkFBcUIsMkRBQWtCO0FBQ3ZDO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsK0JBQStCLDJEQUFrQiwwQkFBMEIsMkRBQWtCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLHNCQUFzQix5REFBZ0IsY0FBYyx5REFBZ0I7QUFDcEUsc0JBQXNCLHlEQUFnQixjQUFjLHlEQUFnQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBZ0IsY0FBYyx5REFBZ0I7QUFDcEUsc0JBQXNCLHlEQUFnQixjQUFjLHlEQUFnQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hjb0M7QUFDQTtBQUNWO0FBQ1g7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWM7QUFDdEIsUUFBUSx1REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsaUNBQWlDLGtEQUFTO0FBQzFDLHNDQUFzQyxrREFBUztBQUMvQztBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHVDQUF1QyxrREFBUztBQUNoRCx1Q0FBdUMsa0RBQVM7QUFDaEQ7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xELDJDQUEyQyxrREFBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlCQUF5QjtBQUN4RCxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JELHVCQUF1QixzREFBYSxDQUFDLDBEQUFpQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRCx1QkFBdUIsc0RBQWEsQ0FBQywwREFBaUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBa0IsQ0FBQywyREFBa0I7QUFDakQsWUFBWSwyREFBa0IsQ0FBQywyREFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRCxZQUFZLDJEQUFrQixzQkFBc0IsMkRBQWtCO0FBQ3RFLFlBQVksMkRBQWtCLHNCQUFzQiwyREFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFrQixDQUFDLDJEQUFrQjtBQUM3QyxRQUFRLDJEQUFrQixDQUFDLDJEQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBdUI7QUFDL0Msd0JBQXdCLGdFQUF1QjtBQUMvQyw4QkFBOEIsNkRBQW9CLENBQUMsNkRBQW9CLFdBQVcsMERBQWlCLEdBQUcsNERBQW1CLGtCQUFrQiw2REFBb0IsQ0FBQyxrRUFBeUIsV0FBVyx5REFBZ0I7QUFDcE4sWUFBWSw2REFBb0IsQ0FBQyw2REFBb0IsaUJBQWlCLDZEQUFvQixvQkFBb0IsNkRBQW9CLENBQUMsa0VBQXlCLG1CQUFtQix5REFBZ0I7QUFDL0wsWUFBWSw2REFBb0IsQ0FBQyw2REFBb0IsdUJBQXVCLDZEQUFvQjtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNEQUFhO0FBQ3RDLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFtQjtBQUM1Qyx3QkFBd0IsNERBQW1CLE9BQU8sNERBQW1CO0FBQ3JFLDBCQUEwQiwwREFBaUI7QUFDM0M7QUFDQSx3QkFBd0IsNERBQW1CLE9BQU8sNERBQW1CO0FBQ3JFLDBCQUEwQiwwREFBaUI7QUFDM0M7QUFDQSwwQkFBMEIsZ0VBQXVCO0FBQ2pELDBCQUEwQixnRUFBdUI7QUFDakQsdUJBQXVCLDZEQUFvQixDQUFDLGtFQUF5QixpQkFBaUIseURBQWdCO0FBQ3RHLGdCQUFnQiw2REFBb0IsQ0FBQyw2REFBb0IscUJBQXFCLDZEQUFvQjtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBb0IsQ0FBQyxrRUFBeUIsVUFBVSx5REFBZ0I7QUFDcEcsZ0JBQWdCLDZEQUFvQixDQUFDLDZEQUFvQixnQkFBZ0IsNkRBQW9CLGtCQUFrQiw2REFBb0IsQ0FBQyw2REFBb0IsVUFBVSwwREFBaUIsR0FBRyw0REFBbUI7QUFDek07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9EQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2VGU7QUFDZjtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQWtCO0FBQ3ZDLG1DQUFtQyw0REFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DLDJCQUEyQiw0REFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFckZBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3Z1ZWFwcC9wbGF5Z3JvdW5kL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy92dWVhcHAvc2V0dGluZy9pbmRleC5odG1sIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvdnVlYXBwL3ZpZXdwb3J0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2NhcHR1cmUudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2N1YmUudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2N1YmVsZXQudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2dyb3VwLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvY3ViZS9pbnRlcmFjdG9yLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvY3ViZS9sYmwudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL3R3aXN0ZXIudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL3V0aWxzLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvY3ViZS91dGlsc19pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvd29ybGQudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3NvbHZlci9Db29yZEN1YmUudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9zb2x2ZXIvQ3ViaWVDdWJlLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvc29sdmVyL1NvbHZlci50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3NvbHZlci9VdGlsLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvdnVlYXBwL3BsYXlncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy92dWVhcHAvc2V0dGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3Z1ZWFwcC92aWV3cG9ydC9pbmRleC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHYtYXBwPlxcbiAgICA8ZGl2IHYtcmVzaXplPVxcXCJyZXNpemVcXFwiIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogbm9uZTsgdG91Y2gtYWN0aW9uOiBub25lO1xcXCI+XFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiaXNlcnJvclxcXCIgOndpZHRoPVxcXCJNYXRoLm1pbihzaXplICogOCwgd2lkdGgpXFxcIiBlYWdlcj5cXG4gICAgICAgICAgICA8di1jYXJkPlxcbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzpzaXplICogMC40KydweCcsJ3BhZGRpbmctdG9wJzpzaXplLzgrJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SIVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxuICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgcm93IHdyYXAgc3R5bGU9XFxcIm1hcmdpbjogMCU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgZC1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0YXJlYSBpZD1cXFwiY29weVxcXCIgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6c2l6ZSAvIDMgKyAncHgnLCAnbGluZS1oZWlnaHQnOnNpemUgLyAyICsgJ3B4J31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xvIGZsYXQgb3V0bGluZWQgaGlkZS1kZXRhaWxzIHYtbW9kZWw9XFxcImVycm9yeXpoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXG4gICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgIDwvdi1kaWFsb2c+XFxuICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOnNpemUgKyAncHgnXFxuICAgICAgICAgICAgfVxcXCIgaWQ9XFxcInRvcC1mbGV4XFxcIj48L3YtZmxleD5cXG5cXG4gICAgICAgIDx2LWJ0biBmaXhlZCByaWdodCB0b3AgZmFiIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IG5vbmU7XFxcIiA6c3R5bGU9XFxcIntcXG4gICAgICAgIHdpZHRoOiBzaXplICogMC45ICsgJ3B4JywgXFxuICAgICAgICBoZWlnaHQ6IHNpemUgKiAwLjkgKyAncHgnLCBcXG4gICAgICAgICdtYXJnaW4tcmlnaHQnOiB3aWR0aCAvIDIgLSBNYXRoLm1pbihzaXplICogNCwgd2lkdGggLyAyKSArIHNpemUgKiAxLjEgKyAncHgnfVxcXCIgQGNsaWNrPVxcXCJsaXN0ZD0hbGlzdGRcXFwiPlxcbiAgICAgICAgICAgIDx2LWljb24gOnNpemU9XFxcInNpemUgKiAwLjZcXFwiPlxcbiAgICAgICAgICAgICAgICBzY2hvb2xcXG4gICAgICAgICAgICA8L3YtaWNvbj5cXG4gICAgICAgIDwvdi1idG4+XFxuXFxuICAgICAgICA8di1idG4gZml4ZWQgcmlnaHQgdG9wIGZhYiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgc3R5bGU9XFxcInVzZXItc2VsZWN0OiBub25lO1xcXCIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgd2lkdGg6IHNpemUgKiAwLjkgKyAncHgnLCBcXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUgKiAwLjkgKyAncHgnLCBcXG4gICAgICAgICAgICAnbWFyZ2luLXJpZ2h0Jzogd2lkdGggLyAyIC0gTWF0aC5taW4oc2l6ZSAqIDQsIHdpZHRoIC8gMikgKyBzaXplICogMi4yICsgJ3B4J31cXFwiIEBjbGljaz0nc2V0Y3ViZXl6aCc+XFxuICAgICAgICAgICAgPHYtaWNvbiA6c2l6ZT1cXFwic2l6ZSAqIDAuNlxcXCI+XFxuICAgICAgICAgICAgICAgIGNvbG9yaXplXFxuICAgICAgICAgICAgPC92LWljb24+XFxuICAgICAgICA8L3YtYnRuPlxcblxcbiAgICAgICAgPHYtYnRuIGZpeGVkIGxlZnQgdG9wIHRleHQgY29sb3I9XFxcInByaW1hcnlcXFwiIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogbm9uZTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIlxcbiAgICAgICAgICAgIDpzdHlsZT1cXFwie2hlaWdodDogc2l6ZSsncHgnLCAnbWFyZ2luLWxlZnQnOiB3aWR0aCAvIDIgLSBNYXRoLm1pbihzaXplICogNCwgd2lkdGggLyAyIC0gc2l6ZSAvIDQpICsgJ3B4J31cXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJsaXN0ZD10cnVlXFxcIiB2LWlmPVxcXCJpc0RlbW9Nb2RlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOihzaXplICogMC40KSsncHgnfVxcXCIgc3R5bGU9XFxcInRleHQtdHJhbnNmb3JtOiBub25lO1xcXCI+e3sgZGVtb05hbWUgfX08L2Rpdj5cXG4gICAgICAgIDwvdi1idG4+XFxuXFxuICAgICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cXFwibGlzdGRcXFwiPlxcbiAgICAgICAgICAgIDx2LWNhcmQgdGV4dCBzdHlsZT1cXFwibWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGZsdWlkIGdyaWQtbGlzdC1tZCB0ZXh0LXhzLWNlbnRlciBzdHlsZT1cXFwicGFkZGluZzogMCU7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IE1hdGgubWluKHNpemUgKiAxMCwgd2lkdGgpICsgJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1hcmdpbjogMCU7IHBhZGRpbmc6IDAlOyBtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpzdHlsZT1cXFwieyd3aWR0aCc6IGRlbW9HcmlkV2lkdGggICsgJ3B4J31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIoZGVtb0ltYWdlLCBpKSBpbiBkZW1vSW1hZ2VzXFxcIiA6a2V5PVxcXCJpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGJsb2NrIHRleHQgY29sb3I9XFxcInByaW1hcnlcXFwiIDpzdHlsZT1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IHNpemUgKiAwLjM1ICsgJ3B4J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxcIiBzdHlsZT1cXFwidGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCU7XFxcIiBAY2xpY2s9XFxcInNlbGVjdERlbW8oaSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZGVtb0RhdGFbaV0ubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcImRlbW9JbWFnZVxcXCIgc3R5bGU9XFxcIm1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwieyd3aWR0aCc6ZGVtb0dyaWRXaWR0aCAgKyAncHgnfVxcXCIgQGNsaWNrPVxcXCJzZWxlY3REZW1vKGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxcblxcbiAgICAgICAgPHNldHRpbmcgcmVmPVxcXCJzZXR0aW5nXFxcIj48L3NldHRpbmc+XFxuICAgICAgICA8dmlld3BvcnQgcmVmPVxcXCJ2aWV3cG9ydFxcXCI+PC92aWV3cG9ydD5cXG4gICAgICAgIDx2LWZsZXggeHMxMiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6c2l6ZSArICdweCcsXFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJ25vbmUnLFxcbiAgICAgICAgICAgICAgICAnbWFyZ2luJzogJ25vbmUnXFxuICAgICAgICAgICAgfVxcXCIgaWQ9XFxcImJvdHRvbS1mbGV4XFxcIiB2LXNob3c9XFxcIiFpc1BsYXllck1vZGUgJiYgIWlzQ29sb3JNb2RlXFxcIj5cXG4gICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgPHYtY2FyZCBmbGF0IHN0eWxlPVxcXCJtYXJnaW46IGF1dG87IHRvdWNoLWFjdGlvbjogbm9uZTsgdXNlci1zZWxlY3Q6IG5vbmU7XFxcIj5cXG4gICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQgZ3JpZC1saXN0LW1kIHRleHQteHMtY2VudGVyXFxuICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBNYXRoLm1pbihzaXplICogOCwgd2lkdGgpICsgJ3B4JywgaGVpZ2h0OiBzaXplICogNCArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwieydoZWlnaHQnOiBzaXplICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2xpZGVyIDp2YWx1ZT1cXFwicHJvZ3Jlc3NcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDptYXg9XFxcInNvbHV0aW9uLmxlbmd0aFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpY2stc2l6ZT1cXFwiM1xcXCIgOnRpY2stbGFiZWxzPVxcXCJjdWJlc3RlcFxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgOnRpY2tzPVxcXCJzaG93VGlja3NcXFwiIGhpZGUtZGV0YWlsc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmlucHV0PVxcXCJzZXRQcm9ncmVzc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dGh1bWItbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9ncmVzcyA9PSAwID8gJyMnIDogc29sdXRpb25bcHJvZ3Jlc3MgLSAxXSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zbGlkZXI+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggdi1mb3I9XFxcIml0ZW0gaW4gY29sb3J0XFxcIiA6a2V5PVxcXCJpdGVtXFxcIiB4czQgOnN0eWxlPVxcXCJ7cGFkZGluZzpzaXplICogMC4wNiArICdweCd9XFxcInYtaWY9XFxcImlzQ29sb3JNb2RlJiYhaXNQbGF5ZXJNb2RlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJjb2xvciA9IGl0ZW07XFxcIiA6Y29sb3I9XFxcImNvbG9yc1tpdGVtXVxcXCIgYmxvY2sgZGVwcmVzc2VkIDpyaXBwbGU9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cXFwiY29sb3IhPWl0ZW1cXFwiIDpzdHlsZT1cXFwieydmb250LXNpemUnOnNpemUgKiAwLjUgKyAncHgnfVxcXCI+e3tmYWNlc1tpdGVtXX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIDpzaXplPVxcXCJzaXplICogMC44XFxcIiB2LXNob3c9XFxcImNvbG9yPT1pdGVtXFxcIj5jb2xvcml6ZTwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcIiFpc1BsYXllck1vZGUmJiFpc1N3aXRjaFxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcImdyZWVuQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJncmVlblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2lzQ29sb3JNb2RlPydDbGVhbic6J1NjcmFtYmxlJ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMzIDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiYhaXNUZWFjaGluZ1xcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcImdyZWVuQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJncmVlblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAgcHJvZ3Jlc3MgPT0gc29sdXRpb24ubGVuZ3RoID8gJ1JlcGxheScgOiAnUGxheSd9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIiB2LWlmPVxcXCJpc1BsYXllck1vZGUmJiFpc1N3aXRjaCYmaXNUZWFjaGluZ1xcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcImdyZWVuQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJncmVlblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAgcHJvZ3Jlc3MgPT0gc29sdXRpb24ubGVuZ3RoID8gJ1JlcGxheScgOiAnUGxheSd9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIiB2LWlmPVxcXCIhaXNQbGF5ZXJNb2RlJiYhaXNTd2l0Y2hcXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJibHVlQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJibHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICdSZXNldCcgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czMgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiaXNQbGF5ZXJNb2RlJiYhaXNTd2l0Y2gmJiFpc1RlYWNoaW5nXFxcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cXFwiYmx1ZUJ1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwiYmx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAgJ1BhdXNlJyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIiB2LWlmPVxcXCJpc1BsYXllck1vZGUmJiFpc1N3aXRjaCYmaXNUZWFjaGluZ1xcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcImJsdWVCdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcImJsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzogc2l6ZSAqIDAuMyArJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgICdQYXVzZScgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiIWlzUGxheWVyTW9kZSYmIWlzU3dpdGNoXFxcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cXFwicmVkQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzogc2l6ZSAqIDAuMyArJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJ1NvbHZlJyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMyA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIiB2LWlmPVxcXCJpc1BsYXllck1vZGUmJiFpc1N3aXRjaCYmIWlzVGVhY2hpbmdcXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJibGFja0J1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwiYmxhQ0tcXFwiIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3snU3dpdGNoJ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMzIDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiYhaXNUZWFjaGluZ1xcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcInJlZEJ1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwicmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICAnUXVpdCcgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiaXNQbGF5ZXJNb2RlJiYhaXNTd2l0Y2gmJmlzVGVhY2hpbmdcXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJyZWRCdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcInJlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAgJ1F1aXQnIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcIiFpc1BsYXllck1vZGUmJmlzU3dpdGNoJiYhaXNUZWFjaGluZ1xcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcImJsYWNrQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJibGFDS1xcXCIgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzogc2l6ZSAqIDAuMyArJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eydiYWNrJ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgPC92LWNhcmQ+XFxuICAgIDwvZGl2Plxcbjwvdi1hcHA+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiB2LXJlc2l6ZT1cXFwicmVzaXplXFxcIj5cXG4gICAgPHYtYnRuIGZpeGVkIHJpZ2h0IHRvcCBmYWIgY29sb3I9XFxcInByaW1hcnlcXFwiIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogbm9uZTtcXFwiXFxuICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogc2l6ZSAqIDAuOSArICdweCcsIGhlaWdodDogc2l6ZSAqIDAuOSArICdweCcsICdtYXJnaW4tcmlnaHQnOiB3aWR0aCAvIDIgLSBNYXRoLm1pbihzaXplICogNCwgd2lkdGggLyAyKSArICdweCd9XFxcIlxcbiAgICAgICAgQGNsaWNrPVxcXCJzdGF0ZSA9ICFzdGF0ZVxcXCI+XFxuICAgICAgICA8di1pY29uIDpzaXplPVxcXCJzaXplICogMC42XFxcIj5cXG4gICAgICAgICAgICBzZXR0aW5nc1xcbiAgICAgICAgPC92LWljb24+XFxuICAgIDwvdi1idG4+XFxuICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVxcXCJzdGF0ZVxcXCI+XFxuICAgICAgICA8di1jYXJkIHRleHQgc3R5bGU9XFxcIm1hcmdpbjogYXV0bztcXFwiPlxcbiAgICAgICAgICAgIDx2LWNvbnRhaW5lciBmbHVpZCBncmlkLWxpc3QtbWQgdGV4dC14cy1jZW50ZXIgOnN0eWxlPVxcXCJ7d2lkdGg6IE1hdGgubWluKHNpemUgKiA4LCB3aWR0aCkgKyAncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgIDx2LXN1YmhlYWRlcj5cXG4gICAgICAgICAgICAgICAgICAgIFNPTFZJTkcgQUxHT1JJVEhNXFxuICAgICAgICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWxlZnQnOiBzaXplIC8gMiArICdweCcsXFxuICAgICAgICAgICAgICAgIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtcmFkaW8tZ3JvdXAgdi1tb2RlbD1cXFwiY29uZmlnLnNvbHZlcklkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1yYWRpbyBsYWJlbD1cXFwiS29jaWVtYmEncyBBbGdvcml0aG1cXFwiIDp2YWx1ZT1cXFwiMVxcXCIgb2ZmLWljb249XFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiICBvbi1pY29uPVxcXCJyYWRpb19idXR0b25fY2hlY2tlZFxcXCI+PC92LXJhZGlvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXJhZGlvIGxhYmVsPVxcXCJMYXllciBCeSBMYXllciBNZXRob2RcXFwiIDp2YWx1ZT1cXFwiMFxcXCIgb2ZmLWljb249XFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiIG9uLWljb249XFxcInJhZGlvX2J1dHRvbl9jaGVja2VkXFxcIiA6c3R5bGU9XFxcInsgJ21hcmdpbi10b3AnIDogc2l6ZSAqIDAuMiArICdweCd9XFxcIj48L3YtcmFkaW8+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtcmFkaW8tZ3JvdXA+XFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICA8di1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgICAgICBUV0lTVCBTUEVFRFxcbiAgICAgICAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1sZWZ0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiBzaXplIC8gMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy10b3AnOiBzaXplICogMC4yICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiAoc2l6ZSAqIDAuMykgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6c2l6ZSArICdweCdcXG4gICAgICAgICAgICAgICAgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dnVlLXNsaWRlciB2LW1vZGVsPVxcXCJjb25maWcuc3BlZWRcXFwiIHRodW1iLWxhYmVsPVxcXCJhbHdheXNcXFwiIDptYXg9XFxcIjVcXFwiIDptaW49XFxcIjFcXFwiIDptYXJrcz1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1zbGlkZXI+XFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICA8di1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgICAgICBTQ1JBTUJMRSBMRU5HVEhcXG4gICAgICAgICAgICAgICAgPC92LXN1YmhlYWRlcj5cXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctbGVmdCc6IHNpemUgLyAyICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLXJpZ2h0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctdG9wJzogc2l6ZSAqIDAuMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogKHNpemUgKiAwLjMpICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOnNpemUgKyAncHgnXFxuICAgICAgICAgICAgICAgIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHZ1ZS1zbGlkZXIgdi1tb2RlbD1cXFwiY29uZmlnLnNjcmFtYmxlX3N0ZXBzXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiA6bWF4PVxcXCI0MFxcXCIgOm1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6bWFya3M9XFxcIlswLDEwLDIwLDMwLDQwXVxcXCI+PC92dWUtc2xpZGVyPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICAgICAgU0VOU0lUSVZJVFlcXG4gICAgICAgICAgICAgICAgPC92LXN1YmhlYWRlcj5cXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctbGVmdCc6IHNpemUgLyAyICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLXJpZ2h0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctdG9wJzogc2l6ZSAqIDAuMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogKHNpemUgKiAwLjMpICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOnNpemUgKyAncHgnXFxuICAgICAgICAgICAgICAgIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHZ1ZS1zbGlkZXIgdi1tb2RlbD1cXFwiY29uZmlnLnNlbnNpYmlsaXR5XFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiA6bWF4PVxcXCIxMDBcXFwiIDptaW49XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOm1hcmtzPVxcXCJbMCwyNSw1MCw3NSwxMDBdXFxcIj48L3Z1ZS1zbGlkZXI+XFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICA8L3YtY2FyZD5cXG4gICAgPC92LWJvdHRvbS1zaGVldD5cXG48L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IHJlZj1cXFwiY2FudmFzXFxcIj48L2Rpdj5cIiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IFdvcmxkIGZyb20gXCIuL3dvcmxkXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXB0dXJlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMCwgMCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbygxKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKDI1NiwgMjU2LCB0cnVlKTtcbiAgICAgICAgdGhpcy53b3JsZC5yZXNpemUoMjU2LCAyNTYpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlKFwiPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/XCIpO1xuICAgIH1cbiAgICBnZW5lcmF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzdG9yZShzdGF0ZS5zcGxpdChcIlwiKSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMud29ybGQuc2NlbmUsIHRoaXMud29ybGQuY2FtZXJhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC50b0RhdGFVUkwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IHR3aXN0ZXIgfSBmcm9tIFwiLi90d2lzdGVyXCI7XG5pbXBvcnQgeyBheGlzX3BsYW5lcywgYXhpc192ZWN0b3JzLCBjdWJlX2NvbmZpZywgY3ViZV9zaXplLCBpbmRleFRvTGF5ZXIsIHdvcmxkVG9JbmRleCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBCb3gzLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBGYWNlIH0gZnJvbSBcIi4vdXRpbHNfaW50ZXJuYWxcIjtcbmV4cG9ydCBjbGFzcyBIb2xkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5heGlzID0gXCJcIjtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih3b3JsZCkge1xuICAgICAgICB0aGlzLmludGVyYWN0ID0gKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1vdXNlZG93blwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd24ueCA9IGFjdGlvbi54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd24ueSA9IGFjdGlvbi55O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25fdGljayA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1vdXNlbW92ZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlLnggPSBhY3Rpb24ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlLnkgPSBhY3Rpb24ueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGNhbmNlbFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3VzZXVwXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1vdXNlb3V0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2xvY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRhcHMgPSBbXTtcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm90YXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5heGlzID0gXCJcIjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuY29udGluZ2xlID0gMDtcbiAgICAgICAgdGhpcy5kb3duID0gbmV3IFRIUkVFLlZlY3RvcjIoMCwgMCk7XG4gICAgICAgIHRoaXMubW92ZSA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xuICAgICAgICB0aGlzLmRvd25fdGljayA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmhvbGRlciA9IG5ldyBIb2xkZXIoKTtcbiAgICAgICAgdGhpcy5ncm91cCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9vcCgpO1xuICAgIH1cbiAgICBsb29wKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBzZXQgbG9jayh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwKCk7XG4gICAgICAgIHRoaXMuX2xvY2sgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxvY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NrO1xuICAgIH1cbiAgICBzZXQgZGlzYWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwKCk7XG4gICAgICAgIHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRpc2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5jb250aW5nbGUgKyB0aGlzLmFuZ2xlO1xuICAgICAgICBpZiAodGhpcy5yb3RhdGluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncm91cC5hbmdsZSAhPSBhbmdsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IChhbmdsZSAtIHRoaXMuZ3JvdXAuYW5nbGUpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hbmdsZSArPSBkZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cHMgPSB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW3RoaXMuYXhpc107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwLmFuZ2xlICE9IGFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IChhbmdsZSAtIGdyb3VwLmFuZ2xlKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cC5hbmdsZSArPSBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXRjaCgpIHtcbiAgICAgICAgY29uc3QgcGxhbmUgPSBheGlzX3BsYW5lc1t0aGlzLmhvbGRlci5heGlzXTtcbiAgICAgICAgY29uc3QgZmluZ2VyID0gdGhpcy5ob2xkZXIudmVjdG9yO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaG9sZGVyLmluZGV4O1xuICAgICAgICBjb25zdCBpbGF5ZXIgPSBpbmRleFRvTGF5ZXIoaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgW1wieFwiLCBcInlcIiwgXCJ6XCJdKSB7XG4gICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBheGlzX3ZlY3RvcnNbYXhpc107XG4gICAgICAgICAgICBpZiAodmVjdG9yLmRvdChwbGFuZS5ub3JtYWwpID09PSAwICYmIHZlY3Rvci5kb3QoZmluZ2VyKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW2F4aXNdW2lsYXllcltheGlzXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGludGVyc2VjdChwb2ludCwgcGxhbmUpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcbiAgICAgICAgY29uc3QgcmF5ID0gbmV3IFRIUkVFLlJheSgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICBjb25zdCB4ID0gKHBvaW50LnggLyB0aGlzLndvcmxkLndpZHRoKSAqIDIgLSAxO1xuICAgICAgICBjb25zdCB5ID0gLShwb2ludC55IC8gdGhpcy53b3JsZC5oZWlnaHQpICogMiArIDE7XG4gICAgICAgIG1hdHJpeC5jb3B5KHRoaXMud29ybGQuc2NlbmUubWF0cml4KTtcbiAgICAgICAgbWF0cml4LmludmVydCgpO1xuICAgICAgICByYXkub3JpZ2luLnNldEZyb21NYXRyaXhQb3NpdGlvbih0aGlzLndvcmxkLmNhbWVyYS5tYXRyaXhXb3JsZCk7XG4gICAgICAgIHJheS5kaXJlY3Rpb24uc2V0KHgsIHksIDAuNSkudW5wcm9qZWN0KHRoaXMud29ybGQuY2FtZXJhKS5zdWIocmF5Lm9yaWdpbikubm9ybWFsaXplKCk7XG4gICAgICAgIHJheS5hcHBseU1hdHJpeDQobWF0cml4KTtcbiAgICAgICAgcmF5LmludGVyc2VjdFBsYW5lKHBsYW5lLCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBoYW5kbGVEb3duKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcgfHwgdGhpcy5yb3RhdGluZykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhvbGRlci5pbmRleCA9IC0xO1xuICAgICAgICBpZiAodGhpcy5sb2NrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1pbl9kaXN0ID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYXhpcyBvZiBbXCJ4XCIsIFwieVwiLCBcInpcIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbYXhpc107XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuaW50ZXJzZWN0KHRoaXMuZG93biwgcGxhbmUpO1xuICAgICAgICAgICAgaWYgKHBvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZV9tYXJnaW4gPSBjdWJlX3NpemUgLyAyICsgMC4wMDE7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94TWluID0gbmV3IFZlY3RvcjMoKS5zZXRTY2FsYXIoLWN1YmVfbWFyZ2luKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3hNYXggPSBuZXcgVmVjdG9yMygpLnNldFNjYWxhcihjdWJlX21hcmdpbik7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gbmV3IEJveDMoYm94TWluLCBib3hNYXgpO1xuICAgICAgICAgICAgICAgIGlmIChib3guY29udGFpbnNQb2ludChwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKS5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy53b3JsZC5jYW1lcmEubWF0cml4V29ybGQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gcG9pbnQuZGlzdGFuY2VUbyhvcmlnaW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbl9kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5fZGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGRlci5heGlzID0gYXhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZGVyLmluZGV4ID0gd29ybGRUb0luZGV4KHBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVNb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy5tb3ZlLnggLSB0aGlzLmRvd24ueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gdGhpcy5tb3ZlLnkgLSB0aGlzLmRvd24ueTtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgaWYgKE1hdGgubWluKHRoaXMud29ybGQud2lkdGgsIHRoaXMud29ybGQuaGVpZ2h0KSAvIGQgPiAxMjgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhvbGRlci5pbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gTWF0aC5hYnMoZHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpcyA9IFwieVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG93bi54IDwgdGhpcy53b3JsZC53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpcyA9IFwieFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlzID0gXCJ6XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGluZ2xlX3NldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHRoaXMud29ybGQuY3ViZS50YWJsZS5ncm91cHNbdGhpcy5heGlzXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3VjY2VzcyA9IGdyb3VwLmRyYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2lzdGVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IGdyb3VwLmRyYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW5nbGVfc2V0LmFkZChncm91cC5hbmdsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb250aW5nbGVfc2V0LnNpemUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGNvbnRpbmdsZV9zZXQudmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGluZ2xlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250aW5nbGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbdGhpcy5ob2xkZXIuYXhpc107XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmludGVyc2VjdCh0aGlzLmRvd24sIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmludGVyc2VjdCh0aGlzLm1vdmUsIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpLnN1YlZlY3RvcnMoZW5kLCBzdGFydCk7XG4gICAgICAgICAgICAgICAgdmVjdG9yLm1heChuZXcgVmVjdG9yMygpLnN1Yih2ZWN0b3IpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtID0gTWF0aC5tYXgodmVjdG9yLngsIHZlY3Rvci55LCB2ZWN0b3Iueik7XG4gICAgICAgICAgICAgICAgdGhpcy5ob2xkZXIudmVjdG9yLmNvcHkobm9ybSA9PSB2ZWN0b3IueCA/IG5ldyBWZWN0b3IzKDEsIDAsIDApIDogKG5vcm0gPT0gdmVjdG9yLnkgPyBuZXcgVmVjdG9yMygwLCAxLCAwKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIDAsIDEpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cCA9IHRoaXMubWF0Y2goKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzdWNjZXNzID0gdGhpcy5ncm91cC5kcmFnKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHR3aXN0ZXIuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmdyb3VwLmRyYWcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb250aW5nbGUgPSB0aGlzLmdyb3VwLmFuZ2xlO1xuICAgICAgICAgICAgICAgIHZlY3Rvci5jcm9zc1ZlY3RvcnModGhpcy5ob2xkZXIudmVjdG9yLCBwbGFuZS5ub3JtYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9sZGVyLnZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWN0b3IueCArIHZlY3Rvci55ICsgdmVjdG9yLnopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbdGhpcy5ob2xkZXIuYXhpc107XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmludGVyc2VjdCh0aGlzLmRvd24sIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmludGVyc2VjdCh0aGlzLm1vdmUsIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpLnN1YlZlY3RvcnMoZW5kLCBzdGFydCk7XG4gICAgICAgICAgICAgICAgdmVjdG9yLm11bHRpcGx5KHRoaXMuaG9sZGVyLnZlY3Rvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9XG4gICAgICAgICAgICAgICAgICAgICh2ZWN0b3IueCArIHZlY3Rvci55ICsgdmVjdG9yLnopICpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVfY29uZmlnLnNlbnNpYmlsaXR5ICogMWUtNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy5tb3ZlLnggLSB0aGlzLmRvd24ueDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHRoaXMubW92ZS55IC0gdGhpcy5kb3duLnk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9ICh0aGlzLmxvY2sgPyAxMDAgOiBjdWJlX2NvbmZpZy5zZW5zaWJpbGl0eSkgKiAxZS00ICogKHRoaXMuYXhpcyA9PSBcInlcIiA/IC1keCA6XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmF4aXMgPT0gXCJ4XCIgPyAtZHkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGR5KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVVwKCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICAgICAgbGV0IGZhY2UgPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvbGRlci5heGlzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgICAgIGZhY2UgPSBGYWNlLlI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3knOlxuICAgICAgICAgICAgICAgICAgICBmYWNlID0gRmFjZS5VO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICAgICAgZmFjZSA9IEZhY2UuRjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhcCBvZiB0aGlzLnRhcHMpIHtcbiAgICAgICAgICAgICAgICB0YXAodGhpcy5ob2xkZXIuaW5kZXgsIGZhY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW5nKSB7XG4gICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmFuZ2xlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxvY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYW5nbGUpIDwgTWF0aC5QSSAvIDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAoTWF0aC5hYnMoYW5nbGUpIC8gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5kb3duX3RpY2spKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA+IDAuMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5nbGUgPSBhbmdsZSA9PSAwID8gMCA6ICgoYW5nbGUgLyBNYXRoLmFicyhhbmdsZSkpICogKE1hdGguUEkgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYW5nbGUgPSBhbmdsZSArIHRoaXMuY29udGluZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnR3aXN0KGFuZ2xlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cHMgPSB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW3RoaXMuYXhpc107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAudHdpc3QoYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cCA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZGVyLmluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3RhdGluZyA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IEN1YmVsZXQgZnJvbSBcIi4vY3ViZWxldFwiO1xuaW1wb3J0IHsgR3JvdXBUYWJsZSB9IGZyb20gXCIuL2dyb3VwXCI7XG5pbXBvcnQgeyB0d2lzdGVyIH0gZnJvbSBcIi4vdHdpc3RlclwiO1xuaW1wb3J0IHsgY3ViZWxldF9mYWNlX2F0dHJzLCBjdWJlbGV0X2xhbWJlcnMsIGN1YmVsZXRfc3RpY2tlciwgY3ViZV9jb25maWcgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgRmFjZSB9IGZyb20gXCIuL3V0aWxzX2ludGVybmFsXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJlIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmN1YmVsZXRzID0gW107XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IG5ldyBDdWJlbGV0KGkpO1xuICAgICAgICAgICAgdGhpcy5jdWJlbGV0cy5wdXNoKGN1YmVsZXQpO1xuICAgICAgICAgICAgdGhpcy5hZGQoY3ViZWxldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NrcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2Nrcy5zZXQoXCJ4XCIsIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMubG9ja3Muc2V0KFwieVwiLCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLmxvY2tzLnNldChcInpcIiwgbmV3IFNldCgpKTtcbiAgICAgICAgdGhpcy5sb2Nrcy5zZXQoXCJhXCIsIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMudGFibGUgPSBuZXcgR3JvdXBUYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlTWF0cml4KCk7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgZm9yIChjb25zdCBsb2NrIG9mIHRoaXMubG9ja3MudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChsb2NrLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jayhheGlzLCBsYXllcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICgoX2EgPSB0aGlzLmxvY2tzLmdldChcImFcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oYXMoMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBheGlzX2xvY2tzZXQgPSB0aGlzLmxvY2tzLmdldChheGlzKTtcbiAgICAgICAgaWYgKGF4aXNfbG9ja3NldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsb2Nrc2V0IG9mIHRoaXMubG9ja3MudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChsb2Nrc2V0ICE9IGF4aXNfbG9ja3NldCAmJiBsb2Nrc2V0LnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF4aXNfbG9ja3NldC5hZGQobGF5ZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdW5sb2NrKGF4aXMsIGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGF4aXNfbG9ja3NldCA9IHRoaXMubG9ja3MuZ2V0KGF4aXMpO1xuICAgICAgICBheGlzX2xvY2tzZXQgPT09IG51bGwgfHwgYXhpc19sb2Nrc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBheGlzX2xvY2tzZXQuZGVsZXRlKGxheWVyKTtcbiAgICB9XG4gICAgcmFuZG9tMygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpLCAwKSwgMik7XG4gICAgfVxuICAgIHNjcmFtYmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1YmVfY29uZmlnLnNjcmFtYmxlX3N0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBbXCJ4XCIsIFwieVwiLCBcInpcIl1bdGhpcy5yYW5kb20zKCldO1xuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLnJhbmRvbTMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKHRoaXMucmFuZG9tMygpIC0gMSkgKiAoTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5ncm91cHNbYXhpc11bbGV2ZWxdLnR3aXN0KGFuZ2xlID09PSAwID8gTWF0aC5QSSA6IGFuZ2xlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdHdpc3Rlci5maW5pc2goKTtcbiAgICAgICAgZm9yIChjb25zdCBjdWJlbGV0IG9mIHRoaXMuY3ViZWxldHMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGN1YmVsZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3ViZWxldHMuc3BsaWNlKDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSBuZXcgQ3ViZWxldChpKTtcbiAgICAgICAgICAgIHRoaXMuY3ViZWxldHMucHVzaChjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMuYWRkKGN1YmVsZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFibGUgPSBuZXcgR3JvdXBUYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IHgsIHksIHo7XG4gICAgICAgIHR3aXN0ZXIuZmluaXNoKCk7XG4gICAgICAgIHkgPSAyO1xuICAgICAgICBmb3IgKHogPSAwOyB6IDwgMzsgeisrKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmN1YmVsZXRzW2luZGV4XS5nZXRDb2xvck9mKEZhY2UuVSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHggPSAyO1xuICAgICAgICBmb3IgKHkgPSAyOyB5ID49IDA7IHktLSkge1xuICAgICAgICAgICAgZm9yICh6ID0gMjsgeiA+PSAwOyB6LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY3ViZWxldHNbaW5kZXhdLmdldENvbG9yT2YoRmFjZS5SKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeiA9IDI7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmN1YmVsZXRzW2luZGV4XS5nZXRDb2xvck9mKEZhY2UuRik7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHkgPSAwO1xuICAgICAgICBmb3IgKHogPSAyOyB6ID49IDA7IHotLSkge1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IDM7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdWJlbGV0c1tpbmRleF0uZ2V0Q29sb3JPZihGYWNlLkQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4ID0gMDtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeiA9IDA7IHogPCAzOyB6KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY3ViZWxldHNbaW5kZXhdLmdldENvbG9yT2YoRmFjZS5MKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeiA9IDA7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAyOyB4ID49IDA7IHgtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdWJlbGV0c1tpbmRleF0uZ2V0Q29sb3JPZihGYWNlLkIpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXN0b3JlKHN0YXRlKSB7XG4gICAgICAgIGxldCB4LCB5LCB6O1xuICAgICAgICBsZXQgY3VyID0gMDtcbiAgICAgICAgbGV0IGZhY2U7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgeSA9IDI7XG4gICAgICAgIGZhY2UgPSBGYWNlLlU7XG4gICAgICAgIGZvciAoeiA9IDA7IHogPCAzOyB6KyspIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCAzOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHN0YXRlW2N1cisrXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlbGV0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgY3ViZWxldC5yZW1vdmUoY3ViZWxldC5zdGlja2Vyc1tmYWNlXSk7XG4gICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IG5ldyBNZXNoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VfYXR0ciA9IGN1YmVsZXRfZmFjZV9hdHRyc1tmYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2tlciA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfc3RpY2tlciwgY3ViZWxldF9sYW1iZXJzW2NvbG9yXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmFjZV9hdHRyLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5wb3NpdGlvbi5jb3B5KGZhY2VfYXR0ci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LmFkZChzdGlja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeCA9IDI7XG4gICAgICAgIGZhY2UgPSBGYWNlLlI7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHogPSAyOyB6ID49IDA7IHotLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3RhdGVbY3VyKytdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmVsZXRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnJlbW92ZShjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdKTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gbmV3IE1lc2goKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ZhY2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBjdWJlbGV0X2xhbWJlcnNbY29sb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnBvc2l0aW9uLmNvcHkoZmFjZV9hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IHN0aWNrZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB6ID0gMjtcbiAgICAgICAgZmFjZSA9IEZhY2UuRjtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCAzOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHN0YXRlW2N1cisrXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlbGV0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgY3ViZWxldC5yZW1vdmUoY3ViZWxldC5zdGlja2Vyc1tmYWNlXSk7XG4gICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IG5ldyBNZXNoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VfYXR0ciA9IGN1YmVsZXRfZmFjZV9hdHRyc1tmYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2tlciA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfc3RpY2tlciwgY3ViZWxldF9sYW1iZXJzW2NvbG9yXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmFjZV9hdHRyLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5wb3NpdGlvbi5jb3B5KGZhY2VfYXR0ci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LmFkZChzdGlja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeSA9IDA7XG4gICAgICAgIGZhY2UgPSBGYWNlLkQ7XG4gICAgICAgIGZvciAoeiA9IDI7IHogPj0gMDsgei0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzdGF0ZVtjdXIrK107XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZWxldHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQucmVtb3ZlKGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0pO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBuZXcgTWVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlX2F0dHIgPSBjdWJlbGV0X2ZhY2VfYXR0cnNbZmFjZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNrZXIgPSBuZXcgVEhSRUUuTWVzaChjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfbGFtYmVyc1tjb2xvcl0pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZhY2VfYXR0ci5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gc3RpY2tlcjtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5hZGQoc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHggPSAwO1xuICAgICAgICBmYWNlID0gRmFjZS5MO1xuICAgICAgICBmb3IgKHkgPSAyOyB5ID49IDA7IHktLSkge1xuICAgICAgICAgICAgZm9yICh6ID0gMDsgeiA8IDM7IHorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3RhdGVbY3VyKytdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmVsZXRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnJlbW92ZShjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdKTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gbmV3IE1lc2goKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ZhY2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBjdWJlbGV0X2xhbWJlcnNbY29sb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnBvc2l0aW9uLmNvcHkoZmFjZV9hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IHN0aWNrZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB6ID0gMDtcbiAgICAgICAgZmFjZSA9IEZhY2UuQjtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDI7IHggPj0gMDsgeC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzdGF0ZVtjdXIrK107XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZWxldHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQucmVtb3ZlKGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0pO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBuZXcgTWVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlX2F0dHIgPSBjdWJlbGV0X2ZhY2VfYXR0cnNbZmFjZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNrZXIgPSBuZXcgVEhSRUUuTWVzaChjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfbGFtYmVyc1tjb2xvcl0pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZhY2VfYXR0ci5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gc3RpY2tlcjtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5hZGQoc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGN1YmVsZXRfZGVmcywgY3ViZWxldF9jb3JlLCBjdWJlbGV0X2ZyYW1lLCBjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfZmFjZV9hdHRycywgZGlyZWN0aW9uVG9JbmRleCwgZmFjZVBvc3Rpb25CaW5kaW5ncywgY3ViZWxldF9sYW1iZXJzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgaW5kZXhUb0RpcmVjdGlvbiB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJlbGV0IGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKGluZGV4KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3ZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgY29uc3QgZHJjdG4gPSBpbmRleFRvRGlyZWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy52ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhkcmN0bi54LCBkcmN0bi55LCBkcmN0bi56KTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfZnJhbWUsIGN1YmVsZXRfY29yZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZnJhbWUpO1xuICAgICAgICB0aGlzLnN0aWNrZXJzID0gbmV3IEFycmF5KDYpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ldO1xuICAgICAgICAgICAgaWYgKGZhY2VfYXR0ci5tYXRjaCh0aGlzLnZlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBmYWNlX2F0dHIubGFtYmVydCk7XG4gICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tlcnNbaV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIH1cbiAgICBzZXQgdmVjdG9yKHZlY3Rvcikge1xuICAgICAgICB0aGlzLl92ZWN0b3IuY29weSh2ZWN0b3IpO1xuICAgICAgICB0aGlzLmluZGV4ID0gZGlyZWN0aW9uVG9JbmRleCh2ZWN0b3IpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmNvcHkodmVjdG9yKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5tdWx0aXBseVNjYWxhcihjdWJlbGV0X2RlZnMuc2l6ZSk7XG4gICAgfVxuICAgIGdldCB2ZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3I7XG4gICAgfVxuICAgIGNvbnZlcnRGYWNlKGZhY2UpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgY29uc3QgcXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCkuY29weSh0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICBmb3IgKGNvbnN0IGJpbmRpbmcgb2YgZmFjZVBvc3Rpb25CaW5kaW5ncykge1xuICAgICAgICAgICAgaWYgKGJpbmRpbmcuZmFjZSA9PT0gZmFjZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvcHkoYmluZGluZy5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24uYXBwbHlRdWF0ZXJuaW9uKHF1YXRlcm5pb24uaW52ZXJ0KCkpO1xuICAgICAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMyhNYXRoLnJvdW5kKHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKHBvc2l0aW9uLnkpLCBNYXRoLnJvdW5kKHBvc2l0aW9uLnopKTtcbiAgICAgICAgZm9yIChjb25zdCBiaW5kaW5nIG9mIGZhY2VQb3N0aW9uQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLnBvc2l0aW9uLmVxdWFscyh2ZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuZmFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGdldENvbG9yT2YoZmFjZSkge1xuICAgICAgICBjb25zdCBzdGlja2VyID0gdGhpcy5zdGlja2Vyc1t0aGlzLmNvbnZlcnRGYWNlKGZhY2UpXTtcbiAgICAgICAgc3dpdGNoIChzdGlja2VyLm1hdGVyaWFsKSB7XG4gICAgICAgICAgICBjYXNlIGN1YmVsZXRfbGFtYmVycy5MOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxcIjtcbiAgICAgICAgICAgIGNhc2UgY3ViZWxldF9sYW1iZXJzLlI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUlwiO1xuICAgICAgICAgICAgY2FzZSBjdWJlbGV0X2xhbWJlcnMuRjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XG4gICAgICAgICAgICBjYXNlIGN1YmVsZXRfbGFtYmVycy5COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJcIjtcbiAgICAgICAgICAgIGNhc2UgY3ViZWxldF9sYW1iZXJzLlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVwiO1xuICAgICAgICAgICAgY2FzZSBjdWJlbGV0X2xhbWJlcnMuRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiP1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgVHdpc3QsIHR3aXN0ZXIgfSBmcm9tIFwiLi90d2lzdGVyXCI7XG5pbXBvcnQgeyBheGlzX3ZlY3RvcnMsIGN1YmVfY29uZmlnLCBpbmRleFRvTGF5ZXIsIHR3aXN0X2R1cmF0aW9uIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1YmVHcm91cCBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvcihjdWJlLCBheGlzLCBsYXllcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR3aXN0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuaG9sZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1YmUgPSBjdWJlO1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xuICAgICAgICB0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgICAgIHRoaXMuY3ViZWxldHMgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWxheWVyID0gaW5kZXhUb0xheWVyKGkpO1xuICAgICAgICAgICAgaWYgKGF4aXMgPT0gXCJ4XCIgJiYgaWxheWVyLnggPT0gbGF5ZXJcbiAgICAgICAgICAgICAgICB8fCBheGlzID09IFwieVwiICYmIGlsYXllci55ID09IGxheWVyXG4gICAgICAgICAgICAgICAgfHwgYXhpcyA9PSBcInpcIiAmJiBpbGF5ZXIueiA9PSBsYXllcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIH1cbiAgICBzZXQgYW5nbGUoYW5nbGUpIHtcbiAgICAgICAgdGhpcy5fYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5zZXRSb3RhdGlvbkZyb21BeGlzQW5nbGUoYXhpc192ZWN0b3JzW3RoaXMuYXhpc10sIGFuZ2xlKTtcbiAgICAgICAgdGhpcy51cGRhdGVNYXRyaXgoKTtcbiAgICAgICAgdGhpcy5jdWJlLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IGFuZ2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5nbGU7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMudHdpc3RpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy50d2lzdGluZy5hcnJpdmFsO1xuICAgICAgICAgICAgdHdpc3Rlci5jYW5jZWwodGhpcy50d2lzdGluZyk7XG4gICAgICAgICAgICB0aGlzLnR3aXN0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYW5nbGUgLyAoTWF0aC5QSSAvIDIpKSAqIChNYXRoLlBJIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMudHdpc3RpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy50d2lzdGluZy5hcnJpdmFsIC0gdGhpcy5hbmdsZTtcbiAgICAgICAgICAgIHR3aXN0ZXIuZmluaXNoKHRoaXMudHdpc3RpbmcpO1xuICAgICAgICAgICAgdGhpcy50d2lzdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiBhbmdsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaG9sZCgpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuY3ViZS5sb2NrKHRoaXMuYXhpcywgdGhpcy5sYXllcik7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9sZGluZyA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiB0aGlzLmluZGljZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmUuY3ViZWxldHNbaV07XG4gICAgICAgICAgICB0aGlzLmN1YmVsZXRzLnB1c2goY3ViZWxldCk7XG4gICAgICAgICAgICB0aGlzLmN1YmUucmVtb3ZlKGN1YmVsZXQpO1xuICAgICAgICAgICAgdGhpcy5hZGQoY3ViZWxldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdWJlLmFkZCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGRyYWcoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmhvbGRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAtdGhpcy5maW5pc2goKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ob2xkKCk7XG4gICAgfVxuICAgIGRyb3AoKSB7XG4gICAgICAgIHRoaXMuaG9sZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR3aXN0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZWxldHMucG9wKCk7XG4gICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjdWJlbGV0KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGN1YmVsZXQpO1xuICAgICAgICAgICAgdGhpcy5jdWJlLmFkZChjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMuY3ViZS5jdWJlbGV0c1tjdWJlbGV0LmluZGV4XSA9IGN1YmVsZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdWJlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jdWJlLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuY3ViZS51bmxvY2sodGhpcy5heGlzLCB0aGlzLmxheWVyKTtcbiAgICAgICAgdGhpcy5jdWJlLmNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHR3aXN0KGFuZ2xlLCBmYXN0KSB7XG4gICAgICAgIGlmICh0aGlzLmhvbGRpbmcpIHtcbiAgICAgICAgICAgIGFuZ2xlID0gYW5nbGUgKyB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuaG9sZCgpO1xuICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgYW5nbGUgPSBNYXRoLnJvdW5kKGFuZ2xlIC8gKE1hdGguUEkgLyAyKSkgKiAoTWF0aC5QSSAvIDIpO1xuICAgICAgICBpZiAoZmFzdCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmFuZ2xlIC0gYW5nbGUpIDwgMWUtNikge1xuICAgICAgICAgICAgdGhpcy5kcm9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmcmFjID0gTWF0aC5hYnModGhpcy5hbmdsZSAtIGFuZ2xlKSAvIChNYXRoLlBJIC8gMik7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHR3aXN0X2R1cmF0aW9uKGN1YmVfY29uZmlnLnNwZWVkKSAqICgyIC0gMiAvIChmcmFjICsgMSkpO1xuICAgICAgICAgICAgdGhpcy50d2lzdGluZyA9IG5ldyBUd2lzdCh0aGlzLmFuZ2xlLCBhbmdsZSwgZHVyYXRpb24sICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5hbmdsZSAtIGFuZ2xlKSA8IDFlLTYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHR3aXN0ZXIudHdpc3RzLnB1c2godGhpcy50d2lzdGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJvdGF0ZShjdWJlbGV0KSB7XG4gICAgICAgIGN1YmVsZXQucm90YXRlT25Xb3JsZEF4aXMoYXhpc192ZWN0b3JzW3RoaXMuYXhpc10sIHRoaXMuYW5nbGUpO1xuICAgICAgICBjdWJlbGV0LnZlY3RvciA9IGN1YmVsZXQudmVjdG9yLmFwcGx5QXhpc0FuZ2xlKGF4aXNfdmVjdG9yc1t0aGlzLmF4aXNdLCB0aGlzLmFuZ2xlKTtcbiAgICAgICAgY3ViZWxldC51cGRhdGVNYXRyaXgoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JvdXBUYWJsZSB7XG4gICAgY29uc3RydWN0b3IoY3ViZSkge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgW1wieFwiLCBcInlcIiwgXCJ6XCJdKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChuZXcgQ3ViZUdyb3VwKGN1YmUsIGF4aXMsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ3JvdXBzW2F4aXNdID0gbGlzdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGRvbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZG9tcyA9IFtdO1xuICAgICAgICB0aGlzLnRvdWNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBuZXcgSW50ZXJhY3Rpb24oXCJ0b3VjaGVuZFwiLCB0aGlzLmxhc3QuY2xpZW50WCAtIHRoaXMuZG9tc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LCB0aGlzLmxhc3QuY2xpZW50WSAtIHRoaXMuZG9tc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdCA9IGZpcnN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm90aW4oKSB8fCAoKF9hID0gdGhpcy5sYXN0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWRlbnRpZmllcikgIT0gZmlyc3QuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG5ldyBJbnRlcmFjdGlvbihldmVudC50eXBlLCBmaXJzdC5jbGllbnRYIC0gdGhpcy5kb21zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsIGZpcnN0LmNsaWVudFkgLSB0aGlzLmRvbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soYWN0aW9uKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJ0b3VjaGVuZFwiIHx8IGV2ZW50LnR5cGUgPT09IFwidG91Y2hjYW5jZWxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vdXNlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm90aW4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gbmV3IEludGVyYWN0aW9uKGV2ZW50LnR5cGUsIGV2ZW50LmNsaWVudFggLSB0aGlzLmRvbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCwgZXZlbnQuY2xpZW50WSAtIHRoaXMuZG9tc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2V1cFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGRvbSBvZiBkb21zKSB7XG4gICAgICAgICAgICBpZiAoZG9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb21zLnB1c2goZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMudG91Y2gpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMudG91Y2gpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy50b3VjaCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgICBub3RpbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBkb20gb2YgdGhpcy5kb21zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IGRvbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMQkxTb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLm5leHRDb2xvciA9IHt9O1xuICAgICAgICB0aGlzLm5leHRGYWNlID0geyBsOiBcImZcIiwgZjogXCJyXCIsIHI6IFwiYlwiLCBiOiBcImxcIiB9O1xuICAgICAgICB0aGlzLnByZXZGYWNlID0geyBsOiBcImJcIiwgYjogXCJyXCIsIHI6IFwiZlwiLCBmOiBcImxcIiB9O1xuICAgIH1cbiAgICBnZXRDdWJlU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUgPSB7XG4gICAgICAgICAgICBiOiBzdGF0ZVs0OV0sXG4gICAgICAgICAgICBibDogc3RhdGVbNTBdLmNvbmNhdChzdGF0ZVszOV0pLFxuICAgICAgICAgICAgZDogc3RhdGVbMzFdLFxuICAgICAgICAgICAgZGI6IHN0YXRlWzM0XS5jb25jYXQoc3RhdGVbNTJdKSxcbiAgICAgICAgICAgIGRibDogc3RhdGVbMzNdLmNvbmNhdChzdGF0ZVs1M10pLmNvbmNhdChzdGF0ZVs0Ml0pLFxuICAgICAgICAgICAgZGY6IHN0YXRlWzI4XS5jb25jYXQoc3RhdGVbMjVdKSxcbiAgICAgICAgICAgIGRmcjogc3RhdGVbMjldLmNvbmNhdChzdGF0ZVsyNl0pLmNvbmNhdChzdGF0ZVsxNV0pLFxuICAgICAgICAgICAgZGw6IHN0YXRlWzMwXS5jb25jYXQoc3RhdGVbNDNdKSxcbiAgICAgICAgICAgIGRsZjogc3RhdGVbMjddLmNvbmNhdChzdGF0ZVs0NF0pLmNvbmNhdChzdGF0ZVsyNF0pLFxuICAgICAgICAgICAgZHI6IHN0YXRlWzMyXS5jb25jYXQoc3RhdGVbMTZdKSxcbiAgICAgICAgICAgIGRyYjogc3RhdGVbMzVdLmNvbmNhdChzdGF0ZVsxN10pLmNvbmNhdChzdGF0ZVs1MV0pLFxuICAgICAgICAgICAgZjogc3RhdGVbMjJdLFxuICAgICAgICAgICAgZnI6IHN0YXRlWzIzXS5jb25jYXQoc3RhdGVbMTJdKSxcbiAgICAgICAgICAgIGw6IHN0YXRlWzQwXSxcbiAgICAgICAgICAgIGxmOiBzdGF0ZVs0MV0uY29uY2F0KHN0YXRlWzIxXSksXG4gICAgICAgICAgICByOiBzdGF0ZVsxM10sXG4gICAgICAgICAgICByYjogc3RhdGVbMTRdLmNvbmNhdChzdGF0ZVs0OF0pLFxuICAgICAgICAgICAgdTogc3RhdGVbNF0sXG4gICAgICAgICAgICB1Yjogc3RhdGVbMV0uY29uY2F0KHN0YXRlWzQ2XSksXG4gICAgICAgICAgICB1Ymw6IHN0YXRlWzBdLmNvbmNhdChzdGF0ZVs0N10pLmNvbmNhdChzdGF0ZVszNl0pLFxuICAgICAgICAgICAgdWY6IHN0YXRlWzddLmNvbmNhdChzdGF0ZVsxOV0pLFxuICAgICAgICAgICAgdWZyOiBzdGF0ZVs4XS5jb25jYXQoc3RhdGVbMjBdKS5jb25jYXQoc3RhdGVbOV0pLFxuICAgICAgICAgICAgdWw6IHN0YXRlWzNdLmNvbmNhdChzdGF0ZVszN10pLFxuICAgICAgICAgICAgdWxmOiBzdGF0ZVs2XS5jb25jYXQoc3RhdGVbMzhdKS5jb25jYXQoc3RhdGVbMThdKSxcbiAgICAgICAgICAgIHVyOiBzdGF0ZVs1XS5jb25jYXQoc3RhdGVbMTBdKSxcbiAgICAgICAgICAgIHVyYjogc3RhdGVbMl0uY29uY2F0KHN0YXRlWzExXSkuY29uY2F0KHN0YXRlWzQ1XSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbG9yX2wgPSB0aGlzLmN1YmVTdGF0ZVtcImxcIl07XG4gICAgICAgIGNvbnN0IGNvbG9yX3IgPSB0aGlzLmN1YmVTdGF0ZVtcInJcIl07XG4gICAgICAgIGNvbnN0IGNvbG9yX2YgPSB0aGlzLmN1YmVTdGF0ZVtcImZcIl07XG4gICAgICAgIGNvbnN0IGNvbG9yX2IgPSB0aGlzLmN1YmVTdGF0ZVtcImJcIl07XG4gICAgICAgIHRoaXMubmV4dENvbG9yW2NvbG9yX2xdID0gY29sb3JfZjtcbiAgICAgICAgdGhpcy5uZXh0Q29sb3JbY29sb3JfZl0gPSBjb2xvcl9yO1xuICAgICAgICB0aGlzLm5leHRDb2xvcltjb2xvcl9yXSA9IGNvbG9yX2I7XG4gICAgICAgIHRoaXMubmV4dENvbG9yW2NvbG9yX2JdID0gY29sb3JfbDtcbiAgICB9XG4gICAgVHdpc3RfQigpIHtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuY3ViZVN0YXRlLnViO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51YiA9IHRoaXMuY3ViZVN0YXRlLnJiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5yYiA9IHRoaXMuY3ViZVN0YXRlLmRiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kYiA9IHRoaXMuY3ViZVN0YXRlLmJsWzFdICsgdGhpcy5jdWJlU3RhdGUuYmxbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmJsID0gdG1wWzFdICsgdG1wWzBdO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51Ymw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVibCA9IHRoaXMuY3ViZVN0YXRlLnVyYlsxXSArIHRoaXMuY3ViZVN0YXRlLnVyYlsyXSArIHRoaXMuY3ViZVN0YXRlLnVyYlswXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudXJiID0gdGhpcy5jdWJlU3RhdGUuZHJiWzFdICsgdGhpcy5jdWJlU3RhdGUuZHJiWzBdICsgdGhpcy5jdWJlU3RhdGUuZHJiWzJdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kcmIgPSB0aGlzLmN1YmVTdGF0ZS5kYmxbMl0gKyB0aGlzLmN1YmVTdGF0ZS5kYmxbMF0gKyB0aGlzLmN1YmVTdGF0ZS5kYmxbMV07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRibCA9IHRtcFsyXSArIHRtcFsxXSArIHRtcFswXTtcbiAgICB9XG4gICAgVHdpc3RfUigpIHtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuY3ViZVN0YXRlLnVyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51ciA9IHRoaXMuY3ViZVN0YXRlLmZyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5mciA9IHRoaXMuY3ViZVN0YXRlLmRyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kciA9IHRoaXMuY3ViZVN0YXRlLnJiWzFdICsgdGhpcy5jdWJlU3RhdGUucmJbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnJiID0gdG1wWzFdICsgdG1wWzBdO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51cmI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVyYiA9IHRoaXMuY3ViZVN0YXRlLnVmclsxXSArIHRoaXMuY3ViZVN0YXRlLnVmclsyXSArIHRoaXMuY3ViZVN0YXRlLnVmclswXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWZyID0gdGhpcy5jdWJlU3RhdGUuZGZyWzFdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzBdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzJdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kZnIgPSB0aGlzLmN1YmVTdGF0ZS5kcmJbMl0gKyB0aGlzLmN1YmVTdGF0ZS5kcmJbMF0gKyB0aGlzLmN1YmVTdGF0ZS5kcmJbMV07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRyYiA9IHRtcFsyXSArIHRtcFsxXSArIHRtcFswXTtcbiAgICB9XG4gICAgO1xuICAgIFR3aXN0X0YoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51ZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWYgPSB0aGlzLmN1YmVTdGF0ZS5sZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUubGYgPSB0aGlzLmN1YmVTdGF0ZS5kZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGYgPSB0aGlzLmN1YmVTdGF0ZS5mclsxXSArIHRoaXMuY3ViZVN0YXRlLmZyWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5mciA9IHRtcFsxXSArIHRtcFswXTtcbiAgICAgICAgdG1wID0gdGhpcy5jdWJlU3RhdGUudWZyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51ZnIgPSB0aGlzLmN1YmVTdGF0ZS51bGZbMV0gKyB0aGlzLmN1YmVTdGF0ZS51bGZbMl0gKyB0aGlzLmN1YmVTdGF0ZS51bGZbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVsZiA9IHRoaXMuY3ViZVN0YXRlLmRsZlsxXSArIHRoaXMuY3ViZVN0YXRlLmRsZlswXSArIHRoaXMuY3ViZVN0YXRlLmRsZlsyXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGxmID0gdGhpcy5jdWJlU3RhdGUuZGZyWzJdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzBdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzFdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kZnIgPSB0bXBbMl0gKyB0bXBbMV0gKyB0bXBbMF07XG4gICAgfVxuICAgIFR3aXN0X0woKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51bDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWwgPSB0aGlzLmN1YmVTdGF0ZS5ibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuYmwgPSB0aGlzLmN1YmVTdGF0ZS5kbDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGwgPSB0aGlzLmN1YmVTdGF0ZS5sZlsxXSArIHRoaXMuY3ViZVN0YXRlLmxmWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5sZiA9IHRtcFsxXSArIHRtcFswXTtcbiAgICAgICAgdG1wID0gdGhpcy5jdWJlU3RhdGUudWxmO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51bGYgPSB0aGlzLmN1YmVTdGF0ZS51YmxbMV0gKyB0aGlzLmN1YmVTdGF0ZS51YmxbMl0gKyB0aGlzLmN1YmVTdGF0ZS51YmxbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVibCA9IHRoaXMuY3ViZVN0YXRlLmRibFsxXSArIHRoaXMuY3ViZVN0YXRlLmRibFswXSArIHRoaXMuY3ViZVN0YXRlLmRibFsyXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGJsID0gdGhpcy5jdWJlU3RhdGUuZGxmWzJdICsgdGhpcy5jdWJlU3RhdGUuZGxmWzBdICsgdGhpcy5jdWJlU3RhdGUuZGxmWzFdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kbGYgPSB0bXBbMl0gKyB0bXBbMV0gKyB0bXBbMF07XG4gICAgfVxuICAgIFR3aXN0X1UoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51bDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWwgPSB0aGlzLmN1YmVTdGF0ZS51ZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWYgPSB0aGlzLmN1YmVTdGF0ZS51cjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudXIgPSB0aGlzLmN1YmVTdGF0ZS51YjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWIgPSB0bXA7XG4gICAgICAgIHRtcCA9IHRoaXMuY3ViZVN0YXRlLnVsZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWxmID0gdGhpcy5jdWJlU3RhdGUudWZyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51ZnIgPSB0aGlzLmN1YmVTdGF0ZS51cmI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVyYiA9IHRoaXMuY3ViZVN0YXRlLnVibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWJsID0gdG1wO1xuICAgIH1cbiAgICBUd2lzdF9EKCkge1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5jdWJlU3RhdGUuZGw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRsID0gdGhpcy5jdWJlU3RhdGUuZGI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRiID0gdGhpcy5jdWJlU3RhdGUuZHI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRyID0gdGhpcy5jdWJlU3RhdGUuZGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRmID0gdG1wO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS5kbGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRsZiA9IHRoaXMuY3ViZVN0YXRlLmRibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGJsID0gdGhpcy5jdWJlU3RhdGUuZHJiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kcmIgPSB0aGlzLmN1YmVTdGF0ZS5kZnI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRmciA9IHRtcDtcbiAgICB9XG4gICAgVHdpc3RfWSgpIHtcbiAgICAgICAgdGhpcy5Ud2lzdF9VKCk7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS5sZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUubGYgPSB0aGlzLmN1YmVTdGF0ZS5mcjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZnIgPSB0aGlzLmN1YmVTdGF0ZS5yYjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUucmIgPSB0aGlzLmN1YmVTdGF0ZS5ibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuYmwgPSB0bXA7XG4gICAgICAgIHRtcCA9IHRoaXMuY3ViZVN0YXRlLmY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmYgPSB0aGlzLmN1YmVTdGF0ZS5yO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5yID0gdGhpcy5jdWJlU3RhdGUuYjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuYiA9IHRoaXMuY3ViZVN0YXRlLmw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmwgPSB0bXA7XG4gICAgICAgIHRoaXMuVHdpc3RfRCgpLCB0aGlzLlR3aXN0X0QoKSwgdGhpcy5Ud2lzdF9EKCk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG9yZGVyX2xpc3QpIHtcbiAgICAgICAgZm9yIChjb25zdCBvcmRlciBvZiBvcmRlcl9saXN0KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9EKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9EKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJVXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfVSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9VKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfVSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0woKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9MKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfTCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0woKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkZcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9GKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0YoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9GKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJSXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfUigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiclwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9SKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfUigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQlwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0IoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9CKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfQigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0IoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9ZKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfWSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9ZKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEJsb2NrUG9zKGJsb2NrKSB7XG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoXCJeW1wiICsgYmxvY2sgKyBcIl17XCIgKyBibG9jay5sZW5ndGggKyBcIn0kXCIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLmN1YmVTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3ViZVN0YXRlW2tdLm1hdGNoKHJlZykpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJrXCJdID0gaztcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJ2XCJdID0gdGhpcy5jdWJlU3RhdGVba107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBGSVJTVF9MQVlFUl9FREdFU19TSU5HTEUoYmxvY2tfcG9zLCBibG9ja19jb2xvcikge1xuICAgICAgICBsZXQgZXhwID0gXCJcIiwgZXhwX2xvZyA9IFwiXCI7XG4gICAgICAgIGxldCBzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgcyA9IHRoaXMuZ2V0QmxvY2tQb3MoYmxvY2tfY29sb3IpO1xuICAgICAgICAgICAgaWYgKHMuay5pbmRleE9mKFwiZFwiKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChzLnZbMF0gPT0gYmxvY2tfY29sb3JbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuayA9PSBibG9ja19wb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwX2xvZztcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHMuay5pbmRleE9mKFwidVwiKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChzLmtbMV0gPT0gYmxvY2tfcG9zWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnZbMF0gPT0gYmxvY2tfY29sb3JbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0udG9VcHBlckNhc2UoKSArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZVtibG9ja19wb3NbMF0gKyB0aGlzLm5leHRGYWNlW3Mua1sxXV1dICE9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1YmVTdGF0ZVtibG9ja19wb3NbMF1dICsgdGhpcy5jdWJlU3RhdGVbdGhpcy5uZXh0RmFjZVtzLmtbMV1dXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IFwidVwiICsgdGhpcy5uZXh0RmFjZVtzLmtbMV1dICsgcy5rWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IFwidVwiICsgdGhpcy5uZXh0RmFjZVtzLmtbMV1dICsgcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyB0aGlzLm5leHRGYWNlW3Mua1sxXV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLnZbMF0gPT0gYmxvY2tfY29sb3JbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMua1sxXSA9PSBibG9ja19wb3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV07XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlW2Jsb2NrX3Bvc1swXSArIHMua1sxXV0gIT0gdGhpcy5jdWJlU3RhdGVbYmxvY2tfcG9zWzBdXSArIHRoaXMuY3ViZVN0YXRlW3Mua1sxXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyBcIlVcIiArIHMua1sxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmtbMF0gPT0gYmxvY2tfcG9zWzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlW2Jsb2NrX3Bvc1swXSArIHMua1swXV0gIT0gdGhpcy5jdWJlU3RhdGVbYmxvY2tfcG9zWzBdXSArIHRoaXMuY3ViZVN0YXRlW3Mua1swXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMF07XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1swXSArIFwiVVwiICsgcy5rWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwX2xvZyArPSBleHA7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBMYXllciBDcm9zcyBTaW5nbGUgRXJyb3I6IFwiLCBleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIFwiRmlyc3QgTGF5ZXIgQ3Jvc3MgU2luZ2xlIEVycm9yOiBcIiArIGV4cF9sb2c7XG4gICAgfVxuICAgIEZJUlNUX0xBWUVSX0NPUk5FUlNfU0lOR0xFKGJsb2NrX3BvcywgYmxvY2tfY29sb3IpIHtcbiAgICAgICAgbGV0IGV4cCA9IFwiXCIsIGV4cF9sb2cgPSBcIlwiLCBzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSB0aGlzLmdldEJsb2NrUG9zKGJsb2NrX2NvbG9yKTtcbiAgICAgICAgICAgIGlmIChzLmsuaW5kZXhPZihcImRcIikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAocy52WzBdID09IHRoaXMuY3ViZVN0YXRlW1wiZFwiXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5rID09IGJsb2NrX3BvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBfbG9nO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0gKyBcIlVcIiArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnZbMV0gPT0gdGhpcy5jdWJlU3RhdGVbXCJkXCJdKVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0gKyBcInVcIiArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzJdLnRvVXBwZXJDYXNlKCkgKyBcIlVcIiArIHMua1syXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLmsgPT0gXCJ1XCIgKyBibG9ja19wb3NbMV0gKyBibG9ja19wb3NbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMudlswXSA9PSB0aGlzLmN1YmVTdGF0ZVtcImRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMl0udG9VcHBlckNhc2UoKSArIFwidVwiICsgcy5rWzJdO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnZbMV0gPT0gdGhpcy5jdWJlU3RhdGVbXCJkXCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdICsgXCJ1XCIgKyBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzJdLnRvVXBwZXJDYXNlKCkgKyBcIlVcIiArIHMua1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cF9sb2cgKz0gZXhwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgTGF5ZXIgQ29ybmVycyBTaW5nbGUgRXJyb3I6IFwiLCBleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIFwiRmlyc3QgTGF5ZXIgQ29ybmVycyBTaW5nbGUgRXJyb3I6IFwiICsgZXhwX2xvZztcbiAgICB9XG4gICAgO1xuICAgIFNFQ09ORF9MQVlFUl9TSU5HTEUoKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrX2NvbG9yID0gdGhpcy5jdWJlU3RhdGVbXCJmXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJyXCJdO1xuICAgICAgICBsZXQgZXhwID0gXCJcIiwgZXhwX2xvZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5nZXRCbG9ja1BvcyhibG9ja19jb2xvcik7XG4gICAgICAgICAgICBpZiAocy5rLmluZGV4T2YoXCJ1XCIpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMua1sxXSA9PSAncicgJiYgcy52WzFdID09IHRoaXMuY3ViZVN0YXRlW1wiclwiXSkge1xuICAgICAgICAgICAgICAgICAgICBleHAgPSBcInVmVUZVUnVyXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMua1sxXSA9PSAnZicgJiYgcy52WzFdID09IHRoaXMuY3ViZVN0YXRlW1wiZlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVSdXJ1ZlVGXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocy52WzBdID09IHRoaXMuY3ViZVN0YXRlW3Mua1swXV0gJiYgcy52WzFdID09IHRoaXMuY3ViZVN0YXRlW3Mua1sxXV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBfbG9nO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gXCJ1XCIgKyBzLmtbMF0gKyBcIlVcIiArIHMua1swXS50b1VwcGVyQ2FzZSgpICsgXCJVXCIgKyBzLmtbMV0udG9VcHBlckNhc2UoKSArIFwidVwiICsgcy5rWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwX2xvZyArPSBleHA7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJTZWNvbmQgTGF5ZXIgU2luZ2xlIEVycm9yOiBcIiwgZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiBcIlNlY29uZCBMYXllciBTaW5nbGUgRXJyb3I6IFwiICsgZXhwX2xvZztcbiAgICB9XG4gICAgRklSU1RfTEFZRVJfRURHRVMoZGVsYXllZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLSBDT01QTEVURSBUSEUgRklSU1QgTEFZRVIgRURHRVMgLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBsZXQgb3JkZXIgPSBcIlwiO1xuICAgICAgICBpZiAoZGVsYXllZCA9PSBcInoyXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIgKz0gdGhpcy5GSVJTVF9MQVlFUl9FREdFU19TSU5HTEUoXCJkZlwiLCB0aGlzLmN1YmVTdGF0ZVtcImRcIl0gKyB0aGlzLmN1YmVTdGF0ZVtcImZcIl0pO1xuICAgICAgICAgICAgICAgIG9yZGVyICs9IFwieVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXCJ5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbGF5ZWQgPT0gXCJ4MlwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG9yZGVyICs9IHRoaXMuRklSU1RfTEFZRVJfRURHRVNfU0lOR0xFKFwiZGJcIiwgdGhpcy5jdWJlU3RhdGVbXCJkXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJiXCJdKTtcbiAgICAgICAgICAgICAgICBvcmRlciArPSBcInlcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwieVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhvcmRlcik7XG4gICAgfVxuICAgIDtcbiAgICBGSVJTVF9MQVlFUl9DT1JORVJTKGRlbGF5ZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIEZJUlNUIExBWUVSIENPUk5FUlMgLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBsZXQgb3JkZXIgPSBcIlwiO1xuICAgICAgICBpZiAoZGVsYXllZCA9PSBcInoyXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIgKz0gdGhpcy5GSVJTVF9MQVlFUl9DT1JORVJTX1NJTkdMRShcImRsZlwiLCB0aGlzLmN1YmVTdGF0ZVtcImRcIl0gKyB0aGlzLmN1YmVTdGF0ZVtcImxcIl0gKyB0aGlzLmN1YmVTdGF0ZVtcImZcIl0pO1xuICAgICAgICAgICAgICAgIG9yZGVyICs9IFwieVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXCJ5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbGF5ZWQgPT0gXCJ4MlwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG9yZGVyICs9IHRoaXMuRklSU1RfTEFZRVJfQ09STkVSU19TSU5HTEUoXCJkcmJcIiwgdGhpcy5jdWJlU3RhdGVbXCJkXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJyXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJiXCJdKTtcbiAgICAgICAgICAgICAgICBvcmRlciArPSBcInlcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwieVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhvcmRlcik7XG4gICAgfVxuICAgIFNFQ09ORF9MQVlFUigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIFNFQ09ORCBMQVlFUiAtLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGxldCBvcmRlciA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBvcmRlciArPSB0aGlzLlNFQ09ORF9MQVlFUl9TSU5HTEUoKTtcbiAgICAgICAgICAgIG9yZGVyICs9IFwiWVwiO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcIllcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3Mob3JkZXIpO1xuICAgIH1cbiAgICA7XG4gICAgVE9QX0NST1NTKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLSBDT01QTEVURSBUSEUgVE9QIENST1NTIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IGV4cCA9IFwiXCIsIGV4cF9sb2cgPSBcIlwiO1xuICAgICAgICBsZXQgdWMgPSB0aGlzLmN1YmVTdGF0ZVtcInVcIl07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdWJlU3RhdGUudWxbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudXJbMF0gPT0gdWNcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmN1YmVTdGF0ZS51ZlswXSA9PSB1YyAmJiB0aGlzLmN1YmVTdGF0ZS51YlswXSA9PSB1YylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhleHBfbG9nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1YmVTdGF0ZS51YlswXSA9PSB1YyAmJiB0aGlzLmN1YmVTdGF0ZS51bFswXSA9PSB1YylcbiAgICAgICAgICAgICAgICBleHAgPSBcInJ1ZlVGUlwiO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWJlU3RhdGUudWZbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudWJbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgZXhwID0gXCJyZnVGVVJcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlLnVsWzBdID09IHVjICYmIHRoaXMuY3ViZVN0YXRlLnVyWzBdID09IHVjKVxuICAgICAgICAgICAgICAgIGV4cCA9IFwiWVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWJlU3RhdGUudWZbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudXJbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgZXhwID0gXCJZWVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWJlU3RhdGUudXJbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudWJbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgZXhwID0gXCJZXCI7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZS51bFswXSA9PSB1YyAmJiB0aGlzLmN1YmVTdGF0ZS51ZlswXSA9PSB1YylcbiAgICAgICAgICAgICAgICBleHAgPSBcInlcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBleHAgPSBcInJ1ZlVGUlVyZnVGVVJcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gZXhwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9wIENyb3NzIEVycm9yOiBcIiwgZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiBcIlRvcCBDcm9zcyBFcnJvcjogXCIgKyBleHBfbG9nO1xuICAgIH1cbiAgICA7XG4gICAgVEhJUkRfTEFZRVJfQ09STkVSU19QT1MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tIENPTVBMRVRFIFRIRSBUSElSRCBMQVlFUiBDT1JORVJTIChQT1NJVElPTikgLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBjb25zdCBzdGVwID0gXCJyTFVsdVJVTHVsXCIsIGJsb2NrcyA9IFtcInVsZlwiLCBcInVmclwiLCBcInVyYlwiLCBcInVibFwiXSwgdWMgPSB0aGlzLmN1YmVTdGF0ZVtcInVcIl07XG4gICAgICAgIGxldCBleHBfbG9nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsYXN0ID0gaTtcbiAgICAgICAgICAgIGxldCB0aW1lcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBpICsgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGogJSA0O1xuICAgICAgICAgICAgICAgIGxldCBsYXN0YyA9IHRoaXMuY3ViZVN0YXRlW2Jsb2Nrc1tsYXN0XV0ucmVwbGFjZSh1YywgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRjID0gdGhpcy5jdWJlU3RhdGVbYmxvY2tzW25leHRdXS5yZXBsYWNlKHVjLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXh0Q29sb3JbbGFzdGNbMF1dID09IGxhc3RjWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Yy5pbmRleE9mKGxhc3RjWzFdKSAhPSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbmV4dGMuaW5kZXhPZih0aGlzLm5leHRDb2xvcltsYXN0Y1sxXV0pICE9IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dGMuaW5kZXhPZihsYXN0Y1swXSkgIT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG5leHRjLmluZGV4T2YodGhpcy5uZXh0Q29sb3JbbGFzdGNbMF1dKSAhPSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGFzdCA9IChsYXN0IC0gMSArIDQpICUgNDtcbiAgICAgICAgICAgICAgICBpZiAobGFzdCA9PSAwKVxuICAgICAgICAgICAgICAgICAgICBleHBfbG9nID0gXCJ1XCIgKyBzdGVwLCB0aGlzLmNoYW5nZVN0YXRlKGV4cF9sb2cpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxhc3QgPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgZXhwX2xvZyA9IHN0ZXAsIHRoaXMuY2hhbmdlU3RhdGUoZXhwX2xvZyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdCA9PSAyKVxuICAgICAgICAgICAgICAgICAgICBleHBfbG9nID0gXCJVXCIgKyBzdGVwLCB0aGlzLmNoYW5nZVN0YXRlKGV4cF9sb2cpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxhc3QgPT0gMylcbiAgICAgICAgICAgICAgICAgICAgZXhwX2xvZyA9IFwiVVVcIiArIHN0ZXAsIHRoaXMuY2hhbmdlU3RhdGUoZXhwX2xvZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3MoZXhwX2xvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lcyA+IDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3MoZXhwX2xvZyk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwX2xvZyA9IHN0ZXAgKyBcIlVcIiArIHN0ZXA7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXByZXNzKGV4cF9sb2cpO1xuICAgIH1cbiAgICBUSElSRF9MQVlFUl9DT1JORVJTX09SSSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIFRISVJEIExBWUVSIENPUk5FUlMgKE9SSUVOVCkgLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBjb25zdCBzdGVwMSA9IFwicnVSdXJ1dVJ1dVwiLCBzdGVwMiA9IFwiRlVmVUZVVWZVVVwiO1xuICAgICAgICBjb25zdCBibG9ja3MgPSBbXCJ1bGZcIiwgXCJ1ZnJcIiwgXCJ1cmJcIiwgXCJ1YmxcIl0sIHVjID0gdGhpcy5jdWJlU3RhdGVbXCJ1XCJdO1xuICAgICAgICBsZXQgZXhwX2xvZyA9IFwiXCIsIHMgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2NrcylcbiAgICAgICAgICAgIHMgKz0gdGhpcy5jdWJlU3RhdGVbYmxvY2tdLmluZGV4T2YodWMpO1xuICAgICAgICBpZiAocy5tYXRjaCgvMjIyMHwwMjIyfDIwMjJ8MjIwMi8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjAyMjJcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjIwMjJcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIyMjAyXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcInVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvMTExMHwwMTExfDEwMTF8MTEwMS8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjAxMTFcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjEwMTFcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIxMTAxXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcInVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvMjAwMXwxMjAwfDAxMjB8MDAxMi8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjEyMDBcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjAxMjBcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIwMDEyXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcInVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDEgKyBcIlVcIiArIHN0ZXAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goLzEwMDJ8MjEwMHwwMjEwfDAwMjEvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIyMTAwXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIwMjEwXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMDAyMVwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJ1XCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAyICsgXCJVXCIgKyBzdGVwMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC8yMTIxfDEyMTIvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIxMjEyXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDIgKyBcIlVVXCIgKyBzdGVwMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC8yMTEyfDIyMTF8MTIyMXwxMTIyLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMjIxMVwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMTIyMVwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjExMjJcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwidVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMSArIFwiVVwiICsgc3RlcDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvMDIwMXwxMDIwLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMTAyMFwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAxICsgXCJVVVwiICsgc3RlcDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvMDEwMnwyMDEwLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMjAxMFwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAyICsgXCJVVVwiICsgc3RlcDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3MoZXhwX2xvZyk7XG4gICAgfVxuICAgIFRISVJEX0xBWUVSX0VER0VTKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLSBDT01QTEVURSBUSEUgVEhJUkQgTEFZRVIgRURHRVMgLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBjb25zdCBzdGVwMSA9IFwicnVSdXJ1dVJ1dVwiLCBzdGVwMiA9IFwiRlVmVUZVVWZVVVwiO1xuICAgICAgICBsZXQgZXhwX2xvZyA9IFwiXCI7XG4gICAgICAgIHdoaWxlICh0aGlzLmN1YmVTdGF0ZS51bGZbMl0gIT0gdGhpcy5jdWJlU3RhdGUuZikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcIlVcIik7XG4gICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZXhwID0gXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLmN1YmVTdGF0ZS51ZlsxXSArIHRoaXMuY3ViZVN0YXRlLnVyWzFdICsgdGhpcy5jdWJlU3RhdGUudWJbMV0gKyB0aGlzLmN1YmVTdGF0ZS51bFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmN1YmVTdGF0ZS5mICsgdGhpcy5jdWJlU3RhdGUuciArIHRoaXMuY3ViZVN0YXRlLmIgKyB0aGlzLmN1YmVTdGF0ZS5sO1xuICAgICAgICAgICAgbGV0IHRpbWVzID0gMCwgcG9zID0gLTE7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzW2pdID09IGNbal0pXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzKyssIHBvcyA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZXMgPiAxKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXByZXNzKGV4cF9sb2cpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGltZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChwb3MgPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgZXhwICs9IFwiWVwiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvcyA9PSAyKVxuICAgICAgICAgICAgICAgICAgICBleHAgKz0gXCJZWVwiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvcyA9PSAzKVxuICAgICAgICAgICAgICAgICAgICBleHAgKz0gXCJ5XCI7XG4gICAgICAgICAgICAgICAgaWYgKHNbKHBvcyArIDEpICUgNF0gPT0gdGhpcy5uZXh0Q29sb3JbdGhpcy5uZXh0Q29sb3Jbc1twb3NdXV0pXG4gICAgICAgICAgICAgICAgICAgIGV4cCArPSBzdGVwMSArIHN0ZXAyO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwICs9IFwieVwiICsgc3RlcDIgKyBzdGVwMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBleHAgKz0gc3RlcDEgKyBzdGVwMjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gZXhwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcmQgTGF5ZXIgRWRnZXMgRXJyb3I6IFwiLCBleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIFwiVGhpcmQgTGF5ZXIgRWRnZXMgRXJyb3I6IFwiICsgZXhwX2xvZztcbiAgICB9XG4gICAgc29sdmVDdWJlKGRlbGF5ZWQpIHtcbiAgICAgICAgbGV0IHN0ZXBzID0gW107XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5GSVJTVF9MQVlFUl9FREdFUyhkZWxheWVkKSk7XG4gICAgICAgIHN0ZXBzLnB1c2goXCJ+XCIpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuRklSU1RfTEFZRVJfQ09STkVSUyhkZWxheWVkKSk7XG4gICAgICAgIHN0ZXBzLnB1c2goXCJ+XCIpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuU0VDT05EX0xBWUVSKCkpO1xuICAgICAgICBzdGVwcy5wdXNoKFwiflwiKTtcbiAgICAgICAgc3RlcHMucHVzaCh0aGlzLlRPUF9DUk9TUygpKTtcbiAgICAgICAgc3RlcHMucHVzaChcIn5cIik7XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5USElSRF9MQVlFUl9DT1JORVJTX1BPUygpKTtcbiAgICAgICAgc3RlcHMucHVzaChcIn5cIik7XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5USElSRF9MQVlFUl9DT1JORVJTX09SSSgpKTtcbiAgICAgICAgc3RlcHMucHVzaChcIn5cIik7XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5USElSRF9MQVlFUl9FREdFUygpKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzO1xuICAgIH1cbiAgICA7XG4gICAgY29tcHJlc3Mob3JkZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL3VVfFV1fGREfERkfGxMfExsfGZGfEZmfHJSfFJyfGJCfEJifHlZfFl5fHV1dXV8ZGRkZHxsbGxsfGZmZmZ8cnJycnxiYmJifHl5eXl8VVVVVXxEREREfExMTEx8RkZGRnxSUlJSfEJCQkJ8WVlZWS9nLCBcIlwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvdXV1L2csIFwiVVwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvZGRkL2csIFwiRFwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvbGxsL2csIFwiTFwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvZmZmL2csIFwiRlwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvcnJyL2csIFwiUlwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvYmJiL2csIFwiQlwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgveXl5L2csIFwiWVwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvVVVVL2csIFwidVwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvREREL2csIFwiZFwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvTExML2csIFwibFwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvRkZGL2csIFwiZlwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvUlJSL2csIFwiclwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvQkJCL2csIFwiYlwiKTtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvWVlZL2csIFwieVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JkZXI7XG4gICAgfVxuICAgIHNvbHZlKHN0YXRlLCBkZWxheWVkKSB7XG4gICAgICAgIHRoaXMuZ2V0Q3ViZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29sdmVDdWJlKGRlbGF5ZWQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUd2lzdCB7XG4gICAgY29uc3RydWN0b3IoZGVwYXR1cmUsIGFycml2YWwsIGR1cmF0aW9uLCBjYWxsYmFja19mdW5jKSB7XG4gICAgICAgIHRoaXMuZGVwYXJ0dXJlID0gZGVwYXR1cmU7XG4gICAgICAgIHRoaXMuYXJyaXZhbCA9IGFycml2YWw7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5jYWxsYmFja19mdW5jID0gY2FsbGJhY2tfZnVuYztcbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuYXJyaXZhbDtcbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGZyYWMgPSBNYXRoLm1pbihNYXRoLm1heCgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0KSAvIHRoaXMuZHVyYXRpb24sIDApLCAxKTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZnJhYyA9PSAxID8gdGhpcy5hcnJpdmFsIDogKHRoaXMuZGVwYXJ0dXJlICsgKHRoaXMuYXJyaXZhbCAtIHRoaXMuZGVwYXJ0dXJlKSAqICgxIC0gKDEgLSBmcmFjKSAqICgxIC0gZnJhYykpKTtcbiAgICB9XG4gICAgY2FsbGJhY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrX2Z1bmModGhpcy5jdXJyZW50KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVHdpc3RlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHdpc3RzID0gW107XG4gICAgICAgIHRoaXMubG9vcCgpO1xuICAgIH1cbiAgICBsb29wKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBjdXIgPSAwO1xuICAgICAgICBsZXQgZW5kID0gdGhpcy50d2lzdHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoY3VyIDwgZW5kKSB7XG4gICAgICAgICAgICB0aGlzLnR3aXN0c1tjdXJdLnVwZGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudHdpc3RzW2N1cl0uY2FsbGJhY2soKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHdpc3RzLnNwbGljZShjdXIsIDEpO1xuICAgICAgICAgICAgICAgIGVuZC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VyKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluaXNoKHR3aXN0ID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0d2lzdCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR3aXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR3aXN0c1tpXSA9PSB0d2lzdCkge1xuICAgICAgICAgICAgICAgICAgICB0d2lzdC5maW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2lzdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0d2lzdHMgPSB0aGlzLnR3aXN0cy5zcGxpY2UoMCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHR3aXN0IG9mIHR3aXN0cykge1xuICAgICAgICAgICAgICAgIHR3aXN0LmZpbmlzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhbmNlbCh0d2lzdCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHdpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50d2lzdHNbaV0gPT0gdHdpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR3aXN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNUd2lzdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHdpc3RzLmxlbmd0aCAhPSAwO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCB0d2lzdGVyID0gbmV3IFR3aXN0ZXIoKTtcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRmFjZSwgRnJhbWUsIFN0aWNrZXIgfSBmcm9tIFwiLi91dGlsc19pbnRlcm5hbFwiO1xuZXhwb3J0IGNvbnN0IGN1YmVfY29uZmlnID0ge1xuICAgIHNwZWVkOiAzLFxuICAgIHNlbnNpYmlsaXR5OiAyNSxcbiAgICBzY3JhbWJsZV9zdGVwczogMjAsXG4gICAgc29sdmVySWQ6IDEsXG59O1xuZXhwb3J0IGNvbnN0IHR3aXN0X2R1cmF0aW9uID0gKHNwZWVkKSA9PiB7XG4gICAgcmV0dXJuIDM2MDAgLyAoMyArIHNwZWVkKTtcbn07XG5leHBvcnQgY29uc3QgY3ViZWxldF9jb2xvcnMgPSB7XG4gICAgUjogXCIjQjcxQzFDXCIsXG4gICAgTDogXCIjRkY2RDAwXCIsXG4gICAgVTogXCIjRjBGMEYwXCIsXG4gICAgRDogXCIjRkZENjAwXCIsXG4gICAgRjogXCIjMDBBMDIwXCIsXG4gICAgQjogXCIjMEQ0N0ExXCIsXG4gICAgY29yZTogXCIjMjAyMDIwXCIsXG4gICAgZ3JheTogXCIjODA4MDgwXCIsXG4gICAgaGlnaDogXCIjRkYwMDgwXCIsXG59O1xuZXhwb3J0IGNvbnN0IGN1YmVsZXRfZGVmcyA9IHtcbiAgICBzaXplOiA2NCxcbiAgICBfYm9yZGVyX3dpZHRoOiAzLFxuICAgIF9lZGdlX3dpZHRoOiAyLFxuICAgIF9zdGlja2VyX2RlcHRoOiAwLjEsXG59O1xuZXhwb3J0IGNvbnN0IGN1YmVsZXRfZnJhbWUgPSBuZXcgRnJhbWUoY3ViZWxldF9kZWZzLnNpemUsIGN1YmVsZXRfZGVmcy5fYm9yZGVyX3dpZHRoKTtcbmV4cG9ydCBjb25zdCBjdWJlbGV0X2xhbWJlcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGN1YmVsZXRfY29sb3JzKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogY3ViZWxldF9jb2xvcnNba2V5XSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pKCk7XG5leHBvcnQgY29uc3QgY3ViZWxldF9jb3JlID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICBjb2xvcjogY3ViZWxldF9jb2xvcnMuY29yZSxcbiAgICBzcGVjdWxhcjogY3ViZWxldF9jb2xvcnMuZ3JheSxcbiAgICBzaGluaW5lc3M6IDIsXG59KTtcbmV4cG9ydCBjb25zdCBjdWJlbGV0X3N0aWNrZXIgPSBuZXcgU3RpY2tlcihjdWJlbGV0X2RlZnMuc2l6ZSAtIDIgKiBjdWJlbGV0X2RlZnMuX2JvcmRlcl93aWR0aCAtIGN1YmVsZXRfZGVmcy5fZWRnZV93aWR0aCwgY3ViZWxldF9kZWZzLl9zdGlja2VyX2RlcHRoKTtcbmV4cG9ydCBjb25zdCBjdWJlbGV0X2ZhY2VfYXR0cnMgPSBbXG4gICAge1xuICAgICAgICBtYXRjaDogKHZlY3RvcikgPT4geyByZXR1cm4gdmVjdG9yLnggPT0gLTE7IH0sXG4gICAgICAgIGxhbWJlcnQ6IGN1YmVsZXRfbGFtYmVycy5MLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoLWN1YmVsZXRfZGVmcy5zaXplIC8gMiwgMCwgMCksXG4gICAgICAgIHJvdGF0aW9uOiBuZXcgVmVjdG9yMygwLCAtTWF0aC5QSSAvIDIsIDApLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogKHZlY3RvcikgPT4geyByZXR1cm4gdmVjdG9yLnggPT0gMTsgfSxcbiAgICAgICAgbGFtYmVydDogY3ViZWxldF9sYW1iZXJzLlIsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMyhjdWJlbGV0X2RlZnMuc2l6ZSAvIDIsIDAsIDApLFxuICAgICAgICByb3RhdGlvbjogbmV3IFZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIDApLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogKHZlY3RvcikgPT4geyByZXR1cm4gdmVjdG9yLnkgPT0gLTE7IH0sXG4gICAgICAgIGxhbWJlcnQ6IGN1YmVsZXRfbGFtYmVycy5ELFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMCwgLWN1YmVsZXRfZGVmcy5zaXplIC8gMiwgMCksXG4gICAgICAgIHJvdGF0aW9uOiBuZXcgVmVjdG9yMyhNYXRoLlBJIC8gMiwgMCwgMCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAodmVjdG9yKSA9PiB7IHJldHVybiB2ZWN0b3IueSA9PSAxOyB9LFxuICAgICAgICBsYW1iZXJ0OiBjdWJlbGV0X2xhbWJlcnMuVSxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIGN1YmVsZXRfZGVmcy5zaXplIC8gMiwgMCksXG4gICAgICAgIHJvdGF0aW9uOiBuZXcgVmVjdG9yMygtTWF0aC5QSSAvIDIsIDAsIDApLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogKHZlY3RvcikgPT4geyByZXR1cm4gdmVjdG9yLnogPT0gLTE7IH0sXG4gICAgICAgIGxhbWJlcnQ6IGN1YmVsZXRfbGFtYmVycy5CLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMCwgMCwgLWN1YmVsZXRfZGVmcy5zaXplIC8gMiksXG4gICAgICAgIHJvdGF0aW9uOiBuZXcgVmVjdG9yMyhNYXRoLlBJLCAwLCAwKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICh2ZWN0b3IpID0+IHsgcmV0dXJuIHZlY3Rvci56ID09IDE7IH0sXG4gICAgICAgIGxhbWJlcnQ6IGN1YmVsZXRfbGFtYmVycy5GLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMCwgMCwgY3ViZWxldF9kZWZzLnNpemUgLyAyKSxcbiAgICAgICAgcm90YXRpb246IG5ldyBWZWN0b3IzKDIgKiBNYXRoLlBJLCAwLCAwKSxcbiAgICB9LFxuXTtcbmV4cG9ydCBjb25zdCBjdWJlX3NpemUgPSBjdWJlbGV0X2RlZnMuc2l6ZSAqIDM7XG5leHBvcnQgY29uc3QgYXhpc192ZWN0b3JzID0ge1xuICAgIGE6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLFxuICAgIHg6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICB5OiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCksXG4gICAgejogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgLTEpLFxufTtcbmV4cG9ydCBjb25zdCBheGlzX3BsYW5lcyA9IHtcbiAgICB4OiBuZXcgVEhSRUUuUGxhbmUobmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksIC1jdWJlX3NpemUgLyAyKSxcbiAgICB5OiBuZXcgVEhSRUUuUGxhbmUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIC1jdWJlX3NpemUgLyAyKSxcbiAgICB6OiBuZXcgVEhSRUUuUGxhbmUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSksIC1jdWJlX3NpemUgLyAyKVxufTtcbmV4cG9ydCBjb25zdCBpbmRleFRvRGlyZWN0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKGluZGV4ICUgMyAtIDEsIE1hdGguZmxvb3IoaW5kZXggLyAzKSAlIDMgLSAxLCBNYXRoLmZsb29yKGluZGV4IC8gOSkgLSAxKTtcbn07XG5leHBvcnQgY29uc3QgZGlyZWN0aW9uVG9JbmRleCA9IChkcmN0bikgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChkcmN0bi54ICsgMSkgKyAoZHJjdG4ueSArIDEpICogMyArIChkcmN0bi56ICsgMSkgKiA5KTtcbn07XG5leHBvcnQgY29uc3QgaW5kZXhUb0xheWVyID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0geyB4OiBpbmRleCAlIDMsIHk6IE1hdGguZmxvb3IoaW5kZXggLyAzKSAlIDMsIHo6IE1hdGguZmxvb3IoaW5kZXggLyA5KSB9O1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGNvbnN0IHdvcmxkVG9JbmRleCA9IChwb2ludCkgPT4ge1xuICAgIGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCkuY29weShwb2ludCk7XG4gICAgdmVjdG9yLmFkZChuZXcgVmVjdG9yMygpLnNldFNjYWxhcihjdWJlX3NpemUgLyAyKSk7XG4gICAgdmVjdG9yLmRpdmlkZVNjYWxhcihjdWJlX3NpemUpLm11bHRpcGx5U2NhbGFyKDMpLmZsb29yKCk7XG4gICAgdmVjdG9yLm1heChuZXcgVmVjdG9yMygpLnNldFNjYWxhcigwKSk7XG4gICAgdmVjdG9yLm1pbihuZXcgVmVjdG9yMygpLnNldFNjYWxhcigyKSk7XG4gICAgcmV0dXJuIHZlY3Rvci54ICsgdmVjdG9yLnkgKiAzICsgdmVjdG9yLnogKiA5O1xufTtcbmV4cG9ydCBjb25zdCBmYWNlUG9zdGlvbkJpbmRpbmdzID0gW1xuICAgIHtcbiAgICAgICAgZmFjZTogRmFjZS5MLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIDApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZhY2U6IEZhY2UuUixcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZhY2U6IEZhY2UuRCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKVxuICAgIH0sXG4gICAge1xuICAgICAgICBmYWNlOiBGYWNlLlUsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKVxuICAgIH0sXG4gICAge1xuICAgICAgICBmYWNlOiBGYWNlLkIsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSlcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmFjZTogRmFjZS5GLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSlcbiAgICB9LFxuXTtcbmV4cG9ydCBjb25zdCBzdHJpbmdUb1R3aXN0UGFyYW1zID0ge1xuICAgIFwiTFwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIkwnXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJMMlwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwiUlwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiUidcIjogeyBheGlzOiAneCcsIGxheWVyczogWzJdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJSMlwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJGXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsyXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJGJ1wiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIkYyXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsyXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcIkJcIjogeyBheGlzOiAneicsIGxheWVyczogWzBdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJCJ1wiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiQjJcIjogeyBheGlzOiAneicsIGxheWVyczogWzBdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcIlVcIjogeyBheGlzOiAneScsIGxheWVyczogWzJdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIlUnXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsyXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiVTJcIjogeyBheGlzOiAneScsIGxheWVyczogWzJdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwiRFwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIkQnXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJEMlwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwiflwiOiB7IGF4aXM6ICdhJywgbGF5ZXJzOiBbXSwgYW5nbGU6IDAgfSxcbiAgICBcInhcIjogeyBheGlzOiAneCcsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIngnXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwieDJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwieVwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwieSdcIjogeyBheGlzOiAneScsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJ5MlwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJ6XCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJ6J1wiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcInoyXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcImxcIjogeyBheGlzOiAneCcsIGxheWVyczogWzAsIDFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJsJ1wiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwibDJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzAsIDFdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcInJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzIsIDFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcInInXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwicjJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzIsIDFdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwiZlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiZidcIjogeyBheGlzOiAneicsIGxheWVyczogWzIsIDFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJmMlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJiXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiYidcIjogeyBheGlzOiAneicsIGxheWVyczogWzAsIDFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcImIyXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJ1XCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJ1J1wiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcInUyXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcImRcIjogeyBheGlzOiAneScsIGxheWVyczogWzAsIDFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJkJ1wiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiZDJcIjogeyBheGlzOiAneScsIGxheWVyczogWzAsIDFdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcIkVcIjogeyBheGlzOiAneScsIGxheWVyczogWzFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJFJ1wiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiRTJcIjogeyBheGlzOiAneScsIGxheWVyczogWzFdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcIk1cIjogeyBheGlzOiAneCcsIGxheWVyczogWzFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJNJ1wiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiTTJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzFdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcIlNcIjogeyBheGlzOiAneicsIGxheWVyczogWzFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIlMnXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiUzJcIjogeyBheGlzOiAneicsIGxheWVyczogWzFdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwiXCI6IHsgYXhpczogJ2EnLCBsYXllcnM6IFtdLCBhbmdsZTogMCB9LFxufTtcbmV4cG9ydCBjb25zdCBsYmxPcmRlck1hcHBpbmcgPSB7XG4gICAgXCJVXCI6IFwiVVwiLFxuICAgIFwidVwiOiBcIlUnXCIsXG4gICAgXCJEXCI6IFwiRFwiLFxuICAgIFwiZFwiOiBcIkQnXCIsXG4gICAgXCJGXCI6IFwiRlwiLFxuICAgIFwiZlwiOiBcIkYnXCIsXG4gICAgXCJMXCI6IFwiTFwiLFxuICAgIFwibFwiOiBcIkwnXCIsXG4gICAgXCJSXCI6IFwiUlwiLFxuICAgIFwiclwiOiBcIlInXCIsXG4gICAgXCJCXCI6IFwiQlwiLFxuICAgIFwiYlwiOiBcIkInXCIsXG4gICAgXCJZXCI6IFwieVwiLFxuICAgIFwieVwiOiBcInknXCIsXG4gICAgXCJ+XCI6IFwiflwiXG59O1xuZXhwb3J0IGNvbnN0IGZhY2VUb0NvbG9yID0ge1xuICAgIFwiVVwiOiBcIndcIixcbiAgICBcIkZcIjogXCJnXCIsXG4gICAgXCJSXCI6IFwiclwiLFxuICAgIFwiQlwiOiBcImJcIixcbiAgICBcIkRcIjogXCJ5XCIsXG4gICAgXCJMXCI6IFwib1wiXG59O1xuZXhwb3J0IGNvbnN0IHdoaXRlVG9Cb3R0b20gPSAoc3RhdGUpID0+IHtcbiAgICBzd2l0Y2ggKCdVJykge1xuICAgICAgICBjYXNlIHN0YXRlWzRdOlxuICAgICAgICAgICAgcmV0dXJuIFwieDJcIjtcbiAgICAgICAgY2FzZSBzdGF0ZVsxM106XG4gICAgICAgICAgICByZXR1cm4gXCJ6XCI7XG4gICAgICAgIGNhc2Ugc3RhdGVbMjJdOlxuICAgICAgICAgICAgcmV0dXJuIFwieCdcIjtcbiAgICAgICAgY2FzZSBzdGF0ZVs0MF06XG4gICAgICAgICAgICByZXR1cm4gXCJ6J1wiO1xuICAgICAgICBjYXNlIHN0YXRlWzQ5XTpcbiAgICAgICAgICAgIHJldHVybiBcInhcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3Qgb3Bwb3NpdGVNYXBwaW5nID0ge1xuICAgIFwiVVwiOiBcIkRcIixcbiAgICBcIkRcIjogXCJVXCIsXG4gICAgXCJSXCI6IFwiTFwiLFxuICAgIFwiTFwiOiBcIlJcIixcbiAgICBcIkZcIjogXCJCXCIsXG4gICAgXCJCXCI6IFwiRlwiLFxuICAgIFwieVwiOiBcInknXCIsXG4gICAgXCJ5J1wiOiBcInlcIixcbiAgICBcIn5cIjogXCJ+XCJcbn07XG5leHBvcnQgY29uc3QgZGVsYXllZFllbGxvd1RvVG9wID0gKGxhc3QpID0+IHtcbiAgICBzd2l0Y2ggKGxhc3QpIHtcbiAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tYmluZWQ6IFwieCdcIixcbiAgICAgICAgICAgICAgICBkZWxheWVkOiBcIngyXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJ4J1wiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21iaW5lZDogXCJ4XCIsXG4gICAgICAgICAgICAgICAgZGVsYXllZDogXCJ4MlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwieDJcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tYmluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVsYXllZDogXCJ4MlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21iaW5lZDogXCJ6J1wiLFxuICAgICAgICAgICAgICAgIGRlbGF5ZWQ6IFwiejJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcInonXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkOiBcInpcIixcbiAgICAgICAgICAgICAgICBkZWxheWVkOiBcInoyXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkOiBcIngyXCIsXG4gICAgICAgICAgICAgICAgZGVsYXllZDogXCJ4MlwiXG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmV4cG9ydCB2YXIgRmFjZTtcbihmdW5jdGlvbiAoRmFjZSkge1xuICAgIEZhY2VbRmFjZVtcIkxcIl0gPSAwXSA9IFwiTFwiO1xuICAgIEZhY2VbRmFjZVtcIlJcIl0gPSAxXSA9IFwiUlwiO1xuICAgIEZhY2VbRmFjZVtcIkRcIl0gPSAyXSA9IFwiRFwiO1xuICAgIEZhY2VbRmFjZVtcIlVcIl0gPSAzXSA9IFwiVVwiO1xuICAgIEZhY2VbRmFjZVtcIkJcIl0gPSA0XSA9IFwiQlwiO1xuICAgIEZhY2VbRmFjZVtcIkZcIl0gPSA1XSA9IFwiRlwiO1xufSkoRmFjZSB8fCAoRmFjZSA9IHt9KSk7XG5leHBvcnQgY29uc3QgRmFjZTEgPSBbNCwgMSwgMywgMCwgNSwgMl07XG5leHBvcnQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgYm9yZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IG8gPSBzaXplIC8gMjtcbiAgICAgICAgY29uc3QgaSA9IG8gLSBib3JkZXI7XG4gICAgICAgIGNvbnN0IF92ZXJ0cyA9IFtcbiAgICAgICAgICAgIC1pLCAraSwgK28sXG4gICAgICAgICAgICAraSwgK2ksICtvLFxuICAgICAgICAgICAgK2ksIC1pLCArbyxcbiAgICAgICAgICAgIC1pLCAtaSwgK28sXG4gICAgICAgICAgICAtaSwgK28sIC1pLFxuICAgICAgICAgICAgK2ksICtvLCAtaSxcbiAgICAgICAgICAgICtpLCArbywgK2ksXG4gICAgICAgICAgICAtaSwgK28sICtpLFxuICAgICAgICAgICAgLW8sIC1pLCAtaSxcbiAgICAgICAgICAgIC1vLCAraSwgLWksXG4gICAgICAgICAgICAtbywgK2ksICtpLFxuICAgICAgICAgICAgLW8sIC1pLCAraSxcbiAgICAgICAgICAgICtpLCAraSwgLW8sXG4gICAgICAgICAgICAtaSwgK2ksIC1vLFxuICAgICAgICAgICAgLWksIC1pLCAtbyxcbiAgICAgICAgICAgICtpLCAtaSwgLW8sXG4gICAgICAgICAgICAtaSwgLW8sICtpLFxuICAgICAgICAgICAgK2ksIC1vLCAraSxcbiAgICAgICAgICAgICtpLCAtbywgLWksXG4gICAgICAgICAgICAtaSwgLW8sIC1pLFxuICAgICAgICAgICAgK28sICtpLCAraSxcbiAgICAgICAgICAgICtvLCAraSwgLWksXG4gICAgICAgICAgICArbywgLWksIC1pLFxuICAgICAgICAgICAgK28sIC1pLCAraSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShfdmVydHMsIDMpKTtcbiAgICAgICAgdGhpcy5zZXRJbmRleChGcmFtZS5faW5kaWNlcyk7XG4gICAgICAgIHRoaXMuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICB9XG59XG5GcmFtZS5faW5kaWNlcyA9IFtcbiAgICAwLCAyLCAxLFxuICAgIDAsIDMsIDIsXG4gICAgNCwgNiwgNSxcbiAgICA0LCA3LCA2LFxuICAgIDgsIDEwLCA5LFxuICAgIDgsIDExLCAxMCxcbiAgICAxMiwgMTQsIDEzLFxuICAgIDEyLCAxNSwgMTQsXG4gICAgMTYsIDE4LCAxNyxcbiAgICAxNiwgMTksIDE4LFxuICAgIDIwLCAyMiwgMjEsXG4gICAgMjAsIDIzLCAyMixcbiAgICAxLCA2LCA3LFxuICAgIDAsIDEsIDcsXG4gICAgMywgMCwgMTAsXG4gICAgMTEsIDMsIDEwLFxuICAgIDE3LCAyLCAzLFxuICAgIDE2LCAxNywgMyxcbiAgICAyMywgMjAsIDEsXG4gICAgMiwgMjMsIDEsXG4gICAgNSwgMTIsIDEzLFxuICAgIDQsIDUsIDEzLFxuICAgIDksIDEzLCAxNCxcbiAgICA4LCA5LCAxNCxcbiAgICAyMiwgMTUsIDEyLFxuICAgIDIxLCAyMiwgMTIsXG4gICAgMTksIDE0LCAxNSxcbiAgICAxOCwgMTksIDE1LFxuICAgIDcsIDQsIDksXG4gICAgMTAsIDcsIDksXG4gICAgMTEsIDgsIDE5LFxuICAgIDE2LCAxMSwgMTksXG4gICAgMjMsIDE3LCAxOCxcbiAgICAyMiwgMjMsIDE4LFxuICAgIDIwLCAyMSwgNSxcbiAgICA2LCAyMCwgNSxcbiAgICAyMCwgNiwgMSxcbiAgICAxMCwgMCwgNyxcbiAgICAyMSwgMTIsIDUsXG4gICAgMTMsIDksIDQsXG4gICAgMjMsIDIsIDE3LFxuICAgIDExLCAxNiwgMyxcbiAgICAyMiwgMTgsIDE1LFxuICAgIDgsIDE0LCAxOSxcbl07XG5leHBvcnQgY2xhc3MgU3RpY2tlciBleHRlbmRzIFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeSB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgZGVwdGgpIHtcbiAgICAgICAgc2l6ZSA9IHNpemUgLyAyO1xuICAgICAgICBjb25zdCBsZWZ0ID0gLXNpemU7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHNpemU7XG4gICAgICAgIGNvbnN0IHRvcCA9IC1zaXplO1xuICAgICAgICBjb25zdCByaWdodCA9IHNpemU7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IHNpemUgLyA0O1xuICAgICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgICBzaGFwZS5tb3ZlVG8obGVmdCwgdG9wICsgcmFkaXVzKTtcbiAgICAgICAgc2hhcGUubGluZVRvKGxlZnQsIGJvdHRvbSAtIHJhZGl1cyk7XG4gICAgICAgIHNoYXBlLnF1YWRyYXRpY0N1cnZlVG8obGVmdCwgYm90dG9tLCBsZWZ0ICsgcmFkaXVzLCBib3R0b20pO1xuICAgICAgICBzaGFwZS5saW5lVG8ocmlnaHQgLSByYWRpdXMsIGJvdHRvbSk7XG4gICAgICAgIHNoYXBlLnF1YWRyYXRpY0N1cnZlVG8ocmlnaHQsIGJvdHRvbSwgcmlnaHQsIGJvdHRvbSAtIHJhZGl1cyk7XG4gICAgICAgIHNoYXBlLmxpbmVUbyhyaWdodCwgdG9wICsgcmFkaXVzKTtcbiAgICAgICAgc2hhcGUucXVhZHJhdGljQ3VydmVUbyhyaWdodCwgdG9wLCByaWdodCAtIHJhZGl1cywgdG9wKTtcbiAgICAgICAgc2hhcGUubGluZVRvKGxlZnQgKyByYWRpdXMsIHRvcCk7XG4gICAgICAgIHNoYXBlLnF1YWRyYXRpY0N1cnZlVG8obGVmdCwgdG9wLCBsZWZ0LCB0b3AgKyByYWRpdXMpO1xuICAgICAgICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgICAgICAgc3VwZXIoc2hhcGUsIHsgYmV2ZWxFbmFibGVkOiBmYWxzZSwgZGVwdGg6IGRlcHRoIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IEN1YmUgZnJvbSBcIi4vY3ViZVwiO1xuaW1wb3J0IHsgY3ViZWxldF9kZWZzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2VuZS5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDY7XG4gICAgICAgIHRoaXMuc2NlbmUucm90YXRpb24ueSA9IC1NYXRoLlBJIC8gNCArIE1hdGguUEkgLyAxNjtcbiAgICAgICAgdGhpcy5hbWJpZW50ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC45KTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25hbCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjEpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbmFsLnBvc2l0aW9uLnNldChjdWJlbGV0X2RlZnMuc2l6ZSwgY3ViZWxldF9kZWZzLnNpemUgKiAzLCBjdWJlbGV0X2RlZnMuc2l6ZSAqIDIpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmFtYmllbnQpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmRpcmVjdGlvbmFsKTtcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGVNYXRyaXgoKTtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgIHRoaXMuY3ViZSA9IG5ldyBDdWJlKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZSA9IDk7XG4gICAgfVxuICAgIHNldCBkaXJ0eSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmN1YmUuZGlydHkgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRpcnR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdWJlLmRpcnR5O1xuICAgIH1cbiAgICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnVwZGF0ZUNhbWVyYSgpO1xuICAgIH1cbiAgICB1cGRhdGVDYW1lcmEoKSB7XG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuaGVpZ2h0IC8gTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIC8gdGhpcy5zY2FsZSAvIHRoaXMucGVyc3BlY3RpdmU7XG4gICAgICAgIGNvbnN0IGZvdiA9ICgyICogTWF0aC5hdGFuKG1pbikgKiAxODApIC8gTWF0aC5QSTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjdWJlbGV0X2RlZnMuc2l6ZSAqIDMgKiB0aGlzLnBlcnNwZWN0aXZlICogMC45O1xuICAgICAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdjtcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IGRpc3RhbmNlO1xuICAgICAgICB0aGlzLmNhbWVyYS5uZWFyID0gZGlzdGFuY2UgLSBjdWJlbGV0X2RlZnMuc2l6ZSAqIDM7XG4gICAgICAgIHRoaXMuY2FtZXJhLmZhciA9IGRpc3RhbmNlICsgY3ViZWxldF9kZWZzLnNpemUgKiA4O1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFZlY3RvcjMoMCwgMCwgMzApKTtcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IFZ1ZXRpZnkgZnJvbSBcInZ1ZXRpZnlcIjtcbmltcG9ydCBcInZ1ZXRpZnkvZGlzdC92dWV0aWZ5Lm1pbi5jc3NcIjtcbmltcG9ydCBcIm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3NcIjtcbmltcG9ydCBQbGF5Z3JvdW5kIGZyb20gXCIuL3Z1ZWFwcC9wbGF5Z3JvdW5kXCI7XG5WdWUudXNlKFZ1ZXRpZnkpO1xuY29uc3Qgb3B0cyA9IHt9O1xuY29uc3QgdnVldGlmeSA9IG5ldyBWdWV0aWZ5KG9wdHMpO1xuVnVlLnByb3RvdHlwZS52dWV0aWZ5ID0gdnVldGlmeTtcbmxldCBhcHAgPSBQbGF5Z3JvdW5kO1xuY29uc3Qgdm0gPSBuZXcgVnVlKHtcbiAgICB2dWV0aWZ5LFxuICAgIGVsOiBcIiNhcHBcIixcbiAgICByZW5kZXI6IChoKSA9PiBoKGFwcCksXG59KTtcbiIsImltcG9ydCBDdWJpZUN1YmUgZnJvbSBcIi4vQ3ViaWVDdWJlXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi9VdGlsXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZEN1YmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR3aXN0ID0gMDtcbiAgICAgICAgdGhpcy50c3ltID0gMDtcbiAgICAgICAgdGhpcy5mbGlwID0gMDtcbiAgICAgICAgdGhpcy5mc3ltID0gMDtcbiAgICAgICAgdGhpcy5zbGljZSA9IDA7XG4gICAgICAgIHRoaXMucHJ1biA9IDA7XG4gICAgfVxuICAgIHN0YXRpYyBJbml0KCkge1xuICAgICAgICBpZiAoQ29vcmRDdWJlLmluaXRlZCA9PSA0Nikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDb29yZEN1YmUuaW5pdGVkID09IDApIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DdWJpZUMgPSBuZXcgQ3ViaWVDdWJlKCk7XG4gICAgICAgICAgICBDb29yZEN1YmUuQ3ViaWVEID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkluaXRQZXJtU3ltMlJhdygpO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkluaXRDUGVybU1vdmUoKTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5Jbml0RVBlcm1Nb3ZlKCk7XG4gICAgICAgICAgICBDb29yZEN1YmUuSW5pdE1QZXJtTW92ZUNvbmooKTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5Jbml0Q29tYlBNb3ZlQ29uaigpO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkluaXRGbGlwU3ltMlJhdygpO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkluaXRUd2lzdFN5bTJSYXcoKTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5Jbml0RmxpcE1vdmUoKTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5Jbml0VHdpc3RNb3ZlKCk7XG4gICAgICAgICAgICBDb29yZEN1YmUuSW5pdFVEU2xpY2VNb3ZlQ29uaigpO1xuICAgICAgICAgICAgQ29vcmRDdWJlLmluaXRlZCA9IDE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ29vcmRDdWJlLkluaXRNQ1Blcm1QcnVuKCk7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0RVBlcm1Db21iUFBydW4oKTtcbiAgICAgICAgQ29vcmRDdWJlLkluaXRTbGljZVR3aXN0UHJ1bigpO1xuICAgICAgICBDb29yZEN1YmUuSW5pdFNsaWNlRmxpcFBydW4oKTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRDUGVybU1vdmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29vcmRDdWJlLk5fUEVSTV9TWU07IGkrKykge1xuICAgICAgICAgICAgQ29vcmRDdWJlLkNQZXJtTW92ZVtpXSA9IFtdO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkN1YmllQy5DUGVybSA9IEN1YmllQ3ViZS5FUGVybVMyUltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29vcmRDdWJlLk5fTU9WRVMyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHQoQ29vcmRDdWJlLkN1YmllQywgQ3ViaWVDdWJlLk1vdmVDdWJlW1V0aWwuVUQyU1REW2pdXSwgQ29vcmRDdWJlLkN1YmllRCk7XG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLkNQZXJtTW92ZVtpXVtqXSA9IENvb3JkQ3ViZS5DdWJpZUQuQ1Blcm1TeW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEluaXRFUGVybU1vdmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29vcmRDdWJlLk5fUEVSTV9TWU07IGkrKykge1xuICAgICAgICAgICAgQ29vcmRDdWJlLkVQZXJtTW92ZVtpXSA9IFtdO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkN1YmllQy5FUGVybSA9IEN1YmllQ3ViZS5FUGVybVMyUltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29vcmRDdWJlLk5fTU9WRVMyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoQ29vcmRDdWJlLkN1YmllQywgQ3ViaWVDdWJlLk1vdmVDdWJlW1V0aWwuVUQyU1REW2pdXSwgQ29vcmRDdWJlLkN1YmllRCk7XG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLkVQZXJtTW92ZVtpXVtqXSA9IENvb3JkQ3ViZS5DdWJpZUQuRVBlcm1TeW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEluaXRNUGVybU1vdmVDb25qKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvb3JkQ3ViZS5OX01QRVJNOyBpKyspIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5NUGVybU1vdmVbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5NUGVybUNvbmpbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DdWJpZUMuTVBlcm0gPSBpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb29yZEN1YmUuTl9NT1ZFUzI7IGorKykge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlTXVsdChDb29yZEN1YmUuQ3ViaWVDLCBDdWJpZUN1YmUuTW92ZUN1YmVbVXRpbC5VRDJTVERbal1dLCBDb29yZEN1YmUuQ3ViaWVEKTtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuTVBlcm1Nb3ZlW2ldW2pdID0gQ29vcmRDdWJlLkN1YmllRC5NUGVybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7IGorKykge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlQ29uanVnYXRlKENvb3JkQ3ViZS5DdWJpZUMsIEN1YmllQ3ViZS5TeW1NdWx0SW52WzBdW2pdLCBDb29yZEN1YmUuQ3ViaWVEKTtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuTVBlcm1Db25qW2ldW2pdID0gQ29vcmRDdWJlLkN1YmllRC5NUGVybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgSW5pdENvbWJQTW92ZUNvbmooKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29vcmRDdWJlLk5fQ09NQjsgaSsrKSB7XG4gICAgICAgICAgICBDb29yZEN1YmUuQ0NvbWJQTW92ZVtpXSA9IFtdO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkNDb21iUENvbmpbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DdWJpZUMuQ0NvbWIgPSBpICUgNzA7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvb3JkQ3ViZS5OX01PVkVTMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5NdWx0KENvb3JkQ3ViZS5DdWJpZUMsIEN1YmllQ3ViZS5Nb3ZlQ3ViZVtVdGlsLlVEMlNURFtqXV0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5DQ29tYlBNb3ZlW2ldW2pdID0gQ29vcmRDdWJlLkN1YmllRC5DQ29tYiArIDcwICogKCgoQ29vcmRDdWJlLlAyX1BBUklUWV9NT1ZFID4+IGopICYgMSkgXiAoaSAvIDcwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuQ29ybkNvbmp1Z2F0ZShDb29yZEN1YmUuQ3ViaWVDLCBDdWJpZUN1YmUuU3ltTXVsdEludlswXVtqXSwgQ29vcmRDdWJlLkN1YmllRCk7XG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLkNDb21iUENvbmpbaV1bal0gPSBDb29yZEN1YmUuQ3ViaWVELkNDb21iICsgNzAgKiB+fihpIC8gNzApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBJbml0RmxpcE1vdmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29vcmRDdWJlLk5fRkxJUF9TWU07IGkrKykge1xuICAgICAgICAgICAgQ29vcmRDdWJlLkZsaXBNb3ZlW2ldID0gW107XG4gICAgICAgICAgICBDb29yZEN1YmUuQ3ViaWVDLkZsaXAgPSBDdWJpZUN1YmUuRmxpcFMyUltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29vcmRDdWJlLk5fTU9WRVM7IGorKykge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlTXVsdChDb29yZEN1YmUuQ3ViaWVDLCBDdWJpZUN1YmUuTW92ZUN1YmVbal0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5GbGlwTW92ZVtpXVtqXSA9IENvb3JkQ3ViZS5DdWJpZUQuRmxpcFN5bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgSW5pdFR3aXN0TW92ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb29yZEN1YmUuTl9UV0lTVF9TWU07IGkrKykge1xuICAgICAgICAgICAgQ29vcmRDdWJlLlR3aXN0TW92ZVtpXSA9IFtdO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkN1YmllQy5Ud2lzdCA9IEN1YmllQ3ViZS5Ud2lzdFMyUltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29vcmRDdWJlLk5fTU9WRVM7IGorKykge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdChDb29yZEN1YmUuQ3ViaWVDLCBDdWJpZUN1YmUuTW92ZUN1YmVbal0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5Ud2lzdE1vdmVbaV1bal0gPSBDb29yZEN1YmUuQ3ViaWVELlR3aXN0U3ltO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBJbml0VURTbGljZU1vdmVDb25qKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvb3JkQ3ViZS5OX1NMSUNFOyBpKyspIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5VRFNsaWNlTW92ZVtpXSA9IFtdO1xuICAgICAgICAgICAgQ29vcmRDdWJlLlVEU2xpY2VDb25qW2ldID0gW107XG4gICAgICAgICAgICBDb29yZEN1YmUuQ3ViaWVDLlVEU2xpY2UgPSBpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb29yZEN1YmUuTl9NT1ZFUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KENvb3JkQ3ViZS5DdWJpZUMsIEN1YmllQ3ViZS5Nb3ZlQ3ViZVtqXSwgQ29vcmRDdWJlLkN1YmllRCk7XG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLlVEU2xpY2VNb3ZlW2ldW2pdID0gQ29vcmRDdWJlLkN1YmllRC5VRFNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VDb25qdWdhdGUoQ29vcmRDdWJlLkN1YmllQywgQ3ViaWVDdWJlLlN5bU11bHRJbnZbMF1bal0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5VRFNsaWNlQ29ualtpXVtqID4+IDFdID0gQ29vcmRDdWJlLkN1YmllRC5VRFNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBTZXRQcnVuaW5nKHRhYmxlLCBpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGFibGVbaW5kZXggPj4gM10gXj0gdmFsdWUgPDwgKGluZGV4IDw8IDIpO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0UHJ1bmluZyh0YWJsZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICh0YWJsZVtpbmRleCA+PiAzXSA+PiAoaW5kZXggPDwgMikpICYgMHhmO1xuICAgIH1cbiAgICBzdGF0aWMgSGFzWmVybyh2YWwpIHtcbiAgICAgICAgcmV0dXJuICgodmFsIC0gMHgxMTExMTExMSkgJiB+dmFsICYgMHg4ODg4ODg4OCkgIT0gMDtcbiAgICB9XG4gICAgc3RhdGljIEluaXRSYXdTeW1QcnVuKFBydW5UYWJsZSwgTl9SQVcsIE5fU1lNLCBSYXdNb3ZlLCBSYXdDb25qLCBTeW1Nb3ZlLCBTeW1TdGF0ZSwgUHJ1bkZsYWcpIHtcbiAgICAgICAgY29uc3QgU1lNX1NISUZUID0gUHJ1bkZsYWcgJiAweGY7XG4gICAgICAgIGNvbnN0IFNZTV9FMkNfTUFHSUMgPSAoKFBydW5GbGFnID4+IDQpICYgMSkgPT0gMSA/IDB4MDBkZGRkMDAgOiAweDAwMDAwMDAwO1xuICAgICAgICBjb25zdCBJU19QSEFTRTIgPSAoKFBydW5GbGFnID4+IDUpICYgMSkgPT0gMTtcbiAgICAgICAgY29uc3QgSU5WX0RFUFRIID0gKFBydW5GbGFnID4+IDgpICYgMHhmO1xuICAgICAgICBjb25zdCBNQVhfREVQVEggPSAoUHJ1bkZsYWcgPj4gMTIpICYgMHhmO1xuICAgICAgICBjb25zdCBNSU5fREVQVEggPSAoUHJ1bkZsYWcgPj4gMTYpICYgMHhmO1xuICAgICAgICBjb25zdCBTWU1fTUFTSyA9ICgxIDw8IFNZTV9TSElGVCkgLSAxO1xuICAgICAgICBjb25zdCBOX1NJWkUgPSBOX1JBVyAqIE5fU1lNO1xuICAgICAgICBjb25zdCBOX01PVkVTID0gSVNfUEhBU0UyID8gMTAgOiAxODtcbiAgICAgICAgY29uc3QgTkVYVF9BWElTX01BR0lDID0gTl9NT1ZFUyA9PSAxMCA/IDB4NDIgOiAweDkyNDkyO1xuICAgICAgICBsZXQgZGVwdGggPSBDb29yZEN1YmUuR2V0UHJ1bmluZyhQcnVuVGFibGUsIE5fU0laRSkgLSAxO1xuICAgICAgICBpZiAoZGVwdGggPT0gLTEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKE5fU0laRSA+PiAzKSArIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIFBydW5UYWJsZVtpXSA9IDB4ZmZmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb29yZEN1YmUuU2V0UHJ1bmluZyhQcnVuVGFibGUsIDAsIDAgXiAweGYpO1xuICAgICAgICAgICAgZGVwdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQ29vcmRDdWJlLlNldFBydW5pbmcoUHJ1blRhYmxlLCBOX1NJWkUsIDB4ZiBeIChkZXB0aCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBTRUFSQ0hfREVQVEggPSBNYXRoLm1pbihNYXRoLm1heChkZXB0aCArIDEsIE1JTl9ERVBUSCksIE1BWF9ERVBUSCk7XG4gICAgICAgIHdoaWxlIChkZXB0aCA8IFNFQVJDSF9ERVBUSCkge1xuICAgICAgICAgICAgY29uc3QgaW52ID0gZGVwdGggPiBJTlZfREVQVEg7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBpbnYgPyAweGYgOiBkZXB0aDtcbiAgICAgICAgICAgIGNvbnN0IHNlbEFyck1hc2sgPSBzZWxlY3QgKiAweDExMTExMTExO1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBpbnYgPyBkZXB0aCA6IDB4ZjtcbiAgICAgICAgICAgIGRlcHRoKys7XG4gICAgICAgICAgICBDb29yZEN1YmUuaW5pdGVkKys7XG4gICAgICAgICAgICBjb25zdCB4b3JWYWwgPSBkZXB0aCBeIDB4ZjtcbiAgICAgICAgICAgIGxldCB2YWwgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOX1NJWkU7IGkrKywgdmFsID4+PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKChpICYgNykgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBQcnVuVGFibGVbaSA+PiAzXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDb29yZEN1YmUuSGFzWmVybyh2YWwgXiBzZWxBcnJNYXNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCh2YWwgJiAweGYpICE9IHNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmF3ID0gaSAlIE5fUkFXO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bSA9IH5+KGkgLyBOX1JBVyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBOX01PVkVTOyBtKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN5bXggPSBTeW1Nb3ZlW3N5bV1bbV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhd3ggPSBSYXdDb25qW1Jhd01vdmVbcmF3XVttXV1bc3lteCAmIFNZTV9NQVNLXTtcbiAgICAgICAgICAgICAgICAgICAgc3lteCA+Pj0gU1lNX1NISUZUO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBzeW14ICogTl9SQVcgKyByYXd4O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcnVuID0gQ29vcmRDdWJlLkdldFBydW5pbmcoUHJ1blRhYmxlLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJ1biAhPSBjaGVjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBydW4gPCBkZXB0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICs9IChORVhUX0FYSVNfTUFHSUMgPj4gbSkgJiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGludikge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29vcmRDdWJlLlNldFBydW5pbmcoUHJ1blRhYmxlLCBpLCB4b3JWYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQ29vcmRDdWJlLlNldFBydW5pbmcoUHJ1blRhYmxlLCBpZHgsIHhvclZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAxLCBzeW1TdGF0ZSA9IFN5bVN0YXRlW3N5bXhdOyAoc3ltU3RhdGUgPj49IDEpICE9IDA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzeW1TdGF0ZSAmIDEpICE9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZHh4ID0gc3lteCAqIE5fUkFXO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4eCArPSBSYXdDb25qW3Jhd3hdW2ogXiAoKFNZTV9FMkNfTUFHSUMgPj4gKGogPDwgMSkpICYgMyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENvb3JkQ3ViZS5HZXRQcnVuaW5nKFBydW5UYWJsZSwgaWR4eCkgPT0gY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29yZEN1YmUuU2V0UHJ1bmluZyhQcnVuVGFibGUsIGlkeHgsIHhvclZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQ29vcmRDdWJlLlNldFBydW5pbmcoUHJ1blRhYmxlLCBOX1NJWkUsIChkZXB0aCArIDEpIF4gMHhmKTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRTbGljZVR3aXN0UHJ1bigpIHtcbiAgICAgICAgQ29vcmRDdWJlLkluaXRSYXdTeW1QcnVuKENvb3JkQ3ViZS5VRFNsaWNlVHdpc3RQcnVuLCA0OTUsIDMyNCwgQ29vcmRDdWJlLlVEU2xpY2VNb3ZlLCBDb29yZEN1YmUuVURTbGljZUNvbmosIENvb3JkQ3ViZS5Ud2lzdE1vdmUsIEN1YmllQ3ViZS5TeW1TdGF0ZVR3aXN0LCAweDY5NjAzKTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRTbGljZUZsaXBQcnVuKCkge1xuICAgICAgICBDb29yZEN1YmUuSW5pdFJhd1N5bVBydW4oQ29vcmRDdWJlLlVEU2xpY2VGbGlwUHJ1biwgNDk1LCAzMzYsIENvb3JkQ3ViZS5VRFNsaWNlTW92ZSwgQ29vcmRDdWJlLlVEU2xpY2VDb25qLCBDb29yZEN1YmUuRmxpcE1vdmUsIEN1YmllQ3ViZS5TeW1TdGF0ZUZsaXAsIDB4Njk2MDMpO1xuICAgIH1cbiAgICBzdGF0aWMgSW5pdE1DUGVybVBydW4oKSB7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0UmF3U3ltUHJ1bihDb29yZEN1YmUuTUNQZXJtUHJ1biwgMjQsIDI3NjgsIENvb3JkQ3ViZS5NUGVybU1vdmUsIENvb3JkQ3ViZS5NUGVybUNvbmosIENvb3JkQ3ViZS5DUGVybU1vdmUsIEN1YmllQ3ViZS5TeW1TdGF0ZVBlcm0sIDB4OGVhMzQpO1xuICAgIH1cbiAgICBzdGF0aWMgSW5pdEVQZXJtQ29tYlBQcnVuKCkge1xuICAgICAgICBDb29yZEN1YmUuSW5pdFJhd1N5bVBydW4oQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biwgQ29vcmRDdWJlLk5fQ09NQiwgMjc2OCwgQ29vcmRDdWJlLkNDb21iUE1vdmUsIENvb3JkQ3ViZS5DQ29tYlBDb25qLCBDb29yZEN1YmUuRVBlcm1Nb3ZlLCBDdWJpZUN1YmUuU3ltU3RhdGVQZXJtLCAweDdkODI0KTtcbiAgICB9XG4gICAgc2V0V2l0aFBydW4oY2MsIGRlcHRoKSB7XG4gICAgICAgIHRoaXMudHdpc3QgPSBjYy5Ud2lzdFN5bTtcbiAgICAgICAgdGhpcy5mbGlwID0gY2MuRmxpcFN5bTtcbiAgICAgICAgdGhpcy50c3ltID0gdGhpcy50d2lzdCAmIDc7XG4gICAgICAgIHRoaXMudHdpc3QgPSB0aGlzLnR3aXN0ID4+IDM7XG4gICAgICAgIHRoaXMucHJ1biA9IDA7XG4gICAgICAgIHRoaXMuZnN5bSA9IHRoaXMuZmxpcCAmIDc7XG4gICAgICAgIHRoaXMuZmxpcCA9IHRoaXMuZmxpcCA+PiAzO1xuICAgICAgICB0aGlzLnNsaWNlID0gY2MuVURTbGljZTtcbiAgICAgICAgdGhpcy5wcnVuID0gTWF0aC5tYXgodGhpcy5wcnVuLCBNYXRoLm1heChDb29yZEN1YmUuR2V0UHJ1bmluZyhDb29yZEN1YmUuVURTbGljZVR3aXN0UHJ1biwgdGhpcy50d2lzdCAqIENvb3JkQ3ViZS5OX1NMSUNFICsgQ29vcmRDdWJlLlVEU2xpY2VDb25qW3RoaXMuc2xpY2VdW3RoaXMudHN5bV0pLCBDb29yZEN1YmUuR2V0UHJ1bmluZyhDb29yZEN1YmUuVURTbGljZUZsaXBQcnVuLCB0aGlzLmZsaXAgKiBDb29yZEN1YmUuTl9TTElDRSArIENvb3JkQ3ViZS5VRFNsaWNlQ29ualt0aGlzLnNsaWNlXVt0aGlzLmZzeW1dKSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcnVuIDw9IGRlcHRoO1xuICAgIH1cbiAgICBkb01vdmVQcnVuKGNjLCBtKSB7XG4gICAgICAgIHRoaXMuc2xpY2UgPSBDb29yZEN1YmUuVURTbGljZU1vdmVbY2Muc2xpY2VdW21dO1xuICAgICAgICB0aGlzLmZsaXAgPSBDb29yZEN1YmUuRmxpcE1vdmVbY2MuZmxpcF1bQ3ViaWVDdWJlLlN5bThNb3ZlWyhtIDw8IDMpIHwgY2MuZnN5bV1dO1xuICAgICAgICB0aGlzLmZzeW0gPSAodGhpcy5mbGlwICYgNykgXiBjYy5mc3ltO1xuICAgICAgICB0aGlzLmZsaXAgPj49IDM7XG4gICAgICAgIHRoaXMudHdpc3QgPSBDb29yZEN1YmUuVHdpc3RNb3ZlW2NjLnR3aXN0XVtDdWJpZUN1YmUuU3ltOE1vdmVbKG0gPDwgMykgfCBjYy50c3ltXV07XG4gICAgICAgIHRoaXMudHN5bSA9ICh0aGlzLnR3aXN0ICYgNykgXiBjYy50c3ltO1xuICAgICAgICB0aGlzLnR3aXN0ID4+PSAzO1xuICAgICAgICB0aGlzLnBydW4gPSBNYXRoLm1heChDb29yZEN1YmUuR2V0UHJ1bmluZyhDb29yZEN1YmUuVURTbGljZVR3aXN0UHJ1biwgdGhpcy50d2lzdCAqIENvb3JkQ3ViZS5OX1NMSUNFICsgQ29vcmRDdWJlLlVEU2xpY2VDb25qW3RoaXMuc2xpY2VdW3RoaXMudHN5bV0pLCBDb29yZEN1YmUuR2V0UHJ1bmluZyhDb29yZEN1YmUuVURTbGljZUZsaXBQcnVuLCB0aGlzLmZsaXAgKiBDb29yZEN1YmUuTl9TTElDRSArIENvb3JkQ3ViZS5VRFNsaWNlQ29ualt0aGlzLnNsaWNlXVt0aGlzLmZzeW1dKSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBydW47XG4gICAgfVxufVxuQ29vcmRDdWJlLk5fTU9WRVMgPSAxODtcbkNvb3JkQ3ViZS5OX01PVkVTMiA9IDEwO1xuQ29vcmRDdWJlLk5fU0xJQ0UgPSA0OTU7XG5Db29yZEN1YmUuTl9UV0lTVCA9IDIxODc7XG5Db29yZEN1YmUuTl9UV0lTVF9TWU0gPSAzMjQ7XG5Db29yZEN1YmUuTl9GTElQID0gMjA0ODtcbkNvb3JkQ3ViZS5OX0ZMSVBfU1lNID0gMzM2O1xuQ29vcmRDdWJlLk5fUEVSTSA9IDQwMzIwO1xuQ29vcmRDdWJlLk5fUEVSTV9TWU0gPSAyNzY4O1xuQ29vcmRDdWJlLk5fTVBFUk0gPSAyNDtcbkNvb3JkQ3ViZS5OX0NPTUIgPSA3MDtcbkNvb3JkQ3ViZS5QMl9QQVJJVFlfTU9WRSA9IDA7XG5Db29yZEN1YmUuVURTbGljZU1vdmUgPSBbXTtcbkNvb3JkQ3ViZS5Ud2lzdE1vdmUgPSBbXTtcbkNvb3JkQ3ViZS5GbGlwTW92ZSA9IFtdO1xuQ29vcmRDdWJlLlVEU2xpY2VDb25qID0gW107XG5Db29yZEN1YmUuVURTbGljZVR3aXN0UHJ1biA9IFtdO1xuQ29vcmRDdWJlLlVEU2xpY2VGbGlwUHJ1biA9IFtdO1xuQ29vcmRDdWJlLkNQZXJtTW92ZSA9IFtdO1xuQ29vcmRDdWJlLkVQZXJtTW92ZSA9IFtdO1xuQ29vcmRDdWJlLk1QZXJtTW92ZSA9IFtdO1xuQ29vcmRDdWJlLk1QZXJtQ29uaiA9IFtdO1xuQ29vcmRDdWJlLkNDb21iUE1vdmUgPSBbXTtcbkNvb3JkQ3ViZS5DQ29tYlBDb25qID0gW107XG5Db29yZEN1YmUuTUNQZXJtUHJ1biA9IFtdO1xuQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biA9IFtdO1xuQ29vcmRDdWJlLmluaXRlZCA9IDA7XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi9VdGlsXCI7XG5pbXBvcnQgQ29vcmRDdWJlIGZyb20gXCIuL0Nvb3JkQ3ViZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViaWVDdWJlIHtcbiAgICBjb25zdHJ1Y3RvcihjcGVybSA9IDAsIHR3aXN0ID0gMCwgZXBlcm0gPSAwLCBmbGlwID0gMCkge1xuICAgICAgICB0aGlzLmNhID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddO1xuICAgICAgICB0aGlzLmVhID0gWzAsIDIsIDQsIDYsIDgsIDEwLCAxMiwgMTQsIDE2LCAxOCwgMjAsIDIyXTtcbiAgICAgICAgdGhpcy5DUGVybSA9IGNwZXJtO1xuICAgICAgICB0aGlzLlR3aXN0ID0gdHdpc3Q7XG4gICAgICAgIFV0aWwuU2V0TlBlcm1GdWxsKHRoaXMuZWEsIGVwZXJtLCAxMiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuRmxpcCA9IGZsaXA7XG4gICAgfVxuICAgIHN0YXRpYyBFU3ltMkNTeW0oaWR4KSB7XG4gICAgICAgIHJldHVybiBpZHggXiAoKEN1YmllQ3ViZS5TWU1fRTJDX01BR0lDID4+ICgoaWR4ICYgMHhmKSA8PCAxKSkgJiAzKTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRNb3ZlKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgcmVzdWx0WzBdID0gbmV3IEN1YmllQ3ViZSgxNTEyMCwgMCwgMTE5NzUwNDAwLCAwKTtcbiAgICAgICAgcmVzdWx0WzNdID0gbmV3IEN1YmllQ3ViZSgyMTAyMSwgMTQ5NCwgMzIzNDAzNDE3LCAwKTtcbiAgICAgICAgcmVzdWx0WzZdID0gbmV3IEN1YmllQ3ViZSg4MDY0LCAxMjM2LCAyOTQ0MTgwOCwgNTUwKTtcbiAgICAgICAgcmVzdWx0WzldID0gbmV3IEN1YmllQ3ViZSg5LCAwLCA1ODgwLCAwKTtcbiAgICAgICAgcmVzdWx0WzEyXSA9IG5ldyBDdWJpZUN1YmUoMTIzMCwgNDEyLCAyOTQ5NjYwLCAwKTtcbiAgICAgICAgcmVzdWx0WzE1XSA9IG5ldyBDdWJpZUN1YmUoMjI0LCAxMzcsIDMyODU1MiwgMTM3KTtcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxODsgYSArPSAzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IDI7IHArKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFthICsgcCArIDFdID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlTXVsdChyZXN1bHRbYSArIHBdLCByZXN1bHRbYV0sIHJlc3VsdFthICsgcCArIDFdKTtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHQocmVzdWx0W2EgKyBwXSwgcmVzdWx0W2FdLCByZXN1bHRbYSArIHAgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQ3ViaWVDdWJlLk1vdmVDdWJlID0gcmVzdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgSW5pdFN5bSgpIHtcbiAgICAgICAgbGV0IGMgPSBuZXcgQ3ViaWVDdWJlKCk7XG4gICAgICAgIGxldCBkID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICBjb25zdCBmMiA9IG5ldyBDdWJpZUN1YmUoMjg3ODMsIDAsIDI1OTI2ODQwNywgMCk7XG4gICAgICAgIGNvbnN0IHU0ID0gbmV3IEN1YmllQ3ViZSgxNTEzOCwgMCwgMTE5NzY1NTM4LCA3KTtcbiAgICAgICAgY29uc3QgbHIyID0gbmV3IEN1YmllQ3ViZSg1MTY3LCAwLCA4MzQ3MzIwNywgMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBscjIuY2FbaV0gfD0gMyA8PCAzO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgQ3ViaWVDdWJlLlN5bUN1YmVbaV0gPSBuZXcgQ3ViaWVDdWJlKCk7XG4gICAgICAgICAgICBDdWJpZUN1YmUuU3ltQ3ViZVtpXS5jb3B5KGMpO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5NdWx0RnVsbChjLCB1NCwgZCk7XG4gICAgICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoYywgdTQsIGQpO1xuICAgICAgICAgICAgW2MsIGRdID0gW2QsIGNdO1xuICAgICAgICAgICAgaWYgKGkgJSA0ID09IDMpIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHRGdWxsKGMsIGxyMiwgZCk7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KGMsIGxyMiwgZCk7XG4gICAgICAgICAgICAgICAgW2MsIGRdID0gW2QsIGNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgJSA4ID09IDcpIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHRGdWxsKGMsIGYyLCBkKTtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoYywgZjIsIGQpO1xuICAgICAgICAgICAgICAgIFtjLCBkXSA9IFtkLCBjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5TeW1NdWx0W2ldID0gW107XG4gICAgICAgICAgICBDdWJpZUN1YmUuU3ltTXVsdEludltpXSA9IFtdO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLlN5bU1vdmVbaV0gPSBbXTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5TeW1Nb3ZlVURbaV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7IGorKykge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5TeW1NdWx0W2ldW2pdID0gaSBeIGogXiAoKDB4MTRhYjQgPj4gaikgJiAoaSA8PCAxKSAmIDIpO1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5TeW1NdWx0SW52W0N1YmllQ3ViZS5TeW1NdWx0W2ldW2pdXVtqXSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCAxNjsgcysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE4OyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuQ29ybkNvbmp1Z2F0ZShDdWJpZUN1YmUuTW92ZUN1YmVbal0sIEN1YmllQ3ViZS5TeW1NdWx0SW52WzBdW3NdLCBjKTtcbiAgICAgICAgICAgICAgICBvdXRsb29wOiBmb3IgKGxldCBtID0gMDsgbSA8IDE4OyBtKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4OyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDdWJpZUN1YmUuTW92ZUN1YmVbbV0uY2FbdF0gIT0gYy5jYVt0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGxvb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQ3ViaWVDdWJlLlN5bU1vdmVbc11bal0gPSBtO1xuICAgICAgICAgICAgICAgICAgICBDdWJpZUN1YmUuU3ltTW92ZVVEW3NdW1V0aWwuU1REMlVEW2pdXSA9IFV0aWwuU1REMlVEW21dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMgJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQ3ViaWVDdWJlLlN5bThNb3ZlWyhqIDw8IDMpIHwgKHMgPj4gMSldID0gQ3ViaWVDdWJlLlN5bU1vdmVbc11bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBJbml0U3ltMlJhdyhOX1JBVywgU3ltMlJhdywgUmF3MlN5bSwgU3ltU3RhdGUsIGNvb3JkKSB7XG4gICAgICAgIGNvbnN0IGMgPSBuZXcgQ3ViaWVDdWJlKCk7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgQ3ViaWVDdWJlKCk7XG4gICAgICAgIGxldCBjb3VudCA9IDAsIGlkeCA9IDA7XG4gICAgICAgIGNvbnN0IHN5bUluYyA9IGNvb3JkID49IDIgPyAxIDogMjtcbiAgICAgICAgY29uc3QgaXNFZGdlID0gY29vcmQgIT0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOX1JBVzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoUmF3MlN5bVtpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoY29vcmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGMuRmxpcCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgYy5Ud2lzdCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgYy5FUGVybSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCAxNjsgcyArPSBzeW1JbmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlQ29uanVnYXRlKGMsIHMsIGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5Db25qdWdhdGUoYywgcywgZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29vcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gZC5GbGlwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IGQuVHdpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gZC5FUGVybTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgU3ltU3RhdGVbY291bnRdIHw9IDEgPDwgKHMgLyBzeW1JbmMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSYXcyU3ltW2lkeF0gPSAoKGNvdW50IDw8IDQpIHwgcykgLyBzeW1JbmM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBTeW0yUmF3W2NvdW50KytdID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIHN0YXRpYyBJbml0RmxpcFN5bTJSYXcoKSB7XG4gICAgICAgIEN1YmllQ3ViZS5Jbml0U3ltMlJhdyhDb29yZEN1YmUuTl9GTElQLCBDdWJpZUN1YmUuRmxpcFMyUiwgQ3ViaWVDdWJlLkZsaXBSMlMsIEN1YmllQ3ViZS5TeW1TdGF0ZUZsaXAsIDApO1xuICAgIH1cbiAgICBzdGF0aWMgSW5pdFR3aXN0U3ltMlJhdygpIHtcbiAgICAgICAgQ3ViaWVDdWJlLkluaXRTeW0yUmF3KENvb3JkQ3ViZS5OX1RXSVNULCBDdWJpZUN1YmUuVHdpc3RTMlIsIEN1YmllQ3ViZS5Ud2lzdFIyUywgQ3ViaWVDdWJlLlN5bVN0YXRlVHdpc3QsIDEpO1xuICAgIH1cbiAgICBzdGF0aWMgSW5pdFBlcm1TeW0yUmF3KCkge1xuICAgICAgICBDdWJpZUN1YmUuSW5pdFN5bTJSYXcoQ29vcmRDdWJlLk5fUEVSTSwgQ3ViaWVDdWJlLkVQZXJtUzJSLCBDdWJpZUN1YmUuRVBlcm1SMlMsIEN1YmllQ3ViZS5TeW1TdGF0ZVBlcm0sIDIpO1xuICAgICAgICBjb25zdCBjYyA9IG5ldyBDdWJpZUN1YmUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb29yZEN1YmUuTl9QRVJNX1NZTTsgaSsrKSB7XG4gICAgICAgICAgICBjYy5FUGVybSA9IEN1YmllQ3ViZS5FUGVybVMyUltpXTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5QZXJtMkNvbWJQW2ldID0gVXRpbC5HZXRDb21iKGNjLmVhLCAwLCB0cnVlKTtcbiAgICAgICAgICAgIGNjLmludmVyc2UoKTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5QZXJtSW52RWRnZVN5bVtpXSA9IGNjLkVQZXJtU3ltO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29vcmRDdWJlLk5fTVBFUk07IGkrKykge1xuICAgICAgICAgICAgY2MuTVBlcm0gPSBpO1xuICAgICAgICAgICAgY2MuaW52ZXJzZSgpO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLk1QZXJtSW52W2ldID0gY2MuTVBlcm07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIEN1YmllQ3ViZS50ZW1wcyA9IG5ldyBDdWJpZUN1YmUoKTtcbiAgICAgICAgQ3ViaWVDdWJlLkluaXRNb3ZlKCk7XG4gICAgICAgIEN1YmllQ3ViZS5Jbml0U3ltKCk7XG4gICAgfVxuICAgIHN0YXRpYyBDb3JuTXVsdChhLCBiLCBwcm9kKSB7XG4gICAgICAgIGZvciAobGV0IGNvcm4gPSAwOyBjb3JuIDwgODsgY29ybisrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlBID0gYS5jYVtiLmNhW2Nvcm5dICYgN10gPj4gMztcbiAgICAgICAgICAgIGNvbnN0IG9yaUIgPSBiLmNhW2Nvcm5dID4+IDM7XG4gICAgICAgICAgICBwcm9kLmNhW2Nvcm5dID0gKGEuY2FbYi5jYVtjb3JuXSAmIDddICYgNykgfCAoKG9yaUEgKyBvcmlCKSAlIDMgPDwgMyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIENvcm5NdWx0RnVsbChhLCBiLCBwcm9kKSB7XG4gICAgICAgIGZvciAobGV0IGNvcm4gPSAwOyBjb3JuIDwgODsgY29ybisrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlBID0gYS5jYVtiLmNhW2Nvcm5dICYgN10gPj4gMztcbiAgICAgICAgICAgIGNvbnN0IG9yaUIgPSBiLmNhW2Nvcm5dID4+IDM7XG4gICAgICAgICAgICBsZXQgb3JpID0gb3JpQSArIChvcmlBIDwgMyA/IG9yaUIgOiA2IC0gb3JpQik7XG4gICAgICAgICAgICBvcmkgPSAob3JpICUgMykgKyAob3JpQSA8IDMgPT0gb3JpQiA8IDMgPyAwIDogMyk7XG4gICAgICAgICAgICBwcm9kLmNhW2Nvcm5dID0gKGEuY2FbYi5jYVtjb3JuXSAmIDddICYgNykgfCAob3JpIDw8IDMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBFZGdlTXVsdChhLCBiLCBwcm9kKSB7XG4gICAgICAgIGZvciAobGV0IGVkID0gMDsgZWQgPCAxMjsgZWQrKykge1xuICAgICAgICAgICAgcHJvZC5lYVtlZF0gPSBhLmVhW2IuZWFbZWRdID4+IDFdIF4gKGIuZWFbZWRdICYgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIENvcm5Db25qdWdhdGUoYSwgaWR4LCBiKSB7XG4gICAgICAgIGNvbnN0IHNpbnYgPSBDdWJpZUN1YmUuU3ltQ3ViZVtDdWJpZUN1YmUuU3ltTXVsdEludlswXVtpZHhdXTtcbiAgICAgICAgY29uc3QgcyA9IEN1YmllQ3ViZS5TeW1DdWJlW2lkeF07XG4gICAgICAgIGZvciAobGV0IGNvcm4gPSAwOyBjb3JuIDwgODsgY29ybisrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlBID0gc2ludi5jYVthLmNhW3MuY2FbY29ybl0gJiA3XSAmIDddID4+IDM7XG4gICAgICAgICAgICBjb25zdCBvcmlCID0gYS5jYVtzLmNhW2Nvcm5dICYgN10gPj4gMztcbiAgICAgICAgICAgIGNvbnN0IG9yaSA9IG9yaUEgPCAzID8gb3JpQiA6ICgzIC0gb3JpQikgJSAzO1xuICAgICAgICAgICAgYi5jYVtjb3JuXSA9IChzaW52LmNhW2EuY2Fbcy5jYVtjb3JuXSAmIDddICYgN10gJiA3KSB8IChvcmkgPDwgMyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEVkZ2VDb25qdWdhdGUoYSwgaWR4LCBiKSB7XG4gICAgICAgIGNvbnN0IHNpbnYgPSBDdWJpZUN1YmUuU3ltQ3ViZVtDdWJpZUN1YmUuU3ltTXVsdEludlswXVtpZHhdXTtcbiAgICAgICAgY29uc3QgcyA9IEN1YmllQ3ViZS5TeW1DdWJlW2lkeF07XG4gICAgICAgIGZvciAobGV0IGVkID0gMDsgZWQgPCAxMjsgZWQrKykge1xuICAgICAgICAgICAgYi5lYVtlZF0gPSBzaW52LmVhW2EuZWFbcy5lYVtlZF0gPj4gMV0gPj4gMV0gXiAoYS5lYVtzLmVhW2VkXSA+PiAxXSAmIDEpIF4gKHMuZWFbZWRdICYgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldFBlcm1TeW1JbnYoaWR4LCBzeW0sIGNvcm5lcikge1xuICAgICAgICBsZXQgaWR4aSA9IEN1YmllQ3ViZS5QZXJtSW52RWRnZVN5bVtpZHhdO1xuICAgICAgICBpZiAoY29ybmVyKSB7XG4gICAgICAgICAgICBpZHhpID0gQ3ViaWVDdWJlLkVTeW0yQ1N5bShpZHhpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGlkeGkgJiAweGZmZjApIHwgQ3ViaWVDdWJlLlN5bU11bHRbaWR4aSAmIDB4Zl1bc3ltXTtcbiAgICB9XG4gICAgc3RhdGljIEdldFNraXBNb3Zlcyhzc3ltKSB7XG4gICAgICAgIGxldCByZXQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgKHNzeW0gPj49IDEpICE9IDA7IGkrKykge1xuICAgICAgICAgICAgaWYgKChzc3ltICYgMSkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldCB8PSBDdWJpZUN1YmUuRmlyc3RNb3ZlU3ltW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIGNvcHkoYykge1xuICAgICAgICBmb3IgKGxldCBlZGdlID0gMDsgZWRnZSA8IDEyOyBlZGdlKyspIHtcbiAgICAgICAgICAgIHRoaXMuZWFbZWRnZV0gPSBjLmVhW2VkZ2VdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGNvcm4gPSAwOyBjb3JuIDwgODsgY29ybisrKSB7XG4gICAgICAgICAgICB0aGlzLmNhW2Nvcm5dID0gYy5jYVtjb3JuXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnZlcnNlKCkge1xuICAgICAgICBmb3IgKGxldCBlZGdlID0gMDsgZWRnZSA8IDEyOyBlZGdlKyspIHtcbiAgICAgICAgICAgIEN1YmllQ3ViZS50ZW1wcy5lYVt0aGlzLmVhW2VkZ2VdID4+IDFdID0gKGVkZ2UgPDwgMSkgfCAodGhpcy5lYVtlZGdlXSAmIDEpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGNvcm4gPSAwOyBjb3JuIDwgODsgY29ybisrKSB7XG4gICAgICAgICAgICBDdWJpZUN1YmUudGVtcHMuY2FbdGhpcy5jYVtjb3JuXSAmIDB4N10gPSBjb3JuIHwgKCgweDIwID4+ICh0aGlzLmNhW2Nvcm5dID4+IDMpKSAmIDB4MTgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29weShDdWJpZUN1YmUudGVtcHMpO1xuICAgIH1cbiAgICBVUkZDb25qdWdhdGUoKSB7XG4gICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdChDdWJpZUN1YmUuVVJGMiwgdGhpcywgQ3ViaWVDdWJlLnRlbXBzKTtcbiAgICAgICAgQ3ViaWVDdWJlLkNvcm5NdWx0KEN1YmllQ3ViZS50ZW1wcywgQ3ViaWVDdWJlLlVSRjEsIHRoaXMpO1xuICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoQ3ViaWVDdWJlLlVSRjIsIHRoaXMsIEN1YmllQ3ViZS50ZW1wcyk7XG4gICAgICAgIEN1YmllQ3ViZS5FZGdlTXVsdChDdWJpZUN1YmUudGVtcHMsIEN1YmllQ3ViZS5VUkYxLCB0aGlzKTtcbiAgICB9XG4gICAgZ2V0IEZsaXAoKSB7XG4gICAgICAgIGxldCBpZHggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICAgICAgICAgIGlkeCA9IChpZHggPDwgMSkgfCAodGhpcy5lYVtpXSAmIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIHNldCBGbGlwKGlkeCkge1xuICAgICAgICBsZXQgcGFyaXR5ID0gMDtcbiAgICAgICAgbGV0IHZhbCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAxMDsgaSA+PSAwOyBpLS0sIGlkeCA+Pj0gMSkge1xuICAgICAgICAgICAgcGFyaXR5IF49IHZhbCA9IGlkeCAmIDE7XG4gICAgICAgICAgICB0aGlzLmVhW2ldID0gKHRoaXMuZWFbaV0gJiB+MSkgfCB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lYVsxMV0gPSAodGhpcy5lYVsxMV0gJiB+MSkgfCBwYXJpdHk7XG4gICAgfVxuICAgIGdldCBGbGlwU3ltKCkge1xuICAgICAgICByZXR1cm4gQ3ViaWVDdWJlLkZsaXBSMlNbdGhpcy5GbGlwXTtcbiAgICB9XG4gICAgZ2V0IFR3aXN0KCkge1xuICAgICAgICBsZXQgaWR4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGlkeCArPSAoaWR4IDw8IDEpICsgKHRoaXMuY2FbaV0gPj4gMyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG4gICAgc2V0IFR3aXN0KGlkeCkge1xuICAgICAgICBsZXQgdHdzdCA9IDE1O1xuICAgICAgICBsZXQgdmFsID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDY7IGkgPj0gMDsgaS0tLCBpZHggPSB+fihpZHggLyAzKSkge1xuICAgICAgICAgICAgdHdzdCAtPSB2YWwgPSBpZHggJSAzO1xuICAgICAgICAgICAgdGhpcy5jYVtpXSA9ICh0aGlzLmNhW2ldICYgMHg3KSB8ICh2YWwgPDwgMyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYVs3XSA9ICh0aGlzLmNhWzddICYgMHg3KSB8ICh0d3N0ICUgMyA8PCAzKTtcbiAgICB9XG4gICAgZ2V0IFR3aXN0U3ltKCkge1xuICAgICAgICByZXR1cm4gQ3ViaWVDdWJlLlR3aXN0UjJTW3RoaXMuVHdpc3RdO1xuICAgIH1cbiAgICBnZXQgVURTbGljZSgpIHtcbiAgICAgICAgcmV0dXJuIDQ5NCAtIFV0aWwuR2V0Q29tYih0aGlzLmVhLCA4LCB0cnVlKTtcbiAgICB9XG4gICAgc2V0IFVEU2xpY2UoaWR4KSB7XG4gICAgICAgIFV0aWwuU2V0Q29tYih0aGlzLmVhLCA0OTQgLSBpZHgsIDgsIHRydWUpO1xuICAgIH1cbiAgICBnZXQgQ1Blcm0oKSB7XG4gICAgICAgIHJldHVybiBVdGlsLkdldE5QZXJtKHRoaXMuY2EsIDgsIGZhbHNlKTtcbiAgICB9XG4gICAgc2V0IENQZXJtKGlkeCkge1xuICAgICAgICBVdGlsLlNldE5QZXJtKHRoaXMuY2EsIGlkeCwgOCwgZmFsc2UpO1xuICAgIH1cbiAgICBnZXQgQ1Blcm1TeW0oKSB7XG4gICAgICAgIHJldHVybiBDdWJpZUN1YmUuRVN5bTJDU3ltKEN1YmllQ3ViZS5FUGVybVIyU1t0aGlzLkNQZXJtXSk7XG4gICAgfVxuICAgIGdldCBFUGVybSgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuR2V0TlBlcm0odGhpcy5lYSwgOCwgdHJ1ZSk7XG4gICAgfVxuICAgIHNldCBFUGVybShpZHgpIHtcbiAgICAgICAgVXRpbC5TZXROUGVybSh0aGlzLmVhLCBpZHgsIDgsIHRydWUpO1xuICAgIH1cbiAgICBnZXQgRVBlcm1TeW0oKSB7XG4gICAgICAgIHJldHVybiBDdWJpZUN1YmUuRVBlcm1SMlNbdGhpcy5FUGVybV07XG4gICAgfVxuICAgIGdldCBNUGVybSgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuR2V0TlBlcm1GdWxsKHRoaXMuZWEsIDEyLCB0cnVlKSAlIDI0O1xuICAgIH1cbiAgICBzZXQgTVBlcm0oaWR4KSB7XG4gICAgICAgIFV0aWwuU2V0TlBlcm1GdWxsKHRoaXMuZWEsIGlkeCwgMTIsIHRydWUpO1xuICAgIH1cbiAgICBnZXQgQ0NvbWIoKSB7XG4gICAgICAgIHJldHVybiBVdGlsLkdldENvbWIodGhpcy5jYSwgMCwgZmFsc2UpO1xuICAgIH1cbiAgICBzZXQgQ0NvbWIoaWR4KSB7XG4gICAgICAgIFV0aWwuU2V0Q29tYih0aGlzLmNhLCBpZHgsIDAsIGZhbHNlKTtcbiAgICB9XG4gICAgdmVyaWZ5KCkge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgbGV0IG1hc2sgPSAwO1xuICAgICAgICBmb3IgKGxldCBlID0gMDsgZSA8IDEyOyBlKyspIHtcbiAgICAgICAgICAgIG1hc2sgfD0gMSA8PCAodGhpcy5lYVtlXSA+PiAxKTtcbiAgICAgICAgICAgIHN1bSBePSB0aGlzLmVhW2VdICYgMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFzayAhPSAweGZmZikge1xuICAgICAgICAgICAgcmV0dXJuIFwibWlzc2luZyBlZGdlc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdW0gIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZmxpcGVkIGVkZ2VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgbWFzayA9IDA7XG4gICAgICAgIHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgODsgYysrKSB7XG4gICAgICAgICAgICBtYXNrIHw9IDEgPDwgKHRoaXMuY2FbY10gJiA3KTtcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLmNhW2NdID4+IDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hc2sgIT0gMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIFwibWlzc2luZyBjb3JuZXJzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1bSAlIDMgIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHdpc3RlZCBjb3JuZXJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKFV0aWwuR2V0TlBhcml0eShVdGlsLkdldE5QZXJtRnVsbCh0aGlzLmVhLCAxMiwgdHJ1ZSksIDEyKSBeIFV0aWwuR2V0TlBhcml0eSh0aGlzLkNQZXJtLCA4KSkgIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicGFyaXR5IGVycm9yXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgdHMgPSBcIlVSRkRMQlwiO1xuICAgICAgICBjb25zdCBmID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTQ7IGkrKykge1xuICAgICAgICAgICAgZltpXSA9IHRzW35+KGkgLyA5KV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA4OyBjKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSB0aGlzLmNhW2NdICYgMHg3O1xuICAgICAgICAgICAgY29uc3Qgb3JpID0gdGhpcy5jYVtjXSA+PiAzO1xuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCAzOyBuKyspXG4gICAgICAgICAgICAgICAgZltVdGlsLkNvcm5lckZhY2VsZXRbY11bKG4gKyBvcmkpICUgM11dID0gdHNbfn4oVXRpbC5Db3JuZXJGYWNlbGV0W2pdW25dIC8gOSldO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgMTI7IGUrKykge1xuICAgICAgICAgICAgY29uc3QgaiA9IHRoaXMuZWFbZV0gPj4gMTtcbiAgICAgICAgICAgIGNvbnN0IG9yaSA9IHRoaXMuZWFbZV0gJiAxO1xuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCAyOyBuKyspXG4gICAgICAgICAgICAgICAgZltVdGlsLkVkZ2VGYWNlbGV0W2VdWyhuICsgb3JpKSAlIDJdXSA9IHRzW35+KFV0aWwuRWRnZUZhY2VsZXRbal1bbl0gLyA5KV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGYuam9pbihcIlwiKTtcbiAgICB9XG4gICAgZGVzZXJpYWxpemUoZmFjZWxldCkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBmID0gW107XG4gICAgICAgIGNvbnN0IGNlbnRlcnMgPSBmYWNlbGV0WzRdICsgZmFjZWxldFsxM10gKyBmYWNlbGV0WzIyXSArIGZhY2VsZXRbMzFdICsgZmFjZWxldFs0MF0gKyBmYWNlbGV0WzQ5XTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1NDsgKytpKSB7XG4gICAgICAgICAgICBmW2ldID0gY2VudGVycy5pbmRleE9mKGZhY2VsZXRbaV0pO1xuICAgICAgICAgICAgaWYgKGZbaV0gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCArPSAxIDw8IChmW2ldIDw8IDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCAhPSAweDk5OTk5OSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2wxLCBjb2wyLCBpLCBqLCBvcmksIHRlbXA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA4OyArK2kpIHtcbiAgICAgICAgICAgIGZvciAob3JpID0gMDsgb3JpIDwgMzsgKytvcmkpXG4gICAgICAgICAgICAgICAgaWYgKGZbVXRpbC5Db3JuZXJGYWNlbGV0W2ldW29yaV1dID09IDAgfHwgZltVdGlsLkNvcm5lckZhY2VsZXRbaV1bb3JpXV0gPT0gMylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjb2wxID0gZltVdGlsLkNvcm5lckZhY2VsZXRbaV1bKG9yaSArIDEpICUgM11dO1xuICAgICAgICAgICAgY29sMiA9IGZbVXRpbC5Db3JuZXJGYWNlbGV0W2ldWyhvcmkgKyAyKSAlIDNdXTtcbiAgICAgICAgICAgIHRlbXAgPSAwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmIChjb2wxID09IH5+KFV0aWwuQ29ybmVyRmFjZWxldFtqXVsxXSAvIDkpICYmIGNvbDIgPT0gfn4oVXRpbC5Db3JuZXJGYWNlbGV0W2pdWzJdIC8gOSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYVtpXSA9IGogfCAob3JpICUgMyA8PCAzKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZW1wID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICB0ZW1wID0gMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAxMjsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZbVXRpbC5FZGdlRmFjZWxldFtpXVswXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVswXSAvIDkpICYmXG4gICAgICAgICAgICAgICAgICAgIGZbVXRpbC5FZGdlRmFjZWxldFtpXVsxXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVsxXSAvIDkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWFbaV0gPSBqIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZbVXRpbC5FZGdlRmFjZWxldFtpXVswXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVsxXSAvIDkpICYmXG4gICAgICAgICAgICAgICAgICAgIGZbVXRpbC5FZGdlRmFjZWxldFtpXVsxXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVswXSAvIDkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWFbaV0gPSAoaiA8PCAxKSB8IDE7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVtcCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5DdWJpZUN1YmUuU3ltQ3ViZSA9IFtdO1xuQ3ViaWVDdWJlLk1vdmVDdWJlID0gW107XG5DdWJpZUN1YmUuTW92ZUN1YmVTeW0gPSBbXTtcbkN1YmllQ3ViZS5GaXJzdE1vdmVTeW0gPSBbXTtcbkN1YmllQ3ViZS5TeW1NdWx0ID0gW107XG5DdWJpZUN1YmUuU3ltTXVsdEludiA9IFtdO1xuQ3ViaWVDdWJlLlN5bU1vdmUgPSBbXTtcbkN1YmllQ3ViZS5TeW04TW92ZSA9IFtdO1xuQ3ViaWVDdWJlLlN5bU1vdmVVRCA9IFtdO1xuQ3ViaWVDdWJlLkZsaXBTMlIgPSBbXTtcbkN1YmllQ3ViZS5Ud2lzdFMyUiA9IFtdO1xuQ3ViaWVDdWJlLkVQZXJtUzJSID0gW107XG5DdWJpZUN1YmUuUGVybTJDb21iUCA9IFtdO1xuQ3ViaWVDdWJlLlBlcm1JbnZFZGdlU3ltID0gW107XG5DdWJpZUN1YmUuTVBlcm1JbnYgPSBbXTtcbkN1YmllQ3ViZS5TWU1fRTJDX01BR0lDID0gMHgwMGRkZGQwMDtcbkN1YmllQ3ViZS5GbGlwUjJTID0gW107XG5DdWJpZUN1YmUuVHdpc3RSMlMgPSBbXTtcbkN1YmllQ3ViZS5FUGVybVIyUyA9IFtdO1xuQ3ViaWVDdWJlLlN5bVN0YXRlVHdpc3QgPSBbXTtcbkN1YmllQ3ViZS5TeW1TdGF0ZUZsaXAgPSBbXTtcbkN1YmllQ3ViZS5TeW1TdGF0ZVBlcm0gPSBbXTtcbkN1YmllQ3ViZS5VUkYxID0gbmV3IEN1YmllQ3ViZSgyNTMxLCAxMzczLCA2NzAyNjgxOSwgMTM2Nyk7XG5DdWJpZUN1YmUuVVJGMiA9IG5ldyBDdWJpZUN1YmUoMjA4OSwgMTkwNiwgMzIyNzUyOTEzLCAyMDQwKTtcbkN1YmllQ3ViZS5VUkZNb3ZlID0gW1xuICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTddLFxuICAgIFs2LCA3LCA4LCAwLCAxLCAyLCAzLCA0LCA1LCAxNSwgMTYsIDE3LCA5LCAxMCwgMTEsIDEyLCAxMywgMTRdLFxuICAgIFszLCA0LCA1LCA2LCA3LCA4LCAwLCAxLCAyLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCA5LCAxMCwgMTFdLFxuICAgIFsyLCAxLCAwLCA1LCA0LCAzLCA4LCA3LCA2LCAxMSwgMTAsIDksIDE0LCAxMywgMTIsIDE3LCAxNiwgMTVdLFxuICAgIFs4LCA3LCA2LCAyLCAxLCAwLCA1LCA0LCAzLCAxNywgMTYsIDE1LCAxMSwgMTAsIDksIDE0LCAxMywgMTJdLFxuICAgIFs1LCA0LCAzLCA4LCA3LCA2LCAyLCAxLCAwLCAxNCwgMTMsIDEyLCAxNywgMTYsIDE1LCAxMSwgMTAsIDldLFxuXTtcbiIsImltcG9ydCBDdWJpZUN1YmUgZnJvbSBcIi4vQ3ViaWVDdWJlXCI7XG5pbXBvcnQgQ29vcmRDdWJlIGZyb20gXCIuL0Nvb3JkQ3ViZVwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vVXRpbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29sdmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZW5ndGgxID0gMDtcbiAgICAgICAgdGhpcy51cmZJZHggPSAwO1xuICAgICAgICB0aGlzLmRlcHRoMSA9IDA7XG4gICAgICAgIEN1YmllQ3ViZS5Jbml0KCk7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0KCk7XG4gICAgICAgIHRoaXMubW92ZSA9IFtdO1xuICAgICAgICB0aGlzLm1vdmVTb2wgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlVUQgPSBbXTtcbiAgICAgICAgdGhpcy52YWxpZDEgPSAwO1xuICAgICAgICB0aGlzLmFsbG93U2hvcnRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNjID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICB0aGlzLnVyZkN1YmllQ3ViZSA9IFtdO1xuICAgICAgICB0aGlzLnVyZkNvb3JkQ3ViZSA9IFtdO1xuICAgICAgICB0aGlzLnBoYXNlMUN1YmllID0gW107XG4gICAgICAgIHRoaXMucHJlTW92ZUN1YmVzID0gW107XG4gICAgICAgIHRoaXMucHJlTW92ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVNb3ZlTGVuID0gMDtcbiAgICAgICAgdGhpcy5tYXhQcmVNb3ZlcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ub2RlVURbaV0gPSBuZXcgQ29vcmRDdWJlKCk7XG4gICAgICAgICAgICB0aGlzLnBoYXNlMUN1YmllW2ldID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnVyZkN1YmllQ3ViZVtpXSA9IG5ldyBDdWJpZUN1YmUoKTtcbiAgICAgICAgICAgIHRoaXMudXJmQ29vcmRDdWJlW2ldID0gbmV3IENvb3JkQ3ViZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU29sdmVyLk1BWF9QUkVfTU9WRVM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcmVNb3ZlQ3ViZXNbaSArIDFdID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0KCk7XG4gICAgfVxuICAgIHNvbHZlKGZhY2VsZXRzKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jYy5kZXNlcmlhbGl6ZShmYWNlbGV0cyk7XG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yOiBpbnZhbGlkIGN1YmVcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ZXJpZnkgPSB0aGlzLmNjLnZlcmlmeSgpO1xuICAgICAgICBpZiAodmVyaWZ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yOiBcIiArIHZlcmlmeTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvbCA9IDIyO1xuICAgICAgICB0aGlzLm1vdmVTb2wgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRTZWFyY2goKTtcbiAgICAgICAgY29uc3Qgc29sdXRpb24gPSB0aGlzLnNlYXJjaCgpO1xuICAgICAgICByZXR1cm4gXCJncmVhdFwiO1xuICAgIH1cbiAgICBpbml0U2VhcmNoKCkge1xuICAgICAgICB0aGlzLmNvbmpNYXNrID0gKFNvbHZlci5UUllfSU5WRVJTRSA/IDAgOiAweDM4KSB8IChTb2x2ZXIuVFJZX1RIUkVFX0FYRVMgPyAwIDogMHgzNik7XG4gICAgICAgIHRoaXMubWF4UHJlTW92ZXMgPSB0aGlzLmNvbmpNYXNrID4gNyA/IDAgOiBTb2x2ZXIuTUFYX1BSRV9NT1ZFUztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudXJmQ3ViaWVDdWJlW2ldLmNvcHkodGhpcy5jYyk7XG4gICAgICAgICAgICB0aGlzLnVyZkNvb3JkQ3ViZVtpXS5zZXRXaXRoUHJ1bih0aGlzLnVyZkN1YmllQ3ViZVtpXSwgMjApO1xuICAgICAgICAgICAgdGhpcy5jYy5VUkZDb25qdWdhdGUoKTtcbiAgICAgICAgICAgIGlmIChpICUgMyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYy5pbnZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VhcmNoKCkge1xuICAgICAgICBmb3IgKHRoaXMubGVuZ3RoMSA9IDA7IHRoaXMubGVuZ3RoMSA8IHRoaXMuc29sOyB0aGlzLmxlbmd0aDErKykge1xuICAgICAgICAgICAgZm9yICh0aGlzLnVyZklkeCA9IDA7IHRoaXMudXJmSWR4IDwgNjsgdGhpcy51cmZJZHgrKykge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5jb25qTWFzayAmICgxIDw8IHRoaXMudXJmSWR4KSkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGhhc2UxUHJlTW92ZXModGhpcy5tYXhQcmVNb3ZlcywgLTMwLCB0aGlzLnVyZkN1YmllQ3ViZVt0aGlzLnVyZklkeF0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZVNvbCA9PSBudWxsID8gXCJlcnJvcjogbm8gc29sdXRpb24gZm9yIHByb2JcIiA6IHRoaXMuZ2V0U29sdXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZVNvbCA9PSBudWxsID8gXCJlcnJvcjogbm8gc29sdXRpb24gZm9yIGRlcHRoXCIgOiB0aGlzLmdldFNvbHV0aW9uKCk7XG4gICAgfVxuICAgIGdldFNvbHV0aW9uKCkge1xuICAgICAgICBsZXQgcmV0ID0gXCJcIjtcbiAgICAgICAgaWYgKCF0aGlzLm1vdmVTb2wpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJmID0gdGhpcy51cmZJZHg7XG4gICAgICAgIGlmICh1cmYgPCAzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IHRoaXMubW92ZVNvbC5sZW5ndGg7ICsrcykge1xuICAgICAgICAgICAgICAgIHJldCArPSBVdGlsLk1PVkUyU1RSW0N1YmllQ3ViZS5VUkZNb3ZlW3VyZl1bdGhpcy5tb3ZlU29sW3NdXV0gKyBcIiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHMgPSB0aGlzLm1vdmVTb2wubGVuZ3RoIC0gMTsgcyA+PSAwOyAtLXMpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gVXRpbC5NT1ZFMlNUUltDdWJpZUN1YmUuVVJGTW92ZVt1cmZdW3RoaXMubW92ZVNvbFtzXV1dICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcGhhc2UxUHJlTW92ZXMobWF4bCwgbG0sIGNjKSB7XG4gICAgICAgIHRoaXMucHJlTW92ZUxlbiA9IHRoaXMubWF4UHJlTW92ZXMgLSBtYXhsO1xuICAgICAgICBpZiAodGhpcy5wcmVNb3ZlTGVuID09IDAgfHwgKCgweDM2ZmI3ID4+IGxtKSAmIDEpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVwdGgxID0gdGhpcy5sZW5ndGgxIC0gdGhpcy5wcmVNb3ZlTGVuO1xuICAgICAgICAgICAgdGhpcy5waGFzZTFDdWJpZVswXS5jb3B5KGNjKTtcbiAgICAgICAgICAgIHRoaXMuYWxsb3dTaG9ydGVyID0gdGhpcy5kZXB0aDEgPT0gU29sdmVyLk1JTl9QMUxFTkdUSF9QUkUgJiYgdGhpcy5wcmVNb3ZlTGVuICE9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlVURbdGhpcy5kZXB0aDEgKyAxXS5zZXRXaXRoUHJ1bihjYywgdGhpcy5kZXB0aDEpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZTEodGhpcy5ub2RlVURbdGhpcy5kZXB0aDEgKyAxXSwgdGhpcy5kZXB0aDEsIC0xKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heGwgPT0gMCB8fCB0aGlzLnByZU1vdmVMZW4gKyBTb2x2ZXIuTUlOX1AxTEVOR1RIX1BSRSA+PSB0aGlzLmxlbmd0aDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGxldCBza2lwTW92ZXMgPSAwO1xuICAgICAgICBpZiAobWF4bCA9PSAxIHx8IHRoaXMucHJlTW92ZUxlbiArIDEgKyBTb2x2ZXIuTUlOX1AxTEVOR1RIX1BSRSA+PSB0aGlzLmxlbmd0aDEpIHtcbiAgICAgICAgICAgIHNraXBNb3ZlcyB8PSAweDM2ZmI3O1xuICAgICAgICB9XG4gICAgICAgIGxtID0gfn4obG0gLyAzKSAqIDM7XG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgMTg7IG0rKykge1xuICAgICAgICAgICAgaWYgKG0gPT0gbG0gfHwgbSA9PSBsbSAtIDkgfHwgbSA9PSBsbSArIDkpIHtcbiAgICAgICAgICAgICAgICBtICs9IDI7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHNraXBNb3ZlcyAmICgxIDw8IG0pKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHQoQ3ViaWVDdWJlLk1vdmVDdWJlW21dLCBjYywgdGhpcy5wcmVNb3ZlQ3ViZXNbbWF4bF0pO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KEN1YmllQ3ViZS5Nb3ZlQ3ViZVttXSwgY2MsIHRoaXMucHJlTW92ZUN1YmVzW21heGxdKTtcbiAgICAgICAgICAgIHRoaXMucHJlTW92ZXNbdGhpcy5tYXhQcmVNb3ZlcyAtIG1heGxdID0gbTtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHRoaXMucGhhc2UxUHJlTW92ZXMobWF4bCAtIDEsIG0sIHRoaXMucHJlTW92ZUN1YmVzW21heGxdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBwaGFzZTEobm9kZSwgbWF4bCwgbG0pIHtcbiAgICAgICAgaWYgKG5vZGUucHJ1biA9PSAwICYmIG1heGwgPCA1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd1Nob3J0ZXIgfHwgbWF4bCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXB0aDEgLT0gbWF4bDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLmluaXRQaGFzZTJQcmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlcHRoMSArPSBtYXhsO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBheGlzID0gMDsgYXhpcyA8IDE4OyBheGlzICs9IDMpIHtcbiAgICAgICAgICAgIGlmIChheGlzID09IGxtIHx8IGF4aXMgPT0gbG0gLSA5KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwb3dlciA9IDA7IHBvd2VyIDwgMzsgcG93ZXIrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBheGlzICsgcG93ZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJ1biA9IHRoaXMubm9kZVVEW21heGxdLmRvTW92ZVBydW4obm9kZSwgbSk7XG4gICAgICAgICAgICAgICAgaWYgKHBydW4gPiBtYXhsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcnVuID09IG1heGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVt0aGlzLmRlcHRoMSAtIG1heGxdID0gbTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkMSA9IE1hdGgubWluKHRoaXMudmFsaWQxLCB0aGlzLmRlcHRoMSAtIG1heGwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHRoaXMucGhhc2UxKHRoaXMubm9kZVVEW21heGxdLCBtYXhsIC0gMSwgYXhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJldCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGluaXRQaGFzZTJQcmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnZhbGlkMTsgaSA8IHRoaXMuZGVwdGgxOyBpKyspIHtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdCh0aGlzLnBoYXNlMUN1YmllW2ldLCBDdWJpZUN1YmUuTW92ZUN1YmVbdGhpcy5tb3ZlW2ldXSwgdGhpcy5waGFzZTFDdWJpZVtpICsgMV0pO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KHRoaXMucGhhc2UxQ3ViaWVbaV0sIEN1YmllQ3ViZS5Nb3ZlQ3ViZVt0aGlzLm1vdmVbaV1dLCB0aGlzLnBoYXNlMUN1YmllW2kgKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZDEgPSB0aGlzLmRlcHRoMTtcbiAgICAgICAgbGV0IHJldCA9IHRoaXMuaW5pdFBoYXNlMih0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxXSk7XG4gICAgICAgIGlmIChyZXQgPT0gMCB8fCB0aGlzLnByZU1vdmVMZW4gPT0gMCB8fCByZXQgPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gfn4odGhpcy5wcmVNb3Zlc1t0aGlzLnByZU1vdmVMZW4gLSAxXSAvIDMpICogMyArIDE7XG4gICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdChDdWJpZUN1YmUuTW92ZUN1YmVbbV0sIHRoaXMucGhhc2UxQ3ViaWVbdGhpcy5kZXB0aDFdLCB0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxICsgMV0pO1xuICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoQ3ViaWVDdWJlLk1vdmVDdWJlW21dLCB0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxXSwgdGhpcy5waGFzZTFDdWJpZVt0aGlzLmRlcHRoMSArIDFdKTtcbiAgICAgICAgdGhpcy5wcmVNb3Zlc1t0aGlzLnByZU1vdmVMZW4gLSAxXSArPSAyIC0gKHRoaXMucHJlTW92ZXNbdGhpcy5wcmVNb3ZlTGVuIC0gMV0gJSAzKSAqIDI7XG4gICAgICAgIHJldCA9IHRoaXMuaW5pdFBoYXNlMih0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxICsgMV0pO1xuICAgICAgICB0aGlzLnByZU1vdmVzW3RoaXMucHJlTW92ZUxlbiAtIDFdICs9IDIgLSAodGhpcy5wcmVNb3Zlc1t0aGlzLnByZU1vdmVMZW4gLSAxXSAlIDMpICogMjtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgaW5pdFBoYXNlMihwaGFzZTJDdWJpZSkge1xuICAgICAgICBsZXQgcDJjb3JuID0gcGhhc2UyQ3ViaWUuQ1Blcm1TeW07XG4gICAgICAgIGNvbnN0IHAyY3N5bSA9IHAyY29ybiAmIDB4ZjtcbiAgICAgICAgcDJjb3JuID4+PSA0O1xuICAgICAgICBsZXQgcDJlZGdlID0gcGhhc2UyQ3ViaWUuRVBlcm1TeW07XG4gICAgICAgIGNvbnN0IHAyZXN5bSA9IHAyZWRnZSAmIDB4ZjtcbiAgICAgICAgcDJlZGdlID4+PSA0O1xuICAgICAgICBjb25zdCBwMm1pZCA9IHBoYXNlMkN1YmllLk1QZXJtO1xuICAgICAgICBjb25zdCBwMmVkZ2VpID0gQ3ViaWVDdWJlLkdldFBlcm1TeW1JbnYocDJlZGdlLCBwMmVzeW0sIGZhbHNlKTtcbiAgICAgICAgY29uc3QgcDJjb3JuaSA9IEN1YmllQ3ViZS5HZXRQZXJtU3ltSW52KHAyY29ybiwgcDJjc3ltLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcHJ1biA9IE1hdGgubWF4KENvb3JkQ3ViZS5HZXRQcnVuaW5nKENvb3JkQ3ViZS5NQ1Blcm1QcnVuLCBwMmNvcm4gKiBDb29yZEN1YmUuTl9NUEVSTSArIENvb3JkQ3ViZS5NUGVybUNvbmpbcDJtaWRdW3AyY3N5bV0pLCBDb29yZEN1YmUuR2V0UHJ1bmluZyhDb29yZEN1YmUuRVBlcm1DQ29tYlBQcnVuLCBwMmVkZ2UgKiBDb29yZEN1YmUuTl9DT01CICtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DQ29tYlBDb25qW0N1YmllQ3ViZS5QZXJtMkNvbWJQW3AyY29ybl0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltwMmVzeW1dW3AyY3N5bV1dKSwgQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biwgKHAyZWRnZWkgPj4gNCkgKiBDb29yZEN1YmUuTl9DT01CICtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DQ29tYlBDb25qW0N1YmllQ3ViZS5QZXJtMkNvbWJQW3AyY29ybmkgPj4gNF0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltwMmVkZ2VpICYgMHhmXVtwMmNvcm5pICYgMHhmXV0pKTtcbiAgICAgICAgY29uc3QgbWF4RGVwMiA9IE1hdGgubWluKFNvbHZlci5NQVhfREVQVEgyLCB0aGlzLnNvbCAtIHRoaXMubGVuZ3RoMSk7XG4gICAgICAgIGlmIChwcnVuID49IG1heERlcDIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcnVuID4gbWF4RGVwMiA/IDIgOiAxO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZXB0aDI7XG4gICAgICAgIGZvciAoZGVwdGgyID0gbWF4RGVwMiAtIDE7IGRlcHRoMiA+PSBwcnVuOyBkZXB0aDItLSkge1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5waGFzZTIocDJlZGdlLCBwMmVzeW0sIHAyY29ybiwgcDJjc3ltLCBwMm1pZCwgZGVwdGgyLCB0aGlzLmRlcHRoMSwgMTApO1xuICAgICAgICAgICAgaWYgKHJldCA8IDApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcHRoMiAtPSByZXQ7XG4gICAgICAgICAgICB0aGlzLm1vdmVTb2wgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZXB0aDEgKyBkZXB0aDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kU29sTW92ZSh0aGlzLm1vdmVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMucHJlTW92ZUxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTb2xNb3ZlKHRoaXMucHJlTW92ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zb2wgPSB0aGlzLm1vdmVTb2wubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXB0aDIgIT0gbWF4RGVwMiAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwZW5kU29sTW92ZShtb3ZlKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZlU29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92ZVNvbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU29sLnB1c2gobW92ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXhpc0N1ciA9IH5+KG1vdmUgLyAzKTtcbiAgICAgICAgY29uc3QgYXhpc0xhc3QgPSB+fih0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDFdIC8gMyk7XG4gICAgICAgIGlmIChheGlzQ3VyID09IGF4aXNMYXN0KSB7XG4gICAgICAgICAgICBjb25zdCBwb3cgPSAoKG1vdmUgJSAzKSArICh0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDFdICUgMykgKyAxKSAlIDQ7XG4gICAgICAgICAgICBpZiAocG93ID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2wucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDFdID0gYXhpc0N1ciAqIDMgKyBwb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92ZVNvbC5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICBheGlzQ3VyICUgMyA9PSBheGlzTGFzdCAlIDMgJiZcbiAgICAgICAgICAgIGF4aXNDdXIgPT0gfn4odGhpcy5tb3ZlU29sW3RoaXMubW92ZVNvbC5sZW5ndGggLSAyXSAvIDMpKSB7XG4gICAgICAgICAgICBjb25zdCBwb3cgPSAoKG1vdmUgJSAzKSArICh0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDJdICUgMykgKyAxKSAlIDQ7XG4gICAgICAgICAgICBpZiAocG93ID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDJdID0gdGhpcy5tb3ZlU29sW3RoaXMubW92ZVNvbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2wucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDJdID0gYXhpc0N1ciAqIDMgKyBwb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlU29sLnB1c2gobW92ZSk7XG4gICAgfVxuICAgIHBoYXNlMihlZGdlLCBlc3ltLCBjb3JuLCBjc3ltLCBtaWQsIG1heGwsIGRlcHRoLCBsbSkge1xuICAgICAgICBpZiAoZWRnZSA9PSAwICYmIGNvcm4gPT0gMCAmJiBtaWQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW92ZU1hc2sgPSBVdGlsLkNLTVYyQklUW2xtXTtcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCAxMDsgbSsrKSB7XG4gICAgICAgICAgICBpZiAoKChtb3ZlTWFzayA+PiBtKSAmIDEpICE9IDApIHtcbiAgICAgICAgICAgICAgICBtICs9ICgweDQyID4+IG0pICYgMztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1pZHggPSBDb29yZEN1YmUuTVBlcm1Nb3ZlW21pZF1bbV07XG4gICAgICAgICAgICBsZXQgY29ybnggPSBDb29yZEN1YmUuQ1Blcm1Nb3ZlW2Nvcm5dW0N1YmllQ3ViZS5TeW1Nb3ZlVURbY3N5bV1bbV1dO1xuICAgICAgICAgICAgY29uc3QgY3N5bXggPSBDdWJpZUN1YmUuU3ltTXVsdFtjb3JueCAmIDB4Zl1bY3N5bV07XG4gICAgICAgICAgICBjb3JueCA+Pj0gNDtcbiAgICAgICAgICAgIGxldCBlZGdleCA9IENvb3JkQ3ViZS5FUGVybU1vdmVbZWRnZV1bQ3ViaWVDdWJlLlN5bU1vdmVVRFtlc3ltXVttXV07XG4gICAgICAgICAgICBjb25zdCBlc3lteCA9IEN1YmllQ3ViZS5TeW1NdWx0W2VkZ2V4ICYgMHhmXVtlc3ltXTtcbiAgICAgICAgICAgIGVkZ2V4ID4+PSA0O1xuICAgICAgICAgICAgY29uc3QgZWRnZWkgPSBDdWJpZUN1YmUuR2V0UGVybVN5bUludihlZGdleCwgZXN5bXgsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5pID0gQ3ViaWVDdWJlLkdldFBlcm1TeW1JbnYoY29ybngsIGNzeW14LCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBwcnVuID0gQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biwgKGVkZ2VpID4+IDQpICogQ29vcmRDdWJlLk5fQ09NQiArXG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLkNDb21iUENvbmpbQ3ViaWVDdWJlLlBlcm0yQ29tYlBbY29ybmkgPj4gNF0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltlZGdlaSAmIDB4Zl1bY29ybmkgJiAweGZdXSk7XG4gICAgICAgICAgICBpZiAocHJ1biA+IG1heGwgKyAxKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcnVuID49IG1heGwpIHtcbiAgICAgICAgICAgICAgICBtICs9ICgweDQyID4+IG0pICYgMyAmIChtYXhsIC0gcHJ1bik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcnVuID0gTWF0aC5tYXgoQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biwgZWRnZXggKiBDb29yZEN1YmUuTl9DT01CICtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuQ0NvbWJQQ29ualtDdWJpZUN1YmUuUGVybTJDb21iUFtjb3JueF0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltlc3lteF1bY3N5bXhdXSksIENvb3JkQ3ViZS5HZXRQcnVuaW5nKENvb3JkQ3ViZS5NQ1Blcm1QcnVuLCBjb3JueCAqIENvb3JkQ3ViZS5OX01QRVJNICsgQ29vcmRDdWJlLk1QZXJtQ29ualttaWR4XVtjc3lteF0pKTtcbiAgICAgICAgICAgIGlmIChwcnVuID49IG1heGwpIHtcbiAgICAgICAgICAgICAgICBtICs9ICgweDQyID4+IG0pICYgMyAmIChtYXhsIC0gcHJ1bik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLnBoYXNlMihlZGdleCwgZXN5bXgsIGNvcm54LCBjc3lteCwgbWlkeCwgbWF4bCAtIDEsIGRlcHRoICsgMSwgbSk7XG4gICAgICAgICAgICBpZiAocmV0ID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVbZGVwdGhdID0gVXRpbC5VRDJTVERbbV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufVxuU29sdmVyLk1BWF9QUkVfTU9WRVMgPSAyMDtcblNvbHZlci5UUllfSU5WRVJTRSA9IHRydWU7XG5Tb2x2ZXIuVFJZX1RIUkVFX0FYRVMgPSB0cnVlO1xuU29sdmVyLk1JTl9QMUxFTkdUSF9QUkUgPSA3O1xuU29sdmVyLk1BWF9ERVBUSDIgPSAxMztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuICAgIHN0YXRpYyBHZXROUGFyaXR5KGlkeCwgbikge1xuICAgICAgICBsZXQgcCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBuIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHAgXj0gaWR4ICUgKG4gLSBpKTtcbiAgICAgICAgICAgIGlkeCA9IH5+KGlkeCAvIChuIC0gaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwICYgMTtcbiAgICB9XG4gICAgc3RhdGljIFNldFZhbChzcmMsIGRzdCwgZWRnZSkge1xuICAgICAgICByZXR1cm4gZWRnZSA/IChkc3QgPDwgMSkgfCAoc3JjICYgMSkgOiBkc3QgfCAoc3JjICYgMHhmOCk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRWYWwoc3JjLCBlZGdlKSB7XG4gICAgICAgIHJldHVybiBlZGdlID8gc3JjID4+IDEgOiBzcmMgJiA3O1xuICAgIH1cbiAgICBzdGF0aWMgU2V0TlBlcm0oYXJyLCBpZHgsIG4sIGVkZ2UpIHtcbiAgICAgICAgbi0tO1xuICAgICAgICBsZXQgdmFsID0gMHg3NjU0MzIxMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBVdGlsLkZhY3RbbiAtIGldO1xuICAgICAgICAgICAgbGV0IHYgPSB+fihpZHggLyBwKTtcbiAgICAgICAgICAgIGlkeCAlPSBwO1xuICAgICAgICAgICAgdiA8PD0gMjtcbiAgICAgICAgICAgIGFycltpXSA9IFV0aWwuU2V0VmFsKGFycltpXSwgKHZhbCA+PiB2KSAmIDB4ZiwgZWRnZSk7XG4gICAgICAgICAgICBjb25zdCBtID0gKDEgPDwgdikgLSAxO1xuICAgICAgICAgICAgdmFsID0gKHZhbCAmIG0pICsgKCh2YWwgPj4gNCkgJiB+bSk7XG4gICAgICAgIH1cbiAgICAgICAgYXJyW25dID0gVXRpbC5TZXRWYWwoYXJyW25dLCB2YWwgJiAweGYsIGVkZ2UpO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0TlBlcm0oYXJyLCBuLCBlZGdlKSB7XG4gICAgICAgIGxldCBpZHggPSAwLCB2YWwgPSAweDc2NTQzMjEwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBVdGlsLkdldFZhbChhcnJbaV0sIGVkZ2UpIDw8IDI7XG4gICAgICAgICAgICBpZHggPSAobiAtIGkpICogaWR4ICsgKCh2YWwgPj4gdikgJiAweGYpO1xuICAgICAgICAgICAgdmFsIC09IDB4MTExMTExMTAgPDwgdjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgICBzdGF0aWMgU2V0TlBlcm1GdWxsKGFyciwgaWR4LCBuLCBlZGdlKSB7XG4gICAgICAgIGFycltuIC0gMV0gPSBVdGlsLlNldFZhbChhcnJbbiAtIDFdLCAwLCBlZGdlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG4gLSAyOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgYXJyW2ldID0gVXRpbC5TZXRWYWwoYXJyW2ldLCBpZHggJSAobiAtIGkpLCBlZGdlKTtcbiAgICAgICAgICAgIGlkeCA9IH5+KGlkeCAvIChuIC0gaSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbjsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuR2V0VmFsKGFycltqXSwgZWRnZSkgPj0gVXRpbC5HZXRWYWwoYXJyW2ldLCBlZGdlKSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJbal0gPSBVdGlsLlNldFZhbChhcnJbal0sIFV0aWwuR2V0VmFsKGFycltqXSwgZWRnZSkgKyAxLCBlZGdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldE5QZXJtRnVsbChhcnIsIG4sIGVkZ2UpIHtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBpZHggKj0gbiAtIGk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5HZXRWYWwoYXJyW2pdLCBlZGdlKSA8IFV0aWwuR2V0VmFsKGFycltpXSwgZWRnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytpZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb21iKGFyciwgbWFzaywgZWRnZSkge1xuICAgICAgICBjb25zdCBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHZhbHVlID0gMCwgciA9IDQ7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbmQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBwZXJtID0gVXRpbC5HZXRWYWwoYXJyW2ldLCBlZGdlKTtcbiAgICAgICAgICAgIGlmICgocGVybSAmIDB4YykgPT0gbWFzaykge1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IFV0aWwuQ25rW2ldW3ItLV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgU2V0Q29tYihhcnIsIHZhbHVlLCBtYXNrLCBlZGdlKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgciA9IDQsIGZpbGwgPSBlbmQ7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbmQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gVXRpbC5DbmtbaV1bcl0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSAtPSBVdGlsLkNua1tpXVtyLS1dO1xuICAgICAgICAgICAgICAgIGFycltpXSA9IFV0aWwuU2V0VmFsKGFycltpXSwgciB8IG1hc2ssIGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChmaWxsICYgMHhjKSA9PSBtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGwgLT0gNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyW2ldID0gVXRpbC5TZXRWYWwoYXJyW2ldLCBmaWxsLS0sIGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuVXRpbC5VeDEgPSAwO1xuVXRpbC5VeDIgPSAxO1xuVXRpbC5VeDMgPSAyO1xuVXRpbC5SeDEgPSAzO1xuVXRpbC5SeDIgPSA0O1xuVXRpbC5SeDMgPSA1O1xuVXRpbC5GeDEgPSA2O1xuVXRpbC5GeDIgPSA3O1xuVXRpbC5GeDMgPSA4O1xuVXRpbC5EeDEgPSA5O1xuVXRpbC5EeDIgPSAxMDtcblV0aWwuRHgzID0gMTE7XG5VdGlsLkx4MSA9IDEyO1xuVXRpbC5MeDIgPSAxMztcblV0aWwuTHgzID0gMTQ7XG5VdGlsLkJ4MSA9IDE1O1xuVXRpbC5CeDIgPSAxNjtcblV0aWwuQngzID0gMTc7XG5VdGlsLlUxID0gMDtcblV0aWwuVTIgPSAxO1xuVXRpbC5VMyA9IDI7XG5VdGlsLlU0ID0gMztcblV0aWwuVTUgPSA0O1xuVXRpbC5VNiA9IDU7XG5VdGlsLlU3ID0gNjtcblV0aWwuVTggPSA3O1xuVXRpbC5VOSA9IDg7XG5VdGlsLlIxID0gOTtcblV0aWwuUjIgPSAxMDtcblV0aWwuUjMgPSAxMTtcblV0aWwuUjQgPSAxMjtcblV0aWwuUjUgPSAxMztcblV0aWwuUjYgPSAxNDtcblV0aWwuUjcgPSAxNTtcblV0aWwuUjggPSAxNjtcblV0aWwuUjkgPSAxNztcblV0aWwuRjEgPSAxODtcblV0aWwuRjIgPSAxOTtcblV0aWwuRjMgPSAyMDtcblV0aWwuRjQgPSAyMTtcblV0aWwuRjUgPSAyMjtcblV0aWwuRjYgPSAyMztcblV0aWwuRjcgPSAyNDtcblV0aWwuRjggPSAyNTtcblV0aWwuRjkgPSAyNjtcblV0aWwuRDEgPSAyNztcblV0aWwuRDIgPSAyODtcblV0aWwuRDMgPSAyOTtcblV0aWwuRDQgPSAzMDtcblV0aWwuRDUgPSAzMTtcblV0aWwuRDYgPSAzMjtcblV0aWwuRDcgPSAzMztcblV0aWwuRDggPSAzNDtcblV0aWwuRDkgPSAzNTtcblV0aWwuTDEgPSAzNjtcblV0aWwuTDIgPSAzNztcblV0aWwuTDMgPSAzODtcblV0aWwuTDQgPSAzOTtcblV0aWwuTDUgPSA0MDtcblV0aWwuTDYgPSA0MTtcblV0aWwuTDcgPSA0MjtcblV0aWwuTDggPSA0MztcblV0aWwuTDkgPSA0NDtcblV0aWwuQjEgPSA0NTtcblV0aWwuQjIgPSA0NjtcblV0aWwuQjMgPSA0NztcblV0aWwuQjQgPSA0ODtcblV0aWwuQjUgPSA0OTtcblV0aWwuQjYgPSA1MDtcblV0aWwuQjcgPSA1MTtcblV0aWwuQjggPSA1MjtcblV0aWwuQjkgPSA1MztcblV0aWwuVSA9IDA7XG5VdGlsLlIgPSAxO1xuVXRpbC5GID0gMjtcblV0aWwuRCA9IDM7XG5VdGlsLkwgPSA0O1xuVXRpbC5CID0gNTtcblV0aWwuQ29ybmVyRmFjZWxldCA9IFtcbiAgICBbVXRpbC5VOSwgVXRpbC5SMSwgVXRpbC5GM10sXG4gICAgW1V0aWwuVTcsIFV0aWwuRjEsIFV0aWwuTDNdLFxuICAgIFtVdGlsLlUxLCBVdGlsLkwxLCBVdGlsLkIzXSxcbiAgICBbVXRpbC5VMywgVXRpbC5CMSwgVXRpbC5SM10sXG4gICAgW1V0aWwuRDMsIFV0aWwuRjksIFV0aWwuUjddLFxuICAgIFtVdGlsLkQxLCBVdGlsLkw5LCBVdGlsLkY3XSxcbiAgICBbVXRpbC5ENywgVXRpbC5COSwgVXRpbC5MN10sXG4gICAgW1V0aWwuRDksIFV0aWwuUjksIFV0aWwuQjddLFxuXTtcblV0aWwuRWRnZUZhY2VsZXQgPSBbXG4gICAgW1V0aWwuVTYsIFV0aWwuUjJdLFxuICAgIFtVdGlsLlU4LCBVdGlsLkYyXSxcbiAgICBbVXRpbC5VNCwgVXRpbC5MMl0sXG4gICAgW1V0aWwuVTIsIFV0aWwuQjJdLFxuICAgIFtVdGlsLkQ2LCBVdGlsLlI4XSxcbiAgICBbVXRpbC5EMiwgVXRpbC5GOF0sXG4gICAgW1V0aWwuRDQsIFV0aWwuTDhdLFxuICAgIFtVdGlsLkQ4LCBVdGlsLkI4XSxcbiAgICBbVXRpbC5GNiwgVXRpbC5SNF0sXG4gICAgW1V0aWwuRjQsIFV0aWwuTDZdLFxuICAgIFtVdGlsLkI2LCBVdGlsLkw0XSxcbiAgICBbVXRpbC5CNCwgVXRpbC5SNl0sXG5dO1xuVXRpbC5NT1ZFMlNUUiA9IFtcbiAgICBcIlUgXCIsXG4gICAgXCJVMlwiLFxuICAgIFwiVSdcIixcbiAgICBcIlIgXCIsXG4gICAgXCJSMlwiLFxuICAgIFwiUidcIixcbiAgICBcIkYgXCIsXG4gICAgXCJGMlwiLFxuICAgIFwiRidcIixcbiAgICBcIkQgXCIsXG4gICAgXCJEMlwiLFxuICAgIFwiRCdcIixcbiAgICBcIkwgXCIsXG4gICAgXCJMMlwiLFxuICAgIFwiTCdcIixcbiAgICBcIkIgXCIsXG4gICAgXCJCMlwiLFxuICAgIFwiQidcIixcbl07XG5VdGlsLlVEMlNURCA9IFtcbiAgICBVdGlsLlV4MSxcbiAgICBVdGlsLlV4MixcbiAgICBVdGlsLlV4MyxcbiAgICBVdGlsLlJ4MixcbiAgICBVdGlsLkZ4MixcbiAgICBVdGlsLkR4MSxcbiAgICBVdGlsLkR4MixcbiAgICBVdGlsLkR4MyxcbiAgICBVdGlsLkx4MixcbiAgICBVdGlsLkJ4MixcbiAgICBVdGlsLlJ4MSxcbiAgICBVdGlsLlJ4MyxcbiAgICBVdGlsLkZ4MSxcbiAgICBVdGlsLkZ4MyxcbiAgICBVdGlsLkx4MSxcbiAgICBVdGlsLkx4MyxcbiAgICBVdGlsLkJ4MSxcbiAgICBVdGlsLkJ4Myxcbl07XG5VdGlsLlNURDJVRCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtVdGlsLlVEMlNURFtpXV0gPSBpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSkoKTtcblV0aWwuQ0tNVjJCSVQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBjb25zdCBpeCA9IH5+KFV0aWwuVUQyU1REW2ldIC8gMyk7XG4gICAgICAgIHJlc3VsdFtpXSA9IDA7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3QganggPSB+fihVdGlsLlVEMlNURFtqXSAvIDMpO1xuICAgICAgICAgICAgcmVzdWx0W2ldIHw9IChpeCA9PSBqeCB8fCAoaXggJSAzID09IGp4ICUgMyAmJiBpeCA+PSBqeCkgPyAxIDogMCkgPDwgajtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHRbMTBdID0gMDtcbiAgICByZXR1cm4gcmVzdWx0O1xufSkoKTtcblV0aWwuQ25rID0gKCgpID0+IHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBjb25zdCBmYWN0ID0gWzFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTM7IGkrKykge1xuICAgICAgICByZXRbaV0gPSBbXTtcbiAgICAgICAgZmFjdFtpICsgMV0gPSBmYWN0W2ldICogKGkgKyAxKTtcbiAgICAgICAgcmV0W2ldWzBdID0gcmV0W2ldW2ldID0gMTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMzsgaisrKSB7XG4gICAgICAgICAgICByZXRbaV1bal0gPSBqIDw9IGkgPyByZXRbaSAtIDFdW2ogLSAxXSArIHJldFtpIC0gMV1bal0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59KSgpO1xuVXRpbC5GYWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCByZXQgPSBbMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XG4gICAgICAgIHJldFtpICsgMV0gPSByZXRbaV0gKiAoaSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufSkoKTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19kZWNvcmF0ZSwgX19tZXRhZGF0YSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3ZpZGUsIFJlZiwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gXCIuLi92aWV3cG9ydFwiO1xuaW1wb3J0IFdvcmxkIGZyb20gXCIuLi8uLi9jdWJlL3dvcmxkXCI7XG5pbXBvcnQgU2V0dGluZyBmcm9tIFwiLi4vc2V0dGluZ1wiO1xuaW1wb3J0IHsgY3ViZV9jb25maWcsIGRlbGF5ZWRZZWxsb3dUb1RvcCwgZmFjZVRvQ29sb3IsIGxibE9yZGVyTWFwcGluZywgb3Bwb3NpdGVNYXBwaW5nLCBzdHJpbmdUb1R3aXN0UGFyYW1zLCB0d2lzdF9kdXJhdGlvbiwgd2hpdGVUb0JvdHRvbSB9IGZyb20gXCIuLi8uLi9jdWJlL3V0aWxzXCI7XG5pbXBvcnQgeyBUd2lzdCwgdHdpc3RlciB9IGZyb20gXCIuLi8uLi9jdWJlL3R3aXN0ZXJcIjtcbmltcG9ydCBJbnRlcmFjdG9yIGZyb20gXCIuLi8uLi9jdWJlL2ludGVyYWN0b3JcIjtcbmltcG9ydCBDYXB0dXJlciBmcm9tIFwiLi4vLi4vY3ViZS9jYXB0dXJlXCI7XG5pbXBvcnQgTEJMU29sdmVyIGZyb20gXCIuLi8uLi9jdWJlL2xibFwiO1xuaW1wb3J0IEN1YmUgZnJvbSBcIi4uLy4uL2N1YmUvY3ViZVwiO1xuaW1wb3J0IHsgRmFjZSB9IGZyb20gXCIuLi8uLi9jdWJlL3V0aWxzX2ludGVybmFsXCI7XG5pbXBvcnQgU29sdmVyIGZyb20gXCIuLi8uLi9zb2x2ZXIvU29sdmVyXCI7XG5sZXQgUGxheWdyb3VuZCA9IGNsYXNzIFBsYXlncm91bmQgZXh0ZW5kcyBWdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuY3ViZXN0ZXAgPSBbXTtcbiAgICAgICAgdGhpcy5zb2x1dGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXkgPSAwO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IFtdO1xuICAgICAgICB0aGlzLmJ1dHRvbkVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lVGhyZXNob2xkID0gMzAwO1xuICAgICAgICB0aGlzLmxpc3RkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FwdHVyZXIgPSBuZXcgQ2FwdHVyZXIoKTtcbiAgICAgICAgdGhpcy5kZW1vRGF0YSA9IHJlcXVpcmUoJy4vZGVtb3MuanNvbicpO1xuICAgICAgICB0aGlzLmRlbW9JbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kZW1vR3JpZFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy5pc0RlbW9Nb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJsU29sdmVyID0gbmV3IExCTFNvbHZlcigpO1xuICAgICAgICB0aGlzLnNob3dUaWNrcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2t1cFN0YXRlID0gW107XG4gICAgICAgIHRoaXMuY3ViZWpzID0gaW1wb3J0KCcuLi8uLi9wcmVsb2FkL2N1YmVqcycpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGN1YmVfY29uZmlnO1xuICAgICAgICB0aGlzLmlzU3dpdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUZWFjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ29sb3JNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXpoY3ViZVN0YXRlID0gW107XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIlJcIjtcbiAgICAgICAgdGhpcy5lcnJvcnl6aCA9IFwiXCI7XG4gICAgICAgIHRoaXMuaXNlcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNvbHZlciA9IG5ldyBTb2x2ZXIoKTtcbiAgICAgICAgdGhpcy5zb2x1dGlvbnl6aCA9IFwiXCI7XG4gICAgICAgIHRoaXMuc3RpY2tlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAgICAgICBSOiBcIiNCNzFDMUNcIixcbiAgICAgICAgICAgIEw6IFwiI0ZGNkQwMFwiLFxuICAgICAgICAgICAgVTogXCIjRjBGMEYwXCIsXG4gICAgICAgICAgICBEOiBcIiNGRkQ2MDBcIixcbiAgICAgICAgICAgIEY6IFwiIzAwQTAyMFwiLFxuICAgICAgICAgICAgQjogXCIjMEQ0N0ExXCIsXG4gICAgICAgICAgICBjb3JlOiBcIiMyMDIwMjBcIixcbiAgICAgICAgICAgIGdyYXk6IFwiIzgwODA4MFwiLFxuICAgICAgICAgICAgaGlnaDogXCIjRkYwMDgwXCIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3J0ID0gW1wiUlwiLCBcIkZcIiwgXCJEXCIsIFwiTFwiLCBcIkJcIiwgXCJVXCJdO1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmludGVyYWN0b3IgPSBuZXcgSW50ZXJhY3RvcihbXG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0LmNhbnZhc0VsZW0sXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcC1mbGV4XCIpLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3R0b20tZmxleFwiKVxuICAgICAgICBdLCB0aGlzLndvcmxkLmNvbnRyb2xsZXIuaW50ZXJhY3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVtb0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGVtb0ltYWdlcy5wdXNoKHRoaXMuY2FwdHVyZXIuZ2VuZXJhdGUodGhpcy5kZW1vRGF0YVtpXS5zdGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKHRoaXMucmVzaXplKTtcbiAgICAgICAgdGhpcy5sb29wKCk7XG4gICAgfVxuICAgIGxvb3AoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlld3BvcnQuZHJhdygpO1xuICAgICAgICB0aGlzLnNvbHZlci5pbml0KCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMuc2l6ZSA9IE1hdGguY2VpbChNYXRoLm1pbih0aGlzLndpZHRoIC8gNiwgdGhpcy5oZWlnaHQgLyAxMikpO1xuICAgICAgICB0aGlzLmRlbW9HcmlkV2lkdGggPSB+fihNYXRoLm1pbih0aGlzLnNpemUgKiAyLCB0aGlzLndpZHRoIC8gNCkgKiAxMDApIC8gMTAwO1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSAqIDMuNSk7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sb3JNb2RlKVxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydC5yZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSB0aGlzLnNpemUgKiA1KTtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgc2NyYW1ibGUoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnNjcmFtYmxlKCk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzZXQoKTtcbiAgICAgICAgdGhpcy5pbml0U3RhdGUgPSB0aGlzLndvcmxkLmN1YmUuc2VyaWFsaXplKCk7XG4gICAgfVxuICAgIGlkbGUodmFsdWUpIHtcbiAgICAgICAgdHdpc3Rlci50d2lzdHMucHVzaChuZXcgVHdpc3QoMCwgTWF0aC5QSSwgdHdpc3RfZHVyYXRpb24oY3ViZV9jb25maWcuc3BlZWQpICogdmFsdWUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHZhbHVlIC0gTWF0aC5QSSkgPCAxZS02O1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHNvbHZlKGlzRW50cnkgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNFbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1BsYXllck1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrdXBTdGF0ZSA9IHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U3RhdGUgPSB0aGlzLndvcmxkLmN1YmUuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzb2x2ZXJJZCA9IGN1YmVfY29uZmlnLnNvbHZlcklkO1xuICAgICAgICAgICAgaWYgKHNvbHZlcklkID09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgc29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB3dGIgPSB3aGl0ZVRvQm90dG9tKHRoaXMuaW5pdFN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYmxTdGF0ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgQ3ViZSgpO1xuICAgICAgICAgICAgICAgIGN1YmUucmVzdG9yZSh0aGlzLmluaXRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc3RyaW5nVG9Ud2lzdFBhcmFtc1t3dGJdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgcGFyYW1zLmxheWVycykge1xuICAgICAgICAgICAgICAgICAgICBjdWJlLnRhYmxlLmdyb3Vwc1twYXJhbXMuYXhpc11bbGF5ZXJdLnR3aXN0KHBhcmFtcy5hbmdsZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHd0YlN0YXRlID0gY3ViZS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZhY2VTdGF0ZSBvZiB3dGJTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBsYmxTdGF0ZS5wdXNoKGZhY2VUb0NvbG9yW2ZhY2VTdGF0ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkZWxheWVkWWVsbG93VG9Ub3Aod3RiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZCA9IHJlc3VsdC5jb21iaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxheWVkID0gcmVzdWx0LmRlbGF5ZWQ7XG4gICAgICAgICAgICAgICAgc29sdXRpb24ucHVzaChjb21iaW5lZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGJsU29sdXRpb24gPSB0aGlzLmxibFNvbHZlci5zb2x2ZShsYmxTdGF0ZSwgZGVsYXllZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGJsU29sdXRpb24pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGJsU29sdXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGJsT3JkZXJzID0gbGJsU29sdXRpb25baV0uc3BsaXQoXCJcIikuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9yZGVyIG9mIGxibE9yZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBsYmxPcmRlck1hcHBpbmdbb3JkZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGVwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGVwICE9ICd+Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBzdHJpbmdUb1R3aXN0UGFyYW1zW3N0ZXBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmF4aXMgIT0gZGVsYXllZFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcFswXSA9PSAneScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBvcHBvc2l0ZU1hcHBpbmdbc3RlcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RlcC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwID0gb3Bwb3NpdGVNYXBwaW5nW3N0ZXBbMF1dLmNvbmNhdChzdGVwLnN1YnN0cmluZygxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwID0gb3Bwb3NpdGVNYXBwaW5nW3N0ZXBbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb24ucHVzaChzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbi5wdXNoKGRlbGF5ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvbHV0aW9uLnB1c2goXCJ+XCIpO1xuICAgICAgICAgICAgICAgIHNvbHV0aW9uID0gc29sdXRpb24uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICsgMSA8IHNvbHV0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb2x1dGlvbltpXSA9PSBcIkZcIiAmJiBzb2x1dGlvbltpICsgMV0gPT0gXCJGXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbHV0aW9uW2ldID0gXCJGJ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb25baSArIDFdID0gXCJGJ1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc29sdXRpb24gPSBzb2x1dGlvbjtcbiAgICAgICAgICAgICAgICBpZiAobGJsU29sdXRpb24uZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tzID0gXCJhbHdheXNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXN0ZXAgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGogb2YgdGhpcy5zb2x1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBcIn5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGlja3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdWJlc3RlcC5wdXNoKCchJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUaWNrcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdWJlc3RlcC5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNvbHZlcklkID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHlpZWxkIHRoaXMuY3ViZWpzO1xuICAgICAgICAgICAgICAgIHRoaXMuc29sdXRpb24gPSBwcm9taXNlLkN1YmVcbiAgICAgICAgICAgICAgICAgICAgLmZyb21TdHJpbmcodGhpcy5pbml0U3RhdGUpXG4gICAgICAgICAgICAgICAgICAgIC5zb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9VMi9nLCBcIlUgVVwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvRDIvZywgXCJEIERcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL0YyL2csIFwiRiBGXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9CMi9nLCBcIkIgQlwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvTDIvZywgXCJMIExcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1IyL2csIFwiUiBSXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpLlxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2x1dGlvbi5wdXNoKFwiflwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaWNrcyA9IFwiYWx3YXlzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluaXRTdGF0ZS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc29sdXRpb24uam9pbihcIiBcIikpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIHRoaXMuaWRsZSgwLjUpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBpc0VudHJ5O1xuICAgICAgICAgICAgdGhpcy5pc1RlYWNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblBsYXllck1vZGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMud29ybGQuY29udHJvbGxlci5sb2NrID0gdGhpcy5pc1BsYXllck1vZGU7XG4gICAgfVxuICAgIG9uUGxheWluZ0NoYW5nZSgpIHtcbiAgICAgICAgdGhpcy53b3JsZC5jb250cm9sbGVyLmRpc2FibGUgPSB0aGlzLmlzUGxheWluZztcbiAgICB9XG4gICAgY2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWVyTW9kZSAmJiB0aGlzLmlzUGxheWluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPT0gdGhpcy5zb2x1dGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPCB0aGlzLnNvbHV0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghdHdpc3Rlci5pc1R3aXN0aW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc3RyaW5nVG9Ud2lzdFBhcmFtc1t0aGlzLnNvbHV0aW9uW3RoaXMucHJvZ3Jlc3NdXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBsYXllciBvZiBwYXJhbXMubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW3BhcmFtcy5heGlzXVtsYXllcl0udHdpc3QocGFyYW1zLmFuZ2xlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA9PSB0aGlzLnNvbHV0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIHRoaXMuaWRsZSgxLjUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHF1aXQoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzRGVtb01vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEZW1vTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5yZXN0b3JlKHRoaXMuYmFja3VwU3RhdGUpO1xuICAgIH1cbiAgICBzd2l0Y2goKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgdGhpcy5pc1N3aXRjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSB0cnVlO1xuICAgIH1cbiAgICBzZXRQcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzdG9yZSh0aGlzLmluaXRTdGF0ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc3RyaW5nVG9Ud2lzdFBhcmFtc1t0aGlzLnNvbHV0aW9uW2ldXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgcGFyYW1zLmxheWVycykge1xuICAgICAgICAgICAgICAgIHRoaXMud29ybGQuY3ViZS50YWJsZS5ncm91cHNbcGFyYW1zLmF4aXNdW2xheWVyXS50d2lzdChwYXJhbXMuYW5nbGUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ3JlZW5CdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25FbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHRoaXMuY2xpY2tUaW1lVGhyZXNob2xkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1BsYXllck1vZGUgJiYgIXRoaXMuaXNDb2xvck1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmFtYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzQ29sb3JNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbHl6aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmx1ZUJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25FbmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfSwgdGhpcy5jbGlja1RpbWVUaHJlc2hvbGQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUGxheWVyTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWRCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25FbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHRoaXMuY2xpY2tUaW1lVGhyZXNob2xkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1BsYXllck1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbG9yTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvbHV0aW9ueXpoID0gdGhpcy5zb2x2ZXIuc29sdmUodGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNvbHV0aW9ueXpoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc29sdXRpb255emggPT0gXCJncmVhdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYWxseXpoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yeXpoID0gdGhpcy5zb2x1dGlvbnl6aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmxhY2tCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25FbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHRoaXMuY2xpY2tUaW1lVGhyZXNob2xkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N3aXRjaCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3REZW1vKGlkeCkge1xuICAgICAgICB0aGlzLmxpc3RkID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5pc1BsYXllck1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja3VwU3RhdGUgPSB0aGlzLndvcmxkLmN1YmUuc2VyaWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RlbW9Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzVGVhY2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlbW9OYW1lID0gdGhpcy5kZW1vRGF0YVtpZHhdLm5hbWU7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRlID0gdGhpcy5kZW1vRGF0YVtpZHhdLnN0YXRlLnNwbGl0KFwiXCIpO1xuICAgICAgICB0aGlzLnNvbHV0aW9uID0gdGhpcy5kZW1vRGF0YVtpZHhdLnNvbHV0aW9uLnNwbGl0KCcgJykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICB0aGlzLnNvbHV0aW9uLnB1c2goXCJ+XCIpO1xuICAgICAgICB0aGlzLnNob3dUaWNrcyA9IFwiYWx3YXlzXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5pdFN0YXRlLmpvaW4oXCJcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNvbHV0aW9uLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgb25Tb2x2ZXJDaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWVyTW9kZSAmJiAhdGhpcy5pc0RlbW9Nb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZmFjZXMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGZhY2Ugb2YgW0ZhY2UuTCwgRmFjZS5SLCBGYWNlLkQsIEZhY2UuVSwgRmFjZS5CLCBGYWNlLkZdKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBGYWNlW2ZhY2VdO1xuICAgICAgICAgICAgcmV0W2tleV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLmluaXRTdGF0ZSkge1xuICAgICAgICAgICAgcmV0W2NdKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgc3RpY2soaW5kZXgsIGZhY2UpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdFN0YXRlID0gdGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpO1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5zdGlja2Vyc1tGYWNlW2ZhY2VdXTtcbiAgICAgICAgaWYgKGFyciA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFyciA9IHt9O1xuICAgICAgICAgICAgdGhpcy5zdGlja2Vyc1tGYWNlW2ZhY2VdXSA9IGFycjtcbiAgICAgICAgfVxuICAgICAgICBhcnJbaW5kZXhdID0gdGhpcy5jb2xvcjtcbiAgICAgICAgbGV0IHp5emggPSBNYXRoLmZsb29yKGluZGV4IC8gOSk7XG4gICAgICAgIGxldCB5eXpoID0gTWF0aC5mbG9vcigoaW5kZXggJSA5KSAvIDMpO1xuICAgICAgICBsZXQgeHl6aCA9IE1hdGguZmxvb3IoKGluZGV4ICUgOSkgJSAzKTtcbiAgICAgICAgbGV0IHRlbXAgPSAwO1xuICAgICAgICBzd2l0Y2ggKGZhY2UpIHtcbiAgICAgICAgICAgIGNhc2UgRmFjZS5VOlxuICAgICAgICAgICAgICAgIHRlbXAgPSAzICogenl6aCArIHh5emg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZhY2UuUjpcbiAgICAgICAgICAgICAgICB0ZW1wID0gOSArIDMgKiAoMiAtIHl5emgpICsgMiAtIHp5emg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZhY2UuRjpcbiAgICAgICAgICAgICAgICB0ZW1wID0gOSAqIDIgKyAzICogKDIgLSB5eXpoKSArIHh5emg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZhY2UuRDpcbiAgICAgICAgICAgICAgICB0ZW1wID0gOSAqIDMgKyAzICogKDIgLSB6eXpoKSArIHh5emg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZhY2UuTDpcbiAgICAgICAgICAgICAgICB0ZW1wID0gOSAqIDQgKyAzICogKDIgLSB5eXpoKSArIHp5emg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZhY2UuQjpcbiAgICAgICAgICAgICAgICB0ZW1wID0gOSAqIDUgKyAzICogKDIgLSB5eXpoKSArIDIgLSB4eXpoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZW1wID09IDQgfHwgdGVtcCA9PSAxMyB8fCB0ZW1wID09IDIyIHx8IHRlbXAgPT0gMzEgfHwgdGVtcCA9PSA0MCB8fCB0ZW1wID09IDQ5KSB7XG4gICAgICAgICAgICB0aGlzLmlzZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lcnJvcnl6aCA9IFwiRG9uJ3QgdG91Y2ggbWUhISFcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTdGF0ZVt0ZW1wXSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5yZXN0b3JlKHRoaXMuaW5pdFN0YXRlKTtcbiAgICB9XG4gICAgc2V0Y3ViZXl6aCgpIHtcbiAgICAgICAgdGhpcy5pc0NvbG9yTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHl6aHN0YXRlID0gXCI/Pz8/VT8/Pz8/Pz8/Uj8/Pz8/Pz8/Rj8/Pz8/Pz8/RD8/Pz8/Pz8/TD8/Pz8/Pz8/Qj8/Pz9cIjtcbiAgICAgICAgdGhpcy5pbml0U3RhdGUgPSB5emhzdGF0ZS5zcGxpdChcIlwiKTtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnJlc3RvcmUodGhpcy5pbml0U3RhdGUpO1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSAqIDUpO1xuICAgICAgICB0aGlzLndvcmxkLmNvbnRyb2xsZXIudGFwcy5wdXNoKChpbmRleCwgZmFjZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGljayhpbmRleCwgZmFjZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbHl6aCgpIHtcbiAgICAgICAgY29uc3QgeXpoc3RhdGUgPSBcIj8/Pz9VPz8/Pz8/Pz9SPz8/Pz8/Pz9GPz8/Pz8/Pz9EPz8/Pz8/Pz9MPz8/Pz8/Pz9CPz8/P1wiO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IHl6aHN0YXRlLnNwbGl0KFwiXCIpO1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzdG9yZSh0aGlzLmluaXRTdGF0ZSk7XG4gICAgfVxuICAgIGNsYWxseXpoKCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSAqIDMuNSk7XG4gICAgICAgIHRoaXMud29ybGQuY29udHJvbGxlci50YXBzID0gW107XG4gICAgICAgIHRoaXMuaXNDb2xvck1vZGUgPSBmYWxzZTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvdmlkZShcIndvcmxkXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBQbGF5Z3JvdW5kLnByb3RvdHlwZSwgXCJ3b3JsZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUmVmKFwidmlld3BvcnRcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFZpZXdwb3J0KVxuXSwgUGxheWdyb3VuZC5wcm90b3R5cGUsIFwidmlld3BvcnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFdhdGNoKFwiaXNQbGF5ZXJNb2RlXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxuXSwgUGxheWdyb3VuZC5wcm90b3R5cGUsIFwib25QbGF5ZXJNb2RlQ2hhbmdlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goXCJpc1BsYXlpbmdcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG5dLCBQbGF5Z3JvdW5kLnByb3RvdHlwZSwgXCJvblBsYXlpbmdDaGFuZ2VcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaChcImNvbmZpZy5zb2x2ZXJJZFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsIHZvaWQgMClcbl0sIFBsYXlncm91bmQucHJvdG90eXBlLCBcIm9uU29sdmVyQ2hhbmdlXCIsIG51bGwpO1xuUGxheWdyb3VuZCA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9pbmRleC5odG1sXCIpLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICB2aWV3cG9ydDogVmlld3BvcnQsXG4gICAgICAgICAgICBzZXR0aW5nOiBTZXR0aW5nLFxuICAgICAgICB9LFxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFBsYXlncm91bmQpO1xuZXhwb3J0IGRlZmF1bHQgUGxheWdyb3VuZDtcbiIsImltcG9ydCB7IF9fZGVjb3JhdGUsIF9fbWV0YWRhdGEgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGN1YmVfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2N1YmUvdXRpbHNcIjtcbmltcG9ydCBWdWVTbGlkZXIgZnJvbSAndnVlLXNsaWRlci1jb21wb25lbnQnO1xuaW1wb3J0ICd2dWUtc2xpZGVyLWNvbXBvbmVudC90aGVtZS9kZWZhdWx0LmNzcyc7XG5sZXQgU2V0dGluZyA9IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBWdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY3ViZV9jb25maWc7XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLnNpemUgPSBNYXRoLmNlaWwoTWF0aC5taW4odGhpcy53aWR0aCAvIDYsIHRoaXMuaGVpZ2h0IC8gMTIpKTtcbiAgICB9XG59O1xuU2V0dGluZyA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9pbmRleC5odG1sXCIpLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBWdWVTbGlkZXJcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNldHRpbmcpO1xuZXhwb3J0IGRlZmF1bHQgU2V0dGluZztcbiIsImltcG9ydCB7IF9fZGVjb3JhdGUsIF9fbWV0YWRhdGEgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFJlZiB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBXb3JsZCBmcm9tIFwiLi4vLi4vY3ViZS93b3JsZFwiO1xubGV0IFZpZXdwb3J0ID0gY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBWdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBjYW52YXNFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzRWxlbS5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBjYW52YXM6IGNhbnZhc0VsZW0sXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hdXRvQ2xlYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDAsIDApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW0gPSBjYW52YXNFbGVtO1xuICAgIH1cbiAgICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndvcmxkLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQsIHRydWUpO1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy53b3JsZC5kaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy53b3JsZC5zY2VuZSwgdGhpcy53b3JsZC5jYW1lcmEpO1xuICAgICAgICAgICAgdGhpcy53b3JsZC5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIEluamVjdChcIndvcmxkXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBXb3JsZClcbl0sIFZpZXdwb3J0LnByb3RvdHlwZSwgXCJ3b3JsZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUmVmKFwiY2FudmFzXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MRWxlbWVudClcbl0sIFZpZXdwb3J0LnByb3RvdHlwZSwgXCJjYW52YXNcIiwgdm9pZCAwKTtcblZpZXdwb3J0ID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2luZGV4Lmh0bWxcIiksXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFZpZXdwb3J0KTtcbmV4cG9ydCBkZWZhdWx0IFZpZXdwb3J0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInJ1Ymlrc2N1YmU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3J1Ymlrc2N1YmVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcnViaWtzY3ViZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=