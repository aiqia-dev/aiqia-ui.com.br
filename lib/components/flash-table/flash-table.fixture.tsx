import { Code } from "cosmos/Code";
import {
  Download,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash2,
  Truck,
} from "lucide-react";
import { useMemo } from "react";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";
import { Badge } from "../badge/badge.component";
import { Button } from "../button/button.component";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu/dropdown-menu.component";
import {
  type ColumnDef,
  FlashTable,
  type FlashTableColumnMeta,
  type FlashTableDensity,
} from "./flash-table.component";

interface ShipmentRow {
  id: string;
  code: string;
  origin: string;
  destination: string;
  driver: string;
  plate: string;
  status: "em_transito" | "entregue" | "pendente" | "atrasado";
  progress: number;
  weightKg: number;
  freightValue: number;
  updatedAt: string;
}

const BASE_MOCK_SHIPMENTS: ShipmentRow[] = [
  {
    id: "1",
    code: "VG-2026-001",
    origin: "São Paulo, SP",
    destination: "Curitiba, PR",
    driver: "Carlos Eduardo Silva",
    plate: "ABC-1D23",
    status: "em_transito",
    progress: 68,
    weightKg: 14500,
    freightValue: 4850.0,
    updatedAt: "10/11/2026 14:20",
  },
  {
    id: "2",
    code: "VG-2026-002",
    origin: "Campinas, SP",
    destination: "Belo Horizonte, MG",
    driver: "Marcos Vinícius Souza",
    plate: "FGH-4J56",
    status: "entregue",
    progress: 100,
    weightKg: 22100,
    freightValue: 7320.5,
    updatedAt: "10/11/2026 11:05",
  },
  {
    id: "3",
    code: "VG-2026-003",
    origin: "Joinville, SC",
    destination: "Porto Alegre, RS",
    driver: "Roberto Almeida",
    plate: "KLM-7N89",
    status: "atrasado",
    progress: 42,
    weightKg: 18300,
    freightValue: 5190.0,
    updatedAt: "10/11/2026 09:45",
  },
  {
    id: "4",
    code: "VG-2026-004",
    origin: "Goiânia, GO",
    destination: "Brasília, DF",
    driver: "Fernanda Costa",
    plate: "PQR-2S34",
    status: "pendente",
    progress: 5,
    weightKg: 9400,
    freightValue: 2650.0,
    updatedAt: "10/11/2026 15:00",
  },
  {
    id: "5",
    code: "VG-2026-005",
    origin: "Recife, PE",
    destination: "Salvador, BA",
    driver: "João Pedro Santos",
    plate: "TUV-5W67",
    status: "em_transito",
    progress: 81,
    weightKg: 27800,
    freightValue: 9410.75,
    updatedAt: "10/11/2026 13:12",
  },
  {
    id: "6",
    code: "VG-2026-006",
    origin: "Uberlândia, MG",
    destination: "Ribeirão Preto, SP",
    driver: "Lucas Ferreira",
    plate: "XYZ-9A12",
    status: "entregue",
    progress: 100,
    weightKg: 16200,
    freightValue: 3980.0,
    updatedAt: "09/11/2026 18:30",
  },
];

const CITIES = [
  "Fortaleza, CE",
  "Manaus, AM",
  "Florianópolis, SC",
  "Vitória, ES",
  "Cuiabá, MT",
  "Campo Grande, MS",
  "Santos, SP",
  "Londrina, PR",
  "Belém, PA",
  "Natal, RN",
  "Maceió, AL",
  "Teresina, PI",
  "Aracaju, SE",
  "São Luís, MA",
  "João Pessoa, PB",
  "Porto Velho, RO",
  "Caxias do Sul, RS",
  "Maringá, PR",
];

const DRIVERS = [
  "Ana Beatriz Lima",
  "Gabriel Menezes",
  "Rodrigo Rocha",
  "Patrícia Barbosa",
  "Juliana Moreira",
  "Marcelo Antunes",
  "Thiago Nogueira",
  "Camila Martins",
  "Diego Cardoso",
  "Larissa Ramos",
  "Felipe Azevedo",
  "Renata Vasconcelos",
];

