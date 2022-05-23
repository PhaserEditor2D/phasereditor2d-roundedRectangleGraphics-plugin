// version: 1.0.0
class RoundedRectangle extends Phaser.GameObjects.RenderTexture {

    fillColor: number = 0xffffff;
    isFilled: boolean = true;
    fillAlpha: number = 1;
    isStroked: boolean = false;
    strokeColor: number = 0xffffff;
    strokeAlpha: number = 1;
    lineWidth: number = 1;
    radius: number = 20;
    shadowColor = 0;
    shadowAlpha = 0;
    shadowOffsetX = 0;
    shadowOffsetY = 0;
    shadowRadius = -1;

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number) {
        super(scene, x, y, width, height);

        scene.events.once("update", () => this.redraw());
    }

    redraw(): void {

        this.clear();

        if (this.isFilled || this.isStroked) {

            const gr = new Phaser.GameObjects.Graphics(this.scene);

            let x = this.shadowOffsetX < 0 ? -this.shadowOffsetX : 0;
            let y = this.shadowOffsetY < 0 ? -this.shadowOffsetY : 0;
            let w = this.shadowOffsetX < 0 ? this.width + this.shadowOffsetX : this.width - this.shadowOffsetX;
            let h = this.shadowOffsetY < 0 ? this.height + this.shadowOffsetY : this.height - this.shadowOffsetY;

            if (this.shadowOffsetX !== 0 && this.shadowOffsetY !== 0 && this.shadowAlpha !== 0) {

                gr.fillStyle(this.shadowColor, this.shadowAlpha);
                gr.fillRoundedRect(
                    x + this.shadowOffsetX, y + this.shadowOffsetY,
                    w, h,
                    this.shadowRadius === -1 ? this.radius : this.shadowRadius);
            }

            if (this.isFilled) {

                gr.fillStyle(this.fillColor, this.fillAlpha);

                if (this.isStroked) {

                    x += this.lineWidth / 2;
                    y += this.lineWidth / 2;
                    w -= this.lineWidth;
                    h -= this.lineWidth;
                }

                gr.fillRoundedRect(x, y, w, h, this.radius);
            }

            if (this.isStroked) {

                gr.lineStyle(this.lineWidth, this.strokeColor, this.strokeAlpha);
                gr.strokeRoundedRect(x, y, w, h, this.radius);
            }

            this.draw(gr);

            gr.destroy();
        }
    }
}