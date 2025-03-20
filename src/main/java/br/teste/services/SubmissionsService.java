package br.teste.services;

import br.teste.entity.SubmissionEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

@ApplicationScoped
@Transactional
public class SubmissionsService {

    //Criar uma nova submissão
    public SubmissionEntity createSubmission(SubmissionEntity submissionEntity){
        SubmissionEntity.persist(submissionEntity);
        return submissionEntity;
    }
}
