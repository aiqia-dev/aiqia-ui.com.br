import {
  ArrowUpDown,
  Columns3,
  HelpCircle,
  Mouse,
  MousePointerClick,
  MoveHorizontal,
  Pin,
  RotateCcw,
  Rows3,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../button/button.component";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog/dialog.component";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/tooltip.component";
import type { FlashTableLabels } from "./flash-table.types";
import { DEFAULT_FLASH_TABLE_LABELS } from "./flash-table.utils";

export interface FlashTableHelpDialogProps {
  labels?: FlashTableLabels;
}

interface HelpFeatureItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

const kbdClassName =
  "inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono font-medium bg-muted border border-border rounded text-foreground";

const HELP_FEATURES: HelpFeatureItem[] = [
  {
    id: "horizontal-scroll",
    icon: <Mouse className="size-4" />,
    title: "Scroll horizontal",
    description: (
      <>
        Segure <kbd className={kbdClassName}>Ctrl</kbd> + scroll do mouse sobre
        a tabela ou use as setas na barra superior.
      </>
    ),
  },
  {
    id: "columns",
    icon: <Columns3 className="size-4" />,
    title: "Exibir e reordenar colunas",
    description:
      "Use o botão Colunas para ocultar/exibir campos ou arraste os títulos para mudar a ordem.",
  },
  {
    id: "pin",
    icon: <Pin className="size-4" />,
    title: "Fixar colunas",
    description:
      "Clique no ícone de pin em Colunas (ou botão direito no cabeçalho) para fixar à esquerda.",
  },
  {
    id: "resize",
    icon: <MoveHorizontal className="size-4" />,
    title: "Largura das colunas",
    description:
      "Arraste a borda direita do cabeçalho para ajustar ou dê duplo clique para restaurar.",
  },
  {
    id: "sort",
    icon: <ArrowUpDown className="size-4" />,
    title: "Ordenação",
    description: (
      <>
        Clique no título para ordenar. Segure{" "}
        <kbd className={kbdClassName}>Shift</kbd> para ordenar por múltiplas
        colunas.
      </>
    ),
  },
  {
    id: "density",
    icon: <Rows3 className="size-4" />,
    title: "Densidade",
    description:
      "Alterne entre Ultra compacta, Compacta e Confortável nos ícones do topo.",
  },
  {
    id: "context-and-reset",
    icon: <MousePointerClick className="size-4" />,
    title: "Menu rápido e padrão",
    description: (
      <>
        Clique com o botão direito na tabela para atalhos ou clique em{" "}
        <RotateCcw className="inline size-3 align-text-bottom text-foreground" />{" "}
        para restaurar o padrão.
      </>
    ),
  },
];

export function FlashTableHelpDialog({
  labels = DEFAULT_FLASH_TABLE_LABELS,
}: FlashTableHelpDialogProps) {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="iconSm"
              type="button"
              aria-label={labels.helpButtonTooltip}
            >
              <HelpCircle />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom">{labels.helpButtonTooltip}</TooltipContent>
      </Tooltip>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-base">
            {labels.helpModalTitle}
          </DialogTitle>
          <DialogDescription>{labels.helpModalDescription}</DialogDescription>
        </DialogHeader>

        <div className="divide-y divide-border rounded-md border border-border bg-card">
          {HELP_FEATURES.map((item) => (
            <div key={item.id} className="flex items-start gap-3 p-2.5">
              <div className="size-8 rounded-md bg-muted text-foreground flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0 space-y-0.5">
                <p className="text-xs font-semibold text-foreground leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
