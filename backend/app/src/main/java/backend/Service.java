package backend;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Service {

    private Map<String, Task> tasks = new HashMap<>();

    // DONE
    public ResponseEntity<List<Task>> getTasks(String status) {
        List<Task> tasksList;
        if (status == null || status.isEmpty()) {
            System.out.println("Returning all tasks: " + tasks.size());
            tasksList = tasks.values().stream().toList();
        } else {
            System.out.println("Returning filtered tasks with status " + status);
            tasksList = tasks.values().stream().filter(task -> task.getStatus().toString().equals(status)).toList();
            System.out.println("Filtered tasks count: " + tasksList.size());
        }

        return ResponseEntity.status(HttpStatus.OK).body(tasksList);
    }

    // DONE
    public ResponseEntity<String> createTask(Task task) {
        if (task.getTitle() == null || task.getTitle().isEmpty()) {
            System.err.println("Title is required to create a task!");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Title is required!");
        }

        System.out.println("Creating task: " + task);
        tasks.put(task.getId(), task);
        System.out.println("Remaining tasks: " + tasks.size());
        return ResponseEntity.status(HttpStatus.CREATED).body("id: " + task.getId());
    }

    public ResponseEntity<String> updateTask(String id) {
        return ResponseEntity.status(HttpStatus.OK).body("Task updated!");
    }

    // DONE
    public ResponseEntity<String> deleteTask(String id) {
        if (id.toString() == ":id" || id.isEmpty() || id == null) {  // Really not sure why it is never going in here
            System.err.println("ID is required to delete a task!");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID is required!");
        }
        else if (!tasks.containsKey(id)) {
            System.err.println("Task with id " + id + " not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found!");
        }

        System.out.println("Deleting task with id: " + id);
        tasks.remove(id);
        System.out.println("Remaining tasks: " + tasks.size());
        return ResponseEntity.status(HttpStatus.OK).body("Task deleted!");
    }
}
