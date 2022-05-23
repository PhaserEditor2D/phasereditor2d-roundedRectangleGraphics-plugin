namespace phasereditor2d.roundedRectangle.image {

    import sceneobjects = phasereditor2d.scene.ui.sceneobjects;

    export class RoundedRectangleImageEditorSupport extends sceneobjects.BaseImageEditorSupport<RoundedRectangleImage> {

        constructor(obj: RoundedRectangleImage, scene: scene.ui.Scene) {
            super(RoundedRectangleImageExtension.getInstance(), obj, scene);

            this.addComponent(
                new sceneobjects.SizeComponent(obj),
                new RoundedRectangleComponent(obj));
        }

        getCellRenderer(): colibri.ui.controls.viewers.ICellRenderer {

            return new sceneobjects.PhaserTextureCellRenderer();
        }
    }
}