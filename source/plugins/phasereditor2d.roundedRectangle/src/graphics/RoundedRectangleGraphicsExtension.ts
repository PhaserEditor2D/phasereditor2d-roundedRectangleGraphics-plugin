namespace phasereditor2d.roundedRectangle.graphics {

    export class RoundedRectangleGraphicsExtension extends scene.ui.sceneobjects.SceneGameObjectExtension {

        private static _instance: RoundedRectangleGraphicsExtension;

        static getInstance() {

            return this._instance ? this._instance : (this._instance = new RoundedRectangleGraphicsExtension());
        }

        constructor() {
            super({
                phaserTypeName: "RoundedRectangleGraphics",
                typeName: "RoundedRectangleGraphics",
                category: scene.SCENE_OBJECT_SHAPE_CATEGORY,
                icon: scene.ScenePlugin.getInstance().getIconDescriptor(scene.ICON_BUILD)
            });
        }

        getBlockCellRenderer() {

            return RoundedRectangleBlockCellRenderer.getInstance();
        }

        acceptsDropData(data: any): boolean {

            return false;
        }

        createSceneObjectWithAsset(args: scene.ui.sceneobjects.ICreateWithAssetArgs): scene.ui.sceneobjects.ISceneGameObject {

            // not supported

            return null;
        }

        createGameObjectWithData(args: scene.ui.sceneobjects.ICreateWithDataArgs): scene.ui.sceneobjects.ISceneGameObject {

            const obj = new RoundedRectangleGraphics(args.scene, 0, 0, 50, 50);

            obj.getEditorSupport().readJSON(args.data);

            return obj;
        }

        async getAssetsFromObjectData(args: scene.ui.sceneobjects.IGetAssetsFromObjectArgs): Promise<any[]> {

            return [];
        }

        getCodeDOMBuilder(): scene.ui.sceneobjects.GameObjectCodeDOMBuilder {

            return new RoundedRectangleCodeDOMBuilder("roundedRectangleGraphics");
        }

        createDefaultSceneObject(args: scene.ui.sceneobjects.ICreateDefaultArgs): scene.ui.sceneobjects.ISceneObject[] {

            const obj = new RoundedRectangleGraphics(args.scene, args.x, args.y, 100, 100);

            obj.redraw();

            return [obj];
        }
    }
}