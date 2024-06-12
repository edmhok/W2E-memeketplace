import type { Operation } from "@w2e/types";

export function neuronOperationCommand(operation: Operation): [] | [{ Configure: { operation: [] | [Operation] } }] {
  return [
    {
      Configure: {
        operation: [operation],
      },
    },
  ];
}
