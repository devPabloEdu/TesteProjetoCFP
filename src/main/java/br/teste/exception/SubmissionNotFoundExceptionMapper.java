package br.teste.exception;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class SubmissionNotFoundExceptionMapper implements ExceptionMapper<SubmissionNotFoundException> {
    @Override
    public Response toResponse(SubmissionNotFoundException e) {
        return Response.status(Response.Status.NOT_FOUND.getStatusCode(), "Submission not found").build();
    }
}
