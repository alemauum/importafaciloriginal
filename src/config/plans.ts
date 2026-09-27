// Central pricing map — edit values here to change amounts across the app

export type PlanId = "pdf" | "mensal" | "trimestral";

export interface Plan {
  id: PlanId;
  name: string;
  price: number; // BRL
  period: string;
  description: string;
  highlight?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "pdf",
    name: "Minicurso PDF + Desafios",
    price: 27.9,
    period: "pagamento único",
    description: "Material prático em PDF com desafios para dar o primeiro passo.",
  },
  {
    id: "mensal",
    name: "Plano Mensal",
    price: 97.9,
    period: "/mês",
    description: "Acesso completo ao ecossistema, ferramentas e suporte por 30 dias.",
  },
  {
    id: "trimestral",
    name: "Plano Trimestral",
    price: 227.9,
    period: "/3 meses",
    description: "Acesso completo por 3 meses com melhor custo-benefício para consolidar seus resultados.",
    highlight: true,
  },
];

export const getPlan = (id: PlanId): Plan =>
  PLANS.find((p) => p.id === id) ?? PLANS[0];
