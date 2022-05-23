namespace phasereditor2d.roundedRectangleGraphics.image {

    import sceneobjects = scene.ui.sceneobjects;

    export class RoundedRectangleImage extends Phaser.GameObjects.Image implements IRoundedRectangle {

        // RoundedRectangleComponent
        radiusTopLeft = 20;
        radiusTopRight = 20;
        radiusBottomLeft = 20;
        radiusBottomRight = 20;
        isFilled = true;
        fillColor = 0xffffff;
        fillAlpha = 1;
        isStroked = true;
        lineWidth = 2;
        strokeColor = 0;
        strokeAlpha = 1;
        shadowColor = 0;
        shadowAlpha = 0;
        shadowOffsetLeft = 0;
        shadowOffsetRight = 0;
        shadowOffsetTop = 0;
        shadowOffsetBottom = 0;

        private _currentKey = "";
        private _editorSupport: RoundedRectangleImageEditorSupport;
        private _dirtyManager: sceneobjects.DirtyObjectManager;

        constructor(scene: scene.ui.Scene, x: number, y: number, width: number, height: number) {
            super(scene, x, y, "");

            this.setSize(width, height);

            this._editorSupport = new RoundedRectangleImageEditorSupport(this, scene);

            this._dirtyManager = new sceneobjects.DirtyObjectManager(this);

            this._dirtyManager.addComponents(
                sceneobjects.SizeComponent,
                RoundedRectangleComponent);

            this._dirtyManager.start(() => this.redraw());
        }

        redraw(): void {

            const key = this._dirtyManager.getKey();

            if (key !== this._currentKey) {

                if (this.scene.textures.exists(key)) {

                    // console.log(`RoundedRectangleImage: resuse the key ${key}`);

                } else {

                    // console.log(`RoundedRectangleImage: generate key ${key}`);

                    const gr = new Phaser.GameObjects.Graphics(this.scene);

                    gr.translateCanvas(this.originX * this.width, this.originY * this.height);

                    renderRoundedRectangle(this, gr);

                    gr.generateTexture(key, this.width, this.height);

                    gr.destroy();
                }

                this._currentKey = key;

                this.setTexture(key);

                this.collectGarbage();
            }
        }

        private collectGarbage() {

            const scene = this.scene as scene.ui.Scene;

            const usedTexture = new Set();

            scene.visitAll(obj => {

                const support = sceneobjects.GameObjectEditorSupport.getEditorSupport(obj);

                if (support) {

                    const ninePatch = obj as RoundedRectangleImage;
                    usedTexture.add(ninePatch._currentKey);
                }
            });

            for (const key of scene.textures.getTextureKeys()) {

                if (key.startsWith("RoundedRectangleImage[")) {

                    if (!usedTexture.has(key)) {

                        // console.log("destroy texture " + key);

                        scene.textures.remove(key);
                    }
                }
            }
        }

        getEditorSupport() {

            return this._editorSupport;
        }
    }
}