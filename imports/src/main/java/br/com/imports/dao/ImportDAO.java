package br.com.imports.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.imports.modelo.ImportModelo;

public interface ImportDAO extends CrudRepository<ImportModelo, Integer> {
    
}
