package br.teste.exception;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class SubmissionNullExceptionMapper implements ExceptionMapper<SubmissionNullException> {
    @Override
    public Response toResponse(SubmissionNullException e) {
        return Response.status(Response.Status.BAD_REQUEST.getStatusCode(), "Submission not to be created").build();
    }
}
