namespace phasereditor2d.roundedRectangle {

    export const CAT_ROUNDED_RECTANGLE = "phasereditor2d.roundedRectangle.category";
    export const CMD_CREATE_ROUNDED_USER_FILES = "phasereditor2d.roundedRectangle.CreateRoundedRectangleUserFiles";

    export class RoundedRectanglePlugin extends colibri.Plugin {

        private static _instance = new RoundedRectanglePlugin();

        static getInstance() {

            return this._instance;
        }

        constructor() {
            super("phasereditor2d.roundedRectangle");
        }

        registerExtensions(reg: colibri.ExtensionRegistry) {

            reg.addExtension(legacy.RoundedRectangleExtension.getInstance());
            reg.addExtension(graphics.RoundedRectangleGraphicsExtension.getInstance());
            reg.addExtension(image.RoundedRectangleImageExtension.getInstance());

            reg.addExtension(new scene.ui.editor.properties.SceneEditorPropertySectionExtension(
                page => new legacy.RoundedRectangleSection(page),
                page => new RoundedRectangleSection(page)
            ));

            reg.addExtension(new colibri.ui.ide.PluginResourceLoaderExtension(() =>

                RoundedRectangleCodeResources.getInstance().preload()
            ));

            reg.addExtension(new colibri.ui.ide.commands.CommandExtension(manager => {

                manager.addCategory({
                    id: CAT_ROUNDED_RECTANGLE,
                    name: "Rounded Rectangle",
                });

                for (const spec of ["js", "js-module", "ts", "ts-module"]) {

                    manager.add({
                        command: {
                            id: CMD_CREATE_ROUNDED_USER_FILES + "." + spec,
                            category: CAT_ROUNDED_RECTANGLE,
                            name: `Create Rounded Rectangle User Files (${spec})`,
                            tooltip: "Create the user files with the RoundedRectangle API."
                        },
                        handler: {
                            executeFunc: args => {

                                RoundedRectangleCodeResources.getInstance().createFiles(spec as any);
                            }
                        }
                    });
                }
            }));
        }
    }

    colibri.Platform.addPlugin(RoundedRectanglePlugin.getInstance());
}