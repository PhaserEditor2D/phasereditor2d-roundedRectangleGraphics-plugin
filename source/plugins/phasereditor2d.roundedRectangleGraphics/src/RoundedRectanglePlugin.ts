namespace phasereditor2d.roundedRectangleGraphics {

    export const CAT_ROUNDED_RECTANGLE = "phasereditor2d.roundedRectangleGraphics.category";
    export const CMD_CREATE_ROUNDED_USER_FILES = "phasereditor2d.roundedRectangleGraphics.CreateRoundedRectangleUserFiles";

    export class RoundedRectanglePlugin extends colibri.Plugin {

        private static _instance = new RoundedRectanglePlugin();

        static getInstance() {

            return this._instance;
        }

        constructor() {
            super("phasereditor2d.roundedRectangleGraphics");
        }

        registerExtensions(reg: colibri.ExtensionRegistry) {

            reg.addExtension(graphics.RoundedRectangleGraphicsExtension.getInstance());
            reg.addExtension(image.RoundedRectangleImageExtension.getInstance());

            reg.addExtension(new scene.ui.editor.properties.SceneEditorPropertySectionExtension(
                page => new RoundedRectangleSection(page)
            ));

            reg.addExtension(new colibri.ui.ide.PluginResourceLoaderExtension(() =>

                RoundedRectangleCodeResources.getInstance().preload()
            ));

            RoundedRectangleCodeResources.getInstance()
                .registerCommands(CAT_ROUNDED_RECTANGLE, "Rounded Rectangle Graphics", reg);
        }
    }

    if (phasereditor2d.ide.VER < "3.33.2") {

        alert("The 'phasereditor2d-roundedRectangleGraphics-plugin' cannot be installed."
            + "\nIt requires Phaser Editor 2D v3.33.2 or a newer version.")

    } else {

        colibri.Platform.addPlugin(RoundedRectanglePlugin.getInstance());
    }
}