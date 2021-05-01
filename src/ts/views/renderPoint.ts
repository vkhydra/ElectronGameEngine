interface renderPointsProps {
    element: string;
}

export const RenderPoints = ({ element }: renderPointsProps) => {
    const elementCanvas = document.querySelector(element);
    console.log(elementCanvas);
}