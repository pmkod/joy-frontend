import React, { AllHTMLAttributes } from "react";
import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiInformationFill,
} from "react-icons/ri";

interface AlertProps extends AllHTMLAttributes<HTMLDivElement> {
  status: "success" | "info" | "warning" | "error";
  variant?: "filled" | "soft-outline";
  headTitle?: string | React.ReactNode;
  children?: React.ReactNode;
}

const Alert = ({
  children,
  status,
  headTitle,
  variant = "soft-outline",
  ...rest
}: AlertProps) => {
  return (
    <div
      {...rest}
      className={`flex items-start pl-3 pr-7 pt-2.5 pb-3 rounded ${
        (status === "success" &&
          `${
            (variant === "filled" && "bg-green-500 text-white") ||
            (variant === "soft-outline" && "bg-green-50 border border-green-200   text-green-500")
          }`) ||
        (status === "info" &&
          `${
            (variant === "filled" && "bg-blue-500 text-white") ||
            (variant === "soft-outline" && "bg-blue-50 border  border-blue-200  text-blue-600")
          }`) ||
        (status === "warning" &&
          `${
            (variant === "filled" && "bg-yellow-500 text-white") ||
            (variant === "soft-outline" && "bg-yellow-50 border border-yellow-200  text-yellow-500")
          }`) ||
        (status === "error" &&
          `${
            (variant === "filled" && "bg-red-500 text-white") ||
            (variant === "soft-outline" && "bg-red-50 border   border-red-200 text-red-500")
          }`)
      }`}
    >
      <div className={`w-4 h-4 mr-2 mt-1`}>
        {(status === "success" && (
          <RiCheckboxCircleFill className="w-full h-full" />
        )) ||
          (status === "info" && (
            <RiInformationFill className="w-full h-full" />
          )) ||
          (status === "warning" && <RiAlertFill className="w-full h-full" />) ||
          (status === "error" && <RiAlertFill className="w-full h-full" />)}
      </div>
      <div>
        {headTitle && <div className="text-md font-bold">{headTitle}</div>}
        {children && <div className="text-sm mt-0.5">{children}</div>}
      </div>
      <div></div>
    </div>
  );
};

export default Alert;
