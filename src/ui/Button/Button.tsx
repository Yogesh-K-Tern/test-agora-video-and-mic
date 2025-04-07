import React from "react";
import "./Button.scss";

import { Icon } from "react-feather";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: Icon | string;
  iconPosition?: "start" | "end" | "center";
  iconColor?: "red" | "green" | "grey";
  iconFill?: boolean;
  buttonStyle?: "regular" | "action" | "alert" | "flush" | "outline";
}

export function Button({
  label = "Okay",
  icon = void 0,
  iconPosition = "start",
  iconColor = void 0,
  iconFill = false,
  buttonStyle = "regular",
  ...rest
}: ButtonProps) {
  const StartIcon = iconPosition === "start" ? icon : null;
  const EndIcon = iconPosition === "end" ? icon : null;

  const classList = [];
  if (iconColor) {
    classList.push(`icon-${iconColor}`);
  }
  if (iconFill) {
    classList.push(`icon-fill`);
  }
  if (iconPosition === "center") {
    classList.push("icon-center");
  }
  classList.push(`button-style-${buttonStyle}`);

  return (
    <button data-component="Button" className={classList.join(" ")} {...rest}>
      {/* If icon is on the left */}
      {iconPosition !== "center" && StartIcon && (
        <span className="icon icon-start">
          {typeof icon === "string" ? (
            <img src={icon} alt={icon} />
          ) : (
            <StartIcon />
          )}
        </span>
      )}

      {/* Show label only when icon is not "center" */}
      {iconPosition !== "center" && <span className="label">{label}</span>}

      {/* If icon is on the right */}
      {iconPosition !== "center" && EndIcon && (
        <span className="icon icon-end">
          {typeof icon === "string" ? (
            <img src={icon} alt={icon} />
          ) : (
            <EndIcon />
          )}
        </span>
      )}

      {/* If icon is centered and no label */}
      {iconPosition === "center" && icon && (
        <span className="icon icon-center">
          {typeof icon === "string" ? (
            <img src={icon} alt={icon} />
          ) : (
            React.createElement(icon)
          )}
        </span>
      )}
    </button>
  );
}
