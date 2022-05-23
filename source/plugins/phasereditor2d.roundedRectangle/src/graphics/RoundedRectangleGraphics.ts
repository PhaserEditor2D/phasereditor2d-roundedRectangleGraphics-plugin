namespace phasereditor2d.roundedRectangle.graphics {

    import sceneobjects = scene.ui.sceneobjects;

    export class RoundedRectangleGraphics extends Phaser.GameObjects.Graphics
        implements sceneobjects.ISceneGameObject {

        // SizeComponent
        width = 200;
        height = 200;

        // OriginComponent
        originX = 0.5;
        originY = 0.5;

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

        private _editorSupport: RoundedRectangleGraphicsEditorSupport;
        private _dirtyManager: sceneobjects.DirtyObjectManager;

        constructor(scene: scene.ui.Scene, x: number, y: number, width: number, height: number) {
            super(scene, { x, y });

            this.width = width;
            this.height = height;

            this._editorSupport = new RoundedRectangleGraphicsEditorSupport(this, scene);

            this._dirtyManager = new sceneobjects.DirtyObjectManager(this);

            this._dirtyManager.addComponents(
                sceneobjects.SizeComponent,
                sceneobjects.OriginComponent,
                RoundedRectangleComponent);

            this._dirtyManager.start(() => this.redraw());
        }

        getEditorSupport() {

            return this._editorSupport;
        }

        redraw() {

            this.clear();

            renderRoundedRectangle(this, this);
        }

        setSize(width: number, height: number) {

            this.width = width;
            this.height = height;

            return this;
        }

        updateDisplayOrigin() {

            this.displayOriginX = this.width * this.originX;
            this.displayOriginY = this.height * this.originY;

            return this;
        }

        setOrigin(originX: number, originY: number) {

            this.originX = originX;
            this.originY = originY;

            this.updateDisplayOrigin();

            // we need this for the ObjectCellRenderer.
            if (this._dirtyManager.isDirty()) {
                
                this.redraw();
            }
        }
    }
}