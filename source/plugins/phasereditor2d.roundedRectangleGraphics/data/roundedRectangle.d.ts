
interface RoundedRectangle extends Phaser.GameObjects.RenderTexture {

    rectangleWidth: number;
    rectangleHeight: number;
    radius: number;
    fillColor: number;
    isFilled: boolean;
    fillAlpha: number;
    isStroked: boolean;
    strokeColor: number;
    strokeAlpha: number;
    lineWidth: number;
    shadowColor: number;
    shadowAlpha: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowRadius: number;

    setRectangleSize(width:number, height:number): void;
    redraw(): void;
}

declare namespace Phaser.GameObjects {

    export interface GameObjectFactory {

        roundedRectangle(x: number, y: number, width: number, height: number): RoundedRectangle;
    }
}