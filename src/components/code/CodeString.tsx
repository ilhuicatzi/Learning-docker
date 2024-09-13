import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CodeString({code}:{code:string}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <pre className="dark:bg-slate-900 bg-slate-100 my-2 rounded-md flex justify-between w-full max-w-2xl">
      <code className="overflow-x-auto font-inconsolata select-all pl-4 py-2 text-slate-800 dark:text-slate-100">
        {code}
      </code>
      <div className="flex justify-end items-start">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
              aria-label="copy"
                onClick={copyToClipboard}
                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 p-1 rounded-md"
              >
                <Copy className=" w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </pre>
  );
}

export default CodeString;
