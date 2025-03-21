package br.teste.services;

import br.teste.entity.SubmissionEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;

import static io.quarkus.hibernate.orm.panache.PanacheEntityBase.findById;


@ApplicationScoped
public class SubmissionsService {

    @Transactional
    //Criar uma nova submissão
    public SubmissionEntity createSubmission(SubmissionEntity submissionEntity){
        SubmissionEntity.persist(submissionEntity);
        return submissionEntity;
    }

    //Listar todas as submissões
    public List<SubmissionEntity> ListAllSubmissions(Integer page, Integer pageSize) {
        return SubmissionEntity.findAll()
                .page(page, pageSize)
                .list();
    }

    //Deletar uma submissão buscando pelo Id
    @Transactional
    public void DeleteSubmission(Long Id){
        var RemovedSubmission = SubmissionEntity.findById(Id);
        RemovedSubmission.delete();
    }
}
