
namespace phasereditor2d.roundedRectangleGraphics {

    import controls = colibri.ui.controls;

    export class RoundedRectangleBlockCellRenderer extends scene.ui.sceneobjects.ShapeBlockCellRenderer {

        private _icon: controls.IImage;

        constructor(icon?: controls.IImage) {
            super();

            this._icon = icon;
        }

        protected renderShapeCell(ctx: CanvasRenderingContext2D, args: controls.viewers.RenderCellArgs) {

            const size = Math.floor(Math.max(8, Math.floor(Math.min(args.w, args.h) * 0.5)));

            const x = Math.floor(args.x + (args.w - size) / 2);
            const y = Math.floor(args.y + (args.h - size) / 2);

            const r = size <= 16 ? 2 : 8;

            ctx.beginPath();
            RoundedRectangleBlockCellRenderer.drawRoundedRect(ctx, x, y, size, size, r, r, r, r);
            ctx.stroke();

            if (this._icon && size > 16) {

                const iconSize = controls.RENDER_ICON_SIZE;

                this._icon.paint(ctx, args.x + args.w / 2 - iconSize / 2, args.y + args.h / 2 - iconSize / 2,
                    iconSize, iconSize, true);
            }
        }

        static drawRoundedRect(
            ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number,
            topLeft = 5, topRight = 5, bottomRight = 5, bottomLeft = 5) {

            ctx.save();

            ctx.beginPath();
            ctx.moveTo(x + topLeft, y);
            ctx.lineTo(x + w - topRight, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + topRight);
            ctx.lineTo(x + w, y + h - bottomRight);
            ctx.quadraticCurveTo(x + w, y + h, x + w - bottomRight, y + h);
            ctx.lineTo(x + bottomLeft, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - bottomLeft);
            ctx.lineTo(x, y + topLeft);
            ctx.quadraticCurveTo(x, y, x + topLeft, y);
            ctx.stroke();

            ctx.restore();
        }
    }
}