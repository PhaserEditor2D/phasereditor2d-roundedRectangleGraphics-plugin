
namespace phasereditor2d.roundedRectangleGraphics {

    export class RoundedRectangleCodeResources extends scene.core.code.CodeResources {

        private static _instance: RoundedRectangleCodeResources;

        static getInstance() {

            return this._instance ? this._instance : (this._instance = new RoundedRectangleCodeResources());
        }

        private constructor() {
            super(RoundedRectanglePlugin.getInstance());

            for (const clsName of ["RoundedRectangleGraphics", "RoundedRectangleImage"]) {

                this.addCodeResource(clsName);
                this.addCodeResource(`register${clsName}Factory`);
            }

            this.addCodeResource("drawRoundedRectangle");
            this.addCodeDefsResource("roundedRectangleGraphics");
        }
    }
}