const STATUS_CYCLE: ShipmentRow["status"][] = [
  "em_transito",
  "entregue",
  "atrasado",
  "pendente",
];

const GENERATED_SHIPMENTS: ShipmentRow[] = Array.from(
  { length: 34 },
  (_, i) => {
    const index = i + 7;
    const status = STATUS_CYCLE[i % STATUS_CYCLE.length];
    const progress =
      status === "entregue"
        ? 100
        : status === "pendente"
          ? (i * 3) % 15
          : status === "atrasado"
            ? 20 + ((i * 7) % 50)
            : 30 + ((i * 9) % 65);

    const origin = CITIES[i % CITIES.length];
    const destination = CITIES[(i + 5) % CITIES.length];
    const driver = DRIVERS[i % DRIVERS.length];
    const codeNum = String(index).padStart(3, "0");
    const plateLetters = `${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i * 2) % 26))}${String.fromCharCode(65 + ((i * 3) % 26))}`;
    const plateNum = `${(i * 3) % 9}${String.fromCharCode(65 + ((i + 4) % 26))}${String(((i * 7) + 12) % 99).padStart(2, "0")}`;

    return {
      id: String(index),
      code: `VG-2026-${codeNum}`,
      origin,
      destination,
      driver,
      plate: `${plateLetters}-${plateNum}`,
      status,
      progress,
      weightKg: 8000 + ((i * 1234) % 24000),
      freightValue: 2500 + ((i * 432.5) % 8500),
      updatedAt: `10/11/2026 ${String(8 + (i % 12)).padStart(2, "0")}:${String((i * 13) % 60).padStart(2, "0")}`,
    };
  }
);

const MOCK_SHIPMENTS: ShipmentRow[] = [
  ...BASE_MOCK_SHIPMENTS,
  ...GENERATED_SHIPMENTS,
];

const STATUS_LABELS: Record<
  ShipmentRow["status"],
  {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    color?: string;
  }
> = {
  em_transito: {
    label: "Em Trânsito",
    variant: "default",
    color: "bg-primary",
  },
  entregue: {
    label: "Entregue",
    variant: "secondary",
    color: "bg-emerald-500",
  },
  pendente: {
    label: "Pendente",
    variant: "outline",
  },
  atrasado: {
    label: "Atrasado",
    variant: "destructive",
    color: "bg-destructive",
  },
};

