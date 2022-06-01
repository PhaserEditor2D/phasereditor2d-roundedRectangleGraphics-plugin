// v1.0.1: 1.0.0
import Phaser from "phaser";
import RoundedRectangleImage from "./RoundedRectangleImage";

export default function registerRoundedRectangleImageFactory() {

    Phaser.GameObjects.GameObjectFactory.register("roundedRectangleImage",
        function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, width: number, height:number) {

            return this.displayList.add(new RoundedRectangleImage(this.scene, x, y, width, height));
        });
}