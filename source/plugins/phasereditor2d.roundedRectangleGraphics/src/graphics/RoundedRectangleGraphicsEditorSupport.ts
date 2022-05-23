namespace phasereditor2d.roundedRectangleGraphics.graphics {

    import sceneobjects = phasereditor2d.scene.ui.sceneobjects;

    export class RoundedRectangleGraphicsEditorSupport extends sceneobjects.GameObjectEditorSupport<RoundedRectangleGraphics> {

        constructor(obj: RoundedRectangleGraphics, scene: scene.ui.Scene) {
            super(RoundedRectangleGraphicsExtension.getInstance(), obj, scene);

            this.addComponent(
                new sceneobjects.TransformComponent(obj),
                new sceneobjects.OriginComponent(obj),
                new sceneobjects.VisibleComponent(obj),
                new sceneobjects.AlphaSingleComponent(obj),
                new sceneobjects.SizeComponent(obj),
                new RoundedRectangleComponent(obj)
            );
        }

        setInteractive(): void {

            this.getObject().setInteractive(new Phaser.Geom.Rectangle(0, 0, 1, 1),
                (hitArea: any, x: number, y: number, obj: RoundedRectangleGraphics) => {

                    return x >= 0 && y >= 0 && x <= obj.width && y <= obj.height;
                });
        }

        getCellRenderer(): colibri.ui.controls.viewers.ICellRenderer {

            return new scene.ui.sceneobjects.ObjectCellRenderer();
        }

        computeContentHash() {

            return this.computeContentHashWithComponent(this.getObject(),
                sceneobjects.SizeComponent, RoundedRectangleComponent);
        }
    }
}