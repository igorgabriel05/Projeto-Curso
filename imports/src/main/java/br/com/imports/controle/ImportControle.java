package br.com.imports.controle;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.imports.dao.ImportDAO;
import br.com.imports.modelo.ImportModelo;

@RestController
@CrossOrigin("*")
public class ImportControle {
    @Autowired
    ImportDAO dao;

    @GetMapping
    public Iterable<ImportModelo> listar(){
        return dao.findAll();
    }

    public byte[] imagem(Integer id){
        Optional<ImportModelo> produto = dao.findById(id);
        return produto.orElse(null).getImg();
    }

    @PostMapping
    public ResponseEntity<ImportModelo> cadastrar(@RequestParam("img") MultipartFile img, @RequestParam("descricao") String descricao, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo) {
        try {
            byte[] imgBytes = img.getBytes();
            ImportModelo model = new ImportModelo();
            model.setImg(imgBytes);            
            model.setDescricao(descricao);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<ImportModelo>(dao.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping
    public ResponseEntity<ImportModelo> alterar(@RequestParam("id") Integer id, @RequestParam("img") MultipartFile img, @RequestParam("descricao") String descricao, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo) {
        try {
            byte[] imgBytes;
            ImportModelo model = new ImportModelo();
            if(img.isEmpty()){
                imgBytes = imagem(id);
            }else{
                imgBytes = img.getBytes();
            }
            model.setId(id);
            model.setImg(imgBytes);            
            model.setDescricao(descricao);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<ImportModelo>(dao.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Integer id){
        dao.deleteById(id);
    }
    
}
