import { twMerge } from "tailwind-merge";
import { AlertCircle, InfoCircle, Danger } from "@/icons";

type AlertType = "info" | "danger" | "warn";

interface AlertProps {
  message: string;
  type: AlertType;
}

export default function Alert({ message, type }: AlertProps) {
  const colors: Record<AlertType, string> = {
    info: "bg-sky-950 border-sky-900",
    warn: "bg-yellow-950 border-yellow-900",
    danger: "bg-red-950 border-red-900",
  };

  const icons: Record<AlertType, React.ReactNode> = {
    info: <InfoCircle className="stroke-white" />,
    warn: <AlertCircle className="stroke-white" />,
    danger: <Danger className="stroke-white" />,
  };

  const title: Record<AlertType, string> = {
    info: "Info",
    warn: "Warning",
    danger: "Danger",
  };

  return (
    <div className={twMerge("flex flex-col gap-2 w-full py-2 px-4 rounded border-2 my-2", colors[type])}>
      <div className="flex flex-row gap-1 items-center">
        {icons[type]}
        <h6 className="text-white uppercase">{title[type]}</h6>
      </div>
      <p className="text-[14px] text-justify text-wrap m-0">{message}</p>
    </div>
  );
}
