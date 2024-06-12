import { getPaginationAllData, getClaimEvents } from "@w2e/hooks";

export async function getAllClaimEvents() {
  const call = async (offset: number, limit: number) => {
    return await getClaimEvents(offset, limit);
  };

  return getPaginationAllData(call, 1000);
}
