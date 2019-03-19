package com.example.demo.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name="tasks")
public class Task {

  @Id
  @GeneratedValue
  @Column(name="id")
  private Long id;

  @Column(name="task")
  private String task;

  @Column(name="author")
  private String author;

  public Task() {
    super();
  }
  public Task(String task, String author) {
    super();
    this.task = task;
    this.author = author;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getTask() {
    return task;
  }

  public void setTask(String task) {
    this.task = task;
  }

  public Long getId() {
    return id;
  }

}
