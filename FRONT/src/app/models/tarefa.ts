import { Categoria } from "./categoria"

export interface Tarefa {
    TarefaId?: number;
    Titulo: string;
    Descricao: string;
    Categoria?: Categoria;
    categoriaId: number;
    }