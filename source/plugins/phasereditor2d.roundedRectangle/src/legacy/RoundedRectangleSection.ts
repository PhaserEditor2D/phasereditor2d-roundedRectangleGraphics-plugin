namespace phasereditor2d.roundedRectangle.legacy {

    import controls = colibri.ui.controls;

    export class RoundedRectangleSection extends scene.ui.sceneobjects.SceneGameObjectSection<RoundedRectangle> {

        static SECTION_ID = "phasereditor2d.roundedRectangle.legacy.RoundedRectangleSection";

        constructor(page: controls.properties.PropertyPage) {
            super(page, RoundedRectangleSection.SECTION_ID, "Rounded Rectangle", false, false);
        }

        createForm(parent: HTMLDivElement) {

            const comp = this.createGridElement(parent);
            comp.style.gridTemplateColumns = "auto auto 1fr auto";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.radius)
                .style.gridColumn = "3 / span 2";

            this.createPropertyBoolean(comp, RoundedRectangleComponent.isFilled)
                .checkElement.style.gridColumn = "3 / span 2";

            this.createPropertyColorRow(comp, RoundedRectangleComponent.fillColor, false)
                .element.style.gridColumn = "3 / span 2";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.fillAlpha)
                .style.gridColumn = "3 / span 2";

            this.createPropertyBoolean(comp, RoundedRectangleComponent.isStroked)
                .checkElement.style.gridColumn = "3 / span 2";

            this.createPropertyColorRow(comp, RoundedRectangleComponent.strokeColor, false)
                .element.style.gridColumn = "3 / span 2";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.strokeAlpha)
                .style.gridColumn = "3 / span 2";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.lineWidth)
                .style.gridColumn = "3 / span 2";


            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowOffsetX)
                .style.gridColumn = "3 / span 2";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowOffsetY)
                .style.gridColumn = "3 / span 2";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowRadius)
                .style.gridColumn = "3 / span 2";

            this.createPropertyColorRow(comp, RoundedRectangleComponent.shadowColor, false)
                .element.style.gridColumn = "3 / span 2";

            this.createPropertyFloatRow(comp, RoundedRectangleComponent.shadowAlpha)
                .style.gridColumn = "3 / span 2";
        }

        canEdit(obj: any, n: number): boolean {

            return obj instanceof RoundedRectangle;
        }

        canEditNumber(n: number): boolean {

            return n > 0;
        }
    }
}