package backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    @RequestMapping(value = "/example", method = RequestMethod.GET)
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
