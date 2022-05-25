// v1.0.0-beta.1: 1.0.0
function registerRoundedRectangleImageFactory() {
    Phaser.GameObjects.GameObjectFactory.register("roundedRectangleImage", function (x, y, width, height) {
        return this.displayList.add(new RoundedRectangleImage(this.scene, x, y, width, height));
    });
}
