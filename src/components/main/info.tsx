import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

const Info: React.FC<{ children: React.ReactNode; info: React.ReactNode }> =
  function Info({ children, info }) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>
            <p>{info}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };
export default Info;
