package backend;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {

    Service service = new Service();
    
    @GetMapping(value = "/tasks")
    public ResponseEntity<List<Task>> getTasks(@RequestParam(value = "status", required = false) String status) {
        return service.getTasks(status);
    }

    @PostMapping(value = "/tasks")
    public ResponseEntity<String> createTask(@RequestBody Task task) {
        return service.createTask(task);
    }

    @PutMapping(value = "/tasks/{id}")
    public ResponseEntity<String> updateTask(@PathVariable String id) {
        return service.updateTask(id);
    }

    @DeleteMapping(value = "/tasks/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable String id) {
        return service.deleteTask(id);
    }
}
