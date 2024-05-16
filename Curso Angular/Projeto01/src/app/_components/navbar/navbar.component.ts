import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

// ngOnInit: Faz parte do ciclo de vida do componente. Uma prática comum é usar ele para inicialização da lógica do componente. Quando o ngOnInit() é chamado pelo framework, isso indica que foi concluída a inicialização do componente, e dentro do ngOnInit podemos incluir então lógicas, regras e chamar outras funções que temos em nosso componente
export class NavbarComponent implements OnInit{ ;
  ngOnInit(): void {
      console.log("navbar iniciouprojeto01")
  }
}

