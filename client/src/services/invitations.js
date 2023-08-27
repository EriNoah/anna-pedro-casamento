import http from "./base-api/base-api";

const getInvitationByName = (referencePerson) =>
  http.get(`/invitations/${referencePerson}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });

const updateInvitation = (updatedInvitation, email) => {
  return http.put(
    `/invitations`,
    { updatedInvitation, email },
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    }
  );
};

const invitationsService = {
  getInvitationByName,
  updateInvitation,
};
export default invitationsService;
