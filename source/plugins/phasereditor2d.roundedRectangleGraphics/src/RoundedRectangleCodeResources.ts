
namespace phasereditor2d.roundedRectangleGraphics {

    import controls = colibri.ui.controls;

    const CLASSNAMES = ["RoundedRectangleGraphics", "RoundedRectangleImage"];

    export class RoundedRectangleCodeResources extends scene.core.code.CodeResources {

        private static _instance: RoundedRectangleCodeResources;

        static getInstance() {

            return this._instance ? this._instance : (this._instance = new RoundedRectangleCodeResources());
        }

        private constructor() {
            super(RoundedRectanglePlugin.getInstance());

            for (const clsName of CLASSNAMES) {

                this.addCodeResource(clsName);
                this.addCodeResource(`register${clsName}Factory`);
            }

            this.addCodeResource("drawRoundedRectangle");
            this.addCodeDefsResource("roundedRectangleGraphics");
        }

        private getExt(spec: string) {

            return spec.slice(0, 2);
        }

        async createFiles(spec: "js" | "js-module" | "ts" | "ts-module") {

            try {

                const filesView = colibri.Platform.getWorkbench().getActiveWindow()
                    .getView(files.ui.views.FilesView.ID) as files.ui.views.FilesView;

                const sel = filesView.getSelection();

                let folder: colibri.core.io.FilePath;

                if (sel.length > 0) {

                    const file = sel[0] as colibri.core.io.FilePath;

                    if (file.isFolder()) {

                        folder = file;

                    } else {

                        folder = file.getParent();
                    }

                } else {

                    alert("Please, select a folder in the Files view.");
                    return;
                }

                const dlg = new controls.dialogs.ProgressDialog();
                dlg.create();
                dlg.setTitle("Create RoundedRectangleGraphics API Files");

                const monitor = new controls.dialogs.ProgressDialogMonitor(dlg);
                monitor.addTotal(1 + CLASSNAMES.length * 2);

                const newFiles = [];

                const ext = this.getExt(spec);


                for (const clsName of CLASSNAMES) {

                    newFiles.push(await this.createFile(`${spec}/${clsName}`, folder, `${clsName}.${ext}`));
                    monitor.step();

                    newFiles.push(await this.createFile(`${spec}/register${clsName}Factory`, folder,
                        `register${clsName}Factory.${ext}`));
                    monitor.step();
                }

                newFiles.push(await this.createFile("roundedRectangleGraphics.d.ts", folder, "roundedRectangle.d.ts"));
                monitor.step();

                dlg.close();

                const viewer = filesView.getViewer();

                viewer.setExpanded(folder, true);

                await viewer.repaint();

                viewer.setSelection(newFiles);

            } catch (e) {

                alert("Error: " + e.message);
            }
        }
    }
}