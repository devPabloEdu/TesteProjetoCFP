package br.teste.dto;

public class SubmissionsDTO {
    public Long Id;
    public String Title;
    public String Resume;
    public String AuthorName;
    public String AuthorEmail;

    public SubmissionsDTO(Long id, String title, String resume, String authorName, String authorEmail) {
        Id = id;
        Title = title;
        Resume = resume;
        AuthorName = authorName;
        AuthorEmail = authorEmail;
    }
}
