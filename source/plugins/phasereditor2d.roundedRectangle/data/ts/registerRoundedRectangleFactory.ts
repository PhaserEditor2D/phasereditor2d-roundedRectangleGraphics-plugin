// version: 1.0.0
function registerRoundedRectangleFactory() {

    Phaser.GameObjects.GameObjectFactory.register("roundedRectangle",
        function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, width: number, height:number) {

            return this.displayList.add(new RoundedRectangle(this.scene, x, y, width, height));
        });
}