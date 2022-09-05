var app = new Vue({
  el: "#app",
  data: {
    tasks: [],
    status: "read",
    newTask: {
      title: "Nome da tarefa",
      project: false,
      dueTo: "Insira a data",
      usuario: "Usuario",
    },
    updateTask: {
      title: false,
      project: false,
      dueTo: false,
      usuario: false,
    },
  },
  methods: {
    buscaNotas() {
      getTasks((tarefas) => {
        this.tasks = tarefas;
      });
    },
    mostraSecaoAdicionar() {
      this.status = "create";
    },
    criaNota() {
      const { title, project, dueTo, usuario } = this.newTask;
      createTask(title, project, dueTo, (data) => this.buscaNotas());
      this.status = "read";
    },
    deletaNota(id) {
      deleteTask(id, (data) => this.buscaNotas());
    },
    mostraSecaoAtualizar(id) {
      this.status = "create";
      getTask(id, (data) => (this.newTask = data));
    },
    // atualizaNota(id) {
    //   updateTask(id, (data) => (this.updateTask = data));
    //   this.status = "read";
    // },
  },
  created() {
    this.buscaNotas();
  },
});
