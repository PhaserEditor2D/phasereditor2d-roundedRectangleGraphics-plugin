namespace phasereditor2d.roundedRectangle.legacy {

    import sceneobjects = phasereditor2d.scene.ui.sceneobjects;

    export class RoundedRectangleEditorSupport extends sceneobjects.GameObjectEditorSupport<RoundedRectangle> {

        constructor(obj: RoundedRectangle, scene: scene.ui.Scene) {
            super(RoundedRectangleExtension.getInstance(), obj, scene);

            this.addComponent(
                new sceneobjects.TransformComponent(obj),
                new sceneobjects.OriginComponent(obj),
                new sceneobjects.VisibleComponent(obj),
                new sceneobjects.AlphaSingleComponent(obj),
                new sceneobjects.SizeComponent(obj),
                new RoundedRectangleComponent(obj),
            );
        }

        getPropertyDefaultValue(prop: sceneobjects.IProperty<any>) {

            if (prop === sceneobjects.OriginComponent.originX || prop === sceneobjects.OriginComponent.originY) {

                return 0;
            }

            return super.getPropertyDefaultValue(prop);
        }

        setInteractive(): void {

            this.getObject().setInteractive();
        }

        getCellRenderer(): colibri.ui.controls.viewers.ICellRenderer {

            return new scene.ui.sceneobjects.ObjectCellRenderer();
        }

        computeContentHash() {

            return this.computeContentHashWithComponent(this.getObject(), RoundedRectangleComponent);
        }
    }
}