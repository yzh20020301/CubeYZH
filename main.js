/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/vueapp/playground/index.html":
/*!******************************************!*\
  !*** ./src/vueapp/playground/index.html ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<v-app>\n    <div v-resize=\"resize\" style=\"user-select: none; touch-action: none;\">\n        <!-- 涂颜色/浩哥 -->\n        <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\" :style=\"{\n            width: size * 0.9 + 'px',\n            height: size * 0.9 + 'px',\n            'margin-right': width / 2 - Math.min(size * 4, width / 2) + size * 2.2 + 'px'}\" @click='setcubeyzh'>\n            <v-icon :size=\"size * 0.6\">\n                colorize\n            </v-icon>\n        </v-btn>\n\n        <v-dialog v-model=\"iserror\" :width=\"Math.min(size * 8, width)\" eager>\n            <v-card>\n                <v-card-title style=\"text-transform: none;\">\n                    <div :style=\"{'font-size':size * 0.4+'px','padding-top':size/8+'px'}\">\n                        ERROR!\n                    </div>\n                </v-card-title>\n                <v-card-actions>\n                    <v-layout row wrap style=\"margin: 0%;\">\n                        <v-flex xs12 d-flex>\n                            <v-textarea id=\"copy\" :style=\"{'font-size':size / 3 + 'px', 'line-height':size / 2 + 'px'}\"\n                                solo flat outlined hide-details v-model=\"erroryzh\">\n                            </v-textarea>\n                        </v-flex>\n                    </v-layout>\n                </v-card-actions>\n            </v-card>\n        </v-dialog>\n        <v-flex xs12 :style=\"{\n                'height':size + 'px'\n            }\" id=\"top-flex\"></v-flex>\n\n        <!-- 教程 -->\n        <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\" :style=\"{\n        width: size * 0.9 + 'px', \n        height: size * 0.9 + 'px', \n        'margin-right': width / 2 - Math.min(size * 4, width / 2) + size * 1.1 + 'px'}\" @click=\"listd=!listd\">\n            <v-icon :size=\"size * 0.6\">\n               school\n            </v-icon>\n        </v-btn>\n\n        <v-btn fixed left top text color=\"primary\" style=\"user-select: none; margin: 0%; padding: 0%;\"\n            :style=\"{height: size+'px', 'margin-left': width / 2 - Math.min(size * 4, width / 2 - size / 4) + 'px'}\"\n            @click=\"listd=true\" v-if=\"isDemoMode\">\n            <div :style=\"{'font-size':(size * 0.4)+'px'}\" style=\"text-transform: none;\">{{ demoName }}</div>\n        </v-btn>\n\n        <v-bottom-sheet v-model=\"listd\">\n            <v-card text style=\"margin: 0%; padding: 0%;\">\n                <v-container fluid grid-list-md text-xs-center style=\"padding: 0%;\"\n                    :style=\"{width: Math.min(size * 10, width) + 'px'}\">\n                    <v-layout row wrap\n                        style=\"margin: 0%; padding: 0%; min-width: 0%; min-height: 0%; align-items: stretch;\">\n                        <v-card style=\"margin: 0%; padding: 0%;\" :style=\"{'width': demoGridWidth  + 'px'}\"\n                            v-for=\"(demoImage, i) in demoImages\" :key=\"i\">\n                            <v-btn block text color=\"primary\" :style=\"{\n                                'font-size': size * 0.3 + 'px',\n                                'height': size * 0.35 + 'px'\n                            }\" style=\"text-transform: none;\n                            text-align: center;\n                            margin: 0%;\n                            padding: 0%;\" @click=\"selectDemo(i)\">\n                                {{ demoData[i].name }}\n                            </v-btn>\n                            <img :src=\"demoImage\" style=\"margin: 0%; padding: 0%;\"\n                                :style=\"{'width':demoGridWidth  + 'px'}\" @click=\"selectDemo(i)\">\n                        </v-card>\n                    </v-layout>\n                </v-container>\n            </v-card>\n        </v-bottom-sheet>\n\n\n        <!-- 新增板块 -->\n        <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\"\n                :style=\"{width: size * 0.9 + 'px', height: size * 0.9 + 'px', 'margin-right': width / 2 - Math.min(size * 4, width / 2) +size * 3.3+ 'px'}\"\n                @click='project_word'>\n            <v-icon :size=\"size * 0.6\">\n                visibility\n            </v-icon>\n        </v-btn>\n\n        <v-bottom-sheet v-model=\"isProjection\">\n            <v-card text style=\"margin: 0%; padding: 0%;\">\n                <v-container fluid grid-list-md text-xs-center style=\"padding: 0%;\"\n                                 :style=\"{width: Math.min(size * 10, width) + 'px'}\">\n                    <v-layout row wrap\n                                  style=\"margin: 0%; padding: 0%; min-width: 0%; min-height: 0%; align-items: stretch;\">\n<!--                        <v-card style=\"margin: 0%; padding: 0%;\" :style=\"{'width': demoGridWidth  + 'px'}\">\n\n                            <div v-for=\"row in color_plane\" :key=\"row\">\n                                <div v-for=\"col in row\" :key=\"col\">\n                                    <strong>{{ col }}</strong>\n                                </div>>\n                                <br/>\n                            </div>>\n\n\n                        </v-card>\n            -->\n                    <v-flex v-for=\"(item,index) in color_plane\" :key=\"`${item.value}_${index}`\" xs1 :style=\"{padding:size * 0.06 + 'px'}\">\n                        <v-btn :color=\"colors[item]\" block depressed :ripple=\"false\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n\n\n                        </v-btn>\n                    </v-flex>\n                    </v-layout>\n                </v-container>\n            </v-card>\n        </v-bottom-sheet>\n\n        <!-- 设置 -->\n        <setting ref=\"setting\"></setting>\n\n        <!-- 3D魔方 -->\n        <viewport ref=\"viewport\"></viewport>\n\n        <v-flex xs12 :style=\"{\n                'height':size + 'px',\n                'padding': 'none',\n                'margin': 'none'\n            }\" id=\"bottom-flex\" v-show=\"!isPlayerMode && !isColorMode\">\n        </v-flex>\n        <v-card flat style=\"margin: auto; touch-action: none; user-select: none;\">\n            <v-container fluid grid-list-md text-xs-center\n                :style=\"{width: Math.min(size * 8, width) + 'px', height: size * 4 + 'px'}\">\n                <v-layout row wrap>\n\n                    <v-flex xs12 :style=\"{'height': size + 'px'}\" v-if=\"isPlayerMode\">\n                        <v-slider :value=\"progress\" style=\"margin: 0%; padding: 0%;\" :max=\"solution.length\"\n                            :tick-size=\"3\" :tick-labels=\"cubestep\" thumb-label=\"always\" :ticks=\"showTicks\" hide-details\n                            v-on:input=\"setProgress\">\n                            <template v-slot:thumb-label>\n                                {{ progress == 0 ? '#' : solution[progress - 1] }}\n                            </template>\n                        </v-slider>\n                    </v-flex>\n\n\n                    <v-flex v-for=\"item in colort\" :key=\"item\" xs4 :style=\"{padding:size * 0.06 + 'px'}\"v-if=\"isColorMode&&!isPlayerMode\">\n                        <v-btn @click=\"color = item;\" :color=\"colors[item]\" block depressed :ripple=\"false\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <span v-show=\"color!=item\" :style=\"{'font-size':size * 0.5 + 'px'}\">{{faces[item]}}</span>\n                            <v-icon :size=\"size * 0.8\" v-show=\"color==item\">\n                                colorize\n                            </v-icon>\n                        </v-btn>\n                    </v-flex>\n\n\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch&&!isColorMode\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{'Scramble'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch&&isColorMode\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{'Clean'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  progress == solution.length ? 'Replay' : 'Play'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&isTeaching\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  progress == solution.length ? 'Replay' : 'Play'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch&&!isColorMode\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ 'Reset' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch&&isColorMode\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ 'Reset' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Pause' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&isTeaching\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Pause' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch&&!isColorMode\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ 'Solve' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch&&isColorMode\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ 'Solve' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&!isSwitch&&isColorMode\">\n                        <v-btn @click=\"purpleButton\" block text color=\"purple\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{'Cancle'}}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\">\n                        <v-btn @click=\"blackButton\" block text color=\"blaCK\" style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                          <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                            {{'Switch'}}\n                          </div>\n                        </v-btn>\n                      </v-flex>\n\n                    <v-flex xs3 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&!isTeaching\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Quit' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"isPlayerMode&&!isSwitch&&isTeaching\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{  'Quit' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    \n                    <v-flex xs12 :style=\"{padding: size * 0.06 + 'px'}\" v-if=\"!isPlayerMode&&isSwitch&&!isTeaching\">\n                        <v-btn @click=\"blackButton\" block text color=\"blaCK\" style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                          <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                            {{'back'}}\n                          </div>\n                        </v-btn>\n                      </v-flex>\n                </v-layout>\n            </v-container>\n        </v-card>\n    </div>\n</v-app>"

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
            f[i] = centers.toString().indexOf(facelet[i]);
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
        this.backupState_player = [];
        this.backupState_switch = [];
        this.cubejs = __webpack_require__.e(/*! import() */ "src_preload_cubejs_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../preload/cubejs */ "./src/preload/cubejs.ts"));
        this.config = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.cube_config;
        this.isSwitch = false;
        this.isTeaching = false;
        this.isColorMode = false;
        this.yzhcubeState = [];
        this.yzhcubeStatec = [];
        this.color = "R";
        this.erroryzh = "";
        this.iserror = false;
        this.solver = new _solver_Solver__WEBPACK_IMPORTED_MODULE_11__["default"]();
        this.color_plane = [];
        this.solutionyzh = "";
        this.stickers = {};
        this.isProjection = false;
        this.colors = {
            R: "#B71C1C",
            L: "#FF6D00",
            U: "#F0F0F0",
            D: "#FFD600",
            F: "#00A020",
            B: "#0D47A1",
            LZJ: "#FFFFFF",
            core: "#202020",
            gray: "#808080",
            high: "#FF0080",
        };
        this.colort = ["R", "F", "D", "L", "B", "U"];
        this.yzhcubeState = this.world.cube.serialize();
        const yzhstate = "????U????????R????????F????????D????????L????????B????";
        this.yzhcubeStatec = yzhstate.split("");
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
                    this.backupState_player = this.world.cube.serialize();
                    this.backupState_switch = this.world.cube.serialize();
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
                            if (step == "~") {
                                continue;
                            }
                            const params = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.stringToTwistParams[step];
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
        this.backupState_player = this.world.cube.serialize();
        this.world.cube.restore(this.backupState_switch);
    }
    back() {
        this.isSwitch = false;
        this.isPlayerMode = true;
        this.backupState_switch = this.world.cube.serialize();
        this.world.cube.restore(this.backupState_player);
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
    cancle() {
        this.isColorMode = false;
        this.viewport.resize(this.width, this.height - this.size * 3.5);
        this.yzhcubeStatec = this.initState;
        this.initState = this.yzhcubeState;
        this.world.cube.restore(this.initState);
    }
    purpleButton() {
        if (this.buttonEnable) {
            this.buttonEnable = false;
            setTimeout(() => {
                this.buttonEnable = true;
            }, this.clickTimeThreshold);
            this.cancle();
        }
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
        this.initState[temp] = this.color;
        this.world.cube.restore(this.initState);
    }
    setcubeyzh() {
        this.isColorMode = true;
        this.isPlayerMode = false;
        this.yzhcubeState = this.world.cube.serialize();
        this.initState = this.yzhcubeStatec;
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
    project_word() {
        this.isProjection = true;
        let state = this.world.cube.serialize();
        let curState = state;
        let index = 0;
        console.log(curState);
        console.log(this.color_plane);
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 12; col++) {
                this.color_plane[row * 12 + col] = 'LZJ';
            }
        }
        console.log(this.color_plane);
        for (let row = 0; row < 3; row++) {
            for (let col = 3; col < 6; col++) {
                this.color_plane[row * 12 + col] = curState[index++];
            }
        }
        for (let row = 3; row < 6; row++) {
            for (let col = 6; col < 9; col++) {
                this.color_plane[row * 12 + col] = curState[index++];
            }
        }
        for (let row = 3; row < 6; row++) {
            for (let col = 3; col < 6; col++) {
                this.color_plane[row * 12 + col] = curState[index++];
            }
        }
        for (let row = 6; row < 9; row++) {
            for (let col = 3; col < 6; col++) {
                this.color_plane[row * 12 + col] = curState[index++];
            }
        }
        for (let row = 3; row < 6; row++) {
            for (let col = 0; col < 3; col++) {
                this.color_plane[row * 12 + col] = curState[index++];
            }
        }
        for (let row = 3; row < 6; row++) {
            for (let col = 9; col < 12; col++) {
                this.color_plane[row * 12 + col] = curState[index++];
            }
        }
        console.log(this.color_plane);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQscUJBQXFCLElBQUksZ0JBQWdCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNybEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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d0NBQXdDO0FBQ3BELFdBQVcsNENBQTRDO0FBQ3ZELFlBQVksNkNBQTZDO0FBQ3pELFlBQVksd0NBQXdDO0FBQ3BELFdBQVcsNkNBQTZDO0FBQ3hELFlBQVksNENBQTRDO0FBQ3hELFlBQVkseUNBQXlDO0FBQ3JELFdBQVcsNENBQTRDO0FBQ3ZELFlBQVksNkNBQTZDO0FBQ3pELFlBQVksd0NBQXdDO0FBQ3BELFdBQVcsNkNBQTZDO0FBQ3hELFlBQVksNENBQTRDO0FBQ3hELFlBQVkseUNBQXlDO0FBQ3JELFdBQVcsaUNBQWlDO0FBQzVDLFdBQVcsa0RBQWtEO0FBQzdELFlBQVksbURBQW1EO0FBQy9ELFlBQVksOENBQThDO0FBQzFELFdBQVcsa0RBQWtEO0FBQzdELFlBQVksbURBQW1EO0FBQy9ELFlBQVksOENBQThDO0FBQzFELFdBQVcsa0RBQWtEO0FBQzdELFlBQVksbURBQW1EO0FBQy9ELFlBQVksOENBQThDO0FBQzFELFdBQVcsZ0RBQWdEO0FBQzNELFlBQVksK0NBQStDO0FBQzNELFlBQVksNENBQTRDO0FBQ3hELFdBQVcsK0NBQStDO0FBQzFELFlBQVksZ0RBQWdEO0FBQzVELFlBQVksMkNBQTJDO0FBQ3ZELFdBQVcsK0NBQStDO0FBQzFELFlBQVksZ0RBQWdEO0FBQzVELFlBQVksMkNBQTJDO0FBQ3ZELFdBQVcsZ0RBQWdEO0FBQzNELFlBQVksK0NBQStDO0FBQzNELFlBQVksNENBQTRDO0FBQ3hELFdBQVcsK0NBQStDO0FBQzFELFlBQVksZ0RBQWdEO0FBQzVELFlBQVksMkNBQTJDO0FBQ3ZELFdBQVcsZ0RBQWdEO0FBQzNELFlBQVksK0NBQStDO0FBQzNELFlBQVksNENBQTRDO0FBQ3hELFdBQVcsNkNBQTZDO0FBQ3hELFlBQVksNENBQTRDO0FBQ3hELFlBQVkseUNBQXlDO0FBQ3JELFdBQVcsNkNBQTZDO0FBQ3hELFlBQVksNENBQTRDO0FBQ3hELFlBQVkseUNBQXlDO0FBQ3JELFdBQVcsNENBQTRDO0FBQ3ZELFlBQVksNkNBQTZDO0FBQ3pELFlBQVksd0NBQXdDO0FBQ3BELFVBQVUs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YXlncm91bmQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3Z1ZWFwcC9zZXR0aW5nL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy92dWVhcHAvdmlld3BvcnQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY2FwdHVyZS50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY3ViZS50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY3ViZWxldC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2ludGVyYWN0b3IudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2xibC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvdHdpc3Rlci50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL3V0aWxzX2ludGVybmFsLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvY3ViZS93b3JsZC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvc29sdmVyL0Nvb3JkQ3ViZS50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3NvbHZlci9DdWJpZUN1YmUudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9zb2x2ZXIvU29sdmVyLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvc29sdmVyL1V0aWwudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy92dWVhcHAvcGxheWdyb3VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3Z1ZWFwcC9zZXR0aW5nL2luZGV4LnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvdnVlYXBwL3ZpZXdwb3J0L2luZGV4LnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8di1hcHA+XFxuICAgIDxkaXYgdi1yZXNpemU9XFxcInJlc2l6ZVxcXCIgc3R5bGU9XFxcInVzZXItc2VsZWN0OiBub25lOyB0b3VjaC1hY3Rpb246IG5vbmU7XFxcIj5cXG4gICAgICAgIDwhLS0g5raC6aKc6ImyL+a1qeWTpSAtLT5cXG4gICAgICAgIDx2LWJ0biBmaXhlZCByaWdodCB0b3AgZmFiIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IG5vbmU7XFxcIiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICB3aWR0aDogc2l6ZSAqIDAuOSArICdweCcsXFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplICogMC45ICsgJ3B4JyxcXG4gICAgICAgICAgICAnbWFyZ2luLXJpZ2h0Jzogd2lkdGggLyAyIC0gTWF0aC5taW4oc2l6ZSAqIDQsIHdpZHRoIC8gMikgKyBzaXplICogMi4yICsgJ3B4J31cXFwiIEBjbGljaz0nc2V0Y3ViZXl6aCc+XFxuICAgICAgICAgICAgPHYtaWNvbiA6c2l6ZT1cXFwic2l6ZSAqIDAuNlxcXCI+XFxuICAgICAgICAgICAgICAgIGNvbG9yaXplXFxuICAgICAgICAgICAgPC92LWljb24+XFxuICAgICAgICA8L3YtYnRuPlxcblxcbiAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImlzZXJyb3JcXFwiIDp3aWR0aD1cXFwiTWF0aC5taW4oc2l6ZSAqIDgsIHdpZHRoKVxcXCIgZWFnZXI+XFxuICAgICAgICAgICAgPHYtY2FyZD5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBzdHlsZT1cXFwidGV4dC10cmFuc2Zvcm06IG5vbmU7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6c2l6ZSAqIDAuNCsncHgnLCdwYWRkaW5nLXRvcCc6c2l6ZS84KydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBFUlJPUiFcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwIHN0eWxlPVxcXCJtYXJnaW46IDAlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIGQtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dGFyZWEgaWQ9XFxcImNvcHlcXFwiIDpzdHlsZT1cXFwieydmb250LXNpemUnOnNpemUgLyAzICsgJ3B4JywgJ2xpbmUtaGVpZ2h0JzpzaXplIC8gMiArICdweCd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sbyBmbGF0IG91dGxpbmVkIGhpZGUtZGV0YWlscyB2LW1vZGVsPVxcXCJlcnJvcnl6aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZXh0YXJlYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxuICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICA8L3YtZGlhbG9nPlxcbiAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwie1xcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzpzaXplICsgJ3B4J1xcbiAgICAgICAgICAgIH1cXFwiIGlkPVxcXCJ0b3AtZmxleFxcXCI+PC92LWZsZXg+XFxuXFxuICAgICAgICA8IS0tIOaVmeeoiyAtLT5cXG4gICAgICAgIDx2LWJ0biBmaXhlZCByaWdodCB0b3AgZmFiIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IG5vbmU7XFxcIiA6c3R5bGU9XFxcIntcXG4gICAgICAgIHdpZHRoOiBzaXplICogMC45ICsgJ3B4JywgXFxuICAgICAgICBoZWlnaHQ6IHNpemUgKiAwLjkgKyAncHgnLCBcXG4gICAgICAgICdtYXJnaW4tcmlnaHQnOiB3aWR0aCAvIDIgLSBNYXRoLm1pbihzaXplICogNCwgd2lkdGggLyAyKSArIHNpemUgKiAxLjEgKyAncHgnfVxcXCIgQGNsaWNrPVxcXCJsaXN0ZD0hbGlzdGRcXFwiPlxcbiAgICAgICAgICAgIDx2LWljb24gOnNpemU9XFxcInNpemUgKiAwLjZcXFwiPlxcbiAgICAgICAgICAgICAgIHNjaG9vbFxcbiAgICAgICAgICAgIDwvdi1pY29uPlxcbiAgICAgICAgPC92LWJ0bj5cXG5cXG4gICAgICAgIDx2LWJ0biBmaXhlZCBsZWZ0IHRvcCB0ZXh0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IG5vbmU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcIntoZWlnaHQ6IHNpemUrJ3B4JywgJ21hcmdpbi1sZWZ0Jzogd2lkdGggLyAyIC0gTWF0aC5taW4oc2l6ZSAqIDQsIHdpZHRoIC8gMiAtIHNpemUgLyA0KSArICdweCd9XFxcIlxcbiAgICAgICAgICAgIEBjbGljaz1cXFwibGlzdGQ9dHJ1ZVxcXCIgdi1pZj1cXFwiaXNEZW1vTW9kZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzooc2l6ZSAqIDAuNCkrJ3B4J31cXFwiIHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXFwiPnt7IGRlbW9OYW1lIH19PC9kaXY+XFxuICAgICAgICA8L3YtYnRuPlxcblxcbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XFxcImxpc3RkXFxcIj5cXG4gICAgICAgICAgICA8di1jYXJkIHRleHQgc3R5bGU9XFxcIm1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCI+XFxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBmbHVpZCBncmlkLWxpc3QtbWQgdGV4dC14cy1jZW50ZXIgc3R5bGU9XFxcInBhZGRpbmc6IDAlO1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBNYXRoLm1pbihzaXplICogMTAsIHdpZHRoKSArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTsgbWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBzdHlsZT1cXFwibWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6c3R5bGU9XFxcInsnd2lkdGgnOiBkZW1vR3JpZFdpZHRoICArICdweCd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGRlbW9JbWFnZSwgaSkgaW4gZGVtb0ltYWdlc1xcXCIgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBibG9jayB0ZXh0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiBzaXplICogMC4zICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBzaXplICogMC4zNSArICdweCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgc3R5bGU9XFxcInRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xcXCIgQGNsaWNrPVxcXCJzZWxlY3REZW1vKGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRlbW9EYXRhW2ldLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJkZW1vSW1hZ2VcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcInsnd2lkdGgnOmRlbW9HcmlkV2lkdGggICsgJ3B4J31cXFwiIEBjbGljaz1cXFwic2VsZWN0RGVtbyhpKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cXG5cXG5cXG4gICAgICAgIDwhLS0g5paw5aKe5p2/5Z2XIC0tPlxcbiAgICAgICAgPHYtYnRuIGZpeGVkIHJpZ2h0IHRvcCBmYWIgY29sb3I9XFxcInByaW1hcnlcXFwiIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogbm9uZTtcXFwiXFxuICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBzaXplICogMC45ICsgJ3B4JywgaGVpZ2h0OiBzaXplICogMC45ICsgJ3B4JywgJ21hcmdpbi1yaWdodCc6IHdpZHRoIC8gMiAtIE1hdGgubWluKHNpemUgKiA0LCB3aWR0aCAvIDIpICtzaXplICogMy4zKyAncHgnfVxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPSdwcm9qZWN0X3dvcmQnPlxcbiAgICAgICAgICAgIDx2LWljb24gOnNpemU9XFxcInNpemUgKiAwLjZcXFwiPlxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5XFxuICAgICAgICAgICAgPC92LWljb24+XFxuICAgICAgICA8L3YtYnRuPlxcblxcbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XFxcImlzUHJvamVjdGlvblxcXCI+XFxuICAgICAgICAgICAgPHYtY2FyZCB0ZXh0IHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiPlxcbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQgZ3JpZC1saXN0LW1kIHRleHQteHMtY2VudGVyIHN0eWxlPVxcXCJwYWRkaW5nOiAwJTtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IE1hdGgubWluKHNpemUgKiAxMCwgd2lkdGgpICsgJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTsgbWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcXCI+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgc3R5bGU9XFxcIm1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOnN0eWxlPVxcXCJ7J3dpZHRoJzogZGVtb0dyaWRXaWR0aCAgKyAncHgnfVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcInJvdyBpbiBjb2xvcl9wbGFuZVxcXCIgOmtleT1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcImNvbCBpbiByb3dcXFwiIDprZXk9XFxcImNvbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBjb2wgfX08L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pj5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggdi1mb3I9XFxcIihpdGVtLGluZGV4KSBpbiBjb2xvcl9wbGFuZVxcXCIgOmtleT1cXFwiYCR7aXRlbS52YWx1ZX1fJHtpbmRleH1gXFxcIiB4czEgOnN0eWxlPVxcXCJ7cGFkZGluZzpzaXplICogMC4wNiArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gOmNvbG9yPVxcXCJjb2xvcnNbaXRlbV1cXFwiIGJsb2NrIGRlcHJlc3NlZCA6cmlwcGxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxcblxcbiAgICAgICAgPCEtLSDorr7nva4gLS0+XFxuICAgICAgICA8c2V0dGluZyByZWY9XFxcInNldHRpbmdcXFwiPjwvc2V0dGluZz5cXG5cXG4gICAgICAgIDwhLS0gM0TprZTmlrkgLS0+XFxuICAgICAgICA8dmlld3BvcnQgcmVmPVxcXCJ2aWV3cG9ydFxcXCI+PC92aWV3cG9ydD5cXG5cXG4gICAgICAgIDx2LWZsZXggeHMxMiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6c2l6ZSArICdweCcsXFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJ25vbmUnLFxcbiAgICAgICAgICAgICAgICAnbWFyZ2luJzogJ25vbmUnXFxuICAgICAgICAgICAgfVxcXCIgaWQ9XFxcImJvdHRvbS1mbGV4XFxcIiB2LXNob3c9XFxcIiFpc1BsYXllck1vZGUgJiYgIWlzQ29sb3JNb2RlXFxcIj5cXG4gICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgPHYtY2FyZCBmbGF0IHN0eWxlPVxcXCJtYXJnaW46IGF1dG87IHRvdWNoLWFjdGlvbjogbm9uZTsgdXNlci1zZWxlY3Q6IG5vbmU7XFxcIj5cXG4gICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQgZ3JpZC1saXN0LW1kIHRleHQteHMtY2VudGVyXFxuICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBNYXRoLm1pbihzaXplICogOCwgd2lkdGgpICsgJ3B4JywgaGVpZ2h0OiBzaXplICogNCArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwieydoZWlnaHQnOiBzaXplICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2xpZGVyIDp2YWx1ZT1cXFwicHJvZ3Jlc3NcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDptYXg9XFxcInNvbHV0aW9uLmxlbmd0aFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpY2stc2l6ZT1cXFwiM1xcXCIgOnRpY2stbGFiZWxzPVxcXCJjdWJlc3RlcFxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgOnRpY2tzPVxcXCJzaG93VGlja3NcXFwiIGhpZGUtZGV0YWlsc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmlucHV0PVxcXCJzZXRQcm9ncmVzc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dGh1bWItbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9ncmVzcyA9PSAwID8gJyMnIDogc29sdXRpb25bcHJvZ3Jlc3MgLSAxXSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zbGlkZXI+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggdi1mb3I9XFxcIml0ZW0gaW4gY29sb3J0XFxcIiA6a2V5PVxcXCJpdGVtXFxcIiB4czQgOnN0eWxlPVxcXCJ7cGFkZGluZzpzaXplICogMC4wNiArICdweCd9XFxcInYtaWY9XFxcImlzQ29sb3JNb2RlJiYhaXNQbGF5ZXJNb2RlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJjb2xvciA9IGl0ZW07XFxcIiA6Y29sb3I9XFxcImNvbG9yc1tpdGVtXVxcXCIgYmxvY2sgZGVwcmVzc2VkIDpyaXBwbGU9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cXFwiY29sb3IhPWl0ZW1cXFwiIDpzdHlsZT1cXFwieydmb250LXNpemUnOnNpemUgKiAwLjUgKyAncHgnfVxcXCI+e3tmYWNlc1tpdGVtXX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIDpzaXplPVxcXCJzaXplICogMC44XFxcIiB2LXNob3c9XFxcImNvbG9yPT1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yaXplXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcIiFpc1BsYXllck1vZGUmJiFpc1N3aXRjaCYmIWlzQ29sb3JNb2RlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJncmVlbkJ1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwiZ3JlZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzogc2l6ZSAqIDAuMyArJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3snU2NyYW1ibGUnfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czMgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiIWlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiZpc0NvbG9yTW9kZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cXFwiZ3JlZW5CdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcImdyZWVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7J0NsZWFuJ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMzIDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiYhaXNUZWFjaGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cXFwiZ3JlZW5CdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcImdyZWVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICBwcm9ncmVzcyA9PSBzb2x1dGlvbi5sZW5ndGggPyAnUmVwbGF5JyA6ICdQbGF5J319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiZpc1RlYWNoaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJncmVlbkJ1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwiZ3JlZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzogc2l6ZSAqIDAuMyArJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgIHByb2dyZXNzID09IHNvbHV0aW9uLmxlbmd0aCA/ICdSZXBsYXknIDogJ1BsYXknfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiIWlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiYhaXNDb2xvck1vZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcImJsdWVCdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcImJsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzogc2l6ZSAqIDAuMyArJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJ1Jlc2V0JyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMyA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIiB2LWlmPVxcXCIhaXNQbGF5ZXJNb2RlJiYhaXNTd2l0Y2gmJmlzQ29sb3JNb2RlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJibHVlQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJibHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICdSZXNldCcgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czMgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiaXNQbGF5ZXJNb2RlJiYhaXNTd2l0Y2gmJiFpc1RlYWNoaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJibHVlQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJibHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICAnUGF1c2UnIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiZpc1RlYWNoaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJibHVlQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJibHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICAnUGF1c2UnIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcIiFpc1BsYXllck1vZGUmJiFpc1N3aXRjaCYmIWlzQ29sb3JNb2RlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJyZWRCdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcInJlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAnU29sdmUnIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMzIDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcIiFpc1BsYXllck1vZGUmJiFpc1N3aXRjaCYmaXNDb2xvck1vZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcInJlZEJ1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwicmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICdTb2x2ZScgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czMgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiIWlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiZpc0NvbG9yTW9kZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cXFwicHVycGxlQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJwdXJwbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzogc2l6ZSAqIDAuMyArJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3snQ2FuY2xlJ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMzIDpzdHlsZT1cXFwie3BhZGRpbmc6IHNpemUgKiAwLjA2ICsgJ3B4J31cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZSYmIWlzU3dpdGNoJiYhaXNUZWFjaGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cXFwiYmxhY2tCdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcImJsYUNLXFxcIiBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7J1N3aXRjaCd9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMyA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIiB2LWlmPVxcXCJpc1BsYXllck1vZGUmJiFpc1N3aXRjaCYmIWlzVGVhY2hpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcInJlZEJ1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwicmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICAnUXVpdCcgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiaXNQbGF5ZXJNb2RlJiYhaXNTd2l0Y2gmJmlzVGVhY2hpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XFxcInJlZEJ1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwicmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICAnUXVpdCcgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCIgdi1pZj1cXFwiIWlzUGxheWVyTW9kZSYmaXNTd2l0Y2gmJiFpc1RlYWNoaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJibGFja0J1dHRvblxcXCIgYmxvY2sgdGV4dCBjb2xvcj1cXFwiYmxhQ0tcXFwiIHN0eWxlPVxcXCJtaW4td2lkdGg6IDAlOyBtaW4taGVpZ2h0OiAwJTsgbWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6aGVpZ2h0PVxcXCJzaXplXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3snYmFjayd9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgIDwvdi1jYXJkPlxcbiAgICA8L2Rpdj5cXG48L3YtYXBwPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgdi1yZXNpemU9XFxcInJlc2l6ZVxcXCI+XFxuICAgIDx2LWJ0biBmaXhlZCByaWdodCB0b3AgZmFiIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IG5vbmU7XFxcIlxcbiAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IHNpemUgKiAwLjkgKyAncHgnLCBoZWlnaHQ6IHNpemUgKiAwLjkgKyAncHgnLCAnbWFyZ2luLXJpZ2h0Jzogd2lkdGggLyAyIC0gTWF0aC5taW4oc2l6ZSAqIDQsIHdpZHRoIC8gMikgKyAncHgnfVxcXCJcXG4gICAgICAgIEBjbGljaz1cXFwic3RhdGUgPSAhc3RhdGVcXFwiPlxcbiAgICAgICAgPHYtaWNvbiA6c2l6ZT1cXFwic2l6ZSAqIDAuNlxcXCI+XFxuICAgICAgICAgICAgc2V0dGluZ3NcXG4gICAgICAgIDwvdi1pY29uPlxcbiAgICA8L3YtYnRuPlxcbiAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cXFwic3RhdGVcXFwiPlxcbiAgICAgICAgPHYtY2FyZCB0ZXh0IHN0eWxlPVxcXCJtYXJnaW46IGF1dG87XFxcIj5cXG4gICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQgZ3JpZC1saXN0LW1kIHRleHQteHMtY2VudGVyIDpzdHlsZT1cXFwie3dpZHRoOiBNYXRoLm1pbihzaXplICogOCwgd2lkdGgpICsgJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICA8di1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgICAgICBTT0xWSU5HIEFMR09SSVRITVxcbiAgICAgICAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1sZWZ0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXJhZGlvLWdyb3VwIHYtbW9kZWw9XFxcImNvbmZpZy5zb2x2ZXJJZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtcmFkaW8gbGFiZWw9XFxcIktvY2llbWJhJ3MgQWxnb3JpdGhtXFxcIiA6dmFsdWU9XFxcIjFcXFwiIG9mZi1pY29uPVxcXCJyYWRpb19idXR0b25fdW5jaGVja2VkXFxcIiAgb24taWNvbj1cXFwicmFkaW9fYnV0dG9uX2NoZWNrZWRcXFwiPjwvdi1yYWRpbz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1yYWRpbyBsYWJlbD1cXFwiTGF5ZXIgQnkgTGF5ZXIgTWV0aG9kXFxcIiA6dmFsdWU9XFxcIjBcXFwiIG9mZi1pY29uPVxcXCJyYWRpb19idXR0b25fdW5jaGVja2VkXFxcIiBvbi1pY29uPVxcXCJyYWRpb19idXR0b25fY2hlY2tlZFxcXCIgOnN0eWxlPVxcXCJ7ICdtYXJnaW4tdG9wJyA6IHNpemUgKiAwLjIgKyAncHgnfVxcXCI+PC92LXJhZGlvPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LXJhZGlvLWdyb3VwPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICAgICAgVFdJU1QgU1BFRURcXG4gICAgICAgICAgICAgICAgPC92LXN1YmhlYWRlcj5cXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctbGVmdCc6IHNpemUgLyAyICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLXJpZ2h0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctdG9wJzogc2l6ZSAqIDAuMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogKHNpemUgKiAwLjMpICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOnNpemUgKyAncHgnXFxuICAgICAgICAgICAgICAgIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHZ1ZS1zbGlkZXIgdi1tb2RlbD1cXFwiY29uZmlnLnNwZWVkXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiA6bWF4PVxcXCI1XFxcIiA6bWluPVxcXCIxXFxcIiA6bWFya3M9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC92dWUtc2xpZGVyPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICAgICAgU0NSQU1CTEUgTEVOR1RIXFxuICAgICAgICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWxlZnQnOiBzaXplIC8gMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1yaWdodCc6IHNpemUgLyAyICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLXRvcCc6IHNpemUgKiAwLjIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IChzaXplICogMC4zKSArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzpzaXplICsgJ3B4J1xcbiAgICAgICAgICAgICAgICB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2dWUtc2xpZGVyIHYtbW9kZWw9XFxcImNvbmZpZy5zY3JhbWJsZV9zdGVwc1xcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgOm1heD1cXFwiNDBcXFwiIDptaW49XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOm1hcmtzPVxcXCJbMCwxMCwyMCwzMCw0MF1cXFwiPjwvdnVlLXNsaWRlcj5cXG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgIDx2LXN1YmhlYWRlcj5cXG4gICAgICAgICAgICAgICAgICAgIFNFTlNJVElWSVRZXFxuICAgICAgICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWxlZnQnOiBzaXplIC8gMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1yaWdodCc6IHNpemUgLyAyICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLXRvcCc6IHNpemUgKiAwLjIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IChzaXplICogMC4zKSArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzpzaXplICsgJ3B4J1xcbiAgICAgICAgICAgICAgICB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2dWUtc2xpZGVyIHYtbW9kZWw9XFxcImNvbmZpZy5zZW5zaWJpbGl0eVxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgOm1heD1cXFwiMTAwXFxcIiA6bWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDptYXJrcz1cXFwiWzAsMjUsNTAsNzUsMTAwXVxcXCI+PC92dWUtc2xpZGVyPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgPC92LWNhcmQ+XFxuICAgIDwvdi1ib3R0b20tc2hlZXQ+XFxuPC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiByZWY9XFxcImNhbnZhc1xcXCI+PC9kaXY+XCIiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBXb3JsZCBmcm9tIFwiLi93b3JsZFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FwdHVyZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDAsIDApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oMSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSgyNTYsIDI1NiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMud29ybGQucmVzaXplKDI1NiwgMjU2KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZShcIj8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcbiAgICB9XG4gICAgZ2VuZXJhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnJlc3RvcmUoc3RhdGUuc3BsaXQoXCJcIikpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLnNjZW5lLCB0aGlzLndvcmxkLmNhbWVyYSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyB0d2lzdGVyIH0gZnJvbSBcIi4vdHdpc3RlclwiO1xuaW1wb3J0IHsgYXhpc19wbGFuZXMsIGF4aXNfdmVjdG9ycywgY3ViZV9jb25maWcsIGN1YmVfc2l6ZSwgaW5kZXhUb0xheWVyLCB3b3JsZFRvSW5kZXggfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgQm94MywgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRmFjZSB9IGZyb20gXCIuL3V0aWxzX2ludGVybmFsXCI7XG5leHBvcnQgY2xhc3MgSG9sZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICB0aGlzLmluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuYXhpcyA9IFwiXCI7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3Iod29ybGQpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdCA9IChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3VzZWRvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3duLnggPSBhY3Rpb24ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3duLnkgPSBhY3Rpb24ueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3duX3RpY2sgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3VzZW1vdmVcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2htb3ZlXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZS54ID0gYWN0aW9uLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZS55ID0gYWN0aW9uLnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hlbmRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hjYW5jZWxcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwibW91c2V1cFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3VzZW91dFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9sb2NrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Rpc2FibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YXBzID0gW107XG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdGF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXhpcyA9IFwiXCI7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLmNvbnRpbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuZG93biA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xuICAgICAgICB0aGlzLm1vdmUgPSBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKTtcbiAgICAgICAgdGhpcy5kb3duX3RpY2sgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5ob2xkZXIgPSBuZXcgSG9sZGVyKCk7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBudWxsO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG4gICAgbG9vcCgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgc2V0IGxvY2sodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICB0aGlzLl9sb2NrID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsb2NrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jaztcbiAgICB9XG4gICAgc2V0IGRpc2FibGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkaXNhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMuY29udGluZ2xlICsgdGhpcy5hbmdsZTtcbiAgICAgICAgaWYgKHRoaXMucm90YXRpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXAuYW5nbGUgIT0gYW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAoYW5nbGUgLSB0aGlzLmdyb3VwLmFuZ2xlKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYW5nbGUgKz0gZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gdGhpcy53b3JsZC5jdWJlLnRhYmxlLmdyb3Vwc1t0aGlzLmF4aXNdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cC5hbmdsZSAhPSBhbmdsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAoYW5nbGUgLSBncm91cC5hbmdsZSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXAuYW5nbGUgKz0gZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF0Y2goKSB7XG4gICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbdGhpcy5ob2xkZXIuYXhpc107XG4gICAgICAgIGNvbnN0IGZpbmdlciA9IHRoaXMuaG9sZGVyLnZlY3RvcjtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhvbGRlci5pbmRleDtcbiAgICAgICAgY29uc3QgaWxheWVyID0gaW5kZXhUb0xheWVyKGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBheGlzIG9mIFtcInhcIiwgXCJ5XCIsIFwielwiXSkge1xuICAgICAgICAgICAgY29uc3QgdmVjdG9yID0gYXhpc192ZWN0b3JzW2F4aXNdO1xuICAgICAgICAgICAgaWYgKHZlY3Rvci5kb3QocGxhbmUubm9ybWFsKSA9PT0gMCAmJiB2ZWN0b3IuZG90KGZpbmdlcikgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53b3JsZC5jdWJlLnRhYmxlLmdyb3Vwc1theGlzXVtpbGF5ZXJbYXhpc11dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpbnRlcnNlY3QocG9pbnQsIHBsYW5lKSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG4gICAgICAgIGNvbnN0IHJheSA9IG5ldyBUSFJFRS5SYXkoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgY29uc3QgeCA9IChwb2ludC54IC8gdGhpcy53b3JsZC53aWR0aCkgKiAyIC0gMTtcbiAgICAgICAgY29uc3QgeSA9IC0ocG9pbnQueSAvIHRoaXMud29ybGQuaGVpZ2h0KSAqIDIgKyAxO1xuICAgICAgICBtYXRyaXguY29weSh0aGlzLndvcmxkLnNjZW5lLm1hdHJpeCk7XG4gICAgICAgIG1hdHJpeC5pbnZlcnQoKTtcbiAgICAgICAgcmF5Lm9yaWdpbi5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy53b3JsZC5jYW1lcmEubWF0cml4V29ybGQpO1xuICAgICAgICByYXkuZGlyZWN0aW9uLnNldCh4LCB5LCAwLjUpLnVucHJvamVjdCh0aGlzLndvcmxkLmNhbWVyYSkuc3ViKHJheS5vcmlnaW4pLm5vcm1hbGl6ZSgpO1xuICAgICAgICByYXkuYXBwbHlNYXRyaXg0KG1hdHJpeCk7XG4gICAgICAgIHJheS5pbnRlcnNlY3RQbGFuZShwbGFuZSwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaGFuZGxlRG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nIHx8IHRoaXMucm90YXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ob2xkZXIuaW5kZXggPSAtMTtcbiAgICAgICAgaWYgKHRoaXMubG9jaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtaW5fZGlzdCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgW1wieFwiLCBcInlcIiwgXCJ6XCJdKSB7XG4gICAgICAgICAgICBjb25zdCBwbGFuZSA9IGF4aXNfcGxhbmVzW2F4aXNdO1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLmludGVyc2VjdCh0aGlzLmRvd24sIHBsYW5lKTtcbiAgICAgICAgICAgIGlmIChwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmVfbWFyZ2luID0gY3ViZV9zaXplIC8gMiArIDAuMDAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJveE1pbiA9IG5ldyBWZWN0b3IzKCkuc2V0U2NhbGFyKC1jdWJlX21hcmdpbik7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94TWF4ID0gbmV3IFZlY3RvcjMoKS5zZXRTY2FsYXIoY3ViZV9tYXJnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IG5ldyBCb3gzKGJveE1pbiwgYm94TWF4KTtcbiAgICAgICAgICAgICAgICBpZiAoYm94LmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBWZWN0b3IzKCkuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHRoaXMud29ybGQuY2FtZXJhLm1hdHJpeFdvcmxkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdCA9IHBvaW50LmRpc3RhbmNlVG8ob3JpZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW5fZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Rpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob2xkZXIuYXhpcyA9IGF4aXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGRlci5pbmRleCA9IHdvcmxkVG9JbmRleChwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlTW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkeCA9IHRoaXMubW92ZS54IC0gdGhpcy5kb3duLng7XG4gICAgICAgICAgICBjb25zdCBkeSA9IHRoaXMubW92ZS55IC0gdGhpcy5kb3duLnk7XG4gICAgICAgICAgICBjb25zdCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGlmIChNYXRoLm1pbih0aGlzLndvcmxkLndpZHRoLCB0aGlzLndvcmxkLmhlaWdodCkgLyBkID4gMTI4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ob2xkZXIuaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IE1hdGguYWJzKGR5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aXMgPSBcInlcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvd24ueCA8IHRoaXMud29ybGQud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aXMgPSBcInhcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpcyA9IFwielwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRpbmdsZV9zZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW3RoaXMuYXhpc10pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBncm91cC5kcmFnKCk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHdpc3Rlci5maW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBncm91cC5kcmFnKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGluZ2xlX3NldC5hZGQoZ3JvdXAuYW5nbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29udGluZ2xlX3NldC5zaXplID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBjb250aW5nbGVfc2V0LnZhbHVlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRpbmdsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGluZ2xlID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFuZSA9IGF4aXNfcGxhbmVzW3RoaXMuaG9sZGVyLmF4aXNdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnRlcnNlY3QodGhpcy5kb3duLCBwbGFuZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnRlcnNlY3QodGhpcy5tb3ZlLCBwbGFuZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjMoKS5zdWJWZWN0b3JzKGVuZCwgc3RhcnQpO1xuICAgICAgICAgICAgICAgIHZlY3Rvci5tYXgobmV3IFZlY3RvcjMoKS5zdWIodmVjdG9yKSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybSA9IE1hdGgubWF4KHZlY3Rvci54LCB2ZWN0b3IueSwgdmVjdG9yLnopO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9sZGVyLnZlY3Rvci5jb3B5KG5vcm0gPT0gdmVjdG9yLnggPyBuZXcgVmVjdG9yMygxLCAwLCAwKSA6IChub3JtID09IHZlY3Rvci55ID8gbmV3IFZlY3RvcjMoMCwgMSwgMCkgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMygwLCAwLCAxKSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSB0aGlzLm1hdGNoKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc3VjY2VzcyA9IHRoaXMuZ3JvdXAuZHJhZygpO1xuICAgICAgICAgICAgICAgIHdoaWxlICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0d2lzdGVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5ncm91cC5kcmFnKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29udGluZ2xlID0gdGhpcy5ncm91cC5hbmdsZTtcbiAgICAgICAgICAgICAgICB2ZWN0b3IuY3Jvc3NWZWN0b3JzKHRoaXMuaG9sZGVyLnZlY3RvciwgcGxhbmUubm9ybWFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGRlci52ZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjdG9yLnggKyB2ZWN0b3IueSArIHZlY3Rvci56KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yb3RhdGluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFuZSA9IGF4aXNfcGxhbmVzW3RoaXMuaG9sZGVyLmF4aXNdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnRlcnNlY3QodGhpcy5kb3duLCBwbGFuZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnRlcnNlY3QodGhpcy5tb3ZlLCBwbGFuZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjMoKS5zdWJWZWN0b3JzKGVuZCwgc3RhcnQpO1xuICAgICAgICAgICAgICAgIHZlY3Rvci5tdWx0aXBseSh0aGlzLmhvbGRlci52ZWN0b3IpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPVxuICAgICAgICAgICAgICAgICAgICAodmVjdG9yLnggKyB2ZWN0b3IueSArIHZlY3Rvci56KSAqXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlX2NvbmZpZy5zZW5zaWJpbGl0eSAqIDFlLTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHRoaXMubW92ZS54IC0gdGhpcy5kb3duLng7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLm1vdmUueSAtIHRoaXMuZG93bi55O1xuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAodGhpcy5sb2NrID8gMTAwIDogY3ViZV9jb25maWcuc2Vuc2liaWxpdHkpICogMWUtNCAqICh0aGlzLmF4aXMgPT0gXCJ5XCIgPyAtZHggOlxuICAgICAgICAgICAgICAgICAgICAodGhpcy5heGlzID09IFwieFwiID8gLWR5IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChkeSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGxldCBmYWNlID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5ob2xkZXIuYXhpcykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgICAgICBmYWNlID0gRmFjZS5SO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICAgICAgZmFjZSA9IEZhY2UuVTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAneic6XG4gICAgICAgICAgICAgICAgICAgIGZhY2UgPSBGYWNlLkY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB0YXAgb2YgdGhpcy50YXBzKSB7XG4gICAgICAgICAgICAgICAgdGFwKHRoaXMuaG9sZGVyLmluZGV4LCBmYWNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yb3RhdGluZykge1xuICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5hbmdsZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2NrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFuZ2xlKSA8IE1hdGguUEkgLyA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gKE1hdGguYWJzKGFuZ2xlKSAvIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuZG93bl90aWNrKSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPiAwLjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlID0gYW5nbGUgPT0gMCA/IDAgOiAoKGFuZ2xlIC8gTWF0aC5hYnMoYW5nbGUpKSAqIChNYXRoLlBJIC8gMikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFuZ2xlID0gYW5nbGUgKyB0aGlzLmNvbnRpbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC50d2lzdChhbmdsZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gdGhpcy53b3JsZC5jdWJlLnRhYmxlLmdyb3Vwc1t0aGlzLmF4aXNdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnR3aXN0KGFuZ2xlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRlci5pbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm90YXRpbmcgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBDdWJlbGV0IGZyb20gXCIuL2N1YmVsZXRcIjtcbmltcG9ydCB7IEdyb3VwVGFibGUgfSBmcm9tIFwiLi9ncm91cFwiO1xuaW1wb3J0IHsgdHdpc3RlciB9IGZyb20gXCIuL3R3aXN0ZXJcIjtcbmltcG9ydCB7IGN1YmVsZXRfZmFjZV9hdHRycywgY3ViZWxldF9sYW1iZXJzLCBjdWJlbGV0X3N0aWNrZXIsIGN1YmVfY29uZmlnIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IEZhY2UgfSBmcm9tIFwiLi91dGlsc19pbnRlcm5hbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZSBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jdWJlbGV0cyA9IFtdO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSBuZXcgQ3ViZWxldChpKTtcbiAgICAgICAgICAgIHRoaXMuY3ViZWxldHMucHVzaChjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMuYWRkKGN1YmVsZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9ja3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubG9ja3Muc2V0KFwieFwiLCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLmxvY2tzLnNldChcInlcIiwgbmV3IFNldCgpKTtcbiAgICAgICAgdGhpcy5sb2Nrcy5zZXQoXCJ6XCIsIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMubG9ja3Muc2V0KFwiYVwiLCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLnRhYmxlID0gbmV3IEdyb3VwVGFibGUodGhpcyk7XG4gICAgICAgIHRoaXMubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZU1hdHJpeCgpO1xuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgY2FsbGJhY2soKSB7XG4gICAgICAgIGZvciAoY29uc3QgbG9jayBvZiB0aGlzLmxvY2tzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAobG9jay5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2soYXhpcywgbGF5ZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoKF9hID0gdGhpcy5sb2Nrcy5nZXQoXCJhXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGFzKDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXhpc19sb2Nrc2V0ID0gdGhpcy5sb2Nrcy5nZXQoYXhpcyk7XG4gICAgICAgIGlmIChheGlzX2xvY2tzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbG9ja3NldCBvZiB0aGlzLmxvY2tzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAobG9ja3NldCAhPSBheGlzX2xvY2tzZXQgJiYgbG9ja3NldC5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBheGlzX2xvY2tzZXQuYWRkKGxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHVubG9jayhheGlzLCBsYXllcikge1xuICAgICAgICBjb25zdCBheGlzX2xvY2tzZXQgPSB0aGlzLmxvY2tzLmdldChheGlzKTtcbiAgICAgICAgYXhpc19sb2Nrc2V0ID09PSBudWxsIHx8IGF4aXNfbG9ja3NldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXhpc19sb2Nrc2V0LmRlbGV0ZShsYXllcik7XG4gICAgfVxuICAgIHJhbmRvbTMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSwgMCksIDIpO1xuICAgIH1cbiAgICBzY3JhbWJsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdWJlX2NvbmZpZy5zY3JhbWJsZV9zdGVwczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBheGlzID0gW1wieFwiLCBcInlcIiwgXCJ6XCJdW3RoaXMucmFuZG9tMygpXTtcbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5yYW5kb20zKCk7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9ICh0aGlzLnJhbmRvbTMoKSAtIDEpICogKE1hdGguUEkgLyAyKTtcbiAgICAgICAgICAgIHRoaXMudGFibGUuZ3JvdXBzW2F4aXNdW2xldmVsXS50d2lzdChhbmdsZSA9PT0gMCA/IE1hdGguUEkgOiBhbmdsZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHR3aXN0ZXIuZmluaXNoKCk7XG4gICAgICAgIGZvciAoY29uc3QgY3ViZWxldCBvZiB0aGlzLmN1YmVsZXRzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjdWJlbGV0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1YmVsZXRzLnNwbGljZSgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gbmV3IEN1YmVsZXQoaSk7XG4gICAgICAgICAgICB0aGlzLmN1YmVsZXRzLnB1c2goY3ViZWxldCk7XG4gICAgICAgICAgICB0aGlzLmFkZChjdWJlbGV0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYmxlID0gbmV3IEdyb3VwVGFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCB4LCB5LCB6O1xuICAgICAgICB0d2lzdGVyLmZpbmlzaCgpO1xuICAgICAgICB5ID0gMjtcbiAgICAgICAgZm9yICh6ID0gMDsgeiA8IDM7IHorKykge1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IDM7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdWJlbGV0c1tpbmRleF0uZ2V0Q29sb3JPZihGYWNlLlUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4ID0gMjtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeiA9IDI7IHogPj0gMDsgei0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmN1YmVsZXRzW2luZGV4XS5nZXRDb2xvck9mKEZhY2UuUik7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHogPSAyO1xuICAgICAgICBmb3IgKHkgPSAyOyB5ID49IDA7IHktLSkge1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IDM7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdWJlbGV0c1tpbmRleF0uZ2V0Q29sb3JPZihGYWNlLkYpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB5ID0gMDtcbiAgICAgICAgZm9yICh6ID0gMjsgeiA+PSAwOyB6LS0pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCAzOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY3ViZWxldHNbaW5kZXhdLmdldENvbG9yT2YoRmFjZS5EKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeCA9IDA7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHogPSAwOyB6IDwgMzsgeisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmN1YmVsZXRzW2luZGV4XS5nZXRDb2xvck9mKEZhY2UuTCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHogPSAwO1xuICAgICAgICBmb3IgKHkgPSAyOyB5ID49IDA7IHktLSkge1xuICAgICAgICAgICAgZm9yICh4ID0gMjsgeCA+PSAwOyB4LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY3ViZWxldHNbaW5kZXhdLmdldENvbG9yT2YoRmFjZS5CKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmVzdG9yZShzdGF0ZSkge1xuICAgICAgICBsZXQgeCwgeSwgejtcbiAgICAgICAgbGV0IGN1ciA9IDA7XG4gICAgICAgIGxldCBmYWNlO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHkgPSAyO1xuICAgICAgICBmYWNlID0gRmFjZS5VO1xuICAgICAgICBmb3IgKHogPSAwOyB6IDwgMzsgeisrKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzdGF0ZVtjdXIrK107XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZWxldHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQucmVtb3ZlKGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0pO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBuZXcgTWVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlX2F0dHIgPSBjdWJlbGV0X2ZhY2VfYXR0cnNbZmFjZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNrZXIgPSBuZXcgVEhSRUUuTWVzaChjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfbGFtYmVyc1tjb2xvcl0pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZhY2VfYXR0ci5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gc3RpY2tlcjtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5hZGQoc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHggPSAyO1xuICAgICAgICBmYWNlID0gRmFjZS5SO1xuICAgICAgICBmb3IgKHkgPSAyOyB5ID49IDA7IHktLSkge1xuICAgICAgICAgICAgZm9yICh6ID0gMjsgeiA+PSAwOyB6LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHN0YXRlW2N1cisrXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlbGV0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgY3ViZWxldC5yZW1vdmUoY3ViZWxldC5zdGlja2Vyc1tmYWNlXSk7XG4gICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IG5ldyBNZXNoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VfYXR0ciA9IGN1YmVsZXRfZmFjZV9hdHRyc1tmYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2tlciA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfc3RpY2tlciwgY3ViZWxldF9sYW1iZXJzW2NvbG9yXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmFjZV9hdHRyLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5wb3NpdGlvbi5jb3B5KGZhY2VfYXR0ci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LmFkZChzdGlja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeiA9IDI7XG4gICAgICAgIGZhY2UgPSBGYWNlLkY7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzdGF0ZVtjdXIrK107XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZWxldHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQucmVtb3ZlKGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0pO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBuZXcgTWVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlX2F0dHIgPSBjdWJlbGV0X2ZhY2VfYXR0cnNbZmFjZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNrZXIgPSBuZXcgVEhSRUUuTWVzaChjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfbGFtYmVyc1tjb2xvcl0pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZhY2VfYXR0ci5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gc3RpY2tlcjtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5hZGQoc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHkgPSAwO1xuICAgICAgICBmYWNlID0gRmFjZS5EO1xuICAgICAgICBmb3IgKHogPSAyOyB6ID49IDA7IHotLSkge1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IDM7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3RhdGVbY3VyKytdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmVsZXRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnJlbW92ZShjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdKTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gbmV3IE1lc2goKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ZhY2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBjdWJlbGV0X2xhbWJlcnNbY29sb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnBvc2l0aW9uLmNvcHkoZmFjZV9hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IHN0aWNrZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4ID0gMDtcbiAgICAgICAgZmFjZSA9IEZhY2UuTDtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeiA9IDA7IHogPCAzOyB6KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHN0YXRlW2N1cisrXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlbGV0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgY3ViZWxldC5yZW1vdmUoY3ViZWxldC5zdGlja2Vyc1tmYWNlXSk7XG4gICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IG5ldyBNZXNoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VfYXR0ciA9IGN1YmVsZXRfZmFjZV9hdHRyc1tmYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2tlciA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfc3RpY2tlciwgY3ViZWxldF9sYW1iZXJzW2NvbG9yXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmFjZV9hdHRyLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5wb3NpdGlvbi5jb3B5KGZhY2VfYXR0ci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LmFkZChzdGlja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeiA9IDA7XG4gICAgICAgIGZhY2UgPSBGYWNlLkI7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAyOyB4ID49IDA7IHgtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3RhdGVbY3VyKytdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmVsZXRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnJlbW92ZShjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdKTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gbmV3IE1lc2goKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ZhY2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBjdWJlbGV0X2xhbWJlcnNbY29sb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnBvc2l0aW9uLmNvcHkoZmFjZV9hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IHN0aWNrZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjdWJlbGV0X2RlZnMsIGN1YmVsZXRfY29yZSwgY3ViZWxldF9mcmFtZSwgY3ViZWxldF9zdGlja2VyLCBjdWJlbGV0X2ZhY2VfYXR0cnMsIGRpcmVjdGlvblRvSW5kZXgsIGZhY2VQb3N0aW9uQmluZGluZ3MsIGN1YmVsZXRfbGFtYmVycyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IGluZGV4VG9EaXJlY3Rpb24gfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZWxldCBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvcihpbmRleCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl92ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGNvbnN0IGRyY3RuID0gaW5kZXhUb0RpcmVjdGlvbihpbmRleCk7XG4gICAgICAgIHRoaXMudmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoZHJjdG4ueCwgZHJjdG4ueSwgZHJjdG4ueik7XG4gICAgICAgIHRoaXMuZnJhbWUgPSBuZXcgVEhSRUUuTWVzaChjdWJlbGV0X2ZyYW1lLCBjdWJlbGV0X2NvcmUpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLmZyYW1lKTtcbiAgICAgICAgdGhpcy5zdGlja2VycyA9IG5ldyBBcnJheSg2KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY2VfYXR0ciA9IGN1YmVsZXRfZmFjZV9hdHRyc1tpXTtcbiAgICAgICAgICAgIGlmIChmYWNlX2F0dHIubWF0Y2godGhpcy52ZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RpY2tlciA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfc3RpY2tlciwgZmFjZV9hdHRyLmxhbWJlcnQpO1xuICAgICAgICAgICAgICAgIHN0aWNrZXIucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmFjZV9hdHRyLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBzdGlja2VyLnBvc2l0aW9uLmNvcHkoZmFjZV9hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0aWNrZXJzW2ldID0gc3RpY2tlcjtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChzdGlja2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVNYXRyaXgoKTtcbiAgICB9XG4gICAgc2V0IHZlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fdmVjdG9yLmNvcHkodmVjdG9yKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGRpcmVjdGlvblRvSW5kZXgodmVjdG9yKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5KHZlY3Rvcik7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubXVsdGlwbHlTY2FsYXIoY3ViZWxldF9kZWZzLnNpemUpO1xuICAgIH1cbiAgICBnZXQgdmVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVjdG9yO1xuICAgIH1cbiAgICBjb252ZXJ0RmFjZShmYWNlKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpLmNvcHkodGhpcy5xdWF0ZXJuaW9uKTtcbiAgICAgICAgZm9yIChjb25zdCBiaW5kaW5nIG9mIGZhY2VQb3N0aW9uQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLmZhY2UgPT09IGZhY2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb3B5KGJpbmRpbmcucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uLmFwcGx5UXVhdGVybmlvbihxdWF0ZXJuaW9uLmludmVydCgpKTtcbiAgICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjMoTWF0aC5yb3VuZChwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChwb3NpdGlvbi55KSwgTWF0aC5yb3VuZChwb3NpdGlvbi56KSk7XG4gICAgICAgIGZvciAoY29uc3QgYmluZGluZyBvZiBmYWNlUG9zdGlvbkJpbmRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoYmluZGluZy5wb3NpdGlvbi5lcXVhbHModmVjdG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLmZhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBnZXRDb2xvck9mKGZhY2UpIHtcbiAgICAgICAgY29uc3Qgc3RpY2tlciA9IHRoaXMuc3RpY2tlcnNbdGhpcy5jb252ZXJ0RmFjZShmYWNlKV07XG4gICAgICAgIHN3aXRjaCAoc3RpY2tlci5tYXRlcmlhbCkge1xuICAgICAgICAgICAgY2FzZSBjdWJlbGV0X2xhbWJlcnMuTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMXCI7XG4gICAgICAgICAgICBjYXNlIGN1YmVsZXRfbGFtYmVycy5SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJcIjtcbiAgICAgICAgICAgIGNhc2UgY3ViZWxldF9sYW1iZXJzLkY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xuICAgICAgICAgICAgY2FzZSBjdWJlbGV0X2xhbWJlcnMuQjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCXCI7XG4gICAgICAgICAgICBjYXNlIGN1YmVsZXRfbGFtYmVycy5VOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVcIjtcbiAgICAgICAgICAgIGNhc2UgY3ViZWxldF9sYW1iZXJzLkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIj9cIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IFR3aXN0LCB0d2lzdGVyIH0gZnJvbSBcIi4vdHdpc3RlclwiO1xuaW1wb3J0IHsgYXhpc192ZWN0b3JzLCBjdWJlX2NvbmZpZywgaW5kZXhUb0xheWVyLCB0d2lzdF9kdXJhdGlvbiB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJlR3JvdXAgZXh0ZW5kcyBUSFJFRS5Hcm91cCB7XG4gICAgY29uc3RydWN0b3IoY3ViZSwgYXhpcywgbGF5ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50d2lzdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLmhvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdWJlID0gY3ViZTtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpcztcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgICAgICB0aGlzLmN1YmVsZXRzID0gW107XG4gICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlsYXllciA9IGluZGV4VG9MYXllcihpKTtcbiAgICAgICAgICAgIGlmIChheGlzID09IFwieFwiICYmIGlsYXllci54ID09IGxheWVyXG4gICAgICAgICAgICAgICAgfHwgYXhpcyA9PSBcInlcIiAmJiBpbGF5ZXIueSA9PSBsYXllclxuICAgICAgICAgICAgICAgIHx8IGF4aXMgPT0gXCJ6XCIgJiYgaWxheWVyLnogPT0gbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVNYXRyaXgoKTtcbiAgICB9XG4gICAgc2V0IGFuZ2xlKGFuZ2xlKSB7XG4gICAgICAgIHRoaXMuX2FuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMuc2V0Um90YXRpb25Gcm9tQXhpc0FuZ2xlKGF4aXNfdmVjdG9yc1t0aGlzLmF4aXNdLCBhbmdsZSk7XG4gICAgICAgIHRoaXMudXBkYXRlTWF0cml4KCk7XG4gICAgICAgIHRoaXMuY3ViZS5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIGdldCBhbmdsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuZ2xlO1xuICAgIH1cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnR3aXN0aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMudHdpc3RpbmcuYXJyaXZhbDtcbiAgICAgICAgICAgIHR3aXN0ZXIuY2FuY2VsKHRoaXMudHdpc3RpbmcpO1xuICAgICAgICAgICAgdGhpcy50d2lzdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFuZ2xlIC8gKE1hdGguUEkgLyAyKSkgKiAoTWF0aC5QSSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIGlmICh0aGlzLnR3aXN0aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMudHdpc3RpbmcuYXJyaXZhbCAtIHRoaXMuYW5nbGU7XG4gICAgICAgICAgICB0d2lzdGVyLmZpbmlzaCh0aGlzLnR3aXN0aW5nKTtcbiAgICAgICAgICAgIHRoaXMudHdpc3RpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGhvbGQoKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmN1YmUubG9jayh0aGlzLmF4aXMsIHRoaXMubGF5ZXIpO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvbGRpbmcgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5pbmRpY2VzKSB7XG4gICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlLmN1YmVsZXRzW2ldO1xuICAgICAgICAgICAgdGhpcy5jdWJlbGV0cy5wdXNoKGN1YmVsZXQpO1xuICAgICAgICAgICAgdGhpcy5jdWJlLnJlbW92ZShjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMuYWRkKGN1YmVsZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3ViZS5hZGQodGhpcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBkcmFnKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5ob2xkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gLXRoaXMuZmluaXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaG9sZCgpO1xuICAgIH1cbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLmhvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50d2lzdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmVsZXRzLnBvcCgpO1xuICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY3ViZWxldCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3RhdGUoY3ViZWxldCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMuY3ViZS5hZGQoY3ViZWxldCk7XG4gICAgICAgICAgICB0aGlzLmN1YmUuY3ViZWxldHNbY3ViZWxldC5pbmRleF0gPSBjdWJlbGV0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3ViZS5yZW1vdmUodGhpcyk7XG4gICAgICAgIHRoaXMuY3ViZS5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLmN1YmUudW5sb2NrKHRoaXMuYXhpcywgdGhpcy5sYXllcik7XG4gICAgICAgIHRoaXMuY3ViZS5jYWxsYmFjaygpO1xuICAgIH1cbiAgICB0d2lzdChhbmdsZSwgZmFzdCkge1xuICAgICAgICBpZiAodGhpcy5ob2xkaW5nKSB7XG4gICAgICAgICAgICBhbmdsZSA9IGFuZ2xlICsgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmhvbGQoKTtcbiAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFuZ2xlID0gTWF0aC5yb3VuZChhbmdsZSAvIChNYXRoLlBJIC8gMikpICogKE1hdGguUEkgLyAyKTtcbiAgICAgICAgaWYgKGZhc3QpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5hbmdsZSAtIGFuZ2xlKSA8IDFlLTYpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZnJhYyA9IE1hdGguYWJzKHRoaXMuYW5nbGUgLSBhbmdsZSkgLyAoTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0d2lzdF9kdXJhdGlvbihjdWJlX2NvbmZpZy5zcGVlZCkgKiAoMiAtIDIgLyAoZnJhYyArIDEpKTtcbiAgICAgICAgICAgIHRoaXMudHdpc3RpbmcgPSBuZXcgVHdpc3QodGhpcy5hbmdsZSwgYW5nbGUsIGR1cmF0aW9uLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuYW5nbGUgLSBhbmdsZSkgPCAxZS02KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0d2lzdGVyLnR3aXN0cy5wdXNoKHRoaXMudHdpc3RpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByb3RhdGUoY3ViZWxldCkge1xuICAgICAgICBjdWJlbGV0LnJvdGF0ZU9uV29ybGRBeGlzKGF4aXNfdmVjdG9yc1t0aGlzLmF4aXNdLCB0aGlzLmFuZ2xlKTtcbiAgICAgICAgY3ViZWxldC52ZWN0b3IgPSBjdWJlbGV0LnZlY3Rvci5hcHBseUF4aXNBbmdsZShheGlzX3ZlY3RvcnNbdGhpcy5heGlzXSwgdGhpcy5hbmdsZSk7XG4gICAgICAgIGN1YmVsZXQudXBkYXRlTWF0cml4KCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyb3VwVGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGN1YmUpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBheGlzIG9mIFtcInhcIiwgXCJ5XCIsIFwielwiXSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobmV3IEN1YmVHcm91cChjdWJlLCBheGlzLCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdyb3Vwc1theGlzXSA9IGxpc3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSW50ZXJhY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHkpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihkb21zLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmRvbXMgPSBbXTtcbiAgICAgICAgdGhpcy50b3VjaCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gbmV3IEludGVyYWN0aW9uKFwidG91Y2hlbmRcIiwgdGhpcy5sYXN0LmNsaWVudFggLSB0aGlzLmRvbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCwgdGhpcy5sYXN0LmNsaWVudFkgLSB0aGlzLmRvbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3QgPSBmaXJzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5vdGluKCkgfHwgKChfYSA9IHRoaXMubGFzdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkZW50aWZpZXIpICE9IGZpcnN0LmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBuZXcgSW50ZXJhY3Rpb24oZXZlbnQudHlwZSwgZmlyc3QuY2xpZW50WCAtIHRoaXMuZG9tc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LCBmaXJzdC5jbGllbnRZIC0gdGhpcy5kb21zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGFjdGlvbik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2hlbmRcIiB8fCBldmVudC50eXBlID09PSBcInRvdWNoY2FuY2VsXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5vdGluKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG5ldyBJbnRlcmFjdGlvbihldmVudC50eXBlLCBldmVudC5jbGllbnRYIC0gdGhpcy5kb21zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsIGV2ZW50LmNsaWVudFkgLSB0aGlzLmRvbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNldXBcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBkb20gb2YgZG9tcykge1xuICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tcy5wdXNoKGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMudG91Y2gpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy50b3VjaCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgbm90aW4oKSB7XG4gICAgICAgIGZvciAoY29uc3QgZG9tIG9mIHRoaXMuZG9tcykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSBkb20pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTEJMU29sdmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5uZXh0Q29sb3IgPSB7fTtcbiAgICAgICAgdGhpcy5uZXh0RmFjZSA9IHsgbDogXCJmXCIsIGY6IFwiclwiLCByOiBcImJcIiwgYjogXCJsXCIgfTtcbiAgICAgICAgdGhpcy5wcmV2RmFjZSA9IHsgbDogXCJiXCIsIGI6IFwiclwiLCByOiBcImZcIiwgZjogXCJsXCIgfTtcbiAgICB9XG4gICAgZ2V0Q3ViZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlID0ge1xuICAgICAgICAgICAgYjogc3RhdGVbNDldLFxuICAgICAgICAgICAgYmw6IHN0YXRlWzUwXS5jb25jYXQoc3RhdGVbMzldKSxcbiAgICAgICAgICAgIGQ6IHN0YXRlWzMxXSxcbiAgICAgICAgICAgIGRiOiBzdGF0ZVszNF0uY29uY2F0KHN0YXRlWzUyXSksXG4gICAgICAgICAgICBkYmw6IHN0YXRlWzMzXS5jb25jYXQoc3RhdGVbNTNdKS5jb25jYXQoc3RhdGVbNDJdKSxcbiAgICAgICAgICAgIGRmOiBzdGF0ZVsyOF0uY29uY2F0KHN0YXRlWzI1XSksXG4gICAgICAgICAgICBkZnI6IHN0YXRlWzI5XS5jb25jYXQoc3RhdGVbMjZdKS5jb25jYXQoc3RhdGVbMTVdKSxcbiAgICAgICAgICAgIGRsOiBzdGF0ZVszMF0uY29uY2F0KHN0YXRlWzQzXSksXG4gICAgICAgICAgICBkbGY6IHN0YXRlWzI3XS5jb25jYXQoc3RhdGVbNDRdKS5jb25jYXQoc3RhdGVbMjRdKSxcbiAgICAgICAgICAgIGRyOiBzdGF0ZVszMl0uY29uY2F0KHN0YXRlWzE2XSksXG4gICAgICAgICAgICBkcmI6IHN0YXRlWzM1XS5jb25jYXQoc3RhdGVbMTddKS5jb25jYXQoc3RhdGVbNTFdKSxcbiAgICAgICAgICAgIGY6IHN0YXRlWzIyXSxcbiAgICAgICAgICAgIGZyOiBzdGF0ZVsyM10uY29uY2F0KHN0YXRlWzEyXSksXG4gICAgICAgICAgICBsOiBzdGF0ZVs0MF0sXG4gICAgICAgICAgICBsZjogc3RhdGVbNDFdLmNvbmNhdChzdGF0ZVsyMV0pLFxuICAgICAgICAgICAgcjogc3RhdGVbMTNdLFxuICAgICAgICAgICAgcmI6IHN0YXRlWzE0XS5jb25jYXQoc3RhdGVbNDhdKSxcbiAgICAgICAgICAgIHU6IHN0YXRlWzRdLFxuICAgICAgICAgICAgdWI6IHN0YXRlWzFdLmNvbmNhdChzdGF0ZVs0Nl0pLFxuICAgICAgICAgICAgdWJsOiBzdGF0ZVswXS5jb25jYXQoc3RhdGVbNDddKS5jb25jYXQoc3RhdGVbMzZdKSxcbiAgICAgICAgICAgIHVmOiBzdGF0ZVs3XS5jb25jYXQoc3RhdGVbMTldKSxcbiAgICAgICAgICAgIHVmcjogc3RhdGVbOF0uY29uY2F0KHN0YXRlWzIwXSkuY29uY2F0KHN0YXRlWzldKSxcbiAgICAgICAgICAgIHVsOiBzdGF0ZVszXS5jb25jYXQoc3RhdGVbMzddKSxcbiAgICAgICAgICAgIHVsZjogc3RhdGVbNl0uY29uY2F0KHN0YXRlWzM4XSkuY29uY2F0KHN0YXRlWzE4XSksXG4gICAgICAgICAgICB1cjogc3RhdGVbNV0uY29uY2F0KHN0YXRlWzEwXSksXG4gICAgICAgICAgICB1cmI6IHN0YXRlWzJdLmNvbmNhdChzdGF0ZVsxMV0pLmNvbmNhdChzdGF0ZVs0NV0pLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb2xvcl9sID0gdGhpcy5jdWJlU3RhdGVbXCJsXCJdO1xuICAgICAgICBjb25zdCBjb2xvcl9yID0gdGhpcy5jdWJlU3RhdGVbXCJyXCJdO1xuICAgICAgICBjb25zdCBjb2xvcl9mID0gdGhpcy5jdWJlU3RhdGVbXCJmXCJdO1xuICAgICAgICBjb25zdCBjb2xvcl9iID0gdGhpcy5jdWJlU3RhdGVbXCJiXCJdO1xuICAgICAgICB0aGlzLm5leHRDb2xvcltjb2xvcl9sXSA9IGNvbG9yX2Y7XG4gICAgICAgIHRoaXMubmV4dENvbG9yW2NvbG9yX2ZdID0gY29sb3JfcjtcbiAgICAgICAgdGhpcy5uZXh0Q29sb3JbY29sb3Jfcl0gPSBjb2xvcl9iO1xuICAgICAgICB0aGlzLm5leHRDb2xvcltjb2xvcl9iXSA9IGNvbG9yX2w7XG4gICAgfVxuICAgIFR3aXN0X0IoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51YjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWIgPSB0aGlzLmN1YmVTdGF0ZS5yYjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUucmIgPSB0aGlzLmN1YmVTdGF0ZS5kYjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGIgPSB0aGlzLmN1YmVTdGF0ZS5ibFsxXSArIHRoaXMuY3ViZVN0YXRlLmJsWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5ibCA9IHRtcFsxXSArIHRtcFswXTtcbiAgICAgICAgdG1wID0gdGhpcy5jdWJlU3RhdGUudWJsO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51YmwgPSB0aGlzLmN1YmVTdGF0ZS51cmJbMV0gKyB0aGlzLmN1YmVTdGF0ZS51cmJbMl0gKyB0aGlzLmN1YmVTdGF0ZS51cmJbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVyYiA9IHRoaXMuY3ViZVN0YXRlLmRyYlsxXSArIHRoaXMuY3ViZVN0YXRlLmRyYlswXSArIHRoaXMuY3ViZVN0YXRlLmRyYlsyXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZHJiID0gdGhpcy5jdWJlU3RhdGUuZGJsWzJdICsgdGhpcy5jdWJlU3RhdGUuZGJsWzBdICsgdGhpcy5jdWJlU3RhdGUuZGJsWzFdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kYmwgPSB0bXBbMl0gKyB0bXBbMV0gKyB0bXBbMF07XG4gICAgfVxuICAgIFR3aXN0X1IoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51cjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudXIgPSB0aGlzLmN1YmVTdGF0ZS5mcjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZnIgPSB0aGlzLmN1YmVTdGF0ZS5kcjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZHIgPSB0aGlzLmN1YmVTdGF0ZS5yYlsxXSArIHRoaXMuY3ViZVN0YXRlLnJiWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5yYiA9IHRtcFsxXSArIHRtcFswXTtcbiAgICAgICAgdG1wID0gdGhpcy5jdWJlU3RhdGUudXJiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51cmIgPSB0aGlzLmN1YmVTdGF0ZS51ZnJbMV0gKyB0aGlzLmN1YmVTdGF0ZS51ZnJbMl0gKyB0aGlzLmN1YmVTdGF0ZS51ZnJbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVmciA9IHRoaXMuY3ViZVN0YXRlLmRmclsxXSArIHRoaXMuY3ViZVN0YXRlLmRmclswXSArIHRoaXMuY3ViZVN0YXRlLmRmclsyXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGZyID0gdGhpcy5jdWJlU3RhdGUuZHJiWzJdICsgdGhpcy5jdWJlU3RhdGUuZHJiWzBdICsgdGhpcy5jdWJlU3RhdGUuZHJiWzFdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kcmIgPSB0bXBbMl0gKyB0bXBbMV0gKyB0bXBbMF07XG4gICAgfVxuICAgIDtcbiAgICBUd2lzdF9GKCkge1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5jdWJlU3RhdGUudWY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVmID0gdGhpcy5jdWJlU3RhdGUubGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmxmID0gdGhpcy5jdWJlU3RhdGUuZGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRmID0gdGhpcy5jdWJlU3RhdGUuZnJbMV0gKyB0aGlzLmN1YmVTdGF0ZS5mclswXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZnIgPSB0bXBbMV0gKyB0bXBbMF07XG4gICAgICAgIHRtcCA9IHRoaXMuY3ViZVN0YXRlLnVmcjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWZyID0gdGhpcy5jdWJlU3RhdGUudWxmWzFdICsgdGhpcy5jdWJlU3RhdGUudWxmWzJdICsgdGhpcy5jdWJlU3RhdGUudWxmWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51bGYgPSB0aGlzLmN1YmVTdGF0ZS5kbGZbMV0gKyB0aGlzLmN1YmVTdGF0ZS5kbGZbMF0gKyB0aGlzLmN1YmVTdGF0ZS5kbGZbMl07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRsZiA9IHRoaXMuY3ViZVN0YXRlLmRmclsyXSArIHRoaXMuY3ViZVN0YXRlLmRmclswXSArIHRoaXMuY3ViZVN0YXRlLmRmclsxXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGZyID0gdG1wWzJdICsgdG1wWzFdICsgdG1wWzBdO1xuICAgIH1cbiAgICBUd2lzdF9MKCkge1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5jdWJlU3RhdGUudWw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVsID0gdGhpcy5jdWJlU3RhdGUuYmw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmJsID0gdGhpcy5jdWJlU3RhdGUuZGw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRsID0gdGhpcy5jdWJlU3RhdGUubGZbMV0gKyB0aGlzLmN1YmVTdGF0ZS5sZlswXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUubGYgPSB0bXBbMV0gKyB0bXBbMF07XG4gICAgICAgIHRtcCA9IHRoaXMuY3ViZVN0YXRlLnVsZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWxmID0gdGhpcy5jdWJlU3RhdGUudWJsWzFdICsgdGhpcy5jdWJlU3RhdGUudWJsWzJdICsgdGhpcy5jdWJlU3RhdGUudWJsWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51YmwgPSB0aGlzLmN1YmVTdGF0ZS5kYmxbMV0gKyB0aGlzLmN1YmVTdGF0ZS5kYmxbMF0gKyB0aGlzLmN1YmVTdGF0ZS5kYmxbMl07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRibCA9IHRoaXMuY3ViZVN0YXRlLmRsZlsyXSArIHRoaXMuY3ViZVN0YXRlLmRsZlswXSArIHRoaXMuY3ViZVN0YXRlLmRsZlsxXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGxmID0gdG1wWzJdICsgdG1wWzFdICsgdG1wWzBdO1xuICAgIH1cbiAgICBUd2lzdF9VKCkge1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5jdWJlU3RhdGUudWw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVsID0gdGhpcy5jdWJlU3RhdGUudWY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVmID0gdGhpcy5jdWJlU3RhdGUudXI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVyID0gdGhpcy5jdWJlU3RhdGUudWI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnViID0gdG1wO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51bGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVsZiA9IHRoaXMuY3ViZVN0YXRlLnVmcjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWZyID0gdGhpcy5jdWJlU3RhdGUudXJiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51cmIgPSB0aGlzLmN1YmVTdGF0ZS51Ymw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVibCA9IHRtcDtcbiAgICB9XG4gICAgVHdpc3RfRCgpIHtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuY3ViZVN0YXRlLmRsO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kbCA9IHRoaXMuY3ViZVN0YXRlLmRiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kYiA9IHRoaXMuY3ViZVN0YXRlLmRyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kciA9IHRoaXMuY3ViZVN0YXRlLmRmO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kZiA9IHRtcDtcbiAgICAgICAgdG1wID0gdGhpcy5jdWJlU3RhdGUuZGxmO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kbGYgPSB0aGlzLmN1YmVTdGF0ZS5kYmw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRibCA9IHRoaXMuY3ViZVN0YXRlLmRyYjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZHJiID0gdGhpcy5jdWJlU3RhdGUuZGZyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kZnIgPSB0bXA7XG4gICAgfVxuICAgIFR3aXN0X1koKSB7XG4gICAgICAgIHRoaXMuVHdpc3RfVSgpO1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5jdWJlU3RhdGUubGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmxmID0gdGhpcy5jdWJlU3RhdGUuZnI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmZyID0gdGhpcy5jdWJlU3RhdGUucmI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnJiID0gdGhpcy5jdWJlU3RhdGUuYmw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmJsID0gdG1wO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS5mO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5mID0gdGhpcy5jdWJlU3RhdGUucjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuciA9IHRoaXMuY3ViZVN0YXRlLmI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmIgPSB0aGlzLmN1YmVTdGF0ZS5sO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5sID0gdG1wO1xuICAgICAgICB0aGlzLlR3aXN0X0QoKSwgdGhpcy5Ud2lzdF9EKCksIHRoaXMuVHdpc3RfRCgpO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShvcmRlcl9saXN0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJfbGlzdCkge1xuICAgICAgICAgICAgc3dpdGNoIChvcmRlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9EKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiVVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9VKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfVSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9MKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfTCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0woKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9MKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJGXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZlwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0YoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9GKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiUlwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1IoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9SKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfUigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1IoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9CKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJiXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfQigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9CKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfWSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9ZKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfWSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRCbG9ja1BvcyhibG9jaykge1xuICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKFwiXltcIiArIGJsb2NrICsgXCJde1wiICsgYmxvY2subGVuZ3RoICsgXCJ9JFwiKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5jdWJlU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1YmVTdGF0ZVtrXS5tYXRjaChyZWcpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W1wia1wiXSA9IGs7XG4gICAgICAgICAgICAgICAgcmVzdWx0W1widlwiXSA9IHRoaXMuY3ViZVN0YXRlW2tdO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgRklSU1RfTEFZRVJfRURHRVNfU0lOR0xFKGJsb2NrX3BvcywgYmxvY2tfY29sb3IpIHtcbiAgICAgICAgbGV0IGV4cCA9IFwiXCIsIGV4cF9sb2cgPSBcIlwiO1xuICAgICAgICBsZXQgcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIHMgPSB0aGlzLmdldEJsb2NrUG9zKGJsb2NrX2NvbG9yKTtcbiAgICAgICAgICAgIGlmIChzLmsuaW5kZXhPZihcImRcIikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAocy52WzBdID09IGJsb2NrX2NvbG9yWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmsgPT0gYmxvY2tfcG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cF9sb2c7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1sxXS50b1VwcGVyQ2FzZSgpICsgcy5rWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzLmsuaW5kZXhPZihcInVcIikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5rWzFdID09IGJsb2NrX3Bvc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy52WzBdID09IGJsb2NrX2NvbG9yWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWJlU3RhdGVbYmxvY2tfcG9zWzBdICsgdGhpcy5uZXh0RmFjZVtzLmtbMV1dXSAhPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdWJlU3RhdGVbYmxvY2tfcG9zWzBdXSArIHRoaXMuY3ViZVN0YXRlW3RoaXMubmV4dEZhY2Vbcy5rWzFdXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBcInVcIiArIHRoaXMubmV4dEZhY2Vbcy5rWzFdXSArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBcInVcIiArIHRoaXMubmV4dEZhY2Vbcy5rWzFdXSArIHMua1sxXS50b1VwcGVyQ2FzZSgpICsgdGhpcy5uZXh0RmFjZVtzLmtbMV1dLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gXCJVXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocy52WzBdID09IGJsb2NrX2NvbG9yWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmtbMV0gPT0gYmxvY2tfcG9zWzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZVtibG9ja19wb3NbMF0gKyBzLmtbMV1dICE9IHRoaXMuY3ViZVN0YXRlW2Jsb2NrX3Bvc1swXV0gKyB0aGlzLmN1YmVTdGF0ZVtzLmtbMV1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1sxXS50b1VwcGVyQ2FzZSgpICsgXCJVXCIgKyBzLmtbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5rWzBdID09IGJsb2NrX3Bvc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1swXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZVtibG9ja19wb3NbMF0gKyBzLmtbMF1dICE9IHRoaXMuY3ViZVN0YXRlW2Jsb2NrX3Bvc1swXV0gKyB0aGlzLmN1YmVTdGF0ZVtzLmtbMF1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzBdO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMF0gKyBcIlVcIiArIHMua1swXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cF9sb2cgKz0gZXhwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgTGF5ZXIgQ3Jvc3MgU2luZ2xlIEVycm9yOiBcIiwgZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiBcIkZpcnN0IExheWVyIENyb3NzIFNpbmdsZSBFcnJvcjogXCIgKyBleHBfbG9nO1xuICAgIH1cbiAgICBGSVJTVF9MQVlFUl9DT1JORVJTX1NJTkdMRShibG9ja19wb3MsIGJsb2NrX2NvbG9yKSB7XG4gICAgICAgIGxldCBleHAgPSBcIlwiLCBleHBfbG9nID0gXCJcIiwgcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBzID0gdGhpcy5nZXRCbG9ja1BvcyhibG9ja19jb2xvcik7XG4gICAgICAgICAgICBpZiAocy5rLmluZGV4T2YoXCJkXCIpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudlswXSA9PSB0aGlzLmN1YmVTdGF0ZVtcImRcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuayA9PSBibG9ja19wb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwX2xvZztcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdICsgXCJVXCIgKyBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocy52WzFdID09IHRoaXMuY3ViZVN0YXRlW1wiZFwiXSlcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdICsgXCJ1XCIgKyBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1syXS50b1VwcGVyQ2FzZSgpICsgXCJVXCIgKyBzLmtbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocy5rID09IFwidVwiICsgYmxvY2tfcG9zWzFdICsgYmxvY2tfcG9zWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnZbMF0gPT0gdGhpcy5jdWJlU3RhdGVbXCJkXCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzJdLnRvVXBwZXJDYXNlKCkgKyBcInVcIiArIHMua1syXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy52WzFdID09IHRoaXMuY3ViZVN0YXRlW1wiZFwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1sxXSArIFwidVwiICsgcy5rWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1syXS50b1VwcGVyQ2FzZSgpICsgXCJVXCIgKyBzLmtbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gXCJVXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBfbG9nICs9IGV4cDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZXhwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IExheWVyIENvcm5lcnMgU2luZ2xlIEVycm9yOiBcIiwgZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiBcIkZpcnN0IExheWVyIENvcm5lcnMgU2luZ2xlIEVycm9yOiBcIiArIGV4cF9sb2c7XG4gICAgfVxuICAgIDtcbiAgICBTRUNPTkRfTEFZRVJfU0lOR0xFKCkge1xuICAgICAgICBjb25zdCBibG9ja19jb2xvciA9IHRoaXMuY3ViZVN0YXRlW1wiZlwiXSArIHRoaXMuY3ViZVN0YXRlW1wiclwiXTtcbiAgICAgICAgbGV0IGV4cCA9IFwiXCIsIGV4cF9sb2cgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuZ2V0QmxvY2tQb3MoYmxvY2tfY29sb3IpO1xuICAgICAgICAgICAgaWYgKHMuay5pbmRleE9mKFwidVwiKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChzLmtbMV0gPT0gJ3InICYmIHMudlsxXSA9PSB0aGlzLmN1YmVTdGF0ZVtcInJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gXCJ1ZlVGVVJ1clwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzLmtbMV0gPT0gJ2YnICYmIHMudlsxXSA9PSB0aGlzLmN1YmVTdGF0ZVtcImZcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gXCJVUnVydWZVRlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gXCJVXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudlswXSA9PSB0aGlzLmN1YmVTdGF0ZVtzLmtbMF1dICYmIHMudlsxXSA9PSB0aGlzLmN1YmVTdGF0ZVtzLmtbMV1dKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwX2xvZztcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGV4cCA9IFwidVwiICsgcy5rWzBdICsgXCJVXCIgKyBzLmtbMF0udG9VcHBlckNhc2UoKSArIFwiVVwiICsgcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyBcInVcIiArIHMua1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cF9sb2cgKz0gZXhwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2Vjb25kIExheWVyIFNpbmdsZSBFcnJvcjogXCIsIGV4cF9sb2cpO1xuICAgICAgICByZXR1cm4gXCJTZWNvbmQgTGF5ZXIgU2luZ2xlIEVycm9yOiBcIiArIGV4cF9sb2c7XG4gICAgfVxuICAgIEZJUlNUX0xBWUVSX0VER0VTKGRlbGF5ZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIEZJUlNUIExBWUVSIEVER0VTIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IG9yZGVyID0gXCJcIjtcbiAgICAgICAgaWYgKGRlbGF5ZWQgPT0gXCJ6MlwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG9yZGVyICs9IHRoaXMuRklSU1RfTEFZRVJfRURHRVNfU0lOR0xFKFwiZGZcIiwgdGhpcy5jdWJlU3RhdGVbXCJkXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJmXCJdKTtcbiAgICAgICAgICAgICAgICBvcmRlciArPSBcInlcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwieVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWxheWVkID09IFwieDJcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcmRlciArPSB0aGlzLkZJUlNUX0xBWUVSX0VER0VTX1NJTkdMRShcImRiXCIsIHRoaXMuY3ViZVN0YXRlW1wiZFwiXSArIHRoaXMuY3ViZVN0YXRlW1wiYlwiXSk7XG4gICAgICAgICAgICAgICAgb3JkZXIgKz0gXCJ5XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcInlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3Mob3JkZXIpO1xuICAgIH1cbiAgICA7XG4gICAgRklSU1RfTEFZRVJfQ09STkVSUyhkZWxheWVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tIENPTVBMRVRFIFRIRSBGSVJTVCBMQVlFUiBDT1JORVJTIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IG9yZGVyID0gXCJcIjtcbiAgICAgICAgaWYgKGRlbGF5ZWQgPT0gXCJ6MlwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG9yZGVyICs9IHRoaXMuRklSU1RfTEFZRVJfQ09STkVSU19TSU5HTEUoXCJkbGZcIiwgdGhpcy5jdWJlU3RhdGVbXCJkXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJsXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJmXCJdKTtcbiAgICAgICAgICAgICAgICBvcmRlciArPSBcInlcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwieVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWxheWVkID09IFwieDJcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcmRlciArPSB0aGlzLkZJUlNUX0xBWUVSX0NPUk5FUlNfU0lOR0xFKFwiZHJiXCIsIHRoaXMuY3ViZVN0YXRlW1wiZFwiXSArIHRoaXMuY3ViZVN0YXRlW1wiclwiXSArIHRoaXMuY3ViZVN0YXRlW1wiYlwiXSk7XG4gICAgICAgICAgICAgICAgb3JkZXIgKz0gXCJ5XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcInlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3Mob3JkZXIpO1xuICAgIH1cbiAgICBTRUNPTkRfTEFZRVIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tIENPTVBMRVRFIFRIRSBTRUNPTkQgTEFZRVIgLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBsZXQgb3JkZXIgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgb3JkZXIgKz0gdGhpcy5TRUNPTkRfTEFZRVJfU0lOR0xFKCk7XG4gICAgICAgICAgICBvcmRlciArPSBcIllcIjtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXCJZXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXByZXNzKG9yZGVyKTtcbiAgICB9XG4gICAgO1xuICAgIFRPUF9DUk9TUygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIFRPUCBDUk9TUyAtLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGxldCBleHAgPSBcIlwiLCBleHBfbG9nID0gXCJcIjtcbiAgICAgICAgbGV0IHVjID0gdGhpcy5jdWJlU3RhdGVbXCJ1XCJdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3ViZVN0YXRlLnVsWzBdID09IHVjICYmIHRoaXMuY3ViZVN0YXRlLnVyWzBdID09IHVjXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5jdWJlU3RhdGUudWZbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudWJbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3MoZXhwX2xvZyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdWJlU3RhdGUudWJbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudWxbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgZXhwID0gXCJydWZVRlJcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlLnVmWzBdID09IHVjICYmIHRoaXMuY3ViZVN0YXRlLnViWzBdID09IHVjKVxuICAgICAgICAgICAgICAgIGV4cCA9IFwicmZ1RlVSXCI7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZS51bFswXSA9PSB1YyAmJiB0aGlzLmN1YmVTdGF0ZS51clswXSA9PSB1YylcbiAgICAgICAgICAgICAgICBleHAgPSBcIllcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlLnVmWzBdID09IHVjICYmIHRoaXMuY3ViZVN0YXRlLnVyWzBdID09IHVjKVxuICAgICAgICAgICAgICAgIGV4cCA9IFwiWVlcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlLnVyWzBdID09IHVjICYmIHRoaXMuY3ViZVN0YXRlLnViWzBdID09IHVjKVxuICAgICAgICAgICAgICAgIGV4cCA9IFwiWVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWJlU3RhdGUudWxbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudWZbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgZXhwID0gXCJ5XCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZXhwID0gXCJydWZVRlJVcmZ1RlVSXCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IGV4cDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZXhwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlRvcCBDcm9zcyBFcnJvcjogXCIsIGV4cF9sb2cpO1xuICAgICAgICByZXR1cm4gXCJUb3AgQ3Jvc3MgRXJyb3I6IFwiICsgZXhwX2xvZztcbiAgICB9XG4gICAgO1xuICAgIFRISVJEX0xBWUVSX0NPUk5FUlNfUE9TKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLSBDT01QTEVURSBUSEUgVEhJUkQgTEFZRVIgQ09STkVSUyAoUE9TSVRJT04pIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IFwickxVbHVSVUx1bFwiLCBibG9ja3MgPSBbXCJ1bGZcIiwgXCJ1ZnJcIiwgXCJ1cmJcIiwgXCJ1YmxcIl0sIHVjID0gdGhpcy5jdWJlU3RhdGVbXCJ1XCJdO1xuICAgICAgICBsZXQgZXhwX2xvZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IGk7XG4gICAgICAgICAgICBsZXQgdGltZXMgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgaSArIDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBqICUgNDtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdGMgPSB0aGlzLmN1YmVTdGF0ZVtibG9ja3NbbGFzdF1dLnJlcGxhY2UodWMsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0YyA9IHRoaXMuY3ViZVN0YXRlW2Jsb2Nrc1tuZXh0XV0ucmVwbGFjZSh1YywgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV4dENvbG9yW2xhc3RjWzBdXSA9PSBsYXN0Y1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dGMuaW5kZXhPZihsYXN0Y1sxXSkgIT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG5leHRjLmluZGV4T2YodGhpcy5uZXh0Q29sb3JbbGFzdGNbMV1dKSAhPSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRjLmluZGV4T2YobGFzdGNbMF0pICE9IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBuZXh0Yy5pbmRleE9mKHRoaXMubmV4dENvbG9yW2xhc3RjWzBdXSkgIT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdCA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGxhc3QgPSAobGFzdCAtIDEgKyA0KSAlIDQ7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgZXhwX2xvZyA9IFwidVwiICsgc3RlcCwgdGhpcy5jaGFuZ2VTdGF0ZShleHBfbG9nKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsYXN0ID09IDEpXG4gICAgICAgICAgICAgICAgICAgIGV4cF9sb2cgPSBzdGVwLCB0aGlzLmNoYW5nZVN0YXRlKGV4cF9sb2cpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxhc3QgPT0gMilcbiAgICAgICAgICAgICAgICAgICAgZXhwX2xvZyA9IFwiVVwiICsgc3RlcCwgdGhpcy5jaGFuZ2VTdGF0ZShleHBfbG9nKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsYXN0ID09IDMpXG4gICAgICAgICAgICAgICAgICAgIGV4cF9sb2cgPSBcIlVVXCIgKyBzdGVwLCB0aGlzLmNoYW5nZVN0YXRlKGV4cF9sb2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXByZXNzKGV4cF9sb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGltZXMgPiAxKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXByZXNzKGV4cF9sb2cpO1xuICAgICAgICB9XG4gICAgICAgIGV4cF9sb2cgPSBzdGVwICsgXCJVXCIgKyBzdGVwO1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cF9sb2cpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhleHBfbG9nKTtcbiAgICB9XG4gICAgVEhJUkRfTEFZRVJfQ09STkVSU19PUkkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tIENPTVBMRVRFIFRIRSBUSElSRCBMQVlFUiBDT1JORVJTIChPUklFTlQpIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgY29uc3Qgc3RlcDEgPSBcInJ1UnVydXVSdXVcIiwgc3RlcDIgPSBcIkZVZlVGVVVmVVVcIjtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gW1widWxmXCIsIFwidWZyXCIsIFwidXJiXCIsIFwidWJsXCJdLCB1YyA9IHRoaXMuY3ViZVN0YXRlW1widVwiXTtcbiAgICAgICAgbGV0IGV4cF9sb2cgPSBcIlwiLCBzID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBibG9ja3MpXG4gICAgICAgICAgICBzICs9IHRoaXMuY3ViZVN0YXRlW2Jsb2NrXS5pbmRleE9mKHVjKTtcbiAgICAgICAgaWYgKHMubWF0Y2goLzIyMjB8MDIyMnwyMDIyfDIyMDIvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIwMjIyXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIyMDIyXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMjIwMlwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJ1XCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goLzExMTB8MDExMXwxMDExfDExMDEvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIwMTExXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIxMDExXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMTEwMVwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJ1XCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goLzIwMDF8MTIwMHwwMTIwfDAwMTIvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIxMjAwXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIwMTIwXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMDAxMlwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJ1XCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAxICsgXCJVXCIgKyBzdGVwMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC8xMDAyfDIxMDB8MDIxMHwwMDIxLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMjEwMFwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMDIxMFwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjAwMjFcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwidVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMiArIFwiVVwiICsgc3RlcDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvMjEyMXwxMjEyLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMTIxMlwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAyICsgXCJVVVwiICsgc3RlcDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvMjExMnwyMjExfDEyMjF8MTEyMi8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjIyMTFcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjEyMjFcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIxMTIyXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcInVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDEgKyBcIlVcIiArIHN0ZXAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goLzAyMDF8MTAyMC8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjEwMjBcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMSArIFwiVVVcIiArIHN0ZXAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goLzAxMDJ8MjAxMC8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjIwMTBcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMiArIFwiVVVcIiArIHN0ZXAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXByZXNzKGV4cF9sb2cpO1xuICAgIH1cbiAgICBUSElSRF9MQVlFUl9FREdFUygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIFRISVJEIExBWUVSIEVER0VTIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgY29uc3Qgc3RlcDEgPSBcInJ1UnVydXVSdXVcIiwgc3RlcDIgPSBcIkZVZlVGVVVmVVVcIjtcbiAgICAgICAgbGV0IGV4cF9sb2cgPSBcIlwiO1xuICAgICAgICB3aGlsZSAodGhpcy5jdWJlU3RhdGUudWxmWzJdICE9IHRoaXMuY3ViZVN0YXRlLmYpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXCJVXCIpO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGV4cCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5jdWJlU3RhdGUudWZbMV0gKyB0aGlzLmN1YmVTdGF0ZS51clsxXSArIHRoaXMuY3ViZVN0YXRlLnViWzFdICsgdGhpcy5jdWJlU3RhdGUudWxbMV07XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jdWJlU3RhdGUuZiArIHRoaXMuY3ViZVN0YXRlLnIgKyB0aGlzLmN1YmVTdGF0ZS5iICsgdGhpcy5jdWJlU3RhdGUubDtcbiAgICAgICAgICAgIGxldCB0aW1lcyA9IDAsIHBvcyA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc1tqXSA9PSBjW2pdKVxuICAgICAgICAgICAgICAgICAgICB0aW1lcysrLCBwb3MgPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVzID4gMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhleHBfbG9nKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zID09IDEpXG4gICAgICAgICAgICAgICAgICAgIGV4cCArPSBcIllcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MgPT0gMilcbiAgICAgICAgICAgICAgICAgICAgZXhwICs9IFwiWVlcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MgPT0gMylcbiAgICAgICAgICAgICAgICAgICAgZXhwICs9IFwieVwiO1xuICAgICAgICAgICAgICAgIGlmIChzWyhwb3MgKyAxKSAlIDRdID09IHRoaXMubmV4dENvbG9yW3RoaXMubmV4dENvbG9yW3NbcG9zXV1dKVxuICAgICAgICAgICAgICAgICAgICBleHAgKz0gc3RlcDEgKyBzdGVwMjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGV4cCArPSBcInlcIiArIHN0ZXAyICsgc3RlcDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZXhwICs9IHN0ZXAxICsgc3RlcDI7XG4gICAgICAgICAgICBleHBfbG9nICs9IGV4cDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZXhwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXJkIExheWVyIEVkZ2VzIEVycm9yOiBcIiwgZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiBcIlRoaXJkIExheWVyIEVkZ2VzIEVycm9yOiBcIiArIGV4cF9sb2c7XG4gICAgfVxuICAgIHNvbHZlQ3ViZShkZWxheWVkKSB7XG4gICAgICAgIGxldCBzdGVwcyA9IFtdO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuRklSU1RfTEFZRVJfRURHRVMoZGVsYXllZCkpO1xuICAgICAgICBzdGVwcy5wdXNoKFwiflwiKTtcbiAgICAgICAgc3RlcHMucHVzaCh0aGlzLkZJUlNUX0xBWUVSX0NPUk5FUlMoZGVsYXllZCkpO1xuICAgICAgICBzdGVwcy5wdXNoKFwiflwiKTtcbiAgICAgICAgc3RlcHMucHVzaCh0aGlzLlNFQ09ORF9MQVlFUigpKTtcbiAgICAgICAgc3RlcHMucHVzaChcIn5cIik7XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5UT1BfQ1JPU1MoKSk7XG4gICAgICAgIHN0ZXBzLnB1c2goXCJ+XCIpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuVEhJUkRfTEFZRVJfQ09STkVSU19QT1MoKSk7XG4gICAgICAgIHN0ZXBzLnB1c2goXCJ+XCIpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuVEhJUkRfTEFZRVJfQ09STkVSU19PUkkoKSk7XG4gICAgICAgIHN0ZXBzLnB1c2goXCJ+XCIpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuVEhJUkRfTEFZRVJfRURHRVMoKSk7XG4gICAgICAgIHJldHVybiBzdGVwcztcbiAgICB9XG4gICAgO1xuICAgIGNvbXByZXNzKG9yZGVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC91VXxVdXxkRHxEZHxsTHxMbHxmRnxGZnxyUnxScnxiQnxCYnx5WXxZeXx1dXV1fGRkZGR8bGxsbHxmZmZmfHJycnJ8YmJiYnx5eXl5fFVVVVV8RERERHxMTExMfEZGRkZ8UlJSUnxCQkJCfFlZWVkvZywgXCJcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL3V1dS9nLCBcIlVcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL2RkZC9nLCBcIkRcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL2xsbC9nLCBcIkxcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL2ZmZi9nLCBcIkZcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL3Jyci9nLCBcIlJcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL2JiYi9nLCBcIkJcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL3l5eS9nLCBcIllcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL1VVVS9nLCBcInVcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL0RERC9nLCBcImRcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL0xMTC9nLCBcImxcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL0ZGRi9nLCBcImZcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL1JSUi9nLCBcInJcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL0JCQi9nLCBcImJcIik7XG4gICAgICAgICAgICBvcmRlciA9IG9yZGVyLnJlcGxhY2UoL1lZWS9nLCBcInlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yZGVyO1xuICAgIH1cbiAgICBzb2x2ZShzdGF0ZSwgZGVsYXllZCkge1xuICAgICAgICB0aGlzLmdldEN1YmVTdGF0ZShzdGF0ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNvbHZlQ3ViZShkZWxheWVkKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVHdpc3Qge1xuICAgIGNvbnN0cnVjdG9yKGRlcGF0dXJlLCBhcnJpdmFsLCBkdXJhdGlvbiwgY2FsbGJhY2tfZnVuYykge1xuICAgICAgICB0aGlzLmRlcGFydHVyZSA9IGRlcGF0dXJlO1xuICAgICAgICB0aGlzLmFycml2YWwgPSBhcnJpdmFsO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuY2FsbGJhY2tfZnVuYyA9IGNhbGxiYWNrX2Z1bmM7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgZmluaXNoKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmFycml2YWw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBmcmFjID0gTWF0aC5taW4oTWF0aC5tYXgoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydCkgLyB0aGlzLmR1cmF0aW9uLCAwKSwgMSk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGZyYWMgPT0gMSA/IHRoaXMuYXJyaXZhbCA6ICh0aGlzLmRlcGFydHVyZSArICh0aGlzLmFycml2YWwgLSB0aGlzLmRlcGFydHVyZSkgKiAoMSAtICgxIC0gZnJhYykgKiAoMSAtIGZyYWMpKSk7XG4gICAgfVxuICAgIGNhbGxiYWNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxsYmFja19mdW5jKHRoaXMuY3VycmVudCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFR3aXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR3aXN0cyA9IFtdO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG4gICAgbG9vcCgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgY3VyID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMudHdpc3RzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGN1ciA8IGVuZCkge1xuICAgICAgICAgICAgdGhpcy50d2lzdHNbY3VyXS51cGRhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnR3aXN0c1tjdXJdLmNhbGxiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR3aXN0cy5zcGxpY2UoY3VyLCAxKTtcbiAgICAgICAgICAgICAgICBlbmQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmlzaCh0d2lzdCA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHdpc3QpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50d2lzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50d2lzdHNbaV0gPT0gdHdpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdHdpc3QuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdpc3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdHdpc3RzID0gdGhpcy50d2lzdHMuc3BsaWNlKDApO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0d2lzdCBvZiB0d2lzdHMpIHtcbiAgICAgICAgICAgICAgICB0d2lzdC5maW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYW5jZWwodHdpc3QpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR3aXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudHdpc3RzW2ldID09IHR3aXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50d2lzdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlzVHdpc3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR3aXN0cy5sZW5ndGggIT0gMDtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgdHdpc3RlciA9IG5ldyBUd2lzdGVyKCk7XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEZhY2UsIEZyYW1lLCBTdGlja2VyIH0gZnJvbSBcIi4vdXRpbHNfaW50ZXJuYWxcIjtcbmV4cG9ydCBjb25zdCBjdWJlX2NvbmZpZyA9IHtcbiAgICBzcGVlZDogMyxcbiAgICBzZW5zaWJpbGl0eTogMjUsXG4gICAgc2NyYW1ibGVfc3RlcHM6IDIwLFxuICAgIHNvbHZlcklkOiAxLFxufTtcbmV4cG9ydCBjb25zdCB0d2lzdF9kdXJhdGlvbiA9IChzcGVlZCkgPT4ge1xuICAgIHJldHVybiAzNjAwIC8gKDMgKyBzcGVlZCk7XG59O1xuZXhwb3J0IGNvbnN0IGN1YmVsZXRfY29sb3JzID0ge1xuICAgIFI6IFwiI0I3MUMxQ1wiLFxuICAgIEw6IFwiI0ZGNkQwMFwiLFxuICAgIFU6IFwiI0YwRjBGMFwiLFxuICAgIEQ6IFwiI0ZGRDYwMFwiLFxuICAgIEY6IFwiIzAwQTAyMFwiLFxuICAgIEI6IFwiIzBENDdBMVwiLFxuICAgIGNvcmU6IFwiIzIwMjAyMFwiLFxuICAgIGdyYXk6IFwiIzgwODA4MFwiLFxuICAgIGhpZ2g6IFwiI0ZGMDA4MFwiLFxufTtcbmV4cG9ydCBjb25zdCBjdWJlbGV0X2RlZnMgPSB7XG4gICAgc2l6ZTogNjQsXG4gICAgX2JvcmRlcl93aWR0aDogMyxcbiAgICBfZWRnZV93aWR0aDogMixcbiAgICBfc3RpY2tlcl9kZXB0aDogMC4xLFxufTtcbmV4cG9ydCBjb25zdCBjdWJlbGV0X2ZyYW1lID0gbmV3IEZyYW1lKGN1YmVsZXRfZGVmcy5zaXplLCBjdWJlbGV0X2RlZnMuX2JvcmRlcl93aWR0aCk7XG5leHBvcnQgY29uc3QgY3ViZWxldF9sYW1iZXJzID0gKCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjdWJlbGV0X2NvbG9ycykge1xuICAgICAgICByZXN1bHRba2V5XSA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IGN1YmVsZXRfY29sb3JzW2tleV0gfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59KSgpO1xuZXhwb3J0IGNvbnN0IGN1YmVsZXRfY29yZSA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgY29sb3I6IGN1YmVsZXRfY29sb3JzLmNvcmUsXG4gICAgc3BlY3VsYXI6IGN1YmVsZXRfY29sb3JzLmdyYXksXG4gICAgc2hpbmluZXNzOiAyLFxufSk7XG5leHBvcnQgY29uc3QgY3ViZWxldF9zdGlja2VyID0gbmV3IFN0aWNrZXIoY3ViZWxldF9kZWZzLnNpemUgLSAyICogY3ViZWxldF9kZWZzLl9ib3JkZXJfd2lkdGggLSBjdWJlbGV0X2RlZnMuX2VkZ2Vfd2lkdGgsIGN1YmVsZXRfZGVmcy5fc3RpY2tlcl9kZXB0aCk7XG5leHBvcnQgY29uc3QgY3ViZWxldF9mYWNlX2F0dHJzID0gW1xuICAgIHtcbiAgICAgICAgbWF0Y2g6ICh2ZWN0b3IpID0+IHsgcmV0dXJuIHZlY3Rvci54ID09IC0xOyB9LFxuICAgICAgICBsYW1iZXJ0OiBjdWJlbGV0X2xhbWJlcnMuTCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKC1jdWJlbGV0X2RlZnMuc2l6ZSAvIDIsIDAsIDApLFxuICAgICAgICByb3RhdGlvbjogbmV3IFZlY3RvcjMoMCwgLU1hdGguUEkgLyAyLCAwKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICh2ZWN0b3IpID0+IHsgcmV0dXJuIHZlY3Rvci54ID09IDE7IH0sXG4gICAgICAgIGxhbWJlcnQ6IGN1YmVsZXRfbGFtYmVycy5SLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoY3ViZWxldF9kZWZzLnNpemUgLyAyLCAwLCAwKSxcbiAgICAgICAgcm90YXRpb246IG5ldyBWZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAwKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICh2ZWN0b3IpID0+IHsgcmV0dXJuIHZlY3Rvci55ID09IC0xOyB9LFxuICAgICAgICBsYW1iZXJ0OiBjdWJlbGV0X2xhbWJlcnMuRCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIC1jdWJlbGV0X2RlZnMuc2l6ZSAvIDIsIDApLFxuICAgICAgICByb3RhdGlvbjogbmV3IFZlY3RvcjMoTWF0aC5QSSAvIDIsIDAsIDApLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogKHZlY3RvcikgPT4geyByZXR1cm4gdmVjdG9yLnkgPT0gMTsgfSxcbiAgICAgICAgbGFtYmVydDogY3ViZWxldF9sYW1iZXJzLlUsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCBjdWJlbGV0X2RlZnMuc2l6ZSAvIDIsIDApLFxuICAgICAgICByb3RhdGlvbjogbmV3IFZlY3RvcjMoLU1hdGguUEkgLyAyLCAwLCAwKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICh2ZWN0b3IpID0+IHsgcmV0dXJuIHZlY3Rvci56ID09IC0xOyB9LFxuICAgICAgICBsYW1iZXJ0OiBjdWJlbGV0X2xhbWJlcnMuQixcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIC1jdWJlbGV0X2RlZnMuc2l6ZSAvIDIpLFxuICAgICAgICByb3RhdGlvbjogbmV3IFZlY3RvcjMoTWF0aC5QSSwgMCwgMCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAodmVjdG9yKSA9PiB7IHJldHVybiB2ZWN0b3IueiA9PSAxOyB9LFxuICAgICAgICBsYW1iZXJ0OiBjdWJlbGV0X2xhbWJlcnMuRixcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIGN1YmVsZXRfZGVmcy5zaXplIC8gMiksXG4gICAgICAgIHJvdGF0aW9uOiBuZXcgVmVjdG9yMygyICogTWF0aC5QSSwgMCwgMCksXG4gICAgfSxcbl07XG5leHBvcnQgY29uc3QgY3ViZV9zaXplID0gY3ViZWxldF9kZWZzLnNpemUgKiAzO1xuZXhwb3J0IGNvbnN0IGF4aXNfdmVjdG9ycyA9IHtcbiAgICBhOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSxcbiAgICB4OiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgeTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApLFxuICAgIHo6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKSxcbn07XG5leHBvcnQgY29uc3QgYXhpc19wbGFuZXMgPSB7XG4gICAgeDogbmV3IFRIUkVFLlBsYW5lKG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLCAtY3ViZV9zaXplIC8gMiksXG4gICAgeTogbmV3IFRIUkVFLlBsYW5lKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCAtY3ViZV9zaXplIC8gMiksXG4gICAgejogbmV3IFRIUkVFLlBsYW5lKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpLCAtY3ViZV9zaXplIC8gMilcbn07XG5leHBvcnQgY29uc3QgaW5kZXhUb0RpcmVjdGlvbiA9IChpbmRleCkgPT4ge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMyhpbmRleCAlIDMgLSAxLCBNYXRoLmZsb29yKGluZGV4IC8gMykgJSAzIC0gMSwgTWF0aC5mbG9vcihpbmRleCAvIDkpIC0gMSk7XG59O1xuZXhwb3J0IGNvbnN0IGRpcmVjdGlvblRvSW5kZXggPSAoZHJjdG4pID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoZHJjdG4ueCArIDEpICsgKGRyY3RuLnkgKyAxKSAqIDMgKyAoZHJjdG4ueiArIDEpICogOSk7XG59O1xuZXhwb3J0IGNvbnN0IGluZGV4VG9MYXllciA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHsgeDogaW5kZXggJSAzLCB5OiBNYXRoLmZsb29yKGluZGV4IC8gMykgJSAzLCB6OiBNYXRoLmZsb29yKGluZGV4IC8gOSkgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBjb25zdCB3b3JsZFRvSW5kZXggPSAocG9pbnQpID0+IHtcbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpLmNvcHkocG9pbnQpO1xuICAgIHZlY3Rvci5hZGQobmV3IFZlY3RvcjMoKS5zZXRTY2FsYXIoY3ViZV9zaXplIC8gMikpO1xuICAgIHZlY3Rvci5kaXZpZGVTY2FsYXIoY3ViZV9zaXplKS5tdWx0aXBseVNjYWxhcigzKS5mbG9vcigpO1xuICAgIHZlY3Rvci5tYXgobmV3IFZlY3RvcjMoKS5zZXRTY2FsYXIoMCkpO1xuICAgIHZlY3Rvci5taW4obmV3IFZlY3RvcjMoKS5zZXRTY2FsYXIoMikpO1xuICAgIHJldHVybiB2ZWN0b3IueCArIHZlY3Rvci55ICogMyArIHZlY3Rvci56ICogOTtcbn07XG5leHBvcnQgY29uc3QgZmFjZVBvc3Rpb25CaW5kaW5ncyA9IFtcbiAgICB7XG4gICAgICAgIGZhY2U6IEZhY2UuTCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKVxuICAgIH0sXG4gICAge1xuICAgICAgICBmYWNlOiBGYWNlLlIsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKVxuICAgIH0sXG4gICAge1xuICAgICAgICBmYWNlOiBGYWNlLkQsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmFjZTogRmFjZS5VLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmFjZTogRmFjZS5CLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgLTEpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZhY2U6IEZhY2UuRixcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpXG4gICAgfSxcbl07XG5leHBvcnQgY29uc3Qgc3RyaW5nVG9Ud2lzdFBhcmFtcyA9IHtcbiAgICBcIkxcIjogeyBheGlzOiAneCcsIGxheWVyczogWzBdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJMJ1wiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiTDJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzBdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcIlJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzJdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIlInXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsyXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiUjJcIjogeyBheGlzOiAneCcsIGxheWVyczogWzJdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwiRlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiRidcIjogeyBheGlzOiAneicsIGxheWVyczogWzJdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJGMlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJCXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiQidcIjogeyBheGlzOiAneicsIGxheWVyczogWzBdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIkIyXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJVXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsyXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJVJ1wiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIlUyXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsyXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcIkRcIjogeyBheGlzOiAneScsIGxheWVyczogWzBdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJEJ1wiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiRDJcIjogeyBheGlzOiAneScsIGxheWVyczogWzBdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcIn5cIjogeyBheGlzOiAnYScsIGxheWVyczogW10sIGFuZ2xlOiAwIH0sXG4gICAgXCJ4XCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJ4J1wiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIngyXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcInlcIjogeyBheGlzOiAneScsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcInknXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwieTJcIjogeyBheGlzOiAneScsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwielwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwieidcIjogeyBheGlzOiAneicsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJ6MlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJsXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwibCdcIjogeyBheGlzOiAneCcsIGxheWVyczogWzAsIDFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcImwyXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJyXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJyJ1wiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcInIyXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcImZcIjogeyBheGlzOiAneicsIGxheWVyczogWzIsIDFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcImYnXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiZjJcIjogeyBheGlzOiAneicsIGxheWVyczogWzIsIDFdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwiYlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcImInXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJiMlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwidVwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwidSdcIjogeyBheGlzOiAneScsIGxheWVyczogWzIsIDFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJ1MlwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJkXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiZCdcIjogeyBheGlzOiAneScsIGxheWVyczogWzAsIDFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcImQyXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJFXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiRSdcIjogeyBheGlzOiAneScsIGxheWVyczogWzFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIkUyXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsxXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJNXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiTSdcIjogeyBheGlzOiAneCcsIGxheWVyczogWzFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIk0yXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsxXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJTXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJTJ1wiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIlMyXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsxXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcIlwiOiB7IGF4aXM6ICdhJywgbGF5ZXJzOiBbXSwgYW5nbGU6IDAgfSxcbn07XG5leHBvcnQgY29uc3QgbGJsT3JkZXJNYXBwaW5nID0ge1xuICAgIFwiVVwiOiBcIlVcIixcbiAgICBcInVcIjogXCJVJ1wiLFxuICAgIFwiRFwiOiBcIkRcIixcbiAgICBcImRcIjogXCJEJ1wiLFxuICAgIFwiRlwiOiBcIkZcIixcbiAgICBcImZcIjogXCJGJ1wiLFxuICAgIFwiTFwiOiBcIkxcIixcbiAgICBcImxcIjogXCJMJ1wiLFxuICAgIFwiUlwiOiBcIlJcIixcbiAgICBcInJcIjogXCJSJ1wiLFxuICAgIFwiQlwiOiBcIkJcIixcbiAgICBcImJcIjogXCJCJ1wiLFxuICAgIFwiWVwiOiBcInlcIixcbiAgICBcInlcIjogXCJ5J1wiLFxuICAgIFwiflwiOiBcIn5cIlxufTtcbmV4cG9ydCBjb25zdCBmYWNlVG9Db2xvciA9IHtcbiAgICBcIlVcIjogXCJ3XCIsXG4gICAgXCJGXCI6IFwiZ1wiLFxuICAgIFwiUlwiOiBcInJcIixcbiAgICBcIkJcIjogXCJiXCIsXG4gICAgXCJEXCI6IFwieVwiLFxuICAgIFwiTFwiOiBcIm9cIlxufTtcbmV4cG9ydCBjb25zdCB3aGl0ZVRvQm90dG9tID0gKHN0YXRlKSA9PiB7XG4gICAgc3dpdGNoICgnVScpIHtcbiAgICAgICAgY2FzZSBzdGF0ZVs0XTpcbiAgICAgICAgICAgIHJldHVybiBcIngyXCI7XG4gICAgICAgIGNhc2Ugc3RhdGVbMTNdOlxuICAgICAgICAgICAgcmV0dXJuIFwielwiO1xuICAgICAgICBjYXNlIHN0YXRlWzIyXTpcbiAgICAgICAgICAgIHJldHVybiBcIngnXCI7XG4gICAgICAgIGNhc2Ugc3RhdGVbNDBdOlxuICAgICAgICAgICAgcmV0dXJuIFwieidcIjtcbiAgICAgICAgY2FzZSBzdGF0ZVs0OV06XG4gICAgICAgICAgICByZXR1cm4gXCJ4XCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IG9wcG9zaXRlTWFwcGluZyA9IHtcbiAgICBcIlVcIjogXCJEXCIsXG4gICAgXCJEXCI6IFwiVVwiLFxuICAgIFwiUlwiOiBcIkxcIixcbiAgICBcIkxcIjogXCJSXCIsXG4gICAgXCJGXCI6IFwiQlwiLFxuICAgIFwiQlwiOiBcIkZcIixcbiAgICBcInlcIjogXCJ5J1wiLFxuICAgIFwieSdcIjogXCJ5XCIsXG4gICAgXCJ+XCI6IFwiflwiXG59O1xuZXhwb3J0IGNvbnN0IGRlbGF5ZWRZZWxsb3dUb1RvcCA9IChsYXN0KSA9PiB7XG4gICAgc3dpdGNoIChsYXN0KSB7XG4gICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkOiBcIngnXCIsXG4gICAgICAgICAgICAgICAgZGVsYXllZDogXCJ4MlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwieCdcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tYmluZWQ6IFwieFwiLFxuICAgICAgICAgICAgICAgIGRlbGF5ZWQ6IFwieDJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIngyXCI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlbGF5ZWQ6IFwieDJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tYmluZWQ6IFwieidcIixcbiAgICAgICAgICAgICAgICBkZWxheWVkOiBcInoyXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJ6J1wiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21iaW5lZDogXCJ6XCIsXG4gICAgICAgICAgICAgICAgZGVsYXllZDogXCJ6MlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb21iaW5lZDogXCJ4MlwiLFxuICAgICAgICAgICAgICAgIGRlbGF5ZWQ6IFwieDJcIlxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5leHBvcnQgdmFyIEZhY2U7XG4oZnVuY3Rpb24gKEZhY2UpIHtcbiAgICBGYWNlW0ZhY2VbXCJMXCJdID0gMF0gPSBcIkxcIjtcbiAgICBGYWNlW0ZhY2VbXCJSXCJdID0gMV0gPSBcIlJcIjtcbiAgICBGYWNlW0ZhY2VbXCJEXCJdID0gMl0gPSBcIkRcIjtcbiAgICBGYWNlW0ZhY2VbXCJVXCJdID0gM10gPSBcIlVcIjtcbiAgICBGYWNlW0ZhY2VbXCJCXCJdID0gNF0gPSBcIkJcIjtcbiAgICBGYWNlW0ZhY2VbXCJGXCJdID0gNV0gPSBcIkZcIjtcbn0pKEZhY2UgfHwgKEZhY2UgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IEZhY2UxID0gWzQsIDEsIDMsIDAsIDUsIDJdO1xuZXhwb3J0IGNsYXNzIEZyYW1lIGV4dGVuZHMgVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGJvcmRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBvID0gc2l6ZSAvIDI7XG4gICAgICAgIGNvbnN0IGkgPSBvIC0gYm9yZGVyO1xuICAgICAgICBjb25zdCBfdmVydHMgPSBbXG4gICAgICAgICAgICAtaSwgK2ksICtvLFxuICAgICAgICAgICAgK2ksICtpLCArbyxcbiAgICAgICAgICAgICtpLCAtaSwgK28sXG4gICAgICAgICAgICAtaSwgLWksICtvLFxuICAgICAgICAgICAgLWksICtvLCAtaSxcbiAgICAgICAgICAgICtpLCArbywgLWksXG4gICAgICAgICAgICAraSwgK28sICtpLFxuICAgICAgICAgICAgLWksICtvLCAraSxcbiAgICAgICAgICAgIC1vLCAtaSwgLWksXG4gICAgICAgICAgICAtbywgK2ksIC1pLFxuICAgICAgICAgICAgLW8sICtpLCAraSxcbiAgICAgICAgICAgIC1vLCAtaSwgK2ksXG4gICAgICAgICAgICAraSwgK2ksIC1vLFxuICAgICAgICAgICAgLWksICtpLCAtbyxcbiAgICAgICAgICAgIC1pLCAtaSwgLW8sXG4gICAgICAgICAgICAraSwgLWksIC1vLFxuICAgICAgICAgICAgLWksIC1vLCAraSxcbiAgICAgICAgICAgICtpLCAtbywgK2ksXG4gICAgICAgICAgICAraSwgLW8sIC1pLFxuICAgICAgICAgICAgLWksIC1vLCAtaSxcbiAgICAgICAgICAgICtvLCAraSwgK2ksXG4gICAgICAgICAgICArbywgK2ksIC1pLFxuICAgICAgICAgICAgK28sIC1pLCAtaSxcbiAgICAgICAgICAgICtvLCAtaSwgK2ksXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoX3ZlcnRzLCAzKSk7XG4gICAgICAgIHRoaXMuc2V0SW5kZXgoRnJhbWUuX2luZGljZXMpO1xuICAgICAgICB0aGlzLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgfVxufVxuRnJhbWUuX2luZGljZXMgPSBbXG4gICAgMCwgMiwgMSxcbiAgICAwLCAzLCAyLFxuICAgIDQsIDYsIDUsXG4gICAgNCwgNywgNixcbiAgICA4LCAxMCwgOSxcbiAgICA4LCAxMSwgMTAsXG4gICAgMTIsIDE0LCAxMyxcbiAgICAxMiwgMTUsIDE0LFxuICAgIDE2LCAxOCwgMTcsXG4gICAgMTYsIDE5LCAxOCxcbiAgICAyMCwgMjIsIDIxLFxuICAgIDIwLCAyMywgMjIsXG4gICAgMSwgNiwgNyxcbiAgICAwLCAxLCA3LFxuICAgIDMsIDAsIDEwLFxuICAgIDExLCAzLCAxMCxcbiAgICAxNywgMiwgMyxcbiAgICAxNiwgMTcsIDMsXG4gICAgMjMsIDIwLCAxLFxuICAgIDIsIDIzLCAxLFxuICAgIDUsIDEyLCAxMyxcbiAgICA0LCA1LCAxMyxcbiAgICA5LCAxMywgMTQsXG4gICAgOCwgOSwgMTQsXG4gICAgMjIsIDE1LCAxMixcbiAgICAyMSwgMjIsIDEyLFxuICAgIDE5LCAxNCwgMTUsXG4gICAgMTgsIDE5LCAxNSxcbiAgICA3LCA0LCA5LFxuICAgIDEwLCA3LCA5LFxuICAgIDExLCA4LCAxOSxcbiAgICAxNiwgMTEsIDE5LFxuICAgIDIzLCAxNywgMTgsXG4gICAgMjIsIDIzLCAxOCxcbiAgICAyMCwgMjEsIDUsXG4gICAgNiwgMjAsIDUsXG4gICAgMjAsIDYsIDEsXG4gICAgMTAsIDAsIDcsXG4gICAgMjEsIDEyLCA1LFxuICAgIDEzLCA5LCA0LFxuICAgIDIzLCAyLCAxNyxcbiAgICAxMSwgMTYsIDMsXG4gICAgMjIsIDE4LCAxNSxcbiAgICA4LCAxNCwgMTksXG5dO1xuZXhwb3J0IGNsYXNzIFN0aWNrZXIgZXh0ZW5kcyBUSFJFRS5FeHRydWRlR2VvbWV0cnkge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGRlcHRoKSB7XG4gICAgICAgIHNpemUgPSBzaXplIC8gMjtcbiAgICAgICAgY29uc3QgbGVmdCA9IC1zaXplO1xuICAgICAgICBjb25zdCBib3R0b20gPSBzaXplO1xuICAgICAgICBjb25zdCB0b3AgPSAtc2l6ZTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzaXplO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBzaXplIC8gNDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgICAgc2hhcGUubW92ZVRvKGxlZnQsIHRvcCArIHJhZGl1cyk7XG4gICAgICAgIHNoYXBlLmxpbmVUbyhsZWZ0LCBib3R0b20gLSByYWRpdXMpO1xuICAgICAgICBzaGFwZS5xdWFkcmF0aWNDdXJ2ZVRvKGxlZnQsIGJvdHRvbSwgbGVmdCArIHJhZGl1cywgYm90dG9tKTtcbiAgICAgICAgc2hhcGUubGluZVRvKHJpZ2h0IC0gcmFkaXVzLCBib3R0b20pO1xuICAgICAgICBzaGFwZS5xdWFkcmF0aWNDdXJ2ZVRvKHJpZ2h0LCBib3R0b20sIHJpZ2h0LCBib3R0b20gLSByYWRpdXMpO1xuICAgICAgICBzaGFwZS5saW5lVG8ocmlnaHQsIHRvcCArIHJhZGl1cyk7XG4gICAgICAgIHNoYXBlLnF1YWRyYXRpY0N1cnZlVG8ocmlnaHQsIHRvcCwgcmlnaHQgLSByYWRpdXMsIHRvcCk7XG4gICAgICAgIHNoYXBlLmxpbmVUbyhsZWZ0ICsgcmFkaXVzLCB0b3ApO1xuICAgICAgICBzaGFwZS5xdWFkcmF0aWNDdXJ2ZVRvKGxlZnQsIHRvcCwgbGVmdCwgdG9wICsgcmFkaXVzKTtcbiAgICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICAgIHN1cGVyKHNoYXBlLCB7IGJldmVsRW5hYmxlZDogZmFsc2UsIGRlcHRoOiBkZXB0aCB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBDdWJlIGZyb20gXCIuL2N1YmVcIjtcbmltcG9ydCB7IGN1YmVsZXRfZGVmcyB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUucm90YXRpb24ueCA9IE1hdGguUEkgLyA2O1xuICAgICAgICB0aGlzLnNjZW5lLnJvdGF0aW9uLnkgPSAtTWF0aC5QSSAvIDQgKyBNYXRoLlBJIC8gMTY7XG4gICAgICAgIHRoaXMuYW1iaWVudCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuOSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWwgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC4xKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25hbC5wb3NpdGlvbi5zZXQoY3ViZWxldF9kZWZzLnNpemUsIGN1YmVsZXRfZGVmcy5zaXplICogMywgY3ViZWxldF9kZWZzLnNpemUgKiAyKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5hbWJpZW50KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5kaXJlY3Rpb25hbCk7XG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlTWF0cml4KCk7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmN1YmUgPSBuZXcgQ3ViZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmN1YmUpO1xuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMucGVyc3BlY3RpdmUgPSA5O1xuICAgIH1cbiAgICBzZXQgZGlydHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jdWJlLmRpcnR5ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkaXJ0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ViZS5kaXJ0eTtcbiAgICB9XG4gICAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy51cGRhdGVDYW1lcmEoKTtcbiAgICB9XG4gICAgdXBkYXRlQ2FtZXJhKCkge1xuICAgICAgICBjb25zdCBtaW4gPSB0aGlzLmhlaWdodCAvIE1hdGgubWluKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSAvIHRoaXMuc2NhbGUgLyB0aGlzLnBlcnNwZWN0aXZlO1xuICAgICAgICBjb25zdCBmb3YgPSAoMiAqIE1hdGguYXRhbihtaW4pICogMTgwKSAvIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY3ViZWxldF9kZWZzLnNpemUgKiAzICogdGhpcy5wZXJzcGVjdGl2ZSAqIDAuOTtcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3Y7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSBkaXN0YW5jZTtcbiAgICAgICAgdGhpcy5jYW1lcmEubmVhciA9IGRpc3RhbmNlIC0gY3ViZWxldF9kZWZzLnNpemUgKiAzO1xuICAgICAgICB0aGlzLmNhbWVyYS5mYXIgPSBkaXN0YW5jZSArIGN1YmVsZXRfZGVmcy5zaXplICogODtcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKDAsIDAsIDMwKSk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBWdWV0aWZ5IGZyb20gXCJ2dWV0aWZ5XCI7XG5pbXBvcnQgXCJ2dWV0aWZ5L2Rpc3QvdnVldGlmeS5taW4uY3NzXCI7XG5pbXBvcnQgXCJtYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzXCI7XG5pbXBvcnQgUGxheWdyb3VuZCBmcm9tIFwiLi92dWVhcHAvcGxheWdyb3VuZFwiO1xuVnVlLnVzZShWdWV0aWZ5KTtcbmNvbnN0IG9wdHMgPSB7fTtcbmNvbnN0IHZ1ZXRpZnkgPSBuZXcgVnVldGlmeShvcHRzKTtcblZ1ZS5wcm90b3R5cGUudnVldGlmeSA9IHZ1ZXRpZnk7XG5sZXQgYXBwID0gUGxheWdyb3VuZDtcbmNvbnN0IHZtID0gbmV3IFZ1ZSh7XG4gICAgdnVldGlmeSxcbiAgICBlbDogXCIjYXBwXCIsXG4gICAgcmVuZGVyOiAoaCkgPT4gaChhcHApLFxufSk7XG4iLCJpbXBvcnQgQ3ViaWVDdWJlIGZyb20gXCIuL0N1YmllQ3ViZVwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vVXRpbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29vcmRDdWJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50d2lzdCA9IDA7XG4gICAgICAgIHRoaXMudHN5bSA9IDA7XG4gICAgICAgIHRoaXMuZmxpcCA9IDA7XG4gICAgICAgIHRoaXMuZnN5bSA9IDA7XG4gICAgICAgIHRoaXMuc2xpY2UgPSAwO1xuICAgICAgICB0aGlzLnBydW4gPSAwO1xuICAgIH1cbiAgICBzdGF0aWMgSW5pdCgpIHtcbiAgICAgICAgaWYgKENvb3JkQ3ViZS5pbml0ZWQgPT0gNDYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ29vcmRDdWJlLmluaXRlZCA9PSAwKSB7XG4gICAgICAgICAgICBDb29yZEN1YmUuQ3ViaWVDID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkN1YmllRCA9IG5ldyBDdWJpZUN1YmUoKTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5Jbml0UGVybVN5bTJSYXcoKTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5Jbml0Q1Blcm1Nb3ZlKCk7XG4gICAgICAgICAgICBDb29yZEN1YmUuSW5pdEVQZXJtTW92ZSgpO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkluaXRNUGVybU1vdmVDb25qKCk7XG4gICAgICAgICAgICBDb29yZEN1YmUuSW5pdENvbWJQTW92ZUNvbmooKTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5Jbml0RmxpcFN5bTJSYXcoKTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5Jbml0VHdpc3RTeW0yUmF3KCk7XG4gICAgICAgICAgICBDb29yZEN1YmUuSW5pdEZsaXBNb3ZlKCk7XG4gICAgICAgICAgICBDb29yZEN1YmUuSW5pdFR3aXN0TW92ZSgpO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkluaXRVRFNsaWNlTW92ZUNvbmooKTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5pbml0ZWQgPSAxO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0TUNQZXJtUHJ1bigpO1xuICAgICAgICBDb29yZEN1YmUuSW5pdEVQZXJtQ29tYlBQcnVuKCk7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0U2xpY2VUd2lzdFBydW4oKTtcbiAgICAgICAgQ29vcmRDdWJlLkluaXRTbGljZUZsaXBQcnVuKCk7XG4gICAgfVxuICAgIHN0YXRpYyBJbml0Q1Blcm1Nb3ZlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvb3JkQ3ViZS5OX1BFUk1fU1lNOyBpKyspIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DUGVybU1vdmVbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DdWJpZUMuQ1Blcm0gPSBDdWJpZUN1YmUuRVBlcm1TMlJbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvb3JkQ3ViZS5OX01PVkVTMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5NdWx0KENvb3JkQ3ViZS5DdWJpZUMsIEN1YmllQ3ViZS5Nb3ZlQ3ViZVtVdGlsLlVEMlNURFtqXV0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5DUGVybU1vdmVbaV1bal0gPSBDb29yZEN1YmUuQ3ViaWVELkNQZXJtU3ltO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBJbml0RVBlcm1Nb3ZlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvb3JkQ3ViZS5OX1BFUk1fU1lNOyBpKyspIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5FUGVybU1vdmVbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DdWJpZUMuRVBlcm0gPSBDdWJpZUN1YmUuRVBlcm1TMlJbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvb3JkQ3ViZS5OX01PVkVTMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KENvb3JkQ3ViZS5DdWJpZUMsIEN1YmllQ3ViZS5Nb3ZlQ3ViZVtVdGlsLlVEMlNURFtqXV0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5FUGVybU1vdmVbaV1bal0gPSBDb29yZEN1YmUuQ3ViaWVELkVQZXJtU3ltO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBJbml0TVBlcm1Nb3ZlQ29uaigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb29yZEN1YmUuTl9NUEVSTTsgaSsrKSB7XG4gICAgICAgICAgICBDb29yZEN1YmUuTVBlcm1Nb3ZlW2ldID0gW107XG4gICAgICAgICAgICBDb29yZEN1YmUuTVBlcm1Db25qW2ldID0gW107XG4gICAgICAgICAgICBDb29yZEN1YmUuQ3ViaWVDLk1QZXJtID0gaTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29vcmRDdWJlLk5fTU9WRVMyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoQ29vcmRDdWJlLkN1YmllQywgQ3ViaWVDdWJlLk1vdmVDdWJlW1V0aWwuVUQyU1REW2pdXSwgQ29vcmRDdWJlLkN1YmllRCk7XG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLk1QZXJtTW92ZVtpXVtqXSA9IENvb3JkQ3ViZS5DdWJpZUQuTVBlcm07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuRWRnZUNvbmp1Z2F0ZShDb29yZEN1YmUuQ3ViaWVDLCBDdWJpZUN1YmUuU3ltTXVsdEludlswXVtqXSwgQ29vcmRDdWJlLkN1YmllRCk7XG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLk1QZXJtQ29ualtpXVtqXSA9IENvb3JkQ3ViZS5DdWJpZUQuTVBlcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEluaXRDb21iUE1vdmVDb25qKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvb3JkQ3ViZS5OX0NPTUI7IGkrKykge1xuICAgICAgICAgICAgQ29vcmRDdWJlLkNDb21iUE1vdmVbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DQ29tYlBDb25qW2ldID0gW107XG4gICAgICAgICAgICBDb29yZEN1YmUuQ3ViaWVDLkNDb21iID0gaSAlIDcwO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb29yZEN1YmUuTl9NT1ZFUzI7IGorKykge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdChDb29yZEN1YmUuQ3ViaWVDLCBDdWJpZUN1YmUuTW92ZUN1YmVbVXRpbC5VRDJTVERbal1dLCBDb29yZEN1YmUuQ3ViaWVEKTtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuQ0NvbWJQTW92ZVtpXVtqXSA9IENvb3JkQ3ViZS5DdWJpZUQuQ0NvbWIgKyA3MCAqICgoKENvb3JkQ3ViZS5QMl9QQVJJVFlfTU9WRSA+PiBqKSAmIDEpIF4gKGkgLyA3MCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgaisrKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5Db25qdWdhdGUoQ29vcmRDdWJlLkN1YmllQywgQ3ViaWVDdWJlLlN5bU11bHRJbnZbMF1bal0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5DQ29tYlBDb25qW2ldW2pdID0gQ29vcmRDdWJlLkN1YmllRC5DQ29tYiArIDcwICogfn4oaSAvIDcwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgSW5pdEZsaXBNb3ZlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvb3JkQ3ViZS5OX0ZMSVBfU1lNOyBpKyspIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5GbGlwTW92ZVtpXSA9IFtdO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkN1YmllQy5GbGlwID0gQ3ViaWVDdWJlLkZsaXBTMlJbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvb3JkQ3ViZS5OX01PVkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoQ29vcmRDdWJlLkN1YmllQywgQ3ViaWVDdWJlLk1vdmVDdWJlW2pdLCBDb29yZEN1YmUuQ3ViaWVEKTtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuRmxpcE1vdmVbaV1bal0gPSBDb29yZEN1YmUuQ3ViaWVELkZsaXBTeW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEluaXRUd2lzdE1vdmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29vcmRDdWJlLk5fVFdJU1RfU1lNOyBpKyspIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5Ud2lzdE1vdmVbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DdWJpZUMuVHdpc3QgPSBDdWJpZUN1YmUuVHdpc3RTMlJbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvb3JkQ3ViZS5OX01PVkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHQoQ29vcmRDdWJlLkN1YmllQywgQ3ViaWVDdWJlLk1vdmVDdWJlW2pdLCBDb29yZEN1YmUuQ3ViaWVEKTtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuVHdpc3RNb3ZlW2ldW2pdID0gQ29vcmRDdWJlLkN1YmllRC5Ud2lzdFN5bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgSW5pdFVEU2xpY2VNb3ZlQ29uaigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb29yZEN1YmUuTl9TTElDRTsgaSsrKSB7XG4gICAgICAgICAgICBDb29yZEN1YmUuVURTbGljZU1vdmVbaV0gPSBbXTtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5VRFNsaWNlQ29ualtpXSA9IFtdO1xuICAgICAgICAgICAgQ29vcmRDdWJlLkN1YmllQy5VRFNsaWNlID0gaTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29vcmRDdWJlLk5fTU9WRVM7IGorKykge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlTXVsdChDb29yZEN1YmUuQ3ViaWVDLCBDdWJpZUN1YmUuTW92ZUN1YmVbal0sIENvb3JkQ3ViZS5DdWJpZUQpO1xuICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5VRFNsaWNlTW92ZVtpXVtqXSA9IENvb3JkQ3ViZS5DdWJpZUQuVURTbGljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlQ29uanVnYXRlKENvb3JkQ3ViZS5DdWJpZUMsIEN1YmllQ3ViZS5TeW1NdWx0SW52WzBdW2pdLCBDb29yZEN1YmUuQ3ViaWVEKTtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuVURTbGljZUNvbmpbaV1baiA+PiAxXSA9IENvb3JkQ3ViZS5DdWJpZUQuVURTbGljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgU2V0UHJ1bmluZyh0YWJsZSwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRhYmxlW2luZGV4ID4+IDNdIF49IHZhbHVlIDw8IChpbmRleCA8PCAyKTtcbiAgICB9XG4gICAgc3RhdGljIEdldFBydW5pbmcodGFibGUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiAodGFibGVbaW5kZXggPj4gM10gPj4gKGluZGV4IDw8IDIpKSAmIDB4ZjtcbiAgICB9XG4gICAgc3RhdGljIEhhc1plcm8odmFsKSB7XG4gICAgICAgIHJldHVybiAoKHZhbCAtIDB4MTExMTExMTEpICYgfnZhbCAmIDB4ODg4ODg4ODgpICE9IDA7XG4gICAgfVxuICAgIHN0YXRpYyBJbml0UmF3U3ltUHJ1bihQcnVuVGFibGUsIE5fUkFXLCBOX1NZTSwgUmF3TW92ZSwgUmF3Q29uaiwgU3ltTW92ZSwgU3ltU3RhdGUsIFBydW5GbGFnKSB7XG4gICAgICAgIGNvbnN0IFNZTV9TSElGVCA9IFBydW5GbGFnICYgMHhmO1xuICAgICAgICBjb25zdCBTWU1fRTJDX01BR0lDID0gKChQcnVuRmxhZyA+PiA0KSAmIDEpID09IDEgPyAweDAwZGRkZDAwIDogMHgwMDAwMDAwMDtcbiAgICAgICAgY29uc3QgSVNfUEhBU0UyID0gKChQcnVuRmxhZyA+PiA1KSAmIDEpID09IDE7XG4gICAgICAgIGNvbnN0IElOVl9ERVBUSCA9IChQcnVuRmxhZyA+PiA4KSAmIDB4ZjtcbiAgICAgICAgY29uc3QgTUFYX0RFUFRIID0gKFBydW5GbGFnID4+IDEyKSAmIDB4ZjtcbiAgICAgICAgY29uc3QgTUlOX0RFUFRIID0gKFBydW5GbGFnID4+IDE2KSAmIDB4ZjtcbiAgICAgICAgY29uc3QgU1lNX01BU0sgPSAoMSA8PCBTWU1fU0hJRlQpIC0gMTtcbiAgICAgICAgY29uc3QgTl9TSVpFID0gTl9SQVcgKiBOX1NZTTtcbiAgICAgICAgY29uc3QgTl9NT1ZFUyA9IElTX1BIQVNFMiA/IDEwIDogMTg7XG4gICAgICAgIGNvbnN0IE5FWFRfQVhJU19NQUdJQyA9IE5fTU9WRVMgPT0gMTAgPyAweDQyIDogMHg5MjQ5MjtcbiAgICAgICAgbGV0IGRlcHRoID0gQ29vcmRDdWJlLkdldFBydW5pbmcoUHJ1blRhYmxlLCBOX1NJWkUpIC0gMTtcbiAgICAgICAgaWYgKGRlcHRoID09IC0xKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChOX1NJWkUgPj4gMykgKyAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBQcnVuVGFibGVbaV0gPSAweGZmZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ29vcmRDdWJlLlNldFBydW5pbmcoUHJ1blRhYmxlLCAwLCAwIF4gMHhmKTtcbiAgICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5TZXRQcnVuaW5nKFBydW5UYWJsZSwgTl9TSVpFLCAweGYgXiAoZGVwdGggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgU0VBUkNIX0RFUFRIID0gTWF0aC5taW4oTWF0aC5tYXgoZGVwdGggKyAxLCBNSU5fREVQVEgpLCBNQVhfREVQVEgpO1xuICAgICAgICB3aGlsZSAoZGVwdGggPCBTRUFSQ0hfREVQVEgpIHtcbiAgICAgICAgICAgIGNvbnN0IGludiA9IGRlcHRoID4gSU5WX0RFUFRIO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gaW52ID8gMHhmIDogZGVwdGg7XG4gICAgICAgICAgICBjb25zdCBzZWxBcnJNYXNrID0gc2VsZWN0ICogMHgxMTExMTExMTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gaW52ID8gZGVwdGggOiAweGY7XG4gICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICAgICAgQ29vcmRDdWJlLmluaXRlZCsrO1xuICAgICAgICAgICAgY29uc3QgeG9yVmFsID0gZGVwdGggXiAweGY7XG4gICAgICAgICAgICBsZXQgdmFsID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTl9TSVpFOyBpKyssIHZhbCA+Pj0gNCkge1xuICAgICAgICAgICAgICAgIGlmICgoaSAmIDcpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gUHJ1blRhYmxlW2kgPj4gM107XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29vcmRDdWJlLkhhc1plcm8odmFsIF4gc2VsQXJyTWFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgodmFsICYgMHhmKSAhPSBzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGkgJSBOX1JBVztcbiAgICAgICAgICAgICAgICBjb25zdCBzeW0gPSB+fihpIC8gTl9SQVcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgTl9NT1ZFUzsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzeW14ID0gU3ltTW92ZVtzeW1dW21dO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXd4ID0gUmF3Q29ualtSYXdNb3ZlW3Jhd11bbV1dW3N5bXggJiBTWU1fTUFTS107XG4gICAgICAgICAgICAgICAgICAgIHN5bXggPj49IFNZTV9TSElGVDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gc3lteCAqIE5fUkFXICsgcmF3eDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJ1biA9IENvb3JkQ3ViZS5HZXRQcnVuaW5nKFBydW5UYWJsZSwgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBydW4gIT0gY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcnVuIDwgZGVwdGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbSArPSAoTkVYVF9BWElTX01BR0lDID4+IG0pICYgMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5TZXRQcnVuaW5nKFBydW5UYWJsZSwgaSwgeG9yVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIENvb3JkQ3ViZS5TZXRQcnVuaW5nKFBydW5UYWJsZSwgaWR4LCB4b3JWYWwpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMSwgc3ltU3RhdGUgPSBTeW1TdGF0ZVtzeW14XTsgKHN5bVN0YXRlID4+PSAxKSAhPSAwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc3ltU3RhdGUgJiAxKSAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWR4eCA9IHN5bXggKiBOX1JBVztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeHggKz0gUmF3Q29ualtyYXd4XVtqIF4gKChTWU1fRTJDX01BR0lDID4+IChqIDw8IDEpKSAmIDMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDb29yZEN1YmUuR2V0UHJ1bmluZyhQcnVuVGFibGUsIGlkeHgpID09IGNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29vcmRDdWJlLlNldFBydW5pbmcoUHJ1blRhYmxlLCBpZHh4LCB4b3JWYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIENvb3JkQ3ViZS5TZXRQcnVuaW5nKFBydW5UYWJsZSwgTl9TSVpFLCAoZGVwdGggKyAxKSBeIDB4Zik7XG4gICAgfVxuICAgIHN0YXRpYyBJbml0U2xpY2VUd2lzdFBydW4oKSB7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0UmF3U3ltUHJ1bihDb29yZEN1YmUuVURTbGljZVR3aXN0UHJ1biwgNDk1LCAzMjQsIENvb3JkQ3ViZS5VRFNsaWNlTW92ZSwgQ29vcmRDdWJlLlVEU2xpY2VDb25qLCBDb29yZEN1YmUuVHdpc3RNb3ZlLCBDdWJpZUN1YmUuU3ltU3RhdGVUd2lzdCwgMHg2OTYwMyk7XG4gICAgfVxuICAgIHN0YXRpYyBJbml0U2xpY2VGbGlwUHJ1bigpIHtcbiAgICAgICAgQ29vcmRDdWJlLkluaXRSYXdTeW1QcnVuKENvb3JkQ3ViZS5VRFNsaWNlRmxpcFBydW4sIDQ5NSwgMzM2LCBDb29yZEN1YmUuVURTbGljZU1vdmUsIENvb3JkQ3ViZS5VRFNsaWNlQ29uaiwgQ29vcmRDdWJlLkZsaXBNb3ZlLCBDdWJpZUN1YmUuU3ltU3RhdGVGbGlwLCAweDY5NjAzKTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRNQ1Blcm1QcnVuKCkge1xuICAgICAgICBDb29yZEN1YmUuSW5pdFJhd1N5bVBydW4oQ29vcmRDdWJlLk1DUGVybVBydW4sIDI0LCAyNzY4LCBDb29yZEN1YmUuTVBlcm1Nb3ZlLCBDb29yZEN1YmUuTVBlcm1Db25qLCBDb29yZEN1YmUuQ1Blcm1Nb3ZlLCBDdWJpZUN1YmUuU3ltU3RhdGVQZXJtLCAweDhlYTM0KTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRFUGVybUNvbWJQUHJ1bigpIHtcbiAgICAgICAgQ29vcmRDdWJlLkluaXRSYXdTeW1QcnVuKENvb3JkQ3ViZS5FUGVybUNDb21iUFBydW4sIENvb3JkQ3ViZS5OX0NPTUIsIDI3NjgsIENvb3JkQ3ViZS5DQ29tYlBNb3ZlLCBDb29yZEN1YmUuQ0NvbWJQQ29uaiwgQ29vcmRDdWJlLkVQZXJtTW92ZSwgQ3ViaWVDdWJlLlN5bVN0YXRlUGVybSwgMHg3ZDgyNCk7XG4gICAgfVxuICAgIHNldFdpdGhQcnVuKGNjLCBkZXB0aCkge1xuICAgICAgICB0aGlzLnR3aXN0ID0gY2MuVHdpc3RTeW07XG4gICAgICAgIHRoaXMuZmxpcCA9IGNjLkZsaXBTeW07XG4gICAgICAgIHRoaXMudHN5bSA9IHRoaXMudHdpc3QgJiA3O1xuICAgICAgICB0aGlzLnR3aXN0ID0gdGhpcy50d2lzdCA+PiAzO1xuICAgICAgICB0aGlzLnBydW4gPSAwO1xuICAgICAgICB0aGlzLmZzeW0gPSB0aGlzLmZsaXAgJiA3O1xuICAgICAgICB0aGlzLmZsaXAgPSB0aGlzLmZsaXAgPj4gMztcbiAgICAgICAgdGhpcy5zbGljZSA9IGNjLlVEU2xpY2U7XG4gICAgICAgIHRoaXMucHJ1biA9IE1hdGgubWF4KHRoaXMucHJ1biwgTWF0aC5tYXgoQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLlVEU2xpY2VUd2lzdFBydW4sIHRoaXMudHdpc3QgKiBDb29yZEN1YmUuTl9TTElDRSArIENvb3JkQ3ViZS5VRFNsaWNlQ29ualt0aGlzLnNsaWNlXVt0aGlzLnRzeW1dKSwgQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLlVEU2xpY2VGbGlwUHJ1biwgdGhpcy5mbGlwICogQ29vcmRDdWJlLk5fU0xJQ0UgKyBDb29yZEN1YmUuVURTbGljZUNvbmpbdGhpcy5zbGljZV1bdGhpcy5mc3ltXSkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJ1biA8PSBkZXB0aDtcbiAgICB9XG4gICAgZG9Nb3ZlUHJ1bihjYywgbSkge1xuICAgICAgICB0aGlzLnNsaWNlID0gQ29vcmRDdWJlLlVEU2xpY2VNb3ZlW2NjLnNsaWNlXVttXTtcbiAgICAgICAgdGhpcy5mbGlwID0gQ29vcmRDdWJlLkZsaXBNb3ZlW2NjLmZsaXBdW0N1YmllQ3ViZS5TeW04TW92ZVsobSA8PCAzKSB8IGNjLmZzeW1dXTtcbiAgICAgICAgdGhpcy5mc3ltID0gKHRoaXMuZmxpcCAmIDcpIF4gY2MuZnN5bTtcbiAgICAgICAgdGhpcy5mbGlwID4+PSAzO1xuICAgICAgICB0aGlzLnR3aXN0ID0gQ29vcmRDdWJlLlR3aXN0TW92ZVtjYy50d2lzdF1bQ3ViaWVDdWJlLlN5bThNb3ZlWyhtIDw8IDMpIHwgY2MudHN5bV1dO1xuICAgICAgICB0aGlzLnRzeW0gPSAodGhpcy50d2lzdCAmIDcpIF4gY2MudHN5bTtcbiAgICAgICAgdGhpcy50d2lzdCA+Pj0gMztcbiAgICAgICAgdGhpcy5wcnVuID0gTWF0aC5tYXgoQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLlVEU2xpY2VUd2lzdFBydW4sIHRoaXMudHdpc3QgKiBDb29yZEN1YmUuTl9TTElDRSArIENvb3JkQ3ViZS5VRFNsaWNlQ29ualt0aGlzLnNsaWNlXVt0aGlzLnRzeW1dKSwgQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLlVEU2xpY2VGbGlwUHJ1biwgdGhpcy5mbGlwICogQ29vcmRDdWJlLk5fU0xJQ0UgKyBDb29yZEN1YmUuVURTbGljZUNvbmpbdGhpcy5zbGljZV1bdGhpcy5mc3ltXSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcnVuO1xuICAgIH1cbn1cbkNvb3JkQ3ViZS5OX01PVkVTID0gMTg7XG5Db29yZEN1YmUuTl9NT1ZFUzIgPSAxMDtcbkNvb3JkQ3ViZS5OX1NMSUNFID0gNDk1O1xuQ29vcmRDdWJlLk5fVFdJU1QgPSAyMTg3O1xuQ29vcmRDdWJlLk5fVFdJU1RfU1lNID0gMzI0O1xuQ29vcmRDdWJlLk5fRkxJUCA9IDIwNDg7XG5Db29yZEN1YmUuTl9GTElQX1NZTSA9IDMzNjtcbkNvb3JkQ3ViZS5OX1BFUk0gPSA0MDMyMDtcbkNvb3JkQ3ViZS5OX1BFUk1fU1lNID0gMjc2ODtcbkNvb3JkQ3ViZS5OX01QRVJNID0gMjQ7XG5Db29yZEN1YmUuTl9DT01CID0gNzA7XG5Db29yZEN1YmUuUDJfUEFSSVRZX01PVkUgPSAwO1xuQ29vcmRDdWJlLlVEU2xpY2VNb3ZlID0gW107XG5Db29yZEN1YmUuVHdpc3RNb3ZlID0gW107XG5Db29yZEN1YmUuRmxpcE1vdmUgPSBbXTtcbkNvb3JkQ3ViZS5VRFNsaWNlQ29uaiA9IFtdO1xuQ29vcmRDdWJlLlVEU2xpY2VUd2lzdFBydW4gPSBbXTtcbkNvb3JkQ3ViZS5VRFNsaWNlRmxpcFBydW4gPSBbXTtcbkNvb3JkQ3ViZS5DUGVybU1vdmUgPSBbXTtcbkNvb3JkQ3ViZS5FUGVybU1vdmUgPSBbXTtcbkNvb3JkQ3ViZS5NUGVybU1vdmUgPSBbXTtcbkNvb3JkQ3ViZS5NUGVybUNvbmogPSBbXTtcbkNvb3JkQ3ViZS5DQ29tYlBNb3ZlID0gW107XG5Db29yZEN1YmUuQ0NvbWJQQ29uaiA9IFtdO1xuQ29vcmRDdWJlLk1DUGVybVBydW4gPSBbXTtcbkNvb3JkQ3ViZS5FUGVybUNDb21iUFBydW4gPSBbXTtcbkNvb3JkQ3ViZS5pbml0ZWQgPSAwO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4vVXRpbFwiO1xuaW1wb3J0IENvb3JkQ3ViZSBmcm9tIFwiLi9Db29yZEN1YmVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1YmllQ3ViZSB7XG4gICAgY29uc3RydWN0b3IoY3Blcm0gPSAwLCB0d2lzdCA9IDAsIGVwZXJtID0gMCwgZmxpcCA9IDApIHtcbiAgICAgICAgdGhpcy5jYSA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XTtcbiAgICAgICAgdGhpcy5lYSA9IFswLCAyLCA0LCA2LCA4LCAxMCwgMTIsIDE0LCAxNiwgMTgsIDIwLCAyMl07XG4gICAgICAgIHRoaXMuQ1Blcm0gPSBjcGVybTtcbiAgICAgICAgdGhpcy5Ud2lzdCA9IHR3aXN0O1xuICAgICAgICBVdGlsLlNldE5QZXJtRnVsbCh0aGlzLmVhLCBlcGVybSwgMTIsIHRydWUpO1xuICAgICAgICB0aGlzLkZsaXAgPSBmbGlwO1xuICAgIH1cbiAgICBzdGF0aWMgRVN5bTJDU3ltKGlkeCkge1xuICAgICAgICByZXR1cm4gaWR4IF4gKChDdWJpZUN1YmUuU1lNX0UyQ19NQUdJQyA+PiAoKGlkeCAmIDB4ZikgPDwgMSkpICYgMyk7XG4gICAgfVxuICAgIHN0YXRpYyBJbml0TW92ZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIHJlc3VsdFswXSA9IG5ldyBDdWJpZUN1YmUoMTUxMjAsIDAsIDExOTc1MDQwMCwgMCk7XG4gICAgICAgIHJlc3VsdFszXSA9IG5ldyBDdWJpZUN1YmUoMjEwMjEsIDE0OTQsIDMyMzQwMzQxNywgMCk7XG4gICAgICAgIHJlc3VsdFs2XSA9IG5ldyBDdWJpZUN1YmUoODA2NCwgMTIzNiwgMjk0NDE4MDgsIDU1MCk7XG4gICAgICAgIHJlc3VsdFs5XSA9IG5ldyBDdWJpZUN1YmUoOSwgMCwgNTg4MCwgMCk7XG4gICAgICAgIHJlc3VsdFsxMl0gPSBuZXcgQ3ViaWVDdWJlKDEyMzAsIDQxMiwgMjk0OTY2MCwgMCk7XG4gICAgICAgIHJlc3VsdFsxNV0gPSBuZXcgQ3ViaWVDdWJlKDIyNCwgMTM3LCAzMjg1NTIsIDEzNyk7XG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTg7IGEgKz0gMykge1xuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAyOyBwKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbYSArIHAgKyAxXSA9IG5ldyBDdWJpZUN1YmUoKTtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQocmVzdWx0W2EgKyBwXSwgcmVzdWx0W2FdLCByZXN1bHRbYSArIHAgKyAxXSk7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5NdWx0KHJlc3VsdFthICsgcF0sIHJlc3VsdFthXSwgcmVzdWx0W2EgKyBwICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEN1YmllQ3ViZS5Nb3ZlQ3ViZSA9IHJlc3VsdDtcbiAgICB9XG4gICAgc3RhdGljIEluaXRTeW0oKSB7XG4gICAgICAgIGxldCBjID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICBsZXQgZCA9IG5ldyBDdWJpZUN1YmUoKTtcbiAgICAgICAgY29uc3QgZjIgPSBuZXcgQ3ViaWVDdWJlKDI4NzgzLCAwLCAyNTkyNjg0MDcsIDApO1xuICAgICAgICBjb25zdCB1NCA9IG5ldyBDdWJpZUN1YmUoMTUxMzgsIDAsIDExOTc2NTUzOCwgNyk7XG4gICAgICAgIGNvbnN0IGxyMiA9IG5ldyBDdWJpZUN1YmUoNTE2NywgMCwgODM0NzMyMDcsIDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgbHIyLmNhW2ldIHw9IDMgPDwgMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5TeW1DdWJlW2ldID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLlN5bUN1YmVbaV0uY29weShjKTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdEZ1bGwoYywgdTQsIGQpO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KGMsIHU0LCBkKTtcbiAgICAgICAgICAgIFtjLCBkXSA9IFtkLCBjXTtcbiAgICAgICAgICAgIGlmIChpICUgNCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5NdWx0RnVsbChjLCBscjIsIGQpO1xuICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5FZGdlTXVsdChjLCBscjIsIGQpO1xuICAgICAgICAgICAgICAgIFtjLCBkXSA9IFtkLCBjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICUgOCA9PSA3KSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5NdWx0RnVsbChjLCBmMiwgZCk7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KGMsIGYyLCBkKTtcbiAgICAgICAgICAgICAgICBbYywgZF0gPSBbZCwgY107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICBDdWJpZUN1YmUuU3ltTXVsdFtpXSA9IFtdO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLlN5bU11bHRJbnZbaV0gPSBbXTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5TeW1Nb3ZlW2ldID0gW107XG4gICAgICAgICAgICBDdWJpZUN1YmUuU3ltTW92ZVVEW2ldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyBqKyspIHtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuU3ltTXVsdFtpXVtqXSA9IGkgXiBqIF4gKCgweDE0YWI0ID4+IGopICYgKGkgPDwgMSkgJiAyKTtcbiAgICAgICAgICAgICAgICBDdWJpZUN1YmUuU3ltTXVsdEludltDdWJpZUN1YmUuU3ltTXVsdFtpXVtqXV1bal0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgMTY7IHMrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxODsgaisrKSB7XG4gICAgICAgICAgICAgICAgQ3ViaWVDdWJlLkNvcm5Db25qdWdhdGUoQ3ViaWVDdWJlLk1vdmVDdWJlW2pdLCBDdWJpZUN1YmUuU3ltTXVsdEludlswXVtzXSwgYyk7XG4gICAgICAgICAgICAgICAgb3V0bG9vcDogZm9yIChsZXQgbSA9IDA7IG0gPCAxODsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ3ViaWVDdWJlLk1vdmVDdWJlW21dLmNhW3RdICE9IGMuY2FbdF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRsb29wO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5TeW1Nb3ZlW3NdW2pdID0gbTtcbiAgICAgICAgICAgICAgICAgICAgQ3ViaWVDdWJlLlN5bU1vdmVVRFtzXVtVdGlsLlNURDJVRFtqXV0gPSBVdGlsLlNURDJVRFttXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzICUgMiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5TeW04TW92ZVsoaiA8PCAzKSB8IChzID4+IDEpXSA9IEN1YmllQ3ViZS5TeW1Nb3ZlW3NdW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgSW5pdFN5bTJSYXcoTl9SQVcsIFN5bTJSYXcsIFJhdzJTeW0sIFN5bVN0YXRlLCBjb29yZCkge1xuICAgICAgICBjb25zdCBjID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICBjb25zdCBkID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICBsZXQgY291bnQgPSAwLCBpZHggPSAwO1xuICAgICAgICBjb25zdCBzeW1JbmMgPSBjb29yZCA+PSAyID8gMSA6IDI7XG4gICAgICAgIGNvbnN0IGlzRWRnZSA9IGNvb3JkICE9IDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTl9SQVc7IGkrKykge1xuICAgICAgICAgICAgaWYgKFJhdzJTeW1baV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGNvb3JkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjLkZsaXAgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGMuVHdpc3QgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGMuRVBlcm0gPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgMTY7IHMgKz0gc3ltSW5jKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRWRnZSkge1xuICAgICAgICAgICAgICAgICAgICBDdWJpZUN1YmUuRWRnZUNvbmp1Z2F0ZShjLCBzLCBkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEN1YmllQ3ViZS5Db3JuQ29uanVnYXRlKGMsIHMsIGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IGQuRmxpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHggPSBkLlR3aXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IGQuRVBlcm07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIFN5bVN0YXRlW2NvdW50XSB8PSAxIDw8IChzIC8gc3ltSW5jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUmF3MlN5bVtpZHhdID0gKChjb3VudCA8PCA0KSB8IHMpIC8gc3ltSW5jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU3ltMlJhd1tjb3VudCsrXSA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBzdGF0aWMgSW5pdEZsaXBTeW0yUmF3KCkge1xuICAgICAgICBDdWJpZUN1YmUuSW5pdFN5bTJSYXcoQ29vcmRDdWJlLk5fRkxJUCwgQ3ViaWVDdWJlLkZsaXBTMlIsIEN1YmllQ3ViZS5GbGlwUjJTLCBDdWJpZUN1YmUuU3ltU3RhdGVGbGlwLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRUd2lzdFN5bTJSYXcoKSB7XG4gICAgICAgIEN1YmllQ3ViZS5Jbml0U3ltMlJhdyhDb29yZEN1YmUuTl9UV0lTVCwgQ3ViaWVDdWJlLlR3aXN0UzJSLCBDdWJpZUN1YmUuVHdpc3RSMlMsIEN1YmllQ3ViZS5TeW1TdGF0ZVR3aXN0LCAxKTtcbiAgICB9XG4gICAgc3RhdGljIEluaXRQZXJtU3ltMlJhdygpIHtcbiAgICAgICAgQ3ViaWVDdWJlLkluaXRTeW0yUmF3KENvb3JkQ3ViZS5OX1BFUk0sIEN1YmllQ3ViZS5FUGVybVMyUiwgQ3ViaWVDdWJlLkVQZXJtUjJTLCBDdWJpZUN1YmUuU3ltU3RhdGVQZXJtLCAyKTtcbiAgICAgICAgY29uc3QgY2MgPSBuZXcgQ3ViaWVDdWJlKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29vcmRDdWJlLk5fUEVSTV9TWU07IGkrKykge1xuICAgICAgICAgICAgY2MuRVBlcm0gPSBDdWJpZUN1YmUuRVBlcm1TMlJbaV07XG4gICAgICAgICAgICBDdWJpZUN1YmUuUGVybTJDb21iUFtpXSA9IFV0aWwuR2V0Q29tYihjYy5lYSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICBjYy5pbnZlcnNlKCk7XG4gICAgICAgICAgICBDdWJpZUN1YmUuUGVybUludkVkZ2VTeW1baV0gPSBjYy5FUGVybVN5bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvb3JkQ3ViZS5OX01QRVJNOyBpKyspIHtcbiAgICAgICAgICAgIGNjLk1QZXJtID0gaTtcbiAgICAgICAgICAgIGNjLmludmVyc2UoKTtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5NUGVybUludltpXSA9IGNjLk1QZXJtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBJbml0KCkge1xuICAgICAgICBDdWJpZUN1YmUudGVtcHMgPSBuZXcgQ3ViaWVDdWJlKCk7XG4gICAgICAgIEN1YmllQ3ViZS5Jbml0TW92ZSgpO1xuICAgICAgICBDdWJpZUN1YmUuSW5pdFN5bSgpO1xuICAgIH1cbiAgICBzdGF0aWMgQ29ybk11bHQoYSwgYiwgcHJvZCkge1xuICAgICAgICBmb3IgKGxldCBjb3JuID0gMDsgY29ybiA8IDg7IGNvcm4rKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpQSA9IGEuY2FbYi5jYVtjb3JuXSAmIDddID4+IDM7XG4gICAgICAgICAgICBjb25zdCBvcmlCID0gYi5jYVtjb3JuXSA+PiAzO1xuICAgICAgICAgICAgcHJvZC5jYVtjb3JuXSA9IChhLmNhW2IuY2FbY29ybl0gJiA3XSAmIDcpIHwgKChvcmlBICsgb3JpQikgJSAzIDw8IDMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBDb3JuTXVsdEZ1bGwoYSwgYiwgcHJvZCkge1xuICAgICAgICBmb3IgKGxldCBjb3JuID0gMDsgY29ybiA8IDg7IGNvcm4rKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpQSA9IGEuY2FbYi5jYVtjb3JuXSAmIDddID4+IDM7XG4gICAgICAgICAgICBjb25zdCBvcmlCID0gYi5jYVtjb3JuXSA+PiAzO1xuICAgICAgICAgICAgbGV0IG9yaSA9IG9yaUEgKyAob3JpQSA8IDMgPyBvcmlCIDogNiAtIG9yaUIpO1xuICAgICAgICAgICAgb3JpID0gKG9yaSAlIDMpICsgKG9yaUEgPCAzID09IG9yaUIgPCAzID8gMCA6IDMpO1xuICAgICAgICAgICAgcHJvZC5jYVtjb3JuXSA9IChhLmNhW2IuY2FbY29ybl0gJiA3XSAmIDcpIHwgKG9yaSA8PCAzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRWRnZU11bHQoYSwgYiwgcHJvZCkge1xuICAgICAgICBmb3IgKGxldCBlZCA9IDA7IGVkIDwgMTI7IGVkKyspIHtcbiAgICAgICAgICAgIHByb2QuZWFbZWRdID0gYS5lYVtiLmVhW2VkXSA+PiAxXSBeIChiLmVhW2VkXSAmIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBDb3JuQ29uanVnYXRlKGEsIGlkeCwgYikge1xuICAgICAgICBjb25zdCBzaW52ID0gQ3ViaWVDdWJlLlN5bUN1YmVbQ3ViaWVDdWJlLlN5bU11bHRJbnZbMF1baWR4XV07XG4gICAgICAgIGNvbnN0IHMgPSBDdWJpZUN1YmUuU3ltQ3ViZVtpZHhdO1xuICAgICAgICBmb3IgKGxldCBjb3JuID0gMDsgY29ybiA8IDg7IGNvcm4rKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpQSA9IHNpbnYuY2FbYS5jYVtzLmNhW2Nvcm5dICYgN10gJiA3XSA+PiAzO1xuICAgICAgICAgICAgY29uc3Qgb3JpQiA9IGEuY2Fbcy5jYVtjb3JuXSAmIDddID4+IDM7XG4gICAgICAgICAgICBjb25zdCBvcmkgPSBvcmlBIDwgMyA/IG9yaUIgOiAoMyAtIG9yaUIpICUgMztcbiAgICAgICAgICAgIGIuY2FbY29ybl0gPSAoc2ludi5jYVthLmNhW3MuY2FbY29ybl0gJiA3XSAmIDddICYgNykgfCAob3JpIDw8IDMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBFZGdlQ29uanVnYXRlKGEsIGlkeCwgYikge1xuICAgICAgICBjb25zdCBzaW52ID0gQ3ViaWVDdWJlLlN5bUN1YmVbQ3ViaWVDdWJlLlN5bU11bHRJbnZbMF1baWR4XV07XG4gICAgICAgIGNvbnN0IHMgPSBDdWJpZUN1YmUuU3ltQ3ViZVtpZHhdO1xuICAgICAgICBmb3IgKGxldCBlZCA9IDA7IGVkIDwgMTI7IGVkKyspIHtcbiAgICAgICAgICAgIGIuZWFbZWRdID0gc2ludi5lYVthLmVhW3MuZWFbZWRdID4+IDFdID4+IDFdIF4gKGEuZWFbcy5lYVtlZF0gPj4gMV0gJiAxKSBeIChzLmVhW2VkXSAmIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBHZXRQZXJtU3ltSW52KGlkeCwgc3ltLCBjb3JuZXIpIHtcbiAgICAgICAgbGV0IGlkeGkgPSBDdWJpZUN1YmUuUGVybUludkVkZ2VTeW1baWR4XTtcbiAgICAgICAgaWYgKGNvcm5lcikge1xuICAgICAgICAgICAgaWR4aSA9IEN1YmllQ3ViZS5FU3ltMkNTeW0oaWR4aSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChpZHhpICYgMHhmZmYwKSB8IEN1YmllQ3ViZS5TeW1NdWx0W2lkeGkgJiAweGZdW3N5bV07XG4gICAgfVxuICAgIHN0YXRpYyBHZXRTa2lwTW92ZXMoc3N5bSkge1xuICAgICAgICBsZXQgcmV0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IChzc3ltID4+PSAxKSAhPSAwOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgoc3N5bSAmIDEpID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXQgfD0gQ3ViaWVDdWJlLkZpcnN0TW92ZVN5bVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBjb3B5KGMpIHtcbiAgICAgICAgZm9yIChsZXQgZWRnZSA9IDA7IGVkZ2UgPCAxMjsgZWRnZSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVhW2VkZ2VdID0gYy5lYVtlZGdlXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBjb3JuID0gMDsgY29ybiA8IDg7IGNvcm4rKykge1xuICAgICAgICAgICAgdGhpcy5jYVtjb3JuXSA9IGMuY2FbY29ybl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW52ZXJzZSgpIHtcbiAgICAgICAgZm9yIChsZXQgZWRnZSA9IDA7IGVkZ2UgPCAxMjsgZWRnZSsrKSB7XG4gICAgICAgICAgICBDdWJpZUN1YmUudGVtcHMuZWFbdGhpcy5lYVtlZGdlXSA+PiAxXSA9IChlZGdlIDw8IDEpIHwgKHRoaXMuZWFbZWRnZV0gJiAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBjb3JuID0gMDsgY29ybiA8IDg7IGNvcm4rKykge1xuICAgICAgICAgICAgQ3ViaWVDdWJlLnRlbXBzLmNhW3RoaXMuY2FbY29ybl0gJiAweDddID0gY29ybiB8ICgoMHgyMCA+PiAodGhpcy5jYVtjb3JuXSA+PiAzKSkgJiAweDE4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcHkoQ3ViaWVDdWJlLnRlbXBzKTtcbiAgICB9XG4gICAgVVJGQ29uanVnYXRlKCkge1xuICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHQoQ3ViaWVDdWJlLlVSRjIsIHRoaXMsIEN1YmllQ3ViZS50ZW1wcyk7XG4gICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdChDdWJpZUN1YmUudGVtcHMsIEN1YmllQ3ViZS5VUkYxLCB0aGlzKTtcbiAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KEN1YmllQ3ViZS5VUkYyLCB0aGlzLCBDdWJpZUN1YmUudGVtcHMpO1xuICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoQ3ViaWVDdWJlLnRlbXBzLCBDdWJpZUN1YmUuVVJGMSwgdGhpcyk7XG4gICAgfVxuICAgIGdldCBGbGlwKCkge1xuICAgICAgICBsZXQgaWR4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMTsgaSsrKSB7XG4gICAgICAgICAgICBpZHggPSAoaWR4IDw8IDEpIHwgKHRoaXMuZWFbaV0gJiAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgICBzZXQgRmxpcChpZHgpIHtcbiAgICAgICAgbGV0IHBhcml0eSA9IDA7XG4gICAgICAgIGxldCB2YWwgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMTA7IGkgPj0gMDsgaS0tLCBpZHggPj49IDEpIHtcbiAgICAgICAgICAgIHBhcml0eSBePSB2YWwgPSBpZHggJiAxO1xuICAgICAgICAgICAgdGhpcy5lYVtpXSA9ICh0aGlzLmVhW2ldICYgfjEpIHwgdmFsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWFbMTFdID0gKHRoaXMuZWFbMTFdICYgfjEpIHwgcGFyaXR5O1xuICAgIH1cbiAgICBnZXQgRmxpcFN5bSgpIHtcbiAgICAgICAgcmV0dXJuIEN1YmllQ3ViZS5GbGlwUjJTW3RoaXMuRmxpcF07XG4gICAgfVxuICAgIGdldCBUd2lzdCgpIHtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBpZHggKz0gKGlkeCA8PCAxKSArICh0aGlzLmNhW2ldID4+IDMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIHNldCBUd2lzdChpZHgpIHtcbiAgICAgICAgbGV0IHR3c3QgPSAxNTtcbiAgICAgICAgbGV0IHZhbCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpID49IDA7IGktLSwgaWR4ID0gfn4oaWR4IC8gMykpIHtcbiAgICAgICAgICAgIHR3c3QgLT0gdmFsID0gaWR4ICUgMztcbiAgICAgICAgICAgIHRoaXMuY2FbaV0gPSAodGhpcy5jYVtpXSAmIDB4NykgfCAodmFsIDw8IDMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FbN10gPSAodGhpcy5jYVs3XSAmIDB4NykgfCAodHdzdCAlIDMgPDwgMyk7XG4gICAgfVxuICAgIGdldCBUd2lzdFN5bSgpIHtcbiAgICAgICAgcmV0dXJuIEN1YmllQ3ViZS5Ud2lzdFIyU1t0aGlzLlR3aXN0XTtcbiAgICB9XG4gICAgZ2V0IFVEU2xpY2UoKSB7XG4gICAgICAgIHJldHVybiA0OTQgLSBVdGlsLkdldENvbWIodGhpcy5lYSwgOCwgdHJ1ZSk7XG4gICAgfVxuICAgIHNldCBVRFNsaWNlKGlkeCkge1xuICAgICAgICBVdGlsLlNldENvbWIodGhpcy5lYSwgNDk0IC0gaWR4LCA4LCB0cnVlKTtcbiAgICB9XG4gICAgZ2V0IENQZXJtKCkge1xuICAgICAgICByZXR1cm4gVXRpbC5HZXROUGVybSh0aGlzLmNhLCA4LCBmYWxzZSk7XG4gICAgfVxuICAgIHNldCBDUGVybShpZHgpIHtcbiAgICAgICAgVXRpbC5TZXROUGVybSh0aGlzLmNhLCBpZHgsIDgsIGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0IENQZXJtU3ltKCkge1xuICAgICAgICByZXR1cm4gQ3ViaWVDdWJlLkVTeW0yQ1N5bShDdWJpZUN1YmUuRVBlcm1SMlNbdGhpcy5DUGVybV0pO1xuICAgIH1cbiAgICBnZXQgRVBlcm0oKSB7XG4gICAgICAgIHJldHVybiBVdGlsLkdldE5QZXJtKHRoaXMuZWEsIDgsIHRydWUpO1xuICAgIH1cbiAgICBzZXQgRVBlcm0oaWR4KSB7XG4gICAgICAgIFV0aWwuU2V0TlBlcm0odGhpcy5lYSwgaWR4LCA4LCB0cnVlKTtcbiAgICB9XG4gICAgZ2V0IEVQZXJtU3ltKCkge1xuICAgICAgICByZXR1cm4gQ3ViaWVDdWJlLkVQZXJtUjJTW3RoaXMuRVBlcm1dO1xuICAgIH1cbiAgICBnZXQgTVBlcm0oKSB7XG4gICAgICAgIHJldHVybiBVdGlsLkdldE5QZXJtRnVsbCh0aGlzLmVhLCAxMiwgdHJ1ZSkgJSAyNDtcbiAgICB9XG4gICAgc2V0IE1QZXJtKGlkeCkge1xuICAgICAgICBVdGlsLlNldE5QZXJtRnVsbCh0aGlzLmVhLCBpZHgsIDEyLCB0cnVlKTtcbiAgICB9XG4gICAgZ2V0IENDb21iKCkge1xuICAgICAgICByZXR1cm4gVXRpbC5HZXRDb21iKHRoaXMuY2EsIDAsIGZhbHNlKTtcbiAgICB9XG4gICAgc2V0IENDb21iKGlkeCkge1xuICAgICAgICBVdGlsLlNldENvbWIodGhpcy5jYSwgaWR4LCAwLCBmYWxzZSk7XG4gICAgfVxuICAgIHZlcmlmeSgpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGxldCBtYXNrID0gMDtcbiAgICAgICAgZm9yIChsZXQgZSA9IDA7IGUgPCAxMjsgZSsrKSB7XG4gICAgICAgICAgICBtYXNrIHw9IDEgPDwgKHRoaXMuZWFbZV0gPj4gMSk7XG4gICAgICAgICAgICBzdW0gXj0gdGhpcy5lYVtlXSAmIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hc2sgIT0gMHhmZmYpIHtcbiAgICAgICAgICAgIHJldHVybiBcIm1pc3NpbmcgZWRnZXNcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VtICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImZsaXBlZCBlZGdlc1wiO1xuICAgICAgICB9XG4gICAgICAgIG1hc2sgPSAwO1xuICAgICAgICBzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDg7IGMrKykge1xuICAgICAgICAgICAgbWFzayB8PSAxIDw8ICh0aGlzLmNhW2NdICYgNyk7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5jYVtjXSA+PiAzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXNrICE9IDB4ZmYpIHtcbiAgICAgICAgICAgIHJldHVybiBcIm1pc3NpbmcgY29ybmVyc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdW0gJSAzICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcInR3aXN0ZWQgY29ybmVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChVdGlsLkdldE5QYXJpdHkoVXRpbC5HZXROUGVybUZ1bGwodGhpcy5lYSwgMTIsIHRydWUpLCAxMikgXiBVdGlsLkdldE5QYXJpdHkodGhpcy5DUGVybSwgOCkpICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcInBhcml0eSBlcnJvclwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IHRzID0gXCJVUkZETEJcIjtcbiAgICAgICAgY29uc3QgZiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU0OyBpKyspIHtcbiAgICAgICAgICAgIGZbaV0gPSB0c1t+fihpIC8gOSldO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgODsgYysrKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gdGhpcy5jYVtjXSAmIDB4NztcbiAgICAgICAgICAgIGNvbnN0IG9yaSA9IHRoaXMuY2FbY10gPj4gMztcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgMzsgbisrKVxuICAgICAgICAgICAgICAgIGZbVXRpbC5Db3JuZXJGYWNlbGV0W2NdWyhuICsgb3JpKSAlIDNdXSA9IHRzW35+KFV0aWwuQ29ybmVyRmFjZWxldFtqXVtuXSAvIDkpXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBlID0gMDsgZSA8IDEyOyBlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSB0aGlzLmVhW2VdID4+IDE7XG4gICAgICAgICAgICBjb25zdCBvcmkgPSB0aGlzLmVhW2VdICYgMTtcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgMjsgbisrKVxuICAgICAgICAgICAgICAgIGZbVXRpbC5FZGdlRmFjZWxldFtlXVsobiArIG9yaSkgJSAyXV0gPSB0c1t+fihVdGlsLkVkZ2VGYWNlbGV0W2pdW25dIC8gOSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIGRlc2VyaWFsaXplKGZhY2VsZXQpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgY29uc3QgZiA9IFtdO1xuICAgICAgICBjb25zdCBjZW50ZXJzID0gZmFjZWxldFs0XSArIGZhY2VsZXRbMTNdICsgZmFjZWxldFsyMl0gKyBmYWNlbGV0WzMxXSArIGZhY2VsZXRbNDBdICsgZmFjZWxldFs0OV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTQ7ICsraSkge1xuICAgICAgICAgICAgZltpXSA9IGNlbnRlcnMudG9TdHJpbmcoKS5pbmRleE9mKGZhY2VsZXRbaV0pO1xuICAgICAgICAgICAgaWYgKGZbaV0gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCArPSAxIDw8IChmW2ldIDw8IDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCAhPSAweDk5OTk5OSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2wxLCBjb2wyLCBpLCBqLCBvcmksIHRlbXA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA4OyArK2kpIHtcbiAgICAgICAgICAgIGZvciAob3JpID0gMDsgb3JpIDwgMzsgKytvcmkpXG4gICAgICAgICAgICAgICAgaWYgKGZbVXRpbC5Db3JuZXJGYWNlbGV0W2ldW29yaV1dID09IDAgfHwgZltVdGlsLkNvcm5lckZhY2VsZXRbaV1bb3JpXV0gPT0gMylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjb2wxID0gZltVdGlsLkNvcm5lckZhY2VsZXRbaV1bKG9yaSArIDEpICUgM11dO1xuICAgICAgICAgICAgY29sMiA9IGZbVXRpbC5Db3JuZXJGYWNlbGV0W2ldWyhvcmkgKyAyKSAlIDNdXTtcbiAgICAgICAgICAgIHRlbXAgPSAwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmIChjb2wxID09IH5+KFV0aWwuQ29ybmVyRmFjZWxldFtqXVsxXSAvIDkpICYmIGNvbDIgPT0gfn4oVXRpbC5Db3JuZXJGYWNlbGV0W2pdWzJdIC8gOSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYVtpXSA9IGogfCAob3JpICUgMyA8PCAzKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZW1wID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICB0ZW1wID0gMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAxMjsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZbVXRpbC5FZGdlRmFjZWxldFtpXVswXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVswXSAvIDkpICYmXG4gICAgICAgICAgICAgICAgICAgIGZbVXRpbC5FZGdlRmFjZWxldFtpXVsxXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVsxXSAvIDkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWFbaV0gPSBqIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZbVXRpbC5FZGdlRmFjZWxldFtpXVswXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVsxXSAvIDkpICYmXG4gICAgICAgICAgICAgICAgICAgIGZbVXRpbC5FZGdlRmFjZWxldFtpXVsxXV0gPT0gfn4oVXRpbC5FZGdlRmFjZWxldFtqXVswXSAvIDkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWFbaV0gPSAoaiA8PCAxKSB8IDE7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVtcCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5DdWJpZUN1YmUuU3ltQ3ViZSA9IFtdO1xuQ3ViaWVDdWJlLk1vdmVDdWJlID0gW107XG5DdWJpZUN1YmUuTW92ZUN1YmVTeW0gPSBbXTtcbkN1YmllQ3ViZS5GaXJzdE1vdmVTeW0gPSBbXTtcbkN1YmllQ3ViZS5TeW1NdWx0ID0gW107XG5DdWJpZUN1YmUuU3ltTXVsdEludiA9IFtdO1xuQ3ViaWVDdWJlLlN5bU1vdmUgPSBbXTtcbkN1YmllQ3ViZS5TeW04TW92ZSA9IFtdO1xuQ3ViaWVDdWJlLlN5bU1vdmVVRCA9IFtdO1xuQ3ViaWVDdWJlLkZsaXBTMlIgPSBbXTtcbkN1YmllQ3ViZS5Ud2lzdFMyUiA9IFtdO1xuQ3ViaWVDdWJlLkVQZXJtUzJSID0gW107XG5DdWJpZUN1YmUuUGVybTJDb21iUCA9IFtdO1xuQ3ViaWVDdWJlLlBlcm1JbnZFZGdlU3ltID0gW107XG5DdWJpZUN1YmUuTVBlcm1JbnYgPSBbXTtcbkN1YmllQ3ViZS5TWU1fRTJDX01BR0lDID0gMHgwMGRkZGQwMDtcbkN1YmllQ3ViZS5GbGlwUjJTID0gW107XG5DdWJpZUN1YmUuVHdpc3RSMlMgPSBbXTtcbkN1YmllQ3ViZS5FUGVybVIyUyA9IFtdO1xuQ3ViaWVDdWJlLlN5bVN0YXRlVHdpc3QgPSBbXTtcbkN1YmllQ3ViZS5TeW1TdGF0ZUZsaXAgPSBbXTtcbkN1YmllQ3ViZS5TeW1TdGF0ZVBlcm0gPSBbXTtcbkN1YmllQ3ViZS5VUkYxID0gbmV3IEN1YmllQ3ViZSgyNTMxLCAxMzczLCA2NzAyNjgxOSwgMTM2Nyk7XG5DdWJpZUN1YmUuVVJGMiA9IG5ldyBDdWJpZUN1YmUoMjA4OSwgMTkwNiwgMzIyNzUyOTEzLCAyMDQwKTtcbkN1YmllQ3ViZS5VUkZNb3ZlID0gW1xuICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTddLFxuICAgIFs2LCA3LCA4LCAwLCAxLCAyLCAzLCA0LCA1LCAxNSwgMTYsIDE3LCA5LCAxMCwgMTEsIDEyLCAxMywgMTRdLFxuICAgIFszLCA0LCA1LCA2LCA3LCA4LCAwLCAxLCAyLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCA5LCAxMCwgMTFdLFxuICAgIFsyLCAxLCAwLCA1LCA0LCAzLCA4LCA3LCA2LCAxMSwgMTAsIDksIDE0LCAxMywgMTIsIDE3LCAxNiwgMTVdLFxuICAgIFs4LCA3LCA2LCAyLCAxLCAwLCA1LCA0LCAzLCAxNywgMTYsIDE1LCAxMSwgMTAsIDksIDE0LCAxMywgMTJdLFxuICAgIFs1LCA0LCAzLCA4LCA3LCA2LCAyLCAxLCAwLCAxNCwgMTMsIDEyLCAxNywgMTYsIDE1LCAxMSwgMTAsIDldLFxuXTtcbiIsImltcG9ydCBDdWJpZUN1YmUgZnJvbSBcIi4vQ3ViaWVDdWJlXCI7XG5pbXBvcnQgQ29vcmRDdWJlIGZyb20gXCIuL0Nvb3JkQ3ViZVwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vVXRpbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29sdmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZW5ndGgxID0gMDtcbiAgICAgICAgdGhpcy51cmZJZHggPSAwO1xuICAgICAgICB0aGlzLmRlcHRoMSA9IDA7XG4gICAgICAgIEN1YmllQ3ViZS5Jbml0KCk7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0KCk7XG4gICAgICAgIHRoaXMubW92ZSA9IFtdO1xuICAgICAgICB0aGlzLm1vdmVTb2wgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlVUQgPSBbXTtcbiAgICAgICAgdGhpcy52YWxpZDEgPSAwO1xuICAgICAgICB0aGlzLmFsbG93U2hvcnRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNjID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICB0aGlzLnVyZkN1YmllQ3ViZSA9IFtdO1xuICAgICAgICB0aGlzLnVyZkNvb3JkQ3ViZSA9IFtdO1xuICAgICAgICB0aGlzLnBoYXNlMUN1YmllID0gW107XG4gICAgICAgIHRoaXMucHJlTW92ZUN1YmVzID0gW107XG4gICAgICAgIHRoaXMucHJlTW92ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVNb3ZlTGVuID0gMDtcbiAgICAgICAgdGhpcy5tYXhQcmVNb3ZlcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ub2RlVURbaV0gPSBuZXcgQ29vcmRDdWJlKCk7XG4gICAgICAgICAgICB0aGlzLnBoYXNlMUN1YmllW2ldID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnVyZkN1YmllQ3ViZVtpXSA9IG5ldyBDdWJpZUN1YmUoKTtcbiAgICAgICAgICAgIHRoaXMudXJmQ29vcmRDdWJlW2ldID0gbmV3IENvb3JkQ3ViZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU29sdmVyLk1BWF9QUkVfTU9WRVM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcmVNb3ZlQ3ViZXNbaSArIDFdID0gbmV3IEN1YmllQ3ViZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIENvb3JkQ3ViZS5Jbml0KCk7XG4gICAgfVxuICAgIHNvbHZlKGZhY2VsZXRzKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jYy5kZXNlcmlhbGl6ZShmYWNlbGV0cyk7XG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yOiBpbnZhbGlkIGN1YmVcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ZXJpZnkgPSB0aGlzLmNjLnZlcmlmeSgpO1xuICAgICAgICBpZiAodmVyaWZ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yOiBcIiArIHZlcmlmeTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvbCA9IDIyO1xuICAgICAgICB0aGlzLm1vdmVTb2wgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRTZWFyY2goKTtcbiAgICAgICAgY29uc3Qgc29sdXRpb24gPSB0aGlzLnNlYXJjaCgpO1xuICAgICAgICByZXR1cm4gXCJncmVhdFwiO1xuICAgIH1cbiAgICBpbml0U2VhcmNoKCkge1xuICAgICAgICB0aGlzLmNvbmpNYXNrID0gKFNvbHZlci5UUllfSU5WRVJTRSA/IDAgOiAweDM4KSB8IChTb2x2ZXIuVFJZX1RIUkVFX0FYRVMgPyAwIDogMHgzNik7XG4gICAgICAgIHRoaXMubWF4UHJlTW92ZXMgPSB0aGlzLmNvbmpNYXNrID4gNyA/IDAgOiBTb2x2ZXIuTUFYX1BSRV9NT1ZFUztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudXJmQ3ViaWVDdWJlW2ldLmNvcHkodGhpcy5jYyk7XG4gICAgICAgICAgICB0aGlzLnVyZkNvb3JkQ3ViZVtpXS5zZXRXaXRoUHJ1bih0aGlzLnVyZkN1YmllQ3ViZVtpXSwgMjApO1xuICAgICAgICAgICAgdGhpcy5jYy5VUkZDb25qdWdhdGUoKTtcbiAgICAgICAgICAgIGlmIChpICUgMyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYy5pbnZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VhcmNoKCkge1xuICAgICAgICBmb3IgKHRoaXMubGVuZ3RoMSA9IDA7IHRoaXMubGVuZ3RoMSA8IHRoaXMuc29sOyB0aGlzLmxlbmd0aDErKykge1xuICAgICAgICAgICAgZm9yICh0aGlzLnVyZklkeCA9IDA7IHRoaXMudXJmSWR4IDwgNjsgdGhpcy51cmZJZHgrKykge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5jb25qTWFzayAmICgxIDw8IHRoaXMudXJmSWR4KSkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGhhc2UxUHJlTW92ZXModGhpcy5tYXhQcmVNb3ZlcywgLTMwLCB0aGlzLnVyZkN1YmllQ3ViZVt0aGlzLnVyZklkeF0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZVNvbCA9PSBudWxsID8gXCJlcnJvcjogbm8gc29sdXRpb24gZm9yIHByb2JcIiA6IHRoaXMuZ2V0U29sdXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZVNvbCA9PSBudWxsID8gXCJlcnJvcjogbm8gc29sdXRpb24gZm9yIGRlcHRoXCIgOiB0aGlzLmdldFNvbHV0aW9uKCk7XG4gICAgfVxuICAgIGdldFNvbHV0aW9uKCkge1xuICAgICAgICBsZXQgcmV0ID0gXCJcIjtcbiAgICAgICAgaWYgKCF0aGlzLm1vdmVTb2wpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJmID0gdGhpcy51cmZJZHg7XG4gICAgICAgIGlmICh1cmYgPCAzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IHRoaXMubW92ZVNvbC5sZW5ndGg7ICsrcykge1xuICAgICAgICAgICAgICAgIHJldCArPSBVdGlsLk1PVkUyU1RSW0N1YmllQ3ViZS5VUkZNb3ZlW3VyZl1bdGhpcy5tb3ZlU29sW3NdXV0gKyBcIiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHMgPSB0aGlzLm1vdmVTb2wubGVuZ3RoIC0gMTsgcyA+PSAwOyAtLXMpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gVXRpbC5NT1ZFMlNUUltDdWJpZUN1YmUuVVJGTW92ZVt1cmZdW3RoaXMubW92ZVNvbFtzXV1dICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcGhhc2UxUHJlTW92ZXMobWF4bCwgbG0sIGNjKSB7XG4gICAgICAgIHRoaXMucHJlTW92ZUxlbiA9IHRoaXMubWF4UHJlTW92ZXMgLSBtYXhsO1xuICAgICAgICBpZiAodGhpcy5wcmVNb3ZlTGVuID09IDAgfHwgKCgweDM2ZmI3ID4+IGxtKSAmIDEpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVwdGgxID0gdGhpcy5sZW5ndGgxIC0gdGhpcy5wcmVNb3ZlTGVuO1xuICAgICAgICAgICAgdGhpcy5waGFzZTFDdWJpZVswXS5jb3B5KGNjKTtcbiAgICAgICAgICAgIHRoaXMuYWxsb3dTaG9ydGVyID0gdGhpcy5kZXB0aDEgPT0gU29sdmVyLk1JTl9QMUxFTkdUSF9QUkUgJiYgdGhpcy5wcmVNb3ZlTGVuICE9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlVURbdGhpcy5kZXB0aDEgKyAxXS5zZXRXaXRoUHJ1bihjYywgdGhpcy5kZXB0aDEpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZTEodGhpcy5ub2RlVURbdGhpcy5kZXB0aDEgKyAxXSwgdGhpcy5kZXB0aDEsIC0xKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heGwgPT0gMCB8fCB0aGlzLnByZU1vdmVMZW4gKyBTb2x2ZXIuTUlOX1AxTEVOR1RIX1BSRSA+PSB0aGlzLmxlbmd0aDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGxldCBza2lwTW92ZXMgPSAwO1xuICAgICAgICBpZiAobWF4bCA9PSAxIHx8IHRoaXMucHJlTW92ZUxlbiArIDEgKyBTb2x2ZXIuTUlOX1AxTEVOR1RIX1BSRSA+PSB0aGlzLmxlbmd0aDEpIHtcbiAgICAgICAgICAgIHNraXBNb3ZlcyB8PSAweDM2ZmI3O1xuICAgICAgICB9XG4gICAgICAgIGxtID0gfn4obG0gLyAzKSAqIDM7XG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgMTg7IG0rKykge1xuICAgICAgICAgICAgaWYgKG0gPT0gbG0gfHwgbSA9PSBsbSAtIDkgfHwgbSA9PSBsbSArIDkpIHtcbiAgICAgICAgICAgICAgICBtICs9IDI7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHNraXBNb3ZlcyAmICgxIDw8IG0pKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDdWJpZUN1YmUuQ29ybk11bHQoQ3ViaWVDdWJlLk1vdmVDdWJlW21dLCBjYywgdGhpcy5wcmVNb3ZlQ3ViZXNbbWF4bF0pO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KEN1YmllQ3ViZS5Nb3ZlQ3ViZVttXSwgY2MsIHRoaXMucHJlTW92ZUN1YmVzW21heGxdKTtcbiAgICAgICAgICAgIHRoaXMucHJlTW92ZXNbdGhpcy5tYXhQcmVNb3ZlcyAtIG1heGxdID0gbTtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHRoaXMucGhhc2UxUHJlTW92ZXMobWF4bCAtIDEsIG0sIHRoaXMucHJlTW92ZUN1YmVzW21heGxdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBwaGFzZTEobm9kZSwgbWF4bCwgbG0pIHtcbiAgICAgICAgaWYgKG5vZGUucHJ1biA9PSAwICYmIG1heGwgPCA1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd1Nob3J0ZXIgfHwgbWF4bCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXB0aDEgLT0gbWF4bDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLmluaXRQaGFzZTJQcmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlcHRoMSArPSBtYXhsO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBheGlzID0gMDsgYXhpcyA8IDE4OyBheGlzICs9IDMpIHtcbiAgICAgICAgICAgIGlmIChheGlzID09IGxtIHx8IGF4aXMgPT0gbG0gLSA5KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwb3dlciA9IDA7IHBvd2VyIDwgMzsgcG93ZXIrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBheGlzICsgcG93ZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJ1biA9IHRoaXMubm9kZVVEW21heGxdLmRvTW92ZVBydW4obm9kZSwgbSk7XG4gICAgICAgICAgICAgICAgaWYgKHBydW4gPiBtYXhsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcnVuID09IG1heGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVt0aGlzLmRlcHRoMSAtIG1heGxdID0gbTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkMSA9IE1hdGgubWluKHRoaXMudmFsaWQxLCB0aGlzLmRlcHRoMSAtIG1heGwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHRoaXMucGhhc2UxKHRoaXMubm9kZVVEW21heGxdLCBtYXhsIC0gMSwgYXhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJldCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGluaXRQaGFzZTJQcmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnZhbGlkMTsgaSA8IHRoaXMuZGVwdGgxOyBpKyspIHtcbiAgICAgICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdCh0aGlzLnBoYXNlMUN1YmllW2ldLCBDdWJpZUN1YmUuTW92ZUN1YmVbdGhpcy5tb3ZlW2ldXSwgdGhpcy5waGFzZTFDdWJpZVtpICsgMV0pO1xuICAgICAgICAgICAgQ3ViaWVDdWJlLkVkZ2VNdWx0KHRoaXMucGhhc2UxQ3ViaWVbaV0sIEN1YmllQ3ViZS5Nb3ZlQ3ViZVt0aGlzLm1vdmVbaV1dLCB0aGlzLnBoYXNlMUN1YmllW2kgKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZDEgPSB0aGlzLmRlcHRoMTtcbiAgICAgICAgbGV0IHJldCA9IHRoaXMuaW5pdFBoYXNlMih0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxXSk7XG4gICAgICAgIGlmIChyZXQgPT0gMCB8fCB0aGlzLnByZU1vdmVMZW4gPT0gMCB8fCByZXQgPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gfn4odGhpcy5wcmVNb3Zlc1t0aGlzLnByZU1vdmVMZW4gLSAxXSAvIDMpICogMyArIDE7XG4gICAgICAgIEN1YmllQ3ViZS5Db3JuTXVsdChDdWJpZUN1YmUuTW92ZUN1YmVbbV0sIHRoaXMucGhhc2UxQ3ViaWVbdGhpcy5kZXB0aDFdLCB0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxICsgMV0pO1xuICAgICAgICBDdWJpZUN1YmUuRWRnZU11bHQoQ3ViaWVDdWJlLk1vdmVDdWJlW21dLCB0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxXSwgdGhpcy5waGFzZTFDdWJpZVt0aGlzLmRlcHRoMSArIDFdKTtcbiAgICAgICAgdGhpcy5wcmVNb3Zlc1t0aGlzLnByZU1vdmVMZW4gLSAxXSArPSAyIC0gKHRoaXMucHJlTW92ZXNbdGhpcy5wcmVNb3ZlTGVuIC0gMV0gJSAzKSAqIDI7XG4gICAgICAgIHJldCA9IHRoaXMuaW5pdFBoYXNlMih0aGlzLnBoYXNlMUN1YmllW3RoaXMuZGVwdGgxICsgMV0pO1xuICAgICAgICB0aGlzLnByZU1vdmVzW3RoaXMucHJlTW92ZUxlbiAtIDFdICs9IDIgLSAodGhpcy5wcmVNb3Zlc1t0aGlzLnByZU1vdmVMZW4gLSAxXSAlIDMpICogMjtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgaW5pdFBoYXNlMihwaGFzZTJDdWJpZSkge1xuICAgICAgICBsZXQgcDJjb3JuID0gcGhhc2UyQ3ViaWUuQ1Blcm1TeW07XG4gICAgICAgIGNvbnN0IHAyY3N5bSA9IHAyY29ybiAmIDB4ZjtcbiAgICAgICAgcDJjb3JuID4+PSA0O1xuICAgICAgICBsZXQgcDJlZGdlID0gcGhhc2UyQ3ViaWUuRVBlcm1TeW07XG4gICAgICAgIGNvbnN0IHAyZXN5bSA9IHAyZWRnZSAmIDB4ZjtcbiAgICAgICAgcDJlZGdlID4+PSA0O1xuICAgICAgICBjb25zdCBwMm1pZCA9IHBoYXNlMkN1YmllLk1QZXJtO1xuICAgICAgICBjb25zdCBwMmVkZ2VpID0gQ3ViaWVDdWJlLkdldFBlcm1TeW1JbnYocDJlZGdlLCBwMmVzeW0sIGZhbHNlKTtcbiAgICAgICAgY29uc3QgcDJjb3JuaSA9IEN1YmllQ3ViZS5HZXRQZXJtU3ltSW52KHAyY29ybiwgcDJjc3ltLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcHJ1biA9IE1hdGgubWF4KENvb3JkQ3ViZS5HZXRQcnVuaW5nKENvb3JkQ3ViZS5NQ1Blcm1QcnVuLCBwMmNvcm4gKiBDb29yZEN1YmUuTl9NUEVSTSArIENvb3JkQ3ViZS5NUGVybUNvbmpbcDJtaWRdW3AyY3N5bV0pLCBDb29yZEN1YmUuR2V0UHJ1bmluZyhDb29yZEN1YmUuRVBlcm1DQ29tYlBQcnVuLCBwMmVkZ2UgKiBDb29yZEN1YmUuTl9DT01CICtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DQ29tYlBDb25qW0N1YmllQ3ViZS5QZXJtMkNvbWJQW3AyY29ybl0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltwMmVzeW1dW3AyY3N5bV1dKSwgQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biwgKHAyZWRnZWkgPj4gNCkgKiBDb29yZEN1YmUuTl9DT01CICtcbiAgICAgICAgICAgIENvb3JkQ3ViZS5DQ29tYlBDb25qW0N1YmllQ3ViZS5QZXJtMkNvbWJQW3AyY29ybmkgPj4gNF0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltwMmVkZ2VpICYgMHhmXVtwMmNvcm5pICYgMHhmXV0pKTtcbiAgICAgICAgY29uc3QgbWF4RGVwMiA9IE1hdGgubWluKFNvbHZlci5NQVhfREVQVEgyLCB0aGlzLnNvbCAtIHRoaXMubGVuZ3RoMSk7XG4gICAgICAgIGlmIChwcnVuID49IG1heERlcDIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcnVuID4gbWF4RGVwMiA/IDIgOiAxO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZXB0aDI7XG4gICAgICAgIGZvciAoZGVwdGgyID0gbWF4RGVwMiAtIDE7IGRlcHRoMiA+PSBwcnVuOyBkZXB0aDItLSkge1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5waGFzZTIocDJlZGdlLCBwMmVzeW0sIHAyY29ybiwgcDJjc3ltLCBwMm1pZCwgZGVwdGgyLCB0aGlzLmRlcHRoMSwgMTApO1xuICAgICAgICAgICAgaWYgKHJldCA8IDApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcHRoMiAtPSByZXQ7XG4gICAgICAgICAgICB0aGlzLm1vdmVTb2wgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZXB0aDEgKyBkZXB0aDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kU29sTW92ZSh0aGlzLm1vdmVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMucHJlTW92ZUxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTb2xNb3ZlKHRoaXMucHJlTW92ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zb2wgPSB0aGlzLm1vdmVTb2wubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXB0aDIgIT0gbWF4RGVwMiAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwZW5kU29sTW92ZShtb3ZlKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZlU29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92ZVNvbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU29sLnB1c2gobW92ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXhpc0N1ciA9IH5+KG1vdmUgLyAzKTtcbiAgICAgICAgY29uc3QgYXhpc0xhc3QgPSB+fih0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDFdIC8gMyk7XG4gICAgICAgIGlmIChheGlzQ3VyID09IGF4aXNMYXN0KSB7XG4gICAgICAgICAgICBjb25zdCBwb3cgPSAoKG1vdmUgJSAzKSArICh0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDFdICUgMykgKyAxKSAlIDQ7XG4gICAgICAgICAgICBpZiAocG93ID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2wucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDFdID0gYXhpc0N1ciAqIDMgKyBwb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92ZVNvbC5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICBheGlzQ3VyICUgMyA9PSBheGlzTGFzdCAlIDMgJiZcbiAgICAgICAgICAgIGF4aXNDdXIgPT0gfn4odGhpcy5tb3ZlU29sW3RoaXMubW92ZVNvbC5sZW5ndGggLSAyXSAvIDMpKSB7XG4gICAgICAgICAgICBjb25zdCBwb3cgPSAoKG1vdmUgJSAzKSArICh0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDJdICUgMykgKyAxKSAlIDQ7XG4gICAgICAgICAgICBpZiAocG93ID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDJdID0gdGhpcy5tb3ZlU29sW3RoaXMubW92ZVNvbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2wucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb2xbdGhpcy5tb3ZlU29sLmxlbmd0aCAtIDJdID0gYXhpc0N1ciAqIDMgKyBwb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlU29sLnB1c2gobW92ZSk7XG4gICAgfVxuICAgIHBoYXNlMihlZGdlLCBlc3ltLCBjb3JuLCBjc3ltLCBtaWQsIG1heGwsIGRlcHRoLCBsbSkge1xuICAgICAgICBpZiAoZWRnZSA9PSAwICYmIGNvcm4gPT0gMCAmJiBtaWQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW92ZU1hc2sgPSBVdGlsLkNLTVYyQklUW2xtXTtcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCAxMDsgbSsrKSB7XG4gICAgICAgICAgICBpZiAoKChtb3ZlTWFzayA+PiBtKSAmIDEpICE9IDApIHtcbiAgICAgICAgICAgICAgICBtICs9ICgweDQyID4+IG0pICYgMztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1pZHggPSBDb29yZEN1YmUuTVBlcm1Nb3ZlW21pZF1bbV07XG4gICAgICAgICAgICBsZXQgY29ybnggPSBDb29yZEN1YmUuQ1Blcm1Nb3ZlW2Nvcm5dW0N1YmllQ3ViZS5TeW1Nb3ZlVURbY3N5bV1bbV1dO1xuICAgICAgICAgICAgY29uc3QgY3N5bXggPSBDdWJpZUN1YmUuU3ltTXVsdFtjb3JueCAmIDB4Zl1bY3N5bV07XG4gICAgICAgICAgICBjb3JueCA+Pj0gNDtcbiAgICAgICAgICAgIGxldCBlZGdleCA9IENvb3JkQ3ViZS5FUGVybU1vdmVbZWRnZV1bQ3ViaWVDdWJlLlN5bU1vdmVVRFtlc3ltXVttXV07XG4gICAgICAgICAgICBjb25zdCBlc3lteCA9IEN1YmllQ3ViZS5TeW1NdWx0W2VkZ2V4ICYgMHhmXVtlc3ltXTtcbiAgICAgICAgICAgIGVkZ2V4ID4+PSA0O1xuICAgICAgICAgICAgY29uc3QgZWRnZWkgPSBDdWJpZUN1YmUuR2V0UGVybVN5bUludihlZGdleCwgZXN5bXgsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5pID0gQ3ViaWVDdWJlLkdldFBlcm1TeW1JbnYoY29ybngsIGNzeW14LCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBwcnVuID0gQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biwgKGVkZ2VpID4+IDQpICogQ29vcmRDdWJlLk5fQ09NQiArXG4gICAgICAgICAgICAgICAgQ29vcmRDdWJlLkNDb21iUENvbmpbQ3ViaWVDdWJlLlBlcm0yQ29tYlBbY29ybmkgPj4gNF0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltlZGdlaSAmIDB4Zl1bY29ybmkgJiAweGZdXSk7XG4gICAgICAgICAgICBpZiAocHJ1biA+IG1heGwgKyAxKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcnVuID49IG1heGwpIHtcbiAgICAgICAgICAgICAgICBtICs9ICgweDQyID4+IG0pICYgMyAmIChtYXhsIC0gcHJ1bik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcnVuID0gTWF0aC5tYXgoQ29vcmRDdWJlLkdldFBydW5pbmcoQ29vcmRDdWJlLkVQZXJtQ0NvbWJQUHJ1biwgZWRnZXggKiBDb29yZEN1YmUuTl9DT01CICtcbiAgICAgICAgICAgICAgICBDb29yZEN1YmUuQ0NvbWJQQ29ualtDdWJpZUN1YmUuUGVybTJDb21iUFtjb3JueF0gJiAweGZmXVtDdWJpZUN1YmUuU3ltTXVsdEludltlc3lteF1bY3N5bXhdXSksIENvb3JkQ3ViZS5HZXRQcnVuaW5nKENvb3JkQ3ViZS5NQ1Blcm1QcnVuLCBjb3JueCAqIENvb3JkQ3ViZS5OX01QRVJNICsgQ29vcmRDdWJlLk1QZXJtQ29ualttaWR4XVtjc3lteF0pKTtcbiAgICAgICAgICAgIGlmIChwcnVuID49IG1heGwpIHtcbiAgICAgICAgICAgICAgICBtICs9ICgweDQyID4+IG0pICYgMyAmIChtYXhsIC0gcHJ1bik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLnBoYXNlMihlZGdleCwgZXN5bXgsIGNvcm54LCBjc3lteCwgbWlkeCwgbWF4bCAtIDEsIGRlcHRoICsgMSwgbSk7XG4gICAgICAgICAgICBpZiAocmV0ID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVbZGVwdGhdID0gVXRpbC5VRDJTVERbbV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufVxuU29sdmVyLk1BWF9QUkVfTU9WRVMgPSAyMDtcblNvbHZlci5UUllfSU5WRVJTRSA9IHRydWU7XG5Tb2x2ZXIuVFJZX1RIUkVFX0FYRVMgPSB0cnVlO1xuU29sdmVyLk1JTl9QMUxFTkdUSF9QUkUgPSA3O1xuU29sdmVyLk1BWF9ERVBUSDIgPSAxMztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuICAgIHN0YXRpYyBHZXROUGFyaXR5KGlkeCwgbikge1xuICAgICAgICBsZXQgcCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBuIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHAgXj0gaWR4ICUgKG4gLSBpKTtcbiAgICAgICAgICAgIGlkeCA9IH5+KGlkeCAvIChuIC0gaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwICYgMTtcbiAgICB9XG4gICAgc3RhdGljIFNldFZhbChzcmMsIGRzdCwgZWRnZSkge1xuICAgICAgICByZXR1cm4gZWRnZSA/IChkc3QgPDwgMSkgfCAoc3JjICYgMSkgOiBkc3QgfCAoc3JjICYgMHhmOCk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRWYWwoc3JjLCBlZGdlKSB7XG4gICAgICAgIHJldHVybiBlZGdlID8gc3JjID4+IDEgOiBzcmMgJiA3O1xuICAgIH1cbiAgICBzdGF0aWMgU2V0TlBlcm0oYXJyLCBpZHgsIG4sIGVkZ2UpIHtcbiAgICAgICAgbi0tO1xuICAgICAgICBsZXQgdmFsID0gMHg3NjU0MzIxMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBVdGlsLkZhY3RbbiAtIGldO1xuICAgICAgICAgICAgbGV0IHYgPSB+fihpZHggLyBwKTtcbiAgICAgICAgICAgIGlkeCAlPSBwO1xuICAgICAgICAgICAgdiA8PD0gMjtcbiAgICAgICAgICAgIGFycltpXSA9IFV0aWwuU2V0VmFsKGFycltpXSwgKHZhbCA+PiB2KSAmIDB4ZiwgZWRnZSk7XG4gICAgICAgICAgICBjb25zdCBtID0gKDEgPDwgdikgLSAxO1xuICAgICAgICAgICAgdmFsID0gKHZhbCAmIG0pICsgKCh2YWwgPj4gNCkgJiB+bSk7XG4gICAgICAgIH1cbiAgICAgICAgYXJyW25dID0gVXRpbC5TZXRWYWwoYXJyW25dLCB2YWwgJiAweGYsIGVkZ2UpO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0TlBlcm0oYXJyLCBuLCBlZGdlKSB7XG4gICAgICAgIGxldCBpZHggPSAwLCB2YWwgPSAweDc2NTQzMjEwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBVdGlsLkdldFZhbChhcnJbaV0sIGVkZ2UpIDw8IDI7XG4gICAgICAgICAgICBpZHggPSAobiAtIGkpICogaWR4ICsgKCh2YWwgPj4gdikgJiAweGYpO1xuICAgICAgICAgICAgdmFsIC09IDB4MTExMTExMTAgPDwgdjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgICBzdGF0aWMgU2V0TlBlcm1GdWxsKGFyciwgaWR4LCBuLCBlZGdlKSB7XG4gICAgICAgIGFycltuIC0gMV0gPSBVdGlsLlNldFZhbChhcnJbbiAtIDFdLCAwLCBlZGdlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG4gLSAyOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgYXJyW2ldID0gVXRpbC5TZXRWYWwoYXJyW2ldLCBpZHggJSAobiAtIGkpLCBlZGdlKTtcbiAgICAgICAgICAgIGlkeCA9IH5+KGlkeCAvIChuIC0gaSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbjsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuR2V0VmFsKGFycltqXSwgZWRnZSkgPj0gVXRpbC5HZXRWYWwoYXJyW2ldLCBlZGdlKSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJbal0gPSBVdGlsLlNldFZhbChhcnJbal0sIFV0aWwuR2V0VmFsKGFycltqXSwgZWRnZSkgKyAxLCBlZGdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldE5QZXJtRnVsbChhcnIsIG4sIGVkZ2UpIHtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBpZHggKj0gbiAtIGk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5HZXRWYWwoYXJyW2pdLCBlZGdlKSA8IFV0aWwuR2V0VmFsKGFycltpXSwgZWRnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytpZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb21iKGFyciwgbWFzaywgZWRnZSkge1xuICAgICAgICBjb25zdCBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHZhbHVlID0gMCwgciA9IDQ7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbmQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBwZXJtID0gVXRpbC5HZXRWYWwoYXJyW2ldLCBlZGdlKTtcbiAgICAgICAgICAgIGlmICgocGVybSAmIDB4YykgPT0gbWFzaykge1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IFV0aWwuQ25rW2ldW3ItLV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgU2V0Q29tYihhcnIsIHZhbHVlLCBtYXNrLCBlZGdlKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgciA9IDQsIGZpbGwgPSBlbmQ7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbmQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gVXRpbC5DbmtbaV1bcl0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSAtPSBVdGlsLkNua1tpXVtyLS1dO1xuICAgICAgICAgICAgICAgIGFycltpXSA9IFV0aWwuU2V0VmFsKGFycltpXSwgciB8IG1hc2ssIGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChmaWxsICYgMHhjKSA9PSBtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGwgLT0gNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyW2ldID0gVXRpbC5TZXRWYWwoYXJyW2ldLCBmaWxsLS0sIGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuVXRpbC5VeDEgPSAwO1xuVXRpbC5VeDIgPSAxO1xuVXRpbC5VeDMgPSAyO1xuVXRpbC5SeDEgPSAzO1xuVXRpbC5SeDIgPSA0O1xuVXRpbC5SeDMgPSA1O1xuVXRpbC5GeDEgPSA2O1xuVXRpbC5GeDIgPSA3O1xuVXRpbC5GeDMgPSA4O1xuVXRpbC5EeDEgPSA5O1xuVXRpbC5EeDIgPSAxMDtcblV0aWwuRHgzID0gMTE7XG5VdGlsLkx4MSA9IDEyO1xuVXRpbC5MeDIgPSAxMztcblV0aWwuTHgzID0gMTQ7XG5VdGlsLkJ4MSA9IDE1O1xuVXRpbC5CeDIgPSAxNjtcblV0aWwuQngzID0gMTc7XG5VdGlsLlUxID0gMDtcblV0aWwuVTIgPSAxO1xuVXRpbC5VMyA9IDI7XG5VdGlsLlU0ID0gMztcblV0aWwuVTUgPSA0O1xuVXRpbC5VNiA9IDU7XG5VdGlsLlU3ID0gNjtcblV0aWwuVTggPSA3O1xuVXRpbC5VOSA9IDg7XG5VdGlsLlIxID0gOTtcblV0aWwuUjIgPSAxMDtcblV0aWwuUjMgPSAxMTtcblV0aWwuUjQgPSAxMjtcblV0aWwuUjUgPSAxMztcblV0aWwuUjYgPSAxNDtcblV0aWwuUjcgPSAxNTtcblV0aWwuUjggPSAxNjtcblV0aWwuUjkgPSAxNztcblV0aWwuRjEgPSAxODtcblV0aWwuRjIgPSAxOTtcblV0aWwuRjMgPSAyMDtcblV0aWwuRjQgPSAyMTtcblV0aWwuRjUgPSAyMjtcblV0aWwuRjYgPSAyMztcblV0aWwuRjcgPSAyNDtcblV0aWwuRjggPSAyNTtcblV0aWwuRjkgPSAyNjtcblV0aWwuRDEgPSAyNztcblV0aWwuRDIgPSAyODtcblV0aWwuRDMgPSAyOTtcblV0aWwuRDQgPSAzMDtcblV0aWwuRDUgPSAzMTtcblV0aWwuRDYgPSAzMjtcblV0aWwuRDcgPSAzMztcblV0aWwuRDggPSAzNDtcblV0aWwuRDkgPSAzNTtcblV0aWwuTDEgPSAzNjtcblV0aWwuTDIgPSAzNztcblV0aWwuTDMgPSAzODtcblV0aWwuTDQgPSAzOTtcblV0aWwuTDUgPSA0MDtcblV0aWwuTDYgPSA0MTtcblV0aWwuTDcgPSA0MjtcblV0aWwuTDggPSA0MztcblV0aWwuTDkgPSA0NDtcblV0aWwuQjEgPSA0NTtcblV0aWwuQjIgPSA0NjtcblV0aWwuQjMgPSA0NztcblV0aWwuQjQgPSA0ODtcblV0aWwuQjUgPSA0OTtcblV0aWwuQjYgPSA1MDtcblV0aWwuQjcgPSA1MTtcblV0aWwuQjggPSA1MjtcblV0aWwuQjkgPSA1MztcblV0aWwuVSA9IDA7XG5VdGlsLlIgPSAxO1xuVXRpbC5GID0gMjtcblV0aWwuRCA9IDM7XG5VdGlsLkwgPSA0O1xuVXRpbC5CID0gNTtcblV0aWwuQ29ybmVyRmFjZWxldCA9IFtcbiAgICBbVXRpbC5VOSwgVXRpbC5SMSwgVXRpbC5GM10sXG4gICAgW1V0aWwuVTcsIFV0aWwuRjEsIFV0aWwuTDNdLFxuICAgIFtVdGlsLlUxLCBVdGlsLkwxLCBVdGlsLkIzXSxcbiAgICBbVXRpbC5VMywgVXRpbC5CMSwgVXRpbC5SM10sXG4gICAgW1V0aWwuRDMsIFV0aWwuRjksIFV0aWwuUjddLFxuICAgIFtVdGlsLkQxLCBVdGlsLkw5LCBVdGlsLkY3XSxcbiAgICBbVXRpbC5ENywgVXRpbC5COSwgVXRpbC5MN10sXG4gICAgW1V0aWwuRDksIFV0aWwuUjksIFV0aWwuQjddLFxuXTtcblV0aWwuRWRnZUZhY2VsZXQgPSBbXG4gICAgW1V0aWwuVTYsIFV0aWwuUjJdLFxuICAgIFtVdGlsLlU4LCBVdGlsLkYyXSxcbiAgICBbVXRpbC5VNCwgVXRpbC5MMl0sXG4gICAgW1V0aWwuVTIsIFV0aWwuQjJdLFxuICAgIFtVdGlsLkQ2LCBVdGlsLlI4XSxcbiAgICBbVXRpbC5EMiwgVXRpbC5GOF0sXG4gICAgW1V0aWwuRDQsIFV0aWwuTDhdLFxuICAgIFtVdGlsLkQ4LCBVdGlsLkI4XSxcbiAgICBbVXRpbC5GNiwgVXRpbC5SNF0sXG4gICAgW1V0aWwuRjQsIFV0aWwuTDZdLFxuICAgIFtVdGlsLkI2LCBVdGlsLkw0XSxcbiAgICBbVXRpbC5CNCwgVXRpbC5SNl0sXG5dO1xuVXRpbC5NT1ZFMlNUUiA9IFtcbiAgICBcIlUgXCIsXG4gICAgXCJVMlwiLFxuICAgIFwiVSdcIixcbiAgICBcIlIgXCIsXG4gICAgXCJSMlwiLFxuICAgIFwiUidcIixcbiAgICBcIkYgXCIsXG4gICAgXCJGMlwiLFxuICAgIFwiRidcIixcbiAgICBcIkQgXCIsXG4gICAgXCJEMlwiLFxuICAgIFwiRCdcIixcbiAgICBcIkwgXCIsXG4gICAgXCJMMlwiLFxuICAgIFwiTCdcIixcbiAgICBcIkIgXCIsXG4gICAgXCJCMlwiLFxuICAgIFwiQidcIixcbl07XG5VdGlsLlVEMlNURCA9IFtcbiAgICBVdGlsLlV4MSxcbiAgICBVdGlsLlV4MixcbiAgICBVdGlsLlV4MyxcbiAgICBVdGlsLlJ4MixcbiAgICBVdGlsLkZ4MixcbiAgICBVdGlsLkR4MSxcbiAgICBVdGlsLkR4MixcbiAgICBVdGlsLkR4MyxcbiAgICBVdGlsLkx4MixcbiAgICBVdGlsLkJ4MixcbiAgICBVdGlsLlJ4MSxcbiAgICBVdGlsLlJ4MyxcbiAgICBVdGlsLkZ4MSxcbiAgICBVdGlsLkZ4MyxcbiAgICBVdGlsLkx4MSxcbiAgICBVdGlsLkx4MyxcbiAgICBVdGlsLkJ4MSxcbiAgICBVdGlsLkJ4Myxcbl07XG5VdGlsLlNURDJVRCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtVdGlsLlVEMlNURFtpXV0gPSBpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSkoKTtcblV0aWwuQ0tNVjJCSVQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBjb25zdCBpeCA9IH5+KFV0aWwuVUQyU1REW2ldIC8gMyk7XG4gICAgICAgIHJlc3VsdFtpXSA9IDA7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3QganggPSB+fihVdGlsLlVEMlNURFtqXSAvIDMpO1xuICAgICAgICAgICAgcmVzdWx0W2ldIHw9IChpeCA9PSBqeCB8fCAoaXggJSAzID09IGp4ICUgMyAmJiBpeCA+PSBqeCkgPyAxIDogMCkgPDwgajtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHRbMTBdID0gMDtcbiAgICByZXR1cm4gcmVzdWx0O1xufSkoKTtcblV0aWwuQ25rID0gKCgpID0+IHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBjb25zdCBmYWN0ID0gWzFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTM7IGkrKykge1xuICAgICAgICByZXRbaV0gPSBbXTtcbiAgICAgICAgZmFjdFtpICsgMV0gPSBmYWN0W2ldICogKGkgKyAxKTtcbiAgICAgICAgcmV0W2ldWzBdID0gcmV0W2ldW2ldID0gMTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMzsgaisrKSB7XG4gICAgICAgICAgICByZXRbaV1bal0gPSBqIDw9IGkgPyByZXRbaSAtIDFdW2ogLSAxXSArIHJldFtpIC0gMV1bal0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59KSgpO1xuVXRpbC5GYWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCByZXQgPSBbMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XG4gICAgICAgIHJldFtpICsgMV0gPSByZXRbaV0gKiAoaSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufSkoKTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19kZWNvcmF0ZSwgX19tZXRhZGF0YSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3ZpZGUsIFJlZiwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gXCIuLi92aWV3cG9ydFwiO1xuaW1wb3J0IFdvcmxkIGZyb20gXCIuLi8uLi9jdWJlL3dvcmxkXCI7XG5pbXBvcnQgU2V0dGluZyBmcm9tIFwiLi4vc2V0dGluZ1wiO1xuaW1wb3J0IHsgY3ViZV9jb25maWcsIGRlbGF5ZWRZZWxsb3dUb1RvcCwgZmFjZVRvQ29sb3IsIGxibE9yZGVyTWFwcGluZywgb3Bwb3NpdGVNYXBwaW5nLCBzdHJpbmdUb1R3aXN0UGFyYW1zLCB0d2lzdF9kdXJhdGlvbiwgd2hpdGVUb0JvdHRvbSB9IGZyb20gXCIuLi8uLi9jdWJlL3V0aWxzXCI7XG5pbXBvcnQgeyBUd2lzdCwgdHdpc3RlciB9IGZyb20gXCIuLi8uLi9jdWJlL3R3aXN0ZXJcIjtcbmltcG9ydCBJbnRlcmFjdG9yIGZyb20gXCIuLi8uLi9jdWJlL2ludGVyYWN0b3JcIjtcbmltcG9ydCBDYXB0dXJlciBmcm9tIFwiLi4vLi4vY3ViZS9jYXB0dXJlXCI7XG5pbXBvcnQgTEJMU29sdmVyIGZyb20gXCIuLi8uLi9jdWJlL2xibFwiO1xuaW1wb3J0IEN1YmUgZnJvbSBcIi4uLy4uL2N1YmUvY3ViZVwiO1xuaW1wb3J0IHsgRmFjZSB9IGZyb20gXCIuLi8uLi9jdWJlL3V0aWxzX2ludGVybmFsXCI7XG5pbXBvcnQgU29sdmVyIGZyb20gXCIuLi8uLi9zb2x2ZXIvU29sdmVyXCI7XG5sZXQgUGxheWdyb3VuZCA9IGNsYXNzIFBsYXlncm91bmQgZXh0ZW5kcyBWdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuY3ViZXN0ZXAgPSBbXTtcbiAgICAgICAgdGhpcy5zb2x1dGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXkgPSAwO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IFtdO1xuICAgICAgICB0aGlzLmJ1dHRvbkVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lVGhyZXNob2xkID0gMzAwO1xuICAgICAgICB0aGlzLmxpc3RkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FwdHVyZXIgPSBuZXcgQ2FwdHVyZXIoKTtcbiAgICAgICAgdGhpcy5kZW1vRGF0YSA9IHJlcXVpcmUoJy4vZGVtb3MuanNvbicpO1xuICAgICAgICB0aGlzLmRlbW9JbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kZW1vR3JpZFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy5pc0RlbW9Nb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJsU29sdmVyID0gbmV3IExCTFNvbHZlcigpO1xuICAgICAgICB0aGlzLnNob3dUaWNrcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2t1cFN0YXRlID0gW107XG4gICAgICAgIHRoaXMuYmFja3VwU3RhdGVfcGxheWVyID0gW107XG4gICAgICAgIHRoaXMuYmFja3VwU3RhdGVfc3dpdGNoID0gW107XG4gICAgICAgIHRoaXMuY3ViZWpzID0gaW1wb3J0KCcuLi8uLi9wcmVsb2FkL2N1YmVqcycpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGN1YmVfY29uZmlnO1xuICAgICAgICB0aGlzLmlzU3dpdGNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUZWFjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ29sb3JNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXpoY3ViZVN0YXRlID0gW107XG4gICAgICAgIHRoaXMueXpoY3ViZVN0YXRlYyA9IFtdO1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJSXCI7XG4gICAgICAgIHRoaXMuZXJyb3J5emggPSBcIlwiO1xuICAgICAgICB0aGlzLmlzZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zb2x2ZXIgPSBuZXcgU29sdmVyKCk7XG4gICAgICAgIHRoaXMuY29sb3JfcGxhbmUgPSBbXTtcbiAgICAgICAgdGhpcy5zb2x1dGlvbnl6aCA9IFwiXCI7XG4gICAgICAgIHRoaXMuc3RpY2tlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5pc1Byb2plY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAgICAgICBSOiBcIiNCNzFDMUNcIixcbiAgICAgICAgICAgIEw6IFwiI0ZGNkQwMFwiLFxuICAgICAgICAgICAgVTogXCIjRjBGMEYwXCIsXG4gICAgICAgICAgICBEOiBcIiNGRkQ2MDBcIixcbiAgICAgICAgICAgIEY6IFwiIzAwQTAyMFwiLFxuICAgICAgICAgICAgQjogXCIjMEQ0N0ExXCIsXG4gICAgICAgICAgICBMWko6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgY29yZTogXCIjMjAyMDIwXCIsXG4gICAgICAgICAgICBncmF5OiBcIiM4MDgwODBcIixcbiAgICAgICAgICAgIGhpZ2g6IFwiI0ZGMDA4MFwiLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9ydCA9IFtcIlJcIiwgXCJGXCIsIFwiRFwiLCBcIkxcIiwgXCJCXCIsIFwiVVwiXTtcbiAgICAgICAgdGhpcy55emhjdWJlU3RhdGUgPSB0aGlzLndvcmxkLmN1YmUuc2VyaWFsaXplKCk7XG4gICAgICAgIGNvbnN0IHl6aHN0YXRlID0gXCI/Pz8/VT8/Pz8/Pz8/Uj8/Pz8/Pz8/Rj8/Pz8/Pz8/RD8/Pz8/Pz8/TD8/Pz8/Pz8/Qj8/Pz9cIjtcbiAgICAgICAgdGhpcy55emhjdWJlU3RhdGVjID0geXpoc3RhdGUuc3BsaXQoXCJcIik7XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RvciA9IG5ldyBJbnRlcmFjdG9yKFtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnQuY2FudmFzRWxlbSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wLWZsZXhcIiksXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1mbGV4XCIpXG4gICAgICAgIF0sIHRoaXMud29ybGQuY29udHJvbGxlci5pbnRlcmFjdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZW1vRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kZW1vSW1hZ2VzLnB1c2godGhpcy5jYXB0dXJlci5nZW5lcmF0ZSh0aGlzLmRlbW9EYXRhW2ldLnN0YXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5yZXNpemUpO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG4gICAgbG9vcCgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC5kcmF3KCk7XG4gICAgICAgIHRoaXMuc29sdmVyLmluaXQoKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXNpemUoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5zaXplID0gTWF0aC5jZWlsKE1hdGgubWluKHRoaXMud2lkdGggLyA2LCB0aGlzLmhlaWdodCAvIDEyKSk7XG4gICAgICAgIHRoaXMuZGVtb0dyaWRXaWR0aCA9IH5+KE1hdGgubWluKHRoaXMuc2l6ZSAqIDIsIHRoaXMud2lkdGggLyA0KSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIHRoaXMudmlld3BvcnQucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gdGhpcy5zaXplICogMy41KTtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xvck1vZGUpXG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0LnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSAqIDUpO1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBzY3JhbWJsZSgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUuc2NyYW1ibGUoKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5yZXNldCgpO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKTtcbiAgICB9XG4gICAgaWRsZSh2YWx1ZSkge1xuICAgICAgICB0d2lzdGVyLnR3aXN0cy5wdXNoKG5ldyBUd2lzdCgwLCBNYXRoLlBJLCB0d2lzdF9kdXJhdGlvbihjdWJlX2NvbmZpZy5zcGVlZCkgKiB2YWx1ZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnModmFsdWUgLSBNYXRoLlBJKSA8IDFlLTY7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgc29sdmUoaXNFbnRyeSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChpc0VudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUGxheWVyTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2t1cFN0YXRlID0gdGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2t1cFN0YXRlX3BsYXllciA9IHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrdXBTdGF0ZV9zd2l0Y2ggPSB0aGlzLndvcmxkLmN1YmUuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFN0YXRlID0gdGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc29sdmVySWQgPSBjdWJlX2NvbmZpZy5zb2x2ZXJJZDtcbiAgICAgICAgICAgIGlmIChzb2x2ZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNvbHV0aW9uID0gW107XG4gICAgICAgICAgICAgICAgY29uc3Qgd3RiID0gd2hpdGVUb0JvdHRvbSh0aGlzLmluaXRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGJsU3RhdGUgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IEN1YmUoKTtcbiAgICAgICAgICAgICAgICBjdWJlLnJlc3RvcmUodGhpcy5pbml0U3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHN0cmluZ1RvVHdpc3RQYXJhbXNbd3RiXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHBhcmFtcy5sYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY3ViZS50YWJsZS5ncm91cHNbcGFyYW1zLmF4aXNdW2xheWVyXS50d2lzdChwYXJhbXMuYW5nbGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB3dGJTdGF0ZSA9IGN1YmUuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmYWNlU3RhdGUgb2Ygd3RiU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGJsU3RhdGUucHVzaChmYWNlVG9Db2xvcltmYWNlU3RhdGVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGVsYXllZFllbGxvd1RvVG9wKHd0Yik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWQgPSByZXN1bHQuY29tYmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsYXllZCA9IHJlc3VsdC5kZWxheWVkO1xuICAgICAgICAgICAgICAgIHNvbHV0aW9uLnB1c2goY29tYmluZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxibFNvbHV0aW9uID0gdGhpcy5sYmxTb2x2ZXIuc29sdmUobGJsU3RhdGUsIGRlbGF5ZWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxibFNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxibFNvbHV0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxibE9yZGVycyA9IGxibFNvbHV0aW9uW2ldLnNwbGl0KFwiXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcmRlciBvZiBsYmxPcmRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbGJsT3JkZXJNYXBwaW5nW29yZGVyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RlcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PSBcIn5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc3RyaW5nVG9Ud2lzdFBhcmFtc1tzdGVwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmF4aXMgIT0gZGVsYXllZFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcFswXSA9PSAneScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBvcHBvc2l0ZU1hcHBpbmdbc3RlcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RlcC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwID0gb3Bwb3NpdGVNYXBwaW5nW3N0ZXBbMF1dLmNvbmNhdChzdGVwLnN1YnN0cmluZygxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwID0gb3Bwb3NpdGVNYXBwaW5nW3N0ZXBbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb24ucHVzaChzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbi5wdXNoKGRlbGF5ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvbHV0aW9uLnB1c2goXCJ+XCIpO1xuICAgICAgICAgICAgICAgIHNvbHV0aW9uID0gc29sdXRpb24uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICsgMSA8IHNvbHV0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb2x1dGlvbltpXSA9PSBcIkZcIiAmJiBzb2x1dGlvbltpICsgMV0gPT0gXCJGXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbHV0aW9uW2ldID0gXCJGJ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb25baSArIDFdID0gXCJGJ1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc29sdXRpb24gPSBzb2x1dGlvbjtcbiAgICAgICAgICAgICAgICBpZiAobGJsU29sdXRpb24uZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tzID0gXCJhbHdheXNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXN0ZXAgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGogb2YgdGhpcy5zb2x1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBcIn5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGlja3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdWJlc3RlcC5wdXNoKCchJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUaWNrcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdWJlc3RlcC5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNvbHZlcklkID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHlpZWxkIHRoaXMuY3ViZWpzO1xuICAgICAgICAgICAgICAgIHRoaXMuc29sdXRpb24gPSBwcm9taXNlLkN1YmVcbiAgICAgICAgICAgICAgICAgICAgLmZyb21TdHJpbmcodGhpcy5pbml0U3RhdGUpXG4gICAgICAgICAgICAgICAgICAgIC5zb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9VMi9nLCBcIlUgVVwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvRDIvZywgXCJEIERcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL0YyL2csIFwiRiBGXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9CMi9nLCBcIkIgQlwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvTDIvZywgXCJMIExcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1IyL2csIFwiUiBSXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpLlxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2x1dGlvbi5wdXNoKFwiflwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaWNrcyA9IFwiYWx3YXlzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluaXRTdGF0ZS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc29sdXRpb24uam9pbihcIiBcIikpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIHRoaXMuaWRsZSgwLjUpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBpc0VudHJ5O1xuICAgICAgICAgICAgdGhpcy5pc1RlYWNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblBsYXllck1vZGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMud29ybGQuY29udHJvbGxlci5sb2NrID0gdGhpcy5pc1BsYXllck1vZGU7XG4gICAgfVxuICAgIG9uUGxheWluZ0NoYW5nZSgpIHtcbiAgICAgICAgdGhpcy53b3JsZC5jb250cm9sbGVyLmRpc2FibGUgPSB0aGlzLmlzUGxheWluZztcbiAgICB9XG4gICAgY2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWVyTW9kZSAmJiB0aGlzLmlzUGxheWluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPT0gdGhpcy5zb2x1dGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPCB0aGlzLnNvbHV0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghdHdpc3Rlci5pc1R3aXN0aW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc3RyaW5nVG9Ud2lzdFBhcmFtc1t0aGlzLnNvbHV0aW9uW3RoaXMucHJvZ3Jlc3NdXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBsYXllciBvZiBwYXJhbXMubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW3BhcmFtcy5heGlzXVtsYXllcl0udHdpc3QocGFyYW1zLmFuZ2xlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA9PSB0aGlzLnNvbHV0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIHRoaXMuaWRsZSgxLjUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHF1aXQoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzRGVtb01vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEZW1vTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5yZXN0b3JlKHRoaXMuYmFja3VwU3RhdGUpO1xuICAgIH1cbiAgICBzd2l0Y2goKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgdGhpcy5pc1N3aXRjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja3VwU3RhdGVfcGxheWVyID0gdGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpO1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzdG9yZSh0aGlzLmJhY2t1cFN0YXRlX3N3aXRjaCk7XG4gICAgfVxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhY2t1cFN0YXRlX3N3aXRjaCA9IHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKTtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnJlc3RvcmUodGhpcy5iYWNrdXBTdGF0ZV9wbGF5ZXIpO1xuICAgIH1cbiAgICBzZXRQcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzdG9yZSh0aGlzLmluaXRTdGF0ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc3RyaW5nVG9Ud2lzdFBhcmFtc1t0aGlzLnNvbHV0aW9uW2ldXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgcGFyYW1zLmxheWVycykge1xuICAgICAgICAgICAgICAgIHRoaXMud29ybGQuY3ViZS50YWJsZS5ncm91cHNbcGFyYW1zLmF4aXNdW2xheWVyXS50d2lzdChwYXJhbXMuYW5nbGUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICB9XG4gICAgY2FuY2xlKCkge1xuICAgICAgICB0aGlzLmlzQ29sb3JNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlld3BvcnQucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gdGhpcy5zaXplICogMy41KTtcbiAgICAgICAgdGhpcy55emhjdWJlU3RhdGVjID0gdGhpcy5pbml0U3RhdGU7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRlID0gdGhpcy55emhjdWJlU3RhdGU7XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5yZXN0b3JlKHRoaXMuaW5pdFN0YXRlKTtcbiAgICB9XG4gICAgcHVycGxlQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25FbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCB0aGlzLmNsaWNrVGltZVRocmVzaG9sZCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdyZWVuQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25FbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCB0aGlzLmNsaWNrVGltZVRocmVzaG9sZCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNQbGF5ZXJNb2RlICYmICF0aGlzLmlzQ29sb3JNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JhbWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc0NvbG9yTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2x5emgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJsdWVCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25FbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHRoaXMuY2xpY2tUaW1lVGhyZXNob2xkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1BsYXllck1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVkQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25FbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCB0aGlzLmNsaWNrVGltZVRocmVzaG9sZCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNQbGF5ZXJNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb2xvck1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2x1dGlvbnl6aCA9IHRoaXMuc29sdmVyLnNvbHZlKHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zb2x1dGlvbnl6aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvbHV0aW9ueXpoID09IFwiZ3JlYXRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFsbHl6aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnl6aCA9IHRoaXMuc29sdXRpb255emg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucXVpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJsYWNrQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25FbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCB0aGlzLmNsaWNrVGltZVRocmVzaG9sZCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTd2l0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0RGVtbyhpZHgpIHtcbiAgICAgICAgdGhpcy5saXN0ZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5ZXJNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2t1cFN0YXRlID0gdGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEZW1vTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1RlYWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZW1vTmFtZSA9IHRoaXMuZGVtb0RhdGFbaWR4XS5uYW1lO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IHRoaXMuZGVtb0RhdGFbaWR4XS5zdGF0ZS5zcGxpdChcIlwiKTtcbiAgICAgICAgdGhpcy5zb2x1dGlvbiA9IHRoaXMuZGVtb0RhdGFbaWR4XS5zb2x1dGlvbi5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgdGhpcy5zb2x1dGlvbi5wdXNoKFwiflwiKTtcbiAgICAgICAgdGhpcy5zaG93VGlja3MgPSBcImFsd2F5c1wiO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluaXRTdGF0ZS5qb2luKFwiXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zb2x1dGlvbi5qb2luKFwiIFwiKSk7XG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoMCk7XG4gICAgfVxuICAgIG9uU29sdmVyQ2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BsYXllck1vZGUgJiYgIXRoaXMuaXNEZW1vTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5zb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGZhY2VzKCkge1xuICAgICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBmYWNlIG9mIFtGYWNlLkwsIEZhY2UuUiwgRmFjZS5ELCBGYWNlLlUsIEZhY2UuQiwgRmFjZS5GXSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gRmFjZVtmYWNlXTtcbiAgICAgICAgICAgIHJldFtrZXldID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5pbml0U3RhdGUpIHtcbiAgICAgICAgICAgIHJldFtjXSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHN0aWNrKGluZGV4LCBmYWNlKSB7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKTtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuc3RpY2tlcnNbRmFjZVtmYWNlXV07XG4gICAgICAgIGlmIChhcnIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhcnIgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuc3RpY2tlcnNbRmFjZVtmYWNlXV0gPSBhcnI7XG4gICAgICAgIH1cbiAgICAgICAgYXJyW2luZGV4XSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGxldCB6eXpoID0gTWF0aC5mbG9vcihpbmRleCAvIDkpO1xuICAgICAgICBsZXQgeXl6aCA9IE1hdGguZmxvb3IoKGluZGV4ICUgOSkgLyAzKTtcbiAgICAgICAgbGV0IHh5emggPSBNYXRoLmZsb29yKChpbmRleCAlIDkpICUgMyk7XG4gICAgICAgIGxldCB0ZW1wID0gMDtcbiAgICAgICAgc3dpdGNoIChmYWNlKSB7XG4gICAgICAgICAgICBjYXNlIEZhY2UuVTpcbiAgICAgICAgICAgICAgICB0ZW1wID0gMyAqIHp5emggKyB4eXpoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGYWNlLlI6XG4gICAgICAgICAgICAgICAgdGVtcCA9IDkgKyAzICogKDIgLSB5eXpoKSArIDIgLSB6eXpoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGYWNlLkY6XG4gICAgICAgICAgICAgICAgdGVtcCA9IDkgKiAyICsgMyAqICgyIC0geXl6aCkgKyB4eXpoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGYWNlLkQ6XG4gICAgICAgICAgICAgICAgdGVtcCA9IDkgKiAzICsgMyAqICgyIC0genl6aCkgKyB4eXpoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGYWNlLkw6XG4gICAgICAgICAgICAgICAgdGVtcCA9IDkgKiA0ICsgMyAqICgyIC0geXl6aCkgKyB6eXpoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGYWNlLkI6XG4gICAgICAgICAgICAgICAgdGVtcCA9IDkgKiA1ICsgMyAqICgyIC0geXl6aCkgKyAyIC0geHl6aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTdGF0ZVt0ZW1wXSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5yZXN0b3JlKHRoaXMuaW5pdFN0YXRlKTtcbiAgICB9XG4gICAgc2V0Y3ViZXl6aCgpIHtcbiAgICAgICAgdGhpcy5pc0NvbG9yTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXpoY3ViZVN0YXRlID0gdGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IHRoaXMueXpoY3ViZVN0YXRlYztcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnJlc3RvcmUodGhpcy5pbml0U3RhdGUpO1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSAqIDUpO1xuICAgICAgICB0aGlzLndvcmxkLmNvbnRyb2xsZXIudGFwcy5wdXNoKChpbmRleCwgZmFjZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGljayhpbmRleCwgZmFjZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbHl6aCgpIHtcbiAgICAgICAgY29uc3QgeXpoc3RhdGUgPSBcIj8/Pz9VPz8/Pz8/Pz9SPz8/Pz8/Pz9GPz8/Pz8/Pz9EPz8/Pz8/Pz9MPz8/Pz8/Pz9CPz8/P1wiO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IHl6aHN0YXRlLnNwbGl0KFwiXCIpO1xuICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzdG9yZSh0aGlzLmluaXRTdGF0ZSk7XG4gICAgfVxuICAgIGNsYWxseXpoKCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSAqIDMuNSk7XG4gICAgICAgIHRoaXMud29ybGQuY29udHJvbGxlci50YXBzID0gW107XG4gICAgICAgIHRoaXMuaXNDb2xvck1vZGUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJvamVjdF93b3JkKCkge1xuICAgICAgICB0aGlzLmlzUHJvamVjdGlvbiA9IHRydWU7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKTtcbiAgICAgICAgbGV0IGN1clN0YXRlID0gc3RhdGU7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1clN0YXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xvcl9wbGFuZSk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDk7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMjsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yX3BsYW5lW3JvdyAqIDEyICsgY29sXSA9ICdMWkonO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sb3JfcGxhbmUpO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAzOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMzsgY29sIDwgNjsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yX3BsYW5lW3JvdyAqIDEyICsgY29sXSA9IGN1clN0YXRlW2luZGV4KytdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDM7IHJvdyA8IDY7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSA2OyBjb2wgPCA5OyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JfcGxhbmVbcm93ICogMTIgKyBjb2xdID0gY3VyU3RhdGVbaW5kZXgrK107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMzsgcm93IDwgNjsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDM7IGNvbCA8IDY7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcl9wbGFuZVtyb3cgKiAxMiArIGNvbF0gPSBjdXJTdGF0ZVtpbmRleCsrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCByb3cgPSA2OyByb3cgPCA5OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMzsgY29sIDwgNjsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yX3BsYW5lW3JvdyAqIDEyICsgY29sXSA9IGN1clN0YXRlW2luZGV4KytdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDM7IHJvdyA8IDY7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAzOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JfcGxhbmVbcm93ICogMTIgKyBjb2xdID0gY3VyU3RhdGVbaW5kZXgrK107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMzsgcm93IDwgNjsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDk7IGNvbCA8IDEyOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JfcGxhbmVbcm93ICogMTIgKyBjb2xdID0gY3VyU3RhdGVbaW5kZXgrK107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xvcl9wbGFuZSk7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3ZpZGUoXCJ3b3JsZFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgUGxheWdyb3VuZC5wcm90b3R5cGUsIFwid29ybGRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFJlZihcInZpZXdwb3J0XCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBWaWV3cG9ydClcbl0sIFBsYXlncm91bmQucHJvdG90eXBlLCBcInZpZXdwb3J0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaChcImlzUGxheWVyTW9kZVwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsIHZvaWQgMClcbl0sIFBsYXlncm91bmQucHJvdG90eXBlLCBcIm9uUGxheWVyTW9kZUNoYW5nZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIFdhdGNoKFwiaXNQbGF5aW5nXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxuXSwgUGxheWdyb3VuZC5wcm90b3R5cGUsIFwib25QbGF5aW5nQ2hhbmdlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goXCJjb25maWcuc29sdmVySWRcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG5dLCBQbGF5Z3JvdW5kLnByb3RvdHlwZSwgXCJvblNvbHZlckNoYW5nZVwiLCBudWxsKTtcblBsYXlncm91bmQgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vaW5kZXguaHRtbFwiKSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgdmlld3BvcnQ6IFZpZXdwb3J0LFxuICAgICAgICAgICAgc2V0dGluZzogU2V0dGluZyxcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBQbGF5Z3JvdW5kKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlncm91bmQ7XG4iLCJpbXBvcnQgeyBfX2RlY29yYXRlLCBfX21ldGFkYXRhIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBjdWJlX2NvbmZpZyB9IGZyb20gXCIuLi8uLi9jdWJlL3V0aWxzXCI7XG5pbXBvcnQgVnVlU2xpZGVyIGZyb20gJ3Z1ZS1zbGlkZXItY29tcG9uZW50JztcbmltcG9ydCAndnVlLXNsaWRlci1jb21wb25lbnQvdGhlbWUvZGVmYXVsdC5jc3MnO1xubGV0IFNldHRpbmcgPSBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGN1YmVfY29uZmlnO1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH1cbiAgICByZXNpemUoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5zaXplID0gTWF0aC5jZWlsKE1hdGgubWluKHRoaXMud2lkdGggLyA2LCB0aGlzLmhlaWdodCAvIDEyKSk7XG4gICAgfVxufTtcblNldHRpbmcgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vaW5kZXguaHRtbFwiKSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgVnVlU2xpZGVyXG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTZXR0aW5nKTtcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmc7XG4iLCJpbXBvcnQgeyBfX2RlY29yYXRlLCBfX21ldGFkYXRhIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBSZWYgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgV29ybGQgZnJvbSBcIi4uLy4uL2N1YmUvd29ybGRcIjtcbmxldCBWaWV3cG9ydCA9IGNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgY2FudmFzRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhc0VsZW0uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgY2FudmFzOiBjYW52YXNFbGVtLFxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXV0b0NsZWFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigwLCAwKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtID0gY2FudmFzRWxlbTtcbiAgICB9XG4gICAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53b3JsZC5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0LCB0cnVlKTtcbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgaWYgKHRoaXMud29ybGQuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMud29ybGQuc2NlbmUsIHRoaXMud29ybGQuY2FtZXJhKTtcbiAgICAgICAgICAgIHRoaXMud29ybGQuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBJbmplY3QoXCJ3b3JsZFwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgV29ybGQpXG5dLCBWaWV3cG9ydC5wcm90b3R5cGUsIFwid29ybGRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFJlZihcImNhbnZhc1wiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTEVsZW1lbnQpXG5dLCBWaWV3cG9ydC5wcm90b3R5cGUsIFwiY2FudmFzXCIsIHZvaWQgMCk7XG5WaWV3cG9ydCA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9pbmRleC5odG1sXCIpLFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBWaWV3cG9ydCk7XG5leHBvcnQgZGVmYXVsdCBWaWV3cG9ydDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJydWJpa3NjdWJlOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtydWJpa3NjdWJlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3J1Ymlrc2N1YmVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9