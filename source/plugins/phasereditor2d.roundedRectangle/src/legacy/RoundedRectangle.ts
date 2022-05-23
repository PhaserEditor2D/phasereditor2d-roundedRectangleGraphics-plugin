namespace phasereditor2d.roundedRectangle.legacy {

    export class RoundedRectangle extends Phaser.GameObjects.RenderTexture implements scene.ui.sceneobjects.ISceneGameObject {

        private _editorSupport: RoundedRectangleEditorSupport;
        private _fillColor: number = 0xffffff;
        private _isFilled: boolean = true;
        private _fillAlpha: number = 1;
        private _isStroked: boolean = false;
        private _strokeColor: number = 0xffffff;
        private _strokeAlpha: number = 1;
        private _lineWidth: number = 1;
        private _radius: number = 20;
        private _shadowColor = 0;
        private _shadowAlpha = 0;
        private _shadowOffsetX = 0;
        private _shadowOffsetY = 0;
        private _shadowRadius = -1;

        constructor(scene: scene.ui.Scene, x: number, y: number, width: number, height: number) {
            super(scene, x, y, width, height);

            this._editorSupport = new RoundedRectangleEditorSupport(this, scene);
        }

        getEditorSupport() {

            return this._editorSupport;
        }

        get shadowColor() {

            return this._shadowColor;
        }

        set shadowColor(shadowColor: number) {

            this._shadowColor = shadowColor;

            this.redraw();
        }

        get shadowAlpha() {

            return this._shadowAlpha;
        }

        set shadowAlpha(shadowAlpha: number) {

            this._shadowAlpha = shadowAlpha;

            this.redraw();
        }

        get shadowOffsetX() {

            return this._shadowOffsetX;
        }

        set shadowOffsetX(shadowOffsetX: number) {

            this._shadowOffsetX = shadowOffsetX;

            this.redraw();
        }

        get shadowOffsetY() {

            return this._shadowOffsetY;
        }

        set shadowOffsetY(shadowOffsetY: number) {

            this._shadowOffsetY = shadowOffsetY;

            this.redraw();
        }

        get shadowRadius() {

            return this._shadowRadius;
        }

        set shadowRadius(shadowRadius: number) {

            this._shadowRadius = shadowRadius;

            this.redraw();
        }

        get fillColor() {

            return this._fillColor;
        }

        set fillColor(fillColor: number) {

            this._fillColor = fillColor;

            this.redraw();
        }

        get isFilled() {

            return this._isFilled;
        }

        set isFilled(isFilled: boolean) {

            this._isFilled = isFilled;

            this.redraw();
        }

        get fillAlpha() {

            return this._fillAlpha;
        }

        set fillAlpha(fillAlpha: number) {

            this._fillAlpha = fillAlpha;

            this.redraw();
        }

        get isStroked() {

            return this._isStroked;
        }

        set isStroked(isStroked: boolean) {

            this._isStroked = isStroked;

            this.redraw();
        }

        get strokeColor() {

            return this._strokeColor;
        }

        set strokeColor(strokeColor: number) {

            this._strokeColor = strokeColor;

            this.redraw();
        }

        get strokeAlpha() {

            return this._strokeAlpha;
        }

        set strokeAlpha(strokeAlpha: number) {

            this._strokeAlpha = strokeAlpha;

            this.redraw();
        }

        get lineWidth() {

            return this._lineWidth;
        }

        set lineWidth(lineWidth: number) {

            this._lineWidth = lineWidth;

            this.redraw();
        }

        get radius() {

            return this._radius;
        }

        set radius(radius: number) {

            this._radius = radius;

            this.redraw();
        }

        setSize(width: number, height: number): this {

            super.setSize(width, height);

            this.redraw();

            return this;
        }

        redraw() {

            this.clear();

            if (this._isFilled || this._isStroked) {

                const gr = new Phaser.GameObjects.Graphics(this.scene);

                let x = this._shadowOffsetX < 0 ? -this._shadowOffsetX : 0;
                let y = this._shadowOffsetY < 0 ? -this._shadowOffsetY : 0;
                let w = this._shadowOffsetX < 0 ? this.width + this._shadowOffsetX : this.width - this._shadowOffsetX;
                let h = this._shadowOffsetY < 0 ? this.height + this._shadowOffsetY : this.height - this._shadowOffsetY;

                if (this._shadowOffsetX !== 0 && this._shadowOffsetY !== 0 && this._shadowAlpha !== 0) {

                    gr.fillStyle(this._shadowColor, this._shadowAlpha);
                    gr.fillRoundedRect(
                        x + this._shadowOffsetX, y + this._shadowOffsetY,
                        w, h,
                        this._shadowRadius === -1 ? this._radius : this._shadowRadius);
                }

                if (this._isFilled) {

                    gr.fillStyle(this._fillColor, this._fillAlpha);

                    if (this._isStroked) {

                        x += this.lineWidth / 2;
                        y += this.lineWidth / 2;
                        w -= this.lineWidth;
                        h -= this.lineWidth;
                    }

                    gr.fillRoundedRect(x, y, w, h, this._radius);
                }

                if (this._isStroked) {

                    gr.lineStyle(this._lineWidth, this._strokeColor, this._strokeAlpha);
                    gr.strokeRoundedRect(x, y, w, h, this._radius);
                }

                this.draw(gr);

                gr.destroy();
            }
        }
    }
}