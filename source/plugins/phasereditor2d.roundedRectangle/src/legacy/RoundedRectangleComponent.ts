namespace phasereditor2d.roundedRectangle.legacy {

    import sceneobjects = scene.ui.sceneobjects;

    export class RoundedRectangleComponent extends sceneobjects.Component<RoundedRectangle> {

        static fillColor = sceneobjects.NumberColorProperty("fillColor", "#fff", "Fill Color", "The fill color.");
        static isFilled = sceneobjects.SimpleProperty("isFilled", true, "Is Filled", "Is filled?");
        static fillAlpha = sceneobjects.SimpleProperty("fillAlpha", 1, "Fill Alpha", "The fill alpha.");
        static isStroked = sceneobjects.SimpleProperty("isStroked", false, "Is Stroked", "Is stroked?");
        static strokeColor = sceneobjects.NumberColorProperty("strokeColor", "#fff", "Stroke Color", "The stroke color.");
        static strokeAlpha = sceneobjects.SimpleProperty("strokeAlpha", 1, "Stroke Alpha", "The stroke alpha.");
        static lineWidth = sceneobjects.SimpleProperty("lineWidth", 1, "Line Width", "The line width.");
        static radius = sceneobjects.SimpleProperty("radius", 0, "Radius", "The radius.");

        static shadowColor = sceneobjects.NumberColorProperty("shadowColor", "#000", "Shadow Color", "The shadow color.");
        static shadowAlpha = sceneobjects.SimpleProperty("shadowAlpha", 1, "Shadow Alpha", "The shadow alpha.");
        static shadowOffsetX = sceneobjects.SimpleProperty("shadowOffsetX", 0, "Shadow Offset X", "The shadow offset in the X axis.");
        static shadowOffsetY = sceneobjects.SimpleProperty("shadowOffsetY", 0, "Shadow Offset Y", "The shadow offset in the Y axis.");
        static shadowRadius = sceneobjects.SimpleProperty("shadowRadius", -1, "Shadow Radius", "Alternative shadow radius. Set -1 for using the original rectangle radius.");

        constructor(obj: RoundedRectangle) {
            super(obj, [
                RoundedRectangleComponent.radius,
                RoundedRectangleComponent.fillColor,
                RoundedRectangleComponent.isFilled,
                RoundedRectangleComponent.fillAlpha,
                RoundedRectangleComponent.isStroked,
                RoundedRectangleComponent.strokeColor,
                RoundedRectangleComponent.strokeAlpha,
                RoundedRectangleComponent.lineWidth,
                RoundedRectangleComponent.shadowOffsetX,
                RoundedRectangleComponent.shadowOffsetY,
                RoundedRectangleComponent.shadowRadius,
                RoundedRectangleComponent.shadowColor,
                RoundedRectangleComponent.shadowAlpha
            ]);
        }

        buildSetObjectPropertiesCodeDOM(args: sceneobjects.ISetObjectPropertiesCodeDOMArgs): void {

            this.buildSetObjectPropertyCodeDOM_BooleanProperty(args, RoundedRectangleComponent.isFilled);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, sceneobjects.NumberColorPropertyCodeDomAdapter(RoundedRectangleComponent.fillColor));
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.fillAlpha);

            this.buildSetObjectPropertyCodeDOM_BooleanProperty(args, RoundedRectangleComponent.isStroked);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, sceneobjects.NumberColorPropertyCodeDomAdapter(RoundedRectangleComponent.strokeColor));
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.strokeAlpha);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.lineWidth);

            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.radius);

            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetX);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetY);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowRadius);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, sceneobjects.NumberColorPropertyCodeDomAdapter(RoundedRectangleComponent.shadowColor));
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowAlpha);
        }
    }
}