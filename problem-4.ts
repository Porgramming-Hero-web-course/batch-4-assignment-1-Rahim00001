{
    // problem-4

    type Circle = {
        shapeType: "circle";
        radius: number;
    }
    type Rectangle = {
        shapeType: "rectangle";
        height: number;
        width: number;
    }
    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shapeType === "circle") {
            const PiValue = Math.PI;
            const circleRedius = shape.radius;
            const rediusSqure = circleRedius * circleRedius;
            return (PiValue * rediusSqure)
        } else if (shape.shapeType === "rectangle") {
            const height = shape.height;
            const width = shape.width;
            return (height * width)
        } else {
            throw new Error("Please insert valid data");
        }
    }









    // Sample Input 1:
    // const circleArea = calculateShapeArea({ shapeType: "circle", radius: 5 });

    // Sample Input 2:
    // const rectangleArea = calculateShapeArea({
    //     shapeType: "rectangle",
    //     width: 4,
    //     height: 6,
    // });

    // console.log(circleArea, rectangleArea);


}