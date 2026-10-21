import type { Product } from "@data/products";

export function SpecsTable({ specs }: { specs: Product["specs"] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full text-left text-sm">
        <tbody>
          {specs.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              <th className="w-2/5 px-4 py-3 font-medium text-slate-500">{row.label}</th>
              <td className="px-4 py-3 font-medium text-slate-900">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
