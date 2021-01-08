import React from "react"
import "../css/Button.css"

type Props = buttonProps;

interface buttonProps {
    children: any,
    buttonStyle: string,
    buttonSize: string,
    buttonColor: string,
}

const STYLES = ["btn--primary", "btn-outline"];

const SIZES = ["btn-medium", "btn-large", "btn-mobile", "btn-wide"];

const COLOR = ["primary", "blue", "red", "green"];

const Button: React.FC<Props> = ({
    children,
    buttonStyle,
    buttonSize,
    buttonColor,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0]

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        >
            {children}
        </button>
    )
}

export default Button