package br.teste.controllers;

import br.teste.entity.Submission;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.awt.*;
@Path("/Submissoes")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SubmissionsController {

    @GET
    public Response listarSubmissoes(){
        return Response.ok("Deu certo mulekote").build();
    }
}
