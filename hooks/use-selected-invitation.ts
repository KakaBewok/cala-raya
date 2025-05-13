export function useSelectedInvitation() {
  const getInvitationId = () => {
    const id = localStorage.getItem("selectedInvitationId");
    return id ? parseInt(id) : null;
  };
  const setInvitationId = (id: number) =>
    localStorage.setItem("selectedInvitationId", id.toString());
  const removeInvitationId = () =>
    localStorage.removeItem("selectedInvitationId");

  return { getInvitationId, setInvitationId, removeInvitationId };
}
