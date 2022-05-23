// version: 1.0.0
/*import Phaser from "phaser";*/
/*import RoundedRectangleGraphics from "./RoundedRectangleGraphics";*/

/*export default */function registerRoundedRectangleGraphicsFactory() {

    Phaser.GameObjects.GameObjectFactory.register("roundedRectangleGraphics",
        function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, width: number, height:number) {

            return this.displayList.add(new RoundedRectangleGraphics(this.scene, x, y, width, height));
        });
}