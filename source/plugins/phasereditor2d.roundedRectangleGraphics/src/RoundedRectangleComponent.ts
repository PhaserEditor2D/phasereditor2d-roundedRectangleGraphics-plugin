namespace phasereditor2d.roundedRectangleGraphics {

    import sceneobjects = scene.ui.sceneobjects;

    export class RoundedRectangleComponent extends sceneobjects.Component<IRoundedRectangle> {

        static width = sceneobjects.SimpleProperty("width", 200, "Width", "The width of the rectangle.");
        static height = sceneobjects.SimpleProperty("height", 200, "Height", "The height of the rectangle.");

        static isFilled = sceneobjects.SimpleProperty("isFilled", true, "Is Filled", "Is filled?");
        static fillColor = sceneobjects.NumberColorProperty("fillColor", "#fff", "Fill Color", "The fill color.");
        static fillAlpha = sceneobjects.SimpleProperty("fillAlpha", 1, "Fill Alpha", "The fill alpha.");
        static isStroked = sceneobjects.SimpleProperty("isStroked", true, "Is Stroked", "Is stroked?");
        static strokeColor = sceneobjects.NumberColorProperty("strokeColor", "#000", "Stroke Color", "The stroke color.");
        static strokeAlpha = sceneobjects.SimpleProperty("strokeAlpha", 1, "Stroke Alpha", "The stroke alpha.");
        static lineWidth = sceneobjects.SimpleProperty("lineWidth", 2, "Line Width", "The line width.");
        static radiusTopLeft = sceneobjects.SimpleProperty("radiusTopLeft", 20, "Radius Top/Left", "The radius of the TopLeft corner.");
        static radiusTopRight = sceneobjects.SimpleProperty("radiusTopRight", 20, "Radius Top/Right", "The radius of the TopRight corner.");
        static radiusBottomLeft = sceneobjects.SimpleProperty("radiusBottomLeft", 20, "Radius Bottom/Left", "The radius of the BottomLeft corner.");
        static radiusBottomRight = sceneobjects.SimpleProperty("radiusBottomRight", 20, "Radius Bottom/Right", "The radius of the BottomRight corner.");

        static shadowColor = sceneobjects.NumberColorProperty("shadowColor", "#000", "Shadow Color", "The shadow color.");
        static shadowAlpha = sceneobjects.SimpleProperty("shadowAlpha", 0, "Shadow Alpha", "The shadow alpha.");
        static shadowOffsetLeft = sceneobjects.SimpleProperty("shadowOffsetLeft", 0, "Shadow Offset Left", "The shadow offset in the Left border.");
        static shadowOffsetRight = sceneobjects.SimpleProperty("shadowOffsetRight", 0, "Shadow Offset Right", "The shadow offset in the Right border.");
        static shadowOffsetTop = sceneobjects.SimpleProperty("shadowOffsetTop", 0, "Shadow Offset Top", "The shadow offset in the Top border.");
        static shadowOffsetBottom = sceneobjects.SimpleProperty("shadowOffsetBottom", 0, "Shadow Offset Bottom", "The shadow offset in the Bottom border.");

        constructor(obj: IRoundedRectangle) {
            super(obj, [
                RoundedRectangleComponent.isFilled,
                RoundedRectangleComponent.fillColor,
                RoundedRectangleComponent.fillAlpha,
                RoundedRectangleComponent.isStroked,
                RoundedRectangleComponent.strokeColor,
                RoundedRectangleComponent.strokeAlpha,
                RoundedRectangleComponent.lineWidth,
                RoundedRectangleComponent.radiusTopLeft,
                RoundedRectangleComponent.radiusTopRight,
                RoundedRectangleComponent.radiusBottomLeft,
                RoundedRectangleComponent.radiusBottomRight,
                RoundedRectangleComponent.shadowColor,
                RoundedRectangleComponent.shadowAlpha,
                RoundedRectangleComponent.shadowOffsetLeft,
                RoundedRectangleComponent.shadowOffsetTop,
                RoundedRectangleComponent.shadowOffsetRight,
                RoundedRectangleComponent.shadowOffsetBottom
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

            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.radiusTopLeft);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.radiusTopRight);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.radiusBottomLeft);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.radiusBottomRight);

            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, sceneobjects.NumberColorPropertyCodeDomAdapter(RoundedRectangleComponent.shadowColor));
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowAlpha);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetLeft);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetTop);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetRight);
            this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetBottom);
        }
    }
}