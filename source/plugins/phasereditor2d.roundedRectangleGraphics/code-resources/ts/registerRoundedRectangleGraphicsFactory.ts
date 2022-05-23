// v1.0.0: 1.0.0



function registerRoundedRectangleGraphicsFactory() {

    Phaser.GameObjects.GameObjectFactory.register("roundedRectangleGraphics",
        function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, width: number, height:number) {

            return this.displayList.add(new RoundedRectangleGraphics(this.scene, x, y, width, height));
        });
}