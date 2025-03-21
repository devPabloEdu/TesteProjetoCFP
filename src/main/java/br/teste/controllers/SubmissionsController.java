package br.teste.controllers;

import br.teste.entity.SubmissionEntity;
import br.teste.services.SubmissionsService;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/Submissions")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SubmissionsController {

    private final SubmissionsService submissionsService;

    public SubmissionsController(SubmissionsService submissionsService) {
        this.submissionsService = submissionsService;
    }

    @Path("/createSubmission")
    @POST
    @Transactional
    public Response createSubmission(SubmissionEntity submissionEntity){
        return Response.ok(submissionsService.createSubmission(submissionEntity)).build();
    }

    @Path("/ListSubmissions")
    @GET
    public Response ListAllSubmissions(@QueryParam("page") @DefaultValue("0") Integer page, @QueryParam("pageSize") @DefaultValue("20") Integer pageSize){
        var submissionsList = submissionsService.ListAllSubmissions(page, pageSize);
        return Response.ok(submissionsList).build();
    }
}
