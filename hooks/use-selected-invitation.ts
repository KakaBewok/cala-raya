import { useCallback } from "react";

export function useSelectedInvitation() {
  const getInvitationId = useCallback(() => {
    const id = localStorage.getItem("selectedInvitationId");
    return id ? parseInt(id) : null;
  }, []);

  const setInvitationId = useCallback((id: number) =>
    localStorage.setItem("selectedInvitationId", id.toString()), []);

  const removeInvitationId = useCallback(() =>
    localStorage.removeItem("selectedInvitationId"), []);

  return { getInvitationId, setInvitationId, removeInvitationId };
}
