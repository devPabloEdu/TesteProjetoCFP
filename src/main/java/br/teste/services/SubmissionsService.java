package br.teste.services;

import br.teste.entity.SubmissionEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.awt.*;


@ApplicationScoped
public class SubmissionsService {

    @Transactional
    //Criar uma nova submissão
    public SubmissionEntity createSubmission(SubmissionEntity submissionEntity){
        SubmissionEntity.persist(submissionEntity);
        return submissionEntity;
    }
}
