// src/components/dashboard/CSVAnalyzer.tsx
"use client";

import { useState } from "react";
import Papa from "papaparse";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CSVAnalyzer() {
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (results: Papa.ParseResult<unknown>) => {
        const data = results.data as string[][];
        setHeaders(data[0]);
        setRows(data.slice(1));
      },
      skipEmptyLines: true,
    });
  };

  return (
    <div className="space-y-4 p-4 border bg-card rounded-md shadow-sm">
      <h2 className="text-xl font-semibold">📂 Upload CSV</h2>
      <Input type="file" accept=".csv" onChange={handleUpload} />
      {rows.length > 0 && (
        <div className="overflow-x-auto border rounded-md mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map((head, i) => (
                  <TableHead key={i}>{head}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.slice(0, 10).map((row, i) => (
                <TableRow key={i}>
                  {row.map((cell, j) => (
                    <TableCell key={j}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
