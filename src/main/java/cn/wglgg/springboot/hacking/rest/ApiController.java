package cn.wglgg.springboot.hacking.rest;

import cn.wglgg.springboot.hacking.dao.RoleDao;
import cn.wglgg.springboot.hacking.eneity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ApiController {

    @Autowired
    private RoleDao roleDao;

    @GetMapping("/roles")
    public List<Role> getRoles(){
        return roleDao.selectAll();
    }
}
