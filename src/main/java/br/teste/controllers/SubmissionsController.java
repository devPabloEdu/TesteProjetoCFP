package br.teste.controllers;

import br.teste.entity.SubmissionEntity;
import br.teste.services.SubmissionsService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/Submissoes")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SubmissionsController {

    private final SubmissionsService submissionsService;

    public SubmissionsController(SubmissionsService submissionsService) {
        this.submissionsService = submissionsService;
    }
}
