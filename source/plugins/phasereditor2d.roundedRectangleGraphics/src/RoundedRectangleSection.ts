namespace phasereditor2d.roundedRectangleGraphics {

    import controls = colibri.ui.controls;

    export class RoundedRectangleSection extends scene.ui.sceneobjects.SceneGameObjectSection<IRoundedRectangle> {

        static SECTION_ID = "phasereditor2d.roundedRectangleGraphics.RoundedRectangleSection";

        constructor(page: controls.properties.PropertyPage) {
            super(page, RoundedRectangleSection.SECTION_ID, "Rounded Rectangle", false, false);
        }

        createForm(parent: HTMLDivElement) {

            const comp = this.createGridElement(parent);
            comp.style.gridTemplateColumns = "auto auto 1fr";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.radiusTopLeft);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.radiusTopRight);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.radiusBottomLeft);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.radiusBottomRight);

            this.createPropertyBoolean(comp, RoundedRectangleComponent.isFilled);
            this.createPropertyColorRow(comp, RoundedRectangleComponent.fillColor, false);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.fillAlpha);

            this.createPropertyBoolean(comp, RoundedRectangleComponent.isStroked);
            this.createPropertyColorRow(comp, RoundedRectangleComponent.strokeColor, false);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.strokeAlpha);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.lineWidth);

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowOffsetLeft);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowOffsetTop);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowOffsetRight);
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowOffsetBottom);

            this.createPropertyColorRow(comp, RoundedRectangleComponent.shadowColor, false)
            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowAlpha);
        }

        canEdit(obj: any, n: number): boolean {

            return scene.ui.sceneobjects.GameObjectEditorSupport
                .hasObjectComponent(obj, RoundedRectangleComponent);
        }

        canEditNumber(n: number): boolean {

            return n > 0;
        }
    }
}