"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { CellAction } from "./cell-action";
import { InvitationColumn } from "@/types/invitation-column";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<InvitationColumn>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold text-slate-800 dark:text-slate-50"
        >
          Num.
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "event_title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold text-slate-800 dark:text-slate-50"
        >
          Event Title
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "event_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold text-slate-800 dark:text-slate-50"
        >
          Event Date
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "theme",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold text-slate-800 dark:text-slate-50"
        >
          Theme
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold text-slate-800 dark:text-slate-50"
        >
          Status
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      return (
        <Badge
          variant="default"
          className={`${
            status === "Active"
              ? "bg-green-500 dark:text-white hover:bg-green-500 hover:text-white"
              : "bg-yellow-500 dark:text-white hover:bg-yellow-500 hover:text-white"
          } px-3 py-1 text-sm rounded-sm`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => {
      return (
        <span className="font-bold text-slate-800 dark:text-slate-50">
          Actions
        </span>
      );
    },
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
