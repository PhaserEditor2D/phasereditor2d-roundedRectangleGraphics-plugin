// version: 1.0.0
function registerRoundedRectangleGraphicsFactory() {
    Phaser.GameObjects.GameObjectFactory.register("roundedRectangleGraphics", function (x, y, width, height) {
        return this.displayList.add(new RoundedRectangleGraphics(this.scene, x, y, width, height));
    });
}
