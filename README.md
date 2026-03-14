# Calculadora Web

Projeto desenvolvido em **HTML, CSS e JavaScript** que apresenta uma **calculadora interativa no navegador** para realizar cálculos matemáticos básicos, com suporte a temas e histórico.

A calculadora permite ao usuário realizar operações matemáticas organizadas em uma interface amigável, incluindo:

- cálculo de **operações básicas** (adição, subtração, multiplicação, divisão)
- **alternância de temas** claro/escuro
- **histórico de cálculos** persistido no navegador

O objetivo do projeto é praticar conceitos fundamentais de desenvolvimento web, como **funções JavaScript, manipulação do DOM, armazenamento local e responsividade**.

---

# Funcionalidades

## 1️ Cálculo de operações básicas

A calculadora permite realizar as seguintes operações matemáticas:

- Adição (+)
- Subtração (-)
- Multiplicação (*)
- Divisão (/)

Também suporta entrada decimal (.) e limpeza do display (C).

---

## 2️ Alternância de temas

É possível alternar entre:

- Tema escuro (padrão)
- Tema claro

O tema é alternado via botão com ícone, e a preferência é detectada automaticamente com base nas configurações do sistema.

---

## 3️ Histórico de cálculos

O sistema armazena e exibe:

- Lista de cálculos realizados (expressão = resultado)
- Persistência via localStorage do navegador
- Limpeza do histórico com botão dedicado

---

# Como o programa funciona

A calculadora utiliza uma **interface principal** com três seções principais:

1. Display de entrada/saída
2. Teclado numérico e de operadores
3. Histórico lateral

Cada botão possui **eventos de clique** que chamam funções JavaScript específicas.

A navegação acontece através de **cliques nos botões** ou entrada via teclado.

Também há um procedijmento para as **expressões inválidas**, ele exibe "Erro" no display caso a conta seja malformada/inválida.

---

# Estrutura do código

O projeto foi organizado utilizando **funções separadas para cada ação**, facilitando a manutenção e leitura do código.

Exemplos de funções implementadas:

- `appendToDisplay(input)` → adiciona caracteres ao display
- `clearDisplay()` → limpa o display
- `calculate()` → avalia a expressão e mostra resultado
- `toggleTheme()` → alterna entre temas claro/escuro
- `salvarHistorico(calculo)` → salva cálculo no localStorage
- `mostrarHistorico()` → renderiza lista de cálculos
- `limparHistorico()` → remove histórico do localStorage

---

# Tecnologias utilizadas

- Linguagens **HTML5, CSS e JavaScript**
- **Bootstrap 5.3.8** (via CDN) para ícones e componentes
- **Bootstrap Icons** para ícones do tema
- Interface baseada em **navegador web**

---

### Executar

Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).
-

**Nota**: Não requer compilação, pois é executado diretamente no navegador.

---

# Conceitos de programação aplicados

Este projeto utiliza diversos conceitos fundamentais de desenvolvimento web:

- Funções JavaScript
- Manipulação do DOM (Document Object Model)
- Event listeners e handlers
- Armazenamento local (localStorage)
- Estruturas condicionais (`if` / `else`)
- Estruturas de repetição (forEach)
- Layout responsivo com CSS Grid e Flexbox
- Media queries para dispositivos móveis
- Try/catch para tratamento de erros

---

# Objetivo do projeto

Este projeto foi desenvolvido como **exercício de desenvolvimento web** para praticar:

- lógica de programação em JavaScript
- organização de código em módulos
- construção de interfaces interativas
- aplicação de estilos responsivos
- manipulação de dados persistentes

---

# Possíveis melhorias futuras

- adicionar mais operações (raiz quadrada, potência, etc.)
- implementar teclado virtual completo
- adicionar animações e transições
- criar testes automatizados (Jest)
- otimizar performance para cálculos complexos
- adicionar modo científico com funções avançadas

---

Autor:
Projeto desenvolvido por *Vitor Henrique de Sousa*.
