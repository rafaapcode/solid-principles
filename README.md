# SOLID - Principles

## Objetivo

- Este repositório esta sendo usado para estudo sobre os princípios de SOLID

### O que é o SOLID

- São 5 princípios que nos ajudam a manter o código do nosso limpo , flexível e de fácil manutenabilidade.

#### Single Responsabilitie Principle ( SRP )

- O Princípio de Responsabilidade Única nos diz que uma classe deve ter somente uma única responsabilidade, ou seja, que os métodos e funcionalidades dela devem fazer sentido estar nela.
- Uma dica para verificar se os métodos estão coesos com a classe ou não é verificar se o método está usando algum atributo da classe.

#### Open/Close Principle

- Nos diz que a nossa classe deve estar aberta para extensão e fechada para modificação.
- Basicamente quer dizer que não devemos ficar mexendo no código fonte a todo momento. Uma das maneiras de evitarmos isso é criar métodos com parâmetro , porém isso pode acarretar em outros problemas , pois o código irá quebrar em todos os outros locais em que o método estiver sendo utilizado.
- Outra maneira é usando o DESIGN PATTER STRATEGY, ele cria uma classe a parte que irá implementar todos os algoritmos que vamos utilizar, assim passamos essa classe como um injeção de dependência para a nossa classe principal, dessa maneira se precisarmos mudar algo na lógica da função , não precisamos mexer direto no código dela , simplesmente mudamos a lógica do algoritmo injetado.

#### Liskov Substitution Principle

- Esse princípio nos diz que todas as subclasses precisam ser substituídos por suas classes bases.
- Toda classe que herda de uma classe base deve ser uma classe base. Isso quer dizer que temos um classe CARRO e temos outras classes que herdam de CARRO então essas classes devem ser um carro. Resumindo todos os métodos que serão utilizados de subclasses devem se comportar como eles se comportam na classe base.

#### Interface Segregation Principle

- Classes não devem ser forçadas a implementarem interfaces que não utilizam.
- Uma classe que não implementa a inteface por completo está quebrando esse princípio. As classes devem implementar as interfaces por completo.

#### Dependency Inversion Principle

- Módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações.
- As nossas classes não devem depender de classes concretas e sim de abstrações, ou seja, de interfaces.
