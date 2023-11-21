import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatTable,MatTableDataSource,} from "@angular/material/table";

import { Tarefa } from "../../../../models/tarefa";

@Component({
  selector: "app-tarefa-listar",
  templateUrl: "./tarefa-listar.component.html",
  styleUrls: ["./tarefa-listar.component.css"],
})
export class TarefaListarComponent {
  colunasTabela: string[] = [
    "id",
    "Titulo",
    "Descricao",
    "deletar",
    "CriadoEm",
    "categoria",
  ];
  tarefas: Tarefa[] = [];

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar
  ) {
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          console.table(tarefas);
          this.tarefas = tarefas;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(tarefaid: number) {
    this.client
      .delete<Tarefa[]>(
        `https://localhost:7119/api/Produto/deletar/${tarefaid}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          this.tarefas = tarefas;
          this.snackBar.open(
            "Produto deletado com sucesso!!",
            "E-commerce",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}