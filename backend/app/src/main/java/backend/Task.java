package backend;

import java.util.UUID;

public class Task {
    private String id;
    private String title;
    private String description;
    private Status status;
    private long createdAt;

    public Task() {
        this.id = UUID.randomUUID().toString();
        this.status = Status.todo;
        this.createdAt = System.currentTimeMillis();
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(long createdAt) {
        this.createdAt = createdAt;
    }

    public String toString() {
        return "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", createdAt=" + createdAt;
    }
}
