package backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.BufferedReader;
import java.io.FileReader;

public class Service {

    private Map<String, Task> tasks = new HashMap<>();

    
    public ResponseEntity<String> getTasks() {
        List<Task> tasks = loadTasks();
        System.out.println(tasks);

        return ResponseEntity.status(HttpStatus.OK).body("getTasks");
    }

    public ResponseEntity<String> getFilteredTasks() {
        return ResponseEntity.status(HttpStatus.OK).body("getFilteredTasks");
    }

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

    private List<Task> loadTasks() {
        List<Task> tasks = new ArrayList<>();

        try(BufferedReader br = new BufferedReader(new FileReader("Tasks.txt"));) {
            String line = br.readLine();
            ObjectMapper mapper = new ObjectMapper();
            Task data = mapper.readValue(line, Task.class);
            tasks.add(data);
        } catch (Exception e) {
            e.printStackTrace();
            return List.of();
        }

        return tasks;
    }
}
