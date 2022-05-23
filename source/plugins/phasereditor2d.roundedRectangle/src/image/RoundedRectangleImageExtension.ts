namespace phasereditor2d.roundedRectangle.image {

    import sceneobjects = scene.ui.sceneobjects;

    export class RoundedRectangleImageExtension extends scene.ui.sceneobjects.BaseImageExtension {

        private static _instance: RoundedRectangleImageExtension;

        static getInstance() {

            return this._instance ? this._instance : (this._instance = new RoundedRectangleImageExtension());
        }

        constructor() {
            super({
                phaserTypeName: "RoundedRectangleImage",
                typeName: "RoundedRectangleImage",
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

        async getAssetsFromObjectData(args: scene.ui.sceneobjects.IGetAssetsFromObjectArgs): Promise<any[]> {

            return [];
        }

        getCodeDOMBuilder(): scene.ui.sceneobjects.GameObjectCodeDOMBuilder {

            return new RoundedRectangleCodeDOMBuilder("roundedRectangleImage");
        }

        protected newObject(scene: scene.ui.Scene, x: number, y: number, key?: string, frame?: string | number): sceneobjects.ISceneGameObject {
            
            return new RoundedRectangleImage(scene, x, y, 200, 200);
        }
    }
}