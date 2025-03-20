package br.teste;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;

@Path("/produto")
public class ProductResource {

    @GET
    @Path("/nome")
    public String getNomeProduto(){
        return "Laptop";
    }

    @GET
    @Path("/nome/{id}")
    public String getNomeProdutoById(@PathParam("id") int id)
    {
        if (id == 1) return "laptop";
        return  "Não encontrado";
    }
}