const Fixture = () => {
  const [density] = useFixtureSelect<FlashTableDensity>("density", {
    options: ["ultra-compact", "compact", "comfortable"],
    defaultValue: "compact",
  });
  const [striped] = useFixtureInput("striped", false);
  const [showSelectionColumn] = useFixtureInput("showSelectionColumn", true);
  const [enableExpandable] = useFixtureInput("enableExpandable", true);
  const [showRowProgress] = useFixtureInput("showRowProgress", false);
  const [showRowAccent] = useFixtureInput("showRowAccent", true);
  const [isLoading] = useFixtureInput("isLoading", false);

  const columns = useMemo<ColumnDef<ShipmentRow>[]>(
    () => [
      {
        accessorKey: "code",
        header: "Código",
        size: 130,
        meta: {
          label: "Código da Viagem",
          defaultPinned: "left",
        } satisfies FlashTableColumnMeta,
        cell: ({ row }) => (
          <span className="font-medium text-foreground inline-flex items-center gap-1.5">
            <Truck className="size-3.5 text-muted-foreground" />
            {row.original.code}
          </span>
        ),
        footer: () => "Total",
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 120,
        meta: {
          label: "Status",
          align: "center",
        } satisfies FlashTableColumnMeta,
        cell: ({ row }) => {
          const st = STATUS_LABELS[row.original.status];
          return <Badge variant={st.variant}>{st.label}</Badge>;
        },
      },
      {
        accessorKey: "origin",
        header: "Origem",
        size: 160,
        meta: { label: "Origem" } satisfies FlashTableColumnMeta,
      },
      {
        accessorKey: "destination",
        header: "Destino",
        size: 160,
        meta: { label: "Destino" } satisfies FlashTableColumnMeta,
      },
      {
        accessorKey: "driver",
        header: "Motorista",
        size: 180,
        meta: { label: "Motorista" } satisfies FlashTableColumnMeta,
      },
      {
        accessorKey: "plate",
        header: "Placa",
        size: 100,
        meta: {
          label: "Placa",
          align: "center",
          headerTooltip: "Placa do veículo principal da viagem",
        } satisfies FlashTableColumnMeta,
        cell: ({ row }) => (
          <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-muted">
            {row.original.plate}
          </span>
        ),
      },
      {
        accessorKey: "weightKg",
        header: "Peso (kg)",
        size: 120,
        meta: {
          label: "Peso (kg)",
          align: "right",
        } satisfies FlashTableColumnMeta,
        cell: ({ row }) =>
          `${row.original.weightKg.toLocaleString("pt-BR")} kg`,
        footer: () => {
          const sum = MOCK_SHIPMENTS.reduce((acc, r) => acc + r.weightKg, 0);
          return `${sum.toLocaleString("pt-BR")} kg`;
        },
      },
      {
        accessorKey: "freightValue",
        header: "Valor do Frete",
        size: 140,
        meta: {
          label: "Valor do Frete",
          align: "right",
        } satisfies FlashTableColumnMeta,
        cell: ({ row }) =>
          row.original.freightValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
        footer: () => {
          const sum = MOCK_SHIPMENTS.reduce(
            (acc, r) => acc + r.freightValue,
            0
          );
          return sum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
        },
      },
      {
        accessorKey: "updatedAt",
        header: "Atualizado em",
        size: 140,
        meta: { label: "Atualizado em" } satisfies FlashTableColumnMeta,
      },
      {
        id: "actions",
        header: "Ações",
        size: 70,
        enableSorting: false,
        enableResizing: false,
        meta: {
          label: "Ações",
          isActions: true,
          align: "right",
        } satisfies FlashTableColumnMeta,
        cell: () => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="iconSm"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="mr-2 size-4" />
                Visualizar detalhes
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil className="mr-2 size-4" />
                Editar viagem
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 size-4" />
                Cancelar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  );

  return (
    <div className="space-y-4">
      {/* Tabela Dinâmica FlashTable */}
      <FlashTable
        tableId="cosmos-shipments-table"
        columns={columns}
        data={MOCK_SHIPMENTS}
        totalRecords={MOCK_SHIPMENTS.length}
        density={density}
        striped={striped}
        showSelectionColumn={showSelectionColumn}
        isLoading={isLoading}
        getRowId={(row) => row.id}
        renderBulkActions={(selectedRows) => (
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              alert(
                `Exportando ${selectedRows.length} viagens: ${selectedRows.map((r) => r.code).join(", ")}`
              )
            }
          >
            <Download />
            Exportar selecionadas
          </Button>
        )}
        renderSubComponent={
          enableExpandable
            ? ({ data }) => (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-muted/30 p-3 rounded-md border border-border">
                <div>
                  <span className="text-muted-foreground block">
                    Rota completa
                  </span>
                  <strong className="text-foreground">
                    {data.origin} → {data.destination}
                  </strong>
                </div>
                <div>
                  <span className="text-muted-foreground block">
                    Motorista / Placa
                  </span>
                  <strong className="text-foreground">
                    {data.driver} ({data.plate})
                  </strong>
                </div>
                <div>
                  <span className="text-muted-foreground block">
                    Progresso da entrega
                  </span>
                  <strong className="text-foreground">
                    {data.progress}% concluído
                  </strong>
                </div>
              </div>
            )
            : undefined
        }
        rowAccentColor={
          showRowAccent
            ? (row) => STATUS_LABELS[row.status].color
            : undefined
        }
        renderRowProgress={
          showRowProgress
            ? (row) => ({
              percent: row.progress,
              color: STATUS_LABELS[row.status].color ?? "bg-primary",
            })
            : undefined
        }
      />

      <Code>{`
<FlashTable
  tableId="shipments-table"
  columns={columns}
  data={data}
  density="compact"
  showSelectionColumn={true}
  getRowId={(row) => row.id}
/>
      `}</Code>
    </div>
  );
};

export default Fixture;
