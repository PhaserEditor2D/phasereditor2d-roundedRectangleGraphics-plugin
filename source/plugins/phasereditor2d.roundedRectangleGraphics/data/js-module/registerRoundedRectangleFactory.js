// version: 1.0.0
import Phaser from phaser;
import RoundedRectangle from "./RoundedRectangle";
export default function registerRoundedRectangleFactory() {
    Phaser.GameObjects.GameObjectFactory.register("roundedRectangle", function (x, y, width, height) {
        return this.displayList.add(new RoundedRectangle(this.scene, x, y, width, height));
    });
}
