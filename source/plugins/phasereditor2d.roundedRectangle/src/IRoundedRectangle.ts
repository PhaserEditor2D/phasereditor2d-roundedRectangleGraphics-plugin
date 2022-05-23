namespace phasereditor2d.roundedRectangle {

    export interface IRoundedRectangle extends scene.ui.sceneobjects.ISceneGameObject {

        x: number;
        y: number;
        width: number;
        height: number;
        radiusTopLeft: number;
        radiusTopRight: number;
        radiusBottomLeft: number;
        radiusBottomRight: number;
        isFilled: boolean;
        fillColor: number;
        fillAlpha: number;
        isStroked: boolean;
        lineWidth: number;
        strokeColor: number;
        strokeAlpha: number;
        shadowColor: number;
        shadowAlpha: number;
        shadowOffsetLeft: number;
        shadowOffsetRight: number;
        shadowOffsetTop: number;
        shadowOffsetBottom: number;
        originX: number;
        originY: number;
        redraw(): void;
    }
}